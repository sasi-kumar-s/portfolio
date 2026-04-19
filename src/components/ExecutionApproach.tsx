"use client";
import React from "react";
import { motion } from "framer-motion";
import { PerspectiveCard } from "./PerspectiveCard";

const capabilities = [
    "Build responsive frontend MVPs using React, Next.js, and Tailwind",
    "Translate UI ideas into structured, usable interfaces",
    "Design flows around usability, not just visual polish",
    "Prototype product ideas quickly and refine based on clarity",
    "Think through both the interaction layer and the user outcome",
];

export const ExecutionApproach = () => {
    return (
        <section className="py-12 md:py-14 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/[0.03]">
            <div className="max-w-7xl mx-auto">
                <PerspectiveCard
                    intensity={5}
                    glareOpacity={0.02}
                    className="bg-transparent"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start p-8 md:p-12 bg-[#0C0C0C] border border-white/[0.03] rounded-[32px]"
                    >
                        {/* Left: heading */}
                        <div className="lg:w-1/3 shrink-0">
                            <span 
                                className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block"
                            >
                                What I Actually Do
                            </span>
                            <h2 
                                className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-[1.15]"
                            >
                                What I Actually Do.
                            </h2>
                            <p 
                                className="text-white/40 text-[15px] font-light leading-relaxed mt-4 max-w-sm"
                            >
                                I work across frontend execution, product thinking, and interface design — turning rough ideas into usable digital products.
                            </p>
                        </div>

                        {/* Right: capability list */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                {capabilities.map((cap, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 group px-4 py-3 rounded-xl border border-white/[0.05] bg-[#0C0C0C] hover:bg-[#111] hover:border-white/20 transition-all duration-100 hover:scale-[1.02] cursor-default shadow-sm hover:shadow-md"
                                    >
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-sky-400/80 transition-colors duration-100 shrink-0 shadow-[0_0_0_rgba(56,189,248,0)] group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                                        <span className="text-white/50 text-[14px] font-light leading-relaxed group-hover:text-white/90 transition-colors duration-100">
                                            {cap}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </PerspectiveCard>
            </div>
        </section>
    );
};
