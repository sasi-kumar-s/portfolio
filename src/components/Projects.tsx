"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { PerspectiveCard } from "./PerspectiveCard";

const projects = [
    {
        title: "LayerSplit",
        slug: "layersplit",
        category: "Creative Workflow Tool / AI-Assisted Image Utility",
        description: "A workflow-first image utility that separates a subject into reusable foreground, background, and mask outputs — built for creators who need more than a simple cutout.",
        highlights: [
            "Foreground extraction", 
            "Background recovery", 
            "Editable mask output", 
            "Workflow-first export structure"
        ],
        insight: "Most background tools stop at extraction. LayerSplit is designed to make those outputs more usable inside actual creative workflows.",
        status: "Active Refinement",
        tags: ["Export Layers", "Mask Output", "Background Recovery", "Edge Cleanup", "Workflow Export"],
        image: "/projects/layersplit.png",
        color: "from-sky-500/10 via-teal-500/5 to-transparent",
        accent: "text-sky-300/90",
        dot: "bg-teal-400",
        demo: "https://layersplit-omega.vercel.app/",
        github: "https://github.com/sasi-kumar-s/layersplit"
    },
    {
        title: "PixelMind",
        slug: "pixelmind",
        category: "AI-Assisted Design-to-Code Platform",
        description: "A design-to-code MVP exploring how visual UI ideas can be translated into structured, editable frontend output instead of rigid one-shot code generation.",
        highlights: [
            "Visual UI interpretation", 
            "Design-to-structure workflow", 
            "Editable frontend output", 
            "Component-oriented generation"
        ],
        insight: "Most design-to-code tools generate rough-looking code. PixelMind explores a more structured, refinement-friendly approach to frontend generation.",
        status: "MVP in Development",
        tags: ["Upload Design", "Detected Components", "Layout Structure", "Editable Blocks", "Output Control"],
        image: "/projects/pixelmind.png",
        color: "from-teal-500/10 via-sky-500/5 to-transparent",
        accent: "text-teal-300/90",
        dot: "bg-sky-400",
        demo: "#",
        github: "https://github.com/sasi-kumar-s/pixelmind"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-14 max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                        Featured Work.
                    </h2>
                    <p className="text-white/40 text-xl font-light leading-relaxed">
                        Projects built around real workflow problems, interface structure, and usable frontend execution.
                    </p>
                </motion.div>

                <div className="space-y-28 relative">
                    {projects.map((project, idx) => (
                        <ProjectShowcase key={idx} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectShowcase = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <div ref={containerRef} className="relative group">
            {/* Ambient Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[500px] bg-gradient-to-br ${project.color} blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center relative z-10">
                
                {/* Visual Showcase (Image with styled overlay wrapper) */}
                <PerspectiveCard 
                    intensity={5}
                    glareOpacity={0.05}
                    className={`lg:col-span-7 relative w-full aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.05] bg-[#0C0C0C] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <motion.div style={{ y: yMove, transform: "translateZ(0px)" }} className="absolute inset-0 w-full h-full transform-gpu scale-[1.05] group-hover:scale-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                            />
                        </motion.div>
                        
                        {/* Inner Shadow / Vignette for integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-80" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] rounded-3xl group-hover:ring-white/[0.1] transition-color duration-700" />
                    </motion.div>
                </PerspectiveCard>

                {/* Project Details */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 flex flex-col justify-center"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className={`text-[11px] font-bold tracking-[0.15em] uppercase block ${project.accent}`}>
                            // {project.category}
                        </span>
                        <div className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-bold tracking-[0.15em] uppercase text-white/55 flex items-center gap-1.5 backdrop-blur-sm">
                            <div className={`w-1.5 h-1.5 rounded-full ${project.dot} animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
                            {project.status}
                        </div>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-5 leading-[1.1]">
                        {project.title}
                    </h3>
                    <p className="text-white/50 text-[15px] leading-relaxed font-light mb-8">
                        {project.description}
                    </p>

                    <div className="bg-[#0C0C0C] border border-white/[0.05] rounded-2xl p-6 mb-8 relative overflow-hidden group/insight shadow-[inset_0_2px_10px_rgba(255,255,255,0.01)]" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-300/30 to-transparent" style={{ transform: "translateZ(10px)" }} />
                        <span className="text-white/35 text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block">Why it matters</span>
                        <p className="text-white/60 font-light leading-relaxed text-[15px]">
                            {project.insight}
                        </p>
                    </div>

                    <div className="mb-10 space-y-3">
                        {project.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-3">
                                <div className="w-1 h-1 rounded-full bg-white/20" />
                                <span className="text-white/60 font-light text-[15px]">{highlight}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag, tIdx) => (
                            <span 
                                key={tIdx} 
                                className="px-3 py-1.5 rounded-md border border-white/[0.05] text-[10px] uppercase font-medium tracking-[0.15em] text-white/45 bg-white/[0.01] hover:bg-white/[0.03] hover:text-white/70 hover:border-white/10 transition-colors duration-500 cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/btn">
                            Explore Project <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-500 group/demo relative">
                            <span className="relative z-10">Live Demo</span>
                            {/* Accent Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-transparent opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500 rounded-full" />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Repository" className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-white/10 text-white/50 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-500">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
