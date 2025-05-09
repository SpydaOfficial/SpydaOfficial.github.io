
import { Check, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PurchaseSection = () => {
  const benefits = [
    "31-page comprehensive guide to online entrepreneurship",
    "Pricing guide included",
    "Access to future updates",
    "Access to private community group chat",
    "Connect with other successful sellers for support"
  ];

  const handleBuyNow = () => {
    window.location.href = "https://buy.stripe.com/6oE9Eg77PaAN3Is3cc";
  };

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
            {/* Removed underline element here */}
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
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_35px_70px_rgba(0,0,0,0.4)] transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
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
                    <div className="flex items-center gap-3 relative">
                      <div className="text-4xl font-bold">£100.00</div>
                      <div className="text-sm line-through text-white/70">£150.00</div>
                      {/* Added the "Only £100" text positioned to overlap with the image */}
                      <motion.div 
                        className="absolute -left-16 -top-10 bg-brand-turquoise text-cosmic font-bold px-5 py-2 rounded-full z-20 -rotate-12"
                        animate={{ 
                          rotate: [-12, -8, -12],
                          y: [0, -5, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          ease: "easeInOut", 
                          repeat: Infinity
                        }}
                      >
                        Only £100
                      </motion.div>
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
                      <div className="bg-brand-pink/20 p-1 rounded-full group-hover:bg-brand-pink/40 transition-colors">
                        <Check className="w-4 h-4 text-brand-pink" />
                      </div>
                      <div className="text-lg">{benefit}</div>
                    </motion.div>
                  ))}
                </motion.div>
                
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
                      <p className="mt-6 text-sm">
                        By completing this purchase, you agree to our terms and conditions.
                        <br /> 
                        <span className="font-semibold">No refunds will be provided.</span>
                      </p>
                    </div>
                    
                    <motion.div 
                      className="mt-8 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-sm font-medium text-center">Accepted Payment Methods</div>
                      <div className="flex justify-center items-center gap-5 mt-3">
                        <div className="text-xs text-gray-600">Visa</div>
                        {/* Removed "Mastercard" */}
                        {/* Removed "Amex" */}
                        <div className="text-xs text-gray-600">PayPal</div>
                        <div className="text-xs text-gray-600">Clearpay</div>
                        <div className="text-xs text-gray-600">Klarna</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurchaseSection;
