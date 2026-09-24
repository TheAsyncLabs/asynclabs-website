"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import type { Vertical } from "@/data/verticals/types";

export default function ProcessTemplate({ vertical }: { vertical: Vertical }) {
  const basePath = `/${vertical.slug}`;

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">Our Process</p>
        <SplitReveal
          as="h1"
          immediate
          splitType="words"
          className="font-display text-[11vw] font-medium uppercase leading-[0.95] md:text-[5vw]"
        >
          How we work
        </SplitReveal>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          Every project we build moves through the same 5-phase methodology, so nothing gets skipped and
          nothing gets rebuilt twice.
        </p>
      </div>

      <div className="relative mx-auto mt-20 max-w-4xl">
        <div className="absolute left-6 top-0 h-full w-px bg-line md:left-1/2" />

        <div className="space-y-10 md:space-y-14">
          {vertical.process.map((phase) => (
            <Reveal key={phase.title} start="top 88%" end="bottom 12%">
              <div className="relative grid grid-cols-[48px_1fr] items-start gap-6 md:grid-cols-[1fr_56px_1fr] md:gap-10">
                <div className="hidden md:block" />
                <div className="relative z-10 flex items-center justify-center">
                  <div className="absolute h-14 w-14 rounded-full bg-accent/20 blur-md" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-sm font-bold text-background">
                    {phase.number}
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-2">
                    <phase.icon className="h-5 w-5 text-accent" />
                    <h2 className="font-display text-xl font-medium md:text-2xl">{phase.title}</h2>
                  </div>
                  <p className="mb-3 text-sm font-medium text-accent">{phase.subtitle}</p>
                  <p className="mb-6 leading-relaxed text-muted">{phase.description}</p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal start="top 90%" end="bottom 10%" className="mx-auto mt-24 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-medium md:text-4xl">Ready to start?</h2>
        <p className="mt-4 text-lg text-muted">
          Tell us what you&apos;re building and we&apos;ll walk you through how the 5 phases apply to your
          project.
        </p>
        <Link
          href={`${basePath}/contact`}
          data-cursor
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
        >
          Book a Consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mx-auto mt-28 max-w-6xl border-t border-line">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
