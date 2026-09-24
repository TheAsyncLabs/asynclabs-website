"use client";

import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <ServiceDetailTemplate vertical={webDevelopment} />;
}
