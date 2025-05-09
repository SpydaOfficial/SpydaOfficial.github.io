
import { motion } from "framer-motion";
import { BookOpenText, Shield, Sparkles, DollarSign, BadgePercent } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpenText className="w-8 h-8" />,
      title: "Complete Guide",
      description: "A comprehensive 31-page guide covering everything you need to get started and succeed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Learn how to protect your privacy, security, and mental well-being in the online space."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Discover what content performs best, how to create it efficiently, and how to stand out."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Income Maximization",
      description: "Strategies to maximize earnings across multiple platforms and revenue streams."
    },
    {
      icon: <BadgePercent className="w-8 h-8" />,
      title: "Marketing Mastery",
      description: "Learn effective promotion techniques to grow your audience and increase your income."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-brand-turquoise/10 to-brand-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-brand-pink/10 to-brand-turquoise/5 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-1/3 bottom-0 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-block mb-2"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm uppercase tracking-wider text-brand-turquoise font-medium px-4 py-1.5 bg-brand-turquoise/10 rounded-full">What's Inside</span>
          </motion.div>
          
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cosmic mb-6 relative inline-block">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Everything You Need To Succeed
            </motion.span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-turquoise to-brand-pink opacity-70"
              initial={{ width: 0, left: "50%" }}
              whileInView={{ width: "100%", left: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </h3>
          
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            The Internet Hoe guide provides all the essential knowledge, strategies, and tools to build a profitable online presence.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="group bg-white backdrop-blur-sm bg-opacity-80 shadow-lg hover:shadow-xl rounded-2xl p-8 border border-gray-100 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <motion.div 
                className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-brand-turquoise/20 to-brand-pink/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <div className="relative">
                <motion.div 
                  className="text-brand-pink mb-4 bg-brand-pink/10 p-4 rounded-xl inline-flex"
                  whileHover={{ 
                    rotate: [0, 5, 0, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <motion.h4 
                  className="text-xl font-bold mb-3 text-cosmic"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  {feature.title}
                </motion.h4>
                
                <motion.p 
                  className="text-gray-600 group-hover:text-gray-800 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {feature.description}
                </motion.p>
                
                <motion.div 
                  className="h-1 w-0 bg-gradient-to-r from-brand-turquoise to-brand-pink mt-4 group-hover:w-full transition-all duration-500 rounded-full"
                  whileInView={{ width: "30%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
