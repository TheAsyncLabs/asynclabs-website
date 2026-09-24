"use client";

import { useCursor } from "@/lib/cursor-context";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import type { Vertical } from "@/data/verticals/types";

export default function Retainers({ vertical }: { vertical: Vertical }) {
  const { setCursor, resetCursor } = useCursor();
  const retainers = vertical.retainers;

  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="mb-16 flex items-end justify-between md:mb-24">
        <SplitReveal
          as="h2"
          splitType="words"
          className="font-display text-[9vw] font-medium uppercase leading-[0.95] md:text-[4vw]"
        >
          Genuine retainers
        </SplitReveal>
        <span className="hidden max-w-xs text-right text-sm text-muted md:block">
          Systems degrade without upkeep — this is where retainers earn their keep.
        </span>
      </div>

      <div className="flex flex-col">
        {retainers.map((retainer, i) => (
          <Reveal key={retainer.name} start="top 92%" end="bottom 8%">
            <div
              data-cursor
              onMouseEnter={() => setCursor("view", "Retainer")}
              onMouseLeave={resetCursor}
              className={`group grid grid-cols-1 gap-2 border-t border-line py-8 md:grid-cols-[auto_1fr_1fr] md:items-center md:gap-10 md:py-10 ${
                i === retainers.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-display text-sm text-muted md:text-base">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-[7vw] font-medium leading-none transition-colors duration-300 group-hover:text-accent md:text-[2.4vw]">
                {retainer.name}
              </span>
              <span className="max-w-sm text-sm text-muted md:text-base">{retainer.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
