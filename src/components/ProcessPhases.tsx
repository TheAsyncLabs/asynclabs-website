import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, PenTool, Server, Code2, Rocket } from "lucide-react";

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

const ProcessPhases = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
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

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-border" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* Phase number circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-6 mx-auto lg:mx-0">
                  {phase.number}
                </div>

                {/* Arrow connector (desktop) */}
                {i < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(100%-8px)] z-20">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}

                <div className="text-center lg:text-left">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3 mx-auto lg:mx-0">
                    <phase.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>
                  <ul className="space-y-2">
                    {phase.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start gap-2 justify-center lg:justify-start">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Button size="lg" className="rounded-full px-10 text-base gap-2 group">
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
