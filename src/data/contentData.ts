export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
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
    metrics: { label: string; value: string }[];
}

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
        image: '/assets/cases/soapia.jpg'
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
        image: '/assets/cases/vibefood.jpg'
    }
];
