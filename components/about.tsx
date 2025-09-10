"use client";
import { motion } from "framer-motion";
import Icon, { Icons } from "./Icon";

/**
 * components/about.tsx
 * 
 * Purpose: Provides detailed professional background, technical philosophy, and personal insights.
 * Contains: Professional summary, technical approach, achievements, and personal values.
 * Core functionalities: Showcases expertise, demonstrates thought leadership, and builds professional credibility.
 */

export default function About() {
  const achievements = [
    {
      number: "80%",
      label: "Data-Hunting Reduction",
      description: "Achieved through PRITA text-to-SQL and RAG pipeline"
    },
    {
      number: "1M+",
      label: "Transactions Monitored",
      description: "Daily processing with 92% precision in anomaly detection"
    },
    {
      number: "85%",
      label: "Org-Wide Adoption",
      description: "PRITA assistant adoption across sales teams"
    },
    {
      number: "2 Weeks",
      label: "Rapid Deployment",
      description: "OpusEcho mobile app built and deployed"
    }
  ];

  const values = [
    {
      title: "Production-First Approach",
      description: "Every AI solution is designed with scalability, reliability, and maintainability in mind. I believe in building systems that not only work in development but excel in production environments.",
      icon: <Icons.Rocket />
    },
    {
      title: "Human-Centered AI",
      description: "Technology should augment human capabilities, not replace them. I focus on creating AI systems that enhance productivity while maintaining human oversight and control.",
      icon: <Icons.Robot />
    },
    {
      title: "Continuous Learning",
      description: "The AI landscape evolves rapidly. I stay at the forefront by constantly exploring new technologies, contributing to open-source projects, and sharing knowledge with the community.",
      icon: <Icons.Lightbulb />
    },
    {
      title: "Privacy & Security",
      description: "Data privacy and security are non-negotiable. I implement robust security measures and privacy-preserving techniques in all AI systems, ensuring user trust and regulatory compliance.",
      icon: <Icons.Shield />
    }
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 bg-accent-patch-2">
      <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <a 
          href="/" 
          className="inline-flex items-center text-accent-orange hover:underline font-bold mb-4"
        >
          ← Back to Home
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6">About Me</h2>
        <p className="text-xl text-steel max-w-4xl mx-auto leading-relaxed font-medium">
          I'm a <strong className="font-black text-accent-orange">versatile Mechatronics & AI Engineer</strong> with a proven record of turning <strong className="font-bold">complex ideas</strong> into <strong className="font-bold">production-grade solutions</strong>. My expertise spans from <strong className="font-bold">robotics and PLC automation</strong> to <strong className="font-bold">enterprise AI systems</strong>, combining <strong className="font-bold">hardware engineering</strong> with <strong className="font-bold">full-stack development</strong> to deliver <strong className="font-black text-accent-orange">end-to-end solutions</strong> across diverse domains.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-black mb-4">Professional Journey</h3>
          <p className="text-steel leading-relaxed font-medium">
            My journey began with a <strong className="font-black text-accent-orange">B.Eng. in Mechatronics Engineering</strong> from IULI, graduating <strong className="font-bold">Magna Cum Laude with a 3.79 GPA</strong>. 
            This foundation in both mechanical and electrical engineering, combined with computer science, gave me a <strong className="font-bold">unique perspective</strong> on building <strong className="font-black text-accent-orange">integrated systems</strong> that bridge hardware and software.
          </p>
          <p className="text-steel leading-relaxed font-medium">
            At PT. Berca Hardayaperkasa, I've built <strong className="font-black text-accent-orange">enterprise AI solutions</strong> including <strong className="font-bold">PRITA (text-to-SQL and RAG pipeline)</strong> 
            and <strong className="font-bold">RAGnn (anomaly detection system)</strong>. My work spans from <strong className="font-bold">BMW assembly line automation</strong> to <strong className="font-bold">AI therapy platforms</strong>, 
            demonstrating <strong className="font-black text-accent-orange">versatility across manufacturing, AI, and full-stack development</strong>.
          </p>
          <p className="text-steel leading-relaxed font-medium">
            As a freelance engineer, I've delivered <strong className="font-bold">diverse projects</strong> from <strong className="font-bold">edge-AI cameras for restaurants</strong> to <strong className="font-bold">ML crypto trading bots</strong>, 
            always focusing on <strong className="font-black text-accent-orange">rapid prototyping</strong> and <strong className="font-bold">measurable business impact</strong>. My approach combines <strong className="font-bold">technical depth </strong> 
            with <strong className="font-bold">practical execution</strong> across multiple domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-black mb-4">Technical Philosophy</h3>
          <p className="text-steel leading-relaxed font-medium">
            I believe in the <strong className="font-black text-accent-orange">power of AI to augment human capabilities</strong> rather than replace them. My approach 
            combines <strong className="font-bold">deep technical expertise</strong> with a <strong className="font-bold">strong focus on user experience</strong>, ensuring that AI solutions 
            are not only <strong className="font-bold">powerful</strong> but also <strong className="font-bold">intuitive and reliable</strong>.
          </p>
          <p className="text-steel leading-relaxed font-medium">
            Every system I build is designed with <strong className="font-black text-accent-orange">production in mind</strong>—<strong className="font-bold">scalable, monitorable, and maintainable</strong>. 
            I emphasize <strong className="font-bold">comprehensive testing</strong>, <strong className="font-bold">robust error handling</strong>, and <strong className="font-bold">detailed monitoring</strong> to ensure systems 
            perform <strong className="font-bold">consistently under real-world conditions</strong>.
          </p>
          <p className="text-steel leading-relaxed font-medium">
            <strong className="font-black text-accent-orange">Privacy and security are fundamental</strong> to my work. I implement <strong className="font-bold">privacy-preserving techniques</strong> and 
            <strong className="font-bold">robust security measures</strong> to ensure <strong className="font-bold">user trust and regulatory compliance</strong> in all AI systems.
          </p>
          
          <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-accent-orange">
            <blockquote className="text-lg italic text-steel font-medium">
              "Faith without works is dead" - <strong className="font-bold text-accent-orange">James 2:26</strong>
            </blockquote>
            <p className="text-steel leading-relaxed font-medium mt-4">
              This principle drives my approach to engineering. <strong className="font-bold">Belief in technology's potential</strong> means nothing without 
              <strong className="font-black text-accent-orange"> delivering tangible results</strong>. Every project I undertake is an opportunity to 
              <strong className="font-bold"> transform vision into reality</strong>, <strong className="font-bold">concept into code</strong>, and 
              <strong className="font-bold"> ideas into impact</strong>.
            </p>
          </div>
          
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-black text-accent-orange">Engineering Principles</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="font-bold text-steel">Systems Thinking</h5>
                <p className="text-sm text-steel font-medium">
                  I approach every problem as part of a larger ecosystem, considering <strong>interdependencies</strong>, 
                  <strong> scalability</strong>, and <strong>long-term maintainability</strong> from day one.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="font-bold text-steel">Iterative Excellence</h5>
                <p className="text-sm text-steel font-medium">
                  <strong>Rapid prototyping</strong> followed by <strong>continuous refinement</strong>. I believe in 
                  <strong> shipping early</strong> and <strong>improving constantly</strong> based on real-world feedback.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="font-bold text-steel">Human-Centered Design</h5>
                <p className="text-sm text-steel font-medium">
                  Technology should <strong>enhance human potential</strong>, not complicate it. Every interface, 
                  every algorithm, every system is designed with the <strong>end user in mind</strong>.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="font-bold text-steel">Ethical Innovation</h5>
                <p className="text-sm text-steel font-medium">
                  <strong>Responsible AI development</strong> that considers <strong>bias mitigation</strong>, 
                  <strong>transparency</strong>, and <strong>societal impact</strong> at every decision point.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold text-center mb-8">Key Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
              className="panel p-6 text-center"
            >
              <div className="text-3xl font-bold text-accent-orange mb-2">{achievement.number}</div>
              <div className="font-semibold mb-2">{achievement.label}</div>
              <div className="text-sm text-steel">{achievement.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-8">Core Values</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (index * 0.1) }}
              className="panel p-6"
            >
              <div className="flex items-start space-x-4">
                <Icon size="lg" className="flex-shrink-0 mt-1">
                  {value.icon}
                </Icon>
                <div>
                  <h4 className="text-lg font-black mb-3">{value.title}</h4>
                  <p className="text-steel leading-relaxed font-medium">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-16 text-center"
      >
        <div className="panel p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-black mb-4">Let's Build Something <span className="text-accent-orange">Amazing</span></h3>
          <p className="text-lg text-steel mb-6 max-w-2xl mx-auto font-medium">
            I'm always excited to work on <strong className="font-black text-accent-orange">challenging AI projects</strong> that push the <strong className="font-bold">boundaries of what's possible</strong>. 
            Whether you need a <strong className="font-bold">sophisticated RAG system</strong>, a <strong className="font-bold">multi-agent workflow</strong>, or a <strong className="font-bold">complete AI-powered application</strong>, 
            I'm here to help bring your <strong className="font-black text-accent-orange">vision to life</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-accent-orange text-white font-bold hover:shadow-lg transition-all duration-300"
            >
              Start a Conversation
            </a>
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 rounded-lg border border-border hover:shadow-neon transition-all duration-300"
            >
              View Full Resume
            </a>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
