"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * components/animations/HoverCard.tsx
 * 
 * Purpose: Provides subtle hover animations for cards and interactive elements.
 * Contains: Smooth hover effects with scale and shadow transitions for professional feel.
 * Core functionalities: Gentle hover animations that enhance user interaction without being distracting.
 */

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
  delay?: number;
}

export default function HoverCard({ 
  children, 
  className = "",
  scale = 1.02,
  duration = 0.3,
  delay = 0
}: HoverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale,
        transition: { duration, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
