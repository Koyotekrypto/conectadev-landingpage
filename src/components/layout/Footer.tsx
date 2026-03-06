import { Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-surface-light dark:bg-[#0a0c0c] pt-20 pb-10 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                alt="Logo ConectaDev"
                                className="h-40 md:h-64 lg:h-96 w-auto object-contain"
                                src="/assets/logo.png?v=v9.0"
                            />
                            <span className="font-bold text-2xl tracking-tight">Conecta<span className="text-primary">Dev</span></span>
                        </div>
                        <p className="text-text-muted-light dark:text-text-muted-dark mb-8 max-w-sm">
                            Construindo ativos digitais de alto nível que transformam dados em lucro real através de engenharia web de elite e design cinematográfico.
                        </p>
                        <div className="flex gap-4">
                            <a
                                className="group w-11 h-11 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-[#1877F2] dark:hover:bg-[#1877F2] transition-all duration-300 border border-transparent"
                                href="https://www.facebook.com/people/ConectaDev"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-white dark:group-hover:text-white transition-all duration-300" />
                            </a>
                            <a
                                className="group w-11 h-11 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center transition-all duration-300 border border-transparent relative overflow-hidden"
                                href="https://www.instagram.com/conectadev.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Instagram"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <Instagram className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-white dark:group-hover:text-white transition-all duration-300 relative z-10" />
                            </a>
                            <a
                                className="group w-11 h-11 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 border border-transparent"
                                href="https://wa.me/5585981096763"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WhatsApp"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-gray-600 dark:fill-white/70 group-hover:fill-white dark:group-hover:fill-white transition-all duration-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                            <a
                                className="group w-11 h-11 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all duration-300 border border-transparent"
                                href="https://www.linkedin.com/company/conectadev"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-gray-600 dark:text-white/70 group-hover:text-white dark:group-hover:text-white transition-all duration-300" />
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
                                <span>São Paulo/Ceará - Brasil</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                                <span>contato@conectadev.com.br</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-xl">chat</span>
                                <span>+55 (85) 98109-6763</span>
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
