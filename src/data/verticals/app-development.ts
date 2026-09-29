import {
  ShoppingCart,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  Brain,
  Search,
  PenTool,
  Server,
  Code2,
  Rocket,
  Gem,
  Eye,
  TrendingUp,
} from "lucide-react";
import type { Vertical } from "./types";

/**
 * Content recovered from the original Flutter/Vite mobile-app site
 * (origin/feature/latest-omkar @ b9e5a35) and mapped onto the shared Vertical shape.
 */
export const appDevelopment: Vertical = {
  slug: "app-development",
  name: "App Development",
  shortLabel: "Apps",
  tagline: "Scalable Flutter apps with structured architecture, designed to grow with your business.",
  practice: "App Development",

  hero: {
    eyebrow: "Flutter Development Studio",
    headline: "We build scalable Flutter apps — the right way.",
    subcopy:
      "Structured architecture. Built with Flutter & Dart. Designed to scale — from first prototype to millions of users.",
    marqueeItems: ["Flutter", "Dart", "Firebase", "PostgreSQL", "Cloud Run", "Stripe", "Supabase", "GitHub Actions"],
  },

  services: [
    {
      slug: "e-commerce-apps",
      name: "E-Commerce Apps",
      tag: "Product Apps",
      icon: ShoppingCart,
      gradient: "from-[#ff4b26] to-[#7a1200]",
      glow: "#ff8a63",
      span: "tall",
      summary: "Full-featured shopping experiences with secure payments and inventory management.",
      description:
        "Storefronts built for the phone first — catalogue, cart, checkout and order tracking, backed by an architecture that holds up on sale day.",
      capabilities: [
        "Catalogue, cart & checkout flows",
        "Secure payment integration",
        "Inventory & order management",
        "Push notifications for orders",
        "Admin tooling for merchants",
      ],
      stack: ["Flutter", "Dart", "Stripe", "Firebase", "PostgreSQL"],
    },
    {
      slug: "booking-platforms",
      name: "Booking Platforms",
      tag: "Product Apps",
      icon: Calendar,
      gradient: "from-[#3d3aff] to-[#0d0c33]",
      glow: "#8f8dff",
      span: "wide",
      summary: "Real-time scheduling and reservation systems with calendar integration.",
      description:
        "Scheduling and reservations that stay consistent under concurrent bookings, with calendar sync and reminders built in.",
      capabilities: [
        "Real-time availability",
        "Calendar integration",
        "Reminders & notifications",
        "Payments & cancellations",
        "Provider and customer views",
      ],
      stack: ["Flutter", "Dart", "Supabase", "Cloud Run", "Stripe"],
    },
    {
      slug: "edtech-solutions",
      name: "EdTech Solutions",
      tag: "Product Apps",
      icon: GraduationCap,
      gradient: "from-[#e8c93a] to-[#5c4a06]",
      glow: "#ffe98a",
      span: "wide",
      summary: "Interactive learning platforms with progress tracking and multimedia content.",
      description:
        "Learning apps with video, quizzes and progress tracking, designed around how students actually study on mobile.",
      capabilities: [
        "Course & lesson delivery",
        "Video and multimedia content",
        "Progress tracking",
        "Quizzes and assessments",
        "Instructor dashboards",
      ],
      stack: ["Flutter", "Dart", "Firebase", "PostgreSQL", "Cloud Run"],
    },
    {
      slug: "saas-dashboards",
      name: "SaaS Dashboards",
      tag: "Platforms & Intelligence",
      icon: LayoutDashboard,
      gradient: "from-[#3ac2ff] to-[#062b3f]",
      glow: "#8fe0ff",
      span: "tall",
      chart: true,
      summary: "Data-driven admin panels with analytics, charts, and role management.",
      description:
        "Analytics and admin surfaces for teams on the move — charts, filters and role-based access that work as well on a phone as on a desktop.",
      capabilities: [
        "Analytics & charts",
        "Role-based access control",
        "Exportable reports",
        "Multi-tenant architecture",
        "Audit logging",
      ],
      stack: ["Flutter", "Dart", "PostgreSQL", "Supabase", "GitHub Actions"],
    },
    {
      slug: "ai-integrated-systems",
      name: "AI Integrated Systems",
      tag: "Platforms & Intelligence",
      icon: Brain,
      gradient: "from-[#c23aff] to-[#33063f]",
      glow: "#e29bff",
      span: "wide",
      summary: "Smart applications powered by machine learning and intelligent automation.",
      description:
        "Apps with intelligence built in — recommendations, assistants and automation wired into the product rather than bolted on.",
      capabilities: [
        "LLM-powered assistants",
        "Recommendations & personalization",
        "On-device and cloud inference",
        "Workflow automation",
        "Monitoring & evaluation",
      ],
      stack: ["Flutter", "Dart", "Firebase", "Cloud Run", "PostgreSQL"],
    },
  ],

  serviceRows: [
    {
      name: "Product Apps",
      desc: "E-commerce, booking and EdTech apps — shipped to iOS and Android from a single Flutter codebase.",
    },
    {
      name: "Platforms & Intelligence",
      desc: "SaaS dashboards and AI-integrated systems with data, roles and automation built in.",
    },
  ],

  retainers: [
    {
      name: "App Maintenance",
      desc: "OS-release compatibility, dependency upgrades and bug fixes — mobile apps need this indefinitely.",
    },
    {
      name: "Feature Enhancements",
      desc: "A steady cadence of new features and improvements after launch.",
    },
    {
      name: "Performance Monitoring",
      desc: "Crash reporting, performance tracking and store-rating upkeep for as long as the app is live.",
    },
  ],

  testimonials: [
    {
      quote:
        "Async transformed our idea into a beautifully architected Flutter app. The structured approach saved us months of development time.",
      author: "Sarah Chen",
      role: "CTO, TechVentures",
    },
    {
      quote:
        "Their 5-phase process gave us complete visibility into every stage. We always knew exactly where our project stood.",
      author: "Michael Torres",
      role: "Founder, BookEasy",
    },
    {
      quote:
        "The scalability of the app they built is incredible. We went from 1K to 100K users without a single architecture change.",
      author: "Priya Sharma",
      role: "Product Lead, EduFlow",
    },
  ],

  faq: [
    {
      q: "How long does it take to build a Flutter app?",
      a: "Timelines vary based on complexity. A typical MVP takes 8–12 weeks, while a full-featured app may take 16–24 weeks. We provide a detailed timeline during the Define phase.",
    },
    {
      q: "How much does app development cost?",
      a: "Costs depend on scope, features, and complexity. We offer transparent pricing after the initial consultation and provide detailed proposals before any commitment.",
    },
    {
      q: "Do I own the code and intellectual property?",
      a: "Absolutely. You own 100% of the source code, designs, and all intellectual property we create for you. Full ownership transfers upon project completion.",
    },
    {
      q: "What about post-launch maintenance?",
      a: "We offer ongoing support and maintenance plans to keep your app updated, secure, and performing at its best. Plans are flexible and tailored to your needs.",
    },
    {
      q: "Can you customize the app to our specific needs?",
      a: "Every project is custom-built from the ground up. We don't use templates — your app is uniquely designed and developed to match your exact requirements.",
    },
    {
      q: "Why choose Flutter over native development?",
      a: "Flutter allows us to build beautiful, natively compiled apps for iOS, Android, web, and desktop from a single codebase — reducing cost, time, and maintenance overhead.",
    },
  ],

  process: [
    {
      number: "01",
      icon: Search,
      title: "Define",
      subtitle: "Discovery & Requirements",
      description: "We start by understanding the business, not just the brief, so the app solves the right problem.",
      points: ["Stakeholder interviews", "Market & competitor analysis", "Feature prioritization", "User persona mapping"],
    },
    {
      number: "02",
      icon: PenTool,
      title: "Architect",
      subtitle: "Design & Planning",
      description: "Every screen and every table is planned before a line of code is written, so the build never backtracks.",
      points: ["System architecture design", "UI/UX wireframing", "Tech stack finalization", "Database schema planning"],
    },
    {
      number: "03",
      icon: Server,
      title: "Backend Foundation",
      subtitle: "Infrastructure Setup",
      description: "The unglamorous work that decides whether the app survives real traffic, done first rather than last.",
      points: ["API development", "Authentication & security", "Cloud infrastructure", "CI/CD pipeline setup"],
    },
    {
      number: "04",
      icon: Code2,
      title: "Development & Integration",
      subtitle: "Build & Connect",
      description:
        "The Flutter app and backend come together, third-party services get wired in, and everything is tested before it ships.",
      points: ["Flutter app development", "API integration", "Third-party services", "Testing & QA cycles"],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Launch & Support",
      subtitle: "Deploy & Maintain",
      description: "Launch day is the start, not the finish. We stay on to monitor, fix, and improve.",
      points: ["App store submission", "Performance monitoring", "Bug fixes & updates", "Feature enhancements"],
    },
  ],

  // The original site only had a "case studies coming soon" placeholder.
  portfolio: [],

  about: {
    subcopy: "A team of passionate Flutter developers and architects dedicated to building software that scales.",
    missionPre: "Most apps fail before they scale. ",
    missionHighlight: "Not because of bad ideas — because of bad architecture",
    missionPost: ". Building fast and building right are the same discipline.",
    values: [
      {
        icon: Gem,
        title: "Quality",
        desc: "Every app is custom-built and code-reviewed — no templates, no shortcuts.",
      },
      {
        icon: Eye,
        title: "Transparency",
        desc: "You see the architecture, the timeline, and the trade-offs before we commit to them.",
      },
      {
        icon: TrendingUp,
        title: "Scale",
        desc: "The difference between a $20k app and a $200k app isn't the features. It's the foundation.",
      },
    ],
    pillars: [
      { label: "100% Code Ownership" },
      { label: "Flutter & Dart" },
      { label: "5-Phase Process" },
      { label: "One Codebase, iOS & Android" },
    ],
  },

  ctaHeadline: "Let's build your app",
  contactIntro: "Tell us about your app and we'll walk you through our 5-phase process to bring it to life.",
  contactPlaceholder: "Describe your app: platform, core features, target users, any reference apps, etc.",
};
