
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PurchaseActions = () => {
  const { toast } = useToast();
  
  const handleBuyNow = () => {
    toast({
      title: "Redirecting to payment page",
      description: "You'll now be redirected to our secure payment page.",
      duration: 3000,
    });
    window.location.href = "https://buy.stripe.com/6oE9Eg77PaAN3Is3cc";
  };
  
  return (
    <div className="lg:w-1/2 p-10 md:p-12 bg-white text-gray-800">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <h4 className="text-3xl font-bold mb-8 text-cosmic font-playfair">
          Complete Your Purchase
        </h4>
        
        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
            Click the button below to securely purchase your ebook. You'll receive instant access to download your copy after payment.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              onClick={handleBuyNow}
              className="w-full bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-8 rounded-xl text-center transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-xl"
            >
              <Download className="w-6 h-6" />
              Buy Now (£100)
            </Button>
          </motion.div>
          
          <div className="mt-8 text-center text-gray-500">
            <p>Secure payment processing. All major cards accepted.</p>
            <p className="mt-2">Your information is protected by 256-bit SSL encryption.</p>
            <p className="mt-6 text-sm">By completing this purchase, you agree to our terms and conditions. <span className="font-semibold">No refunds will be provided.</span></p>
          </div>
          
          <motion.div 
            className="mt-8 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            whileHover={{ y: -2 }}
          >
            <div className="text-sm font-medium text-center">Accepted Payment Methods</div>
            <div className="flex justify-center items-center gap-5 mt-3 flex-wrap">
              <div className="text-xs text-gray-600">Visa</div>
              <div className="text-xs text-gray-600">Mastercard</div>
              <div className="text-xs text-gray-600">Amex</div>
              <div className="text-xs text-gray-600">PayPal</div>
              <div className="text-xs text-gray-600">Clearpay</div>
              <div className="text-xs text-gray-600">Klarna</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PurchaseActions;
