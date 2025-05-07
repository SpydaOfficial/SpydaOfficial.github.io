
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div 
            className="mb-8 md:mb-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-playfair flex items-center justify-center">
              <span className="text-brand-pink">Mya's</span> World
            </h2>
            <p className="text-gray-400 mt-3 max-w-md mx-auto">
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
            <motion.a 
              href="https://www.instagram.com/myasworld_insta?igsh=NGc4bnVxejBpYWRy" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-10">
          <div className="flex justify-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Mya's World. All rights reserved.
              </p>
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
