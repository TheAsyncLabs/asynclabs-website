"use client";

import { CursorProvider } from "@/lib/cursor-context";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CursorProvider>
      <SmoothScroll>
        <Preloader />
        <CustomCursor />
        <Nav />
        {children}
      </SmoothScroll>
    </CursorProvider>
  );
}
