"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { LucideIcon } from "lucide-react";

export interface DomainItem {
  label: string;
  icon: LucideIcon;
}

interface DomainRowProps {
  items: DomainItem[];
  direction: "left" | "right";
  speed: number;
  chipClassName?: string;
  iconSize?: number;
}

function DomainRow({ items, direction, speed, chipClassName, iconSize = 20 }: DomainRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth / 2;
      const dur = totalWidth / speed;
      tweenRef.current = gsap.fromTo(
        track,
        { xPercent: 0 },
        {
          xPercent: direction === "left" ? -50 : 50,
          duration: dur,
          ease: "none",
          repeat: -1,
        }
      );
    }, track);

    return () => ctx.revert();
  }, [items, direction, speed]);

  return (
    <div
      className="overflow-hidden py-1"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div ref={trackRef} className="flex w-max">
        {[0, 1].map((dupe) => (
          <div key={dupe} className="flex shrink-0 items-center">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${dupe}-${i}`}
                  className={`group mx-2.5 flex shrink-0 items-center rounded-full glass-card transition-all duration-300 hover:scale-[1.04] hover:border-accent/60 ${chipClassName ?? "gap-2.5 px-6 py-4 text-lg"}`}
                >
                  <Icon
                    size={iconSize}
                    className="shrink-0 text-accent transition-transform duration-300 group-hover:rotate-12"
                    strokeWidth={1.5}
                  />
                  <span className="whitespace-nowrap font-display font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DomainWall({ rows }: { rows: DomainRowProps[] }) {
  return (
    <div className="-mx-6 flex rotate-[-1.5deg] flex-col gap-4 md:-mx-16 md:gap-5">
      {rows.map((row, i) => (
        <DomainRow key={i} {...row} />
      ))}
    </div>
  );
}
