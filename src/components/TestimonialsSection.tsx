
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "This ebook literally changed my life! I went from struggling to pay rent to making $5K a month in just 10 weeks using Mya's strategies.",
      author: "Jessica K.",
      stars: 5
    },
    {
      content: "As someone new to the industry, I was lost before finding this guide. The safety tips alone are worth the price, but the marketing strategies are pure gold.",
      author: "Amber T.",
      stars: 5
    },
    {
      content: "I've bought several guides before, but this is the only one with practical, actionable advice. Mya doesn't sugarcoat anything - she tells it like it is.",
      author: "Tiffany R.",
      stars: 5
    },
    {
      content: "Within 3 months of following this guide, I've built a loyal subscriber base and quit my 9-5. The template messages saved me countless hours!",
      author: "Layla M.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-turquoise">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-white font-medium mb-2">The Importance Of</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cosmic mb-4">
            CUSTOMER
            <span className="block italic mt-2 font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Testimonials
            </span>
          </h3>
          
          <div className="flex justify-center mt-6 mb-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-pink">
              <img 
                src="/lovable-uploads/6ad12c1c-15de-4ede-9f7e-154596542510.png" 
                alt="Mya's World Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg mb-12">
          <p className="text-gray-800 mb-6">
            This part is a no-brainer! In any business, reviews are crucial, good or bad. Especially in this industry, where building credibility is key, reviews are your best friend. With so many scams floating around, we can't afford to ignore this.
          </p>
          <p className="text-gray-800 mb-6">
            It doesn't take much to keep a customer satisfied; just avoid being entitled or rude. If someone's unhappy, do your best to resolve it and keep the door open for future business. You'll soon learn that low spenders often complain the loudest and are the first to demand refunds—BUT WE DO NOT REFUND, HONEY! If you've tried to make things right, take a screenshot or jot down notes as proof and move on; don't let it get to you.
          </p>
          <p className="text-gray-800">
            Don't hesitate to ask customers for reviews—they usually want to support your success and will be happy to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="fill-brand-pink text-brand-pink w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <p className="text-right font-medium text-cosmic">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-cosmic text-cosmic w-6 h-6" />
              ))}
            </div>
            <div className="text-2xl font-playfair text-cosmic">Mya's World</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
