"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { getLenis } from "@/lib/lenis";
import { useCursor } from "@/lib/cursor-context";

const STUDIOS = [
  { label: "AI Integration", href: "/ai", external: false },
  { label: "App Development", href: "https://theasynclabs.com/", external: true },
  { label: "Web Development", href: "/web-development", external: false },
];

const SUB_LINKS = ["Process", "Portfolio", "About", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const { setCursor, resetCursor } = useCursor();
  const pathname = usePathname();

  const currentStudio = STUDIOS.find((s) => pathname === s.href || pathname.startsWith(`${s.href}/`));
  const subNav = currentStudio
    ? SUB_LINKS.map((label) => ({ label, href: `${currentStudio.href}/${label.toLowerCase()}` }))
    : [];

  // Close the overlay instantly on navigation (no slow animation for a page
  // the user has already left) and make sure scroll is never left paused.
  useEffect(() => {
    setOpen(false);
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { display: "none", clipPath: "inset(0 0 100% 0)" });
    }
    getLenis()?.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const linkItems = linksRef.current?.querySelectorAll("a");
    if (!overlay) return;

    const ctx = gsap.context(() => {
      if (open) {
        getLenis()?.stop();
        gsap
          .timeline()
          .set(overlay, { display: "flex" })
          .fromTo(overlay, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "power4.inOut" })
          .fromTo(
            linkItems ?? [],
            { yPercent: 130, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "power4.out" },
            "-=0.35"
          );
      } else if (overlay.style.display === "flex") {
        gsap
          .timeline({
            onComplete: () => {
              gsap.set(overlay, { display: "none" });
              getLenis()?.start();
            },
          })
          .to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: "power4.inOut" });
      }
    });

    return () => ctx.revert();
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[500] flex items-center justify-between px-6 py-6 mix-blend-difference md:px-10 md:py-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
          data-cursor
          onMouseEnter={() => setCursor("view", "Home")}
          onMouseLeave={resetCursor}
        >
          Async Labs
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          onMouseEnter={() => setCursor("close")}
          onMouseLeave={resetCursor}
          className="font-display text-sm font-medium uppercase tracking-widest"
          data-cursor
        >
          {open ? "Close" : "Navbar"}
        </button>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[400] hidden flex-col justify-center overflow-y-auto bg-background px-6 py-28 md:px-10"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <div ref={linksRef} className="flex flex-col gap-10 md:flex-row md:gap-20">
          <nav className="flex flex-col gap-1">
            <span className="mb-3 text-xs uppercase tracking-widest text-muted">Studios</span>
            {STUDIOS.map((studio) => {
              const active = currentStudio?.href === studio.href;
              const className = `font-display text-[9vw] font-medium uppercase leading-[1.1] transition-colors hover:text-accent md:text-[3.4vw] ${
                active ? "text-accent" : "text-foreground/90"
              }`;
              if (studio.external) {
                return (
                  <a
                    key={studio.href}
                    href={studio.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setCursor("view")}
                    onMouseLeave={resetCursor}
                    data-cursor
                    className={className}
                  >
                    {studio.label}
                  </a>
                );
              }
              return (
                <Link
                  key={studio.href}
                  href={studio.href}
                  onMouseEnter={() => setCursor("view")}
                  onMouseLeave={resetCursor}
                  data-cursor
                  className={className}
                >
                  {studio.label}
                </Link>
              );
            })}
          </nav>

          {subNav.length > 0 && (
            <nav className="flex flex-col gap-1">
              <span className="mb-3 text-xs uppercase tracking-widest text-muted">
                {currentStudio?.label}
              </span>
              {subNav.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setCursor("view")}
                    onMouseLeave={resetCursor}
                    data-cursor
                    className={`font-display text-[9vw] font-medium uppercase leading-[1.1] transition-colors hover:text-accent md:text-[3.4vw] ${
                      active ? "text-accent" : "text-foreground/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>

        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-3 text-sm uppercase tracking-wide text-muted">
          <span>hello@theasynclabs.com</span>
          <span>LinkedIn</span>
          <span>X</span>
          <span>GitHub</span>
        </div>
      </div>
    </>
  );
}
