"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Icon, { Icons } from "./Icon";
import AnimatedName from "./animations/AnimatedName";

export default function Nav() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 backdrop-blur-xs bg-black/10 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-black tracking-wide flex items-center">
            <AnimatedName className="text-2xl font-black relative" />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className="hover:text-accent-orange transition-colors text-sm font-medium">About</Link>
            <Link href="#skills" className="hover:text-accent-orange transition-colors text-sm font-medium">Skills</Link>
            <Link href="#projects" className="hover:text-accent-orange transition-colors text-sm font-medium">Projects</Link>
            <Link href="#experience" className="hover:text-accent-orange transition-colors text-sm font-medium">Experience</Link>
            <Link href="#contact" className="hover:text-accent-orange transition-colors text-sm font-medium">Contact</Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xs bg-black/10 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-black tracking-wide flex items-center">
          <AnimatedName className="text-2xl font-black relative" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="hover:text-accent-orange transition-colors text-sm font-medium">About</Link>
          <Link href="#skills" className="hover:text-accent-orange transition-colors text-sm font-medium">Skills</Link>
          <Link href="#projects" className="hover:text-accent-orange transition-colors text-sm font-medium">Projects</Link>
          <Link href="#experience" className="hover:text-accent-orange transition-colors text-sm font-medium">Experience</Link>
          <Link href="#contact" className="hover:text-accent-orange transition-colors text-sm font-medium">Contact</Link>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-3 rounded-md border border-border hover:shadow-ember transition-all duration-300 flex items-center justify-center"
          >
            <Icon size="lg" className="text-accent-orange">
              {theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
            </Icon>
          </button>
          <a 
            href="https://github.com/pigman13" 
            aria-label="GitHub"
            className="p-3 rounded-md border border-border hover:shadow-ember transition-all duration-300 flex items-center justify-center"
          >
            <Icon size="lg" className="text-accent-orange">
              <Icons.Github />
            </Icon>
          </a>
          <a 
            href="mailto:ivan.gadingaurelius@gmail.com" 
            aria-label="Email"
            className="p-3 rounded-md border border-border hover:shadow-ember transition-all duration-300 flex items-center justify-center"
          >
            <Icon size="lg" className="text-accent-orange">
              <Icons.Mail />
            </Icon>
          </a>
        </nav>
      </div>
    </header>
  );
}