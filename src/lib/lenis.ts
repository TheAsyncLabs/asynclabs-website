import type Lenis from "lenis";

export function getLenis(): Lenis | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as typeof window & { __lenis?: Lenis }).__lenis;
}
