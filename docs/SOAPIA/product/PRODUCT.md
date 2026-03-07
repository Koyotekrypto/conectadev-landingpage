# 🏥 SOAPIA: Vision & Product Strategy

> **Histórico de versões:** apenas em [CHANGELOG.md](../reports/CHANGELOG.md). Este documento contém apenas visão, roadmap e estratégia.

## 1. Visão do Produto
A **SOAPIA** é uma **Plataforma de Inteligência Médica Multidisciplinar** que vai além de um prontuário eletrônico tradicional (PEP). Nosso objetivo central é eliminar a carga cognitiva e operacional do médico através de **IA Ambiental** (transcrição passiva) e centralizar a jornada do paciente através de dados contínuos de **IoT** (sensores de saúde, wearables e dispositivos médicos).

*   **Foco Principal:** Substituir a digitação por escuta ativa e análise de dados biológicos, adaptando-se a qualquer especialidade médica.
*   **Diferencial:** Visualização longitudinal de biomarcadores cruzados com comportamento, com suporte a 30+ especialidades médicas.

## 2. Personas

### A. O Médico Especialista (Cientista de Dados Biológicos)
*   **Perfil:** Médico sobrecarregado por burocracia, mas apaixonado por padrões clínicos e biomarcadores.
*   **Dor:** Perda de tempo preenchendo campos repetitivos no PEP; dificuldade em consolidar dados de diferentes fontes (sensores + exames laboratoriais).
*   **Necessidade:** Dashboards preditivos e resumos automáticos de consultas via IA, adaptados à sua especialidade específica.

**Especialidades Suportadas:**
- Clínica Médica
- Cardiologia
- Dermatologia
- Endocrinologia e Metabologia
- Gastroenterologia
- Geriatria
- Ginecologia e Obstetrícia
- Infectologia
- Nefrologia
- Neurologia
- Ortopedia
- Pediatria
- Pneumologia
- Psiquiatria
- Reumatologia
- Urologia
- E 15+ outras especialidades

### B. O Paciente Crônico (Tecnologizado)
*   **Perfil:** Pacientes com condições crônicas (diabetes, hipertensão, doenças cardiovasculares, distúrbios de tireoide, etc.)
*   **Dor:** Sensação de isolamento entre consultas; dificuldade em manter o engajamento no tratamento.
*   **Necessidade:** App integrado com sensores que forneça feedback em tempo real e facilite a comunicação com a clínica, independente da especialidade.

### C. A Secretária/Recepcionista (Pivô Operacional)
*   **Perfil:** Responsável por manter a clínica funcionando, lidando com pacientes, médicos e burocracia simultaneamente.
*   **Dor:** Gestão de múltiplas agendas, atrasos de pacientes e cobranças manuais.
*   **Necessidade:** Uma interface ágil de check-in/check-out e alertas em tempo real sobre o status da fila.

- **Trilha de Auditoria Imutável (MVP Security):** Implementação de sistema de Logs (`AuditService`) no Firestore. Todas as ações cruciais (como salvar/alterar um prontuário) geram um registro imutável ("Ex: O Dr. João alterou o prontuário do Paciente X"), não podendo ser apagado nem pelo próprio médico. Cumpre requisito essencial do NGS2/LGPD, consolidando o MVP de Segurança.
- **Token Billing & Fair Use Policy (Sprint 2/3):** Implementação completa do controle de créditos de IA e limites de uso justo para WhatsApp e pacientes, integrando `TokenBillingService` ao `AmbientScribe` e `PatientService`.
- **Pricing Matrix "Vibe Dev™" (Sprint 4):** Refatoração da tabela de preços com âncoras psicológicas, agrupamento semântico de expertises clínicas e design premium (Glow, Glassmorphism, CreditBadges).

### D. O Administrador/Dono de Clínica (Gestor de Performance)
*   **Perfil:** Focado na sustentabilidade financeira e crescimento da clínica.
*   **Dor:** Falta de clareza sobre faturamento real, custos operacionais e produtividade da equipe.
*   **Necessidade:** Dashboards de BI consolidados e relatórios financeiros automáticos para tomada de decisão estratégica.

