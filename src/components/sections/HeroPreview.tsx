import { Suspense, lazy } from "react";

const CompareLazy = lazy(() => import("@/components/ui/compare").then((m) => ({ default: m.Compare })));

/** Imagens do efeito antes/depois: coloque `antes` e `depois` (com esta extensão) em public/assets/compare/ */
const COMPARE_IMAGE_EXT = ".png";
const COMPARE_IMAGES = {
  antes: `/assets/compare/antes${COMPARE_IMAGE_EXT}`,
  depois: `/assets/compare/depois${COMPARE_IMAGE_EXT}`,
} as const;

/**
 * Seção abaixo da hero Principal: bloco com efeito Compare (antes/depois)
 * e card escuro com borda luminosa (primary), alinhado ao design ConectaDev.
 */
export function HeroPreview() {
  return (
    <section
      className="relative w-full bg-background-dark px-6 pb-20 pt-0 md:pb-24 overflow-hidden"
      aria-labelledby="hero-preview-heading"
    >
      <div className="mx-auto w-full max-w-5xl relative">
        {/* Glow decorativo – camada principal (maior e mais visível) */}
        <div
          className="absolute left-1/2 top-[-30%] z-0 w-[110%] max-w-none pointer-events-none -translate-x-1/2"
          aria-hidden
        >
          <div
            className="h-64 md:h-80 w-full rounded-full blur-[80px] md:blur-[100px] opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(206, 240, 46, 0.35), rgba(206, 240, 46, 0.08) 50%, transparent 75%)",
            }}
          />
        </div>
        {/* Glow secundário – halo mais suave */}
        <div
          className="absolute left-1/2 top-[-15%] z-0 w-[95%] pointer-events-none -translate-x-1/2"
          aria-hidden
        >
          <div
            className="h-40 w-full rounded-full blur-[60px] opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(206, 240, 46, 0.2), transparent 65%)",
            }}
          />
        </div>

        {/* Card escuro com borda luminosa + Compare (antes/depois) */}
        <div className="relative z-10 group">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/50 via-primary/25 to-primary/5 opacity-70 blur-md group-hover:opacity-90 transition-all duration-500" />
          <div
            className="relative overflow-hidden rounded-2xl border border-primary/40 bg-background-dark shadow-2xl"
            style={{
              boxShadow:
                "0 0 0 1px rgba(206, 240, 46, 0.1), 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px -10px rgba(206, 240, 46, 0.15)",
            }}
          >
            <div className="relative min-h-[320px] md:min-h-[420px] flex items-center justify-center p-2 md:p-4">
              <Suspense
                fallback={
                  <div className="h-[300px] w-full max-w-4xl md:h-[380px] rounded-xl bg-white/5 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  </div>
                }
              >
                <CompareLazy
                  firstImage={COMPARE_IMAGES.antes}
                  secondImage={COMPARE_IMAGES.depois}
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[300px] w-full max-w-4xl md:h-[380px] rounded-xl"
                  slideMode="hover"
                  showHandlebar={true}
                />
              </Suspense>
            </div>
            {/* Rodapé da imagem – texto abaixo do bloco antes/depois */}
            <footer
              className="border-t border-white/10 px-4 py-3 md:px-6 md:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-black/20"
              aria-labelledby="hero-preview-heading"
            >
              <div id="hero-preview-heading" className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-white md:text-base">
                  ConectaDev
                </span>
                <span className="text-xs text-gray-400">
                  Sua empresa na web com design e tecnologia de ponta
                </span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
