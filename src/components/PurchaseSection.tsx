import { Check, Download, Users } from "lucide-react";

const PurchaseSection = () => {
  const benefits = [
    "31-page comprehensive guide to online entrepreneurship",
    "Pricing guide included",
    "Lifetime access to future updates",
    "Access to private community group chat",
    "Connect with other successful sellers for support",
    "Bonus: Content calendar template",
    "Bonus: Pricing calculator spreadsheet"
  ];

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
                  <div className="text-3xl font-bold">£100.00</div>
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
                
                <form className="space-y-4">
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
                    />
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
                  >
                    <Download className="w-5 h-5" />
                    Buy Now (£100)
                  </button>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>Secure payment processing. No hidden fees.</p>
                  <p className="mt-1">Your information is protected by 256-bit SSL encryption.</p>
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
