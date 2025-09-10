"use client";
import { useEffect, useState } from "react";

/**
 * Sparkles
 * Decorative sparkles used behind headings.
 * - count: number of sparkles
 */
export default function Sparkles({ count = 6 }: { count?: number }) {
  const [sparks, setSparks] = useState<Array<{
    id: number;
    left: number;
    top: number;
    size: number;
    delay: number;
  }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate sparks only on client side to prevent hydration mismatch
    setSparks(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 3000,
      }))
    );
  }, [count]);

  if (!mounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <div className="pointer-events-none absolute inset-0">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-accent-orange opacity-60 blur-sm animate-fade-in-out"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}


