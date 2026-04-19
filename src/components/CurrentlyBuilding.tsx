"use client";
import React from "react";
import { motion } from "framer-motion";

const LayerSplitIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 transform -translate-y-1">
      <path d="M50 20L80 35L50 50L20 35L50 20Z" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="2" strokeOpacity="0.6" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"/>
      <path d="M50 35L80 50L50 65L20 50L50 35Z" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.3" transform="translate(0, 12)"/>
      <path d="M50 50L80 65L50 80L20 65L50 50Z" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.1" transform="translate(0, 24)"/>
      <line x1="50" y1="50" x2="50" y2="80" stroke="white" strokeWidth="2" strokeOpacity="0.2" />
    </svg>
    <div className="absolute inset-0 bg-emerald-500/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
  </div>
);

const PixelMindIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="25" y="25" width="50" height="50" fill="white" fillOpacity="0.02" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" rx="4" />
      <rect x="35" y="35" width="30" height="30" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" rx="2" />
      <circle cx="50" cy="50" r="4" fill="white" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
      <path d="M50 25 V15 M50 75 V85 M25 50 H15 M75 50 H85" stroke="white" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
    <div className="absolute inset-0 bg-sky-500/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
  </div>
);

const LLMIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="30" cy="30" r="6" fill="white" fillOpacity="0.8" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
      <circle cx="70" cy="40" r="8" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="50" cy="75" r="5" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M30 30 L70 40 L50 75 Z" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="2" fill="white" fillOpacity="0.5" />
      <line x1="30" y1="30" x2="50" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="70" y1="40" x2="50" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="50" y1="75" x2="50" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
    </svg>
    <div className="absolute inset-0 bg-teal-500/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
  </div>
);

const tasks = [
    { 
        title: "LayerSplit",
        subline: "Improving output quality and making extracted assets more useful in real creator workflows.",
        focus: "Edge cleanup and cleaner export outputs.",
        status: "Shipping Refinements", 
        type: "active",
        color: "emerald",
        icon: <LayerSplitIcon />,
        progress: 75,
        progressColor: "bg-emerald-400"
    },
    { 
        title: "PixelMind",
        subline: "Developing the design-to-structure pipeline and improving editable frontend output generation.",
        focus: "Layout detection and nested UI structure.",
        status: "Core MVP Build", 
        type: "active",
        color: "sky",
        icon: <PixelMindIcon />,
        progress: 40,
        progressColor: "bg-sky-400"
    },
    { 
        title: "LLM UI Rendering",
        subline: "Exploring how structured UI generation can become more stable, controllable, and component-aware.",
        focus: "Strict JSON rendering and component mapping.",
        status: "Experimental R&D", 
        type: "exploring",
        color: "teal",
        icon: <LLMIcon />,
        progress: 20,
        progressColor: "bg-amber-400"
    },
];

export const CurrentlyBuilding = () => {
    return (
        <section id="execution" className="py-14 md:py-18 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-white/[0.02] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.01] rounded-full blur-[40px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:items-center justify-center mb-10 md:mb-12">
                    <span className="text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                        Current Build Focus
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tighter text-white">
                        What I'm Building Right Now.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tasks.map((task, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={`group flex flex-col p-8 md:p-10 rounded-[28px] border relative overflow-hidden transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_15px_40px_rgba(0,0,0,0.3)] transform-gpu ${task.title === 'PixelMind' ? 'bg-[#0d1a26] border-[#1a2a3a] hover:bg-[#0f1e2e]' : 'bg-[#0C0C0C] border-white/[0.04] hover:bg-[#111]'}`}
                        >
                            {/* Top Edge Highlight */}
                            <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${task.color === 'emerald' ? 'via-emerald-400/40' : task.color === 'sky' ? 'via-sky-400/40' : 'via-teal-400/40'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 will-change-[opacity]`} />
                            
                            {/* Module Header Elements */}
                            <div className="flex items-start justify-between mb-12 relative z-10">
                                <div className="p-3.5 rounded-[18px] bg-white/[0.02] border border-white/[0.05] group-hover:border-white/10 transition-colors duration-500 shadow-inner">
                                    {task.icon}
                                </div>
                                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/[0.04] text-[12px] uppercase font-bold tracking-[0.15em] ${task.type === 'active' ? 'text-white/80' : 'text-white/45'}`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${task.color === 'emerald' ? 'bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : task.color === 'sky' ? 'bg-sky-400/90 shadow-[0_0_8px_rgba(56,189,248,0.6)]' : 'bg-teal-400/90 shadow-[0_0_8px_rgba(45,212,191,0.6)]'} animate-[pulse_2s_ease-in-out_infinite]`} />
                                    {task.status}
                                </div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="mt-auto space-y-4 relative z-10">
                                <h3 className="text-white text-2xl font-medium tracking-tight">
                                    {task.title}
                                </h3>
                                <p className="text-white/45 font-light text-[15px] leading-relaxed max-w-[95%]">
                                    {task.subline}
                                </p>
                                {/* Progress Bar */}
                                <div className="pt-4 mb-3">
                                    <div className="w-full h-[3px] bg-white/[0.05] rounded-full overflow-hidden transform-gpu">
                                        <div 
                                            className={`h-full ${task.progressColor} rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${task.progress}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-[6px]">
                                        <span className="text-[12px] text-white/25 font-mono">{task.progress}%</span>
                                    </div>
                                </div>
                                {/* Current Focus Line */}
                                <div className="pt-2 border-t border-white/[0.05]">
                                    <p className="text-white/65 text-[12px] font-mono tracking-wide">
                                        <span className="text-white/35 mr-2">Current focus:</span>{task.focus}
                                    </p>
                                </div>
                            </div>

                            {/* Background Overlay Glows on Hover */}
                            <div className={`absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[40px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${task.color === 'emerald' ? 'bg-emerald-500' : task.color === 'sky' ? 'bg-sky-500' : 'bg-teal-500'}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
