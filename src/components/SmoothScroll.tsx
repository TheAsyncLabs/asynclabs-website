"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Multi-page nav: jump to top on route change instead of landing mid-scroll,
  // let ScrollTrigger re-measure the new page's sections, and force scroll back on
  // in case something on the previous page (menu overlay, popup) left Lenis stopped.
  useEffect(() => {
    lenisRef.current?.start();
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Expose for other components that need to pause/resume scroll (menu, preloader)
    (window as typeof window & { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      delete (window as typeof window & { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return <>{children}</>;
}
