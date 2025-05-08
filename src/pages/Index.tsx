
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PurchaseSection from "@/components/purchase/PurchaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Prevent horizontal scrolling
    document.body.style.overflowX = "hidden";
    
    // Clean up on unmount
    return () => {
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="font-poppins overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PurchaseSection />
      <Footer />
    </div>
  );
};

export default Index;
