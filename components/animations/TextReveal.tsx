"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

/**
 * components/animations/TextReveal.tsx
 * 
 * Purpose: Provides smooth text reveal animations for headings and content.
 * Contains: Character-by-character or word-by-word reveal animations.
 * Core functionalities: Professional text animations that draw attention without being flashy.
 */

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  splitBy?: "word" | "character";
}

export default function TextReveal({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  splitBy = "word"
}: TextRevealProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: -20, opacity: 0 },
    right: { x: 20, opacity: 0 }
  };

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  if (!mounted) {
    return <span className={className}>{children}</span>;
  }

  if (splitBy === "character") {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.02,
              delayChildren: delay
            }
          }
        }}
        className={className}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
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
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
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
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
