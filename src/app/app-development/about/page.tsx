"use client";

import AboutTemplate from "@/components/templates/AboutTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <AboutTemplate vertical={appDevelopment} />;
}
