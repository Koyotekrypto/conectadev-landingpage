# USE_CASES.md - Casos de Uso do Sistema

Este documento detalha as interações dos usuários com o sistema Med.Health, mapeando atores, fluxos e pré-condições.

## 👥 Atores do Sistema

| Ator | Descrição |
|------|-----------|
| **Médico (Dono)** | Proprietário da clínica. Tem acesso total administrativo, financeiro e clínico. |
| **Médico (Convidado)** | Profissional que atende na clínica. Acesso restrito aos seus pacientes e agenda. |
| **Secretária** | Responsável pela gestão da agenda e cadastro de pacientes. Sem acesso a dados clínicos sensíveis. |
| **Paciente** | Usuário final que recebe orçamentos, prescrições e (futuramente) acessa seus dados via App. |

---

## 0. Casos de Uso: Assinatura e Onboarding (Novo Usuário)

### UC-000a: Solicitar Demonstração ou Contato (Lead — Landing)
*   **Ator:** Visitante (prospect) não autenticado.
*   **Pré-condição:** Acesso à landing page.
*   **Descrição:** O visitante pode solicitar uma demonstração (formulário "Receba uma demonstração"), pedir que a equipe ligue ("Me ligue") ou informar e-mail no popup de exit intent. Os dados são salvos no Firestore (`landing_leads`) e a equipe técnica recebe um e-mail com os dados do lead (destino: conectadev.br@gmail.com; remetente: notificacoes@soapiamed.com via Resend).
*   **Fluxo:** Preenche nome (opcional), e-mail (obrigatório no demo) e/ou especialidade (pode digitar valor não listado); ou no modal "Me ligue": nome, telefone, melhor horário. Submissão persiste em `landing_leads` e dispara Cloud Function `onLandingLeadCreated` para envio do e-mail.
*   **Documentação:** [CONFIGURAR_EMAIL_LEADS.md](../operations/CONFIGURAR_EMAIL_LEADS.md).

### UC-000: Contratar Assinatura e Criar Organização com Primeira Clínica
*   **Ator:** Novo usuário (prospect)
*   **Pré-condição:** Nenhuma (acesso à landing ou página de planos).
*   **Descrição:** Um novo usuário pode contratar uma assinatura. Nessa assinatura ele tem direito a criar **apenas uma organização** e, já no onboarding, registrar os dados da **primeira clínica** que pertence a essa organização. Cada clínica (unidade) tem dados específicos (localização, contato, etc.); a organização compartilha informações comuns entre as clínicas (unidades).
*   **Fluxo:**
    1.  Usuário acessa a landing ou a página de planos e escolhe um plano (ou inicia trial).
    2.  Realiza cadastro/login e é redirecionado ao onboarding quando não possui organização.
    3.  No wizard de onboarding, preenche os dados da primeira clínica (nome, endereço, CNPJ, contato); o sistema cria em uma única operação a Organização (Rede) e a primeira Unidade (ClinicUnit), vinculando-as.
    4.  Após concluir o onboarding, o usuário gerencia dados comuns da rede em *Gestão e Assinatura* e dados específicos de cada unidade em *Perfil da Unidade* e *Minhas Unidades*.
*   **Regras de Negócio:** (RF-001) A assinatura permite apenas uma organização por usuário proprietário; filiais adicionais são cadastradas como unidades da mesma organização. (RF-004) A primeira filial é criada obrigatoriamente no onboarding.
*   **Pós-condição:** Organização criada, primeira unidade criada e vinculada, usuário como dono da organização; dados comuns na organização e dados específicos por unidade. A primeira unidade aparece em *Minhas Unidades*; o logo da clínica (se enviado) é exibido no header; nome e foto do usuário no header vêm do perfil (Firestore). A especialidade preenchida no onboarding é sincronizada para a unidade padrão e aparece no Perfil da Unidade. Barra de completude (perfil + clínica, incluindo especialidade da unidade) orienta a conclusão dos dados; ao atingir 100% é exibido botão para fechar a mensagem.

