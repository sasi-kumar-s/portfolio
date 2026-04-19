"use client";
import React from "react";
import { motion } from "framer-motion";

export const AboutMindset = () => {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.01] blur-[40px] rounded-full pointer-events-none" />

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
                    
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-[30px] h-[1px] bg-[#333]" />
                        <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white/30">Philosophy</span>
                        <div className="w-[30px] h-[1px] bg-[#333]" />
                    </div>
                    
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
                        I care about <span className="text-[#888] font-medium">structure, usability,</span> and how an interface actually works once someone starts using it. My focus is not just how something looks — but how <span className="text-[#888] font-medium">clearly and effectively it performs.</span>
                    </p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        {[
                            { text: "Structural Clarity", className: "border-[#1a3a50]/60 text-[#378ADD]/60 bg-[#0a1a26]/50 hover:border-[#1a3a50] hover:text-[#378ADD] hover:bg-[#0a1a26] hover:shadow-[0_0_12px_rgba(55,138,221,0.15)]" },
                            { text: "Frontend Execution", className: "border-[#1D9E75]/20 text-[#1D9E75]/50 bg-[#0a2618]/50 hover:border-[#1D9E75]/40 hover:text-[#1D9E75] hover:bg-[#0a2618] hover:shadow-[0_0_12px_rgba(29,158,117,0.15)]" },
                            { text: "Product Thinking", className: "border-[#EF9F27]/20 text-[#EF9F27]/50 bg-[#1a1508]/50 hover:border-[#EF9F27]/40 hover:text-[#EF9F27] hover:bg-[#1a1508] hover:shadow-[0_0_12px_rgba(239,159,39,0.15)]" },
                            { text: "Usable Interfaces", className: "border-[#7F77DD]/20 text-[#7F77DD]/50 bg-[#12102a]/50 hover:border-[#7F77DD]/40 hover:text-[#7F77DD] hover:bg-[#12102a] hover:shadow-[0_0_12px_rgba(127,119,221,0.15)]" }
                        ].map((kw, idx) => (
                            <span key={idx} className={`text-[12px] uppercase tracking-[0.15em] font-medium px-4 py-2 border rounded-[4px] transition-all duration-300 cursor-default ${kw.className}`}>
                                {kw.text}
                            </span>
                        ))}
                    </div>

                    <div className="w-[1px] h-8 bg-gradient-to-t from-transparent via-white/10 to-transparent mx-auto mt-8" />
                </motion.div>
            </div>
        </section>
    );
};
