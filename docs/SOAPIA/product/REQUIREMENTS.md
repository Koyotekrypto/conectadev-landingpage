# REQUIREMENTS.md - Especificação de Requisitos (SRS)

**Versão:** 1.5  
**Data:** 01/03/2026  
**Status:** Atualizado  

## 🎯 Objetivo
Este documento consolida TODOS os requisitos funcionais, não-funcionais e regras de negócio do **Med.Health**, servindo como a única fonte da verdade para desenvolvimento, QA e auditoria.

> **Para detalhes de fluxos e interação do usuário, consulte:** [USE_CASES.md](USE_CASES.md)

---

## 1. Requisitos Funcionais (RF)

### 1.1. Gestão de Identidade & Acesso (IAM)
*   **RF-001 (Mono-Organization):** O sistema opera em arquitetura de Conta Única por usuário proprietário, focado na gestão isolada da sua Rede.
*   **RF-002 (Perfis):** Suporte a perfis de `Owner`, `Doctor` e `Secretary` com permissões granulares.
*   **RF-003 (Convites):** Fluxo de convite por e-mail para novos membros da equipe.
*   **RF-004 (Onboarding Auditado):** Wizard obrigatório para novos donos que cria simultaneamente a Rede Principal (Organization) e a Primeira Filial (ClinicUnit), vinculando o CNPJ a ambas. A primeira unidade criada no onboarding é listada em "Minhas Unidades" e o logo da clínica é exibido no header após conclusão (ConfigContext + ClinicUnitService). A especialidade preenchida no passo de dados do usuário é sincronizada para a unidade padrão da organização.
*   **RF-005 (Personalização):** Upload de Logo da Clínica e Foto do Profissional. Nome e foto do usuário no header priorizam o perfil do Firestore (preenchido no onboarding ou em Configurações); barra de completude (perfil + clínica) orienta a conclusão dos dados e inclui a especialidade médica da unidade no cálculo; ao atingir 100% é exibido botão para fechar/dispensar a mensagem.
*   **RF-032 (Gestão de Unidades Físicas):** Suporte a Múltiplas Unidades/Filiais com endereços, logotipos, contatos e fluxos de pagamento independentes, todas vinculadas à Rede Principal. Listagem em "Minhas Unidades" obtida via `ClinicUnitService.getAll` (ordenação em memória por `createdAt`).

### 1.2. Prontuário Eletrônico (PEP) & Atendimento
*   **RF-006 (Timeline):** Visualização cronológica unificada de consultas, exames e documentos.
*   **RF-007 (Anamnese Personalizável):** Formulários dinâmicos de anamnese adaptáveis por especialidade (30+ suportadas).
*   **RF-008 (Curvas de Crescimento):** Módulo de Pediatria com gráficos de curvas de crescimento (WHO/CDC).
*   **RF-009 (Upload de Exames):** Drag-and-drop para PDF/Imagens com pré-visualização integrada.
*   **RF-010 (Gestão de Documentos):** Geração, edição e impressão de Atestados, Laudos, Prescrições e Orientações.

### 1.3. Inteligência Artificial (Ambient Scribe & Clinical AI)
*   **RF-011 (Transcrição em Tempo Real):** Captura de áudio via microfone, streaming para Google Cloud Speech-to-Text.
*   **RF-012 (Scribe Adaptativo):** Transformação de áudio bruto em nota clínica estruturada (SOAP) usando Gemini Models.
*   **RF-013 (Context Builder):** Injeção automática de contexto do paciente (idade, comorbidades, histórico) no prompt da IA.
*   **RF-014 (Fallback Local):** Fallback automático para Whisper (WebAssembly) em caso de falha de conexão ou preferência de privacidade local.
*   **RF-015 (SpeechService Unificado):** Interface única para transitar entre WebSpeech API, Google Cloud e gravações locais.

### 1.4. Gestão Financeira Completa
*   **RF-016 (Transações):** Registro de Receitas e Despesas com categorização e centros de custo.
*   **RF-017 (Reconciliação):** Ferramenta de reconciliação diária de caixa.
*   **RF-018 (Orçamentos):** Criação e envio de orçamentos para pacientes (PDF/WhatsApp).
*   **RF-019 (Recibos):** Geração automática de recibos fiscais.
*   **RF-020 (Dashboard Financeiro):** Gráficos de fluxo de caixa, DRE simplificado e projeções.

### 1.5. Agendamento & Recepção
*   **RF-021 (Agenda Multi-view):** Visualização de agenda por Dia, Semana e Mês.
*   **RF-022 (Fila de Espera):** Gestão de status (Aguardando, Em Atendimento, Finalizado).
*   **RF-023 (Bloqueios):** Gestão de horários de bloqueio e feriados.

### 1.6. Segurança & Auditoria
*   **RF-024 (Audit Logs):** Registro imutável de todas as ações sensíveis (criação, edição, exclusão) no Firestore.
*   **RF-025 (Security Dashboard):** Painel para visualização de alertas de segurança e tentativas de acesso suspeitas.

