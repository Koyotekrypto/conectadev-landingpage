import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { PageSEO } from '../components/seo/PageSEO';
import { BASE_URL, getBlogPostSeo } from '../data/seoContent';
import { SEO_BY_PATH } from '../data/seoContent';
import { useBlogPosts } from '../hooks/useSanityQueries';
import { Badge } from '../components/ui/badge';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { posts, loading } = useBlogPosts();

    const post = useMemo(() =>
        posts.find(p => p.slug === slug),
        [posts, slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <PageSEO meta={SEO_BY_PATH['/blog']} />
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
                <PageSEO meta={SEO_BY_PATH['/blog']} />
                <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
                <Link to="/blog" className="text-orange-500 flex items-center gap-2 hover:underline">
                    <ArrowLeft size={20} /> Voltar para o Blog
                </Link>
            </div>
        );
    }

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description || post.title,
        author: { '@type': 'Person', name: post.author },
        datePublished: post.dateISO || post.date,
        publisher: { '@type': 'Organization', name: 'ConectaDev', url: BASE_URL },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 bg-black min-h-screen text-white"
        >
            <PageSEO meta={getBlogPostSeo(post.title, post.description || '', post.category)} />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>
            <div className="max-w-4xl mx-auto px-4">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para o Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 px-3 py-1">
                            {post.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <Calendar size={14} />
                            {post.date}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 w-fit">
                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black">
                            {post.author[0]}
                        </div>
                        <div>
                            <div className="text-sm font-medium">{post.author}</div>
                            <div className="text-xs text-zinc-500 text-nowrap">Technical Lead @ ConectaDev</div>
                        </div>
                    </div>
                </header>

                {post.image && (
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-zinc-800">
                    <img
                        src={post.image}
                        alt={`Imagem do artigo: ${post.title}. ${post.description || ''}`}
                        title={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                )}

                <article className="prose prose-invert prose-orange max-w-none">
                    {post.content ? (
                    <div className="whitespace-pre-line text-zinc-300 leading-relaxed text-lg">
                        {post.content}
                    </div>
                    ) : post.sourceUrl ? (
                    <div className="text-zinc-300 leading-relaxed text-lg space-y-4">
                        <p>{post.description}</p>
                        <a
                            href={post.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                        >
                            Leia a notícia completa
                            <ExternalLink size={18} />
                        </a>
                        {post.sourceName && (
                            <p className="text-sm text-zinc-500">Fonte: {post.sourceName}</p>
                        )}
                    </div>
                    ) : (
                    <div className="whitespace-pre-line text-zinc-300 leading-relaxed text-lg">
                        {post.description}
                    </div>
                    )}
                </article>

                <footer className="mt-20 pt-10 border-t border-zinc-800">
                    <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-3xl border border-zinc-800 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] -mr-32 -mt-32" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Gostou deste conteúdo?</h3>
                                <p className="text-zinc-400">Podemos implementar inteligência semelhante no seu ecossistema digital.</p>
                            </div>
                            <button
                                onClick={() => navigate('/#contact')}
                                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                                Falar com um Especialista
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </motion.div>
    );
};

export default BlogPost;