### UC-000b: Tours por Tela (Primeiro Acesso)
*   **Ator:** Novo usuário (após onboarding ou tour inicial)
*   **Pré-condição:** Usuário autenticado; tour inicial global já visto (ou pulado)
*   **Descrição:** Ao navegar para cada tela do menu principal pela primeira vez, o sistema exibe um tour contextual breve explicando as funcionalidades daquela tela. O usuário pode pular ou concluir o tour; o status é persistido em localStorage por tela.
*   **Fluxo:**
    1.  Usuário clica em uma aba do menu (ex.: Agenda, Pacientes, Atendimentos).
    2.  Sistema verifica se o tour daquela tela já foi visto.
    3.  Se não, após ~900ms, exibe o tour (Joyride) com 2–4 passos focados nos elementos principais.
    4.  Usuário avança, volta ou pula o tour.
    5.  Ao finalizar ou pular, o sistema marca o tour como visto para aquela tela.
*   **Suporte:** O widget de ajuda (canto inferior direito) oferece "Ver tour desta tela" para rever o tour da tela atual a qualquer momento, e "Refazer Tour Inicial" para o tour global.
*   **Telas com tour:** Dashboard, Agenda, Pacientes, Atendimentos, Tarefas, Financeiro, Case IA, Medicação e Injetáveis, Modelos, Minhas Clínicas, Relatórios, Configurações.

---

## 1. Casos de Uso: Gestão Administrativa (Admin/Dono)

### UC-001: Configurar Clínica (Onboarding)
*   **Ator:** Médico (Dono)
*   **Pré-condição:** Login realizado pela primeira vez.
*   **Fluxo:**
    1.  Usuário acessa o sistema.
    2.  Sistema exibe Wizard de Onboarding.
    3.  Usuário preenche dados da clínica (Nome, Endereço, CNPJ).
    4.  Usuário faz upload da Logo e Foto de perfil.
    5.  Usuário seleciona Especialidade e Layout de impressão.
*   **Pós-condição:** Clínica criada e configurada no Firestore. A especialidade informada no passo de dados do usuário é gravada no perfil e na unidade padrão.

**Configurações (menu):** Após o onboarding, o usuário gerencia o sistema em **Configurações**, que contém as abas: Dados da Clínica, Preferências de Usuário (Dados e Segurança, incluindo **Alteração de senha** — ver UC-018c), Configurações de Agenda, Automação (IA), Layout de Impressão, Configurações de Site, Personalizar Atendimento, Notificações e Modelos de Documentos. A secretária vê apenas a aba Preferências de Usuário.

### UC-002: Convidar Membro da Equipe
*   **Ator:** Médico (Dono)
*   **Fluxo:**
    1.  Acessa *Minhas Clínicas > Outros Profissionais* (ou Profissionais da Saúde, para médicos).
    2.  Clica em "Convidar Profissional".
    3.  Insere e-mail, nome, função (Secretária, Administrador ou Médico) e permissões.
    4.  Sistema envia e-mail de convite com link (ex.: `/invite` ou `/invite/accept/:invitationId`).
*   **Regra de Negócio:** Apenas Dono ou Admin podem criar convites.

### UC-002b: Aceitar convite e entrar na clínica
*   **Ator:** Convidado (profissional que recebeu o convite)
*   **Pré-condição:** Convite enviado pela clínica (UC-002); link válido (ex.: 7 dias).
*   **Fluxo:**
    1.  Recebe e-mail com link do convite.
    2.  Clica no link e acessa a página de convite (`/invite` ou `/invite/accept/:invitationId`).
    3.  Visualiza nome da clínica, função e e-mail.
    4.  Clica em "Criar conta e aceitar convite" (ou faz login se já tiver conta).
    5.  Se cadastro: preenche nome e senha (e-mail já preenchido); sistema cria conta e aceita o convite automaticamente.
    6.  Sistema associa o usuário à organização com o role e permissões definidos no convite.
    7.  Usuário é redirecionado ao app com menu e rotas filtrados pelo seu perfil (ex.: secretária não vê Minhas Clínicas, CASE IA, Relatórios).
