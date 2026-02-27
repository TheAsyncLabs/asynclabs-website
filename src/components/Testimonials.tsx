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
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#F06B3A] text-[#F06B3A]" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
