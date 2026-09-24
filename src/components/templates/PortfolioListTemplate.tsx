"use client";

import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { useCursor } from "@/lib/cursor-context";
import type { Vertical } from "@/data/verticals/types";

const statusStyle: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-400",
  "In Development": "bg-amber-500/10 text-amber-400",
  Private: "bg-white/10 text-muted",
};

export default function PortfolioListTemplate({ vertical }: { vertical: Vertical }) {
  const { setCursor, resetCursor } = useCursor();
  const basePath = `/${vertical.slug}`;

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">Our Work</p>
        <SplitReveal
          as="h1"
          immediate
          splitType="words"
          className="font-display text-[11vw] font-medium uppercase leading-[0.95] md:text-[5vw]"
        >
          Portfolio
        </SplitReveal>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{vertical.tagline}</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {vertical.portfolio.map((project) => (
          <Reveal key={project.id} start="top 92%" end="bottom 8%">
            <Link
              href={`${basePath}/portfolio/${project.id}`}
              data-cursor
              onMouseEnter={() => setCursor("view", "View")}
              onMouseLeave={resetCursor}
              className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {project.category}
                </span>
                <span
                  className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusStyle[project.status]}`}
                >
                  {project.isPrivate && <Lock size={12} />}
                  {project.status}
                </span>
              </div>

              <h3 className="mb-2 font-display text-xl font-medium">{project.title}</h3>
              <p className="mb-4 text-sm text-muted">{project.tagline}</p>

              <div className="mb-6 mt-auto flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded bg-white/5 px-2 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="rounded bg-white/5 px-2 py-1 text-xs text-muted">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-foreground transition-all group-hover:gap-3">
                View Project <ArrowRight size={16} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-28 max-w-6xl border-t border-line">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
