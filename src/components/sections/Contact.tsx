export function Contact() {
    const niches = [
        { name: "Clínica", icon: "local_hospital" },
        { name: "Restaurante", icon: "restaurant" },
        { name: "Tech/B2B", icon: "business" },
        { name: "E-commerce", icon: "shopping_bag" },
        { name: "Advocacia", icon: "gavel" },
        { name: "Outro", icon: "more_horiz" }
    ];

    return (
        <section className="py-32 bg-background-dark grid-pattern relative overflow-hidden border-t border-white/5" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                <h2 className="text-[12rem] lg:text-[18rem] font-black tracking-tighter text-outline opacity-20 whitespace-nowrap">ESTRATÉGIA</h2>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 animate-pulse">Descubra Seu Potencial</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Em menos de 60 segundos,<br /><span className="text-primary font-serif italic font-medium">desenharemos sua estratégia de elite.</span></h2>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-1 w-full bg-white/10">
                        <div className="h-full w-1/4 bg-primary shadow-[0_0_15px_rgba(206,240,46,0.8)] transition-all duration-500"></div>
                    </div>
                    <div className="mb-10 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Qual seu nicho?</h3>
                        <p className="text-gray-400 text-sm">Selecione o setor da sua empresa para começarmos.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                        {niches.map((niche) => (
                            <button key={niche.name} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/50 transition-all group">
                                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary transition-colors">{niche.icon}</span>
                                <span className="text-white font-semibold">{niche.name}</span>
                            </button>
                        ))}
                    </div>
                    <div className="text-center">
                        <button className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(206,240,46,0.4)] w-full sm:w-auto">
                            <span className="material-symbols-outlined">chat</span>
                            Gerar Estratégia no WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