*   **Pós-condição:** Usuário é membro da organização; acesso conforme role e permissões.
*   **Documentação:** [CASO_DE_USO_SECRETARIA_CONVITE.md](../operations/CASO_DE_USO_SECRETARIA_CONVITE.md).

---

## 2. Casos de Uso: Atendimento Clínico (Médico)

### UC-003: Realizar Atendimento com IA (Scribe)
*   **Ator:** Médico
*   **Pré-condição:** Paciente agendado e "Em Atendimento".
*   **Fluxo:**
    1.  Acessa o Prontuário do paciente.
    2.  Clica em "Iniciar Consulta".
    3.  Ativa o "Modo Scribe" (Microfone).
    4.  Realiza a consulta conversando naturalmente com o paciente.
    5.  Sistema transcreve o áudio em tempo real.
    6.  Ao finalizar, clica em "Gerar Transcrição".
    7.  IA processa e gera nota SOAP (Subjetivo, Objetivo, Avaliação, Plano).
    8.  Médico revisa e salva no prontuário.

### UC-004: Prescrever Medicamento (Memed/Sinapse)
*   **Ator:** Médico
*   **Fluxo:**
    1.  Na aba "Prescrição", busca pelo medicamento.
    2.  Define posologia e quantidade.
    3.  Adiciona à lista de prescrição.
    4.  Clica em "Gerar PDF" ou "Enviar via SMS".
*   **Regra de Negócio:** Exige token válido para medicamentos controlados.
*   **Exceção (plano sem Memed):** Se o plano do usuário não incluir a integração Memed, ao acessar a rota `/memed` o sistema exibe tela de teaser/upgrade (MemedTeaser), incentivando a assinatura que desbloqueia o recurso.

### UC-004b: Gestão de Múltiplos Documentos no Prontuário
*   **Ator:** Médico
*   **Fluxo:**
    1.  Durante a consulta, clica em "Novo Documento" (Atestado, Laudo, Receituário).
    2.  O sistema abre uma nova aba interna para este documento.
    3.  Médico intercala a edição entre os diferentes documentos abertos simultaneamente.
    4.  Médico emite ou exporta cada documento individualmente para PDF.

### UC-005: Visualizar Linha do Tempo (Histórico)
*   **Ator:** Médico
*   **Fluxo:**
    1.  Acessa Perfil do Paciente.
    2.  Visualiza timeline com consultas anteriores, exames e documentos.
    3.  Filtra por tipo (Consulta, Exame, Anexo).

### UC-005b: Gestão Rápida de Notificações
*   **Ator:** Qualquer Usuário
*   **Fluxo:**
    1.  Acessa o sino de Notificações no Header.
    2.  Clica em "Limpar Todas".
    3.  Confirma a deleção destrutiva no componente inline premium.
    4.  Sistema apaga registros do Firestore e informa estado vazio.

---

## 3. Casos de Uso: Recepção (Secretária)

### UC-006: Agendar Paciente
*   **Ator:** Secretária
*   **Fluxo:**
    1.  Acessa a Agenda.
    2.  Seleciona o Médico e o Horário disponível.
    3.  Busca paciente existente ou cadastra novo (Nome/Telefone rápido).
    4.  Confirma o agendamento.
    5.  Sistema envia confirmação via WhatsApp/SMS (se integrado).

### UC-007: Gerenciar Fila de Espera
*   **Ator:** Secretária
*   **Fluxo:**
    1.  Recebe o paciente na clínica.
    2.  Localiza o agendamento no dia.
    3.  Altera status para "Aguardando".
    4.  Médico visualiza na Dashboard que o paciente chegou.

