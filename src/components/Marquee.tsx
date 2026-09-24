"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  /** base px/second travel speed */
  speed?: number;
  direction?: "left" | "right";
}

export default function Marquee({
  items,
  className,
  itemClassName,
  speed = 60,
  direction = "left",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      const dur = totalWidth / speed;
      const base = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: direction === "left" ? -50 : 50,
          duration: dur,
          ease: "none",
          repeat: -1,
        }
      );

      // Scroll velocity gives the ticker a lightweight "kick" in scroll direction,
      // echoing the reference site's scroll-reactive marquee.
      let lastY = window.scrollY;
      const onScroll = () => {
        const delta = window.scrollY - lastY;
        lastY = window.scrollY;
        base.timeScale(1 + gsap.utils.clamp(-4, 4, delta * 0.05));
        gsap.to(base, { timeScale: 1, duration: 0.6, overwrite: true, delay: 0.05 });
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => window.removeEventListener("scroll", onScroll);
    }, track);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={velocityRef}>
        <div ref={trackRef} className="marquee-track">
          {[0, 1].map((dupe) => (
            <div key={dupe} className="flex shrink-0 items-center">
              {items.map((item, i) => (
                <span
                  key={`${dupe}-${i}`}
                  className={itemClassName ?? "px-8 text-[6vw] font-display uppercase leading-none md:text-[4vw]"}
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