## 3. Inspirações
*   **Voa Health:** Benchmark em IA de transcrição médica ambiental para redução de "burnout" de digitação.
*   **Easy Health:** Referência em gamificação e estratégias de engajamento para pacientes com condições crônicas.
*   **Nabla:** Multidisciplinaridade e adaptação de IA a diferentes especialidades médicas.

### Fase 7: Token Billing & Fair Use Policy [x]
*   [x] **Token Billing System:** Controle de créditos de IA e WhatsApp baseado no plano.
*   [x] **Fair Use Policy:** Limites claros de uso justo para evitar custos operacionais imprevistos.
*   [x] **Modelo Drug Dealer:** Amostra grátis de IA (5 créditos) para planos BASIC e TRIAL, incentivando o upgrade.
*   [x] **Paywalls Dinâmicos:** Bloqueios inteligentes no frontend (Pacientes, Scribe, WhatsApp) com redirecionamento para upgrade.

### Fase 6: Developer Experience & MCP Intelligence [/]
*   [/] Integração de MCP (Model Context Protocol) para automação de fluxo:
    *   [x] **GitHub MCP:** Sincronização direta de código e issues.
    *   [x] **Upstash Context7:** Acesso a documentação em tempo real.
    *   [ ] **Google Sheets:** Automação de planilhas financeiras e dados externos.
    *   [x] **Exa AI:** Busca web em tempo real para pesquisa clínica e técnica.

### Fase 7: Segurança e Engajamento (Audit & Marketing) [x]
*   [x] **Auditoria Imutável (Security):** Log de alterações completo via `AuditService` e Firebase Functions, com regras que impedem deleção e alteração, garantindo segurança médico-legal e compliance.
*   [x] **Coleta de Depoimentos (Social Proof):** Sistema integrado para avaliação pós-consulta e exibição na landing page (Vibe Dev™ premium).
*   [x] **Captação de Leads na Landing:** Formulário "Receba uma demonstração", exit-intent e "Me ligue" salvos em Firestore (`landing_leads`); e-mail automático para a equipe (conectadev.br@gmail.com) via Resend (remetente: notificacoes@soapiamed.com). Ver [CONFIGURAR_EMAIL_LEADS.md](../operations/CONFIGURAR_EMAIL_LEADS.md).
*   [x] **Navegação Sem Emendas (UX):** Deep Linking no prontuário (`/pacientes?id=XYZ`) e roteamento inteligente direto da Agenda e Dashboard.
*   [x] **Sincronização de Status em Tempo Real:** Agenda e Kanban refletindo dinamicamente o estado real do atendimento (`waiting`, `in_progress`, `finished`).
*   [x] **Automação Desacoplada:** Migração pesada de lógicas de checagem do frontend para `Cloud Functions` pub/sub, reduzindo carga no cliente.

## 4. Roadmap de Evolução

### Fase 1: MVP (Foundation) ✅ CONCLUÍDO
*   ✅ Cadastro estruturado de pacientes (78+ campos).
*   ✅ Prontuário básico com foco em usabilidade.
*   ✅ Módulo de agendamento e fluxo de atendimento (Kanban).
*   ✅ Autenticação segura (Firebase Auth).

### Fase 2: Medical Intelligence Layer (Verticalização) ✅ CONCLUÍDO
*   ✅ Suporte a múltiplas especialidades médicas (30+)
*   ✅ Gráficos longitudinais de biomarcadores adaptáveis por especialidade
*   ✅ Calculadoras clínicas específicas por área médica
- [x] **Módulo Financeiro Completo:**
    - [x] Receitas e Despesas com categorização
    - [x] Reconciliação diária de pagamentos
    - [x] Orçamentos para pacientes
    - [x] Geração de recibos em PDF
    - [x] Produtos e serviços com tabela de preços
- [x] **Módulo de Relatórios:**
    - [x] Dashboard consolidado
    - [x] Relatórios de Agendamentos, Financeiro, Pacientes
    - [x] Produtividade médica (Atendimentos)
    - [x] Aniversariantes para relacionamento
