"use client";

import React, { useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export type ElectricCardProps = {
    variant?: "swirl" | "hue";
    color?: string;
    badge?: string;
    title?: string;
    description?: string;
    icon?: string;
    tags?: string[];
    id?: string;
    className?: string;
};

export const ElectricCard = ({
    variant = "swirl",
    color = "#CEF02E",
    title,
    description,
    icon,
    tags = [],
    id,
    className = "",
}: ElectricCardProps) => {
    const ids = useMemo(() => {
        const key = Math.random().toString(36).slice(2, 8);
        return {
            swirl: `swirl-${key}`,
            hue: `hue-${key}`,
        };
    }, []);

    const filterURL = variant === "hue" ? `url(#${ids.hue})` : `url(#${ids.swirl})`;

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className={cn("relative group", className)}>
            {/* SVG Filters precisely as in the reference prompt */}
            <svg className="absolute w-0 h-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                    <filter id={ids.swirl} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                            <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                            <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />
                        <feOffset in="noise3" dx="0" dy="0" result="offsetNoise3">
                            <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />
                        <feOffset in="noise4" dx="0" dy="0" result="offsetNoise4">
                            <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                        </feOffset>
                        <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                        <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                        <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                        <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" />
                    </filter>
                    <filter id={ids.hue} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="7" />
                        <feColorMatrix type="hueRotate" result="pt1">
                            <animate attributeName="values" values="0;360;" dur=".6s" repeatCount="indefinite" calcMode="paced" />
                        </feColorMatrix>
                        <feComposite />
                        <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="7" seed="5" />
                        <feColorMatrix type="hueRotate" result="pt2">
                            <animate attributeName="values" values="0; 333; 199; 286; 64; 168; 256; 157; 360;" dur="5s" repeatCount="indefinite" calcMode="paced" />
                        </feColorMatrix>
                        <feBlend in="pt1" in2="pt2" mode="normal" result="combinedNoise" />
                        <feDisplacementMap in="SourceGraphic" scale="30" xChannelSelector="R" yChannelSelector="B" />
                    </filter>
                </defs>
            </svg>

            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                    "--electric-color": color,
                    "--f": filterURL,
                } as any}
                className="relative p-[2px] rounded-2xl bg-gradient-to-br from-[#CEF02E]/10 to-transparent transition-all duration-200 h-full"
            >
                <div className="relative rounded-2xl bg-[#0e1111] h-full flex flex-col group/inner overflow-visible">

                    {/* Layout elements precisely matching the prompt's .border-outer and .main-card hierarchy */}
                    <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* The Border Outer element from prompt */}
                        <div className="absolute inset-0 border-2 border-[#CEF02E]/50 rounded-2xl p-[2px]">
                            {/* The element that gets the SVG filter, absolutely positioned to "shake" the border */}
                            <div
                                className="w-full h-full border-2 border-[#CEF02E] rounded-2xl"
                                style={{ filter: "var(--f)", mixBlendMode: "color-dodge" }}
                            />
                        </div>

                        {/* Glow Layers */}
                        <div className="absolute inset-0 border-2 border-[#CEF02E]/60 blur-[4px] rounded-2xl" />
                        <div className="absolute inset-0 bg-[#CEF02E]/5 blur-[32px] rounded-2xl -z-10" />
                    </div>

                    {/* Actual Card Content */}
                    <div className="relative z-10 p-8 flex flex-col h-full bg-[#0e1111]/80 rounded-2xl backdrop-blur-sm border border-white/5 group-hover:border-[#CEF02E]/30 transition-colors">
                        <div className="flex justify-between items-start mb-6">
                            <div
                                style={{ transform: "translateZ(30px)" }}
                                className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-[#CEF02E]/50 transition-all"
                            >
                                <span className="material-symbols-outlined text-2xl text-white group-hover:text-[#CEF02E] transition-colors">{icon}</span>
                            </div>
                            <div
                                style={{ transform: "translateZ(10px)" }}
                                className="text-6xl font-black text-white/5 group-hover:text-[#CEF02E]/10 transition-colors select-none"
                            >
                                {id}
                            </div>
                        </div>

                        <h3
                            style={{ transform: "translateZ(40px)" }}
                            className="text-xl font-bold mb-4 text-white group-hover:text-[#CEF02E] transition-colors"
                        >
                            {title}
                        </h3>
                        <p
                            style={{ transform: "translateZ(20px)" }}
                            className="text-white/60 text-sm leading-relaxed mb-6"
                        >
                            {description}
                        </p>

                        <div
                            style={{ transform: "translateZ(15px)" }}
                            className="flex flex-wrap gap-2 mt-auto"
                        >
                            {tags.map((tag) => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold border border-white/10 rounded-full px-3 py-1 text-white/50 group-hover:border-[#CEF02E]/30 group-hover:text-[#CEF02E]/80 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <a
                                style={{ transform: "translateZ(50px)" }}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#CEF02E] group-hover:text-black group-hover:border-transparent transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
