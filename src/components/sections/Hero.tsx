import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

export function Hero() {
    return (
        <section className="relative pt-32 pb-6 lg:pt-48 lg:pb-8 overflow-hidden bg-background-dark text-white grid-pattern">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 hidden lg:block overflow-hidden">
                <h1 className="text-[15rem] font-black tracking-tighter text-outline opacity-50 whitespace-nowrap">CONECTA</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-6">
                    <div className="h-24 md:h-32 mb-4 w-full max-w-md mx-auto relative group">
                        <VaporizeTextCycle
                            texts={["Conecta DEV"]}
                            font={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "64px",
                                fontWeight: 800
                            }}
                            color="rgb(206, 240, 46)"
                            spread={5}
                            density={5}
                            animation={{
                                vaporizeDuration: 2.5,
                                fadeInDuration: 1.5,
                                waitDuration: 0
                            }}
                            alignment="center"
                            tag={Tag.H2}
                        />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 uppercase tracking-widest text-xs font-semibold text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Agência Digital de Alto Nível
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Sistema que performa. <span className="text-primary relative inline-block">Dados seguros. Tech de ponta.<svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-primary opacity-50" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Deixamos a planilha no passado. React, Vite, Tailwind e Shadcn UI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full pl-2 pr-6 py-2 backdrop-blur-sm">
                            <div className="flex -space-x-3">
                                <img
                                    alt="Marca parceira"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111] bg-white/10 object-contain p-1.5"
                                    src="https://cdn.simpleicons.org/notion/FFFFFF"
                                />
                                <img
                                    alt="Marca parceira"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111] bg-white/10 object-contain p-1.5"
                                    src="https://cdn.simpleicons.org/stripe/FFFFFF"
                                />
                                <img
                                    alt="Marca parceira"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111] bg-white/10 object-contain p-1.5"
                                    src="https://cdn.simpleicons.org/vercel/FFFFFF"
                                />
                                <div className="w-10 h-10 rounded-full border-2 border-[#0e1111] bg-primary flex items-center justify-center text-black font-bold text-xs">
                                    +
                                </div>
                            </div>
                            <div className="text-left ml-2">
                                <div className="text-white font-bold text-sm">Clientes satisfeitos</div>
                                <div className="text-gray-400 text-xs">que confiam no nosso trabalho</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
