"use client";
import React from "react";
import { motion } from "framer-motion";

const signals = [
    "Building real products",
    "Focused on UI + product workflows",
    "Developing LayerSplit & PixelMind",
    "Open to frontend roles & UI collaborations"
];

// Duplicate for seamless infinite marquee loop
const marqueeItems = [...signals, ...signals, ...signals];

export const TrustStrip = () => {
    return (
        <section className="relative z-20 border-y border-white/[0.05] bg-[#080808] py-5 overflow-hidden flex items-center">
            {/* Content Masking Gradients */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            
            <div 
                className="flex items-center gap-12 whitespace-nowrap min-w-max animate-marquee"
            >
                {marqueeItems.map((signal, idx) => (
                    <div 
                        key={idx}
                        className="flex items-center gap-12 text-white/50 text-[13px] md:text-sm font-medium tracking-widest uppercase shrink-0"
                    >
                        <span>{signal}</span>
                        {/* Premium separator */}
                        <div className="w-1.5 h-1.5 rotate-45 bg-white/10" />
                    </div>
                ))}
            </div>
        </section>
    );
};
