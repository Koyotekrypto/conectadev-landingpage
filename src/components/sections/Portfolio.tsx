export function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Dashboard Fintech",
            category: "Plataforma SaaS",
            description: "Um dashboard financeiro completo com visualização de dados em tempo real e análises.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQUQukTXfdp-hRffDuefPKTqdy0bOoVFEAh-61cacvzvBlVH4UYfhFMDrr4tW6w16KFz8asYdpk3D6a8T9QGKF_uD2HJ4pihBRxTeH0VpFStHwPakvm8PV11dS9P2v9DNO87il9dhVC7HuEDSrPISTTXGB5cEw2c5fovPYulbj24xzQgOpG91-J6zXH3QeyT06t93LG_gejn3dqBT_vkA-M8Q-hRM6-16nR4l0Wv9aPfdTWOJLtMyxztzzAp7TXLwHQrlGmnDy3QPu"
        },
        {
            id: 2,
            title: "CRM HealthTech",
            category: "Sistema CRM",
            description: "Sistema otimizado de gestão de pacientes para clínicas de saúde modernas.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMyQWLFWjTbo7HieEPfTw9whnkljbLHfWC5Qh2txw9Wmfq6D_ghk3xePhzEwzn3egff33bmTpsuKnVcQvtRtQeZuSpQXouBFC_QjEMNx_m16V21Y3IMYes8WZ8XZ-3jI7vFhP65MmCgfM1HhRK14IfMSSekgjIGk_dP9qT41NPlV1oamp2s2CKCYfJu2XpENGB-Jgfb1GpSFWC9DfGvK69_t2OXeLybnCys682esss2DG9HZmfAAWCpedsjBJAh1jFoYUgcuyrU4Wk"
        }
    ];

    return (
        <section className="py-24 bg-background-dark grid-pattern relative border-y border-white/5" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center md:text-left mb-16 md:flex justify-between items-end">
                    <div>
                        <p className="text-sm font-bold tracking-widest text-text-muted-dark uppercase mb-3">Nossos Projetos</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Descubra Nossos Últimos <span className="text-primary">Projetos</span></h2>
                    </div>
                    <a className="hidden md:inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold uppercase tracking-wider text-sm mt-6 md:mt-0" href="#">
                        Ver Todos os Projetos <span className="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-surface-dark border border-white/10">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                src={project.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-sm">{project.description}</p>
                                <a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-black hover:scale-110 transition-transform shadow-[0_0_15px_rgba(206,240,46,0.3)]" href="#">
                                    <span className="material-symbols-outlined">north_east</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <a className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-semibold uppercase tracking-wider text-sm" href="#">
                        Ver Todos os Projetos <span className="material-symbols-outlined">arrow_right_alt</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
