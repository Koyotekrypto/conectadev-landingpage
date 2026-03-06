export function Testimonials() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-sm font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase mb-3">Serviço 5 Estrelas, Sempre</p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">O que <span className="text-primary">nossos clientes</span> dizem<br />sobre nós</h2>
                        <p className="text-text-muted-light dark:text-text-muted-dark mb-10 max-w-md">
                            Não confie apenas em nossa palavra. Leia o que nossos parceiros têm a dizer sobre os ativos digitais transformadores que construímos juntos.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img
                                    alt="Client 1"
                                    className="w-12 h-12 rounded-full border-2 border-background-light dark:border-background-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGyJTDRB2PU71H-KFgAfuWRT8A1C5qaPfWKjUnaeUPlio_YRehz5uOChULeQBvMS6mgu5CreGQgBGVYqiFmF21iDLtJ9zbfMDzB2_xY1lN6NBsEyc0DTiT6SuwTv2J4cmTm92dj_moEs9coDof9i6nY-2iaUmQtFwXbQKNIpfEYLqzNLnsn_-sqZJpVG3kPzWtfqUO92W83MAekxGSjYSjR6Sb57oMMQ0ik8S0fqSL5BdYFZTKOdO7pJemjgChc08jl_lBCyyNH0du"
                                />
                                <img
                                    alt="Client 2"
                                    className="w-12 h-12 rounded-full border-2 border-background-light dark:border-background-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGXX0WbwVXnJrm5slKGonk9BL_0H4kzua5YO7siNOTCObrY9wX1EVoH-XEQL_eip0IrK9cSqSDgZEjZtudY2z9v0ZoYaeT28EodLkTRIJ6ONuuYNUqrrVrUaMXvF5NMP554mf0f1QkiF7zSRHmPisXrn4aunxRb83K-macNkubYQP3hfdMs9EOZopMygp7PxurUyrDfAeDQYNYYSYHpU_xyX3hhNV7yzt6Jfd2O1F1pwhhjMdLu46ng-mUdbDy7XxMyPY1-WbQF7T1"
                                />
                                <img
                                    alt="Client 3"
                                    className="w-12 h-12 rounded-full border-2 border-background-light dark:border-background-dark"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlPU34eq4JmSoWjRzxYid0l9cmg5ebRgYM0WsVGDfK_1UpcdmCZlESh9h3F7y8douc8LTFDkOKxX0BpcAnZWrzhSRmt0VuSErFM58UGVnV90hy_CIIzvDN2JSe6w7GYjE9w5xz6ORPZl1JhETtKtdj4AaZgJtoUj7aHhyhNmy6_2DB1wjh4q539tFFkqsRM4Cdwemj_LnlSPG3-rDredgL9TzIJ71_Y2zhwWyDZaU0H2_O0qdt1kVhg-rayk4U_WfA_qAWibIFNfhG"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-xl">12k+</div>
                                <div className="text-text-muted-light dark:text-text-muted-dark text-sm">Nossos Clientes Satisfeitos</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <div className="bg-surface-light dark:bg-surface-dark rounded-3xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-white/5 relative z-10 transform transition-transform hover:-translate-y-2">
                            <div className="absolute -top-6 -right-6 text-primary opacity-20">
                                <span className="material-symbols-outlined text-8xl">format_quote</span>
                            </div>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="flex gap-1 text-primary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <span className="text-sm text-text-muted-light dark:text-text-muted-dark">10 Mar, 2024</span>
                            </div>
                            <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed relative z-10">
                                "A equipe da ConectaDev transformou completamente nossa presença digital. A atenção aos detalhes, estética de design moderno e expertise técnica entregaram uma plataforma que aumentou significativamente nosso engajamento e taxas de conversão. Verdadeiramente uma experiência cinematográfica!"
                            </p>
                            <div className="flex items-center gap-4 relative z-10">
                                <img
                                    alt="Devon Lane"
                                    className="w-14 h-14 rounded-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDmvhH9GO6GaSJ-Zl4Kek2nh2jjEFO1qwcYTcKRpRqnaWTD5iVH2LgeQO3A54d7b0e55efPZ8cZ-BT7iGwEXG0eUGGMRpLxKb0pKA0Lkbr1WHruVKU9__yIYOY0Uo-2IuE8WbyCXPB1r_UJZLpseUzqThZlYLacK33hceBj4LjqX_gWhLlYY8Mi51zacOlaOm4tNCfqRx340nYOUoWJjCACvOvQ9_Q-PbYx9ObG9hq62ib6zDGsnJt9eaJcVvjRm3_TweknYEHqw0m"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">Devon Lane</h4>
                                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">CTO, TechFlow</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-5 right-10 flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-primary text-black shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-white transition-colors">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
