export function Marquee() {
    const items = [
        "✧ Design UI/UX",
        "✧ Arquitetura Cloud",
        "✧ I.A. e Dados",
        "✧ SaaS Premium",
        "✧ Automações",
        "✧ Sites e Landing Pages",
        "✧ SEO e Performance",
        "✧ DevOps e Infraestrutura"
    ];

    return (
        <div className="w-full bg-primary text-black py-4 overflow-hidden border-y border-black/10 dark:border-white/10 flex whitespace-nowrap">
            <div className="flex animate-marquee items-center gap-8 px-4 font-bold uppercase tracking-widest text-sm">
                {[...items, ...items].map((item, i) => (
                    <span key={i}>{item}</span>
                ))}
            </div>
        </div>
    );
}
