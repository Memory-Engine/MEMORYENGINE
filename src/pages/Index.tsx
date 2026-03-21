import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBy } from "@/components/TrustedBy";
import { CasesSection } from "@/components/CasesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { NetworkSection } from "@/components/NetworkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { GradientDivider } from "@/components/GradientDivider";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="relative noise-overlay">
      <FloatingParticles count={25} />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <GradientDivider />
      <CasesSection />
      <GradientDivider />
      <ProcessSection />
      <GradientDivider />
      <NetworkSection />
      <GradientDivider />
      <ServicesSection />
      <GradientDivider />
      <WhyUsSection />
      <GradientDivider />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
