import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useBlogPosts } from '../hooks/useSanityQueries';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const PERIOD_OPTIONS = [
    { value: '7', label: 'Últimos 7 dias' },
    { value: '30', label: 'Últimos 30 dias' },
    { value: 'all', label: 'Todas' },
] as const;

export const Blog = () => {
    const { posts, loading } = useBlogPosts();
    const [period, setPeriod] = useState<'7' | '30' | 'all'>('7');
    const [sourceFilter, setSourceFilter] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('');
    const [search, setSearch] = useState('');

    const filteredPosts = useMemo(() => {
        const now = new Date();
        const cutoffs = {
            '7': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
            '30': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
            all: null as Date | null,
        };
        const cutoff = cutoffs[period];
        return posts.filter((p) => {
            if (cutoff && p.dateISO) {
                const d = new Date(p.dateISO);
                if (d < cutoff) return false;
            }
            if (sourceFilter && p.sourceName !== sourceFilter) return false;
            if (categoryFilter && p.category !== categoryFilter) return false;
            if (search.trim()) {
                const q = search.trim().toLowerCase();
                if (!p.title.toLowerCase().includes(q) && !(p.description || '').toLowerCase().includes(q)) return false;
            }
            return true;
        });
    }, [posts, period, sourceFilter, categoryFilter, search]);

    const sources = useMemo(() => Array.from(new Set(posts.map((p) => p.sourceName).filter(Boolean))).sort(), [posts]);
    const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category).filter(Boolean))).sort(), [posts]);

    return (
        <main className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase">
                        Insights de <span className="text-primary italic font-drama lowercase">Engenharia</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Artigos técnicos, tendências de mercado e o futuro da inteligência empresarial.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : (
                <>
                    <div className="mb-8 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                                <Filter size={14} /> Período:
                            </span>
                            {PERIOD_OPTIONS.map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => setPeriod(opt.value)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        period === opt.value
                                            ? 'bg-primary text-black'
                                            : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700'
                                    }`}
                                >
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <select
                                value={sourceFilter}
                                onChange={(e) => setSourceFilter(e.target.value)}
                                className="bg-zinc-800/80 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="">Todas as fontes</option>
                                {sources.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="bg-zinc-800/80 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="">Todas as categorias</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <div className="relative flex-1 min-w-[200px] max-w-sm">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
                                <input
                                    type="search"
                                    placeholder="Buscar notícias..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full bg-zinc-800/80 border border-zinc-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {filteredPosts.length} {filteredPosts.length === 1 ? 'notícia' : 'notícias'}
                        </p>
                    </div>
                    {filteredPosts.length === 0 ? (
                        <p className="text-center text-muted-foreground py-12">Nenhuma notícia encontrada com esses filtros. Tente alterar período, fonte ou busca.</p>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="relative group cursor-pointer"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            }}
                        >
                            <Link to={`/blog/${post.slug}`}>
                                <Card
                                    className="glass-panel border-primary/5 hover:border-primary/40 bg-card/40 backdrop-blur-2xl rounded-2xl overflow-hidden transition-all duration-300"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,111,0,0.1), transparent 40%)`
                                    } as React.CSSProperties}
                                >
                                    <div className="aspect-[2/1] w-full overflow-hidden rounded-t-2xl bg-zinc-800/50">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop';
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zinc-500 text-sm">Prévia sem imagem</div>
                                        )}
                                    </div>
                                    <CardHeader>
                                        <div className="flex justify-between items-center mb-4">
                                            <Badge variant="outline" className="border-primary/20 text-primary">
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                        </div>
                                        <CardTitle className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground mt-2 text-sm line-clamp-2">
                                            {post.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mt-6">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                                                {post.author.slice(0, 2).toUpperCase()}
                                            </div>
                                            <span className="text-sm text-white/80">{post.author}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                    </div>
                    )}
                </>
                )}
            </div>
        </main>
    );
};
