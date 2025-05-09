
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PurchaseSection from "@/components/purchase/PurchaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="font-poppins">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      {/* Templates section removed as requested */}
      <TestimonialsSection />
      <PurchaseSection />
      <Footer />
    </div>
  );
};

export default Index;