- [x] **Consentimento LGPD & Compliance:**
    - [x] Geração automática de termos com dados do paciente
    - [x] Arquivamento seguro de termos assinados (GCS)
    - [x] Integração com prontuário e agenda
    - [x] Páginas de Termos de Uso, Privacidade e DPA (Novidade)
- [x] **Modelos de Formulários Editáveis:**
    *   Personalização de modelos de sistema (LGPD, Fichas, etc.)
    *   Mecanismo de sincronização inteligente de novos templates
*   [ ] Integração direta com sensores de saúde (CGM, wearables).

### Fase 3: AI Layer (Intelligence) ✅ CONCLUÍDO
*   ✅ **SOAPIA AI (CASE IA):** Raciocínio clínico profundo e estruturação via **Gemini 2.0 Flash**.
*   ✅ **Security Hardening**: Implementação de `SECURITY_RULES.md` e validação robusta de tokens.
*   ✅ **Case IA Evolution Plan**: Planejamento estratégico de longo prazo documentado em `CASE_IA_EVOLUTION_PLAN.md`.
*   ✅ **Suporte a Diretrizes (RAG):** Busca semântica em documentos médicos e diretrizes via Supabase Vector (3072D Exact Search).
*   ✅ **Google Cloud Speech-to-Text:** Transcrição em streaming via Cloud Functions (fallback robusto).
*   ✅ **AI Adaptativa por Especialidade:** Prompts dinâmicos que se ajustam à especialidade do médico
*   ✅ Secure Proxy via Firebase Functions.
*   ✅ Resumos inteligentes de evolução do paciente.
*   ✅ **Modelos Clínicos Customizáveis:** Templates de anamnese (com preview e auto-fill manual), laudos, prescrições e exames por especialidade.
*   ✅ **Gestão de Tarefas & Automação:**
    *   Criação e atribuição de tarefas
    *   Notificações integradas
    *   AutomationService para workflows
*   ✅ **Gestão de Equipe & Acessos (Dashboard Administrativo):**
    *   Controle de cargos (Admin, Médico, Secretária, Nutricionista)
    *   Ações de exclusão e edição de membros
    *   Segurança NGS2 comprovada via audit trail
*   ✅ **Onboarding Experience (Auditado & Premium):**
    *   Fluxo de 5 passos com auditoria completa de cobertura
    *   Upload integrado de Logo (Clínica) e Foto (Profissional)
    *   Migração de preferências de notificação para Firestore (Cross-device)
    *   Seleção visual de layout de documentos integrada ao wizard
    *   Design adaptativo (Light/Dark mode) com glassmorphism

### Fase 4: Security Layer ✅ HARDENED
*   ✅ **Firestore Rules refatoradas** com `isOwner()` centralizado
*   ✅ Validações de dados em todas as escritas
*   ✅ Sub-coleções com herança de permissão
*   ✅ Regra de negação padrão

*   [/] **Máscaras e Validação de Dados:**
    *   [ ] Implementação de máscaras (CPF, CNPJ, CEP, Telefone).
    *   [ ] Validação rigorosa de campos sensíveis.
    *   [x] Sistema de feedback (toasts) para sucesso/erro em todas as ações.
    *   [x] **Premium Confirm Dialogs:** Substituição global de alertas nativos por modais premium (Vibe Dev™).
*   [x] **Arquitetura Hierárquica (Vibe Dev™)**: Evolução do sistema para suportar **"Múltiplas Contas/Organizações"**, onde cada conta pode gerir suas próprias **"Unidades/Filiais"**. Esta estrutura permite que médicos participem de diferentes grupos hospitalares ou redes de clínicas com isolamento total de dados e configurações específicas por local físico.
*   [x] Fluxo de Pagamento Configurável (Pre-paid vs Post-paid).
*   [x] **Build & Deployment Stability**: Resolução de erros críticos de casing e sintaxe (CaseAI, CIDService, OnboardingWizard).
    *   [x] **CASE IA UX Refinement (Vibe Dev™):**
    *   [x] Estilização lilás/violeta exclusiva para o menu CaseAI.
    *   [x] Efeito 3D brilhante (LilacOrb) no ícone da IA.
    *   [x] Glow néon propagado em todos os usos do BrandLogo (✦).
    *   [x] **Product Tour Interativo**: Tour de boas-vindas para novos usuários.
    *   [x] **Help Panel Premium**: Refinamento de contraste e cores.
    *   [ ] Eliminar redundância de seletor de paciente.
    *   [ ] Unificar Quick Actions (Cards centrais vs Chips).
    *   [ ] Refinar hierarquia visual do Empty State.
    *   [ ] Implementar animações premium no avatar da IA.
    *   [ ] **Próximas Evoluções**: [Roadmap Detalhado](../reference/CASE_IA_EVOLUTION_PLAN.md) (Multimodal, Referenciamento, Copiloto).
