import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <AuroraBackground className="relative min-h-screen section-padding pt-32">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Flutter Development Studio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.05]">
            We Build Scalable Flutter Apps —{" "}
            <span className="text-sunset">The Right Way.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Structured architecture. Built with Flutter & Dart. Designed to scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild size="lg" variant="glass-sunset" className="rounded-full px-8 text-base gap-2 group">
            <Link to="/contact">
              Start Your App Architecture
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg" className="rounded-full px-8 text-base text-foreground/80">
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
