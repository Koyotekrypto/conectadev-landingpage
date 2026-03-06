import { FunnelOption, FunnelStepDefinition } from './funnelPaths';

export type FunnelData = {
    profile: string;
    profileLabel: string;
    subniche: string;
    step2_answer: string;
    step3_answer: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    whatsapp: string;
    contextUrl: string;
};

export const initialProfiles: FunnelOption[] = [
    { id: 'saude', label: 'Saúde / Clínicas', icon: '🩺' },
    { id: 'direito', label: 'Advocacia / Jurídico', icon: '⚖️' },
    { id: 'imobiliaria', label: 'Imobiliário / Construtora', icon: '🏠' },
    { id: 'tech', label: 'Tech / B2B / SaaS', icon: '🚀' },
    { id: 'gastronomia', label: 'Gastronomia / Restaurante', icon: '🍔' },
    { id: 'ecommerce', label: 'E-commerce / Varejo', icon: '🛒' },
    { id: 'educacao', label: 'Educação / Cursos', icon: '🎓' },
    { id: 'automotivo', label: 'Automotivo / Oficina', icon: '🚗' },
    { id: 'agro', label: 'Agro / Agronegócio', icon: '🚜' },
    { id: 'eventos', label: 'Eventos / Produção', icon: '🎉' },
    { id: 'industria', label: 'Indústria / Logística', icon: '🏭' },
    { id: 'outro', label: 'Outro Negócio', icon: '💡' },
];

export const commonFinalSteps: FunnelStepDefinition[] = [
    {
        id: 'timeline',
        title: 'Qual é a sua urgência para o projeto?',
        subtitle: 'Para alinharmos as expectativas de entrega.',
        options: [
            { id: 'imediato', label: 'Urgente (< 30 dias)', icon: 'bolt' },
            { id: 'curto', label: 'Curto Prazo (1-3 meses)', icon: 'event' },
            { id: 'planejamento', label: 'Planejamento (3-6 meses)', icon: 'edit_calendar' },
            { id: 'sem_pressa', label: 'Sem pressa (Foco em Qualidade)', icon: 'diamond' },
        ]
    },
    {
        id: 'budget',
        title: 'Qual a faixa de investimento prevista?',
        subtitle: 'Para dimensionarmos o escopo ideal para o seu momento.',
        options: [
            { id: '2k_5k', label: 'R$ 2.000 a R$ 5.000', icon: 'payments' },
            { id: '5k_10k', label: 'R$ 5.000 a R$ 10.000', icon: 'account_balance_wallet' },
            { id: '10k_plus', label: 'Acima de R$ 10.000', icon: 'business_center' },
            { id: 'preciso_orcamento', label: 'Preciso de um escopo antes', icon: 'help_center' },
        ]
    }
];

