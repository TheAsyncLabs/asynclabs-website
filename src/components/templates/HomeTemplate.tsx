"use client";

import Hero from "@/components/Hero";
import ServiceGallery from "@/components/ServiceGallery";
import Services from "@/components/Services";
import Retainers from "@/components/Retainers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";
import FloatingCTA from "@/components/FloatingCTA";
import ConsultationPopup from "@/components/ConsultationPopup";
import type { Vertical } from "@/data/verticals/types";

export default function HomeTemplate({ vertical }: { vertical: Vertical }) {
  return (
    <>
      <main>
        <Hero vertical={vertical} />
        <ServiceGallery vertical={vertical} />
        <Services vertical={vertical} />
        <Retainers vertical={vertical} />
        <Testimonials vertical={vertical} />
        <FAQ vertical={vertical} />
        <CTAFooter vertical={vertical} />
      </main>
      <FloatingCTA vertical={vertical} />
      <ConsultationPopup vertical={vertical} />
    </>
  );
}
