"use client";

import ContactTemplate from "@/components/templates/ContactTemplate";
import { appDevelopment } from "@/data/verticals/app-development";

export default function Page() {
  return <ContactTemplate vertical={appDevelopment} />;
}
