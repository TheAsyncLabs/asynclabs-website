"use client";

import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <ServiceDetailTemplate vertical={appDevelopment} />;
}
