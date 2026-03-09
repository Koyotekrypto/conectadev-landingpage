import { useState, useEffect } from 'react';
import { client, urlFor } from '../sanity/client';
import { BLOG_POSTS } from '../data/contentData';

export interface BlogPostFromSanity {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
    sourceUrl?: string;
    sourceName?: string;
}

const GROQ_BLOG = `*[_type == "blogPost"] | order(date desc) { _id, title, "slug": slug.current, description, content, date, category, image, author, sourceUrl, sourceName }`;

function mapSanityBlogToPost(doc: any): BlogPostFromSanity {
    return {
        id: doc._id,
        slug: doc.slug || doc._id,
        title: doc.title || '',
        description: doc.description || doc.title || '',
        content: doc.content || '',
        date: doc.date ? new Date(doc.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : '',
        category: doc.category || 'Tendências',
        image: doc.image ? urlFor(doc.image).width(800).url() : '',
        author: doc.author || doc.sourceName || 'ConectaDev',
        sourceUrl: doc.sourceUrl,
        sourceName: doc.sourceName,
    };
}

export function useBlogPosts() {
    const [posts, setPosts] = useState<BlogPostFromSanity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        async function fetchBlog() {
            try {
                setLoading(true);
                const data = await client.fetch(GROQ_BLOG);
                if (!cancelled && Array.isArray(data) && data.length > 0) {
                    setPosts(data.map(mapSanityBlogToPost));
                } else if (!cancelled) {
                    setPosts(BLOG_POSTS as BlogPostFromSanity[]);
                }
            } catch (e) {
                if (!cancelled) setPosts(BLOG_POSTS as BlogPostFromSanity[]);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        fetchBlog();
        return () => { cancelled = true; };
    }, []);

    return { posts, loading };
}

export function useSanityQueries() {
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const [projectsData, servicesData, faqsData, testimonialsData] = await Promise.all([
                    client.fetch('*[_type == "project"] | order(_createdAt desc)'),
                    client.fetch('*[_type == "service"] | order(_createdAt asc)'),
                    client.fetch('*[_type == "faq"] | order(_createdAt asc)'),
                    client.fetch('*[_type == "testimonial"] | order(_createdAt desc)')
                ]);

                setProjects(projectsData);
                setServices(servicesData);
                setFaqs(faqsData);
                setTestimonials(testimonialsData);
            } catch (error) {
                console.error("Erro ao buscar dados do Sanity:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return { projects, services, faqs, testimonials, loading };
}
