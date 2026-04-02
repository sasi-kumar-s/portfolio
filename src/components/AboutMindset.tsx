"use client";
import React from "react";
import { motion } from "framer-motion";

export const AboutMindset = () => {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 w-full"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Minimal Atmospheric Detail */}
                    <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-sky-300/30 to-transparent mx-auto mb-4" />
                    
                    <h2 
                        className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] pb-2"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        I build <span className="text-sky-200/90 italic">products</span>, <br className="hidden md:block" /><span className="text-white/40">not just screens.</span>
                    </h2>
                    
                    <p 
                        className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto mt-5 leading-relaxed"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        I care about structure, usability, and how an interface actually works once someone starts using it. My focus is not just how something looks — but how clearly and effectively it performs.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {["Structural Clarity", "Frontend Execution", "Product Thinking", "Usable Interfaces"].map((kw, idx) => (
                            <span key={idx} className="text-white/35 text-[10px] uppercase tracking-[0.15em] font-medium px-4 py-2 border border-white/[0.06] rounded-[4px] bg-[#111]">
                                {kw}
                            </span>
                        ))}
                    </div>

                    <div className="w-[1px] h-8 bg-gradient-to-t from-transparent via-white/10 to-transparent mx-auto mt-8" />
                </motion.div>
            </div>
        </section>
    );
};
