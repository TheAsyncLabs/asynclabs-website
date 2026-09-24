"use client";

import ServiceDetailTemplate from "@/components/templates/ServiceDetailTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <ServiceDetailTemplate vertical={ai} />;
}
