"use client";

import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import type { Vertical } from "@/data/verticals/types";

export default function Services({ vertical }: { vertical: Vertical }) {
  const rows = vertical.serviceRows;

  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <SplitReveal
        as="h2"
        splitType="words"
        className="mb-16 font-display text-[9vw] font-medium uppercase leading-[0.95] md:mb-20 md:text-[4vw]"
      >
        What we do
      </SplitReveal>

      <div className="flex flex-col">
        {rows.map((row, i) => (
          <Reveal key={row.name} start="top 92%" end="bottom 8%">
            <div
              className={`group grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-10 md:py-10 ${
                i === rows.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-display text-sm text-muted md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[7vw] font-medium leading-none transition-colors duration-300 group-hover:text-accent md:text-[2.6vw]">
                {row.name}
              </span>
              <span className="max-w-sm text-sm text-muted md:text-base">{row.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
