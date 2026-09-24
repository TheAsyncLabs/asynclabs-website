"use client";

import ContactTemplate from "@/components/templates/ContactTemplate";
import { webDevelopment } from "@/data/verticals/web-development";

export default function Page() {
  return <ContactTemplate vertical={webDevelopment} />;
}
