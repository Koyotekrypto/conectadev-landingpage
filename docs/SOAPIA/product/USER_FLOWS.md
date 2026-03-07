# 🗺️ Med.Health — Fluxos de Usuário

> Documento de referência para a equipe de desenvolvimento.
> Contém os diagramas de fluxo de todas as jornadas críticas, organizados por **perfil de acesso**.

---

## Índice

1. [Fluxos Compartilhados](#1-fluxos-compartilhados-todos-os-perfis)
2. [Médico/ADM (Administrador)](#2-médicoadm-administrador)
3. [Médico (Atendimento)](#3-médico-atendimento)
4. [Secretária](#4-secretária)

---

## 1. Fluxos Compartilhados (Todos os perfis)

### 1.1. Autenticação & Onboarding

```mermaid
flowchart TD
    A[Landing Page] --> B{Tem conta?}
    B --> |Sim| C[Login - Email/Senha]
    B --> |Não| D[Cadastro]
    D --> E[Criar Conta - Firebase Auth]
    E --> F[Onboarding Wizard - 5 passos]
    C --> G{Onboarding Completo?}
    C --> FORGOT[Esqueceu a senha?]
    FORGOT --> EMAIL[Informar e-mail]
    EMAIL --> LINK[Receber link no e-mail]
    LINK --> RESET[Redefinir senha]
    RESET --> C
    G --> |Não| F
    G --> |Sim| H[Home - Tela Configurada]

    F --> F1["1. Perfil Profissional
    (nome, CRM, especialidade, foto)"]
    F1 --> F2["2. Configurar Clínica
    (nome, CNPJ, logo, endereço)"]
    F2 --> F3["3. Preferências de Notificação
    (email, push, WhatsApp)"]
    F3 --> F4["4. Layout de Impressão
    (cabeçalho, rodapé, logo)"]
    F4 --> F5["5. Configurar Agenda
    (horários, intervalos, dias úteis)"]
    F5 --> H

    style A fill:#1a1a2e,stroke:#00d4ff,color:#fff
    style F fill:#16213e,stroke:#0f3460,color:#fff
    style H fill:#0a3d62,stroke:#00d4ff,color:#fff
```

**Recuperação e alteração de senha:** Na tela de Login, o link "Esqueceu a senha?" leva ao fluxo acima (informar e-mail → receber link → redefinir senha → voltar ao Login). Usuário já logado pode alterar senha em **Configurações > Preferências de Usuário** (seção Dados e Segurança); essa opção aparece apenas para contas com provedor e-mail/senha (UC-018c).

### 1.2. Navegação Principal (Menu Lateral)

```mermaid
flowchart LR
    Menu[Menu Lateral] --> Dashboard[Dashboard]
    Menu --> CaseAI[🤖 Case IA]
    Menu --> Agenda[📅 Agenda]
    Menu --> Pacientes[👥 Pacientes]
    Menu --> Atendimentos[🩺 Atendimentos]
    Menu --> Tarefas[✅ Tarefas]
    Menu --> Medicacoes[💉 Medicação e injetáveis]
    Menu --> Memed[Memed]
    Menu --> Modelos[📄 Modelos]
    Menu --> MinhasClinicas[Minhas Clínicas]
    Menu --> Relatorios[📊 Relatórios]
    Menu --> Financeiro[💰 Financeiro]
    Menu --> Config[⚙️ Configurações]

    style Menu fill:#1a1a2e,stroke:#00d4ff,color:#fff
```

**Minhas Clínicas** agrupa: Assinatura, Profissionais da Saúde, Outros Profissionais, Minhas Unidades, Perfil da Unidade. **Configurações** agrupa as abas (Dados da Clínica, Preferências de Usuário, Agenda, Layout de Impressão, etc.) e a rota Automação (IA).

### 1.3. Convite e aceite de profissional

> Dono ou admin convida; o convidado recebe o e-mail, abre o link, cria conta (ou faz login) e passa a acessar o app com menu filtrado pelo role. Ver [CASO_DE_USO_SECRETARIA_CONVITE.md](../operations/CASO_DE_USO_SECRETARIA_CONVITE.md).

```mermaid
flowchart TD
    DONO[Dono/Admin - Minhas Clínicas] --> ENVIA[Convidar Profissional]
    ENVIA --> PREENCH[E-mail, nome, função, permissões]
    PREENCH --> EMAIL[Sistema envia e-mail com link]
    EMAIL --> CONV[Convidado recebe e-mail]
    CONV --> LINK[Clica no link /invite ou /invite/accept/:id]
    LINK --> PAG[Página de convite: nome da clínica, função]
    PAG --> CRIAR[Criar conta e aceitar convite]
    CRIAR --> CAD[Cadastro: nome, senha - e-mail já preenchido]
    CAD --> ACEITA[Sistema aceita convite automaticamente]
    ACEITA --> ORG[Usuário associado à organização]
    ORG --> MENU[Menu e rotas filtrados por role]
    MENU --> HOME[Entra no app - ex. Agenda]
```

---

## 2. Médico/ADM (Administrador)

> O Médico/ADM possui **acesso total** ao sistema. Além de atender pacientes, ele gerencia a clínica, equipe, finanças e configurações.

### 2.1. Gestão Financeira Completa

```mermaid
flowchart TD
    FIN[💰 Financeiro] --> DASH[Dashboard Financeiro]
    DASH --> R[Receitas]
    DASH --> D[Despesas]
    DASH --> REC[Reconciliação]
    DASH --> ORC[Orçamentos]
    DASH --> PROD[Produtos/Serviços]

    R --> R1[Registrar Receita]
    R1 --> R2[Categoria + Valor + Paciente]
    R2 --> R3[Gerar Recibo PDF]

    D --> D1[Registrar Despesa]
    D1 --> D2[Categoria + Valor + Fornecedor]

    REC --> REC1[Listar Consultas do Dia]
    REC1 --> REC2{Pagamento Recebido?}
    REC2 --> |Sim| REC3[Confirmar Pagamento]
    REC2 --> |Cortesia| REC4[Marcar como Cortesia]
    REC2 --> |Não| REC5[Pendente]

    ORC --> ORC1[Criar Orçamento]
    ORC1 --> ORC2[Selecionar Paciente + Itens]
    ORC2 --> ORC3[Gerar PDF do Orçamento]
    ORC3 --> ORC4[Enviar ao Paciente]

    PROD --> PROD1[Cadastrar Produto/Serviço]
    PROD1 --> PROD2[Definir Preço + Categoria]

    style FIN fill:#1a1a2e,stroke:#e6b800,color:#fff
    style DASH fill:#16213e,stroke:#e6b800,color:#fff
```

### 2.2. Relatórios e BI

```mermaid
flowchart TD
    REL[📊 Relatórios] --> OVW[Dashboard Consolidado]
    REL --> RA[Relatório de Agendamentos]
    REL --> RF[Relatório Financeiro]
    REL --> RP[Relatório de Pacientes]
    REL --> RAT[Relatório de Atendimentos]
    REL --> RANIV[Aniversariantes]

    RA --> RA1[Filtrar por Período]
    RA1 --> RA2[Visualizar Gráficos]
    RA2 --> RA3[Exportar PDF/CSV]

    RF --> RF1[Receitas vs Despesas]
    RF1 --> RF2[Gráfico Mensal/Anual]
    RF2 --> RF3[Exportar Relatório]

    RAT --> RAT1[Produtividade por Médico]
    RAT1 --> RAT2[Tempo Médio de Consulta]
    RAT2 --> RAT3[Volume de Atendimentos]

    style REL fill:#1a1a2e,stroke:#00d4ff,color:#fff
```

### 2.3. Configurações da Clínica

As abas abaixo refletem o menu lateral em **Configurações** (secretária vê apenas Preferências de Usuário).

```mermaid
flowchart TD
    CFG[⚙️ Configurações] --> CC[Dados da Clínica]
    CFG --> CPREF[Preferências de Usuário]
    CFG --> CAG[Configurações de Agenda]
    CFG --> AUTO[Automação IA]
    CFG --> CL[Layout de Impressão]
    CFG --> CSITE[Configurações de Site]
    CFG --> CPERS[Personalizar Atendimento]
    CFG --> CN[Notificações]
    CFG --> CDOC[Modelos de Documentos]

    CC --> CC1[Nome / CNPJ / Endereço]
    CC1 --> CC2[Contatos / Logo / Upload]
    CC2 --> CC4[Workflow de Pagamento]
    CC4 --> CC4a{Pre-paid ou Post-paid?}
    CC4a --> |Pre-paid| CC5[Paciente paga antes da consulta]
    CC4a --> |Post-paid| CC6[Paciente paga ao sair]

    CPREF --> CPREF1[Dados do Usuário / Foto]
    CPREF1 --> CPREF2[Dados e Segurança]
    CPREF2 --> CPREF2a[Alteração de Senha - UC-018c]
    CPREF --> CPREF3[Tela Inicial / Receitas / Compartilhamento / Backup]

    CAG --> CAG1[Horários / Intervalos / Dias úteis]
    AUTO --> AUTO1["/configuracoes/automacoes - PRO MAX IA"]
    CL --> CL1[Template / Cabeçalho / Rodapé]
    CN --> CN1[E-mail / Push / Preferências]
    CDOC --> CDOC1[Modelos padrão da clínica]

    style CFG fill:#1a1a2e,stroke:#7b68ee,color:#fff
```

### 2.4. Gestão de Modelos e Templates

```mermaid
flowchart TD
    MOD[📄 Modelos] --> ANAM[Anamneses]
    MOD --> LGPD[Termos LGPD]
    MOD --> LAUD[Laudos]
    MOD --> PRESC[Prescrições]
    MOD --> EXAM[Exames]

    ANAM --> ANAM1[Visualizar Templates do Sistema]
    ANAM1 --> ANAM2{Ação}
    ANAM2 --> |Editar| ANAM3[Customizar Campos]
    ANAM2 --> |Duplicar| ANAM4[Criar Cópia Pessoal]
    ANAM2 --> |Restaurar| ANAM5["Restaurar Padrões"]

    LGPD --> LGPD1[Termo de Consentimento]
    LGPD1 --> LGPD2[Preencher com Dados do Paciente]
    LGPD2 --> LGPD3[Gerar PDF para Assinatura]
    LGPD3 --> LGPD4[Arquivar no GCS]

    style MOD fill:#1a1a2e,stroke:#ff6b6b,color:#fff
```

### 2.5. Gestão de Tarefas e Automação

```mermaid
flowchart TD
    TASK[✅ Tarefas] --> TL[Lista de Tarefas]
    TL --> TF{Filtrar}
    TF --> TF1[Por Status]
    TF --> TF2[Por Prioridade]
    TF --> TF3[Por Categoria]
    TF --> TF4[Por Responsável]

    TL --> TC[Criar Nova Tarefa]
    TC --> TC1[Título + Descrição]
    TC1 --> TC2[Categoria + Prioridade]
    TC2 --> TC3[Vincular Paciente/Agendamento]
    TC3 --> TC4[Atribuir Responsável]
    TC4 --> TC5["Atribuir Role
    (Médico / Secretária / Equipe)"]
    TC5 --> TC6[Definir Prazo]
    TC6 --> TC7[Salvar]

    TL --> AUTO[Automações]
    AUTO --> AUTO1[Confirmação de Agendamento - D-1]
    AUTO --> AUTO2[Follow-up de Exames +15d]
    AUTO --> AUTO3[Preparação de Retorno - D-7]
    AUTO --> AUTO4[Checkout após Consulta]

    style TASK fill:#1a1a2e,stroke:#2ecc71,color:#fff
```

### 2.6. Gestão de Assinatura, Página /planos e Cupons

```mermaid
flowchart TD
    subgraph PlanosApp [/planos — Fluxo Oficial/]
        P0[Landing ou CTA interno] --> P1[/planos]
        P1 --> P2{URL tem ?plan=xxx?}
        P2 -->|Sim| P3{Usuário logado?}
        P2 -->|Não| P6[Usuário escolhe plano na matriz]

        P3 -->|Não| P4[Redirect /login?plan=xxx]
        P4 --> P5[Login / Onboarding]
        P5 --> P1b[/planos?plan=xxx (retorno)]

        P3 -->|Sim| P7[createCheckoutSession(uid, planKey)]
        P6 --> P7

        P7 --> P8[Stripe Checkout com plano pré-selecionado]
        P8 --> P9[Extensão Stripe grava customers/uid/subscriptions]
        P9 --> P10[Trigger syncStripeSubscription]
        P10 --> P11[Org atualizada com limits + currentUsage]
    end

    subgraph UpgradeGestao [Gestão e Assinatura]
        G1[Configurações > Gestão e Assinatura] --> G2{planId === PRO_MAX_IA
        e status = active/trialing?}
        G2 -->|Sim| G3[Ocultar botão "Fazer Upgrade"]
        G2 -->|Não| G4[Botão "Fazer Upgrade" leva a /planos]
        G1 --> G5[Botão "Gerenciar Plano" abre portal Stripe]
    end

    subgraph CupomLink [Assinatura via Link/Cupom Externo]
        B1[Usuário recebe Payment Link com cupom] --> B2[Checkout Stripe direto (fora do app)]
        B2 --> B3[Stripe cria assinatura]
        B3 --> B4{Extensão grava em customers/{uid}?}
        B4 -->|"Path = firebaseUid"| B5[Trigger dispara - dados completos]
        B4 -->|"Outro path / não grava"| B6[Trigger NÃO dispara]
        B6 --> B7[Org pode ficar sem limits/currentUsage]
        B7 --> B8[Banner amarelo: Dados incompletos]
        B8 --> B9[Usuário clica "Reparar dados"]
        B9 --> B10[repairSubscriptionData garante limits + currentUsage]
    end
```

**Boas práticas e prevenção de problemas com cupom:**
- **Canal recomendado**: Sempre direcionar campanhas e cupons para o fluxo oficial (`/planos?plan=xxx`), garantindo login e `createCheckoutSession` pelo app.
- **Após login ou onboarding**: Se houver `?plan=xxx`, o usuário é redirecionado para `/planos?plan=xxx`, que dispara o checkout com o plano correto.
- **Payment Link direto**: Pode não gravar em `customers/{firebaseUid}/subscriptions`; nesses casos, usar o banner de "Dados incompletos" e o botão "Reparar dados" ou acionar o suporte.
- **Função de reparo**: `repairSubscriptionData` continua como fallback para restaurar `limits` e `currentUsage`, inclusive para usuários com cupons PRO MAX + IA.

**Fluxo completo Landing → Pagamento:** Ver [FLUXO_ASSINATURA_LANDING_PAGAMENTO.md](./FLUXO_ASSINATURA_LANDING_PAGAMENTO.md) para documentação detalhada, modelo de dados e garantias contra perda de acesso.

**Checkout e preços Stripe:**
- Se a sincronização Firestore (products/prices) não tiver os preços, o app usa a callable `createCheckoutSessionCallable`, que obtém os preços via API Stripe.
- Requer `STRIPE_SECRET_KEY` configurada: `firebase functions:config:set stripe.secret="sk_live_xxx"` ou variável de ambiente no deploy.
- **IDs de produto (v1.23.0):** PRO `prod_U3atEaBlT74UZR`, PRO MAX + IA `prod_U3b1lN1Z2gAcqC` (l = L minúsculo). Ver [STRIPE_CHECKOUT_DEBUG.md](./STRIPE_CHECKOUT_DEBUG.md).

### 2.7. Assistentes IA

> Recurso acessível por rota `/assistantes`, com gate de assinatura (feature `assistantes`). Dono ou admin configura/opera assistentes de WhatsApp, qualificação de leads e agendamento automático (UC-020).

```mermaid
flowchart TD
    A[Usuário acessa /assistantes] --> GATE{Plano inclui Assistentes IA?}
    GATE --> |Sim| TELA[Tela de Assistentes IA]
    GATE --> |Não| UPGRADE[Tela de upgrade / CTA]
    TELA --> CONFIG[Configurar assistentes]
    TELA --> OPER[Operar atendimento automático]
    CONFIG --> WHATS[WhatsApp / Leads / Agendamento]
```

---

## 3. Médico (Atendimento)

> O perfil Médico é focado no **fluxo clínico**: atendimento, prontuário, IA e acompanhamento do paciente.

### 3.1. Fluxo de Atendimento Completo (Consulta)

```mermaid
flowchart TD
    AG[📅 Agenda] --> SEL[Selecionar Paciente na Fila]
    SEL --> INI{Iniciar Atendimento}

    INI --> |Pre-paid| PP{Pagamento Confirmado?}
    PP --> |Sim| CONS[Abrir Prontuário]
    PP --> |Não| PPAY[Modal de Pagamento]
    PPAY --> CONS

    INI --> |Post-paid| CONS

    CONS --> TAB[Tabs do Prontuário]
    TAB --> T1[📝 Consulta Atual]
    TAB --> T2[📋 Histórico]
    TAB --> T3[📊 Exames]
    TAB --> T4[💊 Prescrições]
    TAB --> T5[📈 Gráficos Clínicos]
    TAB --> T6[📂 Documentos]

    T1 --> QP[Queixa Principal]
    QP --> HA[História Atual]
    HA --> EF[Exame Físico]
    EF --> HD[Hipótese Diagnóstica + CID]
    HD --> COND[Conduta / Plano]
    COND --> SAVE[Salvar Consulta]

    SAVE --> FIN[Finalizar Atendimento]
    FIN --> MODAL[CheckoutModal - Saída única]
    MODAL --> CHECK[Checklist clínico: Receita, Retorno]
    CHECK --> ENC[Encerrar Atendimento]
    ENC --> DONE[Paciente Liberado]

    style AG fill:#1a1a2e,stroke:#00d4ff,color:#fff
    style CONS fill:#16213e,stroke:#0f3460,color:#fff
    style SAVE fill:#0a3d62,stroke:#2ecc71,color:#fff
```

### 3.1b. Ciclo de Vida do Status (Em Sala / Em Atendimento)

> **Regras de negócio (v1.27.0):** O status do agendamento reflete em tempo real o estado das consultas na fila de Atendimentos.

```mermaid
flowchart TD
    subgraph Entrada [Entrada na tela de consulta]
        E1[Médico entra na tela de consulta] --> E2[status = in_progress]
        E2 --> E3[Paciente aparece em Em Atendimento]
    end

    subgraph Saida [Saída da tela]
        S1[Finalizar consulta] --> S2[status = finished]
        S2 --> S3[Paciente em Atendimentos Finalizados]
        S4[Fechar tela sem finalizar] --> S5[status = waiting]
        S5 --> S6[Paciente volta para Agendamentos do Dia]
    end

    subgraph Reabertura [Reabertura]
        R1[Médico abre mesma consulta] --> R2[status = in_progress novamente]
    end
```

| Ação | Status resultante |
|------|-------------------|
| Entrar na tela de consulta | `in_progress` |
| Finalizar consulta | `finished` |
| Descartar atendimento | `waiting` |
| Fechar (X ou voltar) sem finalizar | `waiting` |
| Reabrir a mesma consulta | `in_progress` |

**Botões na página Atendimentos:** "Ver Prontuário" e "Iniciar Atendimento" navegam para a tela de consulta com `appointmentId`; ao entrar, o status passa a `in_progress` automaticamente.

**URL da consulta:** Acesso à tela de consulta é feito por `/consulta/:patientId` (opcionalmente `?appointmentId=...`). A partir de Atendimentos ou Agenda, a navegação inclui `appointmentId` na query para marcar o status do agendamento como `in_progress` e vincular a consulta ao agendamento.

### 3.2. Scribe — IA de Transcrição Ambiental

```mermaid
flowchart TD
    SC[🎙️ Ambient Scribe] --> MIC{Ativar Microfone}
    MIC --> REC[Gravação em Tempo Real]
    REC --> STT["Google Cloud Speech-to-Text
    (Streaming)"]
    STT --> TXT[Transcrição Bruta]
    TXT --> AI["Gemini 2.0 Flash
    (Estruturação)"]

    AI --> STRUCT[Consulta Estruturada]
    STRUCT --> S1[Queixa Principal]
    STRUCT --> S2[História Atual]
    STRUCT --> S3[Sinais e Sintomas]
    STRUCT --> S4[Hipótese Diagnóstica]
    STRUCT --> S5[Conduta / Plano de Ação]
    STRUCT --> S6[Medicamentos Citados]
    STRUCT --> S7[Exames Citados]

    STRUCT --> REV[Médico Revisa e Edita]
    REV --> SAVE[Salvar no Prontuário]

    style SC fill:#1a1a2e,stroke:#ff6b6b,color:#fff
    style AI fill:#16213e,stroke:#e6b800,color:#fff
    style STRUCT fill:#0a3d62,stroke:#00d4ff,color:#fff
```

### 3.3. Case IA — Raciocínio Clínico

```mermaid
flowchart TD
    CASE[🤖 Case IA] --> SELP[Selecionar Paciente]
    SELP --> CTX[Construir Contexto Clínico]

    CTX --> CTX1[Dados Demográficos]
    CTX --> CTX2[Histórico de Consultas]
    CTX --> CTX3[Exames Recentes]
    CTX --> CTX4["Diretrizes RAG
    (Supabase Vector)"]

    CTX --> PROMPT["Prompt Adaptativo
    (por Especialidade)"]
    PROMPT --> GEN["Gemini 2.0 Flash
    (Geração)"]

    GEN --> RES[Resposta Estruturada]
    RES --> R1[Análise do Caso]
    RES --> R2[Diagnósticos Diferenciais]
    RES --> R3[Recomendações de Conduta]
    RES --> R4[Exames Sugeridos]
    RES --> R5[Referências Bibliográficas]

    RES --> ACT{Ação do Médico}
    ACT --> |Aceitar| SAVE[Incorporar ao Prontuário]
    ACT --> |Refinar| REFINE[Nova Pergunta / Contexto]
    REFINE --> GEN

    style CASE fill:#1a1a2e,stroke:#e6b800,color:#fff
    style GEN fill:#16213e,stroke:#ff6b6b,color:#fff
```

### 3.4. Gestão de Pacientes (Visão Médica)

```mermaid
flowchart TD
    PAC[👥 Pacientes] --> LIST[Lista de Pacientes]
    LIST --> SEARCH[Buscar / Filtrar]
    LIST --> NEW[Cadastrar Novo Paciente]
    LIST --> DET[Abrir Ficha do Paciente]

    NEW --> NP1[Dados Pessoais - 78+ campos]
    NP1 --> NP2[Endereço - CEP automático]
    NP2 --> NP3[Contatos / Responsável]
    NP3 --> NP4[Histórico Médico]
    NP4 --> NP5[Salvar]

    DET --> DD[Dashboard do Paciente]
    DD --> DD1[Resumo Clínico]
    DD --> DD2[Timeline de Eventos]
    DD --> DD3[Consultas Anteriores]
    DD --> DD4[Exames - Clássico / PRO]
    DD --> DD5[Prescrições]
    DD --> DD6[Documentos / LGPD]
    DD --> DD7[Gráficos de Biomarcadores]

    DD4 --> EC[Exames Clássico - Arquivos PDF]
    DD4 --> EP["Exames PRO - Gráficos Longitudinais
    (CGM, Curvas de Crescimento)"]

    style PAC fill:#1a1a2e,stroke:#00d4ff,color:#fff
    style DD fill:#16213e,stroke:#0f3460,color:#fff
```

### 3.5. Finalização e Checkout (Saída Única)

> **Saída única:** Sidebar "FINALIZAR", Header "Verificar pendências" e botão "X" levam ao mesmo CheckoutModal. O fluxo de pagamento fica na Agenda (recepção) e no Financeiro/Reconciliação.

```mermaid
flowchart TD
    subgraph Entradas [Pontos de Entrada]
        E1[Sidebar: FINALIZAR]
        E2[Header: Verificar pendências]
        E3[Header: X - Fechar e Sair]
    end

    E1 --> M[CheckoutModal]
    E2 --> M
    E3 --> M

    subgraph Modal [Modal - Apenas Clínico]
        M --> P[Pendências: anamnese, plano, CID]
        M --> R[Receita emitida?]
        M --> RET[Retorno agendado?]
        P --> BTN[Encerrar Atendimento]
        R --> BTN
        RET --> BTN
        BTN --> F[handleManualSave + onClose]
    end

    subgraph Pagamento [Fluxo de Pagamento - Recepção]
        AG[Agenda - Clicar no agendamento] --> PAY[PaymentConfirmationModal]
        FIN[Financeiro / Reconciliação] --> PAY
    end
```

### 3.6. Agendamento de Retorno Pré-definido

> Fluxo para o médico pré-definir o retorno do paciente durante o checkout, com suporte a protocolos por procedimento (ex: implante hormonal = 3 meses).

```mermaid
flowchart TD
    subgraph Consulta [Durante a Consulta]
        A[Medico realiza procedimento ex. implante hormonal] --> B[Preenche prontuario]
        B --> C[Clica em Finalizar]
    end

    subgraph Checkout [Modal de Checkout]
        C --> D{Retorno Agendado?}
        D --> |Sim| E[Seleciona procedimento ou motivo]
        E --> F[Data sugerida: hoje + intervalo]
        F --> G[Edita data se necessario]
        G --> H[Observacoes opcional]
        H --> I[Confirma e Encerra]
        D --> |Nao| I
    end

    subgraph Backend [Persistencia]
        I --> J{scheduledFollowUp?}
        J --> |Sim| K[Criar agendamento de retorno na Agenda]
        K --> L[Salvar scheduledFollowUp na consulta]
        J --> |Nao| L
        L --> M[Salvar consulta como completed]
        M --> N[Atualizar status do agendamento para finished]
    end

    subgraph Automacoes [Fluxos Existentes]
        K --> O[Confirmacao D-1]
        K --> P[Preparacao Retorno D-7]
    end

    style A fill:#1a1a2e,stroke:#00d4ff,color:#fff
    style E fill:#16213e,stroke:#2ecc71,color:#fff
    style K fill:#0a3d62,stroke:#e6b800,color:#fff
```

**Procedimentos com intervalo padrão:**

| Procedimento        | Intervalo | Uso típico                    |
|---------------------|-----------|-------------------------------|
| Implante hormonal   | 3 meses   | Retorno para exames           |
| Ajuste de dose      | 1 mês     | Controle de medicação         |
| Avaliação inicial   | 15 dias   | Primeira consulta pós-diagnóstico |
| Retorno rotineiro   | 3 meses   | Pacientes estáveis            |
| Retorno em 6 meses  | 6 meses   | Acompanhamento semestral      |
| Personalizado       | 1–12 meses| Intervalo livre               |

**Onde:** CheckoutModal (ao finalizar atendimento). O retorno é criado na Agenda com o mesmo profissional e unidade da consulta atual.

---

### 3.7. Exames PRO — Gráficos Clínicos

```mermaid
flowchart TD
    EXAM[📊 Exames PRO] --> SEL[Selecionar Biomarcador]
    SEL --> TIPO{Tipo de Gráfico}

    TIPO --> CGM["Glicemia Contínua (CGM)"]
    CGM --> CGM1[Zonas Semânticas - Verde/Amarelo/Vermelho]
    CGM1 --> CGM2[Tendência 7/14/30 dias]

    TIPO --> CRESC[Curvas de Crescimento]
    CRESC --> CRESC1[Estatura por Idade]
    CRESC --> CRESC2[Peso por Idade]
    CRESC --> CRESC3[IMC por Idade]
    CRESC1 --> ZSCORE["Z-Scores OMS
    (+2SD, Média, -2SD)"]
    CRESC2 --> ZSCORE
    CRESC3 --> ZSCORE

    TIPO --> LAB[Marcadores Laboratoriais]
    LAB --> LAB1[HbA1c / TSH / Colesterol]
    LAB1 --> LAB2[Tendência Longitudinal]

    style EXAM fill:#1a1a2e,stroke:#2ecc71,color:#fff
```

---

## 4. Secretária

> A Secretária é o **pivô operacional** da clínica. Seu foco é na gestão de agenda, check-in/check-out de pacientes e tarefas administrativas.

### 4.1. Gestão da Agenda

```mermaid
flowchart TD
    AG[📅 Agenda] --> VIS{Visualização}
    VIS --> VD[Vista Diária]
    VIS --> VS[Vista Semanal]
    VIS --> VM[Vista Mensal]

    AG --> NOVO[Novo Agendamento]
    NOVO --> N1[Selecionar Paciente]
    N1 --> N1a{Paciente Existe?}
    N1a --> |Sim| N2[Selecionar Data/Hora]
    N1a --> |Não| N1b[Cadastro Rápido]
    N1b --> N2
    N2 --> N3["Tipo de Consulta
    (1ª vez, Retorno, Exame)"]
    N3 --> N4[Confirmar e Salvar]
    N4 --> N5["Automação: Enviar Confirmação
    (WhatsApp/SMS - D-1)"]

    AG --> EDIT[Editar Agendamento]
    EDIT --> E1[Reagendar Data/Hora]
    EDIT --> E2[Cancelar Agendamento]

    AG --> DEL[Excluir Agendamento]
    DEL --> DEL1["Soft Delete
    (marca deletedAt)"]

    style AG fill:#1a1a2e,stroke:#00d4ff,color:#fff
    style NOVO fill:#16213e,stroke:#2ecc71,color:#fff
```

### 4.2. Fluxo de Check-in / Check-out (Kanban da Fila)

```mermaid
flowchart TD
    FILA["🏥 Fila de Atendimento (Kanban)"] --> STATUS

    STATUS --> W["⏳ Aguardando
    (waiting)"]
    STATUS --> IP["🔵 Em Atendimento
    (in_progress)"]
    STATUS --> F["✅ Finalizado
    (finished)"]
    STATUS --> C["❌ Cancelado
    (cancelled)"]

    W --> |Paciente Chegou| CHECKIN[Check-in]
    CHECKIN --> CONFIRM{Confirmar Presença}
    CONFIRM --> |Sim| IP
    CONFIRM --> |Não Compareceu| C

    IP --> |Médico Finaliza| FINSTATUS{Workflow Financeiro}
    FINSTATUS --> |Pre-paid| F
    FINSTATUS --> |Post-paid| CHECKOUT["💳 Checkout Pendente"]
    CHECKOUT --> PAY{Pagamento}
    PAY --> |Confirmar| F
    PAY --> |Cortesia| F
    PAY --> |Pendente| PEND[Fica na Lista de Reconciliação]

    style FILA fill:#1a1a2e,stroke:#e6b800,color:#fff
    style W fill:#333,stroke:#aaa,color:#fff
    style IP fill:#0a3d62,stroke:#00d4ff,color:#fff
    style F fill:#1b4332,stroke:#2ecc71,color:#fff
    style C fill:#3d0000,stroke:#ff6b6b,color:#fff
```

### 4.3. Cadastro Rápido de Paciente (pela Secretária)

```mermaid
flowchart TD
    CAD[Cadastro Rápido] --> D1[Nome Completo]
    D1 --> D2[CPF + Telefone]
    D2 --> D3[Data de Nascimento]
    D3 --> D4[Email - Opcional]
    D4 --> D5[CEP → Endereço Automático]
    D5 --> SAVE[Salvar]
    SAVE --> RETAG[Retornar à Agenda para Agendar]

    style CAD fill:#1a1a2e,stroke:#00d4ff,color:#fff
```

### 4.4. Tarefas da Secretária

```mermaid
flowchart TD
    TSK[✅ Tarefas - Visão Secretária] --> MINE[Minhas Tarefas]
    MINE --> TF{Filtrar por Status}
    TF --> TODO[📋 A Fazer]
    TF --> PROG[🔄 Em Progresso]
    TF --> DONE[✅ Concluída]

    MINE --> TIPOS[Tipos Comuns]
    TIPOS --> T1["📞 Confirmação de Agendamento
    (Automática - D-1)"]
    TIPOS --> T2["📋 Preparação de Retorno
    (Automática - D-7)"]
    TIPOS --> T3["🧪 Follow-up de Exames
    (Automática +15d)"]
    TIPOS --> T4["💰 Checkout Pendente
    (Pós-consulta)"]
    TIPOS --> T5[📝 Tarefas Manuais do Médico]

    T1 --> ACT1[Ligar / Enviar WhatsApp]
    ACT1 --> ACT2{Confirmado?}
    ACT2 --> |Sim| MARK[Marcar como Concluída]
    ACT2 --> |Não| REAG[Reagendar / Cancelar]

    style TSK fill:#1a1a2e,stroke:#2ecc71,color:#fff
```

### 4.5. Reconciliação Financeira (Visão Secretária)

```mermaid
flowchart TD
    REC[💰 Reconciliação] --> DIA[Consultas Finalizadas do Dia]
    DIA --> LIST[Lista de Pendências]

    LIST --> ITEM[Selecionar Consulta]
    ITEM --> ACT{Ação}
    ACT --> |Pagamento Recebido| PAY[Confirmar Pagamento]
    PAY --> PAY1[Tipo: Dinheiro / Cartão / PIX]
    PAY1 --> PAY2[Registrar Valor]
    PAY2 --> PAY3[Gerar Recibo]

    ACT --> |Cortesia/Retorno| CORT[Marcar como Cortesia]
    ACT --> |Pendente| PEND[Manter Pendente]

    style REC fill:#1a1a2e,stroke:#e6b800,color:#fff
```

---

## 5. Fluxo Global — Ciclo de Vida do Agendamento

> Este diagrama mostra o **ciclo completo** de um agendamento, cruzando os três perfis.

```mermaid
stateDiagram-v2
    direction LR

    [*] --> Agendado: Secretária cria

    state "Confirmação" as Confirmacao {
        Agendado --> Confirmado: Automação D-1
        Agendado --> Cancelado: Paciente cancela
    }

    Confirmado --> Aguardando: Paciente chega (Check-in)

    state "Atendimento" as Atendimento {
        Aguardando --> EmAtendimento: Médico inicia
        EmAtendimento --> Finalizado: Médico finaliza
    }

    state "Financeiro" as FinanceiroState {
        Finalizado --> CheckoutPendente: Post-paid
        Finalizado --> Concluido: Pre-paid (já pago)
        CheckoutPendente --> Concluido: Secretária confirma pagamento
        CheckoutPendente --> Cortesia: Marcado como cortesia
    }

    Concluido --> [*]
    Cortesia --> [*]
    Cancelado --> [*]
```

---

## 6. Matriz de Permissões por Perfil

| Funcionalidade | Médico/ADM | Médico | Secretária |
|:---|:---:|:---:|:---:|
| **Agenda — Criar/Editar/Excluir** | ✅ | ✅ | ✅ |
| **Pacientes — Cadastro Completo** | ✅ | ✅ | ✅ (parcial) |
| **Prontuário — Consultar/Editar** | ✅ | ✅ | ❌ |
| **Scribe — Transcrição IA** | ✅ | ✅ | ❌ |
| **Case IA — Raciocínio Clínico** | ✅ | ✅ | ❌ |
| **Financeiro — Dashboard Completo** | ✅ | ❌ | ❌ |
| **Financeiro — Reconciliação** | ✅ | ❌ | ✅ |
| **Financeiro — Recibos** | ✅ | ❌ | ✅ |
| **Relatórios — Todos** | ✅ | ✅ (parcial) | ❌ |
| **Modelos/Templates** | ✅ | ✅ | ❌ |
| **Configurações — Clínica** | ✅ | ❌ | ❌ |
| **Configurações — Pessoal** | ✅ | ✅ | ✅ |
| **Tarefas — Gestão** | ✅ | ✅ | ✅ (próprias) |
| **Tarefas — Criar Automação** | ✅ | ❌ | ❌ |
| **Exames PRO — Gráficos** | ✅ | ✅ | ❌ |

---

> **Legenda de Cores nos Diagramas:**
> - 🔵 Azul (`#00d4ff`): Fluxos de navegação e agenda
> - 🟡 Dourado (`#e6b800`): Fluxos financeiros
> - 🟢 Verde (`#2ecc71`): Ações de conclusão e tarefas
> - 🔴 Vermelho (`#ff6b6b`): Templates e ações destrutivas
> - 🟣 Roxo (`#7b68ee`): Configurações

---

*Med.Health — Inteligência Médica para Todas as Especialidades*
