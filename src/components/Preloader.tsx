"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { getLenis } from "@/lib/lenis";

export const PRELOADER_DONE_EVENT = "preloader:done";

export function isPreloaderDone(): boolean {
  if (typeof window === "undefined") return false;
  return (window as typeof window & { __preloaderDone?: boolean }).__preloaderDone === true;
}

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");
    getLenis()?.stop();

    const counter = { val: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        gsap
          .timeline({
            onComplete: () => {
              document.documentElement.classList.remove("no-scroll");
              getLenis()?.start();
              setDone(true);
              (window as typeof window & { __preloaderDone?: boolean }).__preloaderDone = true;
              window.dispatchEvent(new CustomEvent(PRELOADER_DONE_EVENT));
            },
          })
          .to(labelRef.current, { yPercent: -120, opacity: 0, duration: 0.5, ease: "power3.in" })
          .to(
            wipeRef.current,
            { yPercent: -100, duration: 1, ease: "power4.inOut" },
            "-=0.2"
          )
          .to(
            panelRef.current,
            { yPercent: -100, duration: 1, ease: "power4.inOut" },
            "<0.08"
          );
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 2.1,
      onUpdate: () => setCount(Math.floor(counter.val)),
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 z-[998]" aria-hidden>
      <div ref={wipeRef} className="absolute inset-0 bg-accent" />
      <div
        ref={panelRef}
        className="absolute inset-0 flex flex-col items-center justify-center bg-background"
      >
        <div ref={labelRef} className="flex flex-col items-center gap-6">
          <span className="font-display text-sm uppercase tracking-[0.4em] text-muted">
            Async Labs
          </span>
          <span className="font-display text-[13vw] leading-none tabular-nums text-foreground md:text-[8vw]">
            {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
