"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Database, Layers } from "lucide-react";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mouse interactive values for the right-side UI composition
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex items-center justify-center pt-16 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0a0a0a]"
        >
            {/* Soft Ambient Hero Spotlights - Teal & Ice Blue constraints */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-teal-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-[100%] blur-[120px] pointer-events-none" />

            <motion.div
                style={{ y: yMove, opacity: opacityFade }}
                className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10"
            >
                {/* Left Side: Copy & CTAs */}
                <div className="flex flex-col items-start text-left space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.1]">
                            Sasi Kumar.
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-white/70 tracking-tight">
                            Frontend Developer / Product Builder
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-5 max-w-xl"
                    >
                        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed">
                            Designing and building polished interfaces, structured MVPs, and workflow-driven products that prioritize <span className="text-sky-200/90 font-medium tracking-wide">clarity, usability, and execution</span>.
                        </p>
                        <div className="pl-5 border-l-2 border-sky-300/20 py-1">
                            <p className="text-white/40 text-sm font-medium tracking-wide leading-relaxed">
                                Currently building LayerSplit & PixelMind — exploring product workflows, interface systems, and real-world frontend execution.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap items-center gap-4 pt-4 text-sm"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ 
                                scale: 1.02, 
                                rotateX: 5, 
                                rotateY: -5,
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold tracking-wide hover:bg-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <span style={{ transform: "translateZ(10px)" }}>Explore Work</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" style={{ transform: "translateZ(10px)" }} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right Side: Interactive System Composition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden lg:flex relative w-full aspect-square lg:aspect-[4/3] items-center justify-center perspective-[1200px]"
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full h-full max-w-[500px] max-h-[500px]"
                    >
                        {/* Main Canvas Base */}
                        <div className="absolute inset-0 bg-[#0C0C0C] border border-white/[0.04] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden transform-gpu">
                            <div className="absolute top-0 left-0 w-full h-12 bg-white/[0.01] border-b border-white/[0.02] flex items-center px-5 gap-2.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            </div>
                            {/* Editor Lines Mock */}
                            <div className="pt-20 px-8 space-y-4 opacity-20">
                                <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                                <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                                <div className="w-5/6 h-2 bg-white/20 rounded-full" />
                                <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                            </div>
                        </div>

                        {/* Floating Layer 0: Blur Backdrop shadow for depth */}
                        <div className="absolute inset-0 bg-black/60 blur-[40px] transform-gpu translate-z-[-30px] rounded-full scale-90" />

                        {/* Floating Layer 1: Extraction Focus Artifact */}
                        <motion.div
                            style={{ translateZ: "60px" }}
                            className="absolute top-1/4 -left-8 w-64 bg-[#141414]/90 border border-white/[0.04] rounded-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                        >
                            <div className="relative">
                                {/* Subtle inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-lg pointer-events-none" />
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
                                        <Layers className="w-4 h-4 text-sky-300/80" />
                                    </div>
                                    <div>
                                        <div className="text-white/80 text-sm font-medium tracking-wide">Foreground Mask</div>
                                        <div className="text-emerald-400/80 text-[9px] tracking-[0.2em] font-bold mt-1 flex items-center gap-1.5 uppercase">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                                            Active Isolation
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 relative z-10 pl-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-3 bg-sky-500/30 rounded-full" />
                                        <div className="w-full h-1 bg-white/[0.02] rounded-full overflow-hidden">
                                            <div className="w-[92%] h-full bg-sky-400/40 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 pl-4">
                                        <div className="w-1 h-3 bg-white/10 rounded-full" />
                                        <div className="w-4/5 h-1 bg-white/[0.04] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Layer 2: Data Pipeline Snippet */}
                        <motion.div
                            style={{ translateZ: "100px" }}
                            className="absolute bottom-1/4 -right-8 w-72 bg-[#0C0C0C]/90 border border-white/[0.05] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                                <Database className="w-4 h-4 text-white/50" />
                                <span className="text-white/50 text-[11px] font-mono tracking-wider">structure.yaml</span>
                                <span className="ml-auto px-2 py-0.5 rounded text-[8px] font-bold tracking-[0.2em] uppercase bg-white/5 text-white/40">Parsed</span>
                            </div>
                            <div className="font-mono text-[11px] space-y-2.5 leading-relaxed tracking-wide">
                                <div className="text-white/70">nodes:</div>
                                <div className="pl-4 text-white/40">- type: <span className="text-teal-200/60">'layout_container'</span></div>
                                <div className="pl-4 text-white/40">- type: <span className="text-teal-200/60">'nested_grid'</span></div>
                                <div className="pl-4 text-white/40">- flow: <span className="text-sky-200/60">'interpreted_dom'</span></div>
                            </div>
                        </motion.div>

                        {/* Floating Layer 3: Action Tag */}
                        <motion.div
                            style={{ translateZ: "140px" }}
                            className="absolute top-12 -right-4 bg-[#111] border border-white/[0.08] rounded-full pl-2 pr-4 py-1.5 flex items-center gap-2.5 shadow-[0_15px_30px_rgba(0,0,0,0.4)] backdrop-blur-md"
                        >
                            <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400/80 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                            </div>
                            <span className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Compile Success</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};