*   [ ] Integração total com ecossistema IoT (Apple Health, Google Fit).
*   [ ] App mobile para pacientes (PWA ou React Native).
*   [ ] Análise de coortes de pacientes para pesquisa clínica interna.
*   [ ] Sistema de suporte à decisão clínica baseado em diretrizes atualizadas (por especialidade).
*   **Enriquecimento de Documentação**: Adição de mapeamento sistemático de 12 abas do menu principal por persona (Médico, Secretária, Administrador) e novas Estórias de Usuário (User Stories) em `USE_CASES.md` e `PRODUCT.md`.


## 5. Métricas de Sucesso

| Métrica | Meta |
|---------|------|
| Tempo médio de preenchimento de prontuário | Redução de 60% |
| Satisfação do médico (NPS) | > 70 |
| Taxa de adesão do paciente | Aumento de 40% |
| Erros de prescrição | Redução de 80% |
| Tempo de gestão financeira | Redução de 50% |
| Cobertura de especialidades | 30+ especialidades |
| Precisão da IA por especialidade | > 90% |

## Fase 8: Padronização de Headers e Wayfinding ✅ CONCLUÍDO
- [x] Atualizar componente `PageHeader` para token centralizado de tipografia (`text-2xl font-bold text-slate-900 dark:text-white`)
- [x] Adicionar suporte a `backTo` no `PageHeader` para Wayfinding automático
- [x] Refatorar **Agenda** (`src/pages/Agenda.tsx`) para usar `PageHeader` e unificar estilo
- [x] Refatorar **Estoque** (`src/pages/Inventory/index.tsx`) para usar `PageHeader`
- [x] Refatorar **Minhas Clínicas** (`src/pages/Configuracoes/OrganizationUnits.tsx`) para usar `PageHeader`
- [x] Refatorar **Outros Profissionais** (`src/pages/Configuracoes/OtherProfessionals.tsx`) para usar `PageHeader`
- [x] Refatorar **Produtos e Serviços** (`src/pages/Financeiro/components/ProductsServices.tsx`) para usar `PageHeader`
- [x] Eliminar cores `text-primary` e `text-gray-800` de títulos fixos (substituir por tokens de design system)

## Phase 9: Sync Final e Documentação ✅ CONCLUÍDO
- [x] Refatoração de componentes de editor e abas de consulta para estabilidade de hooks (useCallback/useMemo)
- [x] Resolução de avisos `set-state-in-effect` em editores dinâmicos via `queueMicrotask`
- [x] Limpeza de 50+ avisos de linting (imports não utilizados, variáveis órfãs)
- [x] Padronização de componentes estáticos (ReportsSidebar) para performance de renderização
- [x] Atualizar `CHANGELOG.md` com as novas padronizações de header e refatorações
- [x] Validar responsividade em dispositivos mobile (breakpoints MD/LG)
- [x] Gerar relatório final de Sprint

## 6. Diferenciais Competitivos

### 6.1. IA Multidisciplinar
Diferente de soluções especializadas em apenas uma área, o Med.Health adapta sua inteligência artificial conforme a especialidade do médico, considerando:
- Diretrizes específicas da especialidade
- Exames e biomarcadores relevantes
- Terminologia própria da área
- Padrões clínicos específicos

