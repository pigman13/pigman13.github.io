"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * components/animations/StaggerContainer.tsx
 * 
 * Purpose: Creates smooth staggered animations for lists and grids of content.
 * Contains: Container that animates children with sequential delays for professional flow.
 * Core functionalities: Staggered reveal animations with customizable timing and effects.
 */

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function StaggerContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  direction = "up"
}: StaggerContainerProps) {
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: -20, opacity: 0 },
    right: { x: 20, opacity: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: directionVariants[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
}
