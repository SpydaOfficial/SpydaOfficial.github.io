
import { Check, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="buy" className="py-20 bg-cosmic text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">Premium Resource</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Get Your Copy Today
          </h3>
          <p className="max-w-2xl mx-auto text-white/80">
            Join thousands of successful online entrepreneurs with this 31-page guide
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 bg-cosmic-blue">
                <h4 className="text-2xl font-bold mb-6 font-playfair">
                  The Internet Hoe
                  <span className="block text-lg font-normal mt-1">Complete Guide</span>
                </h4>
                
                <div className="mb-8">
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold">£100.00</div>
                    <div className="text-sm line-through text-white/70">£150.00</div>
                  </div>
                  <div className="text-brand-pink font-medium mt-1">Instant Digital Delivery</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-4 h-4 text-brand-pink" />
                      </div>
                      <div>{benefit}</div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-lg bg-white/10 mb-6 flex items-center gap-3">
                  <Users className="text-brand-pink w-5 h-5 flex-shrink-0" />
                  <p className="text-sm">
                    Join our supportive community of entrepreneurs and get real-time advice.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 md:p-12 bg-white text-gray-800">
                <h4 className="text-2xl font-bold mb-6 text-cosmic font-playfair">
                  Complete Your Purchase
                </h4>
                
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Click the button below to securely purchase your ebook. You'll receive instant access to download your copy after payment.
                  </p>
                  
                  <Button 
                    onClick={handleBuyNow}
                    className="w-full bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-8 rounded-lg text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Buy Now (£100)
                  </Button>
                  
                  <div className="mt-6 text-center text-sm text-gray-500">
                    <p>Secure payment processing. All major cards accepted.</p>
                    <p className="mt-1">Your information is protected by 256-bit SSL encryption.</p>
                    <p className="mt-4 text-xs">By completing this purchase, you agree to our terms and conditions. <span className="font-semibold">No refunds will be provided.</span></p>
                  </div>
                  
                  <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                    <div className="text-xs font-medium text-center">Accepted Payment Methods</div>
                    <div className="flex justify-center items-center gap-3 mt-2">
                      <div className="text-xs text-gray-600">Visa</div>
                      <div className="text-xs text-gray-600">Mastercard</div>
                      <div className="text-xs text-gray-600">Amex</div>
                      <div className="text-xs text-gray-600">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
