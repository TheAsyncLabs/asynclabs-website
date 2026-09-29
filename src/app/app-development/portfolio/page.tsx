"use client";

import PortfolioListTemplate from "@/components/templates/PortfolioListTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <PortfolioListTemplate vertical={appDevelopment} />;
}
