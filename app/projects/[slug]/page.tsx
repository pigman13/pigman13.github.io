"use client";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../lib/projectsData";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * app/projects/[slug]/page.tsx
 * 
 * Purpose: Displays detailed information for individual projects with enhanced visual presentation.
 * Contains: Project overview, impact metrics, technology stack, and technical details.
 * Core functionalities: Renders comprehensive project information with animations and professional styling.
 */

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="inline-flex items-center text-sm text-accent-cyan hover:underline mb-6">
          ← Back to Portfolio
        </Link>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium">
                  {project.chip}
                </span>
                <span className="text-steel text-sm">{project.timeline}</span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-steel leading-relaxed mb-8">{project.overview}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-accent-orange rounded-full mr-3"></span>
                  Project Impact
                </h3>
                <ul className="space-y-3">
                  {project.impact.map((impact, index) => (
                    <motion.li
                      key={impact}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                      className="flex items-start space-x-3"
                    >
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span className="text-steel">{impact}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></span>
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (index * 0.05) }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-orange/10 border border-accent-cyan/20 text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="panel p-6">
              <h4 className="text-lg font-semibold mb-4">Project Details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-steel">Category:</span>
                  <span className="ml-2 font-medium">{project.chip}</span>
                </div>
                <div>
                  <span className="text-steel">Timeline:</span>
                  <span className="ml-2 font-medium">{project.timeline}</span>
                </div>
                <div>
                  <span className="text-steel">Technologies:</span>
                  <span className="ml-2 font-medium">{project.tech.length} tools</span>
                </div>
                <div>
                  <span className="text-steel">Impact Points:</span>
                  <span className="ml-2 font-medium">{project.impact.length} achievements</span>
                </div>
              </div>
            </div>

            <div className="panel p-6">
              <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
              <ul className="space-y-2 text-sm text-steel">
                <li className="flex items-start space-x-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Production-grade AI system</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Real-world impact</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent-orange mt-1">•</span>
                  <span>Modern tech stack</span>
                </li>
              </ul>
            </div>

            <div className="panel p-6">
              <h4 className="text-lg font-semibold mb-4">Interested in This Project?</h4>
              <p className="text-sm text-steel mb-4">
                I'd love to discuss the technical details, architecture decisions, and lessons learned from this project.
              </p>
              <a
                href="mailto:ivan.gadingaurelius@gmail.com?subject=Project Inquiry: {project.title}"
                className="block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-orange text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                Let's Discuss
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16 panel p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Technical Deep Dive</h3>
          <p className="text-steel leading-relaxed mb-6">
            This project represents a comprehensive approach to building production-grade AI systems. 
            Every technical decision was made with scalability, maintainability, and real-world impact in mind.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-accent-cyan mb-3">Architecture Highlights</h4>
              <ul className="space-y-2 text-sm text-steel">
                <li>• Microservices-based design for scalability</li>
                <li>• Comprehensive monitoring and logging</li>
                <li>• Automated testing and deployment pipelines</li>
                <li>• Security-first development approach</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent-orange mb-3">Key Learnings</h4>
              <ul className="space-y-2 text-sm text-steel">
                <li>• Importance of user feedback in AI system design</li>
                <li>• Value of comprehensive monitoring in production</li>
                <li>• Benefits of modular, testable architecture</li>
                <li>• Critical role of documentation and knowledge sharing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


