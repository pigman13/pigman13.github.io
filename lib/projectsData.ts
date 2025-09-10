/**
 * lib/projectsData.ts
 *
 * Purpose: central project dataset used by the projects list and project detail pages.
 * Contains lightweight, resume-inspired project entries and a helper to look up by slug.
 */

export type Project = {
  slug: string;
  title: string;
  chip: string;
  short: string;
  overview: string;
  impact: string[];
  tech: string[];
  timeline?: string;
};

export const projects: Project[] = [
  {
    slug: "prita-product-ai-assistant",
    title: "PRITA — Product AI Assistant",
    chip: "Enterprise · RAG · Text-to-SQL",
    short: "Agentic RAG + text-to-SQL over sales DB; cut hunting time 80%, achieved 85% org-wide adoption.",
    overview:
      "PRITA is an enterprise-grade product assistant that leverages five years of sales data through a sophisticated text-to-SQL and agentic RAG pipeline. The system enables sales teams to quickly access and analyze complex sales data through natural language queries, dramatically reducing data discovery time while improving lead qualification accuracy.",
    impact: [
      "Achieved 80% reduction in data-hunting time for sales teams",
      "Increased qualified leads by 15% through improved targeting",
      "Achieved 85% organization-wide adoption across sales teams",
      "Boosted daily active users 3× from SALLY v1 to PRITA v2",
    ],
    tech: ["LangChain RAG", "Text-to-SQL", "FastAPI", "PostgreSQL", "Vector Memory", "Sentiment Analysis"],
    timeline: "Oct 2024 — Present",
  },
  {
    slug: "littlelessheavy-ai-therapy",
    title: "LittleLessHeavy.com — AI Therapy Platform",
    chip: "Web Platform · Mental Health · Privacy",
    short: "AI therapy platform with LangChain, FastAPI, and client-side encryption for HIPAA-style privacy.",
    overview:
      "LittleLessHeavy.com is an independently engineered AI therapy platform that provides accessible mental health support through intelligent conversational agents. The platform uses LangChain for conversation management, FastAPI for backend services, and implements client-side encryption to ensure HIPAA-style privacy while delivering empathetic, context-aware therapy sessions.",
    impact: [
      "Built complete platform independently with full-stack expertise",
      "Implemented HIPAA-style privacy through client-side encryption",
      "Enabled accessible mental health support through web platform",
      "Demonstrated end-to-end product development capabilities",
    ],
    tech: ["LangChain", "FastAPI", "Vector Memory", "Client-side Encryption", "React", "Python Backend"],
    timeline: "2022 — 2023",
  },
  {
    slug: "ragnn-anomaly-detection",
    title: "RAGnn — Anomaly Detection",
    chip: "Graph AI · Detection · High Volume",
    short: "Retrieval-augmented GNN tracking 1M+ transactions/day at 92% precision, cutting manual reviews 60%.",
    overview:
      "RAGnn is a sophisticated anomaly detection system that combines retrieval-augmented generation with graph neural networks to monitor high-volume transaction data in real-time. The system processes over 1 million transactions daily with high precision, significantly reducing the need for manual review while maintaining accuracy in fraud detection.",
    impact: [
      "Processes 1M+ transactions daily in real-time",
      "Achieved 92% precision in anomaly detection",
      "Reduced manual review workload by 60%",
      "Enabled scalable fraud detection for enterprise use",
    ],
    tech: ["Graph Neural Networks", "RAG", "PyTorch", "Real-time Processing", "High-volume Data", "Anomaly Detection"],
    timeline: "2023 — 2024",
  },
  {
    slug: "opusecho-offline-transcriber",
    title: "OpusEcho — Offline Meeting Transcriber",
    chip: "Mobile · Edge AI · Rapid Development",
    short: "Built and deployed offline mobile app meeting transcriber & summarizer in 2 weeks.",
    overview:
      "OpusEcho is a mobile application that provides offline meeting transcription and summarization capabilities. Built and deployed in just 2 weeks, the app demonstrates rapid prototyping skills and expertise in edge AI technologies, enabling users to capture and process meeting content without requiring internet connectivity.",
    impact: [
      "Delivered complete mobile app in 2 weeks",
      "Enabled offline meeting capture and processing",
      "Demonstrated rapid prototyping and deployment skills",
      "Showcased edge AI implementation capabilities",
    ],
    tech: ["Mobile Development", "Edge AI", "Offline Processing", "Speech Recognition", "Rapid Prototyping"],
    timeline: "2023 — 2024",
  },
  {
    slug: "ml-crypto-trading-bots",
    title: "ML Crypto Trading Bots",
    chip: "Quantitative Finance · ML · Backtesting",
    short: "Back-tested to +38% ROI versus HODL; deployed on AWS with automated trading strategies.",
    overview:
      "Developed machine learning-powered cryptocurrency trading bots that utilize advanced algorithms and backtesting frameworks to identify profitable trading opportunities. The system was rigorously back-tested and achieved significant returns compared to simple buy-and-hold strategies, demonstrating expertise in quantitative finance and ML model deployment.",
    impact: [
      "Achieved +38% ROI versus HODL strategy in backtesting",
      "Successfully deployed automated trading system on AWS",
      "Demonstrated expertise in quantitative finance and ML",
      "Implemented robust backtesting and risk management",
    ],
    tech: ["Machine Learning", "Python", "AWS", "Backtesting", "Quantitative Finance", "Automated Trading"],
    timeline: "Earlier 2024",
  },
  {
    slug: "predictive-breakout-equation",
    title: "Predictive Breakout Equation",
    chip: "Quantitative Finance · Live Trading",
    short: "Engineered model delivering up to 70% profit on live trades with advanced breakout detection.",
    overview:
      "A sophisticated quantitative trading model that identifies high-probability breakout patterns in financial markets. The system combines advanced mathematical modeling with machine learning techniques to generate trading signals, achieving significant profits in live trading scenarios while maintaining strict risk management protocols.",
    impact: [
      "Achieved up to 70% profit in live trading scenarios",
      "Developed advanced breakout pattern detection algorithms",
      "Implemented robust risk management and position sizing",
      "Demonstrated expertise in quantitative finance and live trading",
    ],
    tech: ["Quantitative Finance", "Machine Learning", "Live Trading", "Risk Management", "Python", "Mathematical Modeling"],
    timeline: "Earlier 2024",
  },
  {
    slug: "vision-signature-verification",
    title: "Vision-Based Signature Verification",
    chip: "Computer Vision · Document Processing",
    short: "Achieved 95%+ accuracy, slashing document processing time through automated signature verification.",
    overview:
      "A computer vision system that automatically verifies signatures on documents with high accuracy. The system uses advanced image processing and machine learning techniques to analyze signature patterns, significantly reducing manual verification time while maintaining high accuracy rates for document processing workflows.",
    impact: [
      "Achieved 95%+ accuracy in signature verification",
      "Dramatically reduced document processing time",
      "Automated manual signature verification processes",
      "Demonstrated expertise in computer vision and document processing",
    ],
    tech: ["Computer Vision", "Image Processing", "Machine Learning", "Document Processing", "Python", "OpenCV"],
    timeline: "Earlier 2024",
  },
  {
    slug: "chatbot-data-entry",
    title: "Chatbot-Powered Data Entry",
    chip: "Automation · NLP · Process Optimization",
    short: "Compressed 3-month manual cycle into 11 hours via automated extraction and data entry.",
    overview:
      "An intelligent chatbot system that automates data entry processes through natural language processing and automated extraction techniques. The system dramatically reduced manual data entry time by converting a 3-month manual cycle into just 11 hours of automated processing, demonstrating significant process optimization capabilities.",
    impact: [
      "Reduced 3-month manual cycle to 11 hours",
      "Achieved massive process optimization through automation",
      "Implemented NLP for intelligent data extraction",
      "Demonstrated expertise in process automation and NLP",
    ],
    tech: ["NLP", "Chatbot Development", "Process Automation", "Data Extraction", "Python", "Natural Language Processing"],
    timeline: "Earlier 2024",
  },
  {
    slug: "bmw-assembly-automation",
    title: "BMW Assembly Line Automation",
    chip: "Robotics · PLC · Manufacturing",
    short: "Proposed robotics & PLC automation roadmap, translated German technical docs, built Excel auto-filter tool.",
    overview:
      "Worked on BMW assembly line automation projects including proposing comprehensive robotics and PLC automation roadmaps, translating German technical documentation to Indonesian with full specification fidelity, and developing Excel automation tools that improved efficiency across multi-sheet BOM (Bill of Materials) management.",
    impact: [
      "Proposed robotics & PLC automation roadmap earning executive approval",
      "Translated BMW technical documentation (German → Indonesian) with full spec fidelity",
      "Built Excel auto-filter tool reducing list-sorting effort by 30%",
      "Demonstrated expertise in manufacturing automation and technical translation",
    ],
    tech: ["PLC Programming", "Robotics", "Manufacturing Automation", "Technical Translation", "Excel Automation", "CAD"],
    timeline: "Oct 2023 — Dec 2023",
  },
  {
    slug: "agentic-financial-tracker",
    title: "Agentic Financial Tracker",
    chip: "Conversational AI · FinTech · Beta",
    short: "Conversational spend analysis for individuals & SMEs; beta pilots show users recovering 12% in monthly spending leaks.",
    overview:
      "An ongoing conversational AI system that provides intelligent financial tracking and spend analysis for individuals and small-to-medium enterprises. The system uses natural language processing to help users understand their spending patterns and identify potential cost savings, with beta pilots demonstrating significant value recovery.",
    impact: [
      "Beta pilots show users recovering 12% in monthly spending leaks",
      "Enabled conversational financial analysis for individuals and SMEs",
      "Demonstrated ongoing product development and iteration",
      "Showcased expertise in conversational AI and FinTech applications",
    ],
    tech: ["Conversational AI", "FinTech", "NLP", "Financial Analysis", "Python", "Ongoing Development"],
    timeline: "Ongoing",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}


