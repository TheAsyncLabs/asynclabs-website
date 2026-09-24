"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import type { Vertical } from "@/data/verticals/types";

export default function FAQ({ vertical }: { vertical: Vertical }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = vertical.faq;

  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">FAQ</p>
          <SplitReveal
            as="h2"
            splitType="words"
            className="font-display text-[9vw] font-medium uppercase leading-[0.95] md:text-[4vw]"
          >
            Common questions
          </SplitReveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} start="top 92%" end="bottom 8%">
                <div className="glass-card overflow-hidden rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    data-cursor
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium"
                  >
                    {faq.q}
                    <Plus
                      className={`h-4 w-4 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-relaxed text-muted">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
