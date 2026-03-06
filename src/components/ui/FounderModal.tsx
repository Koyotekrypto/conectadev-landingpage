import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Founder {
    name: string;
    role: string;
    image: string;
    bio: string;
    experience: string[];
    social: {
        linkedin?: string;
        email?: string;
    };
}

const founders: Founder[] = [
    {
        name: 'Anderson Cardoso',
        role: 'CEO & Founder | Engenheiro de Software (UFC)',
        image: '/assets/Anderson Cardoso.png',
        bio: 'Bacharel em Engenharia de Software pela Universidade Federal do Ceará (UFC), Anderson fundou a ConectaDev com uma missão clara: transformar tecnologia bruta em arte funcional. Com expertise em Engenharia de Qualidade e Otimização, ele utiliza o rigor acadêmico para construir ativos digitais que não apenas funcionam, mas dominam o mercado através de performance impecável.',
        experience: [
            'Engenharia de Qualidade (QA)',
            'Otimização de Processos Industriais',
            'Arquitetura de Software Escalável',
            'Desenvolvimento Ágil & Lean'
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/anderson-cardoso-0a8919b1/',
            email: 'contato@conectadev.com.br'
        }
    },
    {
        name: 'Breno Moreira',
        role: 'COO & Co-Founder | Engenheiro Mecânico (UFC)',
        image: '/assets/Breno Moreira.jpg',
        bio: 'Engenheiro Mecânico pela Universidade Federal do Ceará (UFC), Breno combina a precisão da engenharia com uma visão estratégica de mercado. Com vasta experiência em Marketing, Design e Vendas, ele é o arquiteto por trás da experiência estética e do crescimento comercial da ConectaDev, garantindo que cada solução técnica seja entregue com design impecável e alto impacto de conversão.',
        experience: [
            'Growth Marketing & Vendas',
            'UX/UI Design Estratégico',
            'Engenharia de Produto',
            'Gestão de Operações'
        ],
        social: {
            linkedin: '#',
            email: 'breno@conectadev.com.br'
        }
    }
];

interface FounderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function FounderModal({ isOpen, onClose }: FounderModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Blur Cinematográfico */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[9998] bg-black/80"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] relative pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Subtle Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/10 blur-[100px] pointer-events-none rounded-full" />

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors group"
                            >
                                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase mb-2">
                                        Nossos Fundadores
                                    </h3>
                                    <p className="text-gray-400 font-serif italic text-lg">
                                        A excelência técnica que impulsiona sua evolução digital.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                                    {/* Divisória Vertical Sutil */}
                                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                                    {founders.map((founder, index) => (
                                        <motion.div
                                            key={founder.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                            className="flex flex-col group"
                                        >
                                            {/* Avatar & Header */}
                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                    <img
                                                        src={founder.image}
                                                        alt={founder.name}
                                                        className="w-24 h-24 rounded-full object-cover border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 relative z-10 mix-blend-luminosity group-hover:mix-blend-normal"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                        {founder.name}
                                                    </h4>
                                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary uppercase tracking-widest">
                                                        {founder.role}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bio */}
                                            <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                                                {founder.bio}
                                            </p>

                                            {/* Experience Tags */}
                                            <div className="mt-auto space-y-6">
                                                <div className="space-y-3">
                                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Expertise Técnica</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {founder.experience.map((exp) => (
                                                            <span
                                                                key={exp}
                                                                className="px-3 py-1.5 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5 hover:border-primary/30 transition-colors"
                                                            >
                                                                {exp}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                                    {founder.social.linkedin && (
                                                        <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-colors flex items-center justify-center">
                                                            <Linkedin className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                    {founder.social.email && (
                                                        <a href={`mailto:${founder.social.email}`} className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center justify-center">
                                                            <Mail className="w-5 h-5" />
                                                        </a>
                                                    )}
                                                    <div className="ml-auto text-xs font-bold text-white/40 group-hover:text-primary transition-colors flex items-center gap-2">
                                                        CONECTAR <ArrowUpRight className="w-4 h-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
