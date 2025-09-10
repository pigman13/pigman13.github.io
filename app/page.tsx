// File: app/page.tsx
// Purpose: Root page component composing the landing sections.
// Contains: imports for top-level components and the main layout.
// Note: Uses relative imports to avoid issues with path alias resolution in some environments.

import Nav from "../components/nav";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Experience from "../components/experience";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-steel">
        © 2025 Ivan G. Aurelius
      </footer>
    </>
  );
}