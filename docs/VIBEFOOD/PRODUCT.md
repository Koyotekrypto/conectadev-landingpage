# VIBE FOOD™ - PRODUCT BIBLE
*Plataforma SaaS de Gestão Gastronômica High-Performance*

## Visão do Produto (1.6.0-DEV)
VibeFood é um ecossistema de gestão para restaurantes focado em mobilidade, segurança e experiência do usuário acelerada.
1.  **Sincronia Multi-Device:** Web-first (Next.js) com suporte PWA.
2.  **Auth Híbrida:** Segurança diferenciada por nível de responsabilidade.
3.  **DocOps Culture:** Documentação como extensão do código.

## Personas & Regras de Acesso

### 1. Dono / Gerente (Owner/Manager)
*   **Acesso:** Firebase Auth Tradicional (E-mail/Senha + Google).
*   **Responsabilidades:** Gestão financeira, estoque, dashboard e configuração de equipe.
*   **Ponto Chave:** Único com permissão para criar novos Garçons e visualizar dados sensíveis de lucro.

### 2. Garçom / Atendente (Waiter/Staff)
*   **Acesso:** **PIN-Only Login (VibeAuth™).**
    *   Não possui conta individual no Firebase Auth (Deprecated).
    *   Recebe um link via WhatsApp/Terminal.
    *   Valida acesso via PIN de 4 dígitos (Hash no Firestore).
*   **Responsabilidades:** Lançamento de pedidos, fechamento de comandas e movimentação de mesas.

### 3. Entregador (Driver)
*   **Acesso:** Firebase Auth (E-mail/Senha).
*   **Responsabilidades:** Gestão de rotas de entrega via App Mobile.
*   **Regra de Negócio:** Vinculado obrigatoriamente a um restaurante via `restaurantId`.

## Features Core

### 1. Vibe POS (Terminal)
- [x] Abertura e fechamento de comandas com UI ultra-rápida.
- [x] Login via PIN compartilhado em terminais físicos.
- [x] Sincronização em tempo real com KDS.

### 2. Delivery Hub & Driver App
- [x] Kanban de pedidos (Novo -> Preparo -> Rota -> Entregue).
- [x] Dashboard exclusivo para entregadores (App dedicado).

### 3. Smart Inventory
- [x] Ficha técnica com baixa automática de insumos.
- [x] Alertas de reposição baseados em IA.

## Roadmap Strategic
- [ ] Integração nativa WhatsApp via API Cloud.
- [ ] Módulo Fiscal Automatizado.
- [ ] VibeAI™: Predição de demanda e otimização de estoque.

