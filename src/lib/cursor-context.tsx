"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type CursorVariant = "default" | "view" | "drag" | "close" | "text";

interface CursorContextValue {
  variant: CursorVariant;
  label: string;
  setCursor: (variant: CursorVariant, label?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [label, setLabel] = useState("");

  const setCursor = useCallback((next: CursorVariant, nextLabel = "") => {
    setVariant(next);
    setLabel(nextLabel);
  }, []);

  const resetCursor = useCallback(() => {
    setVariant("default");
    setLabel("");
  }, []);

  const value = useMemo(
    () => ({ variant, label, setCursor, resetCursor }),
    [variant, label, setCursor, resetCursor]
  );

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within CursorProvider");
  return ctx;
}
