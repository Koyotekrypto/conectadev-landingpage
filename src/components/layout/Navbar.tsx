export function Navbar() {
    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img
                            alt="ConectaDev Logo"
                            className="w-10 h-10 object-contain"
                            src="/assets/logo.png?v=v8.1"
                        />
                        <span className="font-bold flex flex-col justify-center hidden sm:flex">
                            <span className="text-[10px] md:text-xs text-text-light/80 dark:text-text-dark/80 tracking-wider">
                                Desenvolvimento e inteligência
                            </span>
                            <span className="text-primary text-sm md:text-base leading-none">
                                EMPRESARIAL
                            </span>
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Serviços</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#portfolio">Portfólio</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#process">Processo</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a
                            className="bg-primary text-black font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(206,240,46,0.3)]"
                            href="#contact"
                        >
                            Agende uma Sessão Estratégica
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
