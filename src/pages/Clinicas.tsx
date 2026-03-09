import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, Shield, BarChart3, ArrowRight } from 'lucide-react';

export const Clinicas = () => {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase">
                        Tecnologia para <span className="text-primary italic font-drama lowercase">Clínicas</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Soluções digitais que transformam a jornada do paciente e a gestão clínica: agendamento, prontuário e autoridade digital.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { icon: Stethoscope, title: 'Gestão clínica', desc: 'Sistemas e fluxos que organizam sua operação.' },
                        { icon: Calendar, title: 'Agendamento', desc: 'Menos faltas, mais produtividade.' },
                        { icon: Shield, title: 'LGPD e segurança', desc: 'Dados do paciente protegidos e em conformidade.' },
                        { icon: BarChart3, title: 'Resultados', desc: 'Métricas e indicadores para decisão.' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-2xl hover:border-primary/30 transition-colors"
                        >
                            <item.icon className="w-10 h-10 text-primary mb-4" />
                            <h3 className="font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                        Clínicas médicas, odontológicas, estética, veterinária e mais: desenhamos a solução ideal para o seu nicho.
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
                    >
                        Falar com um Especialista
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
};
