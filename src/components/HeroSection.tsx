
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-cosmic to-cosmic-blue text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-[5%] left-[10%] w-64 h-64 rounded-full bg-brand-pink/10 blur-3xl"></div>
        <div className="animate-float-delay absolute bottom-[10%] right-[5%] w-96 h-96 rounded-full bg-brand-turquoise/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair leading-tight mb-6">
              THE INTERNET HOE
              <motion.span 
                className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal text-brand-turquoise"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                COMPLETE GUIDE
              </motion.span>
            </h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-xl opacity-90 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A comprehensive 31-page guide to building a thriving online presence and unlocking your financial independence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a 
                href="#buy" 
                className="bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-3 rounded-full text-center transition-all shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get Your Copy
              </motion.a>
              <motion.a 
                href="#features" 
                className="bg-transparent border-2 border-white hover:border-brand-turquoise text-white hover:text-brand-turquoise font-medium px-8 py-3 rounded-full text-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-lg bg-gradient-to-r from-brand-pink/40 to-brand-turquoise/40 blur-xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img 
                src="/lovable-uploads/4a75294d-ae5a-4330-9471-baaa24b6c509.png" 
                alt="The Internet Hoe eBook Cover" 
                className="w-full max-w-md rounded-lg shadow-2xl relative z-10"
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-brand-turquoise text-cosmic font-bold px-6 py-3 rounded-full z-20"
                initial={{ rotate: 3, scale: 1 }}
                animate={{ 
                  rotate: [3, 5, 3],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity
                }}
                whileHover={{ scale: 1.1 }}
              >
                Only £100
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-white/80 hover:text-white flex flex-col items-center transition-colors"
            whileHover={{ y: 3 }}
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity
            }}
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
