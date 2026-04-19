"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Work", href: "#projects" },
    { label: "Systems", href: "#systems" },
    { label: "Execution", href: "#execution" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        let rafId = 0;
        const handleScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 50);
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    useEffect(() => {
        const sectionIds = ["projects", "systems", "execution", "contact"];
        const observers: IntersectionObserver[] = [];

        // Hero zone observer — clears active state when hero is in view
        const heroEl = document.querySelector("section");
        if (heroEl) {
            const heroObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection("");
                        }
                    });
                },
                { rootMargin: "-10% 0px -70% 0px" }
            );
            heroObserver.observe(heroEl);
            observers.push(heroObserver);
        }

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    });
                },
                { rootMargin: "-35% 0px -60% 0px" }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setMobileOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`
                    fixed top-5 left-1/2 -translate-x-1/2 z-[100]
                    w-[calc(100%-2.5rem)] max-w-[1060px]
                    flex items-center justify-between
                    border rounded-[18px]
                    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${scrolled
                        ? "py-3 px-6 md:px-8 bg-[#0a0a0a]/85 backdrop-blur-2xl border-white/[0.07] shadow-[0_8px_40px_rgba(0,0,0,0.6),_0_1px_0_rgba(255,255,255,0.02)_inset]"
                        : "py-4 px-6 md:px-8 bg-[#0a0a0a]/40 backdrop-blur-xl border-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
                    }
                `}
            >
                {/* Left: Identity */}
                <div className="flex items-center gap-3 shrink-0">
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="text-white/90 font-semibold text-[15px] tracking-tight hover:text-sky-200/90 transition-colors duration-500"
                    >
                        Sasi Kumar
                    </a>
                    <div className="hidden md:flex items-center">
                        <span className="text-white/10 mx-3 text-sm select-none">/</span>
                        <span className="text-white/25 text-[10px] tracking-[0.15em] uppercase font-medium">
                            Frontend · UI · Product
                        </span>
                    </div>
                </div>

                {/* Center: Nav Links */}
                <div className="hidden md:flex items-center gap-1.5">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`
                                    relative px-4 py-2 text-[13.5px] font-medium tracking-wide rounded-lg
                                    transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                                    group
                                    ${isActive
                                        ? "text-white/90"
                                        : "text-white/35 hover:text-white/70"
                                    }
                                `}
                            >
                                {link.label}

                                {/* Scan-line beam — active state */}
                                <span
                                    className={`
                                        absolute -bottom-[1px] left-1/2 -translate-x-1/2 h-[2px] rounded-full
                                        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                                        ${isActive
                                            ? "w-6 bg-gradient-to-r from-sky-400/0 via-sky-400/90 to-sky-400/0 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                                            : "w-0 group-hover:w-4 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                                        }
                                    `}
                                />

                                {/* Subtle background activation on active */}
                                {isActive && (
                                    <span className="absolute inset-0 bg-white/[0.04] rounded-lg pointer-events-none" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* Right: Status + Resume */}
                <div className="hidden md:flex items-center gap-4 shrink-0">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/[0.05] bg-white/[0.015] text-[9.5px] uppercase tracking-[0.2em] font-bold text-white/35">
                        <div className="w-[5.5px] h-[5.5px] rounded-full bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.4)] animate-[pulse_3s_ease-in-out_infinite]" />
                        Open to Roles
                    </div>

                    <div className="w-[1px] h-4 bg-white/[0.06]" />

                    <a
                        href="#"
                        className="text-white/35 text-[11px] font-semibold tracking-[0.15em] uppercase hover:text-white/60 transition-colors duration-500"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Trigger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded-md text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-300"
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[99] bg-[#050505]/95 backdrop-blur-2xl md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-1">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-white/50 hover:text-white text-2xl font-semibold tracking-tight py-3 transition-colors duration-300"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="mt-8 flex items-center gap-4"
                            >
                                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-md border border-white/[0.05] bg-white/[0.02] text-[10.5px] uppercase tracking-[0.2em] font-bold text-white/35">
                                    <div className="w-[5.5px] h-[5.5px] rounded-full bg-emerald-400/90 shadow-[0_0_6px_rgba(52,211,153,0.4)] animate-[pulse_3s_ease-in-out_infinite]" />
                                    Open to Roles
                                </div>
                                <span className="text-white/15 text-xs select-none">/</span>
                                <a
                                    href="#"
                                    className="text-white/35 text-[11.5px] font-semibold tracking-[0.15em] uppercase hover:text-white/60 transition-all duration-300"
                                >
                                    Resume
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
