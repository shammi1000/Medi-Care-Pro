import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChallengesSection from "@/components/ChallengesSection";
import SolutionSection from "@/components/SolutionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import FeatureShowcase from "@/components/FeatureShowcase";
import ROISection from "@/components/ROISection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <SolutionSection />
      <CapabilitiesSection />
      <FeatureShowcase />
      <ROISection />
      <ContactSection />
    </main>
  );
};

export default Index;
