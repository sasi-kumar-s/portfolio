'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
};

export function Spotlight({
  className,
  size = 400,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left - size / 2);
      mouseY.set(event.clientY - top - size / 2);
    },
    [mouseX, mouseY, parentElement, size]
  );

  useEffect(() => {
    if (!parentElement) return;

    const enterHandler = () => setIsHovered(true);
    const leaveHandler = () => setIsHovered(false);

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', enterHandler);
    parentElement.addEventListener('mouseleave', leaveHandler);

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', enterHandler);
      parentElement.removeEventListener('mouseleave', leaveHandler);
    };
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'pointer-events-none absolute rounded-full',
        isHovered ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: springX,
        top: springY,
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(56,189,248,0.02) 40%, transparent 70%)',
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
      }}
    />
  );
}
