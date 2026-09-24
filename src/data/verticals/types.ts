import type { LucideIcon } from "lucide-react";
import type { Service } from "@/data/services";
import type { Phase } from "@/data/process";
import type { Project } from "@/data/portfolio";

export interface ServiceRow {
  name: string;
  desc: string;
}

export interface Retainer {
  name: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Pillar {
  label: string;
}

export interface Vertical {
  slug: string;
  name: string;
  shortLabel: string;
  tagline: string;
  /** Used to tag Slack contact-form notifications, e.g. "AI Integration" */
  practice: string;

  hero: {
    eyebrow?: string;
    headline: string;
    subcopy: string;
    marqueeItems: string[];
  };

  services: Service[];
  serviceRows: ServiceRow[];
  retainers: Retainer[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  process: Phase[];
  portfolio: Project[];

  about: {
    subcopy: string;
    missionPre: string;
    missionHighlight: string;
    missionPost: string;
    values: Value[];
    pillars: Pillar[];
  };

  ctaHeadline: string;
  contactIntro: string;
  contactPlaceholder: string;
}

export const basePathOf = (vertical: Pick<Vertical, "slug">) => `/${vertical.slug}`;
