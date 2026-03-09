const CDN_BASE = "https://cdn.simpleicons.org";

const technologies = [
    { name: "Google", slug: "google" },
    { name: "Meta", slug: "meta" },
    { name: "Firebase", slug: "firebase" },
    { name: "Firestore", slug: "firebase" },
    { name: "Anthropic", slug: "anthropic" },
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Vite", slug: "vite" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Figma", slug: "figma" },
    { name: "Sanity", slug: "sanity" }
];

export function Partners() {
    return (
        <section className="py-16 bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-8">Stack</p>
                <h2 className="text-3xl font-bold mb-4">Tecnologias e plataformas que <span className="text-primary">utilizamos</span></h2>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-12 max-w-2xl mx-auto">
                    De Google e Meta a Firebase e Anthropic — stack moderna para performance, escalabilidade e integrações que importam.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center gap-2 group"
                            title={tech.name}
                        >
                            <span className="block grayscale group-hover:grayscale-0 transition-all duration-300">
                                <img
                                    src={`${CDN_BASE}/${tech.slug}`}
                                    alt={tech.name}
                                    className="w-9 h-9 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    width={40}
                                    height={40}
                                />
                            </span>
                            <span className="text-sm font-semibold text-text-muted-light dark:text-text-muted-dark group-hover:text-foreground transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
