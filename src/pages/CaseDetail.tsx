import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ChevronRight, BarChart3, Target, Rocket } from 'lucide-react';
import { CASE_STUDIES } from '../data/contentData';
import { Badge } from '../components/ui/badge';

const CaseDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const study = useMemo(() =>
        CASE_STUDIES.find(s => s.slug === slug),
        [slug]);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                <h1 className="text-4xl font-bold mb-4">Estudo de Case não encontrado</h1>
                <Link to="/cases" className="text-orange-500 flex items-center gap-2 hover:underline">
                    <ArrowLeft size={20} /> Voltar para Cases
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-black min-h-screen text-white"
        >
            <div className="max-w-5xl mx-auto px-4">
                <Link
                    to="/cases"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para Cases
                </Link>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-6 uppercase tracking-widest">
                            Estudo de Caso
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {study.title}
                        </h1>
                        <div className="text-2xl text-orange-500 font-medium mb-8">
                            Cliente: {study.client}
                        </div>
                        <p className="text-zinc-400 text-xl leading-relaxed">
                            {study.description}
                        </p>
                    </div>

                    <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-zinc-800 shadow-2xl shadow-orange-500/10">
                        <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {study.metrics.map((metric, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 text-center group hover:border-orange-500/50 transition-all">
                            <div className="text-orange-500 mb-2 flex justify-center">
                                {idx === 0 && <BarChart3 size={24} />}
                                {idx === 1 && <Target size={24} />}
                                {idx === 2 && <Rocket size={24} />}
                            </div>
                            <div className="text-4xl font-bold mb-1">{metric.value}</div>
                            <div className="text-zinc-500 text-sm uppercase tracking-wider">{metric.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-[1fr_350px] gap-20 mb-20">
                    <div className="space-y-12">
                        <article className="prose prose-invert max-w-none">
                            <div className="whitespace-pre-line text-zinc-300 leading-relaxed text-lg">
                                {study.content}
                            </div>
                        </article>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-orange-500" /> Principais Entregas
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {study.results.map((result, idx) => (
                                    <li key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 text-zinc-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="p-8 rounded-3xl bg-gradient-to-b from-orange-500 to-orange-600 text-black">
                            <h4 className="text-xl font-bold mb-4">Pronto para resultados similares?</h4>
                            <p className="mb-8 font-medium opacity-90">Transforme sua visão em um case de sucesso de escala global.</p>
                            <button
                                onClick={() => navigate('/#contact')}
                                className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
                            >
                                Agendar Mentoria
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20">
                            <h4 className="font-bold mb-4">Serviços Aplicados</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Desenvolvimento Customizado', 'BI & Analytics', 'UI/UX Design'].map(s => (
                                    <span key={s} className="px-3 py-1 rounded-lg bg-zinc-800 text-xs text-zinc-400">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseDetail;
