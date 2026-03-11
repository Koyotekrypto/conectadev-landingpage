import { Suspense, lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ShaderAnimation = lazy(() => import("@/components/ui/shader-animation").then((m) => ({ default: m.ShaderAnimation })));

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function NewHero() {
    const navigate = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const handleIniciarProjeto = () => {
        if (isHome) scrollToSection("contact");
        else navigate("/#contact");
    };

    const handleNossoPortfolio = () => {
        if (isHome) scrollToSection("portfolio");
        else navigate("/#portfolio");
    };
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="absolute inset-0 bg-background-dark" />}>
                    <ShaderAnimation />
                </Suspense>
            </div>

            {/* Subtle overlay to enhance text readability while showcasing the shader */}
            <div className="absolute inset-0 z-10 bg-background-dark/40 backdrop-blur-[2px]"></div>

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-background-dark/40 backdrop-blur-md mb-8 uppercase tracking-[0.2em] text-xs font-semibold text-gray-300 shadow-2xl"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(206,240,46,0.6)]"></span>
                    ConectaDev Elite
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-[1.1] text-white drop-shadow-2xl"
                >
                    Como ter <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ff8a00] to-primary bg-[length:200%_auto] animate-pulse select-none">desenvolvimento de software</span> e inteligência empresarial de alto impacto?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg"
                >
                    <strong className="text-white font-medium">Resposta direta:</strong> Com tecnologia de ponta, design cinematográfico e arquitetura de alto impacto — landing pages, SaaS e CRMs verticais (como SOAPIA AI e VIBEFOOD). O futuro do seu negócio começa aqui.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
                >
                    <button
                        type="button"
                        onClick={handleIniciarProjeto}
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider text-sm rounded-full overflow-hidden transition-transform hover:scale-105 w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
                    >
                        <span className="relative z-10">Iniciar Projeto</span>
                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" aria-hidden />
                    </button>

                    <button
                        type="button"
                        onClick={handleNossoPortfolio}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-wider text-sm rounded-full transition-colors hover:bg-white/10 backdrop-blur-md w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
                    >
                        Nosso Portfólio
                    </button>
                </motion.div>
            </div>

            {/* Decorative gradient overlay at the bottom to blend with next section smoothly */}
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-background-dark to-transparent z-20 pointer-events-none"></div>
        </section>
    )
}
