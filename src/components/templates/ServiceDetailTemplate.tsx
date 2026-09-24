"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/data/services";
import type { Vertical } from "@/data/verticals/types";

export default function ServiceDetailTemplate({ vertical }: { vertical: Vertical }) {
  const { slug } = useParams<{ slug: string }>();
  const basePath = `/${vertical.slug}`;
  const service = slug ? getServiceBySlug(vertical.services, slug) : undefined;

  if (!service) {
    return (
      <main className="px-6 pb-28 pt-32 text-center md:px-10 md:pt-40">
        <h1 className="font-display text-4xl font-medium md:text-5xl">Service not found</h1>
        <p className="mt-4 text-muted">It might have been renamed or doesn&apos;t exist.</p>
        <Link
          href={basePath}
          data-cursor
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-widest text-background"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </main>
    );
  }

  const Icon = service.icon;
  const index = vertical.services.findIndex((s) => s.slug === service.slug);
  const next = vertical.services[(index + 1) % vertical.services.length];

  return (
    <main>
      {/* Hero banner */}
      <section className="relative h-[70svh] w-full overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
        {service.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />
          </>
        ) : (
          <div
            className="absolute -right-1/4 -top-1/4 h-3/4 w-3/4 rounded-full opacity-40 blur-3xl"
            style={{ background: service.glow }}
          />
        )}

        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pt-36">
          <Link
            href={`${basePath}#gallery`}
            data-cursor
            className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-widest text-foreground/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            What we build
          </Link>

          <div className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
            </div>
            <span className="text-xs uppercase tracking-widest text-foreground/80">{service.tag}</span>
            <SplitReveal
              as="h1"
              immediate
              splitType="words"
              className="mt-1 font-display text-[11vw] font-medium uppercase leading-[0.95] text-foreground md:text-[5vw]"
            >
              {service.name}
            </SplitReveal>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <Reveal start="top 90%" end="bottom 10%">
          <p className="font-display text-2xl font-medium leading-relaxed md:text-3xl">{service.summary}</p>
          <p className="mt-6 leading-relaxed text-muted">{service.description}</p>
        </Reveal>

        <Reveal className="mt-16" start="top 90%" end="bottom 10%">
          <h2 className="mb-6 font-display text-2xl font-medium">What we build</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16" start="top 90%" end="bottom 10%">
          <h2 className="mb-2 font-display text-2xl font-medium">Optimizing tech</h2>
          <p className="mb-6 text-sm text-muted">
            The tools we reach for most on {service.name.toLowerCase()} projects — matched to your scale
            and budget, not sold as a package.
          </p>
          <div className="flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-line px-4 py-1.5 text-sm text-muted">
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-24 text-center" start="top 90%" end="bottom 10%">
          <h2 className="font-display text-3xl font-medium md:text-4xl">Want this built for you?</h2>
          <Link
            href={`${basePath}/contact`}
            data-cursor
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      {/* Next service */}
      <Link
        href={`${basePath}/services/${next.slug}`}
        data-cursor
        className="group relative flex h-64 items-center justify-center overflow-hidden border-t border-line"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${next.gradient} opacity-90`} />
        {next.image && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={next.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/55" />
          </>
        )}
        <div className="relative z-10 text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          <span className="text-xs uppercase tracking-widest text-foreground/80">Next Service</span>
          <h3 className="mt-2 font-display text-3xl font-medium uppercase transition-transform duration-300 group-hover:-translate-y-1 md:text-5xl">
            {next.name}
          </h3>
        </div>
      </Link>

      <div className="mx-auto max-w-6xl border-t border-line px-6 md:px-10">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
