import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        }
    };

    const navLinks = [
        { name: 'Serviços', href: '#services', type: 'hash' },
        { name: 'Blog', href: '/blog', type: 'link' },
        { name: 'Cases', href: '/cases', type: 'link' },
        { name: 'Clínicas', href: '/clinicas', type: 'link' },
        { name: 'Restaurantes', href: '/restaurantes', type: 'link' },
        { name: 'FAQ', href: '/faq', type: 'link' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 border-b ${scrolled
            ? 'bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md py-2 border-gray-200 dark:border-white/10'
            : 'bg-transparent py-4 border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group z-50">
                        <img
                            alt="ConectaDev Logo"
                            className="h-12 sm:h-24 md:h-40 lg:h-56 w-auto object-contain transition-transform group-hover:scale-105"
                            src="/assets/logo.png?v=v9.0"
                        />
                        <span className="font-bold flex flex-col justify-center">
                            <span className="hidden sm:inline text-[10px] md:text-xs text-text-light/80 dark:text-text-dark/80 tracking-wider">
                                Desenvolvimento e inteligência
                            </span>
                            <span className="text-primary text-sm md:text-base leading-none">
                                EMPRESARIAL
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            link.type === 'hash' ? (
                                <a
                                    key={link.name}
                                    className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                                    href={isHome ? link.href : `/${link.href}`}
                                    onClick={(e) => handleHashLink(e, link.href.replace('#', ''))}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-primary' : 'hover:text-primary'
                                        }`}
                                    to={link.href}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <a
                            className="bg-primary text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(206,240,46,0.3)]"
                            href="#contact"
                            onClick={(e) => handleHashLink(e, 'contact')}
                        >
                            Agende uma Sessão
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-text-light dark:text-text-dark hover:text-primary transition-colors"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-background-light dark:bg-background-dark z-40 md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            link.type === 'hash' ? (
                                <a
                                    key={link.name}
                                    className="text-2xl font-bold hover:text-primary transition-colors"
                                    href={isHome ? link.href : `/${link.href}`}
                                    onClick={(e) => handleHashLink(e, link.href.replace('#', ''))}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    className={`text-2xl font-bold transition-colors ${location.pathname === link.href ? 'text-primary' : 'hover:text-primary'
                                        }`}
                                    to={link.href}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <a
                            className="bg-primary text-black font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_20px_rgba(206,240,46,0.4)]"
                            href="#contact"
                            onClick={(e) => handleHashLink(e, 'contact')}
                        >
                            Agendar Sessão
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
