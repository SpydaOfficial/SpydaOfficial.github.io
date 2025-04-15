
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-playfair flex items-center">
              <span className="text-brand-pink">Mya's</span> World
            </h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Empowering individuals to embrace their authentic selves and achieve financial independence through online entrepreneurship.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Mya's World. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-8">
              <a href="#" className="text-gray-400 hover:text-brand-pink text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink text-sm transition-colors">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-pink text-sm transition-colors">
                Age Verification
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>This product contains adult content and is intended for individuals 18 years or older.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
