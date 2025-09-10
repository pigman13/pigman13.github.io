"use client";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import HoverCard from "./animations/HoverCard";
import StaggerContainer from "./animations/StaggerContainer";
import Icon, { Icons } from "./Icon";

/**
 * components/contact.tsx
 * 
 * Purpose: Provides comprehensive contact information and professional engagement options.
 * Contains: Contact details, availability status, service offerings, and call-to-action elements.
 * Core functionalities: Facilitates professional communication, showcases services, and encourages collaboration.
 */

export default function Contact() {
  const services = [
    {
      title: "AI System Architecture",
      description: "Design and implement <strong>production-grade AI systems</strong> using <strong>LangChain, CrewAI</strong>, and <strong>modern ML frameworks</strong>",
      icon: <Icons.Settings />
    },
    {
      title: "RAG Implementation",
      description: "Build <strong>sophisticated retrieval-augmented generation systems</strong> for <strong>document processing</strong> and <strong>knowledge management</strong>",
      icon: <Icons.Search />
    },
    {
      title: "Multi-Agent Workflows",
      description: "Create <strong>intelligent agent orchestrations</strong> using <strong>CrewAI</strong> for <strong>complex business process automation</strong>",
      icon: <Icons.Robot />
    },
    {
      title: "Full-Stack Development",
      description: "Develop <strong>end-to-end applications</strong> with <strong>React, Node.js, and Python</strong> for <strong>seamless user experiences</strong>",
      icon: <Icons.Code />
    },
    {
      title: "MLOps & Deployment",
      description: "Establish <strong>robust MLOps pipelines</strong> with <strong>monitoring, versioning</strong>, and <strong>automated deployment</strong>",
      icon: <Icons.Settings />
    },
    {
      title: "Technical Consulting",
      description: "Provide <strong>strategic guidance</strong> on <strong>AI adoption</strong>, <strong>technology selection</strong>, and <strong>architectural decisions</strong>",
      icon: <Icons.Lightbulb />
    }
  ];

  const contactMethods = [
    {
      method: "Email",
      value: "ivan.gadingaurelius@gmail.com",
      link: "mailto:ivan.gadingaurelius@gmail.com",
      description: "Primary contact for project inquiries and collaboration",
      icon: <Icons.Mail />
    },
    {
      method: "LinkedIn",
      value: "linkedin.com/in/ivangadingaurelius",
      link: "https://linkedin.com/in/ivangadingaurelius",
      description: "Professional network and project updates",
      icon: <Icons.Linkedin />
    },
    {
      method: "GitHub",
      value: "github.com/pigman13",
      link: "https://github.com/pigman13",
      description: "Open-source contributions and code samples",
      icon: <Icons.Github />
    },
    {
      method: "Location",
      value: "Jakarta, Indonesia",
      link: null,
      description: "Available for remote and on-site collaboration",
      icon: <Icons.MapPin />
    }
  ];

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 bg-accent-patch-1">
      <div className="relative z-10">
        <FadeIn direction="up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Build Something <span className="text-accent-orange">Extraordinary</span></h2>
        <p className="text-xl text-steel max-w-3xl mx-auto leading-relaxed font-medium">
          Ready to transform your business with <strong className="font-black text-accent-orange">cutting-edge AI solutions</strong>? I specialize in building <strong className="font-bold">production-grade systems</strong> that deliver <strong className="font-bold">real value</strong>. Whether you need a <strong className="font-bold">sophisticated RAG system</strong>, <strong className="font-bold">multi-agent workflows</strong>, 
          or <strong className="font-bold">complete AI-powered applications</strong>, let's discuss how we can achieve your goals together.
        </p>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <FadeIn delay={0.2} direction="left" className="space-y-6">
          <h3 className="text-2xl font-black mb-6">Services & Expertise</h3>
          <StaggerContainer 
            className="grid md:grid-cols-2 gap-4"
            staggerDelay={0.1}
            direction="up"
          >
            {services.map((service, index) => (
              <HoverCard 
                key={service.title}
                delay={0.4 + (index * 0.1)}
                scale={1.02}
                className="group"
              >
                <motion.div 
                  className="panel p-4 h-full group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start space-x-3">
                    <motion.div 
                      className="group-hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon size="md">
                        {service.icon}
                      </Icon>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 group-hover:text-accent-orange transition-colors">
                        {service.title}
                      </h4>
                      <p 
                        className="text-xs text-steel group-hover:text-accent-orange transition-colors"
                        dangerouslySetInnerHTML={{ __html: service.description }}
                      />
                    </div>
                  </div>
                </motion.div>
              </HoverCard>
            ))}
          </StaggerContainer>
        </FadeIn>

        <FadeIn delay={0.4} direction="right" className="space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <StaggerContainer 
            className="space-y-4"
            staggerDelay={0.1}
            direction="up"
          >
            {contactMethods.map((contact, index) => (
              <HoverCard 
                key={contact.method}
                delay={0.6 + (index * 0.1)}
                scale={1.01}
                className="group"
              >
                <motion.div 
                  className="panel p-4 group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start space-x-3">
                    <motion.div 
                      className="group-hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon size="md">
                        {contact.icon}
                      </Icon>
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-accent-orange transition-colors">
                        {contact.method}
                      </h4>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-accent-orange hover:text-accent-orange transition-colors text-sm group-hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-sm text-steel font-medium">{contact.value}</span>
                      )}
                      <p className="text-xs text-steel mt-1 group-hover:text-accent-orange transition-colors font-medium">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </HoverCard>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>

      <FadeIn delay={0.8} direction="up" className="text-center">
        <motion.div 
          className="panel p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Ready to Start Your AI Journey?
          </motion.h3>
          
          <motion.p 
            className="text-lg text-steel mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            I'm currently available for new projects and collaborations. Whether you're looking to implement 
            AI solutions, optimize existing systems, or explore new possibilities, I'd love to hear about your vision.
          </motion.p>
          
          <StaggerContainer 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            staggerDelay={0.1}
            direction="up"
          >
            <motion.a
              href="mailto:ivan.gadingaurelius@gmail.com?subject=AI Project Inquiry&body=Hi Ivan, I'd like to discuss a potential AI project..."
              className="px-8 py-4 rounded-lg bg-accent-orange text-white font-bold hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              className="px-8 py-4 rounded-lg border border-border hover:shadow-neon transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
            
            <motion.a
              href="/about"
              className="px-8 py-4 rounded-lg panel hover:shadow-ember transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              About Me
            </motion.a>
            
            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-lg panel hover:shadow-ember transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </StaggerContainer>
          
          <motion.p 
            className="text-sm text-steel mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <strong>Response time: Usually within 24 hours</strong> • <strong>Available for remote and on-site collaboration</strong>
          </motion.p>
        </motion.div>
      </FadeIn>
      </div>
    </section>
  );
}