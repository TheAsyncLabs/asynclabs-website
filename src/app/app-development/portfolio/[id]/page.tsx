"use client";

import PortfolioDetailTemplate from "@/components/templates/PortfolioDetailTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <PortfolioDetailTemplate vertical={appDevelopment} />;
}
