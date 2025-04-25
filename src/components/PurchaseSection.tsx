
import { Check, Download, Users } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const PurchaseSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    "31-page comprehensive guide to online entrepreneurship",
    "Pricing guide included",
    "Access to future updates",
    "Access to private community group chat",
    "Connect with other successful sellers for support"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would connect to a payment processor API
      // and send the ebook via email after successful payment
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      toast.success("Purchase successful! Check your email for your ebook", {
        description: "Your ebook has been sent to " + email,
        duration: 5000,
      });
      
      setEmail("");
    } catch (error) {
      toast.error("Payment failed. Please try again.", {
        description: "There was an issue processing your payment",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-xs mt-1 text-gray-500">Your ebook will be delivered to this email immediately after purchase</p>
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input 
                        type="text" 
                        id="expiry" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                        CVC
                      </label>
                      <input 
                        type="text" 
                        id="cvc" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-pink focus:border-transparent outline-none transition-all"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-4 rounded-lg text-center transition-colors flex items-center justify-center gap-2 mt-6"
                    disabled={isSubmitting}
                  >
                    <Download className="w-5 h-5" />
                    {isSubmitting ? "Processing..." : "Buy Now (£100)"}
                  </button>
                </form>
                
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
    </section>
  );
};

export default PurchaseSection;
