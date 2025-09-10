"use client";
import { motion } from "framer-motion";
import TypewriterHeading from "./TypewriterHeading";
import Sparkles from "./Sparkles";
import FadeIn from "./animations/FadeIn";
import TextReveal from "./animations/TextReveal";
import ClientOnly from "./animations/ClientOnly";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 stripe-45 opacity-20 pointer-events-none" />
      <div className="absolute -inset-x-40 -top-40 h-[320px] stripe-orange blur-2xl opacity-15" />
      <ClientOnly>
        <Sparkles />
      </ClientOnly>
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="relative z-10">
          <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black tracking-tight"
        >
          <ClientOnly
            fallback={
              <span>Mechatronics & AI Engineer</span>
            }
          >
            <TypewriterHeading
              texts={[
                "Mechatronics & AI Engineer",
                "Full-Stack Product Builder",
                "Hardware & Software Integration",
                "Enterprise AI Solutions",
                "End-to-End System Architect",
              ]}
              speed={35}
              pause={1600}
            />
          </ClientOnly>
        </motion.h1>
        <FadeIn delay={0.3} direction="up" className="mt-6 max-w-3xl">
          <TextReveal 
            className="text-xl text-steel leading-relaxed font-medium"
            delay={0.5}
            direction="up"
            splitBy="word"
          >
            <strong className="font-black text-accent-orange">Versatile engineer</strong> combining <strong className="font-bold">mechatronics expertise</strong> with <strong className="font-bold">AI and full-stack development</strong>. From <strong className="font-bold">robotics and PLC automation</strong> to <strong className="font-bold">enterprise AI systems</strong>, I turn complex ideas into <strong className="font-black text-accent-orange">production-grade solutions</strong> across hardware, software, and data engineering domains. <a href="/about" className="text-accent-orange hover:underline font-bold">Learn more about my journey →</a>
          </TextReveal>
        </FadeIn>
        <FadeIn delay={0.7} direction="up" className="mt-6">
          <motion.div 
            className="flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {["Mechatronics", "AI/ML", "Full-Stack", "Robotics", "Python", "PLC"].map((tech, index) => (
              <motion.span
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }
                }}
                className="px-4 py-2 rounded-full text-sm font-bold border-2 bg-accent-orange text-white border-accent-orange"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>
        <FadeIn delay={1.0} direction="up" className="mt-10">
          <motion.div 
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.1
                }
              }
            }}
          >
            <motion.a 
              href="/about" 
              className="px-6 py-4 rounded-lg bg-accent-orange text-white font-bold text-lg hover:bg-accent-orange/90 transition-all duration-300 shadow-solid"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              About Me
            </motion.a>
            <motion.a 
              href="#projects" 
              className="px-6 py-4 rounded-lg border-2 border-accent-orange text-accent-orange font-bold text-lg hover:bg-accent-orange hover:text-white transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              View Projects
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              className="px-6 py-4 rounded-lg border-2 border-accent-orange text-accent-orange font-bold text-lg hover:bg-accent-orange hover:text-white transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </FadeIn>
        </div>
      </div>
    </section>
  );
}