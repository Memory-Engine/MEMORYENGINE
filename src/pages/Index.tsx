import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { CasesSection } from "@/components/CasesSection";
import { NetworkSection } from "@/components/NetworkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustedBy } from "@/components/TrustedBy";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GradientDivider } from "@/components/GradientDivider";

const Index = () => {
  return (
    <div className="relative noise-overlay">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <GradientDivider />
      <CasesSection />
      <GradientDivider />
      <NetworkSection />
      <GradientDivider />
      <ServicesSection />
      <GradientDivider />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
