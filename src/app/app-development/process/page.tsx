"use client";

import ProcessTemplate from "@/components/templates/ProcessTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <ProcessTemplate vertical={appDevelopment} />;
}
