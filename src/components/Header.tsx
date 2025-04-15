
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoComponent from "./LogoComponent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <LogoComponent />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-cosmic hover:text-brand-pink font-medium transition-colors">
            Home
          </a>
          <a href="#about" className="text-cosmic hover:text-brand-pink font-medium transition-colors">
            About
          </a>
          <a href="#features" className="text-cosmic hover:text-brand-pink font-medium transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-cosmic hover:text-brand-pink font-medium transition-colors">
            Testimonials
          </a>
          <a 
            href="#buy" 
            className="bg-brand-pink text-white px-5 py-2 rounded-full font-medium hover:bg-brand-darkPink transition-colors"
          >
            Buy Now
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-cosmic"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-cosmic hover:text-brand-pink font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-cosmic hover:text-brand-pink font-medium transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#features" 
              className="text-cosmic hover:text-brand-pink font-medium transition-colors"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-cosmic hover:text-brand-pink font-medium transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <a 
              href="#buy" 
              className="bg-brand-pink text-white px-4 py-2 rounded-full font-medium hover:bg-brand-darkPink transition-colors text-center"
              onClick={toggleMenu}
            >
              Buy Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
