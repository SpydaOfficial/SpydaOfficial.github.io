
import { motion } from "framer-motion";
import PurchaseInfoSide from "./PurchaseInfoSide";
import PurchaseActions from "./PurchaseActions";

interface PurchaseCardProps {
  benefits: string[];
}

const PurchaseCard = ({ benefits }: PurchaseCardProps) => {
  return (
    <motion.div 
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_70px_rgba(0,0,0,0.4)] transition-all duration-500">
        <div className="flex flex-col lg:flex-row">
          <PurchaseInfoSide benefits={benefits} />
          <PurchaseActions />
        </div>
      </div>
    </motion.div>
  );
};

export default PurchaseCard;
