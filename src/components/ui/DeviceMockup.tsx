import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeviceMockupProps {
    imageUrl?: string;
    images?: string[];
    videoUrl?: string;
    altText: string;
    themeColor?: string;
    interval?: number;
}

export const DeviceMockup = ({
    imageUrl,
    images = [],
    videoUrl,
    altText,
    themeColor = '#cefa2e',
    interval = 1500
}: DeviceMockupProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = right, -1 = left

    // REGRA 1: Garante que o array nunca seja nulo ou vazio para evitar tela preta
    const allImages = Array.isArray(images) && images.length > 0
        ? images
        : (imageUrl ? [imageUrl] : []);

    useEffect(() => {
        // REGRA 2: Só inicia o timer se houver mais de uma imagem e não for vídeo
        if (allImages.length <= 1 || videoUrl) return;

        const timer = setInterval(() => {
            setDirection(1); // Sempre desliza para a direita no auto-play
            setCurrentIndex((prev) => (prev + 1) % allImages.length);
        }, interval);

        return () => clearInterval(timer);
    }, [allImages.length, interval, videoUrl]);

    // REGRA 3: Se o currentIndex ficar fora do range (ex: após mudança dinâmica), reseta para 0
    useEffect(() => {
        if (currentIndex >= allImages.length) {
            setCurrentIndex(0);
        }
    }, [allImages.length, currentIndex]);

    // Variantes para a transição lateral
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.05
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div className="relative w-full max-w-[55rem] mx-auto flex flex-col items-center justify-center p-4 md:p-8 group perspective-[2000px]">

            {/* Ambient Background Glow */}
            <div
                className="absolute inset-x-0 mx-auto w-[80%] bottom-10 top-10 opacity-0 blur-[100px] rounded-[50%] transition-opacity duration-1000 group-hover:opacity-40 pointer-events-none"
                style={{ backgroundColor: themeColor, zIndex: 0 }}
            />

            {/* 3D Wrapper */}
            <motion.div
                initial={{ rotateX: 5, rotateY: -2, y: 15 }}
                whileHover={{ rotateX: 0, rotateY: 0, y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative w-full flex flex-col items-center z-10"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* ---------- MACBOOK LID (Bezels & Glass) ---------- */}
                {/* Outer Aluminum Edge */}
                <div className="relative mx-auto rounded-t-[1.5rem] md:rounded-t-[2.25rem] p-[3px] md:p-[6px] pb-0! bg-gradient-to-b from-[#2a2a2c] to-[#111112] shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)] w-[90%] max-w-[340px] md:max-w-[600px] lg:max-w-[750px] aspect-[16/10.5] z-20 flex flex-col">

                    {/* Inner Black Glass Bezel */}
                    <div className="relative flex-1 bg-black rounded-t-[1.25rem] md:rounded-t-[1.8rem] overflow-hidden flex flex-col items-center ring-1 ring-white/5 shadow-[inset_0_0_10px_rgba(0,0,0,1)]">

                        {/* Camera Notch Area */}
                        <div className="absolute top-0 inset-x-0 mx-auto w-16 h-[10px] md:w-28 md:h-[16px] bg-black rounded-b-[6px] md:rounded-b-[10px] flex items-center justify-center z-30">
                            {/* Camera Lens */}
                            <div className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] rounded-full bg-[#0a0a0a] shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)] flex items-center justify-center ring-1 ring-white/10">
                                <div className="w-[1.5px] h-[1.5px] md:w-[2px] md:h-[2px] rounded-full bg-[#1c2e4a] opacity-80 shadow-[0_0_2px_#3ab4f2]" />
                            </div>
                            {/* Sensor indicator (Subtle green dot on hover) */}
                            <div className="absolute right-2 md:right-4 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#2bd447] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shadow-[0_0_5px_#2bd447]" />
                        </div>

                        {/* Screen Content Viewport */}
                        <div className="relative w-[98%] h-[98%] mt-auto mb-[1%] mx-auto bg-[#050505] rounded-[2px] md:rounded-[4px] overflow-hidden">
                            {videoUrl ? (
                                <video
                                    src={videoUrl}
                                    title={altText}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 w-full h-full">
                                    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                                        <motion.div
                                            key={currentIndex}
                                            custom={direction}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.5 },
                                                scale: { duration: 0.8 }
                                            }}
                                            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center transition-[background-position] duration-[15s] ease-in-out group-hover:bg-bottom"
                                            style={{
                                                backgroundImage: `url(${allImages[currentIndex]})`,
                                                // REGRA 4: Garante que o fundo seja preto caso a imagem falhe ao carregar
                                                backgroundColor: '#000'
                                            }}
                                            title={altText}
                                        />
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Glass Reflection overlay (Diagonal Gloss) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none transition-opacity duration-700 group-hover:opacity-10 z-20" />
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 opacity-20 pointer-events-none z-20" />
                    </div>
                    {/* "MacBook Pro" Logo text simulation (very subtle at bottom bezel) */}
                    <div className="h-[4%] md:h-[5%] w-full flex items-center justify-center bg-black rounded-b-sm z-30">
                        <div className="text-[5px] md:text-[8px] text-white/20 tracking-widest font-sans uppercase font-medium">MacBook Pro</div>
                    </div>
                </div>

                {/* ---------- MACBOOK BASE (Aluminum Chassis) ---------- */}
                {/* Top deck connection / Hinge */}
                <div className="relative mx-auto w-[90%] max-w-[340px] md:max-w-[600px] lg:max-w-[750px] h-[3px] md:h-[5px] bg-[#000] z-20" />

                {/* Main Base Body */}
                <div className="relative mx-auto w-[100%] max-w-[380px] md:max-w-[660px] lg:max-w-[820px] h-[12px] md:h-[18px] lg:h-[22px] bg-gradient-to-b from-[#7a7b80] via-[#4d4e52] to-[#1c1d1f] dark:from-[#47484d] dark:via-[#2b2c30] dark:to-[#0f1013] rounded-b-[1rem] md:rounded-b-[2rem] rounded-t-[3px] md:rounded-t-[4px] shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] border-t border-[#bcbdc2] dark:border-[#5c5d62] flex justify-center items-start z-10">

                    {/* Base Lip / Deck Indentation (Thumb notch for opening) */}
                    <div className="w-[12%] h-[3px] md:h-[5px] bg-gradient-to-b from-[#2a2b2e] to-[#1a1b1d] rounded-b-[4px] md:rounded-b-[8px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)] border border-t-0 border-[#555] dark:border-[#333]" />

                    {/* Side curves rendering (simulating the aluminum curve) */}
                    <div className="absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r from-white/10 to-transparent rounded-bl-[1rem] md:rounded-bl-[2rem]" />
                    <div className="absolute inset-y-0 right-0 w-[4%] bg-gradient-to-l from-white/10 to-transparent rounded-br-[1rem] md:rounded-br-[2rem]" />
                </div>

                {/* Floating Shadow for added depth under the laptop */}
                <div className="w-[80%] max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-[10px] md:h-[20px] bg-black/50 blur-[15px] md:blur-[20px] rounded-[100%] mt-2 md:mt-4 z-0" />
            </motion.div>
        </div>
    );
};
