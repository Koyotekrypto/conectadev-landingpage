import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X, ExternalLink, ArrowRight, TrendingUp, Users, Clock, Quote, Check } from 'lucide-react';
import { useSanityQueries } from '../../hooks/useSanityQueries';
import { urlFor } from '../../sanity/client';
import { DeviceMockup } from '../ui/DeviceMockup';
import { PROJECT_FEATURES } from '../../data/contentData';

interface ProjectMetric {
    label: string;
    value: string;
    icon: any;
}

interface Project {
    id: number;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    images?: string[];
    videoUrl?: string;
    link: string;
    metrics: ProjectMetric[];
    features?: string[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
}

// ----------------------------------------------------------------------
// CARROSSEL DE IMAGENS NO MODAL (MESMO COMPORTAMENTO DAS TELAS DOS COMPUTADORES)
// ----------------------------------------------------------------------
const MODAL_CAROUSEL_INTERVAL_MS = 1500;

const ModalImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, MODAL_CAROUSEL_INTERVAL_MS);
        return () => clearInterval(timer);
    }, [images.length]);

    const slideVariants = {
        enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d < 0 ? '100%' : '-100%', opacity: 0 })
    };

    return (
        <div className="flex-1 h-full min-h-[200px] bg-black overflow-hidden lg:border-r border-white/5 relative flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.25 } }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`${title} - tela ${currentIndex + 1}`}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>
            </AnimatePresence>
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// ----------------------------------------------------------------------
// COMPONENTE DE SHOWROOM COM AUTO-SCROLL CINEMÁTICO E MÁSCARA (fallback sem imagens)
// ----------------------------------------------------------------------
const ShowroomIframe = ({ url, title }: { url: string, title: string }) => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            controls.start({
                y: ["0%", "-40%"],
                transition: {
                    ease: "linear",
                    duration: 35,
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            });
        } else {
            controls.stop();
        }
    }, [isHovered, controls]);

    return (
        <div
            className="flex-1 h-full min-h-[200px] bg-black overflow-hidden lg:border-r border-white/5 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 bg-surface-dark">
                <div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin" />
            </div>

            <motion.iframe
                animate={controls}
                src={url}
                className="w-full absolute top-0 left-0 bg-white/5"
                style={{
                    height: '2500px',
                    border: 'none',
                    scrollbarWidth: 'none'
                }}
                title={`Showroom Demo: ${title}`}
                loading="lazy"
            />

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
                transition={{ duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-2 pointer-events-none"
            >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-white/70 uppercase tracking-wider">Apresentação Automática</span>
            </motion.div>
        </div>
    );
};
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
// PROJECT INFO PANEL COM ABAS E KPIs PROOF OF VALUE
// ----------------------------------------------------------------------
const ProjectInfoPanel = ({ project, onScheduleClick }: { project: Project; onScheduleClick?: () => void }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'impact'>('overview');

    return (
        <div className="w-full lg:w-[450px] min-h-0 lg:min-h-[40vh] bg-black/40 backdrop-blur-xl p-6 lg:p-8 flex flex-col justify-between overflow-y-auto border-l border-white/5 z-10 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:hidden" />

            <div>
                {/* Custom Tabs */}
                <div className="flex bg-white/5 p-1 rounded-lg mb-8 relative">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 py-2 text-sm font-bold tracking-wide transition-colors z-10 ${activeTab === 'overview' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        Visão Geral
                    </button>
                    <button
                        onClick={() => setActiveTab('impact')}
                        className={`flex-1 py-2 text-sm font-bold tracking-wide transition-colors z-10 ${activeTab === 'impact' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                    >
                        Impacto (KPIs)
                    </button>
                    {/* Animated Background Selector */}
                    <motion.div
                        initial={false}
                        animate={{ x: activeTab === 'overview' ? '0%' : '100%' }}
                        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-md z-0 shadow-[0_0_15px_rgba(206,240,46,0.3)]"
                    />
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overview' ? (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h4 className="text-2xl font-bold text-white mb-4">Sobre a Plataforma</h4>
                            <p className="text-gray-300 font-light leading-relaxed text-[15px]">
                                {project.fullDescription}
                            </p>

                            {project.features && project.features.length > 0 && (
                                <div className="mt-8">
                                    <h5 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="w-1 h-5 bg-primary rounded-full" />
                                        Funcionalidades do sistema
                                    </h5>
                                    <div className="max-h-[280px] overflow-y-auto pr-2 space-y-2 custom-scrollbar rounded-xl border border-white/10 bg-white/5 p-4">
                                        <div className="grid grid-cols-1 gap-2">
                                            {project.features.map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -6 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.02 }}
                                                    className="flex items-start gap-3 text-gray-300 text-sm"
                                                >
                                                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                                        <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                                                    </span>
                                                    <span className="font-medium text-white/90">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {project.testimonial && (
                                <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10 relative">
                                    <Quote className="absolute top-4 right-4 text-white/10 w-8 h-8" />
                                    <p className="text-gray-300 italic text-sm mb-4">"{project.testimonial.quote}"</p>
                                    <div>
                                        <p className="text-white font-bold text-sm">{project.testimonial.author}</p>
                                        <p className="text-primary text-xs uppercase tracking-widest">{project.testimonial.role}</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="impact"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col gap-4"
                        >
                            <h4 className="text-2xl font-bold text-white mb-6">Resultados Gerados</h4>
                            {project.metrics.map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-dark border border-white/5 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <metric.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-1">{metric.label}</p>
                                        <p className="text-3xl font-bold text-white tracking-tighter shadow-primary/20 drop-shadow-lg">{metric.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                {onScheduleClick && (
                    <button
                        onClick={onScheduleClick}
                        className="w-full min-h-[44px] flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all font-bold tracking-wide touch-manipulation"
                    >
                        Agendar Sessão
                    </button>
                )}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                >
                    Acessar Plataforma Web
                    <ExternalLink className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
// ----------------------------------------------------------------------

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const navigate = useNavigate();
    const { projects: sanityProjects, loading } = useSanityQueries();

    // MOCK FALLBACK (Serão usados se o Sanity ainda estiver vazio)
    const mockProjects: Project[] = [
        {
            id: 1,
            title: "SOAPIA AI",
            category: "Gestão HealthTech",
            shortDescription: "Ecossistema completo de gestão clínica inteligente com IA adaptativa.",
            fullDescription: "O ecossistema definitivo de gestão clínica inteligente. Uma plataforma end-to-end — do prontuário eletrônico ao controle financeiro avançado —, potencializada por Inteligência Artificial adaptativa para mais de 30 especialidades médicas. Transforme a rotina da sua clínica com automação e dados precisos.",
            image: "/assets/projects/soapia/1.png",
            images: [
                "/assets/projects/soapia/1.png",
                "/assets/projects/soapia/2.png",
                "/assets/projects/soapia/3.png",
                "/assets/projects/soapia/4.png",
                "/assets/projects/soapia/5.png",
                "/assets/projects/soapia/6.png"
            ],
            // videoUrl: "/videos/soapia-demo.mp4",
            link: "https://www.soapiamed.com/",
            metrics: [
                { label: "Economia de Tempo Médico", value: "40%", icon: Clock },
                { label: "Redução de Falhas/Glosas", value: "95%", icon: TrendingUp },
                { label: "Clínicas Ativas", value: "+120", icon: Users }
            ],
            testimonial: {
                quote: "A ConectaDev não construiu apenas um site, eles entregaram um verdadeiro motor em forma de SaaS. A arquitetura inteligente reduziu nossos custos de servidor enquanto triplicou a velocidade.",
                author: "Dr. Arthur Lemos",
                role: "CEO, ScioMed"
            }
        },
        {
            id: 2,
            title: "VIBE FOOD™",
            category: "Gestão Gastronômica High-Performance",
            shortDescription: "Ecossistema SaaS focado em mobilidade, segurança e UX acelerada.",
            fullDescription: "Plataforma SaaS de Gestão Gastronômica High-Performance. O VibeFood é um ecossistema projetado para restaurantes que buscam dominar sua operação. Focado em extrema mobilidade, segurança de dados e uma experiência do usuário acelerada para maximizar as conversões e o fluxo de pedidos.",
            image: "/assets/projects/vibefood/1.png",
            images: [
                "/assets/projects/vibefood/1.png",
                "/assets/projects/vibefood/2.png",
                "/assets/projects/vibefood/3.png",
                "/assets/projects/vibefood/4.png",
                "/assets/projects/vibefood/5.png"
            ],
            // videoUrl: "/videos/vibefood-demo.mp4",
            link: "https://vibefood.vercel.app/",
            metrics: [
                { label: "Aumento em Pedidos Online", value: "3x", icon: TrendingUp },
                { label: "Tempo de Resposta", value: "< 0.8s", icon: Clock },
                { label: "Usuários Atendidos/Dia", value: "+5Mil", icon: Users }
            ],
            testimonial: {
                quote: "A performance do cardápio digital redefiniu a forma como operamos nossos deliverys de alto volume. Sem crashes, sem lentidão. UX impecável.",
                author: "Marcos Almeida",
                role: "Diretor de Operações"
            }
        },
        {
            id: 3,
            title: "Luane Nascimento | Advocacia",
            category: "Site Institucional · Direito Empresarial",
            shortDescription: "Site institucional de alto impacto para escritório de advocacia, com foco em conversão e captura de leads.",
            fullDescription: "Site institucional para o escritório Luane Nascimento Advocacia, especializado em Direito Empresarial. Design elegante com paleta institucional, múltiplos CTAs (Fale Conosco), formulário de contato, seções Quem Somos, Áreas de atuação, Depoimentos, Notícias e FAQ. Foco em credibilidade e conversão.",
            image: "/assets/projects/luane/1.png",
            images: ["/assets/projects/luane/1.png"],
            link: "https://www.luanenascimentoadvogados.com/",
            metrics: [
                { label: "Conversão", value: "CTAs em destaque", icon: TrendingUp },
                { label: "Credibilidade", value: "Equipe + OAB", icon: Users },
                { label: "Performance", value: "Otimizada", icon: Clock }
            ],
            features: PROJECT_FEATURES['luane-nascimento-advogados']
        }
    ];

    // Se o Sanity retornar dados (mais que 0), mapeia eles. Senão, usa os mocks pre-definidos para não quebrar o visual da tela.
    const rawProjects = sanityProjects && sanityProjects.length > 0 ? sanityProjects.map((sp: any) => ({
        id: sp._id,
        title: sp.title,
        category: sp.category,
        shortDescription: sp.description?.substring(0, 100) + '...', // fallback caso shortDescription pare
        fullDescription: sp.description,
        image: sp.image ? urlFor(sp.image).url() : '',
        images: sp.images?.map((img: any) => urlFor(img).url()) || [],
        videoUrl: sp.videoUrl || '',
        link: sp.link,
        metrics: sp.metrics?.map((m: any) => ({
            label: m.label,
            value: m.value,
            icon: m.icon === 'Clock' ? Clock : m.icon === 'TrendingUp' ? TrendingUp : Users
        })) || [],
    })) : mockProjects;

    // Sempre usar imagens locais e funcionalidades para SOAPIA e VIBEFOOD (telas dos computadores + modal)
    const ASSETS_SOAPIA = ["/assets/projects/soapia/1.png", "/assets/projects/soapia/2.png", "/assets/projects/soapia/3.png", "/assets/projects/soapia/4.png", "/assets/projects/soapia/5.png", "/assets/projects/soapia/6.png"];
    const ASSETS_VIBEFOOD = ["/assets/projects/vibefood/1.png", "/assets/projects/vibefood/2.png", "/assets/projects/vibefood/3.png", "/assets/projects/vibefood/4.png", "/assets/projects/vibefood/5.png"];
    const ASSETS_LUANE = [
        "/assets/projects/luane/1.png",
        "/assets/projects/luane/2.png",
        "/assets/projects/luane/3.png",
        "/assets/projects/luane/4.png",
        "/assets/projects/luane/5.png"
    ];
    const projects = rawProjects.map((p: Project) => {
        const t = p.title.toLowerCase();
        if (t.includes("soapia")) return { ...p, image: ASSETS_SOAPIA[0], images: ASSETS_SOAPIA, features: p.features ?? PROJECT_FEATURES['soapia-ai'] };
        if (t.includes("vibe food") || t.includes("vibefood")) return { ...p, image: ASSETS_VIBEFOOD[0], images: ASSETS_VIBEFOOD, features: p.features ?? PROJECT_FEATURES['vibefood'] };
        if (t.includes("luane")) return { ...p, image: ASSETS_LUANE[0], images: ASSETS_LUANE, features: p.features ?? PROJECT_FEATURES['luane-nascimento-advogados'] };
        return p;
    });

    // Oculta scrollbar global quando o modal estiver aberto
    if (typeof document !== "undefined") {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <section className="py-24 bg-background-dark grid-pattern relative border-y border-white/5" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center md:text-left mb-16 md:flex justify-between items-end gap-6">
                    <div>
                        <p className="text-sm font-bold tracking-widest text-text-muted-dark uppercase mb-3">Nossos Projetos</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos em <span className="text-primary">destaque</span></h2>
                    </div>
                    <Link
                        to="/cases"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-[0_0_20px_rgba(206,240,46,0.3)] shrink-0 mt-6 md:mt-0"
                    >
                        <span className="font-semibold text-sm tracking-wider">Conheça nossos cases de sucesso</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Premium Device Mockups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 mt-16">
                    {projects.map((project) => {
                        // Dynamic glow color based on branding
                        const titleLower = project.title.toLowerCase();
                        let glowColor = '#cefa2e'; // default primary
                        if (titleLower.includes('soapia')) glowColor = '#a855f7'; // purple/lilac
                        if (titleLower.includes('vibe food') || titleLower.includes('vibefood')) glowColor = '#f97316'; // orange

                        return (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group flex flex-col gap-8 cursor-pointer relative"
                            >
                                {/* 3D Device Showcase */}
                                <DeviceMockup
                                    imageUrl={project.image}
                                    images={project.images}
                                    videoUrl={project.videoUrl}
                                    altText={project.title}
                                    themeColor={glowColor}
                                />

                                {/* Project Text Info */}
                                <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8">
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 max-w-lg line-clamp-3">
                                        {project.shortDescription}
                                    </p>
                                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md text-white border border-white/10 hover:bg-primary hover:text-black transition-all shadow-lg hover:shadow-[0_0_20px_rgba(206,240,46,0.3)] group/btn">
                                        <span className="font-semibold text-sm tracking-wider uppercase">Ver Estudo de Caso</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Interactive Iframe Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
                        style={{ perspective: 1200 }} // Propriedade 3D para o entrance effect
                    >
                        {/* Overlay invisível para fechar ao clicar fora */}
                        <div
                            className="absolute inset-0 cursor-pointer"
                            onClick={() => setSelectedProject(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.9, rotateX: 10, y: 40, opacity: 0 }}
                            animate={{ scale: 1, rotateX: 0, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, rotateX: -10, y: 40, opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                            className="relative w-full max-w-6xl h-[85vh] max-h-[900px] bg-surface-dark border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(206,240,46,0.05)] ring-1 ring-white/10"
                        >
                            {/* Modal Header - sempre visível */}
                            <div className="w-full flex-shrink-0 flex items-center justify-between p-4 px-6 border-b border-white/5 bg-black/50 backdrop-blur-md z-10">
                                <div className="min-w-0">
                                    <span className="text-primary text-xs tracking-widest uppercase font-bold">{selectedProject.category}</span>
                                    <h3 className="text-xl font-bold text-white truncate">{selectedProject.title}</h3>
                                </div>
                                <div className="flex gap-2 sm:gap-4 items-center flex-shrink-0">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-black rounded-lg transition-colors font-medium text-sm"
                                    >
                                        Visitar URL Real
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors touch-manipulation"
                                        aria-label="Fechar"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body - rolável no mobile para alcançar Agendar Sessão */}
                            <div className="flex flex-col lg:flex-row flex-1 min-h-0 overflow-y-auto lg:overflow-hidden relative">
                                {/* Wrapper do preview: altura limitada no mobile para o painel ficar acessível */}
                                <div className="flex-shrink-0 h-[45vh] min-h-[200px] lg:h-full lg:min-h-0 lg:flex-1">
                                    {(() => {
                                        const t = selectedProject.title.toLowerCase();
                                        const useLandingIframe = t.includes('soapia') || t.includes('vibefood') || t.includes('vibe food');
                                        if (useLandingIframe) {
                                            return <ShowroomIframe url={selectedProject.link} title={selectedProject.title} />;
                                        }
                                        if (selectedProject.images && selectedProject.images.length > 0) {
                                            return <ModalImageCarousel images={selectedProject.images} title={selectedProject.title} />;
                                        }
                                        return <ShowroomIframe url={selectedProject.link} title={selectedProject.title} />;
                                    })()}
                                </div>

                                {/* Project Information Panel with Tabs */}
                                <ProjectInfoPanel
                                    project={selectedProject}
                                    onScheduleClick={() => {
                                        setSelectedProject(null);
                                        navigate('/#contact');
                                    }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
