"use client";
import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, LayoutGrid, Cpu, Blocks } from "lucide-react";
import { PerspectiveCard } from "./PerspectiveCard";

const focusAreas = [
    {
        title: "Frontend Interfaces",
        description: "I build in React, Next.js, and Tailwind — responsive, fast, and maintainable. No bloat, no spaghetti.",
        structuralLine: "React / Next.js / Motion-driven UI",
        icon: <MonitorSmartphone className="w-5 h-5 text-sky-200/80" />,
        label: "Visual Execution",
        borderColor: "border-t-[#378ADD]",
        tagBg: "bg-[#378ADD]/10",
        tagText: "text-[#378ADD]",
        tagBorder: "border-[#378ADD]/20"
    },
    {
        title: "UI/UX Systems",
        description: "I design the flow before the pixels. Reducing friction is the job — visual polish is the result.",
        structuralLine: "Flow clarity / interaction structure / usability",
        icon: <LayoutGrid className="w-5 h-5 text-sky-200/80" />,
        label: "Architecture",
        borderColor: "border-t-[#1D9E75]",
        tagBg: "bg-[#1D9E75]/10",
        tagText: "text-[#1D9E75]",
        tagBorder: "border-[#1D9E75]/20"
    },
    {
        title: "Product Prototypes",
        description: "From a rough idea to a testable MVP with real structure — I move fast without cutting corners on usability.",
        structuralLine: "Idea → interface → usable MVP",
        icon: <Blocks className="w-5 h-5 text-sky-200/80" />,
        label: "Rapid Build",
        borderColor: "border-t-[#EF9F27]",
        tagBg: "bg-[#EF9F27]/10",
        tagText: "text-[#EF9F27]",
        tagBorder: "border-[#EF9F27]/20"
    },
    {
        title: "Smart Tools",
        description: "I build AI-assisted utilities that solve specific workflow problems, not generic demos.",
        structuralLine: "AI-assisted workflows / utility-driven products",
        icon: <Cpu className="w-5 h-5 text-sky-200/80" />,
        label: "AI Integration",
        borderColor: "border-t-[#7F77DD]",
        tagBg: "bg-[#7F77DD]/10",
        tagText: "text-[#7F77DD]",
        tagBorder: "border-[#7F77DD]/20"
    }
];

export const FocusAreas = () => {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Focus Areas</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">
                        What I Actually Do.
                    </h2>
                    <p className="text-white/35 text-base font-light leading-relaxed">
                        I work at the intersection of frontend engineering and product thinking. I don&apos;t just implement designs — I question the flow, restructure when needed, and ship things that hold up under real use.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {focusAreas.map((area, idx) => (
                        <PerspectiveCard
                            key={idx}
                            intensity={8}
                            glareOpacity={0.03}
                            className="bg-transparent"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group p-6 md:p-8 bg-[#0C0C0C] border border-white/[0.04] border-t-[2px] ${area.borderColor} rounded-[0_0_24px_24px] hover:bg-[#111] transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] h-full`}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Inner Hover Glow Lighting */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/[0.02] opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-700 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                                
                                <div className="flex flex-col h-full relative z-10" style={{ transformStyle: "preserve-3d" }}>
                                    <div className="flex justify-between items-start mb-6" style={{ transformStyle: "preserve-3d" }}>
                                        <div 
                                            className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-white group-hover:bg-white/[0.04] group-hover:border-white/10 transition-all duration-500 shadow-inner"
                                            style={{ transform: "translateZ(30px)" }}
                                        >
                                            {area.icon}
                                        </div>
                                        <span 
                                            className={`px-3 py-1.5 rounded-lg border ${area.tagBorder} text-[10px] uppercase tracking-[0.15em] font-bold ${area.tagText} transition-all duration-500 ${area.tagBg}`}
                                            style={{ transform: "translateZ(20px)" }}
                                        >
                                            {area.label}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-medium text-white tracking-wide mb-2" style={{ transform: "translateZ(10px)" }}>{area.title}</h3>
                                    
                                    <div className="flex items-center gap-2 mb-3" style={{ transform: "translateZ(5px)" }}>
                                        <div className="w-[1px] h-3 bg-white/20" />
                                        <span className="text-white/30 text-[12px] font-mono tracking-wide">{area.structuralLine}</span>
                                    </div>
    
                                    <p className="text-white/45 leading-relaxed font-light text-[15px]" style={{ transform: "translateZ(0px)" }}>{area.description}</p>
                                </div>
                            </motion.div>
                        </PerspectiveCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
