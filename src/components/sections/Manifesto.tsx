import { useState } from 'react';
import { FounderModal } from '../ui/founder-modal';

export function Manifesto() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-32 bg-background-dark grid-pattern relative border-y border-white/5 z-10 pt-48" id="manifesto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight uppercase leading-none drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Tecnologia com<br />Intenção.
                        </h2>
                        <p className="font-serif italic text-4xl text-white mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            design com alma
                        </p>
                        <div className="w-16 h-1 bg-white/20 mt-8"></div>
                    </div>
                    <div className="bg-surface-dark/50 backdrop-blur-xl border-l-4 border-primary p-8 rounded-r-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-transparent blur-xl -z-10 rounded-2xl opacity-50"></div>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Na ConectaDev, não apenas "entregamos código". Nós construímos ativos digitais. Unimos o impacto visual do Design Cinematográfico à robustez de SaaS de alta performance. Nossa especialização não é genérica: mergulhamos no dia a dia de Clínicas Médicas e Restaurantes para criar CRMs que realmente eliminam gargalos operacionais e transformam dados em lucro real.
                        </p>
                        <p className="text-sm font-bold text-white uppercase tracking-wider mb-10">
                            Se o seu negócio exige o estado da arte em tecnologia, você está no lugar certo.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-4 group cursor-pointer text-left focus:outline-none"
                        >
                            <div className="flex -space-x-4">
                                <img
                                    alt="Anderson - Founder"
                                    className="w-12 h-12 rounded-full border-2 border-background-dark object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 relative z-20"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGyJTDRB2PU71H-KFgAfuWRT8A1C5qaPfWKjUnaeUPlio_YRehz5uOChULeQBvMS6mgu5CreGQgBGVYqiFmF21iDLtJ9zbfMDzB2_xY1lN6NBsEyc0DTiT6SuwTv2J4cmTm92dj_moEs9coDof9i6nY-2iaUmQtFwXbQKNIpfEYLqzNLnsn_-sqZJpVG3kPzWtfqUO92W83MAekxGSjYSjR6Sb57oMMQ0ik8S0fqSL5BdYFZTKOdO7pJemjgChc08jl_lBCyyNH0du"
                                />
                                <img
                                    alt="Co-Founder"
                                    className="w-12 h-12 rounded-full border-2 border-background-dark object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 relative z-10"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGXX0WbwVXnJrm5slKGonk9BL_0H4kzua5YO7siNOTCObrY9wX1EVoH-XEQL_eip0IrK9cSqSDgZEjZtudY2z9v0ZoYaeT28EodLkTRIJ6ONuuYNUqrrVrUaMXvF5NMP554mf0f1QkiF7zSRHmPisXrn4aunxRb83K-macNkubYQP3hfdMs9EOZopMygp7PxurUyrDfAeDQYNYYSYHpU_xyX3hhNV7yzt6Jfd2O1F1pwhhjMdLu46ng-mUdbDy7XxMyPY1-WbQF7T1"
                                />
                            </div>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                                Nossos fundadores
                                <span className="inline-block border border-primary/30 rounded-full p-1 group-hover:border-white/50 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <FounderModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
