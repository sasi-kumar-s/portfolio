"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { PerspectiveCard } from "./PerspectiveCard";

export const Contact = () => {
    return (
        <section id="contact" className="relative bg-[#050505] pt-20 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden z-10 selection:bg-emerald-500/30">
            {/* Cinematic Global Atmosphere */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[600px] bg-sky-500/[0.02] rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-center mb-16">
                    
                    {/* LEFT SIDE: Closing Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col h-full justify-center"
                    >
                        <div className="mb-12">
                            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
                                Open to Opportunities
                            </span>
                            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8 leading-[1.1]">
                                Let's build<br />
                                <span className="text-sky-200/90 italic drop-shadow-[0_0_15px_rgba(186,230,253,0.3)]">something useful.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                I'm currently open to frontend, UI-focused, and product engineering opportunities — especially where design quality and execution both matter.
                            </p>
                            <p className="text-white/45 text-base font-light leading-relaxed max-w-lg mt-3">
                                If you're building something thoughtful and need someone who can help shape and ship the interface, I'd be glad to connect.
                            </p>
                        </div>

                        {/* Action Hierarchy */}
                        <div className="space-y-6 max-w-sm" style={{ transformStyle: "preserve-3d" }}>
                            <motion.a 
                                href="mailto:sasikumarsingireddy@gmail.com" 
                                whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-between w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 left-0 top-0"></div>
                                <div className="flex items-center gap-4 relative z-10" style={{ transform: "translateZ(10px)" }}>
                                    <Mail className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                    <span className="text-white font-medium">Email Me</span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" style={{ transform: "translateZ(10px)" }} />
                            </motion.a>

                            <div className="flex items-center gap-4">
                                <a 
                                    href="#" 
                                    className="group flex-1 flex items-center justify-center gap-2 px-4 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/5 transition-colors"
                                >
                                    <FileText className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                                    <span className="text-white/50 group-hover:text-white transition-colors text-sm font-medium">Resume</span>
                                </a>
                                <a 
                                    href="https://github.com/sasi-kumar-s" 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="group flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/5 transition-colors shrink-0"
                                >
                                    <Github className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/singireddy-sasi-kumar" 
                                    target="_blank" rel="noopener noreferrer" 
                                    className="group flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/5 transition-colors shrink-0"
                                >
                                    <Linkedin className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Identity Panel */}
                    <PerspectiveCard
                        intensity={5}
                        glareOpacity={0.05}
                        className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-h-[600px] lg:ml-auto group"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            className="w-full h-full relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Cinematic Frame Depth */}
                            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-[32px] opacity-70 block" style={{ transform: "translateZ(-1px)" }} />
                            
                            <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-[#0A0A0A] border border-white/5 isolation-auto shadow-2xl" style={{ transformStyle: "preserve-3d" }}>
                                {/* Portrait Image */}
                                <Image 
                                    src="/portrait.png"
                                    alt="Sasi Kumar"
                                    fill
                                    className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:mix-blend-normal"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                    style={{ transform: "translateZ(0px)" }}
                                />

                                {/* Dark Overlays & Gradient Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />

                                {/* Floating Role Chip / Sub-elements */}
                                <div className="absolute bottom-8 left-8 right-8 flex flex-col justify-end" style={{ transformStyle: "preserve-3d" }}>
                                    <div className="space-y-3" style={{ transformStyle: "preserve-3d" }}>
                                        <div 
                                            className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-black/80 border border-white/10 w-fit"
                                            style={{ transform: "translateZ(40px)" }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-white/80 font-bold">Open to Roles</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5" style={{ transform: "translateZ(20px)" }}>
                                            <h3 className="text-3xl font-medium text-white tracking-tight leading-none">
                                                Sasi Kumar
                                            </h3>
                                            <p className="text-sky-200/50 text-base font-light tracking-wide">
                                                Frontend / UI / Product
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Edge Light Effect */}
                                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>
                        </motion.div>
                    </PerspectiveCard>
                </div>

                {/* Footer Bottom Line */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/[0.05] text-white/25 text-[11px] tracking-[0.15em] font-bold uppercase mt-8">
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} SASI KUMAR — ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </section>
    );
};
