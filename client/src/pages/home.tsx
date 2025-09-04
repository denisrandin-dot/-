import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import BenefitsSection from "@/components/sections/benefits-section";
import WhyChooseUsSection from "@/components/sections/why-choose-us-section";
import StatsSection from "@/components/sections/stats-section";
import ProcessVisualizationSection from "@/components/sections/process-visualization-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FinalCTASection from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <WhyChooseUsSection />
        <StatsSection />
        <ProcessVisualizationSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
