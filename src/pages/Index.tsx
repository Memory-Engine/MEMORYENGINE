import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBy } from "@/components/TrustedBy";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CasesSection } from "@/components/CasesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
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
      <AboutSection />
      <GradientDivider />
      <ProcessSection />
      <GradientDivider />
      <ServicesSection />
      <GradientDivider />
      <CasesSection />
      <GradientDivider />
      <WhyUsSection />
      <GradientDivider />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
