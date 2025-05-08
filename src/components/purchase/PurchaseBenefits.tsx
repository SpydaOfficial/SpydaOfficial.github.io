
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PurchaseBenefitsProps {
  benefits: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PurchaseBenefits = ({ benefits }: PurchaseBenefitsProps) => {
  return (
    <motion.div 
      className="space-y-4 mb-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {benefits.map((benefit, index) => (
        <motion.div 
          key={index} 
          className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-xl transition-colors"
          variants={itemVariants}
        >
          <div className="mt-1 flex-shrink-0 bg-brand-pink/20 p-1 rounded-full group-hover:bg-brand-pink/40 transition-colors">
            <Check className="w-4 h-4 text-brand-pink" />
          </div>
          <div className="text-base md:text-lg break-words">{benefit}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PurchaseBenefits;
