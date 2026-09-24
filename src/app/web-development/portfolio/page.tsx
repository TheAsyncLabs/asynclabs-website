"use client";

import PortfolioListTemplate from "@/components/templates/PortfolioListTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <PortfolioListTemplate vertical={webDevelopment} />;
}
