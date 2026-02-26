import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="section-padding pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">We Are Async</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of passionate Flutter developers and architects dedicated to building software that scales. About page content coming soon.
          </p>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
