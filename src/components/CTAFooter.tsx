"use client";

import Link from "next/link";
import { useCursor } from "@/lib/cursor-context";
import SplitReveal from "@/components/SplitReveal";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import type { Vertical } from "@/data/verticals/types";

export default function CTAFooter({ vertical }: { vertical: Vertical }) {
  const { setCursor, resetCursor } = useCursor();

  return (
    <footer className="border-t border-line px-6 pt-28 md:px-10 md:pt-40">
      <Link
        href={`/${vertical.slug}/contact`}
        data-cursor
        onMouseEnter={() => setCursor("view", "Let's talk")}
        onMouseLeave={resetCursor}
        className="block"
      >
        <SplitReveal
          as="h2"
          splitType="chars"
          stagger={0.02}
          className="font-display text-[13vw] font-medium uppercase leading-[0.9] transition-colors duration-500 hover:text-accent md:text-[7.5vw]"
        >
          {vertical.ctaHeadline}
        </SplitReveal>
      </Link>

      <Marquee
        items={["Async Labs", vertical.name, "Async Labs", "Available for 2026"]}
        speed={90}
        className="mt-10 border-y border-line py-6"
        itemClassName="px-6 text-[3vw] font-display uppercase leading-none text-muted md:text-xl"
      />

      <Footer basePath={`/${vertical.slug}`} />
    </footer>
  );
}
