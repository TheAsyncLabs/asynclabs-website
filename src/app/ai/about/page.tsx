"use client";

import AboutTemplate from "@/components/templates/AboutTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <AboutTemplate vertical={ai} />;
}
