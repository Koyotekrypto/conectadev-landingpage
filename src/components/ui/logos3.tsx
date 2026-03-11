"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

export interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

export interface Logos3Props {
  label?: string
  heading?: string
  highlight?: string
  subtitle?: string
  logos?: Logo[]
  className?: string
}

/** Cores oficiais das marcas (hex sem #) para cdn.simpleicons.org */
const DEFAULT_LOGOS: Logo[] = [
  { id: "google", description: "Google", image: "https://cdn.simpleicons.org/google/4285F4", className: "h-7 w-auto" },
  { id: "meta", description: "Meta", image: "https://cdn.simpleicons.org/meta/0668E1", className: "h-7 w-auto" },
  { id: "firebase", description: "Firebase", image: "https://cdn.simpleicons.org/firebase/FFCA28", className: "h-7 w-auto" },
  { id: "firestore", description: "Firestore", image: "https://cdn.simpleicons.org/firebase/F57C00", className: "h-7 w-auto" },
  { id: "anthropic", description: "Anthropic", image: "https://cdn.simpleicons.org/anthropic/D97757", className: "h-7 w-auto" },
  { id: "react", description: "React", image: "https://cdn.simpleicons.org/react/61DAFB", className: "h-8 w-auto" },
  { id: "typescript", description: "TypeScript", image: "https://cdn.simpleicons.org/typescript/3178C6", className: "h-7 w-auto" },
  { id: "vite", description: "Vite", image: "https://cdn.simpleicons.org/vite/646CFF", className: "h-7 w-auto" },
  { id: "tailwindcss", description: "Tailwind CSS", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4", className: "h-6 w-auto" },
  { id: "figma", description: "Figma", image: "https://cdn.simpleicons.org/figma/F24E1E", className: "h-7 w-auto" },
  { id: "sanity", description: "Sanity", image: "https://cdn.simpleicons.org/sanity/F03E2F", className: "h-7 w-auto" },
]

const Logos3 = ({
  label = "STACK",
  heading = "Tecnologias e plataformas que utilizamos",
  highlight = "utilizamos",
  subtitle = "De Google e Meta a Firebase e Anthropic — stack moderna para performance, escalabilidade e integrações que importam.",
  logos = DEFAULT_LOGOS,
  className,
}: Logos3Props) => {
  const headingParts = heading.split(highlight)
  const hasHighlight = headingParts.length === 2 && highlight.length > 0

  return (
    <section className={cn("py-16 md:py-24 lg:py-32", className)}>
      <div className="container flex flex-col items-center text-center px-4">
        {label && (
          <span className="text-sm font-medium tracking-wider text-zinc-400 uppercase mb-2">
            {label}
          </span>
        )}
        <h2 className="text-2xl font-bold text-pretty lg:text-4xl xl:text-5xl text-white mb-4 max-w-4xl">
          {hasHighlight ? (
            <>
              {headingParts[0]}
              <span className="text-primary italic font-drama lowercase">{highlight}</span>
              {headingParts[1]}
            </>
          ) : (
            heading
          )}
        </h2>
        {subtitle && (
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mb-2">
            {subtitle}
          </p>
        )}
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-6 md:mx-10 flex shrink-0 flex-col items-center justify-center gap-2">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className ?? "h-7 w-auto opacity-90"}
                    />
                    <span className="text-xs text-zinc-500">{logo.description}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}

export { Logos3 }
