import { cn } from "@/lib/utils";
import React, { useState, useRef } from "react";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const itemRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!itemRef.current) return;
        const rect = itemRef.current.getBoundingClientRect();
        // Calcula a posição do mouse relativa ao centro do item para criar o efeito parallax/iterativo
        const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
        setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: 0, y: 0 });
    };

    // The base container for the popping images
    const container = "absolute right-0 md:right-32 top-1/2 -translate-y-1/2 z-40 h-24 w-20 sm:h-40 sm:w-32 pointer-events-none";

    // The effect classes adapted for our Obsidian Elite and Primary Orange theme
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover/item:shadow-[0_0_40px_rgba(206,240,46,0.3)] scale-0 group-hover/item:scale-100 opacity-0 group-hover/item:opacity-100 w-full h-full overflow-hidden transition-all rounded-lg border border-primary/20";

    return (
        <div
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group/item relative h-fit w-full overflow-visible py-8 md:py-10 border-b border-white/5 last:border-b-0 cursor-crosshair"
        >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-700 transition-all duration-500 group-hover/item:text-primary group-hover/item:-translate-y-2 group-hover/item:drop-shadow-[0_0_20px_rgba(206,240,46,0.4)]">
                {text}
            </h1>

            {/* Imagem 2 (Por trás) */}
            <div
                className={container}
                style={{ transform: `translate(${mousePos.x * 0.5}px, calc(-50% + ${mousePos.y * 0.5}px))` }}
            >
                <div className={effect}>
                    <img
                        alt={images[1].alt}
                        src={images[1].src}
                        className="h-full w-full object-cover grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 ease-out"
                    />
                </div>
            </div>

            {/* Imagem 1 (Frente, rotacionada e movida) */}
            <div
                className={cn(
                    container,
                    "rotate-0 transition-transform delay-150 duration-500 group-hover/item:translate-x-8 group-hover/item:translate-y-8 group-hover/item:rotate-12",
                )}
                style={{ transform: `translate(${mousePos.x}px, calc(-50% + ${mousePos.y}px)) rotate(12deg)` }}
            >
                <div className={cn(effect, "duration-200")}>
                    <img
                        alt={images[0].alt}
                        src={images[0].src}
                        className="h-full w-full object-cover grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 ease-out"
                    />
                </div>
            </div>
        </div>
    );
}

export function RevealImageList() {
    const items: ShowImageListItemProps[] = [
        {
            text: "Arquitetura Cloud",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80",
                    alt: "Cloud Architecture",
                },
                {
                    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80",
                    alt: "Data Centers",
                },
            ],
        },
        {
            text: "I.A. e Dados",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80",
                    alt: "Artificial Intelligence",
                },
                {
                    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=80",
                    alt: "Data Matrix",
                },
            ],
        },
        {
            text: "SaaS Premium",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80",
                    alt: "SaaS Dashboard",
                },
                {
                    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&auto=format&fit=crop&q=80",
                    alt: "Code Data",
                },
            ],
        },
        {
            text: "Automações",
            images: [
                {
                    src: "https://images.unsplash.com/photo-1518932945647-7a3c96943e28?w=400&auto=format&fit=crop&q=80",
                    alt: "Automated Systems",
                },
                {
                    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80",
                    alt: "Data Operations",
                },
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-1 rounded-3xl bg-background-dark/50 border border-white/5 md:px-16 py-10 relative overflow-hidden group/card">
            {/* Subtle glow effect for the entire wrapper container avoiding nested group conflicts */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary/80 mb-6 relative z-10 px-4 md:px-0">Áreas de Especialidade</h3>

            <div className="flex flex-col relative z-10 w-full overflow-hidden px-4 md:px-0">
                {items.map((item, index) => (
                    <RevealImageListItem key={index} text={item.text} images={item.images} />
                ))}
            </div>
        </div>
    );
}
