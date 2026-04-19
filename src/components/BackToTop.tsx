"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const rafRef = useRef<number>(0);
    const lastVisible = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const shouldShow = window.scrollY > 300;
                if (shouldShow !== lastVisible.current) {
                    lastVisible.current = shouldShow;
                    setVisible(shouldShow);
                }
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[100] w-10 h-10 rounded-full bg-[#111] border border-white/10 text-white/50 hover:text-white hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-300 flex items-center justify-center shadow-lg cursor-pointer ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            style={{ transition: 'opacity 0.3s, transform 0.3s' }}
            aria-label="Back to top"
        >
            <ArrowUp className="w-4 h-4" />
        </button>
    );
};
