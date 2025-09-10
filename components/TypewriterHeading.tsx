"use client";
import { useEffect, useState } from "react";

/**
 * TypewriterHeading
 * A small typewriter effect for headings.
 *
 * Parameters
 * - texts: string[] - array of phrases to rotate
 * - speed?: number - typing speed ms per char
 * - pause?: number - pause between phrases
 *
 * Returns
 * - JSX.Element
 */
export default function TypewriterHeading({
  texts = [],
  speed = 40,
  pause = 1400,
}: {
  texts?: string[];
  speed?: number;
  pause?: number;
}) {
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let isMounted = true;
    let timeout: ReturnType<typeof setTimeout>;

    const run = async () => {
      const full = texts[idx % texts.length] ?? "";
      if (typing) {
        for (let i = 0; i <= full.length && isMounted; i++) {
          setDisplay(full.slice(0, i));
          await new Promise((r) => (timeout = setTimeout(r, speed)));
        }
        setTyping(false);
        timeout = setTimeout(() => {
          if (isMounted) setTyping(false);
        }, pause);
      } else {
        // delete
        for (let i = full.length; i >= 0 && isMounted; i--) {
          setDisplay(full.slice(0, i));
          await new Promise((r) => (timeout = setTimeout(r, speed / 2)));
        }
        if (isMounted) {
          setIdx((s) => s + 1);
          setTyping(true);
        }
      }
    };

    run();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [idx, typing, texts, speed, pause, mounted]);

  if (!mounted) {
    return (
      <span className="inline-block">
        {texts[0] || ""}
        <span className="animate-pulse inline-block w-1 bg-accent-orange align-middle ml-1" />
      </span>
    );
  }

  return (
    <span className="inline-block">
      {display}
      <span className="animate-pulse inline-block w-1 bg-accent-orange align-middle ml-1" />
    </span>
  );
}


