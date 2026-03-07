# Fluxo de Assinatura: Landing Page até Pagamento

> Documento que define o fluxo do usuário desde a escolha de um plano na landing page até a confirmação de pagamento e ativação do acesso, garantindo que o sistema reconheça o pagamento e o usuário não fique sem acesso.

## 1. Visão Geral do Fluxo

```mermaid
flowchart LR
  Landing[LandingPage] --> CTA[CTA Plano]
  CTA --> Auth{Logado?}
  Auth -->|Nao| Login[Login/Cadastro]
  Auth -->|Sim| Planos[/planos]
  Login --> Planos

  Planos --> Checkout[createCheckoutSession]
  Checkout --> Stripe[Stripe Checkout]
  Stripe -->|success_url| Success[/planos?success=1]
  Stripe -->|Webhook| Extension[Extensao Stripe]
  Extension --> Firestore[customers/uid/subscriptions]
  Firestore --> Trigger[syncStripeSubscription]
  Trigger --> Org[Org.subscription atualizada]
  Org --> Acesso[Acesso Liberado]
  Success --> Acesso
```

## 2. Passo a Passo Detalhado

### 2.1. Escolha do Plano na Landing Page

- Usuário clica em CTA ("Começar Agora", "Assinar Agora", etc.) em um dos cards de plano na [PricingMatrix](src/components/landing/PricingMatrix.tsx).
- Se **não logado**: redireciona para `/login?plan={planKey}` (basic, pro, proMax, proMaxAi).
- Se **logado**: redireciona para `/planos?plan={planKey}` (via `onSelectPlan` na LandingPage).

### 2.2. Autenticação (se necessário)

- Na página de Login, o usuário faz login ou cadastro.
- Após autenticação bem-sucedida, se `plan` estiver na URL, redireciona para `/planos?plan={planKey}`.
- Referência: [Login.tsx](src/pages/Login.tsx) linhas 128-134.

### 2.3. Criação da Sessão de Checkout

- Em [SubscriptionPlans.tsx](src/pages/Planos/SubscriptionPlans.tsx), um `useEffect` detecta `?plan=xxx` na URL.
- Chama `createCheckoutSession(uid, planKey, isAnnual)` via [StripeService](src/services/StripeService.ts).
- O serviço usa Firestore (products/prices) ou a callable `createCheckoutSessionCallable` para obter o preço.
- Cria documento em `customers/{uid}/checkout_sessions` com `price`, `success_url`, `cancel_url`.
- A **Extensão Stripe** (Run Payments with Stripe) escuta essa coleção, cria a Checkout Session na Stripe e grava a URL no documento.
- O frontend aguarda a URL via `waitForCheckoutUrl` e redireciona o navegador para o Stripe Checkout.

### 2.4. Pagamento na Stripe

- Usuário preenche dados de cartão/PIX na página segura da Stripe.
- Stripe processa o pagamento e dispara webhooks.

### 2.5. Confirmação e Sincronização (Fonte da Verdade)

- A **Extensão Stripe** recebe os webhooks e grava em `customers/{uid}/subscriptions/{subscriptionId}`.
- O trigger [syncStripeSubscription](functions/src/triggers/stripeTriggers.ts) dispara em `onWrite` dessa subcoleção.
- O trigger atualiza todas as organizações do usuário (owner ou membro) com:
  - `subscription.status` (active, trialing, past_due, canceled)
  - `subscription.planId` (BASIC, PRO, PRO_MAX, PRO_MAX_IA)
  - `subscription.limits` e `subscription.currentUsage`
  - `subscription.currentPeriodEnd`, `subscription.trialEndsAt`

### 2.6. Redirecionamento Pós-Pagamento

- Stripe redireciona para `success_url`: `/planos?success=1`.
- A página exibe mensagem de sucesso e, quando aplicável, faz polling para verificar se a assinatura já foi sincronizada na organização.
- Botão "Ir para o sistema" leva o usuário ao dashboard/agenda.

