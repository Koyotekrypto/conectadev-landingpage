import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { ElectricCard } from "@/components/ui/electric-card";

export function Services() {

    const services = [
        {
            id: "01",
            icon: "design_services",
            title: "UI/UX Design",
            description: "Interfaces cinematográficas e intuitivas que engajam usuários e elevam a percepção da marca.",
            tags: ["Figma", "Wireframe", "Prototyping", "Design System", "A11y"]
        },
        {
            id: "02",
            icon: "language",
            title: "Sites e Landing Pages",
            description: "Sites de alta performance com a melhor tecnologia disponível e design que converte. Rápidos, seguros e preparados para resultados.",
            tags: ["React", "Vite", "TypeScript", "Core Web Vitals", "Tailwind"]
        },
        {
            id: "03",
            icon: "developer_mode",
            title: "Desenvolvimento Web e SaaS",
            description: "Aplicativos web e SaaS sob medida: engenharia de alta performance, escalável e alinhada ao seu negócio.",
            tags: ["React", "Node.js", "TypeScript", "REST · GraphQL", "Shadcn UI"]
        },
        {
            id: "04",
            icon: "trending_up",
            title: "Otimização de SEO",
            description: "Estratégias baseadas em dados para dominar os rankings de busca e impulsionar o tráfego orgânico.",
            tags: ["Google Analytics", "Search Console", "Schema.org", "Technical SEO"]
        },
        {
            id: "05",
            icon: "cloud_sync",
            title: "Serviços de DevOps",
            description: "Pipelines de implantação otimizados e infraestrutura em nuvem escalável.",
            tags: ["Docker", "CI/CD", "AWS", "Kubernetes", "Terraform"]
        }
    ];

    return (
        <section className="pb-24 dark:bg-background-dark relative z-10" id="services">
            <LampContainer className="pt-24 pb-0">
                <div className="text-center mb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-3"
                    >
                        Nossos Serviços
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Quais <span className="text-primary">Serviços</span> nós<br />oferecemos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto"
                    >
                        De sites e landing pages de alta performance a SaaS e aplicativos web. Tecnologia de ponta e design que converte, para o seu nicho.
                    </motion.p>
                </div>
            </LampContainer>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-100px] relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <ElectricCard
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            tags={service.tags}
                            variant={index % 2 === 0 ? "swirl" : "hue"}
                            className="h-full"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
