"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { ArrowRight, X } from "lucide-react";
import { getLenis } from "@/lib/lenis";
import { useCursor } from "@/lib/cursor-context";
import type { Vertical } from "@/data/verticals/types";

export default function ConsultationPopup({ vertical }: { vertical: Vertical }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { setCursor, resetCursor } = useCursor();
  const contactHref = `/${vertical.slug}/contact`;

  useEffect(() => {
    const dismissed = () => sessionStorage.getItem("popup-dismissed");

    const timer = setTimeout(() => {
      if (!dismissed()) setOpen(true);
    }, 40000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (scrollPercent >= 0.7 && !dismissed()) setOpen(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5 && !dismissed()) setOpen(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const backdrop = backdropRef.current;
    if (!card || !backdrop) return;

    const ctx = gsap.context(() => {
      if (open) {
        getLenis()?.stop();
        gsap.set([backdrop, card], { display: "flex" });
        gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.94, y: 12 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    });

    return () => ctx.revert();
  }, [open]);

  const handleClose = () => {
    const card = cardRef.current;
    const backdrop = backdropRef.current;
    sessionStorage.setItem("popup-dismissed", "true");
    if (!card || !backdrop) {
      setOpen(false);
      return;
    }
    gsap.to(card, { opacity: 0, scale: 0.94, y: 12, duration: 0.25, ease: "power3.in" });
    gsap.to(backdrop, {
      opacity: 0,
      duration: 0.25,
      onComplete: () => {
        gsap.set([backdrop, card], { display: "none" });
        getLenis()?.start();
        setOpen(false);
      },
    });
  };

  const handleBook = () => {
    sessionStorage.setItem("popup-dismissed", "true");
    setOpen(false);
    getLenis()?.start();
    router.push(contactHref);
  };

  if (pathname === contactHref) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[600] hidden items-center justify-center bg-black/70 px-6 opacity-0"
      onClick={handleClose}
    >
      <div
        ref={cardRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-md flex-col gap-6 rounded-2xl border border-line bg-background p-8 opacity-0"
      >
        <button
          type="button"
          onClick={handleClose}
          data-cursor
          onMouseEnter={() => setCursor("close")}
          onMouseLeave={resetCursor}
          className="absolute right-5 top-5 text-muted transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <h2 className="font-display text-2xl font-medium leading-tight">Have a project in mind?</h2>
          <p className="mt-2 text-base text-muted">
            Let&apos;s structure it properly. Our 5-phase process ensures it&apos;s built to scale from day
            one.
          </p>
        </div>

        <button
          type="button"
          onClick={handleBook}
          data-cursor
          className="group flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
        >
          Book Consultation Call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
