import { LeadFunnel } from './LeadFunnel';

export function Contact() {
    return (
        <section className="py-32 bg-background-dark grid-pattern relative overflow-hidden border-t border-white/5" id="contact">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                <h2 className="text-[12rem] lg:text-[18rem] font-black tracking-tighter text-outline opacity-20 whitespace-nowrap">ESTRATÉGIA</h2>
            </div>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold tracking-widest text-sm uppercase mb-4 animate-pulse">Descubra Seu Potencial</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Em menos de 60 segundos,<br /><span className="text-primary font-serif italic font-medium">desenharemos sua estratégia de elite.</span></h2>
                </div>

                {/* Integration of the new Dynamic Funnel */}
                <div className="relative z-20">
                    <LeadFunnel />
                </div>
            </div>
        </section>
    );
}
