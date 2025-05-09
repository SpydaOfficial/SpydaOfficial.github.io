
import { Users } from "lucide-react";
import { motion } from "framer-motion";
import PurchaseBenefits from "./PurchaseBenefits";
import PurchaseActions from "./PurchaseActions";
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
      
      <div className="container mx-auto px-6 relative z-10">
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
            {/* Removed the underline span as requested */}
          </h3>
          <p className="max-w-2xl mx-auto text-white/80 mt-6 text-lg">
            Join thousands of successful online entrepreneurs with this 31-page guide
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PurchaseCard>
            <div className="lg:w-1/2 p-10 md:p-12 bg-cosmic-blue relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-pink/20 rounded-full blur-xl"></div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-3xl font-bold mb-6 font-playfair">
                  The Internet Hoe
                  <span className="block text-xl font-normal mt-2">Complete Guide</span>
                </h4>
                
                <div className="mb-10">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl font-bold absolute left-10 md:left-12 top-32 z-10">only £100</div>
                    <div className="text-sm line-through text-white/70 ml-40">£150.00</div>
                  </div>
                  <div className="text-brand-pink font-medium mt-2 flex items-center">
                    <span className="mr-2">Instant Digital Delivery</span>
                    <motion.span 
                      className="animate-pulse"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity
                      }}
                    >✨</motion.span>
                  </div>
                </div>
              </motion.div>
              
              <PurchaseBenefits benefits={benefits} />
              
              <motion.div 
                className="p-5 rounded-2xl bg-white/10 mb-6 flex items-center gap-4 hover:bg-white/15 transition-colors border border-white/5 cursor-pointer group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Users className="text-brand-pink w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-lg">
                  Join our supportive community of entrepreneurs and get real-time advice.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 p-10 md:p-12 bg-white text-gray-800">
              <PurchaseActions />
            </div>
          </PurchaseCard>
        </motion.div>
      </div>
    </section>
  );
};

export default PurchaseSection;
