"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function RotatingWord({
  words,
  interval = 2200,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Animate the new word in whenever it changes
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.6, ease: "power4.out" }
    );
    return () => {
      tween.kill();
    };
  }, [index]);

  // Cycle on an interval: animate current word out, then swap
  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      const el = ref.current;
      if (!el) {
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      gsap.to(el, {
        yPercent: -110,
        opacity: 0,
        duration: 0.45,
        ease: "power3.in",
        onComplete: () => setIndex((i) => (i + 1) % words.length),
      });
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span ref={ref} className={className}>
        {words[index]}
      </span>
    </span>
  );
}
