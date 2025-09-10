export default function Experience() {
  const roles = [
    {
      company: "PT. Berca Hardayaperkasa",
      title: "Artificial Intelligence Engineer",
      period: "Oct 2024 – Present",
      bullets: [
        "PRITA Product AI Assistant: Designed text-to-SQL and agentic-RAG pipeline leveraging five years of sales data, achieving 80% reduction in data-hunting time and 15% lift in qualified leads with 85% org-wide adoption.",
        "SALLY v1 → PRITA v2: Built MVP chatbot in 4 weeks, then evolved into enterprise-grade analytics assistant, boosting daily active users 3×.",
        "LittleLessHeavy.com: Independently engineered AI-therapy platform using LangChain, FastAPI, and vector-memory sentiment analysis with client-side encryption for HIPAA-style privacy.",
        "RAGnn Anomaly Detection: Deployed retrieval-augmented GNN tracking 1M+ transactions/day at 92% precision, cutting manual reviews 60%.",
        "OpusEcho: Built and deployed offline mobile app meeting transcriber & summarizer in 2 weeks.",
      ],
    },
    {
      company: "Freelance",
      title: "Machine Learning & Automation Engineer",
      period: "2021 – 2024",
      bullets: [
        "Indomaret Advisory: Presented AI-driven operations to C-suite executives across 4 strategy sessions.",
        "Edge-AI Cameras for Restaurants: Delivered real-time kitchen analytics that markedly increased service speed.",
        "Custom ML Prototypes for SMBs: Built models for forecasting, image recognition, and workflow automation.",
        "Agentic Financial Tracker (ongoing): Conversational spend analysis for individuals & SMEs; beta pilots show users recovering 12% in monthly spending leaks.",
        "ML Crypto Trading Bots: Back-tested to +38% ROI versus HODL; deployed on AWS with automated trading strategies.",
        "Predictive Breakout Equation: Engineered model delivering up to 70% profit on live trades.",
        "Vision-Based Signature Verification: Achieved 95%+ accuracy, slashing document processing time.",
        "Chatbot-Powered Data Entry: Compressed 3-month manual cycle into 11 hours via automated extraction.",
      ],
    },
    {
      company: "PT. Gaya Motor (BMW Assembly Line)",
      title: "VPS Automation Team",
      period: "Oct 2023 – Dec 2023",
      bullets: [
        "Proposed robotics & PLC automation roadmap, earning executive approval for future rollout.",
        "Translated BMW technical documentation (German → Indonesian) with full spec fidelity.",
        "Built Excel auto-filter tool, trimming list-sorting effort by 30% across multi-sheet BOMs.",
      ],
    },
  ];
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 bg-accent-patch-4 bg-accent-patch-4-dense bg-accent-patch-4-dense-extra1 bg-accent-patch-4-dense-extra2">
      <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-black mb-8">Experience</h2>
      <ol className="relative border-l border-border">
        {roles.map((r) => (
          <li key={r.company} className="mb-10 ml-6">
            <div className="absolute -left-3 w-6 h-6 rounded-full bg-accent-orange shadow-ember" />
            <h3 className="font-black text-lg">{r.title} · <span className="text-accent-orange">{r.company}</span></h3>
            <span className="text-steel text-sm font-medium">{r.period}</span>
            <ul className="mt-2 list-disc ml-6 text-steel font-medium">
              {r.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}