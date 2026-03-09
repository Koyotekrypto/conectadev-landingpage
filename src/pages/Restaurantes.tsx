import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, QrCode, Truck, Heart, ArrowRight } from 'lucide-react';

export const Restaurantes = () => {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase">
                        Tecnologia para <span className="text-primary italic font-drama lowercase">Restaurantes</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Cardápio digital, autoatendimento, delivery próprio e fidelização: tecnologia que aumenta margem e encanta o cliente.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { icon: UtensilsCrossed, title: 'Operação', desc: 'Cardápio, comandas e fluxo de cozinha.' },
                        { icon: QrCode, title: 'Autoatendimento', desc: 'Menos fila, mais experiência.' },
                        { icon: Truck, title: 'Delivery próprio', desc: 'Reduza taxas de agregadores.' },
                        { icon: Heart, title: 'Fidelização', desc: 'Programas e CRM para voltar a visitar.' },
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
                        Restaurantes, bares, cafeterias, dark kitchens e redes: desenhamos a solução ideal para o seu modelo.
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
