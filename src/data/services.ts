import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  name: string;
  tag: string;
  icon: LucideIcon;
  gradient: string;
  glow: string;
  image?: string;
  chart?: boolean;
  span: "tall" | "wide";
  summary: string;
  description: string;
  capabilities: string[];
  stack: string[];
}

export const getServiceBySlug = (services: Service[], slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);