---

## 4. Casos de Uso: Financeiro

### UC-008: Registrar Pagamento de Consulta
*   **Ator:** Secretária ou Médico
*   **Fluxo:**
    1.  Ao finalizar atendimento, acessa o módulo Financeiro da consulta.
    2.  Lança o valor recebido e a forma de pagamento (Pix, Cartão, Dinheiro).
    3.  Sistema gera recibo automático (opcional).
    4.  Transação é registrada no Fluxo de Caixa.

### UC-012: Reconciliação Diária
*   **Ator:** Médico (Dono) ou Gestor
*   **Fluxo:**
    1.  Acessa *Financeiro > Reconciliação*.
    2.  Confere as entradas do dia vs saldo real.
    3.  Fecha o caixa do dia.

---

## 5. Casos de Uso: Segurança e Engajamento

### UC-013: Auditoria Imutável de Prontuário
*   **Ator:** Sistema / Auditor
*   **Descrição:** Registro automático de toda alteração em dados sensíveis do paciente, garantindo integridade médico-legal.
*   **Fluxo:**
    1.  Médico altera uma evolução ou prescrição.
    2.  O sistema (via Cloud Functions) captura o estado anterior e o novo.
    3.  Gera um log na subcoleção `audit_trail` com timestamp e ID do autor.
    4.  Regras de segurança impedem a deleção ou edição deste log.

### UC-014: Coleta de Depoimentos (Social Proof)
*   **Ator:** Paciente / Administrador
*   **Fluxo:**
    1.  Paciente recebe link de feedback após consulta.
    2.  Preenche depoimento e avaliação (estrelas).
    3.  Administrador visualiza na dashboard de marketing.
    4.  Aprovação para exibição na Landing Page.

### UC-015: Acesso Direto via Link (Deep Linking)
*   **Ator:** Médico / Secretária
*   **Fluxo:**
    1.  Usuário clica em um link externo (e-mail/notificação) ou digita URL `/pacientes?id=XYZ`.
    2.  O sistema autentica o usuário.
    3.  Redireciona e abre automaticamente o prontuário do paciente correspondente.

### UC-016: Sincronização de Status da Agenda
*   **Ator:** Sistema
*   **Descrição:** Atualização automática do status do agendamento baseado no ciclo de vida da consulta.
*   **Fluxo:**
    1.  Médico inicia a consulta -> Status muda para `in_progress`.
    2.  Médico finaliza e salva a consulta -> Status muda para `finished`.
    3.  Agenda reflete visualmente a cor do novo status em tempo real.

### UC-017: Registrar-se Manualmente (Sem Google)
*   **Ator:** Qualquer Usuário (Prospect)
*   **Fluxo:**
    1.  Acessa a página de Login.
    2.  Clica na aba "Cadastro".
    3.  Preenche **Nome Completo**, **CRM (Número)**, **E-mail** e **Senha** (mínimo 8 caracteres).
    4.  Clica em "Criar Conta".
    5.  Sistema cria registro no Firebase Auth.
    6.  Sistema inicializa perfil no Firestore com os dados fornecidos.
    7.  Sistema envia e-mail de verificação automático.
    8.  Exibe mensagem de sucesso solicitando verificação de e-mail.
    9.  Redireciona para o fluxo de Onboarding se o login for completado.
*   **Pós-condição:** Usuário criado, perfil inicializado e e-mail de verificação enviado.
*   **Variante (Cadastro por convite):** Se o usuário acessar via link do convite (parâmetros `invite=1` e `invitationId`), o e-mail vem preenchido e o CRM pode ser omitido. Após criar a conta, o sistema aceita o convite automaticamente e associa o usuário à organização (ver UC-002b).

