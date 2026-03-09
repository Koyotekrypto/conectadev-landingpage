import type { ReactNode } from "react";

export function FAQ() {
    const faqs: { question: string; answer: ReactNode }[] = [
        {
            question: "Terceirizar para uma agência web vale a pena?",
            answer: "Sim. Desenvolver aplicações e ativos digitais sob medida gera ROI real: maior conversão, operação mais enxuta e marca mais forte. Atuamos de landing pages de alta performance a SaaS completos — como os cases SOAPIA (gestão clínica com IA) e VIBEFOOD (gestão gastronômica), que validam esse impacto."
        },
        {
            question: "Como vocês garantem resultados?",
            answer: "Com processo definido: briefing para alinhamento, design e arquitetura pensados para o seu negócio, desenvolvimento ágil com testes e feedback contínuo. Priorizamos performance, SEO e experiência do usuário. Nossos cases em clínicas e restaurantes mostram resultados concretos em conversão e operação."
        },
        {
            question: "Por que escolher uma agência especializada?",
            answer: "Unimos design cinematográfico e engenharia de elite — é caro e raro replicar isso internamente. Temos especialização comprovada em clínicas e restaurantes (SOAPIA, VIBEFOOD), mas o mesmo nível de cuidado vale para qualquer setor que exija produto digital de alto impacto."
        },
        {
            question: "Meu projeto pode ficar pronto em menos de uma semana?",
            answer: "Projetos com alta engenharia e design sob medida seguem um processo estruturado; os prazos variam conforme escopo e complexidade. Priorizamos qualidade e impacto em vez de prazos irreais — assim o resultado sustenta o crescimento do seu negócio."
        },
        {
            question: "Como funciona o processo de trabalho?",
            answer: (
                <>
                    <span className="block mb-3">Briefing (alinhamento estratégico), Ideia (design e arquitetura), Desenvolvimento (ciclos ágeis, testes e feedback) e Entrega (deploy, suporte e evolução contínua).</span>
                    <a href="#process" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Conheça cada etapa
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                </>
            )
        },
        {
            question: "Vocês atendem apenas clínicas e restaurantes?",
            answer: "Não. Clínicas e restaurantes são nossa especialização comprovada em produto (SOAPIA e VIBEFOOD). Atendemos outros setores com o mesmo padrão: sites, landing pages e SaaS sob medida, com foco em tecnologia de ponta e design que converte."
        }
    ];

    return (
        <section className="py-24 bg-surface-dark border-t border-white/5" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Perguntas <span className="text-primary">Frequentes</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Tudo o que você precisa saber sobre nossos serviços e como trabalhamos.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-6 open:bg-white/10 transition-colors duration-300">
                            <summary className="flex justify-between items-center font-bold text-lg text-white cursor-pointer list-none">
                                {faq.question}
                                <span className="transition group-open:rotate-180">
                                    <span className="material-symbols-outlined text-primary">expand_more</span>
                                </span>
                            </summary>
                            <div className="text-gray-400 mt-4 leading-relaxed text-sm">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
