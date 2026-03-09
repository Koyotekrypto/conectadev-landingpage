import { motion } from 'framer-motion';
import { CASE_STUDIES } from '../data/contentData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const Cases = () => {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase">
                        Casos de <span className="text-primary italic font-drama lowercase">Sucesso</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Como transformamos desafios complexos de engenharia em ativos digitais de alto impacto.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group cursor-pointer"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                        >
                            <Link to={`/cases/${study.slug}`}>
                                <Card
                                    className="glass-panel border-primary/5 hover:border-primary/40 bg-card/40 backdrop-blur-2xl rounded-[3rem] overflow-hidden transition-all duration-500 flex flex-col md:flex-row gap-8 p-8"
                                    style={{
                                        background: `radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(255,111,0,0.05), transparent 40%)`
                                    } as React.CSSProperties}
                                >
                                    <div className="md:w-1/2 aspect-video rounded-[2rem] bg-gray-950 border border-white/5 overflow-hidden relative">
                                        <img
                                            src={study.image}
                                            alt={`Preview: ${study.title}`}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" aria-hidden />
                                    </div>

                                    <CardHeader className="md:w-1/2 justify-center">
                                        <Badge className="w-fit mb-4 bg-primary/10 text-primary border-primary/20">
                                            Case: {study.client}
                                        </Badge>
                                        <CardTitle className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors mb-4">
                                            {study.title}
                                        </CardTitle>
                                        <CardDescription className="text-lg text-muted-foreground mb-8">
                                            {study.description}
                                        </CardDescription>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {study.results.map((result, i) => (
                                                <div key={i} className="flex items-center gap-2 text-white/80">
                                                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                                    <span className="text-sm font-medium">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};
