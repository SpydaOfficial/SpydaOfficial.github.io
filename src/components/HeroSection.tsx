
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-cosmic to-cosmic-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              THE INTERNET HOE
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal text-brand-turquoise">
                COMPLETE GUIDE
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl opacity-90 font-poppins">
              A comprehensive 31-page guide to building a thriving online presence and unlocking your financial independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#buy" 
                className="bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-3 rounded-full text-center transition-all transform hover:scale-105 shadow-lg"
              >
                Get Your Copy
              </a>
              <a 
                href="#features" 
                className="bg-transparent border-2 border-white hover:border-brand-turquoise text-white hover:text-brand-turquoise font-medium px-8 py-3 rounded-full text-center transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/4a75294d-ae5a-4330-9471-baaa24b6c509.png" 
                alt="The Internet Hoe eBook Cover" 
                className="w-full max-w-md rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-brand-pink/20 rounded-lg mix-blend-overlay"></div>
              <div className="absolute -bottom-4 -right-4 bg-brand-turquoise text-cosmic font-bold px-6 py-3 rounded-full transform rotate-3">
                Only £100
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="#about" 
            className="text-white/80 hover:text-white flex flex-col items-center transition-colors"
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
