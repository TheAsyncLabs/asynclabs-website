import { motion } from "framer-motion";

const technologies = [
  "Flutter",
  "Dart",
  "Firebase",
  "PostgreSQL",
  "Cloud Run",
  "Stripe",
  "Supabase",
  "GitHub Actions",
];

const TechStack = () => {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Built With
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        {/* Marquee track — duplicated for seamless loop */}
        <motion.div
          className="flex shrink-0 gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-semibold text-muted-foreground/60 hover:text-[#F06B3A] transition-colors duration-300 cursor-default select-none px-3"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
