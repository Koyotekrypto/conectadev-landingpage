import React from 'react';
import { AUTHORITY_CONTENT } from '../../data/mockData';
import { motion } from 'framer-motion';

export const Authority: React.FC = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-background">
            <div className="max-w-[1920px] mx-auto px-8 md:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Dramatic Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-8"
                    >
                        <h2 className="font-display text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
                            {AUTHORITY_CONTENT.title.split('.')[0]}. <br />
                            <span className="font-drama italic text-secondary lowercase tracking-normal font-normal block mt-2 text-primary drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">
                                {AUTHORITY_CONTENT.title.split('.')[1]}
                            </span>
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-secondary to-transparent"></div>
                    </motion.div>

                    {/* Right Side: Narrative Manifesto */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col gap-10"
                    >
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed border-l-[3px] border-primary/40 pl-8 overflow-hidden relative">
                            <span className="absolute left-[-3px] top-0 bottom-0 w-[3px] bg-primary blur-sm"></span>
                            {AUTHORITY_CONTENT.manifesto}
                        </p>

                        <div className="flex flex-col gap-6 pl-8">
                            <span className="text-white font-display text-lg font-bold tracking-tight uppercase">
                                {AUTHORITY_CONTENT.cta}
                            </span>

                            <div className="flex items-center gap-6 group hover:cursor-pointer">
                                <div className="flex -space-x-4">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-[3px] border-background bg-slate-800 overflow-hidden shadow-2xl relative transition-transform duration-300 group-hover:scale-105" style={{ zIndex: 3 - i }}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/50mix-blend-overlay"></div>
                                            <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Team member" className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500" loading="lazy" decoding="async" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-primary uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors duration-300">
                                    Especialistas de Elite
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Narrative Texture */}
            <div className="absolute top-0 right-0 text-[15rem] md:text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none -translate-y-1/4 translate-x-[20%]">
                CONECTA
            </div>

            {/* Dark gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default Authority;

