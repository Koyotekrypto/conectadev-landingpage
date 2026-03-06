export function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-[#0a0c0c] pt-20 pb-10 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                alt="Logo ConectaDev"
                                className="w-12 h-12 object-contain"
                                src="/assets/logo.png?v=v8.1"
                            />
                            <span className="font-bold text-2xl tracking-tight">Conecta<span className="text-primary">Dev</span></span>
                        </div>
                        <p className="text-text-muted-light dark:text-text-muted-dark mb-8 max-w-sm">
                            Construindo ativos digitais de alto nível que transformam dados em lucro real através de engenharia web de elite e design cinematográfico.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                                <span className="text-sm font-bold">In</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                                <span className="text-sm font-bold">X</span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-colors" href="#">
                                <span className="text-sm font-bold">Be</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
                        <ul className="space-y-4 text-text-muted-light dark:text-text-muted-dark">
                            <li><a className="hover:text-primary transition-colors" href="#">Início</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#services">Serviços</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#portfolio">Portfólio</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#process">Como funciona</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-6">Fale Conosco</h4>
                        <ul className="space-y-4 text-text-muted-light dark:text-text-muted-dark">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                                <span>São Paulo, SP - Brasil</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                <span>hello@conectadev.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">call</span>
                                <span>+55 (11) 99999-9999</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                        © 2024 Agência ConectaDev. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6 text-sm text-text-muted-light dark:text-text-muted-dark">
                        <a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
                        <a className="hover:text-white transition-colors" href="#">Termos de Serviço</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
