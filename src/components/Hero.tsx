"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 lg:px-16 overflow-hidden bg-[#0a0a0a]"
        >
            <div className="w-full max-w-7xl mx-auto z-10">
                <Card className="w-full min-h-[600px] bg-black/[0.96] border-none shadow-2xl relative overflow-hidden rounded-3xl">
                    <Spotlight
                        size={600}
                        className="opacity-50"
                    />

                    <div className="flex flex-col lg:flex-row h-full min-h-[600px]">
                        {/* Left content */}
                        <div className="flex-1 p-8 md:p-14 relative z-10 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="flex items-center gap-[6px] mb-4">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#1D9E75]" />
                                    <span className="text-[12px] uppercase tracking-[0.12em] text-[#1D9E75] font-medium">Available for frontend roles</span>
                                </div>
                                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                                    Sasi Kumar<span className="text-[#222]">.</span>
                                </h1>
                                <h2 className="text-xl md:text-2xl font-light text-neutral-300 tracking-tight">
                                    Frontend Developer / Product Builder
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-5 max-w-xl mt-8"
                            >
                                <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
                                    I ship interfaces that work — not just look good. Currently building <span className="text-sky-200/90 font-medium tracking-wide">LayerSplit</span> (AI image utility) and <span className="text-sky-200/90 font-medium tracking-wide">PixelMind</span> (design-to-code tool) from scratch, handling everything from UI architecture to product decisions.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="flex items-center gap-6 pt-6"
                            >
                                {[
                                    { num: "2", label: "Products live" },
                                    { num: "3+", label: "Years React" },
                                    { num: "100%", label: "Self-directed" }
                                ].map((stat, i) => (
                                    <React.Fragment key={i}>
                                        {i > 0 && <div className="w-[1px] h-[28px] bg-white/10" />}
                                        <div className="flex flex-col">
                                            <span className="text-[24px] font-[800] text-white leading-tight">{stat.num}</span>
                                            <span className="text-[13px] text-[#666]">{stat.label}</span>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-wrap items-center gap-4 pt-6 text-sm"
                            >
                                <a
                                    href="#projects"
                                    className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    <span>Explore Work</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-8 py-3.5 rounded-full border border-[#222] text-[#888] text-sm font-medium hover:border-[#333] hover:text-[#ccc] transition-all duration-300"
                                >
                                    View Resume
                                </a>
                            </motion.div>
                        </div>

                        {/* Right content - 3D Scene */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="hidden md:block flex-1 relative min-h-[400px] lg:min-h-full"
                        >
                            <SplineScene
                                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>
                </Card>
            </div>
        </section>
    );
};
