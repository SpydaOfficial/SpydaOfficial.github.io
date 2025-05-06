
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" }
  ];
  
  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Age Verification", href: "#" }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-playfair flex items-center">
              <span className="text-brand-pink">Mya's</span> World
            </h2>
            <p className="text-gray-400 mt-3 max-w-md">
              Empowering individuals to embrace their authentic selves and achieve financial independence through online entrepreneurship.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Mya's World. All rights reserved.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6 md:gap-8 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {footerLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-brand-pink text-sm transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center text-xs text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>This product contains adult content and is intended for individuals 18 years or older.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
