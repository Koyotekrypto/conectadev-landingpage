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
        slug: 'crm-automotivo-elite-motors',
        title: 'CRM Automotivo de Alta Conversão',
        client: 'Elite Motors',
        description: 'Desenvolvimento de uma plataforma personalizada para gestão de leads e vendas.',
        content: `
# O Desafio: Gestão de Leads Fragmentada
A Elite Motors enfrentava um problema comum: leads chegando por diversos canais sem uma centralização eficiente, resultando em perda de oportunidades de venda.

# Nossa Solução
Desenvolvemos um CRM proprietário focado na jornada do comprador de veículos, integrando APIs de mensageria e sistemas de estoque em tempo real.

# O Resultado
Em apenas 3 meses, a taxa de conversão subiu drasticamente, e a equipe de vendas passou a gerir o dobro de contatos no mesmo período de tempo.
        `,
        metrics: [
            { label: 'Conversão', value: '+45%' },
            { label: 'Resposta', value: '-30% tempo' },
            { label: 'ROI', value: '250%' }
        ],
        results: ['+45% em conversão', '-30% tempo de resposta', 'Integração total via WhatsApp'],
        image: '/assets/cases/crm-auto.jpg'
    }
];
