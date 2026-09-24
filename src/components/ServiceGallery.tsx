"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitReveal from "@/components/SplitReveal";
import type { Vertical } from "@/data/verticals/types";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGallery({ vertical }: { vertical: Vertical }) {
  const services = vertical.services;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(Math.round(self.progress * (services.length - 1)));
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden border-t border-line"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between px-6 pt-10 md:px-10 md:pt-14">
        <SplitReveal
          as="h2"
          splitType="words"
          className="font-display text-[9vw] font-medium uppercase leading-[0.95] md:text-[3.2vw]"
        >
          What we build
        </SplitReveal>
        <div className="hidden items-center gap-1.5 md:flex">
          {services.map((service, i) => (
            <span
              key={service.slug}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex h-full items-center pl-6 md:pl-10">
        <div
          ref={trackRef}
          className="grid auto-cols-[68vw] grid-flow-col grid-rows-2 gap-4 md:auto-cols-[26vw] md:gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const blobOnRight = i % 2 === 0;
            return (
              <Link
                key={service.slug}
                href={`/${vertical.slug}/services/${service.slug}`}
                data-cursor
                className={`group relative overflow-hidden rounded-2xl border border-white/15 ${
                  service.span === "tall" ? "row-span-2" : "row-span-1 self-center"
                }`}
                style={{ height: service.span === "tall" ? "68vh" : "32vh" }}
              >
                {/* background layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                {service.image ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt=""
                      loading="lazy"
                      draggable={false}
                      className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* light uniform scrim so icon/text stay legible no matter how bright the photo is,
                        plus a bottom-heavy gradient for extra contrast behind the title */}
                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/20" />
                  </>
                ) : (
                  <>
                    <div
                      className="absolute h-2/3 w-2/3 rounded-full opacity-40 blur-3xl"
                      style={{
                        background: service.glow,
                        top: blobOnRight ? "-15%" : "auto",
                        bottom: blobOnRight ? "auto" : "-15%",
                        right: blobOnRight ? "-15%" : "auto",
                        left: blobOnRight ? "auto" : "-15%",
                      }}
                    />
                    {service.chart && (
                      <svg
                        viewBox="0 0 400 300"
                        preserveAspectRatio="none"
                        className="absolute inset-0 h-full w-full opacity-70"
                      >
                        <defs>
                          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#000" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polyline
                          points="0,230 40,210 80,220 120,160 160,175 200,110 240,130 280,70 320,90 360,40 400,55"
                          fill="none"
                          stroke="rgba(0,0,0,0.55)"
                          strokeWidth="4"
                        />
                        <polygon
                          points="0,230 40,210 80,220 120,160 160,175 200,110 240,130 280,70 320,90 360,40 400,55 400,300 0,300"
                          fill="url(#chartFill)"
                        />
                        {[
                          [0, 230],
                          [120, 160],
                          [200, 110],
                          [280, 70],
                          [400, 55],
                        ].map(([cx, cy]) => (
                          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="rgba(0,0,0,0.6)" />
                        ))}
                      </svg>
                    )}
                    <div className="absolute inset-0 bg-black/10" />
                  </>
                )}

                {/* content */}
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <Icon
                    className="h-8 w-8 text-foreground drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] md:h-10 md:w-10"
                    strokeWidth={1.5}
                  />

                  <div className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                    <span className="text-xs uppercase tracking-widest text-foreground/80">
                      {service.tag}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-medium leading-tight text-foreground md:text-3xl">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <span className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-background/95 text-center font-display text-xs font-medium uppercase tracking-wide text-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  View service
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
