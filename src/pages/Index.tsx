import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessPhases from "@/components/ProcessPhases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ConsultationPopup from "@/components/ConsultationPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <ProcessPhases />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <ConsultationPopup />
    </div>
  );
};

export default Index;
