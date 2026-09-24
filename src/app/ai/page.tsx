"use client";

import HomeTemplate from "@/components/templates/HomeTemplate";
import { ai } from "@/data/verticals/ai";

export default function Page() {
  return <HomeTemplate vertical={ai} />;
}
