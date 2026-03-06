export function Stats() {
    return (
        <section className="py-20 bg-[#0a0c0c] border-b border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="text-center px-4 pt-6 md:pt-0">
                        <h3 className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter">120<span className="text-primary">+</span></h3>
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Projetos de Sucesso</p>
                    </div>
                    <div className="text-center px-4 pt-12 md:pt-0">
                        <h3 className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter">12k<span className="text-primary">+</span></h3>
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Clientes Satisfeitos</p>
                    </div>
                    <div className="text-center px-4 pt-12 md:pt-0">
                        <h3 className="text-5xl lg:text-7xl font-black text-white mb-2 tracking-tighter">5<span className="text-primary">+</span></h3>
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">Anos de Excelência</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
