import {
  Layout,
  Smartphone,
  PenTool,
  Code2,
  LayoutDashboard,
  Database,
  Gauge,
  Cloud,
  Wrench,
  ShieldCheck,
  Search,
  Server,
  Rocket,
  Gem,
  Eye,
  TrendingUp,
} from "lucide-react";
import type { Vertical } from "./types";

export const webDevelopment: Vertical = {
  slug: "web-development",
  name: "Web Development",
  shortLabel: "Web Dev",
  tagline: "Websites and web platforms built right, from first pixel to production.",
  practice: "Web Development",

  hero: {
    headline: "We build scalable web experiences.",
    subcopy:
      "Async Labs is a web development studio — structured architecture, built with modern web tech, designed to scale from first pixel to production.",
    marqueeItems: ["Web Platforms", "SaaS Products", "E-Commerce", "Web Architecture"],
  },

  services: [
    {
      slug: "website-design-development",
      name: "Website Design & Development",
      tag: "Frontend & Design",
      icon: Layout,
      gradient: "from-[#0fae66] to-[#062d1a]",
      glow: "#5fe0a3",
      image: "/images/web-dev/gallery/website-design.jpg",
      span: "tall",
      summary: "Landing pages, corporate sites, and portfolios, designed and built from scratch.",
      description:
        "No page builders, no themes — sites designed around your actual content and built to load fast and hold up as you add pages, not just look good in the first demo.",
      capabilities: [
        "Custom design, no templates",
        "Content-driven page structure",
        "SEO-ready markup & metadata",
        "Core Web Vitals-optimized builds",
        "CMS-editable content where needed",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel"],
    },
    {
      slug: "responsive-mobile-first-design",
      name: "Responsive / Mobile-First Design",
      tag: "Frontend & Design",
      icon: Smartphone,
      gradient: "from-[#3d3aff] to-[#0d0c33]",
      glow: "#8f8dff",
      image: "/images/web-dev/gallery/responsive-design.jpg",
      span: "wide",
      summary: "Layouts that adapt cleanly across desktop, tablet, and mobile.",
      description:
        "Built mobile-first because that's where most traffic actually lands — layouts, touch targets, and performance budgets tuned for small screens first, then scaled up.",
      capabilities: [
        "Mobile-first layout system",
        "Touch-friendly interaction design",
        "Adaptive image & asset loading",
        "Cross-device QA testing",
        "Performance budgets per breakpoint",
      ],
      stack: ["Tailwind CSS", "Next.js", "Figma", "BrowserStack", "Lighthouse"],
    },
    {
      slug: "ui-ux-design-prototyping",
      name: "UI/UX Design & Prototyping",
      tag: "Frontend & Design",
      icon: PenTool,
      gradient: "from-[#e8c93a] to-[#5c4a06]",
      glow: "#ffe98a",
      image: "/images/web-dev/gallery/ui-ux-design.jpg",
      span: "wide",
      summary: "Wireframes, high-fidelity mockups, and clickable prototypes.",
      description:
        "Design work that gets tested before it gets built — wireframes and clickable prototypes so navigation and flow are validated while changes are still cheap.",
      capabilities: [
        "Low-fidelity wireframing",
        "High-fidelity visual design",
        "Interactive clickable prototypes",
        "Design system documentation",
        "Usability testing sessions",
      ],
      stack: ["Figma", "FigJam", "Maze", "Adobe Illustrator", "Framer"],
    },
    {
      slug: "custom-web-applications",
      name: "Custom Web Applications",
      tag: "Backend & Full-Stack",
      icon: Code2,
      gradient: "from-[#ff4b26] to-[#7a1200]",
      glow: "#ff8a63",
      image: "/images/web-dev/gallery/custom-web-apps.jpg",
      span: "tall",
      summary: "End-to-end web apps tailored to your workflow, not a template.",
      description:
        "Full-stack builds shaped around how your team actually works — custom data models and permissions instead of forcing your process into someone else's SaaS template.",
      capabilities: [
        "Custom data models & workflows",
        "Role-based permissions",
        "Third-party API integration",
        "Automated testing & CI/CD",
        "Scalable backend architecture",
      ],
      stack: ["Next.js", "Node.js", "PostgreSQL", "tRPC", "Docker"],
    },
    {
      slug: "admin-panels-dashboards",
      name: "Admin Panels & Dashboards",
      tag: "Backend & Full-Stack",
      icon: LayoutDashboard,
      gradient: "from-[#3ac2ff] to-[#062b3f]",
      glow: "#8fe0ff",
      image: "/images/web-dev/gallery/admin-panels.jpg",
      span: "wide",
      summary: "Internal tools for managing data, users, and operations.",
      description:
        "Internal dashboards built for the people who use them every day — fast filtering, bulk actions, and permissions that match your actual org chart, not a generic admin theme.",
      capabilities: [
        "Real-time data visualization",
        "Bulk actions & filtering",
        "Role-based access control",
        "Audit logging",
        "Exportable reports",
      ],
      stack: ["React", "Next.js", "GraphQL", "PostgreSQL", "Recharts"],
    },
    {
      slug: "database-design-management",
      name: "Database Design & Management",
      tag: "Backend & Full-Stack",
      icon: Database,
      gradient: "from-[#c23aff] to-[#33063f]",
      glow: "#e29bff",
      image: "/images/web-dev/gallery/database-design.jpg",
      span: "tall",
      summary: "SQL and NoSQL schema design, optimization, and migrations.",
      description:
        "Schema design done up front so you're not migrating under pressure later — indexes, relationships, and query patterns planned around how the app actually reads and writes data.",
      capabilities: [
        "Schema design & normalization",
        "Query performance tuning",
        "Zero-downtime migrations",
        "Backup & disaster recovery",
        "Read replica & scaling strategy",
      ],
      stack: ["PostgreSQL", "Prisma", "Redis", "MongoDB", "AWS RDS"],
    },
    {
      slug: "performance-optimization",
      name: "Performance Optimization",
      tag: "Support & Infrastructure",
      icon: Gauge,
      gradient: "from-[#ff9a3d] to-[#4a2200]",
      glow: "#ffcf9e",
      image: "/images/web-dev/gallery/performance-opt.jpg",
      span: "wide",
      summary: "Speed audits, technical SEO, and Core Web Vitals improvements.",
      description:
        "We measure before we optimize — real user metrics and Core Web Vitals audits that find the actual bottleneck instead of guessing at a rewrite.",
      capabilities: [
        "Core Web Vitals audits",
        "Bundle size & code-splitting review",
        "Image & asset optimization",
        "Caching & CDN strategy",
        "Technical SEO fixes",
      ],
      stack: ["Lighthouse", "WebPageTest", "Cloudflare", "Next.js", "Vercel Analytics"],
    },
    {
      slug: "hosting-deployment-setup",
      name: "Hosting & Deployment Setup",
      tag: "Support & Infrastructure",
      icon: Cloud,
      gradient: "from-[#4affb0] to-[#023a24]",
      glow: "#9dffd4",
      image: "/images/web-dev/gallery/hosting-deploy.jpg",
      span: "wide",
      summary: "AWS, Vercel, Netlify, DigitalOcean configuration and CI/CD.",
      description:
        "Deployment infrastructure set up once, correctly — CI/CD pipelines, environment configuration, and rollback plans so shipping is routine, not a scheduled event.",
      capabilities: [
        "CI/CD pipeline setup",
        "Environment & secrets management",
        "Zero-downtime deployments",
        "Staging & preview environments",
        "Rollback & incident procedures",
      ],
      stack: ["Vercel", "AWS", "Docker", "GitHub Actions", "Terraform"],
    },
  ],

  serviceRows: [
    {
      name: "Frontend & Design",
      desc: "Website design, responsive builds, single-page apps, PWAs, and UI/UX prototyping.",
    },
    {
      name: "Backend & Full-Stack",
      desc: "Custom web applications, APIs, database design, CMS, e-commerce, and SaaS platforms.",
    },
    {
      name: "Support & Infrastructure",
      desc: "Maintenance, performance optimization, migrations, hosting, security, and accessibility.",
    },
  ],

  retainers: [
    {
      name: "Website Maintenance",
      desc: "Ongoing updates, uptime monitoring, and bug fixes — most sites need this indefinitely.",
    },
    {
      name: "Performance Optimization",
      desc: "Recurring speed audits and Core Web Vitals fixes as content and traffic grow.",
    },
    {
      name: "Hosting & DevOps Management",
      desc: "Server monitoring, scaling, and CI/CD upkeep for as long as the app is in production.",
    },
    {
      name: "Security Monitoring & SSL",
      desc: "Vulnerability scans, patching, and certificate renewal — an ongoing risk, not a one-time task.",
    },
  ],

  testimonials: [
    {
      quote:
        "Async rebuilt our storefront from the ground up. The structured approach saved us months of development time and our Core Web Vitals finally look the way they should.",
      author: "Jordan Blake",
      role: "CTO, Horizon Commerce",
    },
    {
      quote:
        "Their 5-phase process gave us complete visibility into every stage of the build. We always knew exactly where our platform stood before launch.",
      author: "Elena Vasquez",
      role: "Founder, Ledger",
    },
    {
      quote:
        "The scalability of the dashboard they built is incredible. We went from a handful of pilot fleets to full production without a single architecture change.",
      author: "Marcus Webb",
      role: "Operations Lead, FleetWise Ops",
    },
  ],

  faq: [
    {
      q: "How long does it take to build a website or web app?",
      a: "Timelines vary based on complexity. A typical marketing site or MVP takes 4–8 weeks, while a full-featured web app or platform may take 12–20 weeks. We provide a detailed timeline during the Define phase.",
    },
    {
      q: "How much does web development cost?",
      a: "Costs depend on scope, features, and complexity. We offer transparent pricing after the initial consultation and provide detailed proposals before any commitment.",
    },
    {
      q: "Do I own the code and intellectual property?",
      a: "Absolutely. You own 100% of the source code, designs, and all intellectual property we create for you. Full ownership transfers upon project completion.",
    },
    {
      q: "What about post-launch maintenance?",
      a: "Most sites need ongoing updates, monitoring, and fixes indefinitely. Our Monthly Retainers cover exactly that, with plans tailored to what your site needs rather than a fixed package.",
    },
    {
      q: "Can you customize the site to our specific needs?",
      a: "Every project is custom-built from the ground up. We don't use templates; your site or application is designed and developed to match your exact requirements.",
    },
    {
      q: "Which technologies do you build with?",
      a: "We build with production-grade, industry-standard tools, including React, Next.js, Node.js, and PostgreSQL, chosen for long-term maintainability rather than passing trends. The exact stack is matched to your project's scale and budget.",
    },
  ],

  process: [
    {
      number: "01",
      icon: Search,
      title: "Define",
      subtitle: "Discovery & Requirements",
      description:
        "We start by understanding the business, not just the brief, so the site we build actually solves the problem.",
      points: [
        "Stakeholder interviews",
        "Market & competitor analysis",
        "Feature prioritization",
        "User persona mapping",
      ],
    },
    {
      number: "02",
      icon: PenTool,
      title: "Architect",
      subtitle: "Design & Planning",
      description:
        "Every screen and every table is planned before a line of code is written, so the build never backtracks.",
      points: [
        "System architecture design",
        "UI/UX wireframing",
        "Tech stack finalization",
        "Database schema planning",
      ],
    },
    {
      number: "03",
      icon: Server,
      title: "Backend Foundation",
      subtitle: "Infrastructure Setup",
      description:
        "The unglamorous work that decides whether the site survives real traffic, done first rather than last.",
      points: ["API development", "Authentication & security", "Cloud infrastructure", "CI/CD pipeline setup"],
    },
    {
      number: "04",
      icon: Code2,
      title: "Development & Integration",
      subtitle: "Build & Connect",
      description:
        "Frontend and backend come together, third-party services get wired in, and everything gets tested before it ships.",
      points: ["Frontend & backend development", "API integration", "Third-party services", "Testing & QA cycles"],
    },
    {
      number: "05",
      icon: Rocket,
      title: "Launch & Support",
      subtitle: "Deploy & Maintain",
      description: "Launch day is the start, not the finish. We stay on to monitor, fix, and improve.",
      points: ["Production deployment", "Performance monitoring", "Bug fixes & updates", "Feature enhancements"],
    },
  ],

  portfolio: [
    {
      id: "horizon-commerce",
      title: "Horizon Commerce",
      tagline: "Headless e-commerce storefront built for scale",
      category: "E-commerce Platform",
      description:
        "Horizon Commerce is a headless storefront built on Next.js with a custom checkout flow. Rebuilt from a legacy CMS-based site, the new architecture separates content, catalog, and payments so each layer can scale independently as traffic grows.",
      features: [
        "Headless storefront with server-side rendering",
        "Custom checkout with Stripe payments",
        "Real-time inventory sync",
        "Core Web Vitals-optimized product pages",
        "Admin dashboard for catalog management",
      ],
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      isPrivate: false,
      status: "Live",
      metrics: ["120K+ monthly visitors", "2.1s → 0.8s LCP improvement", "3.4% checkout conversion rate"],
    },
    {
      id: "ledger",
      title: "Ledger",
      tagline: "Multi-tenant SaaS analytics dashboard for finance teams",
      category: "SaaS Platform",
      description:
        "Ledger is a subscription-based analytics platform that lets finance teams track spend across multiple entities in real time. Built with multi-tenant data isolation from day one so new customer workspaces spin up without any schema changes.",
      features: [
        "Multi-tenant workspace architecture",
        "Role-based access control",
        "Real-time data visualization",
        "Stripe-based subscription billing",
        "REST API for third-party integrations",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
      isPrivate: false,
      status: "In Development",
      metrics: ["Multi-tenant from launch", "Sub-200ms API response times"],
    },
    {
      id: "parkflow",
      title: "Parkflow",
      tagline: "Visitor parking management system built for Razorpay",
      category: "Web Application",
      description:
        "Parkflow gives residential societies a structured way to issue and track visitor parking access, built for Razorpay. QR-based permits replace manual security-desk logging, with real-time tracking and automated violation detection flagging overstays and unauthorized vehicles as they happen.",
      features: [
        "QR-based visitor permit issuance",
        "Real-time vehicle & visitor tracking",
        "Automated violation detection & alerts",
        "Security desk & resident admin console",
        "Society-wide access history & reporting",
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
      isPrivate: true,
      status: "Private",
    },
  ],

  about: {
    subcopy:
      "A studio of engineers and designers who build websites and web platforms with structured architecture, not an agency that bills by the revision.",
    missionPre: "We believe most websites don't fail because of bad design. ",
    missionHighlight: "They fail because of bad architecture underneath it",
    missionPost: " — the part clients never see until it breaks.",
    values: [
      {
        icon: Gem,
        title: "Quality",
        desc: "Every project is custom-built and code-reviewed, with no templates, no shortcuts, and no copy-pasted boilerplate passed off as bespoke work.",
      },
      {
        icon: Eye,
        title: "Transparency",
        desc: "You see the architecture, the timeline, and the trade-offs before we commit to them, not just a finished screenshot at the end.",
      },
      {
        icon: TrendingUp,
        title: "Scale",
        desc: "We design the database schema and infrastructure for where your product is going, not just where it is on launch day.",
      },
    ],
    pillars: [
      { label: "100% Code Ownership" },
      { label: "Direct Team Access" },
      { label: "5-Phase Process" },
      { label: "Docs, Observability & Runbooks" },
    ],
  },

  ctaHeadline: "Let's ship your site",
  contactIntro:
    "Tell us about your project and we'll walk you through our 5-phase process to bring it to life.",
  contactPlaceholder: "Describe your project: new website, redesign, web app, e-commerce store, etc.",
};
