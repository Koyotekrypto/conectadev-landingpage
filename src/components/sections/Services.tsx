export function Services() {
    const services = [
        {
            id: "01",
            icon: "design_services",
            title: "UI/UX Design",
            description: "Interfaces cinematográficas e intuitivas que engajam usuários e elevam a percepção da marca.",
            tags: ["Wireframe", "Prototyping"]
        },
        {
            id: "02",
            icon: "developer_mode",
            title: "Desenvolvimento Web",
            description: "Engenharia de alta performance utilizando React, Vite, Tailwind e Shadcn UI.",
            tags: ["React", "Tailwind"]
        },
        {
            id: "03",
            icon: "trending_up",
            title: "Otimização de SEO",
            description: "Estratégias baseadas em dados para dominar os rankings de busca e impulsionar o tráfego orgânico.",
            tags: ["Analytics", "Strategy"]
        },
        {
            id: "04",
            icon: "cloud_sync",
            title: "Serviços de DevOps",
            description: "Pipelines de implantação otimizados e infraestrutura em nuvem escalável.",
            tags: ["CI/CD", "Cloud"]
        }
    ];

    return (
        <section className="pt-24 pb-24 bg-background-light dark:bg-background-dark relative z-10" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-3">Nossos Serviços</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Quais <span className="text-primary">Serviços</span> nós<br />oferecemos</h2>
                    <p className="mt-6 text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
                        Entregamos soluções digitais abrangentes, adaptadas para elevar sua marca e impulsionar resultados mensuráveis.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 p-6 text-6xl font-black text-gray-200 dark:text-white/5 group-hover:text-primary/10 transition-colors z-0">{service.id}</div>
                            <div className="relative z-10 flex-grow">
                                <div className="w-14 h-14 bg-white dark:bg-background-dark rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold border border-gray-300 dark:border-gray-700 rounded-full px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end relative z-10">
                                <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors" href="#">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
