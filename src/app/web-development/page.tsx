"use client";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <HomeTemplate vertical={webDevelopment} />;
}
