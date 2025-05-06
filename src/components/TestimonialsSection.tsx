
import { motion } from "framer-motion";
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
    <section id="testimonials" className="py-24 bg-brand-turquoise">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-white font-medium mb-2">The Importance Of</h2>
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-cosmic mb-4 relative inline-block">
            TESTIMONIALS
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-white/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h3>
          
          <motion.div 
            className="flex justify-center mt-10 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-pink shadow-xl">
              <motion.img 
                src="/lovable-uploads/6ad12c1c-15de-4ede-9f7e-154596542510.png" 
                alt="Mya's World Avatar" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-800 mb-6 text-lg">
            This part is a no-brainer! In any business, reviews are crucial, good or bad. Especially in this industry, where building credibility is key, reviews are your best friend. With so many scams floating around, we can't afford to ignore this.
          </p>
          <p className="text-gray-800 mb-6">
            It doesn't take much to keep a customer satisfied; just avoid being entitled or rude. If someone's unhappy, do your best to resolve it and keep the door open for future business. You'll soon learn that low spenders often complain the loudest and are the first to demand refunds—BUT WE DO NOT REFUND, HONEY! If you've tried to make things right, take a screenshot or jot down notes as proof and move on; don't let it get to you.
          </p>
          <p className="text-gray-800 font-medium">
            Don't hesitate to ask customers for reviews—they usually want to support your success and will be happy to help!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="fill-brand-pink text-brand-pink w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic text-lg">"{testimonial.content}"</p>
              <p className="text-right font-medium text-cosmic">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-cosmic text-cosmic w-6 h-6" />
              ))}
            </div>
            <div className="text-2xl font-playfair text-cosmic">Mya's World</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
