export function Process() {
    const steps = [
        {
            id: 1,
            icon: "description",
            title: "Briefing",
            description: "Mergulhamos profundamente nos seus objetivos, público-alvo e requisitos específicos para garantir um alinhamento perfeito."
        },
        {
            id: 2,
            icon: "lightbulb",
            title: "Ideia",
            description: "Nossas equipes técnica e criativa elaboram soluções inovadoras e estratégias arquiteturais."
        },
        {
            id: 3,
            icon: "settings",
            title: "Desenvolvimento",
            description: "Ciclos de desenvolvimento ágeis, testes rigorosos e loops de feedback contínuos garantem a qualidade."
        },
        {
            id: 4,
            icon: "task_alt",
            title: "Entrega",
            description: "Otimização final, implantação e entrega contínua com opções de suporte contínuo."
        }
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-3">Como funciona</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Nosso Processo de <span className="text-primary">Trabalho</span></h2>
                    <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-xl">
                        Uma abordagem ágil e transparente para dar vida à sua visão digital de forma eficiente e eficaz.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden lg:block z-0 border-t border-dashed border-gray-400 dark:border-gray-600"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="relative group">
                                <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-12">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(206,240,46,0.4)] group-hover:scale-110 transition-transform relative z-10 border-4 border-background-light dark:border-background-dark">
                                        <span className="material-symbols-outlined text-black text-2xl">{step.icon}</span>
                                    </div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest block mb-2">Passo {step.id}</span>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
