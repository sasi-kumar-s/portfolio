"use client";
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Core Frontend",
        label: "Execution Layer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
        pillText: "text-[#378ADD]",
        pillBorder: "border-[#378ADD]/25",
        pillBg: "bg-[#378ADD]/5"
    },
    {
        title: "Design & UX",
        label: "Interface Thinking",
        skills: ["Figma", "UI Design", "Wireframing", "Prototyping", "Design Systems", "Responsive Design"],
        pillText: "text-[#1D9E75]",
        pillBorder: "border-[#1D9E75]/25",
        pillBg: "bg-[#1D9E75]/5"
    },
    {
        title: "Product & Workflow",
        label: "Product Thinking",
        skills: ["Product Thinking", "User Flows", "Interface Structuring", "Rapid Prototyping"],
        pillText: "text-[#EF9F27]",
        pillBorder: "border-[#EF9F27]/25",
        pillBg: "bg-[#EF9F27]/5"
    },
    {
        title: "Technical Exploration",
        label: "Exploration Layer",
        skills: ["Python", "AI Tool Workflows", "Prompt Engineering", "Image Processing"],
        pillText: "text-[#7F77DD]",
        pillBorder: "border-[#7F77DD]/25",
        pillBg: "bg-[#7F77DD]/5"
    }
];

export const Skills = () => {
    return (
        <section id="systems" className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-white/[0.02]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
                <div className="lg:w-1/3">
                    <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Core Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                        Systems & Workflow Thinking.
                    </h2>
                    <p className="text-white/40 text-base font-light leading-relaxed">
                        A structured way of building products — combining frontend execution, interface logic, and practical product thinking.
                    </p>
                </div>
                
                <div className="lg:w-2/3 flex flex-col relative pl-4 md:pl-8">
                    {/* Vertical System Structural Beam */}
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-sky-400/20 via-sky-400/5 to-transparent hidden md:block" style={{ transform: "translateZ(-1px)" }} />
                    
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col md:flex-row md:items-start border-t border-white/[0.03] first:border-t-0 py-8 hover:translate-x-2 transition-transform duration-300 transform-gpu will-change-transform"
                        >
                            {/* Structural Node Marker */}
                            <div 
                                className="hidden md:block absolute left-[-32px] top-12 w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-sky-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-500 will-change-[background-color]" 
                                style={{ transform: "translateZ(20px)" }} 
                            />
                            
                            {/* Hover Accent Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-r-2xl will-change-[opacity]" />
                            
                            <div className="md:w-1/3 mb-6 md:mb-0 shrink-0 pr-4">
                                <span className="text-white/35 text-[12px] uppercase tracking-[0.15em] font-bold mb-2 block font-mono">
                                    // {category.label}
                                </span>
                                <h3 className="text-white text-xl font-medium tracking-wide">
                                    {category.title}
                                </h3>
                            </div>
                            
                            <div className="md:w-2/3 flex flex-wrap gap-2.5 relative z-10" style={{ transformStyle: "preserve-3d" }}>
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span 
                                        key={sIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: sIdx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                                        className={`${category.pillText} text-[13px] font-light px-3 py-1.5 rounded-[6px] ${category.pillBorder} ${category.pillBg} transition-transform duration-300 transform-gpu cursor-default hover:scale-105 will-change-transform`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
