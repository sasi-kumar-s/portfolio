"use client";

import React, { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface PerspectiveCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
    glareOpacity?: number;
}

export const PerspectiveCard = ({
    children,
    className = "",
    intensity = 10,
}: PerspectiveCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
};