### 6.2. Flexibilidade de Especialidade
- Onboarding configurável com upload de mídia integrado
- Seleção de layout de documentos no primeiro acesso
- Dashboards adaptáveis ao contexto clínico
- Suporte a múltiplas especialidades na mesma clínica

### 6.3. Escalabilidade Vertical
Arquitetura que permite:
- Adição de novas especialidades sem reescrita de código
- Personalização de prompts por especialidade
- Extensão de funcionalidades específicas por área médica

## 7. Modelo de Negócio

### 7.1. Planos (Strategy Update 2026-02-26)
- **BASIC:** Lead Magnet. R$ 129/mês (ou R$ 99 s/ taxa). Sem IA. Limite 50 pacientes.
- **PRO:** R$ 247/mês (ou R$ 179 s/ taxa). 15 Créditos IA/mês + 1.000 Lembretes WhatsApp/mês. Limite 200 pacientes.
- **PRO MAX:** R$ 347/mês (ou R$ 249 s/ taxa). 50 Créditos IA/mês + 1.000 Lembretes WhatsApp/mês. Limite 500 pacientes.
- **PRO MAX + IA:** R$ 497/mês (ou R$ 379 s/ taxa). IA Ilimitada + WhatsApp Ilimitado (Fair Use Policy). Pacientes ilimitados.

### 7.2. Trial Strategy (PLG Segmentado)
- **Trial por Funcionalidade:** Cada ferramenta premium (CASE IA, Scribe IA, etc.) possui seu próprio período de teste de 7 dias, desbloqueável sob demanda.
- **Guided Upgrade Tour:** Tour visual que guia o usuário pelas vantagens dos planos superiores diretamente na tela de faturamento.
- **Visual Teaser:** O usuário vê a ferramenta real borrada (blur) por trás do paywall, incentivando a curiosidade.
- **Conversão Apiracional:** Foco em status, automação e velocidade, eliminando a dor de restrição com a promessa de superpoderes inmediatos.
- **Contagem Regressiva:** Exibição clara no UI sobre o tempo restante do trial para criar urgência.
- **Gatilhos de Paywall (Uso):** 10 pacientes ou 5 transcrições Scribe (para contas sem trial ativo).
- **Segurança:** WhatsApp desativado no trial. Transcrição limitada.
- **Stripe Flow:** Integração direta com o Checkout do Stripe e Customer Portal para gestão autônoma de assinaturas.

### 7.3. Segmentos de Mercado
1. **Clínicas e consultórios (principal):** Pequenas e médias (1–20 médicos), consultórios individuais, multidisciplinares
2. **Médicos autônomos:** Liberais, especialistas com prática própria, em transição para consultório
3. **Redes de saúde:** Hospitais pequenos/médios, redes de clínicas, centros médicos
4. **Médicos independentes / clínicas multiespecialidade / hospitais:** Gestão completa, múltiplas agendas, enterprise

### 7.4. Receitas Adicionais
- **Setup/Onboarding:** R$ 500–2.000 (implementação inicial)
- **Treinamentos:** R$ 150/hora
- **Migração de dados:** Valor variável conforme volume
- **Suporte Premium:** 20% sobre valor da assinatura

### 7.5. Canais de Distribuição
- **Digitais:** Website, marketing de conteúdo, LinkedIn, webinars
- **Presenciais:** Congressos, eventos de tecnologia em saúde, associações médicas
- **Indicações:** Programa médico-amigo, consultorias, integradores

### 7.6. Vantagens Competitivas
- **IA por especialidade:** 30+ especialidades, prompts adaptativos
- **Integração completa:** Agendamento → Consulta → Prescrição → Financeiro em fluxo único
- **Transcrição em tempo real:** SOAP automático, redução de 40 min → 5 min na documentação
- **Conformidade:** LGPD, CFM, nível HIPAA-equivalente; multi-tenant com isolamento

### 7.7. Métricas de Negócio (AARRR)
- **Aquisição:** CAC R$ 1.200; conversão trial 15%; trial 7–14 dias ou limites de uso
- **Ativação:** Onboarding ~3 dias; conclusão 85%; primeira transcrição em 7 dias (90%)
- **Retenção:** Churn &lt; 5% mensal, &lt; 20% anual; NPS 72
- **Receita:** ARPU R$ 165/mês; LTV R$ 4.950 (30 meses); LTV/CAC 4,1:1
- **Indicação:** 1,3 novo usuário/usuário/ano; viral coefficient 0,35

