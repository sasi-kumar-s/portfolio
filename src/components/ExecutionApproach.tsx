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
                        className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start p-8 md:p-12 bg-[#0C0C0C]/50 border border-white/[0.03] rounded-[32px] backdrop-blur-sm"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Left: heading */}
                        <div className="lg:w-1/3 shrink-0" style={{ transformStyle: "preserve-3d" }}>
                            <span 
                                className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block"
                                style={{ transform: "translateZ(10px)" }}
                            >
                                What I Actually Do
                            </span>
                            <h2 
                                className="text-3xl md:text-4xl font-semibold tracking-tighter text-white leading-[1.15]"
                                style={{ transform: "translateZ(30px)" }}
                            >
                                What I Actually Do.
                            </h2>
                            <p 
                                className="text-white/40 text-[15px] font-light leading-relaxed mt-4 max-w-sm"
                                style={{ transform: "translateZ(20px)" }}
                            >
                                I work across frontend execution, product thinking, and interface design — turning rough ideas into usable digital products.
                            </p>
                        </div>

                        {/* Right: capability list */}
                        <div className="lg:w-2/3" style={{ transformStyle: "preserve-3d" }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4" style={{ transformStyle: "preserve-3d" }}>
                                {capabilities.map((cap, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 5, translateZ: 10 }}
                                        className="flex items-start gap-3 group"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-sky-400/60 transition-colors duration-500 shrink-0" />
                                        <span className="text-white/55 text-[15px] font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                                            {cap}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </PerspectiveCard>
            </div>
        </section>
    );
};
