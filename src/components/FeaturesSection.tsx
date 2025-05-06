
import { motion } from "framer-motion";
import { BookOpen, Star, DollarSign, ShieldCheck, BookMarked, BarChart } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-brand-pink" />,
      title: "Comprehensive Content",
      description: "31 pages of actionable advice, real-world examples, and step-by-step instructions.",
    },
    {
      icon: <Star className="w-10 h-10 text-brand-pink" />,
      title: "Expert Insights",
      description: "Learn from someone who's actually done it, not just theoretical advice but proven methods.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-brand-pink" />,
      title: "Income Strategies",
      description: "Multiple monetization models explained in detail, from subscription services to custom content.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-pink" />,
      title: "Safety First",
      description: "Comprehensive guidance on protecting your identity, finances, and mental wellbeing.",
    },
    {
      icon: <BookMarked className="w-10 h-10 text-brand-pink" />,
      title: "Templates & Scripts",
      description: "Ready-to-use messaging templates, pricing guides, and customer interaction scripts.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-brand-pink" />,
      title: "Growth Tactics",
      description: "Proven methods to scale your audience and increase your earnings month after month.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">What's Inside</h2>
          <h3 className="text-5xl md:text-6xl font-playfair font-bold text-cosmic mb-4 relative inline-block">
            Book Features
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-1 bg-brand-pink/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
            A concise 31-page guide packed with essential insights for the online adult entertainment industry
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
            >
              <motion.div 
                className="mb-4 bg-gray-50 p-3 rounded-full inline-block"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-xl font-bold text-cosmic mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 bg-gradient-to-r from-cosmic to-cosmic-blue p-10 md:p-12 rounded-3xl text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
                Ready to Transform Your Online Presence?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                This 31-page guide contains all the secrets I've learned over years in the industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#buy" 
                  className="bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-3 rounded-full text-center transition-all"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Your Copy Now
                </motion.a>
                <motion.a 
                  href="#testimonials" 
                  className="bg-transparent border-2 border-white hover:border-brand-turquoise text-white hover:text-brand-turquoise font-medium px-8 py-3 rounded-full text-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See What Others Say
                </motion.a>
              </div>
            </div>
            <motion.div 
              className="md:w-1/3 flex justify-center"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
                <div className="text-5xl font-bold text-brand-turquoise mb-2">£100</div>
                <div className="text-lg text-white/90 mb-1">One-time payment</div>
                <div className="text-sm text-white/70">Instant digital delivery</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
