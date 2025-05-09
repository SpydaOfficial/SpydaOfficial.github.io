
import React from 'react';
import { motion } from "framer-motion";

interface PurchaseCardProps {
  children: React.ReactNode;
}

const PurchaseCard = ({ children }: PurchaseCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_70px_rgba(0,0,0,0.4)] transition-all duration-500">
      <div className="flex flex-col lg:flex-row">
        {children}
      </div>
    </div>
  );
};

export default PurchaseCard;
