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
                        Entregamos soluções digitais abrangentes, adaptadas para elevar sua marca e impulsionar resultados mensuráveis.
                    </motion.p>
                </div>
            </LampContainer>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-100px] relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
