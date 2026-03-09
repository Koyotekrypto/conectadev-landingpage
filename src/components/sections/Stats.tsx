export function Stats() {
    const pillars = [
        {
            title: "Foco em resultado",
            description: "Cada projeto é pensado para converter e escalar."
        },
        {
            title: "Parceria de longo prazo",
            description: "Alinhamento estratégico e suporte contínuo."
        },
        {
            title: "Excelência em cada entrega",
            description: "Design cinematográfico e engenharia de elite."
        }
    ];

    return (
        <section className="py-20 bg-[#0a0c0c] border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="text-center px-4 pt-6 md:pt-0 first:pt-0">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
