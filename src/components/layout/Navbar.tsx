import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <img
                            alt="ConectaDev Logo"
                            className="h-56 w-auto object-contain transition-transform group-hover:scale-105"
                            src="/assets/logo.png?v=v9.0"
                        />
                        <span className="font-bold flex flex-col justify-center hidden sm:flex">
                            <span className="text-[10px] md:text-xs text-text-light/80 dark:text-text-dark/80 tracking-wider">
                                Desenvolvimento e inteligência
                            </span>
                            <span className="text-primary text-sm md:text-base leading-none">
                                EMPRESARIAL
                            </span>
                        </span>
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href={isHome ? "#services" : "/#services"}
                            onClick={(e) => handleHashLink(e, 'services')}
                        >
                            Serviços
                        </a>
                        <Link
                            className={`text-sm font-medium transition-colors ${location.pathname === '/blog' ? 'text-primary' : 'hover:text-primary'}`}
                            to="/blog"
                        >
                            Blog
                        </Link>
                        <Link
                            className={`text-sm font-medium transition-colors ${location.pathname === '/cases' ? 'text-primary' : 'hover:text-primary'}`}
                            to="/cases"
                        >
                            Cases
                        </Link>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href={isHome ? "#faq" : "/#faq"}
                            onClick={(e) => handleHashLink(e, 'faq')}
                        >
                            FAQ
                        </a>
                    </div>

                    <div className="hidden md:flex items-center">
                        <a
                            className="bg-primary text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(206,240,46,0.3)]"
                            href="#contact"
                            onClick={(e) => handleHashLink(e, 'contact')}
                        >
                            Agende uma Sessão
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-text-light dark:text-text-dark hover:text-primary focus:outline-none">
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
