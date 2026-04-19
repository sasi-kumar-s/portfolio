import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Target, Workflow, Layers, CheckCircle2 } from "lucide-react";

export default function LayerSplitProject() {
    return (
        <main className="min-h-screen bg-[#080808] text-white selection:bg-sky-500/30 font-sans">
            {/* Global Navigation Hint */}
            <div className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 pointer-events-none flex justify-between items-center mix-blend-difference">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 pointer-events-auto group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[12px] font-bold tracking-[0.15em] uppercase">Return</span>
                </Link>
            </div>

            {/* 1. HERO SECTION */}
            <section className="pt-32 md:pt-48 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                
                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[12px] uppercase font-bold tracking-[0.15em] text-white/70">
                            Creative Workflow Tool
                        </span>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-[12px] uppercase font-bold tracking-[0.15em] text-white/50">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-[pulse_2s_ease-in-out_infinite]" />
                            Active Refinement
                        </div>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tighter mb-8 leading-[1]">
                        LayerSplit.
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mb-6">
                        A workflow-first image utility that separates an image into foreground, background, and editable mask outputs — built for creators who need more than a transparent PNG cutout.
                    </p>

                    <p className="text-white/40 text-base font-light leading-relaxed max-w-2xl mb-12 pl-5 border-l-2 border-sky-300/20">
                        The hard part isn't removing the background — it's producing outputs that are still useful after export.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="https://layersplit-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors duration-300">
                            Live Demo <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a href="https://github.com/sasi-kumar-s/layersplit" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-300">
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
                        <span className="text-sky-200/60 text-[12px] font-mono tracking-widest uppercase mb-4 block">/// Product Overview</span>
                        <div className="border border-[#161616] rounded-[12px] overflow-hidden flex flex-col sm:grid sm:grid-cols-2">
                            <div className="p-[1rem] border-b border-[#161616] sm:border-r">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Type</div>
                                <div className="text-[14px] text-[#ccc] font-medium">AI-assisted creative utility</div>
                            </div>
                            <div className="p-[1rem] border-b border-[#161616]">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Built For</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Designers, editors, creators</div>
                            </div>
                            <div className="p-[1rem] sm:col-span-2">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Core Output</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Foreground, background, and alpha mask bundle</div>
                            </div>
                        </div>
                    </div>

                    {/* Cluster B: Build Context */}
                    <div className="space-y-6">
                        <span className="text-sky-200/60 text-[12px] font-mono tracking-widest uppercase mb-4 block">/// Build Context</span>
                        <div className="border border-[#161616] rounded-[12px] overflow-hidden flex flex-col sm:grid sm:grid-cols-2">
                            <div className="p-[1rem] border-b border-[#161616] sm:border-r">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Status</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Active refinement output logic</div>
                            </div>
                            <div className="p-[1rem] border-b border-[#161616]">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">Problem Solved</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Standard tools stop at simple cutouts</div>
                            </div>
                            <div className="p-[1rem] sm:col-span-2">
                                <div className="text-[12px] tracking-[0.12em] text-[#444] uppercase mb-[6px]">My Role</div>
                                <div className="text-[14px] text-[#ccc] font-medium">Product thinking, UI design, frontend execution, workflow logic</div>
                            </div>
                        </div>
                    </div>

                    {/* Project Snapshot — micro-proof */}
                    <div className="lg:col-span-2 mt-6 pt-6 border-t border-[#161616]">
                        <span className="text-white/35 text-[12px] uppercase tracking-[0.15em] font-bold block mb-4">Project Snapshot</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Role</span>
                                <span className="text-[14px] text-[#ccc] font-medium">Product thinking, UI design, frontend implementation</span>
                            </div>
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Stack</span>
                                <span className="text-[14px] text-[#ccc] font-medium">React, Next.js, Tailwind CSS, Framer Motion</span>
                            </div>
                            <div>
                                <span className="text-white/30 text-[12px] uppercase tracking-[0.15em] font-bold block mb-1">Focus</span>
                                <span className="text-[14px] text-[#ccc] font-medium">Workflow UX, interface clarity, product execution</span>
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
                        src="/projects/layersplit.png" 
                        alt="LayerSplit Visual Asset Workflow" 
                        fill 
                        sizes="100vw"
                        className="object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute bottom-6 left-8 z-20 flex items-center gap-3">
                        <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[12px] font-mono tracking-widest text-white/50">
                            UI_OVERVIEW.png
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
                                <Target className="w-3 h-3" /> Core Motivation
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">Why I Built This.</h2>
                        </div>
                        
                        <div className="space-y-6 text-white/50 font-light text-lg leading-relaxed">
                            <p className="text-white/80">Most background removal tools are built for quick convenience.</p>
                            <p>That works for basic edits — but in real creative workflows, it usually stops too early.</p>
                            <p>Designers often need more than just the isolated subject. They need the recovered background, the editable mask, and cleaner outputs they can continue working with inside tools like Figma or Photoshop.</p>
                            <div className="bg-[#0d0d0d] border border-[#1e1e1e] border-l-[3px] border-l-[#1D9E75] rounded-r-[10px] p-[1.25rem_1.5rem]">
                                <p className="text-[#777] text-[14px]">
                                    LayerSplit was built around that gap. <br/>
                                    <span className="text-[#378ADD] italic font-medium">The idea was simple: don't just remove the background — make the image reusable.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Problem */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block flex items-center gap-3">
                                <Layers className="w-3 h-3" /> System Friction
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white">The Problem.</h2>
                        </div>
                        
                        <div className="space-y-6 text-white/50 font-light text-lg leading-relaxed">
                            <p className="text-white/80">Most AI background tools solve only the first part of the workflow.</p>
                            <p>They isolate the subject and export a PNG.</p>
                            <p>That helps for quick cutouts.</p>
                            <p>But if someone wants to:</p>
                            
                            <div className="bg-[#0C0C0C] rounded-xl p-6 border border-white/[0.03]">
                                <ul className="space-y-3">
                                    {['Place text behind the subject', 'Rebuild the composition', 'Clean rough edges', 'Reuse the extracted assets in a design workflow'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70 text-base">
                                            <div className="w-1 h-1 rounded-full bg-white/20" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>…they usually have to do extra manual work from scratch.</p>
                            <p>That friction is what LayerSplit is trying to reduce.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 5. HOW IT WORKS (PRODUCT FLOW) */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#080808] border-t border-[#161616]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block flex items-center gap-3">
                            <Workflow className="w-3 h-3" /> Pipeline
                        </span>
                        <h2 className="text-4xl font-semibold tracking-tighter text-white">How It Works.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[50px] left-8 right-8 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent z-0" />

                        {[
                            { num: "01", label: "Input", title: "Upload an image", desc: "Select and upload the base composition." },
                            { num: "02", label: "Detection", title: "Detect the main subject", desc: "Identify the primary focal point vs the background." },
                            { num: "03", label: "Processing", title: "Generate the foreground layer", desc: "Isolate the primary subject cleanly." },
                            { num: "04", label: "Processing", title: "Recover the background", desc: "Reconstruct the occluded background pixels." },
                            { num: "05", label: "Processing", title: "Produce the mask output", desc: "Generate the raw alpha mask for manual edits." },
                            { num: "06", label: "Output", title: "Export as workflow-ready assets", desc: "Download the bundle for immediate staging." }
                        ].map((step, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl relative z-10 group transition-all duration-500 ${step.num === '06' ? 'border border-[#1a3a50] bg-[#0a1520]' : 'border border-white/[0.04] bg-[#0C0C0C] hover:border-white/10 hover:bg-[#111]'}`}>
                                {/* Desktop Arrow */}
                                {(idx + 1) % 3 !== 0 && idx !== 5 && <div className="hidden lg:flex absolute top-1/2 -right-[20px] -translate-y-1/2 w-[16px] justify-center text-[#222] font-medium text-lg">→</div>}
                                {/* Tablet Arrow */}
                                {(idx + 1) % 2 !== 0 && idx !== 5 && <div className="hidden md:flex lg:hidden absolute top-1/2 -right-[20px] -translate-y-1/2 w-[16px] justify-center text-[#222] font-medium text-lg">→</div>}
                                
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-[12px] font-[700] text-[#1D9E75] font-mono tracking-[0.1em]">[STEP {step.num}]</span>
                                    <span className="text-[12px] uppercase tracking-[0.15em] text-sky-200/50 bg-sky-500/5 px-2.5 py-1 rounded-md border border-sky-500/10">{step.label}</span>
                                </div>
                                <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                                <p className="text-[14px] font-light text-white/45">{step.desc}</p>
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
                            <p className="text-white/80">For LayerSplit, I focused on building it as a usable workflow tool — not just a visual demo.</p>
                            <p>My work included:</p>
                            <ul className="space-y-4 pl-4">
                                {[
                                    "Designing the product flow",
                                    "Structuring the interface around asset extraction",
                                    "Shaping the review and refinement interaction logic",
                                    "Defining more useful export expectations for creators",
                                    "Building the frontend experience around workflow clarity"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400/50 shadow-[0_0_8px_rgba(56,189,248,0.5)] shrink-0" />
                                        <span className="text-white/70">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 bg-[#0d0d0d] border border-[#1e1e1e] border-l-[3px] border-l-[#1D9E75] rounded-r-[10px] p-[1.25rem_1.5rem]">
                                <span className="text-[#378ADD] italic font-[500] text-[14px]">
                                    The goal was to make the tool feel usable after output, not just impressive during preview.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-[12px] p-[1.25rem] sticky top-32">
                            <h3 className="text-[12px] font-bold tracking-[0.15em] uppercase text-white/35 mb-8">Key Features</h3>
                            <ul className="flex flex-col">
                                {[
                                    "Foreground extraction",
                                    "Background recovery",
                                    "Editable mask output",
                                    "Workflow-first export",
                                    "Refinement-friendly structure",
                                    "Reusable asset thinking"
                                ].map((feat, i) => (
                                    <li key={i} className="flex items-center gap-4 border-b border-[#161616] py-3 last:border-0 last:pb-0 mb-1 last:mb-0">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#1D9E75] shrink-0" />
                                        <span className="text-[#ccc] text-[14px] font-medium">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* 8. WHERE IT BECOMES USEFUL & 9. WHAT I'M IMPROVING */}
            <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[#0d0d0d] border-t border-[#161616]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Credibility Section */}
                    <div className="space-y-6">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block">Reality Check</span>
                        <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Where It Becomes Useful.</h2>
                        <p className="text-white/55 font-light text-[15px] leading-relaxed">
                            A single cutout is fine for a thumbnail. But when a designer is building a campaign, they need to place typography behind a product shot. They need the shadows to match the new background. They need the raw mask to fix hair strands manually. LayerSplit provides exactly these assets — foreground, recovered background, and editable alpha mask — so the image becomes a reusable kit, not a one-shot export.
                        </p>
                        <p className="text-white/45 font-light text-[14px] leading-relaxed mt-4 pl-4 border-l border-white/10">
                            The background recovery is still imperfect on complex scenes — edge-propagation artifacts show up on busy backgrounds. That's a known tradeoff I'm actively working to improve.
                        </p>
                    </div>

                    {/* What I'm Improving */}
                    <div className="space-y-6">
                        <span className="text-white/40 text-[12px] font-bold tracking-[0.15em] uppercase mb-4 block">Active Development</span>
                        <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">What I'm Improving.</h2>
                        <p className="text-white/55 font-light text-[15px] leading-relaxed mb-6">
                            LayerSplit is still being actively refined in a few important areas:
                        </p>
                        <ul className="space-y-3 text-[14px] text-white/55 font-light">
                            <li>— Improving edge cleanup around difficult boundaries like hair and soft contours.</li>
                            <li>— Making background reconstruction more consistent.</li>
                            <li>— Producing cleaner masks for manual editing workflows.</li>
                            <li>— Improving how the outputs feel inside actual creator pipelines.</li>
                        </ul>
                        <p className="pt-4 text-white/60 font-medium">
                            The goal isn't just to make it work —
                            it's to make it useful enough to keep using.
                        </p>
                    </div>


                </div>
            </section>

            {/* 10. FINAL CTA */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#0d0f14] border-t border-[#1a2535] text-center">
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <div className="flex flex-row items-center gap-[5px] mb-[1rem]">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#1D9E75]" />
                        <span className="text-[12px] uppercase tracking-[0.12em] text-[#1D9E75]">Product thinking in action</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        Want to see how I think about product?
                    </h2>
                    <p className="text-white/40 text-lg font-light mb-10">
                        LayerSplit shows how I approach building — start with a real problem, design the workflow, then ship something people can actually use.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://layersplit-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors">
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
