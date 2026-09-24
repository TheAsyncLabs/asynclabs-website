import type { LucideIcon } from "lucide-react";

export interface Phase {
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
}
