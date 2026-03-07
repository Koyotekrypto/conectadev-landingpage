import { useState, useEffect } from 'react';
import { client } from '../sanity/client';

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
                // GROQ Queries
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