### UC-018: Autenticar-se com Credenciais (Email/Senha)
*   **Ator:** Usuário Cadastrado
*   **Fluxo:**
    1.  Acessa a página de Login.
    2.  Insere E-mail e Senha.
    3.  Clica em "Login".
    4.  Sistema valida credenciais no Firebase Auth e usa persistência local (sessão mantida ao fechar aba/navegador).
    5.  Redireciona para a tela inicial preferencial (Agenda/Dashboard) ou Onboarding pendente.
*   **Pós-condição:** Usuário permanece logado até fazer logout manual (menu Sair). Não há logout automático por inatividade.
*   **Exceção (Senha incorreta):** Sistema exibe feedback visual amigável ("Senha incorreta") e oferece recuperação de senha.
*   **Exceção (Conta não verificada):** O sistema permite o login, mas recomenda a verificação via banner (implementação futura).

### UC-018b: Recuperar senha (Esqueceu a senha?)
*   **Ator:** Usuário que não lembra a senha (cadastro e-mail/senha) ou que entrou só com Google e deseja definir uma senha.
*   **Fluxo:**
    1.  Na tela de Login, clica em "Esqueceu a senha?".
    2.  Informa o e-mail cadastrado.
    3.  Sistema envia e-mail de redefinição via Firebase Auth (`sendPasswordResetEmail` com `actionCodeSettings` para redirecionar ao `/login` após o reset).
    4.  Usuário acessa o link no e-mail, redefine a senha e é redirecionado à tela de login do app.
*   **Pós-condição:** Senha alterada; usuário pode entrar com e-mail e nova senha. Para contas só Google, o provedor `password` é adicionado.
*   **Referência técnica:** `docs/reference/AUTH_SESSION.md` (Recuperação de senha).

### UC-018c: Alterar senha (Preferências de Usuário)
*   **Ator:** Usuário autenticado com provedor e-mail/senha.
*   **Pré-condição:** Login com conta que possui provedor `password` (cadastro normal ou conta que já definiu senha via recuperação).
*   **Fluxo:**
    1.  Acessa Configurações > Preferências de Usuário.
    2.  Na seção "Dados e Segurança" > "Alteração de Senha", preenche senha atual, nova senha e confirmação.
    3.  Clica em "Alterar Senha". Sistema reautentica e atualiza a senha no Firebase Auth.
*   **Pós-condição:** Senha alterada; sessão atual mantida.
*   **Exceção (usuário só Google/Apple):** O formulário não é exibido; é mostrada mensagem orientando a usar as configurações do provedor ou "Esqueceu a senha?" na tela de login para definir uma senha.
*   **Referência técnica:** `docs/reference/AUTH_SESSION.md` (Alteração de senha).

### UC-019: Autenticar-se via Social Login (Apple/Google)
*   **Ator:** Qualquer Usuário
*   **Fluxo:**
    1.  Acessa a página de Login.
    2.  Clica no botão do provedor desejado (Google ou Apple).
    3.  Sistema abre popup de autenticação do provedor.
    4.  Usuário autoriza o acesso.
    5.  Sistema autentica no Firebase Auth.
    6.  Sistema verifica se o perfil existe; se não, inicializa um perfil básico.
    7.  Redireciona para a tela inicial ou Onboarding.

### UC-020: Usar Assistentes IA
*   **Ator:** Médico (Dono) ou Administrador
*   **Pré-condição:** Assinatura que inclui o recurso "Assistentes IA" (feature gate `assistantes`).
*   **Descrição:** Acesso à tela de Assistentes IA (rota `/assistantes`) para configurar ou operar assistentes de atendimento automático via WhatsApp, qualificação de leads e agendamento sem intervenção humana.
*   **Fluxo:** Usuário acessa a funcionalidade (por link direto ou entrada no menu, quando disponível); o sistema valida o plano e exibe a interface de Assistentes IA. Sem o plano adequado, é exibida tela de upgrade.
*   **Documentação:** Referência técnica em `useOrgRole` (canAccess) e rota protegida por `RequireActiveSubscription` no `App.tsx`.

