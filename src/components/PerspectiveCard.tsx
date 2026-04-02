"use client";

import React, { useRef, useState } from "react";
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
    glareOpacity = 0.1
}: PerspectiveCardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${intensity}deg`, `-${intensity}deg`]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${intensity}deg`, `${intensity}deg`]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Glare position
    const glareX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
            className={`relative transition-all duration-300 ${className}`}
        >
            {/* The actual content */}
            <div className="w-full h-full relative" style={{ transformStyle: "preserve-3d" }}>
                {children}
            </div>

            {/* Dynamic Glare/Shine Effect */}
            <motion.div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: `radial-gradient(circle at 50% 50%, white, transparent)`,
                    opacity: isHovered ? glareOpacity : 0,
                    left: glareX,
                    top: glareY,
                    pointerEvents: "none",
                    filter: "blur(50px)",
                    zIndex: 20
                }}
                className="transition-opacity duration-500"
            />
        </motion.div>
    );
};
