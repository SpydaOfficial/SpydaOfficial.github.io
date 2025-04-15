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
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">What's Inside</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cosmic mb-4">Book Features</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            A concise 31-page guide packed with essential insights for the online adult entertainment industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-cosmic mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-cosmic to-cosmic-blue p-8 md:p-12 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                Ready to Transform Your Online Presence?
              </h3>
              <p className="text-white/80 mb-6">
                This 31-page guide contains all the secrets I've learned over years in the industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#buy" 
                  className="bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-8 py-3 rounded-full text-center transition-colors"
                >
                  Get Your Copy Now
                </a>
                <a 
                  href="#testimonials" 
                  className="bg-transparent border-2 border-white hover:border-brand-turquoise text-white hover:text-brand-turquoise font-medium px-8 py-3 rounded-full text-center transition-colors"
                >
                  See What Others Say
                </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-brand-turquoise mb-2">£100</div>
                <div className="text-lg text-white/90 mb-1">One-time payment</div>
                <div className="text-sm text-white/70">Instant digital delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
