import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, ChevronRight, BarChart3, Target, Rocket, Check, Code2, BarChart2, Palette, ExternalLink } from 'lucide-react';
import { PageSEO } from '../components/seo/PageSEO';
import { BASE_URL, getCaseSeo, SEO_BY_PATH } from '../data/seoContent';
import { CASE_STUDIES, type CaseStudy } from '../data/contentData';

const CAROUSEL_INTERVAL_MS = 1500;

/** Carrossel de imagens do case (igual às telas dos computadores): object-contain para não cortar. */
function CasePreviewCarousel({ study }: { study: CaseStudy }) {
    const images = study.images && study.images.length > 0 ? study.images : [study.image];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, CAROUSEL_INTERVAL_MS);
        return () => clearInterval(timer);
    }, [images.length]);

    const slideVariants = {
        enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d < 0 ? '100%' : '-100%', opacity: 0 })
    };

    return (
        <div className="relative w-full min-h-[280px] aspect-video rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl shadow-primary/10 bg-black flex items-center justify-center">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.25 } }}
                    className="absolute inset-0 flex items-center justify-center p-2"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`${study.title}: captura de tela ${currentIndex + 1} do produto — ${study.description}`}
                        title={`${study.title} — tela ${currentIndex + 1}`}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
                        }}
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-white/40'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

/** Renderiza conteúdo markdown-like: linhas "# Título" viram h2, demais viram parágrafos. */
function CaseContent({ content }: { content: string }) {
    const lines = content.trim().split('\n');
    const blocks: { type: 'h2' | 'p'; text: string }[] = [];
    let currentParagraph: string[] = [];

    const flushParagraph = () => {
        if (currentParagraph.length) {
            blocks.push({ type: 'p', text: currentParagraph.join(' ').trim() });
            currentParagraph = [];
        }
    };

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('# ')) {
            flushParagraph();
            blocks.push({ type: 'h2', text: trimmed.slice(2).trim() });
        } else if (trimmed) {
            currentParagraph.push(trimmed);
        } else {
            flushParagraph();
        }
    }
    flushParagraph();

    return (
        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
            {blocks.map((block, i) =>
                block.type === 'h2' ? (
                    <h2 key={i} className="text-xl font-bold text-white mt-8 mb-2 first:mt-0">
                        {block.text}
                    </h2>
                ) : (
                    <p key={i}>{block.text}</p>
                )
            )}
        </div>
    );
}

const CaseDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const study = useMemo(() =>
        CASE_STUDIES.find(s => s.slug === slug),
        [slug]);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                <PageSEO meta={SEO_BY_PATH['/cases']} />
                <h1 className="text-4xl font-bold mb-4">Estudo de Case não encontrado</h1>
                <Link to="/cases" className="text-primary flex items-center gap-2 hover:underline">
                    <ArrowLeft size={20} /> Voltar para Cases
                </Link>
            </div>
        );
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: study.title,
        description: study.description,
        author: { '@type': 'Organization', name: 'ConectaDev', url: BASE_URL },
        publisher: { '@type': 'Organization', name: 'ConectaDev', url: BASE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/cases/${study.slug}` },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-black min-h-screen text-white"
        >
            <PageSEO meta={getCaseSeo(study.slug, study.title, study.description)} />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>
            <div className="max-w-5xl mx-auto px-4">
                <Link
                    to="/cases"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para Cases
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6 uppercase tracking-widest">
                            Estudo de Caso
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                            {study.title}
                        </h1>
                        <div className="text-xl md:text-2xl text-primary font-medium mb-8">
                            Cliente: {study.client}
                        </div>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            {study.description}
                        </p>
                    </div>

                    <CasePreviewCarousel study={study} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                >
                    {study.metrics.map((metric, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center group hover:border-primary/50 transition-all"
                        >
                            <div className="text-primary mb-2 flex justify-center">
                                {idx === 0 && <BarChart3 size={24} />}
                                {idx === 1 && <Target size={24} />}
                                {idx === 2 && <Rocket size={24} />}
                            </div>
                            <div className="text-4xl font-bold mb-1">{metric.value}</div>
                            <div className="text-zinc-500 text-sm uppercase tracking-wider">{metric.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="grid md:grid-cols-[1fr_350px] gap-20 mb-20"
                >
                    <div className="space-y-12">
                        <article className="prose prose-invert max-w-none">
                            <CaseContent content={study.content} />
                        </article>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-primary" /> Principais Entregas
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {study.results.map((result, idx) => (
                                    <li key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 text-zinc-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {study.features && study.features.length > 0 && (
                            <div className="mt-12">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded-full" />
                                    Funcionalidades do sistema
                                </h3>
                                <div className="max-h-[320px] overflow-y-auto pr-2 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 p-4 space-y-2">
                                    <div className="grid sm:grid-cols-2 gap-2">
                                        {study.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                                                </span>
                                                <span className="font-medium text-white/90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="space-y-8">
                        {study.link && (
                            <a
                                href={study.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 rounded-2xl font-bold border-2 border-primary text-primary hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                            >
                                Visitar site
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                        <div className="p-8 rounded-3xl bg-primary/15 border border-primary/30 text-white">
                            <h4 className="text-xl font-bold mb-4">Pronto para resultados similares?</h4>
                            <p className="mb-8 font-medium text-zinc-300">Transforme sua visão em um case de sucesso de escala global. Fale com nossa equipe.</p>
                            <button
                                onClick={() => navigate('/#contact')}
                                className="w-full bg-primary text-black py-4 rounded-2xl font-bold hover:bg-primary/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(206,240,46,0.2)]"
                            >
                                Agendar Mentoria
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
                            <h4 className="font-bold mb-4">Serviços Aplicados</h4>
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: 'Desenvolvimento Customizado', icon: Code2 },
                                    { label: 'BI & Analytics', icon: BarChart2 },
                                    { label: 'UI/UX Design', icon: Palette }
                                ].map(({ label, icon: Icon }) => (
                                    <div key={label} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800/80 border border-zinc-700/50">
                                        <span className="text-primary"><Icon className="w-4 h-4" /></span>
                                        <span className="text-sm text-zinc-300">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </motion.div>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-16 p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 text-center"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {study.slug === 'luane-nascimento-advogados' || study.slug === 'thays-morais-contabilidade' ? 'Quer um site como este?' : 'Quer um sistema como este?'}
                    </h3>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                        {study.slug === 'luane-nascimento-advogados' || study.slug === 'thays-morais-contabilidade'
                            ? 'Fale com nossa equipe e transforme sua presença digital em um case de sucesso.'
                            : 'Fale com nossa equipe e transforme sua operação em um case de sucesso.'}
                    </p>
                    <button
                        onClick={() => navigate('/#contact')}
                        className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(206,240,46,0.2)]"
                    >
                        Agendar Mentoria
                        <ChevronRight size={20} />
                    </button>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default CaseDetail;
