"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * components/animations/ProgressBar.tsx
 * 
 * Purpose: Creates smooth animated progress bars for skill levels and metrics.
 * Contains: Animated progress bars with customizable colors and timing.
 * Core functionalities: Smooth width animations with professional easing curves.
 */

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  barClassName?: string;
  delay?: number;
  duration?: number;
  showPercentage?: boolean;
}

export default function ProgressBar({ 
  value, 
  max = 100,
  className = "",
  barClassName = "",
  delay = 0,
  duration = 1.2,
  showPercentage = true
}: ProgressBarProps) {
  const [mounted, setMounted] = useState(false);
  const percentage = (value / max) * 100;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-sm">Progress</span>
          {showPercentage && (
            <span className="text-xs text-steel">{Math.round(percentage)}%</span>
          )}
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div className="h-full bg-accent-orange rounded-full w-0" />
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">Progress</span>
        {showPercentage && (
          <span className="text-xs text-steel">{Math.round(percentage)}%</span>
        )}
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full bg-accent-orange rounded-full ${barClassName}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration, 
            delay,
            ease: [0.25, 0.25, 0.25, 0.75]
          }}
        />
      </div>
    </div>
  );
}
