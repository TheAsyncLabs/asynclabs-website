"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
  end?: string;
}

export default function Reveal({
  children,
  className,
  y = 32,
  delay = 0,
  start = "top 90%",
  end = "bottom 10%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, start, end]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
