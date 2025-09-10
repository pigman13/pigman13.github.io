// File: app/about/page.tsx
// Purpose: Dedicated about page with comprehensive professional background and philosophy.
// Contains: Professional journey, technical philosophy, achievements, values, and personal insights.
// Core functionalities: Showcases expertise, demonstrates thought leadership, and builds professional credibility.

import About from "../../components/about";
import Nav from "../../components/nav";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <About />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-steel">
        © 2025 Ivan G. Aurelius
      </footer>
    </>
  );
}
