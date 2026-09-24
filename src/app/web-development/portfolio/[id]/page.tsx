"use client";

import PortfolioDetailTemplate from "@/components/templates/PortfolioDetailTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <PortfolioDetailTemplate vertical={webDevelopment} />;
}
