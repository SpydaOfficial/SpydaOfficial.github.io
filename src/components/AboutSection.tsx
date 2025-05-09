
import { motion } from "framer-motion";

const AboutSection = () => {
  const aboutImage = "/lovable-uploads/b9073458-66f6-4c69-b5cd-5ba07f8f7115.png";
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">About</h2>
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-cosmic relative inline-block">
            MYA
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h3>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Growing up in sunny Florida, I faced the reality that life often presents us with challenging paths and limited options. At just 18 years old, I made the brave decision to step into the world of adult entertainment. Becoming a stripper was not just a job for me; it was my gateway into a raw, unfiltered lifestyle that opened my eyes to the incredible power of seduction and self-confidence.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through my journey, I discovered the art of allure—the ability to captivate and connect with others on a deeper level. Each performance taught me more than just how to dance; it taught me how to embrace my femininity and harness my unique strengths. Fast forward to today, I'm proud to share that I've transitioned into a thriving online entrepreneur. I generate a comfortable growing middle-class income by sharing my unique offerings on various kinky platforms.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Now, I'm on a heartfelt mission to empower other women to embrace their own seductive power and explore alternative income streams. My ebook is a culmination of my experiences, filled with practical advice, insights, and encouragement for those ready to step into this exciting world.
              </p>
              
              <motion.p 
                className="text-gray-800 font-medium text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Together, let's explore the art of seduction, reclaim our narratives, and unlock your potential for financial independence. You deserve to thrive, and I'm here to guide you every step of the way. Join me on this transformative journey—I can't wait to see you shine!
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-turquoise opacity-30 blur-xl"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 4, 
                  ease: "easeInOut", 
                  repeat: Infinity 
                }}
              ></motion.div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={aboutImage}
                  alt="About Mya - The Internet Hoe author"
                  className="w-full h-auto rounded-t-2xl"
                />
                <div className="h-full bg-white p-8 relative">
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.div 
                      className="bg-gray-50 p-6 rounded-xl shadow-sm"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <h4 className="text-xl font-playfair font-bold text-cosmic mb-3">What You'll Learn</h4>
                      <ul className="space-y-3">
                        {[
                          "How to build your personal brand in the adult industry",
                          "Proven strategies to monetize your content",
                          "Safety tips and best practices for online entrepreneurs",
                          "Marketing techniques to grow your audience"
                        ].map((item, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                          >
                            <span className="text-brand-pink font-bold">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-brand-turquoise to-brand-blue p-6 rounded-xl text-white shadow-md"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <h4 className="text-xl font-playfair font-bold mb-3">Why This Guide?</h4>
                      <p className="mb-4">
                        This is more than just a how-to guide—it's a roadmap to financial freedom through embracing your authentic self.
                      </p>
                      <p className="font-medium">
                        I've made the mistakes so you don't have to. Save time, money, and emotional energy with my tried-and-true methods.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
