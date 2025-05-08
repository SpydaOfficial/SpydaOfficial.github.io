
import { motion } from "framer-motion";
import PurchaseBenefits from "./PurchaseBenefits";
import PurchaseCommunity from "./PurchaseCommunity";

interface PurchaseInfoSideProps {
  benefits: string[];
}

const PurchaseInfoSide = ({ benefits }: PurchaseInfoSideProps) => {
  return (
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
            <div className="text-4xl font-bold">£100.00</div>
            <div className="text-sm line-through text-white/70">£150.00</div>
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
      <PurchaseCommunity />
    </div>
  );
};

export default PurchaseInfoSide;
