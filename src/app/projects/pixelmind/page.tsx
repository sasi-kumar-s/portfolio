import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Code2, GitMerge, FileJson, CheckSquare } from "lucide-react";

export default function PixelMindProject() {
    return (
        <main className="min-h-screen bg-[#080808] text-white selection:bg-teal-500/30 font-sans">
            {/* Global Navigation Hint */}
            <div className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 pointer-events-none flex justify-between items-center mix-blend-difference">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 pointer-events-auto group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase">Return</span>
                </Link>
            </div>

            {/* 1. HERO SECTION */}
            <section className="pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-sky-500/[0.02] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                
                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[12px] font-mono tracking-[0.15em] text-white/70">
                            [AI Output Architecture]
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[12px] uppercase font-bold tracking-[0.15em] text-white/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-[pulse_2s_ease-in-out_infinite]" />
                            MVP Build Active
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tighter mb-8 leading-[1]">
                        PixelMind.
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mb-6">
                        A design-to-code MVP exploring how visual UI ideas can be translated into structured, editable frontend output instead of rigid one-shot code generation.
                    </p>

                    <p className="text-white/40 text-base font-light leading-relaxed max-w-2xl mb-12 pl-5 border-l-2 border-teal-300/20">
                        Getting a UI to look similar is easy. Generating something editable and structurally usable is much harder.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-300">
                            Live Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a href="https://github.com/sasi-kumar-s/pixelmind" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-300">
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> View Source
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. QUICK PROJECT SNAPSHOT */}
            <section className="py-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#161616]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Cluster A: Product Overview */}
                    <div className="space-y-6">
                        <span className="text-teal-400/60 text-[12px] font-mono tracking-widest uppercase mb-4 block">{'//'} Product Overview</span>
                        <div className="border border-[#161616] rounded-[12px] overflow-hidden flex flex-col sm:grid sm:grid-cols-2">
                            <div className="p-[1rem] border-b border-[#161616] sm:border-r">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Type</div>
                                <div className="text-[14px] text-[#ccc] font-medium">AI-assisted design-to-code</div>
                            </div>
                            <div className="p-[1rem] border-b border-[#161616]">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Built For</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Frontend workflow & rapid prototyping</div>
                            </div>
                            <div className="p-[1rem] sm:col-span-2">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Core Output</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Structured React-friendly frontend structure</div>
                            </div>
                        </div>
                    </div>

                    {/* Cluster B: Build Context */}
                    <div className="space-y-6">
                        <span className="text-teal-400/60 text-[12px] font-mono tracking-widest uppercase mb-4 block">{'//'} Build Context</span>
                        <div className="border border-[#161616] rounded-[12px] overflow-hidden flex flex-col sm:grid sm:grid-cols-2">
                            <div className="p-[1rem] border-b border-[#161616] sm:border-r">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Status</div>
                                <div className="text-[14px] text-[#ccc] font-medium">MVP in development</div>
                            </div>
                            <div className="p-[1rem] border-b border-[#161616]">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Problem Solved</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Overcoming rigid, uneditable generated code</div>
                            </div>
                            <div className="p-[1rem] sm:col-span-2">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">My Role</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Product architecture, UI design, frontend layout logic</div>
                            </div>
                        </div>
                    </div>

                    {/* Project Snapshot — micro-proof */}
                    <div className="lg:col-span-2 mt-6 pt-6 border-t border-[#161616]">
                        <span className="text-white/35 text-[12px] uppercase tracking-[0.15em] font-bold block mb-4">Project Snapshot</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Role</span>
                                <span className="text-[14px] text-[#ccc] font-medium">Product thinking, UI system design, frontend experimentation</span>
                            </div>
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Stack</span>
                                <span className="text-[14px] text-[#ccc] font-medium">React, Next.js, Tailwind CSS</span>
                            </div>
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Focus</span>
                                <span className="text-[14px] text-[#ccc] font-medium">Design-to-structure workflow, editable output, interface systems</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISUAL PROOF */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#161616]">
                <div className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-[#0A0A0A] border border-white/[0.05] shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50 z-10" />
                    <Image 
                        src="/projects/pixelmind.png" 
                        alt="PixelMind Interface Translation" 
                        fill 
                        sizes="100vw"
                        className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute bottom-6 left-8 z-20 flex items-center gap-3">
                        <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[12px] font-mono tracking-widest text-white/55">
                            {'{'} INTERFACE_PARSER {'}'}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 & 4. WHY I BUILT THIS & THE PROBLEM */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[#0d0d0d] border-t border-[#161616]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Why I Built This */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block flex items-center gap-3">
                                <Code2 className="w-3 h-3" /> Generator Motivation
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">Why I Built This.</h2>
                        </div>
                        
                        <div className="space-y-6 text-white/50 font-light text-lg leading-relaxed">
                            <p className="text-white/80">A lot of design-to-code tools can generate something that visually resembles the reference.</p>
                            <p>But once you look at the output closely, it often breaks down:</p>
                            
                            <div className="pl-4 border-l border-white/10">
                                <ul className="space-y-2 text-white/60">
                                    <li>• poor structure</li>
                                    <li>• rigid layout blocks</li>
                                    <li>• low editability</li>
                                    <li>• weak component logic</li>
                                </ul>
                            </div>
                            
                            <p>That's frustrating, especially if the goal is not just to "generate code," but to create something a frontend developer can actually continue working on.</p>
                            <div className="bg-[#0d0d0d] border border-[#1e1e1e] border-l-[3px] border-l-[#1D9E75] rounded-r-[10px] p-[1.25rem_1.5rem]">
                                <p className="text-[#777] text-[14px]">
                                    PixelMind was built to explore that gap.<br/>
                                    <span className="text-[#378ADD] italic font-medium">Not just visual imitation — but structure that can still be refined.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Problem */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block flex items-center gap-3">
                                <GitMerge className="w-3 h-3" /> Core Friction
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">The Problem.</h2>
                        </div>
                        
                        <div className="space-y-6 text-white/50 font-light text-lg leading-relaxed">
                            <p className="text-white/80">Most AI code generation tools focus too heavily on visual similarity.</p>
                            <p>That creates outputs that may look close at first glance, but are often difficult to:</p>
                            
                            <div className="bg-[#0C0C0C] rounded-xl p-6 border border-white/[0.03]">
                                <ul className="space-y-3">
                                    {['Edit', 'Restructure', 'Reuse', 'Scale into real frontend work'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70 text-base">
                                            <div className="w-1.5 h-1.5 rounded-sm bg-white/20" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>A screenshot alone is not enough.</p>
                            <p>To be useful, the system needs to understand layout hierarchy, component boundaries, structural grouping, and editable output logic.</p>
                            <p className="text-white/70">That is the problem PixelMind is trying to approach.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. HOW IT WORKS (PRODUCT FLOW) */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808] border-t border-[#161616]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block flex items-center gap-3">
                            <FileJson className="w-3 h-3" /> Logic Pipeline
                        </span>
                        <h2 className="text-4xl font-semibold tracking-tighter text-white">How It Works.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        {[
                            { step: "[STEP 01]", mode: "Input", req: "Input a UI screenshot", desc: "Upload the target visual interface view." },
                            { step: "[STEP 02]", mode: "Parser", req: "Detect layout regions", desc: "System draws boundaries around distinct logical blocks." },
                            { step: "[STEP 03]", mode: "Struct", req: "Parse hierarchy and grouping", desc: "Determining parent-child relationships for flex/grid mapping." },
                            { step: "[STEP 04]", mode: "Logic", req: "Infer layout intent", desc: "Analyzing whether a block is a nav, a hero, or a card cluster." },
                            { step: "[STEP 05]", mode: "Codegen", req: "Generate structured output", desc: "Executing React/Tailwind syntax respecting defined semantics." },
                            { step: "[STEP 06]", mode: "Output", req: "Prepare for refinement", desc: "Deliver code into the IDE-style editor for manual tweaking." }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl relative z-10 group transition-all duration-500 ${item.step === '[STEP 05]' ? 'border border-[#1a3a50] bg-[#0a1520]' : 'border border-white/[0.04] bg-[#0C0C0C] hover:border-white/10 hover:bg-[#111]'}`}>
                                {/* Desktop Arrow */}
                                {(idx + 1) % 3 !== 0 && idx !== 5 && <div className="hidden lg:flex absolute top-1/2 -right-[20px] -translate-y-1/2 w-[16px] justify-center text-[#222] font-medium text-lg">→</div>}
                                {/* Tablet Arrow */}
                                {(idx + 1) % 2 !== 0 && idx !== 5 && <div className="hidden md:flex lg:hidden absolute top-1/2 -right-[20px] -translate-y-1/2 w-[16px] justify-center text-[#222] font-medium text-lg">→</div>}
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[12px] font-[700] text-[#1D9E75] font-mono tracking-[0.1em]">{item.step}</span>
                                    <span className="text-[12px] uppercase tracking-[0.15em] text-white/35 bg-white/5 border border-white/5 px-2.5 py-1 rounded-sm">{item.mode}</span>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{item.req}</h3>
                                <p className="text-[14px] font-light text-white/45">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHAT I BUILT & 7. KEY FEATURES */}
            <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-[#161616]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    <div className="lg:col-span-7 space-y-8">
                        <h2 className="text-3xl font-semibold tracking-tight text-white mb-6">What I Built.</h2>
                        <div className="space-y-6 text-white/50 font-light text-lg leading-relaxed">
                            <p className="text-white/80">For PixelMind, I focused on the workflow between visual input and usable frontend structure.</p>
                            <p>My work included:</p>
                            
                            <ul className="space-y-4 pl-4 border-l border-teal-500/20">
                                {[
                                    "Shaping the interface around screenshot-based input",
                                    "Thinking through how visual blocks should map into structured frontend output",
                                    "Designing a more refinement-friendly generation flow",
                                    "Presenting the output in a way that feels editable instead of rigid",
                                    "Framing the project as a product system, not just an AI demo"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-2.5 w-1 h-1 bg-teal-400 shrink-0" />
                                        <span className="text-white/70">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 bg-[#0d0d0d] border border-[#1e1e1e] border-l-[3px] border-l-[#1D9E75] rounded-r-[10px] p-[1.25rem_1.5rem]">
                                <span className="text-[#777] text-[14px]">The part that interests me most is not just generation —<br/></span>
                                <span className="text-[#378ADD] italic font-[500] text-[14px]">it's making the output useful enough to keep building on.</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-[12px] p-[1.25rem] sticky top-32">
                            <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/35 mb-8">Key Features</h3>
                            <ul className="flex flex-col">
                                {[
                                    "Screenshot-based UI interpretation",
                                    "Layout-aware structure detection",
                                    "Component-oriented output thinking",
                                    "Editable frontend direction",
                                    "Refinement-friendly workflow",
                                    "System-focused experimentation"
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-4 border-b border-[#161616] py-3 last:border-0 last:pb-0 mb-1 last:mb-0">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] shrink-0" />
                                        <span className="text-[#ccc] text-[14px] font-[500] tracking-wide">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 8. WHY THIS IS HARD & 9. WHAT I'M IMPROVING */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[#0d0d0d] border-t border-[#161616]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Credibility Section */}
                    <div className="space-y-6">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block">Reality Check</span>
                        <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Why This Is Hard.</h2>
                        <p className="text-white/55 font-light text-[15px] leading-relaxed">
                            The core challenge is forcing a probabilistic language model to output deterministic structural JSON. If the model hallucinates a nesting hierarchy, the entire UI tree collapses on render. I've had to build a JSON repair layer, strict schema validation, and a retry pipeline — because you can't just prompt-engineer your way to reliability. The hardest bugs aren't in the frontend; they're in getting the AI to produce consistent, parseable layout data across wildly different screenshot inputs.
                        </p>
                    </div>

                    {/* What I'm Improving */}
                    <div className="space-y-6">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block">Active Development</span>
                        <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">What I'm Improving.</h2>
                        <p className="text-white/55 font-light text-[15px] leading-relaxed mb-6">
                            PixelMind is still being actively explored and refined.
                        </p>
                        <p className="text-white/50 font-light text-[15px] leading-relaxed mb-6">
                            Current areas of improvement include:
                        </p>
                        <div className="space-y-3 pl-3 border-l-2 border-white/5 text-[14px] text-white/55 font-light">
                            <p>— Improving nested layout detection.</p>
                            <p>— Better structural grouping of interface regions.</p>
                            <p>— Cleaner semantic interpretation of repeated UI patterns.</p>
                            <p>— Making generated frontend output easier to refine manually.</p>
                        </div>
                        <p className="pt-4 text-white/60 font-medium">
                            The long-term goal is not just to generate code —<br/>
                            <span className="text-white/80">it's to generate a better starting point for real frontend work.</span>
                        </p>
                    </div>

                </div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0d0f14] border-t border-[#1a2535] text-center">
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <div className="flex flex-row items-center gap-[5px] mb-[1rem]">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#1D9E75]" />
                        <span className="text-[12px] uppercase tracking-[0.12em] text-[#1D9E75]">Frontend thinking in action</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        Interested in how I approach hard frontend problems?
                    </h2>
                    <p className="text-white/40 text-lg font-light mb-10">
                        PixelMind shows how I think about AI-assisted tools — not as magic, but as engineering problems that need reliable pipelines and clean interfaces.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
                            View Live Demo
                        </a>
                        <Link href="/#projects" className="px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
                            Back to Projects
                        </Link>
                        <a href="/#contact" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
