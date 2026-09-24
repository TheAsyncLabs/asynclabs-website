"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const quickDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const quickDotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });
    const quickRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const quickRingY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      quickDot(e.clientX);
      quickDotY(e.clientY);
      quickRing(e.clientX);
      quickRingY(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] hidden md:block" aria-hidden>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/60"
      />
    </div>
  );
}