export const funnelPathsMap: Record<string, FunnelStepDefinition[]> = {
    'saude': [
        {
            id: 'subniche',
            title: 'Qual a especialidade da sua unidade?',
            subtitle: 'Personalizamos a estratégia para o seu nicho médico.',
            options: [
                { id: 'medica', label: 'Clínica Médica / Especialista', icon: 'medical_services' },
                { id: 'odonto', label: 'Odontologia / Estética Bucal', icon: 'dentistry' },
                { id: 'estetica', label: 'Estética / Harmonização', icon: 'face' },
                { id: 'vet', label: 'Veterinária / Pet Care', icon: 'pets' },
                { id: 'psico', label: 'Psicologia / Saúde Mental', icon: 'psychology' },
                { id: 'fisio', label: 'Fisioterapia / Reabilitação', icon: 'fitness_center' },
                { id: 'hospitalar', label: 'Hospital / Centro Cirúrgico', icon: 'domain' },
            ]
        },
        {
            id: 'pain',
            title: 'Qual é o seu maior desafio hoje?',
            subtitle: 'Onde a tecnologia pode te ajudar imediatamente?',
            options: [
                { id: 'captar_pacientes', label: 'Captar pacientes particulares', icon: 'group_add' },
                { id: 'reduzir_faltas', label: 'Automatizar Agendamentos', icon: 'event_busy' },
                { id: 'autoridade', label: 'Branding e Autoridade Digital', icon: 'military_tech' },
                { id: 'app_interno', label: 'Sistemas Internos / Apps', icon: 'health_and_safety' },
            ]
        },
        {
            id: 'maturity',
            title: 'Qual o tamanho da operação?',
            subtitle: 'Dimensionamos a infraestrutura ideal.',
            options: [
                { id: 'sozinho', label: 'Atendimento Individual', icon: 'person' },
                { id: 'pequena', label: 'Equipe Pequena (2-5 docs)', icon: 'groups' },
                { id: 'media', label: 'Clínica Média/Grande', icon: 'location_city' },
            ]
        }
    ],
    'direito': [
        {
            id: 'subniche',
            title: 'Qual a principal área de atuação?',
            subtitle: 'O marketing jurídico varia conforme o nicho.',
            options: [
                { id: 'civel', label: 'Direito Cível / Família', icon: 'family_restroom' },
                { id: 'trabalhista', label: 'Trabalhista / Previdenciário', icon: 'work' },
                { id: 'tributario', label: 'Tributário / Fiscal', icon: 'request_quote' },
                { id: 'empresarial', label: 'Empresarial / Societário', icon: 'corporate_fare' },
                { id: 'criminal', label: 'Criminal / Penal', icon: 'gavel' },
            ]
        },
        {
            id: 'pain',
            title: 'Onde está o foco do escritório?',
            subtitle: 'Tecnologia p/ conversão jurídica.',
            options: [
                { id: 'captar_leads', label: 'LPs de Alta Performance', icon: 'ads_click' },
                { id: 'institucional', label: 'Site Premium Autoritativo', icon: 'account_balance' },
                { id: 'crm', label: 'Gestão de Leads (CRM)', icon: 'contact_page' },
            ]
        },
        {
            id: 'maturity',
            title: 'Tamanho da banca/escritório?',
            subtitle: 'Para dimensionar o volume de leads.',
            options: [
                { id: 'individual', label: 'Boutique / Individual', icon: 'person' },
                { id: 'pequena', label: 'Sociedade Enxuta (2-5)', icon: 'group' },
                { id: 'media', label: 'Médio / Grande Porte', icon: 'business' },
            ]
        }
    ],
    'imobiliaria': [
        {
            id: 'subniche',
            title: 'Qual o seu modelo de negócio?',
            subtitle: 'Mapeamos a jornada do seu cliente.',
            options: [
                { id: 'imobiliaria', label: 'Imobiliária (Venda/Aluguel)', icon: 'real_estate_agent' },
                { id: 'construtora', label: 'Construtora / Incorporadora', icon: 'foundation' },
                { id: 'arquitetura', label: 'Arquitetura / Interiores', icon: 'architecture' },
                { id: 'planejados', label: 'Móveis Planejados', icon: 'chair' },
                { id: 'engenharia', label: 'Engenharia / Reformas', icon: 'engineering' },
            ]
        },
        {
            id: 'pain',
            title: 'Onde precisamos atuar?',
            subtitle: 'Foco em geração de oportunidades.',
            options: [
                { id: 'lancamentos', label: 'Páginas de Lançamentos', icon: 'rocket_launch' },
                { id: 'estoque', label: 'Catálogo / Site de Imóveis', icon: 'domain' },
                { id: 'automacao', label: 'Automação de Atendimento', icon: 'robot_2' },
            ]
        },
        {
            id: 'maturity',
            title: 'Volume médio de negócios?',
            subtitle: 'Para alinhar a robustez do sistema.',
            options: [
                { id: 'pequeno', label: 'Operação Local', icon: 'store' },
                { id: 'medio', label: 'Atuação Regional', icon: 'map' },
                { id: 'alto', label: 'Nível Nacional / Grande Volume', icon: 'public' },
            ]
        }
    ],
    'educacao': [
        {
            id: 'subniche',
            title: 'Qual o formato do ensino?',
            subtitle: 'Criamos experiências de aprendizado.',
            options: [
                { id: 'escola', label: 'Escola / Faculdade / EAD', icon: 'school' },
                { id: 'cursos', label: 'Cursos Livres / Profissionalizantes', icon: 'auto_stories' },
                { id: 'mentoria', label: 'Mentorias / High-Ticket', icon: 'co_present' },
                { id: 'infoproduto', label: 'Infoprodutos / Lançamentos', icon: 'video_library' },
                { id: 'b2b', label: 'Treinamento Corporativo (B2B)', icon: 'business_center' },
            ]
        },
        {
            id: 'pain',
            title: 'Maior necessidade educacional?',
            subtitle: 'Tecnologia que ensina e vende.',
            options: [
                { id: 'vendas', label: 'Funis de Vendas Perpétuo', icon: 'shopping_cart' },
                { id: 'plataforma', label: 'Plataforma de Alunos (LMS)', icon: 'laptop_chromebook' },
                { id: 'captacao', label: 'Captação de Matrículas', icon: 'person_add' },
            ]
        },
        {
            id: 'maturity',
            title: 'Volume de alunos ativos?',
            subtitle: 'Escalabilidade é o nosso foco.',
            options: [
                { id: 'zero', label: 'Iniciando do Zero', icon: 'rocket' },
                { id: 'ate_500', label: 'Até 500 Alunos', icon: 'groups' },
                { id: 'acima_500', label: 'Escala (500+ Alunos)', icon: 'trending_up' },
            ]
        }
    ],
    'tech': [
        {
            id: 'subniche',
            title: 'Qual a categoria da sua Tech?',
            subtitle: 'Falamos a língua da inovação.',
            options: [
                { id: 'saas', label: 'SaaS / Software as a Service', icon: 'cloud_queue' },
                { id: 'consultoria', label: 'Consultoria de TI / Dev Shop', icon: 'code' },
                { id: 'cyber', label: 'Cybersecurity / Infra', icon: 'security' },
                { id: 'rh', label: 'Recrutamento / HR Tech', icon: 'badge' },
                { id: 'fintech', label: 'Fintech / Crypto / Pay', icon: 'account_balance' },
            ]
        },
        {
            id: 'pain',
            title: 'Gargalo tecnológico principal?',
            subtitle: 'Otimizando seu motor de crescimento.',
            options: [
                { id: 'vendas_b2b', label: 'Máquina de Aquisição B2B', icon: 'hub' },
                { id: 'mvp', label: 'Desenvolvimento de MVP / Produto', icon: 'biotech' },
                { id: 'automacao', label: 'Escala e Automatização', icon: 'precision_manufacturing' },
            ]
        },
        {
            id: 'maturity',
            title: 'Fase atual da empresa?',
            subtitle: 'Ajustamos o pitch conforme o momento.',
            options: [
                { id: 'early', label: 'Early Stage / Ideação', icon: 'lightbulb' },
                { id: 'growth', label: 'Growth / Scale-up', icon: 'trending_up' },
                { id: 'enterprise', label: 'Enterprise / Consolidada', icon: 'corporate_fare' },
            ]
        }
    ],
    'gastronomia': [
        {
            id: 'subniche',
            title: 'Qual o perfil do seu estabelecimento?',
            subtitle: 'Sabor e tecnologia caminham juntos.',
            options: [
                { id: 'restaurante', label: 'Restaurante / Cozinha Autoral', icon: 'restaurant' },
                { id: 'delivery', label: 'Delivery / Dark Kitchen', icon: 'delivery_dining' },
                { id: 'cafeteria', label: 'Cafeteria / Padaria / Bar', icon: 'coffee' },
                { id: 'buffet', label: 'Buffet / Eventos / Catering', icon: 'celebration' },
                { id: 'franquia', label: 'Rede / Franquia Alimentícia', icon: 'hub' },
            ]
        },
        {
            id: 'pain',
            title: 'Qual a dor mais latente?',
            subtitle: 'Aumentando a margem da sua operação.',
            options: [
                { id: 'delivery_proprio', label: 'Sair das taxas (App Próprio)', icon: 'money_off' },
                { id: 'digitalizacao', label: 'Cardápio / Autoatendimento', icon: 'qr_code_scanner' },
                { id: 'fidelizacao', label: 'Fidelização e CRM', icon: 'loyalty' },
            ]
        },
        {
            id: 'maturity',
            title: 'Volume médio de pedidos?',
            subtitle: 'Infraestrutura para não cair no pico.',
            options: [
                { id: 'iniciante', label: 'Iniciando / Pequeno volume', icon: 'lunch_dining' },
                { id: 'consolidado', label: 'Operação Consolidada', icon: 'flatware' },
                { id: 'alto', label: 'Alta Demanda / Rede', icon: 'factory' },
            ]
        }
    ],
    'automotivo': [
        {
            id: 'subniche',
            title: 'Qual o foco da sua empresa?',
            subtitle: 'Acelerando sua presença digital.',
            options: [
                { id: 'concessionaria', label: 'Concessionária / Revenda', icon: 'directions_car' },
                { id: 'oficina', label: 'Oficina Mecânica / Elétrica', icon: 'build' },
                { id: 'estetica', label: 'Estética Automotiva / Detail', icon: 'auto_fix_high' },
                { id: 'locacao', label: 'Locação / Aluguel de Frotas', icon: 'car_rental' },
            ]
        },
        {
            id: 'pain',
            title: 'Objetivo de aceleração?',
            subtitle: 'Convertendo km em leads.',
            options: [
                { id: 'agendamento', label: 'Sistema de Agendamento Online', icon: 'calendar_month' },
                { id: 'leads', label: 'Captação de leads qualificados', icon: 'person_search' },
                { id: 'estoque', label: 'Catálogo Digital de Veículos', icon: 'view_list' },
            ]
        },
        {
            id: 'maturity',
            title: 'Tamanho da sua frota/pátio?',
            subtitle: 'Para dimensionar a visibilidade.',
            options: [
                { id: 'pequeno', label: 'Loja / Oficina Local', icon: 'garage' },
                { id: 'medio', label: 'Média Operação / Showroom', icon: 'directions_car' },
                { id: 'grande', label: 'Rede / Grupo Automotivo', icon: 'location_city' },
            ]
        }
    ],
    'agro': [
        {
            id: 'subniche',
            title: 'Qual setor do Agro?',
            subtitle: 'Conectando o campo à tecnologia.',
            options: [
                { id: 'produtor', label: 'Produtor Rural / Fazenda', icon: 'agriculture' },
                { id: 'maquinas', label: 'Máquinas e Implementos', icon: 'settings_suggest' },
                { id: 'agtech', label: 'Agtech / Software para Agro', icon: 'satellite_alt' },
                { id: 'consultoria', label: 'Consultoria / Engenharia Agron.', icon: 'psychology' },
            ]
        },
        {
            id: 'pain',
            title: 'Desafio no agronegócio?',
            subtitle: 'Modernizando a gestão e vendas.',
            options: [
                { id: 'site', label: 'Presença Digital de Autoridade', icon: 'public' },
                { id: 'vendas', label: 'Plataforma de Negociação / B2B', icon: 'handshake' },
                { id: 'monitoramento', label: 'Dashboard de Dados / Monitoram.', icon: 'data_thresholding' },
            ]
        },
        {
            id: 'maturity',
            title: 'Porte da operação rural?',
            subtitle: 'Tecnologia que escala com a safra.',
            options: [
                { id: 'pequena', label: 'Pequena Propriedade', icon: 'home' },
                { id: 'media', label: 'Média Produção', icon: 'grass' },
                { id: 'grande', label: 'Grande Grupo Agroindustrial', icon: 'domain' },
            ]
        }
    ],
    'eventos': [
        {
            id: 'subniche',
            title: 'Qual o seu tipo de evento?',
            subtitle: 'Tecnologia que transforma momentos.',
            options: [
                { id: 'social', label: 'Casamentos / Eventos Sociais', icon: 'favorite' },
                { id: 'corporativo', label: 'Congressos / Corporativo', icon: 'groups_3' },
                { id: 'producao', label: 'Produção / Shows / Festivais', icon: 'confirmation_number' },
                { id: 'casting', label: 'Casting / Agenciamento', icon: 'person_pin' },
            ]
        },
        {
            id: 'pain',
            title: 'Gargalo na organização?',
            subtitle: 'Simplificando a experiência do convidado.',
            options: [
                { id: 'ticketing', label: 'Venda de Ingressos Online', icon: 'shopping_bag' },
                { id: 'rsvps', label: 'Gestão de RSVPs e Convidados', icon: 'assignment_ind' },
                { id: 'portfolio', label: 'Site / Portfólio de Impacto', icon: 'photo_camera' },
            ]
        },
        {
            id: 'maturity',
            title: 'Frequência de produções?',
            subtitle: 'Para alinhar a sustentação técnica.',
            options: [
                { id: 'ocasional', label: 'Eventos Ocasionais', icon: 'event' },
                { id: 'frequente', label: 'Calendário Ativo de Eventos', icon: 'event_repeat' },
                { id: 'grande', label: 'Grandes Produções Massivas', icon: 'stadium' },
            ]
        }
    ],
    'industria': [
        {
            id: 'subniche',
            title: 'Qual o seu segmento industrial?',
            subtitle: 'Sincronizando a produção ao digital.',
            options: [
                { id: 'usinagem', label: 'Metalurgia / Usinagem', icon: 'precision_manufacturing' },
                { id: 'textil', label: 'Têxtil / Confecção', icon: 'checkroom' },
                { id: 'alimentos', label: 'Indústria Alimentícia', icon: 'set_meal' },
                { id: 'logistica', label: 'Logística / Transportadora', icon: 'local_shipping' },
            ]
        },
        {
            id: 'pain',
            title: 'Principal desafio fabril?',
            subtitle: 'Otimização 4.0 para o seu negócio.',
            options: [
                { id: 'b2b', label: 'Catálogo de Produtos B2B', icon: 'category' },
                { id: 'processos', label: 'Automação de Orçamentos', icon: 'request_page' },
                { id: 'dashboard', label: 'Dashboards de Produção (BI)', icon: 'bar_chart' },
            ]
        },
        {
            id: 'maturity',
            title: 'Tamanho do parque industrial?',
            subtitle: 'Alinhando robustez e tecnologia.',
            options: [
                { id: 'pequeno', label: 'Fábrica Local / Enxuta', icon: 'home_repair_service' },
                { id: 'medio', label: 'Média Indústria', icon: 'domain' },
                { id: 'grande', label: 'Planta Industrial Grande/Global', icon: 'factory' },
            ]
        }
    ],
    'outro': [
        {
            id: 'subniche',
            title: 'Qual o perfil do seu negócio?',
            subtitle: 'Explique brevemente seu campo de atuação.',
            options: [
                { id: 'servicos', label: 'Prestação de Serviços', icon: 'handyman' },
                { id: 'comercio', label: 'Comércio / Loja Física', icon: 'storefront' },
                { id: 'infoproduto', label: 'Infoproduto / Digital', icon: 'sensors' },
                { id: 'consultoria', label: 'Consultoria / Mentorias', icon: 'emoji_objects' },
            ]
        },
        {
            id: 'pain',
            title: 'Qual objetivo te trouxe aqui?',
            subtitle: 'Defina a prioridade tecnológica.',
            options: [
                { id: 'site', label: 'Criar um Site Profissional', icon: 'web' },
                { id: 'vendas', label: 'Aumentar minhas vendas', icon: 'trending_up' },
                { id: 'sistema', label: 'Sistema / Automação', icon: 'settings_input_component' },
            ]
        },
        {
            id: 'maturity',
            title: 'Como está seu negócio hoje?',
            subtitle: 'Para prepararmos a melhor apresentação.',
            options: [
                { id: 'ideia', label: 'Ainda é uma ideia/projeto', icon: 'wb_incandescent' },
                { id: 'operando', label: 'Já está rodando no mercado', icon: 'rocket_launch' },
                { id: 'escalando', label: 'Estou em fase de escala', icon: 'trending_up' },
            ]
        }
    ],
};
