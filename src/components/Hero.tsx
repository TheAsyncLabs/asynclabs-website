"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "@/components/SplitReveal";
import Marquee from "@/components/Marquee";
import type { Vertical } from "@/data/verticals/types";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ vertical }: { vertical: Vertical }) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { scale: 1, borderRadius: "0px" },
        {
          scale: 0.9,
          borderRadius: "28px",
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100svh] w-full">
      <div ref={panelRef} className="absolute inset-0 overflow-hidden bg-[#0d0709]">
        {/* Radial glow rising from bottom-center: hottest highlight -> bright glow -> dark maroon -> near-black corners */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 50% 100%, #e8481f 0%, #c22a22 18%, #3d0f12 52%, #0d0709 100%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-28 md:px-10 md:pt-36">
          <div className="max-w-5xl">
            <SplitReveal
              as="h1"
              immediate
              splitType="words"
              stagger={0.06}
              className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-white md:text-[6.4vw]"
            >
              {vertical.hero.headline}
            </SplitReveal>
            <SplitReveal
              as="p"
              immediate
              splitType="words"
              delay={0.4}
              stagger={0.02}
              className="mt-6 max-w-md text-base text-[#f0f0f0]/80 md:mt-8 md:text-lg"
            >
              {vertical.hero.subcopy}
            </SplitReveal>
          </div>

          <div className="flex items-end justify-between gap-6">
            <Marquee
              items={vertical.hero.marqueeItems}
              speed={70}
              itemClassName="px-6 text-[4vw] font-display uppercase leading-none text-[#f0f0f0]/80 md:text-2xl"
            />
            <span className="hidden shrink-0 text-xs uppercase tracking-widest text-[#f0f0f0]/70 md:block">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
