"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import SplitReveal from "@/components/SplitReveal";
import type { Vertical } from "@/data/verticals/types";

export default function Testimonials({ vertical }: { vertical: Vertical }) {
  const quotes = vertical.testimonials;

  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <SplitReveal
        as="h2"
        splitType="words"
        className="mb-16 font-display text-[9vw] font-medium uppercase leading-[0.95] md:mb-20 md:text-[4vw]"
      >
        Client words
      </SplitReveal>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="max-w-3xl"
      >
        {quotes.map((q) => (
          <SwiperSlide key={q.author}>
            <blockquote className="font-display text-2xl font-medium leading-snug text-foreground md:text-4xl">
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-widest text-muted">
              <span className="text-foreground">{q.author}</span>
              <span>—</span>
              <span>{q.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
