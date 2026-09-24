"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  Sparkles,
  Smartphone,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Code2,
  Layers,
  Bot,
  Server,
  Cloud,
  Network,
  Cpu,
} from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import DomainWall from "@/components/DomainWall";
import Footer from "@/components/Footer";
import { useCursor } from "@/lib/cursor-context";

const DOMAIN_ROWS = [
  {
    direction: "left" as const,
    speed: 32,
    iconSize: 26,
    chipClassName: "gap-3 px-7 py-5 text-xl md:text-2xl",
    items: [
      { label: "AI Engineering & LLM Applications", icon: Sparkles },
      { label: "Full-Stack Development", icon: Layers },
      { label: "AWS & GCP Cloud Infrastructure", icon: Cloud },
    ],
  },
  {
    direction: "right" as const,
    speed: 46,
    iconSize: 20,
    chipClassName: "gap-2.5 px-6 py-4 text-base md:text-lg",
    items: [
      { label: "Product Engineering", icon: Code2 },
      { label: "Mobile App Development", icon: Smartphone },
      { label: "Machine Learning Engineering", icon: Cpu },
    ],
  },
  {
    direction: "left" as const,
    speed: 26,
    iconSize: 16,
    chipClassName: "gap-2 px-5 py-3 text-sm md:text-base",
    items: [
      { label: "Backend Engineering", icon: Server },
      { label: "RAG Systems", icon: Bot },
      { label: "API Development", icon: Network },
    ],
  },
];

const PRACTICES = [
  {
    slug: "ai",
    href: "/ai",
    external: false,
    name: "AI Integration",
    tagline: "Chatbots, agents, RAG systems and the infrastructure behind them.",
    icon: Sparkles,
    image: "/images/hero.jpg",
    capabilities: ["AI Engineering & LLM Applications", "RAG Systems", "Machine Learning Engineering", "AI Integration"],
  },
  {
    slug: "app-development",
    href: "https://theasynclabs.com/",
    external: true,
    name: "App Development",
    tagline: "Cross-platform mobile apps — now living on our main site.",
    icon: Smartphone,
    image: null,
    capabilities: ["Mobile App Development", "Product Engineering", "Full-Stack Development", "Backend Engineering"],
  },
  {
    slug: "web-development",
    href: "/web-development",
    external: false,
    name: "Web Development",
    tagline: "Websites and web platforms built right, from first pixel to production.",
    icon: Globe,
    image: "/images/web-dev/hero.jpg",
    capabilities: ["Full-Stack Development", "Backend Engineering", "API Development", "AWS & GCP Cloud Infrastructure"],
  },
];

export default function HubPage() {
  const { setCursor, resetCursor } = useCursor();
  const glowRef = useRef<HTMLDivElement>(null);

  const handleDomainsMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = glowRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    gsap.to(el, {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 100%, #e8481f 0%, #c22a22 16%, #3d0f12 48%, #0d0709 100%)",
          }}
        />

        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">Async Labs</p>
        <SplitReveal
          as="h1"
          immediate
          splitType="words"
          className="max-w-4xl font-display text-[11vw] font-medium uppercase leading-[0.95] md:text-[5vw]"
        >
          Not another dev shop. We actually ship.
        </SplitReveal>

        <p className="mt-6 font-display text-[7vw] font-medium leading-[1.1] md:text-[2.6vw]">
          We build{" "}
          <RotatingWord
            words={["AI systems.", "Mobile apps.", "Web platforms."]}
            className="inline-block text-accent"
          />
        </p>

        <p className="mt-6 max-w-xl text-lg text-muted">
          We design and build production software — backend systems, mobile and web products,
          AI-native features, and the infrastructure that holds them together. Every system we
          ship comes with documentation, observability, and operational runbooks, not just a demo.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="mailto:hello@theasynclabs.com"
            data-cursor
            onMouseEnter={() => setCursor("view", "Say hi")}
            onMouseLeave={resetCursor}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            Let&apos;s talk
          </a>
          <span className="text-sm uppercase tracking-widest text-muted">
            Founded by Aniket Ingle &amp; Ameesh Katariya
          </span>
        </div>
      </section>

      {/* Practices — asymmetrical alternating rows */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <p className="mb-16 text-sm font-medium uppercase tracking-widest text-muted md:mb-24">
          What we build
        </p>

        <div className="flex flex-col gap-20 md:gap-32">
          {PRACTICES.map((practice, i) => {
            const Icon = practice.icon;
            const reversed = i % 2 === 1;

            return (
              <Reveal key={practice.slug} start="top 85%" end="bottom 15%">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
                  {/* Image */}
                  <div
                    className={`relative h-[50vh] overflow-hidden rounded-3xl md:h-[60vh] ${
                      reversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    {practice.image ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={practice.image}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/25" />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(120% 100% at 50% 100%, #e8481f 0%, #c22a22 18%, #3d0f12 52%, #0d0709 100%)",
                        }}
                      />
                    )}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={reversed ? "md:order-1" : "md:order-2"}>
                    <span className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <SplitReveal
                      as="h2"
                      splitType="words"
                      className="mt-2 font-display text-[8vw] font-medium uppercase leading-[0.95] md:text-[3vw]"
                    >
                      {practice.name}
                    </SplitReveal>
                    <p className="mt-4 max-w-md text-muted md:text-lg">{practice.tagline}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {practice.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wide text-muted"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>

                    {practice.external ? (
                      <a
                        href={practice.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor
                        onMouseEnter={() => setCursor("view", "Visit")}
                        onMouseLeave={resetCursor}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-accent"
                      >
                        Visit site
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    ) : (
                      <Link
                        href={practice.href}
                        data-cursor
                        onMouseEnter={() => setCursor("view", "Explore")}
                        onMouseLeave={resetCursor}
                        className="group mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-accent"
                      >
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Domains — tilted, cursor-lit, infinitely scrolling wall */}
      <section
        onMouseMove={handleDomainsMouseMove}
        className="relative overflow-hidden border-t border-line px-6 py-24 md:px-10 md:py-32"
      >
        <div
          ref={glowRef}
          className="pointer-events-none absolute left-0 top-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #e8481f 0%, #c22a22 40%, transparent 72%)",
          }}
        />

        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">Where we operate</p>
        <SplitReveal
          as="h2"
          splitType="words"
          className="max-w-3xl font-display text-[9vw] font-medium uppercase leading-[0.95] md:text-[3.6vw]"
        >
          Everywhere the stack gets interesting.
        </SplitReveal>

        <Reveal className="mt-14 md:mt-20" start="top 95%" end="bottom 5%">
          <DomainWall rows={DOMAIN_ROWS} />
        </Reveal>
      </section>

      {/* Real work proof point */}
      <section className="border-t border-line px-6 py-24 md:px-10 md:py-32">
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">Real work</p>
        <Reveal start="top 88%" end="bottom 12%">
          <Link
            href="/web-development/portfolio/parkflow"
            data-cursor
            onMouseEnter={() => setCursor("view", "View")}
            onMouseLeave={resetCursor}
            className="glass-card group grid grid-cols-1 gap-6 rounded-3xl p-8 transition-colors hover:border-accent/40 md:grid-cols-[1fr_auto] md:items-center md:p-12"
          >
            <div>
              <h3 className="font-display text-3xl font-medium md:text-4xl">Parkflow</h3>
              <p className="mt-3 max-w-xl text-muted">
                A visitor parking management system built for Razorpay — QR-based permits,
                real-time tracking, and automated violation detection for residential societies.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground transition-colors group-hover:text-accent">
              Read the case study
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Footer />
      </div>
    </main>
  );
}
