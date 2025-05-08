
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const PurchaseCommunity = () => {
  return (
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
  );
};

export default PurchaseCommunity;
