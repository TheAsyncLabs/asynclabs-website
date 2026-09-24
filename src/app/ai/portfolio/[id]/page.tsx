"use client";

import PortfolioDetailTemplate from "@/components/templates/PortfolioDetailTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <PortfolioDetailTemplate vertical={ai} />;
}
