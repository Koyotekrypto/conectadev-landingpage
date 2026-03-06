export function FAQ() {
    const faqs = [
        {
            question: "Terceirizar para uma agência web vale a pena?",
            answer: "Sim, construir aplicações web e ativos digitais de alta performance sob medida pode gerar um ROI significativo, aumentando as taxas de conversão, simplificando operações e elevando a percepção da marca."
        },
        {
            question: "Como vocês garantem resultados?",
            answer: "Focamos na otimização avançada de SEO, entregando estudos de caso excepcionais e criando landing pages cinematográficas que engajam e vendem. Nossa arquitetura converte."
        },
        {
            question: "Por que escolher uma agência especializada?",
            answer: "Uma agência de elite traz expertise multidisciplinar — combinando UI/UX de alto nível, engenharia de ponta e estratégia — sendo extremamente difícil e caro construir esse nível de time internamente."
        },
        {
            question: "Meu projeto pode ficar pronto em menos de uma semana?",
            answer: "Embora templates simples possam ser lançados rapidamente, nossos ativos digitais de alta engenharia exigem um processo estruturado de briefing, design e desenvolvimento minucioso para garantir qualidade e impacto máximos."
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
                            <p className="text-gray-400 mt-4 leading-relaxed text-sm">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
