
const AboutSection = () => {
  const aboutImage = "/lovable-uploads/b9073458-66f6-4c69-b5cd-5ba07f8f7115.png";
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-brand-pink font-medium mb-2">About</h2>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-cosmic">MYA</h3>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Growing up in sunny Florida, I faced the reality that life often presents us with challenging paths and limited options. At just 18 years old, I made the brave decision to step into the world of adult entertainment. Becoming a stripper was not just a job for me; it was my gateway into a raw, unfiltered lifestyle that opened my eyes to the incredible power of seduction and self-confidence.
              </p>
              
              <p className="text-gray-700 mb-6">
                Through my journey, I discovered the art of allure—the ability to captivate and connect with others on a deeper level. Each performance taught me more than just how to dance; it taught me how to embrace my femininity and harness my unique strengths. Fast forward to today, I'm proud to share that I've transitioned into a thriving online entrepreneur. I generate a comfortable growing middle-class income by sharing my unique offerings on various kinky platforms.
              </p>
              
              <p className="text-gray-700 mb-6">
                Now, I'm on a heartfelt mission to empower other women to embrace their own seductive power and explore alternative income streams. My ebook is a culmination of my experiences, filled with practical advice, insights, and encouragement for those ready to step into this exciting world.
              </p>
              
              <p className="text-gray-700 font-medium">
                Together, let's explore the art of seduction, reclaim our narratives, and unlock your potential for financial independence. You deserve to thrive, and I'm here to guide you every step of the way. Join me on this transformative journey—I can't wait to see you shine!
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-turquoise opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img 
                  src={aboutImage}
                  alt="About Mya - The Internet Hoe author"
                  className="w-full h-auto rounded-t-xl"
                />
                <div className="h-full bg-white p-8 relative">
                  <div className="space-y-6">
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <h4 className="text-xl font-playfair font-bold text-cosmic mb-3">What You'll Learn</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <span className="text-brand-pink font-bold">•</span>
                          <span>How to build your personal brand in the adult industry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-pink font-bold">•</span>
                          <span>Proven strategies to monetize your content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-pink font-bold">•</span>
                          <span>Safety tips and best practices for online entrepreneurs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-brand-pink font-bold">•</span>
                          <span>Marketing techniques to grow your audience</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-brand-turquoise to-brand-blue p-6 rounded-lg text-white">
                      <h4 className="text-xl font-playfair font-bold mb-3">Why This Guide?</h4>
                      <p className="mb-4">
                        This is more than just a how-to guide—it's a roadmap to financial freedom through embracing your authentic self.
                      </p>
                      <p className="font-medium">
                        I've made the mistakes so you don't have to. Save time, money, and emotional energy with my tried-and-true methods.
                      </p>
                    </div>
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

export default AboutSection;
