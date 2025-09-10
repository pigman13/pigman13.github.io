"use client";
import { motion } from "framer-motion";

/**
 * components/animations/AnimatedName.tsx
 * 
 * Purpose: Fixed name component with smooth, looping idle animations inspired by Aceternity UI.
 * Contains: Text display, sophisticated looping animations, and color styling.
 * Core functionalities: Creates engaging, smooth looping animations for the fixed navigation name.
 */

interface AnimatedNameProps {
  className?: string;
}

export default function AnimatedName({ className = "" }: AnimatedNameProps) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: [1, 1.02, 1],
      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeOut" },
        y: { duration: 0.6, ease: "easeOut" },
        scale: {
          duration: 6,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
        }
      }}
    >
      <motion.span 
        className="text-black dark:text-white relative"
        animate={{
          textShadow: [
            "0 0 0px rgba(0,0,0,0)",
            "0 0 12px rgba(0,0,0,0.15)",
            "0 0 0px rgba(0,0,0,0)"
          ],
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.8
        }}
      >
        Ivan G.
      </motion.span>{" "}
      <motion.span 
        className="text-accent-orange relative"
        animate={{
          textShadow: [
            "0 0 0px rgba(255, 77, 0, 0)",
            "0 0 20px rgba(255, 77, 0, 0.4)",
            "0 0 0px rgba(255, 77, 0, 0)"
          ],
          scale: [1, 1.08, 1],
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 1.2
        }}
      >
        Aurelius
      </motion.span>
      
      {/* Smooth looping underline sweep */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-accent-orange to-transparent"
        animate={{
          x: ["-120%", "120%"],
          width: ["60%", "60%"],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 2.5
        }}
      />
      
      {/* Secondary subtle glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-orange/5 to-transparent rounded-lg"
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 3
        }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute -top-2 -right-2 w-1 h-1 bg-accent-orange rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div
        className="absolute -top-1 -left-1 w-0.5 h-0.5 bg-accent-orange rounded-full"
        animate={{
          y: [0, -6, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1, 0]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.8
        }}
      />
    </motion.span>
  );
}