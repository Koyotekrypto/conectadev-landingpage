import { Helmet } from 'react-helmet-async';
import { PageSEO } from '../components/seo/PageSEO';
import { SEO_BY_PATH } from '../data/seoContent';
import { FAQ } from '../components/sections/FAQ';
import { Process } from '../components/sections/Process';
import { Contact } from '../components/sections/Contact';

const FAQ_SCHEMA_ITEMS: { question: string; answer: string }[] = [
    { question: 'Terceirizar para uma agência web vale a pena?', answer: 'Sim. Desenvolver aplicações e ativos digitais sob medida gera ROI real: maior conversão, operação mais enxuta e marca mais forte. Atuamos de landing pages de alta performance a SaaS completos — como os cases SOAPIA (gestão clínica com IA) e VIBEFOOD (gestão gastronômica), que validam esse impacto.' },
    { question: 'Como vocês garantem resultados?', answer: 'Com processo definido: briefing para alinhamento, design e arquitetura pensados para o seu negócio, desenvolvimento ágil com testes e feedback contínuo. Priorizamos performance, SEO e experiência do usuário. Nossos cases em clínicas e restaurantes mostram resultados concretos em conversão e operação.' },
    { question: 'Por que escolher uma agência especializada?', answer: 'Unimos design cinematográfico e engenharia de elite — é caro e raro replicar isso internamente. Temos especialização comprovada em clínicas e restaurantes (SOAPIA, VIBEFOOD), mas o mesmo nível de cuidado vale para qualquer setor que exija produto digital de alto impacto.' },
    { question: 'Meu projeto pode ficar pronto em menos de uma semana?', answer: 'Projetos com alta engenharia e design sob medida seguem um processo estruturado; os prazos variam conforme escopo e complexidade. Priorizamos qualidade e impacto em vez de prazos irreais — assim o resultado sustenta o crescimento do seu negócio.' },
    { question: 'Como funciona o processo de trabalho?', answer: 'Briefing (alinhamento estratégico), Ideia (design e arquitetura), Desenvolvimento (ciclos ágeis, testes e feedback) e Entrega (deploy, suporte e evolução contínua). Conheça cada etapa na seção Processo.' },
    { question: 'Vocês atendem apenas clínicas e restaurantes?', answer: 'Não. Clínicas e restaurantes são nossa especialização comprovada em produto (SOAPIA e VIBEFOOD). Atendemos outros setores com o mesmo padrão: sites, landing pages e SaaS sob medida, com foco em tecnologia de ponta e design que converte.' },
];

const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_SCHEMA_ITEMS.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
};

export default function FAQPage() {
    return (
        <main className="min-h-screen">
            <PageSEO meta={SEO_BY_PATH['/faq']} />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
            </Helmet>
            <div className="pt-24">
                <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Vale a pena terceirizar desenvolvimento para uma agência web?
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        <strong className="text-white">Sim.</strong> Terceirizar com uma agência especializada gera ROI real: maior conversão, operação enxuta e marca forte. Abaixo, as perguntas mais frequentes sobre nosso processo e resultados.
                    </p>
                </header>
                <FAQ />
                <Process />
                <Contact />
            </div>
        </main>
    );
}
