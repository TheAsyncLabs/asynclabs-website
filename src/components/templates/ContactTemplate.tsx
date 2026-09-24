"use client";

import { useState } from "react";
import { ArrowRight, Check, AlertCircle } from "lucide-react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import type { Vertical } from "@/data/verticals/types";

const inputClass =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-accent";

export default function ContactTemplate({ vertical }: { vertical: Vertical }) {
  const basePath = `/${vertical.slug}`;
  const [formData, setFormData] = useState({ name: "", email: "", idea: "", budget: "", timeline: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, practice: vertical.practice }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent. We'll be in touch within 24 hours.");
        setFormData({ name: "", email: "", idea: "", budget: "", timeline: "" });
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted">Get in Touch</p>
          <SplitReveal
            as="h1"
            immediate
            splitType="words"
            className="font-display text-[11vw] font-medium uppercase leading-[0.95] md:text-[4.5vw]"
          >
            Let&apos;s build together
          </SplitReveal>
          <p className="mt-6 text-lg text-muted">{vertical.contactIntro}</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: process overview */}
          <div className="space-y-4">
            <h2 className="mb-2 font-display text-2xl font-medium">Our 5-Phase Build Lifecycle</h2>
            <p className="mb-8 text-sm text-muted">
              A battle-tested methodology that ships on time and scales effortlessly.
            </p>

            {vertical.process.map((phase) => (
              <Reveal key={phase.title} start="top 95%" end="bottom 5%">
                <div className="glass-card rounded-xl p-5 transition-colors hover:border-accent/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-background">
                      {phase.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <phase.icon className="h-4 w-4 shrink-0 text-accent" />
                        <h3 className="text-base font-bold">{phase.title}</h3>
                      </div>
                      <p className="mb-3 text-xs text-muted">{phase.subtitle}</p>
                      <ul className="space-y-1.5">
                        {phase.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-sm text-muted">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-32">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="mb-6 font-display text-2xl font-medium">Start Your Project</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className={inputClass}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="idea" className="text-xs uppercase tracking-widest text-muted">
                    Project Details
                  </label>
                  <textarea
                    id="idea"
                    placeholder={vertical.contactPlaceholder}
                    className={`${inputClass} min-h-[120px] resize-none`}
                    value={formData.idea}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs uppercase tracking-widest text-muted">
                      Budget Range
                    </label>
                    <select id="budget" className={inputClass} value={formData.budget} onChange={handleChange}>
                      <option value="">Select budget</option>
                      <option value="10k-25k">$10K – $25K</option>
                      <option value="25k-50k">$25K – $50K</option>
                      <option value="50k-100k">$50K – $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-xs uppercase tracking-widest text-muted">
                      Timeline
                    </label>
                    <select id="timeline" className={inputClass} value={formData.timeline} onChange={handleChange}>
                      <option value="">Select timeline</option>
                      <option value="1-2months">1–2 Months</option>
                      <option value="3-4months">3–4 Months</option>
                      <option value="5-6months">5–6 Months</option>
                      <option value="6months+">6+ Months</option>
                    </select>
                  </div>
                </div>

                {status !== "idle" && (
                  <div
                    className={`flex items-center gap-2 rounded-lg p-4 text-sm ${
                      status === "success"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status === "success" ? (
                      <Check className="h-4 w-4 shrink-0" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0" />
                    )}
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  data-cursor
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-muted">We&apos;ll get back to you within 24 hours.</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-6xl border-t border-line">
        <Footer basePath={basePath} />
      </div>
    </main>
  );
}
