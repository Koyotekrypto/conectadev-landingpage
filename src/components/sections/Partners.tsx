export function Partners() {
    const partners = [
        { name: "Google", icon: "search" },
        { name: "Spotify", icon: "podcasts" },
        { name: "Airbnb", icon: "house" },
        { name: "Shopify", icon: "shopping_bag" },
        { name: "Amazon", icon: "shopping_cart" }
    ];

    return (
        <section className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-8">Nossos Parceiros</p>
                <h2 className="text-3xl font-bold mb-12">Nossos <span className="text-primary">Clientes</span> e Parceiros de Confiança</h2>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 dark:invert-0 invert">
                    {partners.map((partner) => (
                        <div key={partner.name} className="text-2xl font-bold font-sans flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">{partner.icon}</span>
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
