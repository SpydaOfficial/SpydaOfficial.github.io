
import { motion } from "framer-motion";
import PurchaseCard from "./PurchaseCard";

const PurchaseSection = () => {
  const benefits = [
    "31-page comprehensive guide to online entrepreneurship",
    "Pricing guide included",
    "Access to future updates",
    "Access to private community group chat",
    "Connect with other successful sellers for support"
  ];

  return (
    <section id="buy" className="py-24 bg-cosmic text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="animate-float absolute top-[10%] left-[5%] w-48 h-48 rounded-full bg-brand-pink blur-3xl"></div>
        <div className="animate-float-delay absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-brand-turquoise blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-full overflow-x-hidden">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">Premium Resource</h2>
          <h3 className="text-5xl md:text-6xl font-playfair font-bold mb-4 relative inline-block">
            Get Your Copy Today
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h3>
          <p className="max-w-2xl mx-auto text-white/80 mt-6 text-lg">
            Join thousands of successful online entrepreneurs with this 31-page guide
          </p>
        </motion.div>
        
        <PurchaseCard benefits={benefits} />
      </div>
    </section>
  );
};

export default PurchaseSection;