### UC-000c: Acesso beta por token (opcional)
*   **Ator:** Visitante (campanha de acesso antecipado)
*   **Descrição:** Acesso à landing ou ao cadastro via link com token de beta (rota `/beta/:token`). Usado em campanhas para liberar acesso antecipado a prospects.
*   **Fluxo:** Usuário clica no link recebido (ex.: e-mail ou campanha); cai em BetaInvitePage; pode seguir para cadastro ou login. O token identifica a origem da campanha.

---

## 6. Fluxos de Negócio Configuráveis

Para atender à realidade híbrida do mercado, o Med.Health permite a configuração de fluxos operacionais por clínica (Tenant Settings).

### UC-010: Fluxo de Pagamento Pré-Pago (Check-in Financeiro)
*   **Cenário:** Clínicas populares ou consultas particulares padrão onde o médico só atende se estiver pago.
*   **Configuração:** `payment_workflow = 'pre'` (valor usado no código)
*   **Fluxo:**
    1.  Secretária abre o modal de agendamento e clica em "Confirmar".
    2.  Sistema detecta configuração `pre_consultation`.
    3.  Sistema exibe modal intermediário perguntando se deseja lançar o pagamento agora.
    4.  **Ação A (Receber Agora):** Agendamento fica com status `ready_to_attend` e ícone verde (Pago).
    5.  **Ação B (Adiar):** Agendamento fica com status `confirmed`, mas com ícone vermelho (Pendente).
*   **Regra de Bloqueio:** Se o médico tentar iniciar atendimento com pendência, o sistema solicita confirmação para prosseguir.

### UC-011: Fluxo de Pagamento Pós-Pago (Checkout)
*   **Cenário:** Clínicas de estética ou procedimentos onde o valor pode mudar durante a consulta.
*   **Configuração:** `payment_workflow = 'post'` (valor usado no código)
*   **Fluxo:**
    1.  Secretária confirma o agendamento no modal (status `confirmed`).
    2.  O médico realiza o atendimento e clica em "Finalizar".
    3.  **Gatilho de Saída:** Status do paciente muda para `checkout_pending` no Kanban da secretária.
    4.  Sistema exibe alerta visual: "Dr. [Nome] finalizou. Realizar cobrança de [Paciente]".
    5.  Secretária clica em "Gerar Recebimento", processa a cobrança e encerra o ciclo.

---

## Mapeamento com Requisitos (Traceability Matrix)

| Caso de Uso | Requisito Relacionado |
|-------------|-----------------------|
| UC-000 | RF-001 (Mono-Org), RF-004 (Onboarding), RF-032 (Unidades) |
| UC-000c | RF-001 (Acesso beta por token) |
| UC-001 | RF-004, RF-005 |
| UC-002 | RF-002, RF-003 |
| UC-002b | RF-002, RF-003 (Aceitar convite) |
| UC-003 | RF-011, RF-012, RF-013 |
| UC-004 | RF-010 |
| UC-004b | RF-014 (Multitasking e Sistema de Abas) |
| UC-005 | RF-006 |
| UC-005b | RF-008 (Central de Avisos e Notificações) |
| UC-006 | RF-021, RF-023 |
| UC-007 | RF-022 |
| UC-008 | RF-016, RF-019 |
| UC-012 | RF-017 (Reconciliação Diária) |
| UC-010 | RF-030 (Configuração de Fluxo) |
| UC-011 | RF-031 (Fluxo Checkout) |
| UC-013 | RF-040 (Audit Trail e Compliance) |
| UC-014 | RF-045 (Marketing e Social Proof) |
| UC-015 | RF-007 (UX e Navegação Inteligente) |
| UC-016 | RF-025 (Automação de Fila) |
| UC-017 | RF-001 (Cadastro Manual) |
| UC-018 | RF-001 (Autenticação Segura) |
| UC-018b | RF-001 (Recuperação de senha) |
| UC-018c | RF-001 (Alteração de senha em preferências) |
| UC-019 | RF-001 (Social Auth) |
| UC-020 | RF-001 (Assistentes IA) |

