"use client";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <HomeTemplate vertical={appDevelopment} />;
}
