"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { MessageCircle } from "lucide-react";
import { useCursor } from "@/lib/cursor-context";
import type { Vertical } from "@/data/verticals/types";

export default function FloatingCTA({ vertical }: { vertical: Vertical }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { setCursor, resetCursor } = useCursor();
  const contactHref = `/${vertical.slug}/contact`;

  useEffect(() => {
    if (!ref.current) return;
    const tween = gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, delay: 2, ease: "power3.out" }
    );
    return () => {
      tween.kill();
    };
  }, []);

  if (pathname === contactHref) return null;

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-[300] opacity-0">
      <Link
        href={contactHref}
        data-cursor
        onMouseEnter={() => setCursor("view", "Book a call")}
        onMouseLeave={resetCursor}
        className="flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-background shadow-[0_0_24px_rgba(255,75,38,0.35)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-4 w-4" />
        Book Consultation
      </Link>
    </div>
  );
}
