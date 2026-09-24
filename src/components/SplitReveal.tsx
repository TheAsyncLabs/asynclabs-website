"use client";

import { createElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { PRELOADER_DONE_EVENT, isPreloaderDone } from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger, SplitText);

type Tag = "h1" | "h2" | "h3" | "p" | "span";

interface SplitRevealProps {
  children: string;
  as?: Tag;
  className?: string;
  splitType?: "chars" | "words";
  stagger?: number;
  delay?: number;
  /** Play immediately once fonts/preloader are ready instead of on scroll (use for hero headline) */
  immediate?: boolean;
  start?: string;
  end?: string;
}

export default function SplitReveal({
  children,
  as = "h2",
  className,
  splitType = "words",
  stagger = 0.04,
  delay = 0,
  immediate = false,
  start = "top 85%",
  end = "bottom 20%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: SplitText | undefined;
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    const run = () => {
      if (cancelled || !el) return;
      ctx = gsap.context(() => {
        split = SplitText.create(el, {
          type: splitType,
          mask: splitType,
          charsClass: "char",
          wordsClass: "word",
          onSplit(self) {
            const targets = splitType === "chars" ? self.chars : self.words;
            return gsap.from(targets, {
              yPercent: 115,
              rotate: splitType === "chars" ? 6 : 0,
              opacity: 0,
              duration: 0.9,
              delay,
              stagger,
              ease: "power4.out",
              scrollTrigger: immediate
                ? undefined
                : {
                    trigger: el,
                    start,
                    end,
                    toggleActions: "play reverse play reverse",
                  },
            });
          },
        });
      });
    };

    if (immediate) {
      // Preloader only ever fires its "done" event once, on the very first page load.
      // On later client-side navigations it has already fired, so fire immediately here
      // instead of waiting on an event that will never come again.
      if (isPreloaderDone()) {
        run();
        return () => {
          cancelled = true;
          split?.revert();
          ctx?.revert();
        };
      }

      let started = false;
      const onPreloaderDone = () => {
        if (started) return;
        started = true;
        run();
      };
      window.addEventListener(PRELOADER_DONE_EVENT, onPreloaderDone, { once: true });
      // Safety net if the preloader is skipped/unmounted before broadcasting (e.g. fast refresh)
      const t = setTimeout(onPreloaderDone, 3500);
      return () => {
        cancelled = true;
        clearTimeout(t);
        window.removeEventListener(PRELOADER_DONE_EVENT, onPreloaderDone);
        split?.revert();
        ctx?.revert();
      };
    }

    run();
    return () => {
      cancelled = true;
      split?.revert();
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(
    as,
    { ref: ref as React.Ref<never>, className },
    children
  );
}
