
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
    <section id="features" className="py-24 bg-white relative">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-brand-turquoise font-medium mb-2">What's Inside</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cosmic mb-6">Everything You Need To Succeed</h3>
          <p className="text-gray-600 text-lg">
            The Internet Hoe guide provides all the essential knowledge, strategies, and tools to build a profitable online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-8 border border-gray-100 hover:-translate-y-2 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-brand-pink mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-cosmic">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
