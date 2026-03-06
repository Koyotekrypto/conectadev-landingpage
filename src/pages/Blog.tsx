import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../data/contentData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const Blog = () => {
    return (
        <main className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter uppercase">
                        Insights de <span className="text-primary italic font-drama lowercase">Engenharia</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Artigos técnicos, tendências de mercado e o futuro da inteligência empresarial.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {BLOG_POSTS.map((post, index) => (
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
                                    className="glass-panel border-primary/5 hover:border-primary/40 bg-card/40 backdrop-blur-2xl rounded-[2rem] overflow-hidden transition-all duration-300"
                                    style={{
                                        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,111,0,0.1), transparent 40%)`
                                    } as React.CSSProperties}
                                >
                                    <CardHeader>
                                        <div className="flex justify-between items-center mb-4">
                                            <Badge variant="outline" className="border-primary/20 text-primary">
                                                {post.category}
                                            </Badge>
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                        </div>
                                        <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-muted-foreground mt-4 line-clamp-2">
                                            {post.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mt-6">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                                                AC
                                            </div>
                                            <span className="text-sm text-white/80">{post.author}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};
