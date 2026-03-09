import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const STORAGE_KEY = "conectadev_interest";
const TILT_MAX = 8;

type Step = {
    id: number;
    slug: string;
    icon: string;
    title: string;
    description: string;
};

function ProcessCard({
    step,
    onStepClick,
    onKeyDown,
}: {
    step: Step;
    onStepClick: (slug: string) => void;
    onKeyDown: (e: React.KeyboardEvent, slug: string) => void;
}) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        setTilt({ x: -y * TILT_MAX, y: x * TILT_MAX });
    }, []);

    const onMouseLeave = useCallback(() => {
        setTilt({ x: 0, y: 0 });
    }, []);

    const transform = `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)${tilt.x !== 0 || tilt.y !== 0 ? " scale3d(1.02, 1.02, 1.02)" : ""}`;

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={`Falar sobre o passo ${step.id}: ${step.title}`}
            onClick={() => onStepClick(step.slug)}
            onKeyDown={(e) => onKeyDown(e, step.slug)}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative group cursor-pointer rounded-xl p-4 -m-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark"
            style={{ perspective: "1000px" }}
        >
            <div
                className="rounded-xl transition-[transform,box-shadow] duration-200 ease-out border border-transparent hover:border-gray-200 dark:hover:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]"
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
            >
                <div className="p-4">
                    <div className="flex items-center justify-center lg:justify-start mb-6 lg:mb-12">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(206,240,46,0.4)] group-hover:scale-110 transition-transform relative z-10 border-4 border-background-light dark:border-background-dark">
                            <span className="material-symbols-outlined text-black text-2xl">{step.icon}</span>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <span className="text-xs font-bold text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest block mb-2">Passo {step.id}</span>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                            {step.description}
                        </p>
                        <p className="mt-3 text-xs text-text-muted-light dark:text-text-muted-dark group-hover:text-primary dark:group-hover:text-primary uppercase tracking-wider transition-colors">
                            Falar sobre este passo →
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Process() {
    const location = useLocation();
    const navigate = useNavigate();

    const steps = [
        {
            id: 1,
            slug: "processo-briefing",
            icon: "description",
            title: "Briefing",
            description: "Mergulhamos nos seus objetivos de negócio, público-alvo e requisitos para um alinhamento estratégico perfeito."
        },
        {
            id: 2,
            slug: "processo-ideia",
            icon: "lightbulb",
            title: "Ideia",
            description: "Nossas equipes técnica e criativa elaboram soluções inovadoras, design e estratégias arquiteturais."
        },
        {
            id: 3,
            slug: "processo-desenvolvimento",
            icon: "settings",
            title: "Desenvolvimento",
            description: "Ciclos ágeis, design cinematográfico e código de elite, com testes rigorosos e feedback contínuo."
        },
        {
            id: 4,
            slug: "processo-entrega",
            icon: "task_alt",
            title: "Entrega",
            description: "Otimização final, implantação e entrega contínua, com suporte e evolução do produto."
        }
    ];

    const handleStepClick = (slug: string) => {
        if (location.pathname === "/" || location.pathname === "/faq") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#contact");
        }
        try {
            sessionStorage.setItem(STORAGE_KEY, slug);
        } catch (_) {}
    };

    const handleKeyDown = (e: React.KeyboardEvent, slug: string) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleStepClick(slug);
        }
    };

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark" id="process">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-3">Como funciona</p>
                    <h2 className="text-4xl md:text-5xl font-bold">Nosso Processo de <span className="text-primary">Trabalho</span></h2>
                    <p className="mt-4 text-text-muted-light dark:text-text-muted-dark max-w-xl">
                        Do alinhamento estratégico à entrega contínua, com foco no seu resultado. Uma abordagem ágil e transparente para dar vida à sua visão digital.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden lg:block z-0 border-t border-dashed border-gray-400 dark:border-gray-600"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step) => (
                            <ProcessCard
                                key={step.id}
                                step={step}
                                onStepClick={handleStepClick}
                                onKeyDown={handleKeyDown}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