### 7.8. Riscos e Mitigações
| Risco | Mitigação |
|-------|------------|
| Mudanças regulatórias CFM | Compliance contínuo, relacionamento com entidades |
| Concorrência big tech | Foco em especialização e atendimento personalizado |
| Resistência à adoção | Onboarding simplificado, suporte dedicado |
| Vazamento de dados | Criptografia, auditorias, seguro cibernético |

### 7.9. Projeções e Parcerias
- **2026:** MRR R$ 150k, 500 médicos ativos, faturamento R$ 1,8M
- **2027:** MRR R$ 450k, 1.500 médicos, R$ 5,4M
- **Break-even:** Mês 14; payback 18 meses
- **Parcerias:** Google Cloud, SBEM/SBC, associações médicas, faculdades

## 8. Estratégia de Go-to-Market

### Fase 1: Early Adopters (Atual)
- Foco em Endocrinologia (produto original EndoVibe)
- Validação do modelo de IA
- Refinamento de UX

### Fase 2: Expansão Multidisciplinar (Q1 2026)
- Lançamento oficial SOAPIA
- Expansão para Cardiologia, Clínica Médica, Pediatria
- Programa de embaixadores por especialidade

### Fase 3: Consolidação (Q2-Q3 2026)
- Cobertura de 30+ especialidades
- Parcerias com sociedades médicas
- Integrações com sistemas hospitalares

### Fase 4: Liderança (Q4 2026+)
- Posicionamento como líder em IA médica multidisciplinar
- Expansão internacional (LATAM, Europa)
- Plataforma aberta para desenvolvedores

## 9. Módulo de Exames & Gráficos Clínicos

### 9.1. Exames Clássico vs. Exames PRO
*   **Exames Clássico**: Repositório documental focado em armazenamento e visualização de arquivos estáticos (PDF, laudos digitalizados, fotos de exames). Serve como a memória documental do paciente.
*   **Exames PRO**: Visualização longitudinal e analítica de biomarcadores. Focado na extração de dados para geração de tendências e insights clínicos ao longo do tempo.

### 9.2. Gráficos Clínicos (Especificação)
*   **Zonas Semânticas**: Identificação visual imediata de faixas de Alvo (Verde), Alerta (Amarelo) e Perigo (Vermelho).
*   **Z-Scores (Padrão OMS)**: Integração de curvas de desvio padrão para acompanhamento pediátrico (+2 SD, Média, -2 SD).
*   **Visualização Longitudinal**: Gráficos de linha e área (ComposedChart) para Monitoramento Contínuo (CGM) e tendências laboratoriais.
*   **Tipos Suportados**:
    *   Monitoramento de Glicemia (CGM)
    *   Curvas de Crescimento (Estatura, Peso, IMC por Idade)
    *   Tendências de Hemoglobina Glicada e Marcadores Hormonais (Roadmap)

## 10. Conformidade Legal e Gaps de Lançamento

A versão MVP do SOAPIA foca em produtividade e IA clínica. Para expansão e certificação plena como prontuário eletrônico legal no Brasil, os seguintes itens estão mapeados para desenvolvimento pós-lançamento:

*   **Assinatura Digital (ICP-Brasil)**: Implementação de assinatura com certificado e-CPF/e-CRM para validade jurídica de receitas e atestados.
*   **Interoperabilidade RNDS**: Conectividade com a Rede Nacional de Dados em Saúde via padrão HL7 FHIR.
*   **Certificação NGS2**: Auditoria de segurança total para conformidade com normas SBIS/CFM.

*   [x] **Autenticação Manual & Cadastro Premium:** Expansão do sistema de login para suportar cadastro completo via email/senha, com coleta de CRM e Nome, verificação de e-mail e persistência configurável.

---

*SOAPIA - Inteligência Médica para Todas as Especialidades*
