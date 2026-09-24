"use client";

import AboutTemplate from "@/components/templates/AboutTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <AboutTemplate vertical={webDevelopment} />;
}
