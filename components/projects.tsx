"use client";
import { motion } from "framer-motion";
import { projects } from "../lib/projectsData";
import FadeIn from "./animations/FadeIn";
import HoverCard from "./animations/HoverCard";
import StaggerContainer from "./animations/StaggerContainer";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 bg-accent-patch-3 bg-accent-patch-3-dense bg-accent-patch-3-dense-extra1 bg-accent-patch-3-dense-extra2">
      <div className="relative z-10">
        <FadeIn direction="up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Projects</h2>
        <p className="text-xl text-steel max-w-3xl mx-auto font-medium">
          A showcase of my <strong className="font-black text-accent-orange">diverse engineering projects</strong> spanning <strong className="font-bold">AI/ML</strong>, <strong className="font-bold">mechatronics</strong>, 
          and <strong className="font-bold">full-stack development</strong>, each delivering <strong className="font-bold">real-world impact</strong> and <strong className="font-bold">measurable results</strong>.
        </p>
      </FadeIn>
      
      <StaggerContainer 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        staggerDelay={0.1}
        direction="up"
      >
        {projects.map((project, index) => (
          <HoverCard 
            key={project.slug}
            delay={index * 0.1}
            scale={1.03}
            className="group"
          >
            <motion.a 
              href={`/projects/${project.slug}`} 
              className="panel p-6 hover:shadow-neon transition-all duration-300 block h-full"
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-sm bg-accent-orange text-white px-3 py-1 rounded-full font-bold mb-3 inline-block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.1) + 0.2 }}
              >
                {project.chip}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-black mb-3 group-hover:text-accent-orange transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index * 0.1) + 0.3 }}
              >
                {project.title}
              </motion.h3>
              
              <motion.p 
                className="text-steel text-sm leading-relaxed font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index * 0.1) + 0.4 }}
              >
                {project.short}
              </motion.p>
              
              <motion.div 
                className="mt-4 flex items-center text-accent-orange text-sm font-bold group-hover:translate-x-1 transition-transform duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (index * 0.1) + 0.5 }}
              >
                Learn more →
              </motion.div>
            </motion.a>
          </HoverCard>
        ))}
      </StaggerContainer>
      </div>
    </section>
  );
}