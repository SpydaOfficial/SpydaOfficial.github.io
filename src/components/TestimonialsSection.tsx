
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "This incredible guide transformed my life completely! I went from barely making ends meet to generating $7K monthly within just 8 weeks. The confidence I've gained to take control of my finances is priceless.",
      author: "Mistress Power",
      stars: 5
    },
    {
      content: "As a newcomer, this guide was my salvation. Not only did the safety strategies protect me, but I've built a loyal following that brings in consistent income. I'm financially independent for the first time in my life!",
      author: "Lady Domina",
      stars: 5
    },
    {
      content: "After trying countless guides with empty promises, this one delivered real results. The practical advice helped me build a six-figure business in under 6 months. I now have the freedom to live life on my own terms.",
      author: "Queen of Income",
      stars: 5
    },
    {
      content: "Following this guide changed everything for me. Within just 3 months, I've established a thriving subscriber base that generates $10K monthly. I've never felt more empowered and financially secure!",
      author: "Empress Control",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-turquoise">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-white font-medium mb-2">Hear From Our Success Stories</h2>
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-cosmic mb-6 relative inline-block">
            TESTIMONIALS
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-white/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h3>
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
          <motion.a 
            href="https://uk.trustpilot.com/review/myas.world"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-cosmic text-cosmic w-6 h-6" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-playfair text-cosmic">Mya's World</div>
              <ExternalLink className="w-4 h-4 text-cosmic" />
            </div>
            <div className="text-sm text-cosmic/70 mt-1">View our Trustpilot reviews</div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
