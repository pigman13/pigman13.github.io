"use client";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import HoverCard from "./animations/HoverCard";
import StaggerContainer from "./animations/StaggerContainer";
import ClientOnly from "./animations/ClientOnly";
import Icon, { Icons } from "./Icon";

/**
 * components/skills.tsx
 * 
 * Purpose: Displays comprehensive technical skills and expertise in an organized, visually appealing format.
 * Contains: Skill categories, individual technologies, proficiency levels, and relevant experience.
 * Core functionalities: Categorizes skills by domain, shows proficiency indicators, and highlights key technologies.
 */

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Icons.Robot />,
      skills: [
        { name: "LLM Orchestration", level: 95, description: "LangChain, RAG pipelines, agent coordination" },
        { name: "Retrieval Augmented Generation", level: 90, description: "Vector databases, similarity search, context management" },
        { name: "PyTorch/TensorFlow", level: 88, description: "Deep learning, neural networks, model development" },
        { name: "Computer Vision", level: 85, description: "Image processing, OpenCV, signature verification" },
        { name: "NLP", level: 90, description: "Text processing, sentiment analysis, chatbots" },
        { name: "Graph Neural Networks", level: 80, description: "Anomaly detection, transaction monitoring" },
        { name: "Reinforcement Learning", level: 75, description: "Trading algorithms, optimization" },
        { name: "MLOps", level: 85, description: "Model deployment, monitoring, CI/CD" },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      icon: <Icons.Chart />,
      skills: [
        { name: "Text-to-SQL", level: 90, description: "Natural language to database queries" },
        { name: "ETL", level: 85, description: "Data extraction, transformation, loading" },
        { name: "Data Modeling", level: 80, description: "Database design, schema optimization" },
        { name: "SQL/NoSQL", level: 90, description: "PostgreSQL, MongoDB, query optimization" },
        { name: "Superset", level: 75, description: "Data visualization, business intelligence" },
        { name: "Dashboards", level: 80, description: "Real-time monitoring, KPI tracking" },
        { name: "Data Visualization", level: 85, description: "Charts, graphs, interactive displays" },
        { name: "Pandas/NumPy", level: 90, description: "Data manipulation, analysis, preprocessing" },
      ],
    },
    {
      title: "Backend & DevOps",
      icon: <Icons.Settings />,
      skills: [
        { name: "Python", level: 95, description: "FastAPI, Flask, async programming" },
        { name: "Flutter", level: 80, description: "Mobile development, cross-platform" },
        { name: "Java", level: 75, description: "Enterprise applications, Spring framework" },
        { name: "FastAPI", level: 90, description: "High-performance APIs, async support" },
        { name: "Docker", level: 85, description: "Containerization, microservices" },
        { name: "Kubernetes", level: 80, description: "Orchestration, scaling, deployment" },
        { name: "CI/CD", level: 85, description: "Automated deployment, testing pipelines" },
        { name: "Linux", level: 90, description: "System administration, server management" },
      ],
    },
    {
      title: "Hardware & Automation",
      icon: <Icons.Hardware />,
      skills: [
        { name: "PLC Programming", level: 85, description: "Industrial automation, BMW assembly line" },
        { name: "Robotics", level: 80, description: "Automation roadmaps, robotic systems" },
        { name: "Embedded C", level: 75, description: "Microcontroller programming, IoT devices" },
        { name: "CAD", level: 80, description: "Computer-aided design, technical drawings" },
        { name: "Edge AI Cameras", level: 85, description: "Real-time computer vision, kitchen analytics" },
        { name: "IoT", level: 80, description: "Internet of Things, connected devices" },
        { name: "Automation", level: 90, description: "Process optimization, workflow automation" },
        { name: "Manufacturing", level: 85, description: "Assembly line automation, BMW experience" },
      ],
    },
    {
      title: "Product & Strategy",
      icon: <Icons.Lightbulb />,
      skills: [
        { name: "Product Roadmapping", level: 85, description: "Strategic planning, feature prioritization" },
        { name: "Go To Market", level: 80, description: "Market entry strategies, launch planning" },
        { name: "Creative Ideation", level: 90, description: "Innovation, problem-solving, brainstorming" },
        { name: "Market Research", level: 80, description: "User research, competitive analysis" },
        { name: "Technical Leadership", level: 85, description: "Team guidance, architecture decisions" },
        { name: "Stakeholder Communication", level: 90, description: "C-suite presentations, client relations" },
        { name: "Agile/Kanban", level: 85, description: "Project management, iterative development" },
        { name: "Mentorship", level: 80, description: "Team development, knowledge sharing" },
      ],
    },
    {
      title: "Execution & Delivery",
      icon: <Icons.Rocket />,
      skills: [
        { name: "Rapid Prototyping", level: 95, description: "Quick MVP development, 2-week deployments" },
        { name: "Prioritization", level: 90, description: "Task management, resource allocation" },
        { name: "Context Switching", level: 85, description: "Multi-project management, diverse domains" },
        { name: "High Velocity Delivery", level: 90, description: "Fast execution, quick turnaround" },
        { name: "Full-Stack Development", level: 90, description: "End-to-end application development" },
        { name: "System Architecture", level: 85, description: "Scalable design, technical planning" },
        { name: "Large-Scale Deployment", level: 80, description: "Production systems, enterprise rollout" },
        { name: "Revenue Generation", level: 85, description: "Business impact, measurable results" },
      ],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-20 bg-accent-patch-2 bg-accent-patch-2-dense bg-accent-patch-2-dense-extra1 bg-accent-patch-2-dense-extra2">
      <div className="relative z-10">
        <FadeIn direction="up" className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Technical Expertise</h2>
        <p className="text-xl text-steel max-w-3xl mx-auto font-medium">
          <strong className="font-bold">Comprehensive skills</strong> across <strong className="font-black text-accent-orange">AI/ML</strong>, <strong className="font-bold">mechatronics</strong>, <strong className="font-bold">full-stack development</strong>, and <strong className="font-bold">hardware integration</strong>, 
          with <strong className="font-black text-accent-orange">deep expertise</strong> in <strong className="font-bold">production-grade system architecture</strong> and <strong className="font-bold">rapid prototyping</strong>.
        </p>
      </FadeIn>

      <StaggerContainer 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        staggerDelay={0.15}
        direction="up"
      >
        {skillCategories.map((category, categoryIndex) => (
          <HoverCard 
            key={category.title}
            delay={categoryIndex * 0.15}
            scale={1.02}
            className="group"
          >
            <motion.div className="panel p-6 h-full">
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (categoryIndex * 0.15) + 0.2 }}
              >
                <Icon size="lg" className="mr-3">
                  {category.icon}
                </Icon>
                <h3 className="text-xl font-black">{category.title}</h3>
              </motion.div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: (categoryIndex * 0.15) + (skillIndex * 0.05) + 0.3,
                      duration: 0.4
                    }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm group-hover/skill:text-accent-orange transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-steel">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                      <ClientOnly
                        fallback={
                          <div 
                            className="h-full bg-accent-orange rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        }
                      >
                        <motion.div
                          className="h-full bg-accent-orange rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: (categoryIndex * 0.15) + (skillIndex * 0.05) + 0.5,
                            duration: 1.0,
                            ease: [0.25, 0.25, 0.25, 0.75]
                          }}
                        />
                      </ClientOnly>
                    </div>
                    
                    <motion.p 
                      className="text-xs text-steel group-hover/skill:text-accent-orange transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        delay: (categoryIndex * 0.15) + (skillIndex * 0.05) + 0.6,
                        duration: 0.3
                      }}
                    >
                      {skill.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </HoverCard>
        ))}
      </StaggerContainer>

      <FadeIn delay={1.2} direction="up" className="mt-16 text-center">
        <motion.div 
          className="panel p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Specialized Expertise
          </motion.h3>
          
          <StaggerContainer 
            className="grid md:grid-cols-2 gap-8 text-left"
            staggerDelay={0.1}
            direction="up"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <h4 className="font-semibold text-accent-orange mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-3"></span>
                AI/ML & Hardware Integration
              </h4>
              <ul className="space-y-3 text-sm text-steel">
                {[
                  "Retrieval-Augmented Generation (RAG) Systems",
                  "Multi-Agent AI Workflows with CrewAI", 
                  "Computer Vision & Edge AI Applications",
                  "PLC Programming & Industrial Automation",
                  "Production ML Pipeline Architecture",
                  "Hardware-Software Integration"
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + (index * 0.1), duration: 0.3 }}
                  >
                    <span className="text-accent-orange mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <h4 className="font-semibold text-accent-orange mb-4 flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-3"></span>
                Full-Stack & Product Development
              </h4>
              <ul className="space-y-3 text-sm text-steel">
                {[
                  "End-to-End Application Development",
                  "Rapid Prototyping & MVP Development",
                  "Microservices Architecture Design",
                  "Real-time Data Processing Systems",
                  "Performance Optimization & Monitoring",
                  "Product Strategy & Technical Leadership"
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + (index * 0.1), duration: 0.3 }}
                  >
                    <span className="text-accent-orange mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerContainer>
        </motion.div>
      </FadeIn>
      </div>
    </section>
  );
}
