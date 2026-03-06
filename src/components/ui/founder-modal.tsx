import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';

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
        role: 'CEO & Engenheiro de Software',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGyJTDRB2PU71H-KFgAfuWRT8A1C5qaPfWKjUnaeUPlio_YRehz5uOChULeQBvMS6mgu5CreGQgBGVYqiFmF21iDLtJ9zbfMDzB2_xY1lN6NBsEyc0DTiT6SuwTv2J4cmTm92dj_moEs9coDof9i6nY-2iaUmQtFwXbQKNIpfEYLqzNLnsn_-sqZJpVG3kPzWtfqUO92W83MAekxGSjYSjR6Sb57oMMQ0ik8S0fqSL5BdYFZTKOdO7pJemjgChc08jl_lBCyyNH0du',
        bio: 'Bacharel em Engenharia de Software (UFC) com foco em Qualidade e Otimização de Processos. Especialista em converter complexidade técnica em eficiência operacional, Anderson lidera a ConectaDev unindo o rigor acadêmico à agilidade da Indústria 4.0 para criar ativos digitais de alta performance.',
        experience: [
            'Otimização de Sistemas & Performance',
            'Arquitetura & Engenharia de Software',
            'Gestão de Equipes & Governança (KPIs)',
            'Qualidade & Testes Estruturais (QA)'
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/anderson-cardoso-0a8919b1/',
            email: '#'
        }
    },
    {
        name: 'Co-Fundador',
        role: 'CTO & Engenheiro Chefe',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGXX0WbwVXnJrm5slKGonk9BL_0H4kzua5YO7siNOTCObrY9wX1EVoH-XEQL_eip0IrK9cSqSDgZEjZtudY2z9v0ZoYaeT28EodLkTRIJ6ONuuYNUqrrVrUaMXvF5NMP554mf0f1QrcrVrUaMXvF5NMP554mf0f1QkiF7zSRHmPisXrn4aunxRb83K-macNkubYQP3hfdMs9EOZopMygp7PxurUyrDfAeDQYNYYSjHpHpU_xyX3hhNV7yzt6Jfd2O1F1pwhhjMdLu46ng-mUdbDy7XxMyPY1-WbQF7T1',
        bio: 'Mestre na engenharia de software e infraestrutura escalável. Especialista em garantir que a estética ande de mãos dadas com performance ultrarrápida (SaaS), estabilidade e uma fundação à prova de balas.',
        experience: [
            'Desenvolvimento Cloud-Native',
            'Infraestrutura Escalável',
            'Segurança de Dados & Backends'
        ],
        social: {
            linkedin: '#',
            email: '#'
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop Blur Cinematográfico */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[100] bg-background-dark/80"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full max-w-5xl bg-surface-dark border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] relative pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Subtle Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />

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
                                        A mente e a máquina por trás da ConectaDev.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                                    {/* Divisória Vertical Sutil em Desktop */}
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
                                                        className="w-24 h-24 rounded-full object-cover border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 relative z-10 mix-blend-luminosity hover:mix-blend-normal"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                        {founder.name}
                                                    </h4>
                                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-widest">
                                                        {founder.role}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Bio */}
                                            <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                                                {founder.bio}
                                            </p>

                                            {/* Experience Tags & Socials */}
                                            <div className="mt-auto space-y-6">
                                                <div className="space-y-3">
                                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Expertise</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {founder.experience.map((exp) => (
                                                            <span
                                                                key={exp}
                                                                className="px-3 py-1.5 rounded-md bg-white/5 text-sm text-gray-300 border border-white/5"
                                                            >
                                                                {exp}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                                    {founder.social.linkedin && (
                                                        <a href={founder.social.linkedin} className="p-2 rounded-md bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-colors flex items-center justify-center group/btn">
                                                            <Linkedin className="w-5 h-5" />
                                                            <span className="sr-only">LinkedIn</span>
                                                        </a>
                                                    )}
                                                    {founder.social.email && (
                                                        <a href={founder.social.email} className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center justify-center group/btn">
                                                            <Mail className="w-5 h-5" />
                                                            <span className="sr-only">Email</span>
                                                        </a>
                                                    )}
                                                    <div className="ml-auto text-xs font-semibold text-gray-500 bg-white/5 px-3 py-2 rounded-md flex items-center gap-2 group-hover:text-primary transition-colors">
                                                        CONECTAR <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
        </AnimatePresence>
    );
}