### 1.7. Compliance & Personalização (Vibe Dev™)
*   **RF-026 (Consentimento LGPD):** O sistema deve gerar termos de consentimento automaticamente com dados do paciente e persistir a assinatura no Cloud Storage.
*   **RF-027 (Templates de Sistema):** Os modelos de documentos (LGPD, receitas, etc.) devem ser personalizáveis pela clínica, com suporte a restauração de padrões de fábrica.
*   **RF-028 (Fidelização):** O sistema deve exibir o tempo de permanência do paciente na clínica no perfil e modais de visualização rápida (ex: "Desde Jan/2025").

### 1.8. SEO & GEO (Otimização para Motores de Busca e IA)
*   **RF-029 (Meta Tags Conversacionais):** Todas as páginas públicas devem ter meta tags otimizadas para perguntas de cauda longa (ex: *"Como reduzir tempo...?"*) e snippets ricos.
*   **RF-030 (Schema Markup Rico):** Implementação obrigatória de JSON-LD (`Organization`, `SoftwareApplication`, `FAQPage`) na Landing Page para indexação semântica.
*   **RF-031 (Acessibilidade de Imagens):** Todas as imagens devem possuir atributos `alt` descritivos e contextuais para indexação por IA e leitores de tela.

### 1.9. Integridade & Navegação (Audit Updates)
*   **RF-033 (Soft Delete):** Exclusão lógica para Pacientes e Agendamentos (`deletedAt`), permitindo recuperação e auditoria.
*   **RF-034 (Paginação):** Listagens de alta densidade (ex: Pacientes) devem usar paginação sob demanda (cursor-based) para performance.
*   **RF-035 (Navegação Consistente):** Todas as seções principais (Modelos, Clínicas) devem possuir Sidebars de navegação contextual padronizadas.
*   **RF-036 (Validação Robusta):** Validação de dados de entrada utilizando schemas fortemente tipados (Zod) para prevenir inconsistências.
*   **RF-037 (Trials Segmentados por Funcionalidade):** O sistema deve permitir que o usuário ative um período de teste gratuito de 7 dias para ferramentas premium individualmente (ex: CASE IA, Scribe IA).
*   **RF-038 (Contador de Trial):** A interface deve exibir um contador regressivo (Badge) com os dias restantes do período de teste ativo na ferramenta correspondente.
*   **RF-039 (Persistência de Testes):** As datas de início e fim dos trials por funcionalidade devem ser persistidas no Firestore dentro do contexto da organização e validadas no hook de assinatura.

---

## 2. Requisitos Não Funcionais (RNF)

### 2.1. Usabilidade & UX
*   **RNF-001 (Design System):** Interface deve seguir rigorosamente o Design System (Shadcn/UI + Tailwind), com suporte nativo a **Dark Mode** e **Light Mode** (Glassmorphism).
*   **RNF-002 (Responsividade):** Layout fluido funcionando em Desktop, Tablets e Mobile (Mobile-First).
*   **RNF-003 (Feedback Visual):** Todo carregamento ou processamento (ex: IA gerando texto) deve ter indicador visual (Skeleton/Spinner).

### 2.2. Performance & Confiabilidade
*   **RNF-004 (LCP):** Largest Contentful Paint do Dashboard < 1.5s.
*   **RNF-005 (Streaming AI):** Latência de transcrição em tempo real < 200ms.
*   **RNF-006 (Offline Support):** PWA habilitado com cache estratégico para consulta de agenda e dados básicos offline.

### 2.3. Segurança & Compliance (NGS2)
*   **RNF-007 (Criptografia):** HTTPS/TLS 1.2+ obrigatório. Dados em repouso criptografados pelo provider (GCP).
*   **RNF-008 (RBAC):** Controle de acesso baseado em função (Role-Based Access Control) aplicado via Firestore Security Rules.
*   **RNF-009 (Isolamento de Dados):** Dados de pacientes estritamente segregados por Organization ID. Regras de banco impedem vazamento entre clínicas.
*   **RNF-010 (Integridade):** Logs de auditoria não podem ser alterados ou deletados via aplicação.
*   **RNF-011 (Core Web Vitals):** Cumulative Layout Shift (CLS) < 0.1 e First Input Delay (FID) < 100ms para garantir ranking SEO.
*   **RNF-012 (AI Crawler Compliance):** O `robots.txt` deve permitir explicitamente crawlers de IA éticos (GPTBot, Claude, etc.) para citação em modelos gerativos.

---

## 3. Regras de Negócio (RN)

*   **RN-001:** Um médico só pode visualizar dados de pacientes vinculados às clínicas onde ele é membro ativo.
*   **RN-002:** A transcrição de IA deve sempre solicitar confirmação/edição do médico antes de ser salva definitivamente no prontuário.
*   **RN-003:** Documentos assinados eletronicamente não podem ser editados, apenas cancelados e refeitos.
*   **RN-004:** A exclusão de um paciente é lógica (soft-delete) para fins de histórico e auditoria, a menos que solicitado via LGPD (hard-delete com log).
*   **RN-005:** A secretária pode agendar para qualquer médico da clínica, mas não pode visualizar o conteúdo clínico de prontuários (apenas dados cadastrais).

---

## 4. Integrações Externas

*   **Google Gemini API:** Processamento de linguagem natural e estruturação clínica.
*   **Google Cloud Speech-to-Text:** Transcrição de áudio de alta fidelidade.
*   **Firebase Authentication:** Provedor de identidade.
*   **Firebase Cloud Messaging:** Notificações push.
