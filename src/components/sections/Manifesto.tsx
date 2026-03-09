import { useState } from 'react';
import { FounderModal } from '../ui/FounderModal';

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
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Na ConectaDev somos uma agência de desenvolvimento de software que une Design Cinematográfico e Engenharia de Software. Nosso objetivo é o melhor produto para o seu negócio: tecnologia de ponta e design que encanta.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Oferecemos desde sites e landing pages de alta performance até SaaS e aplicativos web sob medida. Em clínicas e restaurantes já comprovamos essa abordagem com SOAPIA e VIBEFOOD; atuamos também em outros setores que buscam o mesmo nível de excelência.
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
                                    alt="Anderson Cardoso - Founder"
                                    className="w-12 h-12 rounded-full border-2 border-background-dark object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 relative z-20"
                                    src="/assets/Anderson Cardoso.png"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    alt="Breno Moreira - Co-Founder"
                                    className="w-12 h-12 rounded-full border-2 border-background-dark object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 relative z-10"
                                    src="/assets/Breno Moreira.jpg"
                                    loading="lazy"
                                    decoding="async"
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
