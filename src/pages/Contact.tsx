import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

const Contact = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Let's Build Together</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your app idea and we'll walk you through our 5-phase process to bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: 5-Phase Process Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Our 5-Phase App Lifecycle</h2>
              <p className="text-muted-foreground text-sm">A battle-tested methodology that ships on time and scales effortlessly.</p>
            </div>

            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-[#F06B3A]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-sunset text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-sm shadow-[#E0337A]/25">
                    {phase.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <phase.icon className="w-4 h-4 text-sunset shrink-0" />
                      <h3 className="text-base font-bold text-foreground">{phase.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{phase.subtitle}</p>
                    <ul className="space-y-1.5">
                      {phase.points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sunset mt-1.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Start Your Project</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idea">App Idea</Label>
                  <Textarea id="idea" placeholder="Describe your app idea..." className="rounded-xl min-h-[120px]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-25k">$10K – $25K</SelectItem>
                        <SelectItem value="25k-50k">$25K – $50K</SelectItem>
                        <SelectItem value="50k-100k">$50K – $100K</SelectItem>
                        <SelectItem value="100k+">$100K+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2months">1–2 Months</SelectItem>
                        <SelectItem value="3-4months">3–4 Months</SelectItem>
                        <SelectItem value="5-6months">5–6 Months</SelectItem>
                        <SelectItem value="6months+">6+ Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button size="lg" className="rounded-full w-full gap-2 group text-base bg-sunset hover:bg-sunset-hover border-0 text-white">
                  Send Message
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-center text-xs text-muted-foreground">We'll get back to you within 24 hours.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Contact;
