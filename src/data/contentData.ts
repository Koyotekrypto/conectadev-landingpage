export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    dateISO?: string;
    category: string;
    image: string;
    author: string;
    sourceName?: string;
}

export interface CaseStudy {
    id: string;
    slug: string;
    title: string;
    client: string;
    description: string;
    content: string;
    results: string[];
    image: string;
    images?: string[];
    link?: string;
    metrics: { label: string; value: string }[];
    features?: string[];
}

/** Funcionalidades por slug de case (usado em CaseDetail e Portfolio) */
export const PROJECT_FEATURES: Record<string, string[]> = {
    'soapia-ai': [
        'Prontuário & Agenda Inteligente',
        'Prescrição Digital & Modelos SOAP',
        'Telemedicina & Gestão de Tarefas',
        'Limite de Pacientes Ativos (Ilimitado)',
        'WhatsApp Integrado & E-mail (limitado)',
        'Gestão Financeira, TISS & API',
        'Expansão de Unidades (Multi-Clínica) (Ilimitado)',
        'Ecossistema (App do Paciente)',
        'Inteligência de Dados (Completo)',
        'Nível de Suporte (Dedicado)',
        'AI Scribe – Transcrição SOAP (Ilimitado)',
        'Workflows de Automação Inteligente',
        '30+ Especialidades Adaptativas',
        'Analisador de Exames & Diagnóstico',
        'Assistente de Decisão Clínica (RAG)',
        'Geração de Laudos & Resumos',
        'Assistente CASE IA',
        'Metrologia de Gasto Energético (TMB & VET)',
        'Antropometria de Precisão (Pollock / Dobras)',
        'Bioimpedância Digital & Circunferências',
        'Cinematometria (Registro Fotográfico)',
        'Calculadora Nutricional & Gestão de Macros',
        'Lista de Compras & Suplementação',
        'Gestão de Alvos Clínicos (Metas SMART)',
        'Biomarcadores Longitudinais (Gráficos)',
        'CRM & Marketing (Aniversariantes)',
        'Gestão de Amostras & Estoque',
        'Trilha de Auditoria Imutável (NGS2/LGPD)'
    ],
    'vibefood': [
        'Cardápio Digital (Upload Manual)',
        'Delivery Próprio (Pedidos no Site)',
        'PDV Light (Lançamento de Pedidos)',
        'Suporte Autoatendimento (FAQ)',
        'Integração iFood / Rappi',
        'Emissão Fiscal (NFC-e / NF-e)',
        'Gestão Financeira & Fluxo de Caixa',
        'Múltiplos Perfis (Acessos p/ Garçons)',
        'QR Code na Mesa (Autoatendimento)',
        'CRM Básico (Histórico de Clientes)',
        'Suporte via Chat/WhatsApp',
        'Assistente Clara (IA Operacional Hub)',
        'KDS (Monitor de Cozinha Digital)',
        'Fichas Técnicas & Controle de Insumos',
        'Estoque Preditivo (Reposição Automática)',
        'Painel de Senhas p/ TV (Retirada)',
        'Programa de Fidelidade/Cashback Automatizado',
        'App MotoBoy (Logística / Rotas Delivery)',
        'Totem Kiosk Mode (Autoatendimento Salão)',
        'Múltiplas Lojas/Franquias Consolidado',
        'Cardápio c/ Geração de Fotos IA (limitado)',
        'Integração via API (ERPs Externos)',
        'Painel de Relatórios DRE & BI Avançado',
        'Suporte Prioritário & Gerente de Conta'
    ],
    'luane-nascimento-advogados': [
        'Design institucional de alto impacto',
        'Hero e CTAs otimizados para conversão',
        'Formulário de contato com validação',
        'Seção Quem Somos com equipe e credibilidade',
        'Áreas de atuação em cards interativos',
        'Depoimentos e prova social',
        'Blog/Notícias para autoridade e SEO',
        'FAQ em accordion para dúvidas frequentes',
        'Layout responsivo e performance otimizada',
        'Integração WhatsApp e redes sociais',
        'Botão flutuante Fale Conosco persistente',
        'Paleta e tipografia profissionais'
    ],
    'thays-morais-contabilidade': [
        'Design institucional de alto impacto',
        'Hero e CTAs otimizados para conversão',
        'Formulário de contato com validação',
        'Seção Quem Somos com credibilidade profissional',
        'Serviços de consultoria contábil em destaque',
        'Depoimentos e prova social',
        'Blog/Notícias para autoridade e SEO',
        'FAQ em accordion para dúvidas frequentes',
        'Layout responsivo e performance otimizada',
        'Integração WhatsApp e redes sociais',
        'Botão flutuante Fale Conosco persistente',
        'Paleta e tipografia profissionais'
    ]
};

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        slug: 'futuro-da-ia-empresarial',
        title: 'O Futuro da Inteligência Empresarial',
        description: 'Como a IA generativa está redefinindo o desenvolvimento de software e a gestão de dados.',
        content: `
# A Revolução Silenciosa da IA

A Inteligência Artificial parou de ser uma promessa futurista para se tornar o motor central da eficiência operacional. Na ConectaDev, observamos que a integração de LLMs (Large Language Models) no fluxo de trabalho reduz o tempo de desenvolvimento em até 40%.

### Por que sua empresa precisa de IA agora?
Não se trata apenas de automação, mas de **inteligência cognitiva aplicada**. Desde a análise preditiva de vendas até sistemas de suporte que realmente resolvem problemas, a IA é o diferencial competitivo da década.

### Desenvolvimento de Elite
Nossa abordagem foca em IA sob medida, garantindo que os dados da sua empresa permaneçam seguros enquanto você colhe os benefícios da automação avançada.
        `,
        date: '06 Mar 2026',
        dateISO: '2026-03-06',
        category: 'Inovação',
        image: '/assets/blog/ia-business.jpg',
        author: 'Anderson Cardoso'
    },
    {
        id: '2',
        slug: 'arquitetura-software-elite',
        title: 'Arquitetura de Software de Elite',
        description: 'Princípios fundamentais para sistemas escaláveis e de alta performance.',
        content: `
# Construindo para Escalar

Uma arquitetura robusta é a fundação de qualquer negócio digital de sucesso. Muitas empresas falham não por falta de clientes, mas porque sua infraestrutura não suporta o crescimento.

### Princípios SOLID e Além
Aplicamos rigorosamente os princípios de engenharia que permitem que o software seja evoluído sem dor. Código limpo não é um luxo, é uma estratégia de redução de custos a longo prazo.

### Cloud Native
Trabalhamos com arquiteturas orientadas a eventos e microserviços quando a escala exige, sempre mantendo a simplicidade onde ela é possível.
        `,
        date: '04 Mar 2026',
        dateISO: '2026-03-04',
        category: 'Engenharia',
        image: '/assets/blog/architecture.jpg',
        author: 'Anderson Cardoso'
    }
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: '1',
        slug: 'soapia-ai',
        title: 'SOAPIA AI',
        client: 'Gestão Healthtech',
        description: 'Ecossistema completo de gestão clínica inteligente com IA adaptativa.',
        content: `
# O produto
SOAPIA AI é nosso SaaS de gestão clínica: prontuário, agendamento, fluxos de atendimento e painéis orientados por IA para decisão e eficiência operacional.

# Por que Healthtech
Clínicas e operadores de saúde precisam de sistemas que unam segurança de dados (LGPD), experiência do paciente e inteligência aplicada. O SOAPIA AI foi desenhado para ser o ecossistema único que a gestão clínica de elite exige.

# Diferenciais
Interface cinematográfica, IA adaptativa para insights e recomendações, e arquitetura escalável para crescer com a operação. Design e engenharia de software aplicados à saúde.
        `,
        metrics: [
            { label: 'Gestão clínica', value: 'Completa' },
            { label: 'IA adaptativa', value: 'Integrada' },
            { label: 'LGPD', value: 'Conformidade' }
        ],
        results: ['Ecossistema completo de gestão clínica', 'IA adaptativa para decisão', 'Interface e UX de alto impacto'],
        image: '/assets/projects/soapia/1.png',
        images: ['/assets/projects/soapia/1.png', '/assets/projects/soapia/2.png', '/assets/projects/soapia/3.png', '/assets/projects/soapia/4.png', '/assets/projects/soapia/5.png', '/assets/projects/soapia/6.png'],
        features: PROJECT_FEATURES['soapia-ai']
    },
    {
        id: '2',
        slug: 'vibefood',
        title: 'VIBE FOOD™',
        client: 'Gestão Gastronômica',
        description: 'Ecossistema SaaS focado em mobilidade, segurança e UX acelerada para o setor gastronômico.',
        content: `
# O produto
VIBE FOOD™ é nosso SaaS de gestão gastronômica de alta performance: cardápio digital, pedidos, autoatendimento, delivery próprio e fidelização em uma única plataforma.

# Por que Gastronomia
Restaurantes, bares, dark kitchens e redes precisam de tecnologia que aumente margem, reduza dependência de agregadores e encante o cliente. O VIBE FOOD™ entrega mobilidade, segurança e uma UX pensada para o ritmo da cozinha e da mesa.

# Diferenciais
Foco em performance, experiência do usuário acelerada e arquitetura preparada para picos de demanda. Design cinematográfico e engenharia de software aplicados ao setor de alimentos e bebidas.
        `,
        metrics: [
            { label: 'Mobilidade', value: 'First-class' },
            { label: 'Segurança', value: 'Alta' },
            { label: 'UX', value: 'Acelerada' }
        ],
        results: ['Cardápio digital e autoatendimento', 'Delivery próprio e integrações', 'Fidelização e gestão operacional'],
        image: '/assets/projects/vibefood/1.png',
        images: ['/assets/projects/vibefood/1.png', '/assets/projects/vibefood/2.png', '/assets/projects/vibefood/3.png', '/assets/projects/vibefood/4.png', '/assets/projects/vibefood/5.png'],
        features: PROJECT_FEATURES['vibefood']
    },
    {
        id: '3',
        slug: 'luane-nascimento-advogados',
        title: 'Luane Nascimento | Advocacia',
        client: 'Site Institucional · Direito Empresarial',
        description: 'Site institucional de alto impacto para escritório de advocacia, com foco em conversão, credibilidade e captura de leads.',
        content: `
# O produto
Site institucional para o escritório Luane Nascimento Advocacia, especializado em Direito Empresarial. Uma presença digital elegante que transmite profissionalismo e facilita o primeiro contato com clientes.

# Por que um site que converte
Escritórios de advocacia precisam de um site que não só informe, mas convença: apresentação clara das áreas de atuação, equipe com credibilidade (OAB, especializações), depoimentos e um caminho óbvio para "Fale Conosco". O site foi desenhado para capturar leads com múltiplos CTAs, formulário de contato e botão flutuante.

# Diferenciais
Design com paleta institucional (verde-azulado e amarelo-esverdeado em destaque), tipografia e hierarquia visual claras, seções Quem Somos, Serviços, Por que nos escolher, Notícias e FAQ em accordion. Tecnologias modernas para performance e boa experiência em qualquer dispositivo.
        `,
        metrics: [
            { label: 'Conversão', value: 'CTAs em destaque' },
            { label: 'Credibilidade', value: 'Equipe + OAB' },
            { label: 'Performance', value: 'Otimizada' }
        ],
        results: [
            'Design institucional de alto impacto e captura de leads',
            'Formulário de contato e CTAs estratégicos (Fale Conosco)',
            'Seções de equipe, serviços, depoimentos e notícias'
        ],
        image: '/assets/projects/luane/1.png',
        images: [
            '/assets/projects/luane/1.png',
            '/assets/projects/luane/2.png',
            '/assets/projects/luane/3.png',
            '/assets/projects/luane/4.png',
            '/assets/projects/luane/5.png'
        ],
        link: 'https://www.luanenascimentoadvogados.com/',
        features: PROJECT_FEATURES['luane-nascimento-advogados']
    },
    {
        id: '4',
        slug: 'thays-morais-contabilidade',
        title: 'Thays Morais | Consultoria & Analista Contábil',
        client: 'Site Institucional · Consultoria Contábil',
        description: 'Site institucional de alto impacto para consultoria contábil, com foco em conversão, credibilidade e captura de leads.',
        content: `
# O produto
Site institucional para Thays Morais, Consultoria & Analista Contábil. Uma presença digital elegante que transmite profissionalismo e facilita o primeiro contato com clientes em busca de serviços contábeis.

# Por que um site que converte
Profissionais de contabilidade e consultoria precisam de um site que não só informe, mas convença: apresentação clara dos serviços, credibilidade (formação, experiência), depoimentos e um caminho óbvio para "Fale Conosco". O site foi desenhado para capturar leads com múltiplos CTAs, formulário de contato e botão flutuante.

# Diferenciais
Design com paleta institucional, tipografia e hierarquia visual claras, seções Quem Somos, Serviços, Cases de sucesso, Depoimentos e FAQ. Tecnologias modernas para performance e boa experiência em qualquer dispositivo.
        `,
        metrics: [
            { label: 'Conversão', value: 'CTAs em destaque' },
            { label: 'Credibilidade', value: 'Profissional' },
            { label: 'Performance', value: 'Otimizada' }
        ],
        results: [
            'Design institucional de alto impacto e captura de leads',
            'Formulário de contato e CTAs estratégicos (Fale Conosco)',
            'Seções de serviços, cases de sucesso e depoimentos'
        ],
        image: '/assets/projects/thays/1.jpeg',
        images: [
            '/assets/projects/thays/1.jpeg',
            '/assets/projects/thays/2.jpeg',
            '/assets/projects/thays/3.jpeg',
            '/assets/projects/thays/4.jpeg'
        ],
        link: 'https://thays-morais-landingpage.vercel.app/',
        features: PROJECT_FEATURES['thays-morais-contabilidade']
    }
];
