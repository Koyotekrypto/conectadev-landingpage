import { SERVICES } from '../../data/mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export const ServiceMatrix: React.FC = () => {
    return (
        <section id="servicos" className="py-24 relative z-10">
            <div className="max-w-[1920px] mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center mb-16"
                >
                    <span className="text-secondary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
                        NÓS CONSTRUÍMOS O FUTURO
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                        Soluções de <span className="font-drama italic text-primary lowercase tracking-normal font-normal">Engenharia Elite</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-primary/30 mt-8"></div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="h-full relative group"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                        >
                            <Card
                                className="glass-panel border-primary/5 hover:border-primary/40 relative overflow-hidden flex flex-col h-full bg-card/40 backdrop-blur-2xl rounded-[2rem] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(0,180,216,0.15)]"
                                style={{
                                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,111,0,0.1), transparent 40%)`
                                } as React.CSSProperties}
                            >
                                {/* Static glow backup */}
                                <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>

                                <CardHeader className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-inner">
                                        <span className="material-symbols-outlined text-primary text-3xl group-hover:drop-shadow-neon-cyan transition-all">
                                            {service.icon}
                                        </span>
                                    </div>
                                    <CardTitle className="font-display text-xl font-bold text-white">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    {/* Extra content could go here */}
                                </CardContent>

                                <CardFooter className="relative z-10 pt-6 border-t border-gray-800/50 flex items-center justify-between">
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                        {service.tag}
                                    </span>
                                    <Badge variant="outline" className="bg-primary/10 border-primary/20 text-white gap-2 py-1 transition-colors group-hover:bg-primary/20">
                                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{service.status}</span>
                                    </Badge>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceMatrix;
