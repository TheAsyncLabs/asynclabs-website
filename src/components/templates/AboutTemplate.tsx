"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import type { Vertical } from "@/data/verticals/types";

export default function AboutTemplate({ vertical }: { vertical: Vertical }) {
  const basePath = `/${vertical.slug}`;
  const { about } = vertical;

  return (
    <main>
      <section className="px-6 pb-0 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">About Us</p>
          <SplitReveal
            as="h1"
            immediate
            splitType="words"
            className="font-display text-[13vw] font-medium uppercase leading-[0.95] md:text-[6vw]"
          >
            We are Async
          </SplitReveal>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{about.subcopy}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-4xl text-center" start="top 88%" end="bottom 12%">
          <p className="font-display text-2xl font-medium leading-relaxed tracking-tight md:text-3xl lg:text-4xl">
            {about.missionPre}
            <span className="text-accent">{about.missionHighlight}</span>
            {about.missionPost}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">What We Stand For</p>
            <h2 className="font-display text-4xl font-medium md:text-5xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {about.values.map((value) => (
              <Reveal key={value.title} start="top 90%" end="bottom 10%">
                <div className="glass-card rounded-2xl p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                  <p className="leading-relaxed text-muted">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((pillar) => (
            <Reveal key={pillar.label} start="top 92%" end="bottom 8%">
              <div className="glass-card flex h-full items-center justify-center rounded-2xl px-4 py-8">
                <p className="text-lg font-bold">{pillar.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-16 max-w-3xl text-center" start="top 92%" end="bottom 8%">
          <p className="text-sm uppercase tracking-widest text-muted">
            Founded by Aniket Ingle &amp; Ameesh Katariya
          </p>
        </Reveal>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-10 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center" start="top 90%" end="bottom 10%">
          <h2 className="mb-4 font-display text-3xl font-medium md:text-4xl">Have a project in mind?</h2>
          <p className="mb-8 text-lg text-muted">
            Let&apos;s talk about what you&apos;re building and how our process fits it.
          </p>
          <Link
            href={`${basePath}/contact`}
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl border-t border-line px-6 md:px-10">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
