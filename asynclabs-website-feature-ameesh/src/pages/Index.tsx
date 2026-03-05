import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import ProcessPhases from "@/components/ProcessPhases";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ConsultationPopup from "@/components/ConsultationPopup";
import EditorialNarrative from "@/components/EditorialNarrative";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <EditorialNarrative text="Most apps fail before they scale. Not because of bad ideas — because of bad architecture." />
      <Services />
      <TechStack />
      <EditorialNarrative text="Building fast and building right are not opposites. They're the same discipline." />
      <ProcessPhases />
      <EditorialNarrative text="The difference between a $20k app and a $200k app isn't the features. It's the foundation." />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
      <ConsultationPopup />
    </div>
  );
};

export default Index;
