"use client";
import React, { useEffect, useRef } from "react";

export const ScrollProgress = () => {
    const barRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const update = () => {
            if (!barRef.current) return;
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            barRef.current.style.width = `${progress}%`;
        };

        const handleScroll = () => {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(update);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[2px] z-[200] pointer-events-none">
            <div
                ref={barRef}
                className="h-full bg-gradient-to-r from-[#378ADD] to-[#1D9E75] will-change-[width]"
                style={{ width: "0%" }}
            />
        </div>
    );
};
