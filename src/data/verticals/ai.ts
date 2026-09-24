import {
  MessageSquare,
  Bot,
  Database,
  Eye,
  Mic,
  Sparkles,
  TrendingUp,
  GitBranch,
  Gem,
  Search,
  Blocks,
  Code2,
  Rocket,
} from "lucide-react";
import type { Vertical } from "./types";

export const ai: Vertical = {
  slug: "ai",
  name: "AI Integration",
  shortLabel: "AI",
  tagline: "Chatbots, agents, RAG systems and the infrastructure behind them.",
  practice: "AI Integration",

  hero: {
    headline: "We ship AI that actually works.",
    subcopy:
      "Async Labs is an AI integration studio — chatbots, agents, RAG systems and the infrastructure behind them, built for teams who want to ship, not just prototype.",
    marqueeItems: ["AI Agents", "RAG Systems", "LLM Integration", "AI Automation"],
  },

  services: [
    {
      slug: "ai-chatbots",
      name: "AI Chatbots",
      tag: "Core AI",
      icon: MessageSquare,
      gradient: "from-[#ff4b26] to-[#7a1200]",
      glow: "#ff8a63",
      image: "/images/gallery/chatbots.jpg",
      span: "tall",
      summary: "Conversational interfaces trained on your actual support workflows, not a generic FAQ bot.",
      description:
        "We build chatbots around how your team actually handles support — order status, account questions, troubleshooting — so they resolve real tickets instead of deflecting them. When a conversation needs a human, it hands off with full context, not a cold transfer.",
      capabilities: [
        "Multi-turn conversation memory",
        "Order & account system integration",
        "Context-aware human handoff",
        "Admin dashboard for escalation review",
        "Sentiment-aware routing",
      ],
      stack: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "Redis", "PostgreSQL", "WebSockets"],
    },
    {
      slug: "ai-agents-automation",
      name: "AI Agents & Automation",
      tag: "Technical Integration",
      icon: Bot,
      gradient: "from-[#3d3aff] to-[#0d0c33]",
      glow: "#8f8dff",
      image: "/images/gallery/agents.jpg",
      span: "wide",
      summary: "Multi-step, tool-using agents that complete real tasks — not just answer questions.",
      description:
        "Agents that call tools, chain multi-step reasoning, and complete tasks end to end — with a human approval step wherever the cost of a mistake is high. Built to recover from errors gracefully instead of failing silently mid-task.",
      capabilities: [
        "Tool & function calling",
        "Multi-agent orchestration",
        "Long-running task execution",
        "Human-in-the-loop approval steps",
        "Error recovery & retries",
      ],
      stack: ["LangGraph", "OpenAI function calling", "Anthropic tool use", "Temporal", "MCP"],
    },
    {
      slug: "rag-knowledge-systems",
      name: "RAG & Knowledge Systems",
      tag: "Technical Integration",
      icon: Database,
      gradient: "from-[#0fae66] to-[#062d1a]",
      glow: "#5fe0a3",
      image: "/images/gallery/rag.jpg",
      span: "wide",
      summary: "Retrieval-augmented systems that answer from your own data — and cite exactly where.",
      description:
        "A retrieval layer over your internal docs, wikis, and product data, tuned for chunking and re-ranking so answers actually improve with better retrieval, not just a bigger model. Every answer links back to its source passage so your team can verify instead of guess.",
      capabilities: [
        "Document ingestion pipelines",
        "Chunking & embedding strategy",
        "Source-linked, verifiable answers",
        "Incremental re-indexing",
        "Role-based document access",
      ],
      stack: ["Pinecone", "Weaviate", "Chroma", "LangChain", "OpenAI / Cohere embeddings"],
    },
    {
      slug: "computer-vision",
      name: "Computer Vision",
      tag: "Applied AI",
      icon: Eye,
      gradient: "from-[#e8c93a] to-[#5c4a06]",
      glow: "#ffe98a",
      image: "/images/gallery/vision.jpg",
      span: "tall",
      summary: "Image and video understanding — detection, recognition, and inspection at scale.",
      description:
        "Vision models built for a specific task — inspection, detection, OCR — rather than a generic image classifier bolted onto your product. We optimize for the accuracy and latency your use case actually needs, including running at the edge when the network can't be trusted.",
      capabilities: [
        "Object detection & classification",
        "OCR & document extraction",
        "Real-time video inference",
        "Anomaly & defect detection",
        "Edge deployment",
      ],
      stack: ["PyTorch", "YOLO", "OpenCV", "AWS Rekognition", "ONNX Runtime"],
    },
    {
      slug: "voice-assistants",
      name: "Voice Assistants",
      tag: "Core AI",
      icon: Mic,
      gradient: "from-[#c23aff] to-[#33063f]",
      glow: "#e29bff",
      image: "/images/gallery/voice.jpg",
      span: "tall",
      summary: "Speech-to-text and text-to-speech pipelines that power natural, low-latency voice interactions.",
      description:
        "Voice pipelines tuned for the round-trip latency that makes a conversation feel natural instead of laggy — transcription, turn-taking, and speech synthesis wired together as one system, not three separate APIs stitched at the edges.",
      capabilities: [
        "Real-time transcription",
        "Natural-sounding text-to-speech",
        "Voice activity detection",
        "Multi-language support",
        "Telephony integration",
      ],
      stack: ["Whisper", "ElevenLabs", "Deepgram", "Twilio", "WebRTC"],
    },
    {
      slug: "llm-integrations",
      name: "LLM Integrations",
      tag: "Technical Integration",
      icon: Sparkles,
      gradient: "from-[#3ac2ff] to-[#062b3f]",
      glow: "#8fe0ff",
      image: "/images/gallery/llm.jpg",
      span: "wide",
      summary: "Production-grade integration with the model providers that fit your latency, cost, and quality bar.",
      description:
        "The plumbing between your product and the model providers — routing, fallback, streaming, and cost controls — so a provider outage or price change doesn't take your AI feature down with it.",
      capabilities: [
        "Multi-provider routing & fallback",
        "Prompt versioning & evaluation",
        "Cost & usage monitoring",
        "Streaming responses",
        "Fine-tuning & prompt engineering",
      ],
      stack: ["OpenAI API", "Anthropic API", "Google Gemini", "LiteLLM", "LangSmith"],
    },
    {
      slug: "predictive-analytics",
      name: "Predictive Analytics",
      tag: "Applied AI",
      icon: TrendingUp,
      gradient: "from-[#ff9a3d] to-[#4a2200]",
      glow: "#ffcf9e",
      chart: true,
      span: "tall",
      summary: "Forecasting models that turn historical data into decisions you can act on.",
      description:
        "Forecasting and scoring models built on your historical data — demand, churn, risk — wired into a dashboard your team actually checks, with retraining scheduled before accuracy quietly degrades.",
      capabilities: [
        "Demand & trend forecasting",
        "Churn & risk scoring",
        "Anomaly detection on metrics",
        "Automated model retraining",
        "Dashboard & alerting integration",
      ],
      stack: ["XGBoost", "scikit-learn", "Prophet", "PostgreSQL", "Metabase"],
    },
    {
      slug: "data-pipelines",
      name: "Data Pipelines",
      tag: "Data Layer",
      icon: GitBranch,
      gradient: "from-[#4affb0] to-[#023a24]",
      glow: "#9dffd4",
      image: "/images/gallery/pipelines.jpg",
      span: "wide",
      summary: "The plumbing that keeps every AI feature fed with clean, current data.",
      description:
        "Ingestion, cleaning, and scheduling built as real infrastructure — not a cron job someone forgot about. This is what keeps your RAG index fresh and your models from drifting quietly out of date.",
      capabilities: [
        "Ingestion from APIs, databases & files",
        "Data cleaning & validation",
        "Scheduled & event-driven pipelines",
        "Vector index refresh",
        "Monitoring & alerting",
      ],
      stack: ["Airflow", "dbt", "Fivetran", "PostgreSQL", "AWS S3"],
    },
  ],

  serviceRows: [
    {
      name: "Core AI Services",
      desc: "Chatbots, copilots, voice assistants, document processing, AI-powered search.",
    },
    {
      name: "Applied AI",
      desc: "Recommendation systems, predictive analytics, computer vision, NLP, content generation.",
    },
    {
      name: "Technical AI Integration",
      desc: "LLM API integration, RAG systems, vector databases, fine-tuning, agent development, MCP.",
    },
    {
      name: "Data Layer",
      desc: "Data pipelines, AI-powered dashboards, and data cleaning & preparation.",
    },
  ],

  retainers: [
    {
      name: "Chatbot Training & Optimization",
      desc: "Retraining on new content and conversation review — chatbots need this to stay accurate.",
    },
    {
      name: "RAG & Knowledge Base",
      desc: "Keeping the knowledge base current and the vector index fresh as source documents change.",
    },
    {
      name: "LLM Ops & Cost Optimization",
      desc: "Usage monitoring, cost control, and model-version upgrades for systems running in production.",
    },
    {
      name: "AI Agent Monitoring",
      desc: "Reviewing agent decisions and fixing failure modes — agents need active supervision.",
    },
  ],

  testimonials: [
    {
      quote:
        "Async Labs didn't just bolt on a chatbot — they rebuilt our support flow around it. Resolution time dropped by half.",
      author: "Mira Halston",
      role: "COO, Nordwind",
    },
    {
      quote:
        "They understood our data before writing a line of code. The RAG system they shipped actually cites its sources correctly.",
      author: "Devon Cole",
      role: "Head of Product, Lumen Labs",
    },
    {
      quote:
        "Fast, technically sharp, and honest about what retainers we actually needed — not just what sells.",
      author: "Priya Nair",
      role: "Engineering Lead, Halcyon",
    },
  ],

  faq: [
    {
      q: "How long does it take to build an AI system?",
      a: "Timelines vary based on complexity. A chatbot or RAG MVP typically takes 4–8 weeks, while a full multi-agent platform may take 12–20 weeks. We provide a detailed timeline during the Discover phase.",
    },
    {
      q: "How much does AI integration cost?",
      a: "Costs depend on scope, data volume, and model choices. We offer transparent pricing after the initial consultation and provide detailed proposals before any commitment.",
    },
    {
      q: "Do I own the code and the models?",
      a: "Absolutely. You own 100% of the source code, prompts, and infrastructure we build for you. Full ownership transfers upon project completion.",
    },
    {
      q: "What about after launch — do models need maintenance?",
      a: "Yes. AI systems drift without upkeep — data changes, usage patterns shift, models go stale. Our Monthly Retainers cover exactly that, tailored to what your system actually needs.",
    },
    {
      q: "Can you work with our existing data and infrastructure?",
      a: "Every engagement starts with a data & systems audit. We integrate with what you already have rather than forcing a rebuild, unless the audit shows it's genuinely necessary.",
    },
    {
      q: "Which models and tools do you build with?",
      a: "We work with production-grade providers — OpenAI, Anthropic, and open-source models — plus vector databases like Pinecone and Weaviate, chosen for long-term maintainability rather than passing trends. The exact stack is matched to your project's scale and budget.",
    },
  ],

  process: [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      subtitle: "Requirements & Data Audit",
      description:
        "We start by understanding the business and the data you actually have, not just the brief, so the system we design solves the real problem.",
      points: [
        "Stakeholder interviews",
        "Data & systems audit",
        "Use-case prioritization",
        "Success metrics definition",
      ],
    },
    {
      number: "02",
      icon: Blocks,
      title: "Architect",
      subtitle: "System & Model Design",
      description:
        "Every model choice, retrieval path, and data flow is planned before a line of code is written, so the build never backtracks.",
      points: [
        "LLM & model selection",
        "RAG / agent architecture design",
        "Data pipeline planning",
        "Cost & latency budgeting",
      ],
    },
    {
      number: "03",
      icon: Database,
      title: "Foundation",
      subtitle: "Data & Infrastructure Setup",
      description:
        "The unglamorous work that decides whether the system survives real usage — vector stores, pipelines, auth — done first rather than last.",
      points: [
        "Vector database setup",
        "Data ingestion pipelines",
        "Authentication & security",
        "Cloud infrastructure",
      ],
    },
    {
      number: "04",
      icon: Code2,
      title: "Build & Integrate",
      subtitle: "Development & Integration",
      description:
        "Models, agents, and application code come together, third-party APIs get wired in, and everything gets evaluated before it ships.",
      points: [
        "Agent / chatbot development",
        "API & tool integration",
        "Prompt & retrieval tuning",
        "Evaluation & testing cycles",
      ],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Launch & Support",
      subtitle: "Deploy & Monitor",
      description:
        "Launch day is the start, not the finish. We stay on to monitor drift, retrain, and improve — that's what the retainers are for.",
      points: [
        "Production deployment",
        "Usage & cost monitoring",
        "Model retraining & tuning",
        "Ongoing feature work",
      ],
    },
  ],

  portfolio: [
    {
      id: "nordwind-concierge",
      title: "Nordwind Concierge",
      tagline: "AI support copilot that resolves tickets before they reach a human",
      category: "Core AI",
      description:
        "Nordwind Concierge is a chatbot rebuilt around Nordwind's actual support workflow rather than bolted on top of it. It handles order status, returns, and account questions directly, and hands off to a human with full context when it can't.",
      features: [
        "Conversational chatbot trained on support workflows",
        "Order & account system integration",
        "Context-aware human handoff",
        "Multi-turn conversation memory",
        "Admin dashboard for escalation review",
      ],
      techStack: ["Next.js", "OpenAI", "Anthropic", "PostgreSQL", "Redis"],
      isPrivate: false,
      status: "Live",
      metrics: ["Resolution time cut in half", "62% of tickets resolved without a human", "24/7 coverage"],
    },
    {
      id: "lumen-vault",
      title: "Lumen Vault",
      tagline: "RAG knowledge system that cites its sources correctly",
      category: "Technical Integration",
      description:
        "Lumen Vault is a retrieval-augmented copilot built on top of Lumen Labs' internal documentation and product data. Every answer links back to the exact source passage, so the team can verify instead of guess.",
      features: [
        "Retrieval-augmented generation over internal docs",
        "Vector database with incremental re-indexing",
        "Source-linked, verifiable answers",
        "Role-based access to sensitive documents",
        "Slack & API integration",
      ],
      techStack: ["Next.js", "Pinecone", "LangChain", "PostgreSQL", "AWS"],
      isPrivate: false,
      status: "In Development",
      metrics: ["Indexes 40K+ internal documents", "Sub-second retrieval", "Source citation on every answer"],
    },
    {
      id: "halcyon-sense",
      title: "Halcyon Sense",
      tagline: "Predictive maintenance and computer vision for a logistics fleet",
      category: "Applied AI",
      description:
        "A monitoring system for an enterprise logistics client that combines computer vision on depot cameras with predictive analytics on vehicle telemetry to flag maintenance issues before they cause downtime.",
      features: [
        "Computer vision inspection at depot cameras",
        "Predictive maintenance scoring from telemetry",
        "Real-time fleet health dashboard",
        "Automated alerting for at-risk vehicles",
        "Historical trend analysis",
      ],
      techStack: ["Python", "PyTorch", "PostgreSQL", "React", "Docker"],
      isPrivate: true,
      status: "Private",
    },
  ],

  about: {
    subcopy:
      "A studio of engineers who integrate AI into real products with structured architecture — not an agency that bills by the prompt.",
    missionPre: "We believe most AI features don't fail because the model is bad. ",
    missionHighlight: "They fail because of the architecture underneath it",
    missionPost: " — the part clients never see until it breaks in production.",
    values: [
      {
        icon: Gem,
        title: "Quality",
        desc: "Every system is custom-built and code-reviewed — no templates, no shortcuts, no fine-tuned demo passed off as production-ready.",
      },
      {
        icon: Eye,
        title: "Transparency",
        desc: "You see the architecture, the model choices, and the trade-offs before we commit to them, not just a finished demo at the end.",
      },
      {
        icon: TrendingUp,
        title: "Scale",
        desc: "We design the data pipeline and infrastructure for where your usage is going, not just where it is on launch day.",
      },
    ],
    pillars: [
      { label: "100% Code Ownership" },
      { label: "Direct Team Access" },
      { label: "5-Phase Process" },
      { label: "Docs, Observability & Runbooks" },
    ],
  },

  ctaHeadline: "Let's ship your AI",
  contactIntro:
    "Tell us about your project and we'll walk you through our 5-phase process to bring it to life.",
  contactPlaceholder: "Describe your project: chatbot, RAG system, AI agent, data pipeline, etc.",
};
