import { ShoppingCart, Calendar, GraduationCap, LayoutDashboard, Brain } from "lucide-react";

const services = [
  { icon: ShoppingCart, title: "E-Commerce Apps", desc: "Full-featured shopping experiences with secure payments and inventory management." },
  { icon: Calendar, title: "Booking Platforms", desc: "Real-time scheduling and reservation systems with calendar integration." },
  { icon: GraduationCap, title: "EdTech Solutions", desc: "Interactive learning platforms with progress tracking and multimedia content." },
  { icon: LayoutDashboard, title: "SaaS Dashboards", desc: "Data-driven admin panels with analytics, charts, and role management." },
  { icon: Brain, title: "AI Integrated Systems", desc: "Smart applications powered by machine learning and intelligent automation." },
];

const Services = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">What We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Solutions That Scale
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
