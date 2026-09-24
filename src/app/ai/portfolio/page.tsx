"use client";

import PortfolioListTemplate from "@/components/templates/PortfolioListTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <PortfolioListTemplate vertical={ai} />;
}
