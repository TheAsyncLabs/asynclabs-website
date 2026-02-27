import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, PenTool, Server, Code2, Rocket, ChevronDown } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: Search,
    title: "Define",
    subtitle: "Discovery & Requirements",
    points: ["Stakeholder interviews", "Market & competitor analysis", "Feature prioritization", "User persona mapping"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Architect",
    subtitle: "Design & Planning",
    points: ["System architecture design", "UI/UX wireframing", "Tech stack finalization", "Database schema planning"],
  },
  {
    number: "03",
    icon: Server,
    title: "Backend Foundation",
    subtitle: "Infrastructure Setup",
    points: ["API development", "Authentication & security", "Cloud infrastructure", "CI/CD pipeline setup"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Development & Integration",
    subtitle: "Build & Connect",
    points: ["Flutter app development", "API integration", "Third-party services", "Testing & QA cycles"],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    subtitle: "Deploy & Maintain",
    points: ["App store submission", "Performance monitoring", "Bug fixes & updates", "Feature enhancements"],
  },
];

type Phase = (typeof phases)[number];

const PhaseCard = ({ phase, index }: { phase: Phase; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer rounded-xl border border-border bg-card p-6 hover:border-[#F06B3A]/30 hover:shadow-lg hover:shadow-[#E0337A]/5 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
          <phase.icon className="w-5 h-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
          <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 pt-4 border-t border-border space-y-3">
              {phase.points.map((point, pi) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: pi * 0.08 }}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sunset mt-1.5 shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProcessPhases = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.8"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]
  );

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            5-Phase App Lifecycle
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured, battle-tested methodology that ensures every project ships on time and scales effortlessly.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Static track line */}
          <div className="absolute left-6 md:left-1/2 top-0 w-[2px] md:-translate-x-[1px] h-full bg-border/50" />

          {/* Animated sunset line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-[2px] md:-translate-x-[1px] h-full bg-sunset-vertical"
            style={{ clipPath }}
          />

          {/* Phase rows */}
          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={phase.title}
                  className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_48px_1fr] gap-4 md:gap-8 items-start"
                >
                  {/* Left column (desktop only) */}
                  <div className="hidden md:block">
                    {isLeft && <PhaseCard phase={phase} index={i} />}
                  </div>

                  {/* Center: phase number circle */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="absolute w-12 h-12 rounded-full bg-sunset opacity-20 blur-md" />
                    <div className="relative w-12 h-12 rounded-full bg-sunset text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-[#E0337A]/25">
                      {phase.number}
                    </div>
                  </div>

                  {/* Right column (desktop) / Main column (mobile) */}
                  <div className="block md:hidden">
                    <PhaseCard phase={phase} index={i} />
                  </div>
                  <div className="hidden md:block">
                    {!isLeft && <PhaseCard phase={phase} index={i} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Button size="lg" className="rounded-full px-10 text-base gap-2 group bg-sunset hover:bg-sunset-hover border-0 text-white">
            Let's Start Your App Architecture
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Book a free consultation call</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessPhases;
