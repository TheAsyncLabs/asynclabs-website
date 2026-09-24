"use client";

import ContactTemplate from "@/components/templates/ContactTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <ContactTemplate vertical={ai} />;
}