## 3. Modelo de Dados de Assinatura

### 3.1. Estrutura em `organizations/{orgId}`

```typescript
subscription: {
  status: 'active' | 'trialing' | 'past_due' | 'canceled';
  planId: 'BASIC' | 'PRO' | 'PRO_MAX' | 'PRO_MAX_IA';
  stripeSubscriptionId?: string;
  currentPeriodEnd: Timestamp | null;
  trialEndsAt: Timestamp | null;
  limits: { patients: number; aiCredits: number; whatsappReminders: number };
  currentUsage: { patients: number; aiCredits: number; whatsappReminders: number };
  updatedAt: Timestamp;
}
```

### 3.2. Estados e Acesso

| status     | hasActiveSubscription | Acesso ao sistema      |
|-----------|------------------------|------------------------|
| active    | true                   | Completo               |
| trialing  | true                   | Completo (dentro do prazo) |
| past_due  | false                  | Modo leitura / restrito |
| canceled  | false                  | Modo leitura / restrito |

### 3.3. Limites por Plano (PLAN_LIMITS em stripeTriggers.ts)

| Plano      | Pacientes | Créditos IA | WhatsApp |
|------------|-----------|-------------|----------|
| BASIC      | 50        | 0           | 0        |
| PRO        | 200       | 15          | 1000     |
| PRO_MAX    | 500       | 50          | -1       |
| PRO_MAX_IA | -1        | -1          | -1       |

## 4. Garantias para Evitar Usuário Sem Acesso

### 4.1. Fonte de Verdade = Extensão + Trigger

- O sistema **nunca** confia apenas no parâmetro `success=1` da URL.
- A assinatura é atualizada exclusivamente quando a Extensão grava em `customers/{uid}/subscriptions` e o trigger `syncStripeSubscription` propaga para as organizações.

### 4.2. Polling na Página de Sucesso

- Quando `success=1` na URL, a página pode fazer polling em `organization.subscription` (via `useSubscriptionData`) por até 60 segundos.
- Se `status` passar a `active` ou `trialing`, exibe confirmação e botão para ir ao sistema.
- Se após o timeout ainda não houver assinatura, exibe mensagem: "Aguarde alguns instantes. Seu acesso será ativado em breve. Você pode acessar o sistema e verificar em Configurações > Gestão e Assinatura."

### 4.3. Grace Period (Futuro)

- Ao chegar em `currentPeriodEnd`, considerar um período de carência (ex: 24–72h) antes de restringir acesso, para cobranças em processamento.

### 4.4. Fallback: repairSubscriptionData

- Para casos em que a Extensão não grava corretamente (ex: Payment Link externo), a callable `repairSubscriptionData` restaura `limits` e `currentUsage` a partir dos dados da Stripe.

## 5. Riscos e Mitigação

| Risco                          | Mitigação                                                                 |
|--------------------------------|---------------------------------------------------------------------------|
| Atraso no webhook da Extensão  | Polling na página de sucesso; mensagem de "aguarde" se timeout           |
| Usuário sem org (novo)        | Onboarding cria org; considerar sync de subscription ao criar org        |
| Divergência Stripe vs Firestore| `repairSubscriptionData`; reconciliação periódica (futuro)                |

## 6. Arquivos Principais

- **Landing/Planos**: [PricingMatrix.tsx](src/components/landing/PricingMatrix.tsx), [SubscriptionPlans.tsx](src/pages/Planos/SubscriptionPlans.tsx)
- **Checkout**: [StripeService.ts](src/services/StripeService.ts), [createCheckoutSession.ts](functions/src/callable/createCheckoutSession.ts)
- **Sincronização**: [stripeTriggers.ts](functions/src/triggers/stripeTriggers.ts)
- **Acesso**: [useSubscriptionData.ts](src/hooks/useSubscriptionData.ts), [FeatureGuard.tsx](src/components/common/FeatureGuard.tsx)
