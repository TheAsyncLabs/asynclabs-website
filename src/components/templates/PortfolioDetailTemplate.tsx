"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { getProjectById } from "@/data/portfolio";
import type { Vertical } from "@/data/verticals/types";

export default function PortfolioDetailTemplate({ vertical }: { vertical: Vertical }) {
  const { id } = useParams<{ id: string }>();
  const basePath = `/${vertical.slug}`;
  const project = id ? getProjectById(vertical.portfolio, id) : undefined;

  if (!project) {
    return (
      <main className="px-6 pb-28 pt-32 text-center md:px-10 md:pt-40">
        <h1 className="font-display text-4xl font-medium md:text-5xl">Project not found</h1>
        <p className="mt-4 text-muted">It might have been moved or doesn&apos;t exist.</p>
        <Link
          href={`${basePath}/portfolio`}
          data-cursor
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-widest text-background"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <Link
          href={`${basePath}/portfolio`}
          data-cursor
          className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-muted">
            {project.isPrivate && <Lock size={12} />}
            {project.status}
          </span>
        </div>

        <SplitReveal
          as="h1"
          immediate
          splitType="words"
          className="font-display text-[10vw] font-medium uppercase leading-[0.95] md:text-[4.5vw]"
        >
          {project.title}
        </SplitReveal>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

        {project.metrics && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric} className="glass-card rounded-xl p-5">
                <p className="text-sm font-medium text-foreground">{metric}</p>
              </div>
            ))}
          </div>
        )}

        <Reveal className="mt-16" start="top 90%" end="bottom 10%">
          <h2 className="mb-4 font-display text-2xl font-medium">Overview</h2>
          <p className="leading-relaxed text-muted">{project.description}</p>
        </Reveal>

        <Reveal className="mt-12" start="top 90%" end="bottom 10%">
          <h2 className="mb-4 font-display text-2xl font-medium">What we built</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12" start="top 90%" end="bottom 10%">
          <h2 className="mb-4 font-display text-2xl font-medium">Tech stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20 text-center" start="top 90%" end="bottom 10%">
          <h2 className="font-display text-3xl font-medium md:text-4xl">Have a similar project in mind?</h2>
          <Link
            href={`${basePath}/contact`}
            data-cursor
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto mt-28 max-w-6xl border-t border-line">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
