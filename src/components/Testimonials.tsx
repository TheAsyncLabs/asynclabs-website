import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Async transformed our idea into a beautifully architected Flutter app. The structured approach saved us months of development time.",
    name: "Sarah Chen",
    role: "CTO, TechVentures",
    stars: 5,
  },
  {
    quote: "Their 5-phase process gave us complete visibility into every stage. We always knew exactly where our project stood.",
    name: "Michael Torres",
    role: "Founder, BookEasy",
    stars: 5,
  },
  {
    quote: "The scalability of the app they built is incredible. We went from 1K to 100K users without a single architecture change.",
    name: "Priya Sharma",
    role: "Product Lead, EduFlow",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Book Your Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
