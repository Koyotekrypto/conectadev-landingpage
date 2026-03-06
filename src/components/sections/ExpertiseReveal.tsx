import { RevealImageList } from "@/components/ui/reveal-images";
import { motion } from "framer-motion";

export function ExpertiseReveal() {
    return (
        <section className="py-24 lg:py-32 bg-background-dark relative overflow-hidden grid-pattern">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 uppercase tracking-widest text-xs font-semibold text-gray-300"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Capabilities Tecnológicas
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-2xl font-light"
                    >
                        Nossa stack de serviços é projetada para corporações que buscam escalabilidade, performance agressiva e arquiteturas blindadas.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <RevealImageList />
                </motion.div>
            </div>
        </section>
    );
}
