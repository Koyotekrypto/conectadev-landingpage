export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-dark text-white grid-pattern">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 hidden lg:block overflow-hidden">
                <h1 className="text-[15rem] font-black tracking-tighter text-outline opacity-50 whitespace-nowrap">CONECTA</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 uppercase tracking-widest text-xs font-semibold text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Agência Digital de Alto Nível
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Nós construímos ativos digitais que transformam dados em <span className="text-primary relative inline-block">lucro real.<svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-primary opacity-50" preserveAspectRatio="none" viewBox="0 0 100 10"><path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Especialistas em engenharia web de alta performance e design cinematográfico utilizando React, Vite, Tailwind, e Shadcn UI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full pl-2 pr-6 py-2 backdrop-blur-sm">
                            <div className="flex -space-x-3">
                                <img
                                    alt="Client 1"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy4r4mjhtfW17Wr_8oR9AstBs6KO-Hfee_B_gaIrJAneZ5Z28I3lFquX1kQh8-41d5I3GIkBwEQXb1DOFoSzg9nt2FXD_JL_bWdp1EkJ2SEb4IvE2vDPm0DM2W87p221QAWvjY6_m8t7wCNVKwYCTTv_b0apGM2kvWQRYffzS4m9f35npKP-KS1k_qdtZYBIcp2UCme_OLDdzMX3IYJxwN5IWrNABOjigRdRhpBRvpgs2g4cHSa6bGmn5Sfratn7d7swrhXU71eDRV"
                                />
                                <img
                                    alt="Client 2"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1oUjzYF4WqozvzOiVlQ37nTAUKFxOCz2_JWYGgokNh86uJiHmj32DFe8gV5Z4EJizOq_EhHh-NcrKzWSnecxb70qnUDzIVhEDtkDUeAvmhQOI0UWrZ_g9Dg57FrDkBTKKj4TcNwret87eqPzZxSZ7Ra7-H0aOj7YAFB5HKET9IjjNrUswMi1eiGyWLuGsrW5HUEufSpuATc88GRn3xyi8nQ9sIF5MyJRDXqRpX4Hv_TNYPe8ETGgF7ZiYXuhxkYG7skOXeiF3kO7M"
                                />
                                <img
                                    alt="Client 3"
                                    className="w-10 h-10 rounded-full border-2 border-[#0e1111]"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbZQTfM225evRjlxtGCTgag6ewudHdWO91gHkyG0Q5RtXhUrul2t4j8S1PtqZR_zmFP3Ohft4OnMnMFoJJh9JfG4UOSToVU9-XFx0CCVB7yv7jYJ55MzD0j3H75sVp87P1n5t5TwtP8fyL8D5JiztyEcUXhpXAPMjT3Xy547cK_7kY89mOuB1W_2pkgMDZQbQALytStR-wYEke1t5pdLRqWXYR6P4GcHXShie_r4BvYoUZp2zc3YNcMhKpyT0HCCXlJZ87hZD-RG7O"
                                />
                                <div className="w-10 h-10 rounded-full border-2 border-[#0e1111] bg-primary flex items-center justify-center text-black font-bold text-xs">
                                    +
                                </div>
                            </div>
                            <div className="text-left ml-2">
                                <div className="text-white font-bold text-sm">12k+</div>
                                <div className="text-gray-400 text-xs">Clientes Satisfeitos</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-5xl mx-auto mt-12 mb-[-150px] z-20 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent z-10 rounded-3xl"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
                    <img
                        alt="Cinematic Tech Team"
                        className="relative rounded-3xl w-full object-cover h-[400px] md:h-[600px] shadow-2xl transition-all duration-700 border border-white/10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQWj40GyKlMfPZ5fxyxtZhQFeP9YNBbxdUoDMvs0GtBC97CElhSyHQXCi2IkPvXXAXAkVu6HX2Hyd9iWagz3uJfaHmzxmTstTNUBHkqM8h8FFgLm1j3Mdeoaj3UhxQpjVfCKvyjdBTg_1lr4yy9e3uB8UAqrMFU_BnKC33NaCs2BHWxvGbIfD-9w2Z6cEkHkWy2-tsTudEIiTRoiPIOL6BFPoOXGzUOhBsCHXwD6YwToX83yB8uDw5vibrms8xbvsNfGgIpMLs4004"
                    />
                    <div className="absolute top-10 left-10 z-20 bg-background-dark/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
                        <span className="text-xs font-semibold text-white">Alta Performance</span>
                    </div>
                    <div className="absolute bottom-20 right-10 z-20 bg-background-dark/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        <span className="material-symbols-outlined text-primary text-sm">code</span>
                        <span className="text-xs font-semibold text-white">Código Limpo</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
