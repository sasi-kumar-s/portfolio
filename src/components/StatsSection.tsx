"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        tag: "Active",
        tagColor: "text-[#378ADD]",
        tagBg: "bg-[#378ADD]/15",
        tagBorder: "border-[#378ADD]/30",
        value: "2",
        valueSub: "",
        label: "Products in active development",
        sublabel: "LayerSplit · PixelMind",
        accentColor: "#378ADD",
        hoverBg: "hover:bg-[#378ADD]/[0.18]"
    },
    {
        tag: "Experience",
        tagColor: "text-[#1D9E75]",
        tagBg: "bg-[#1D9E75]/15",
        tagBorder: "border-[#1D9E75]/30",
        value: "3+",
        valueSub: "",
        label: "Years building with React & Next.js",
        sublabel: "+ Tailwind · Framer Motion",
        accentColor: "#1D9E75",
        hoverBg: "hover:bg-[#1D9E75]/[0.18]"
    },
    {
        tag: "Ownership",
        tagColor: "text-[#EF9F27]",
        tagBg: "bg-[#EF9F27]/15",
        tagBorder: "border-[#EF9F27]/30",
        value: "100%",
        valueSub: "",
        label: "Self-directed — idea, design, build, ship",
        sublabel: "Idea → design → ship",
        accentColor: "#EF9F27",
        hoverBg: "hover:bg-[#EF9F27]/[0.18]"
    },
    {
        tag: "Status",
        tagColor: "text-[#7F77DD]",
        tagBg: "bg-[#7F77DD]/15",
        tagBorder: "border-[#7F77DD]/30",
        value: "Open",
        valueSub: "to hire",
        label: "Frontend · UI · Product",
        sublabel: "Remote · Full-time",
        accentColor: "#7F77DD",
        hoverBg: "hover:bg-[#7F77DD]/[0.18]"
    }
];

export const StatsSection = () => {
    return (
        <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                        A Few Numbers.
                    </h2>
                </div>

                <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0C0C0C]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 relative">
                        {/* Vertical dividers */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-[1px] bg-white/[0.06]" />
                        <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-[1px] bg-white/[0.06]" />
                        <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-[1px] bg-white/[0.06]" />
                        {/* Mobile center divider */}
                        <div className="block lg:hidden absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.06]" />
                        {/* Mobile horizontal divider */}
                        <div className="lg:hidden absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.06]" />

                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative px-6 md:px-8 py-8 md:py-10 bg-[#0C0C0C] ${stat.hoverBg} transition-colors duration-500 cursor-default flex flex-col justify-between min-h-[280px]`}
                            >
                                {/* Colored bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                                    style={{ background: stat.accentColor }}
                                />

                                {/* Top: Tag */}
                                <span className={`inline-block text-[10px] uppercase tracking-[0.15em] font-bold px-2.5 py-1 rounded-md border ${stat.tagBorder} ${stat.tagColor} ${stat.tagBg} w-fit`}>
                                    {stat.tag}
                                </span>

                                {/* Middle: Value */}
                                <div>
                                    <span className="text-4xl md:text-5xl font-[800] text-white tracking-tight leading-none block">
                                        {stat.value}
                                    </span>
                                    {stat.valueSub && (
                                        <span className="text-[28px] md:text-[32px] font-light text-white/40 leading-tight block mt-0.5 italic">{stat.valueSub}</span>
                                    )}
                                </div>

                                {/* Bottom: Labels */}
                                <div className="pt-4">
                                    <p className="text-white/50 text-[13px] font-medium leading-snug mb-1">
                                        {stat.label}
                                    </p>
                                    <p className="text-white/25 text-[11px] font-light">
                                        {stat.sublabel}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