---

## 6. Mapeamento de Abas por Persona

| Aba | Descrição Geral | Secretária | Médico | Administrador |
| :--- | :--- | :--- | :--- | :--- |
| **Dashboard** | Visão geral da operação. | Fila de espera e status do dia. | Resumo do dia e KPIs clínicos. | Faturamento, CAC, LTV e Metas. |
| **CASE IA** | Inteligência assistida. | Suporte em dúvidas adm. | Scribe, Diagnóstico e SOAP. | BI e Análise preditiva de dados. |
| **Agenda** | Gestão de horários. | Gerenciar bookings, check-ins. | Visualizar horários de atendimento. | Ocupação de salas e produtividade. |
| **Pacientes** | Prontuário e dados. | Cadastro, LGPD e Contato. | Histórico, Biomarcadores, IoT. | Análise demográfica e coortes. |
| **Atendimentos** | Ciclo de consulta. | Status da fila e pós-atendimento. | Evolução, prescrição, laudo. | Auditoria de atendimentos. |
| **Tarefas** | Gestão de TO-DOs. | Confirmações e follow-up. | Lembretes e follow-up clínico. | Gestão operacional da clínica. |
| **Medicação** | Estoque e prescrição. | Controle de estoque de insumos. | Prescrição e injetáveis. | Gestão de compras e orçamentos. |
| **Modelos** | Templates de docs. | Termos de consentimento/Docs. | Anamneses, SOAP e Exames. | Padronização de protocolos. |
| **Clínicas** | Cadastro de unidades. | Trocar de unidade (recepção). | N/A (Perfil profissional). | Gestão de unidades e equipe. |
| **Relatórios** | Extração de dados. | Listas de pacientes e agendamentos. | Produtividade e desfechos. | Consolidado financeiro e estratégico. |
| **Financeiro** | Gestão monetária. | Lançar pagamentos e recibos. | Extrato de repasse profissional. | DRE, Fluxo de Caixa, Reconciliação. |
| **Configurações** | Ajustes do sistema. | Perfil e notificações locais. | Carimbo, CRM e preferências. | Permissões e Integrações. |

---

## 7. Estórias de Usuário (User Stories)

### US-001: Atendimento sem distrações (Médico)
*   **Como** Médico, **quero** utilizar o CASE IA no modo Scribe durante a consulta, **para que** eu possa manter contato visual direto com o paciente em vez de olhar para a tela, sabendo que a nota estruturada será gerada automaticamente.

### US-002: Recepção de Alto Desempenho (Secretária)
*   **Como** Secretária, **quero** visualizar o status de "Aguardando" no dashboard em tempo real, **para que** eu possa organizar a prioridade da fila sem precisar interromper o atendimento médico.

### US-003: Visão de Sobrevoo do Negócio (Administrador)
*   **Como** Administrador, **quero** acessar o relatório de reconciliação financeira cruzado com a agenda, **para que** eu possa garantir a saúde financeira da clínica e identificar discrepâncias instantaneamente.

### US-004: Automação de Cuidado (Médico/Secretária)
*   **Como** Médico, **quero** criar tarefas automáticas de follow-up pós-consulta, **para que** a recepção saiba exatamente quem contatar e o engajamento do paciente seja maximizado.

### US-005: Retorno Pré-definido no Checkout (Médico)
*   **Como** Médico, **quero** agendar o retorno do paciente diretamente no checkout da consulta (ex: retorno em 3 meses pós-implante hormonal), **para que** o paciente já saia da consulta com o próximo horário marcado e as automações de confirmação e preparação de retorno sejam disparadas automaticamente.

---
