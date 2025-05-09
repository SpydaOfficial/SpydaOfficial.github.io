
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorCoordinates, setCursorCoordinates] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
      setCursorCoordinates({ x: clientX, y: clientY });
      setIsMouseMoving(true);
      
      // Reset the moving state after some time
      clearTimeout(window.mouseMoveTimeout);
      window.mouseMoveTimeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 300) as unknown as number;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(window.mouseMoveTimeout);
    };
  }, []);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const titleText = "THE INTERNET HOE";
  const titleLetters = titleText.split("");

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-cosmic to-cosmic-blue text-white relative overflow-hidden flex items-center">
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic floating orbs */}
        <div 
          className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-brand-pink/10 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`,
            transition: isMouseMoving ? 'transform 0.1s ease-out' : 'transform 1s ease'
          }}
        />
        <div 
          className="absolute bottom-[20%] right-[15%] w-96 h-96 rounded-full bg-brand-turquoise/10 blur-3xl"
          style={{ 
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: isMouseMoving ? 'transform 0.1s ease-out' : 'transform 1s ease'
          }}
        />
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-1 h-[30vh] bg-gradient-to-b from-brand-pink/0 via-brand-pink/30 to-brand-pink/0 blur-sm"></div>
        <div className="absolute top-0 right-1/3 w-1 h-[20vh] bg-gradient-to-b from-brand-turquoise/0 via-brand-turquoise/30 to-brand-turquoise/0 blur-sm"></div>
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: isMouseMoving ? 'transform 0.2s ease-out' : 'transform 1s ease'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="relative text-5xl md:text-6xl lg:text-7xl font-bold font-playfair leading-tight mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-wrap justify-center lg:justify-start">
                {titleLetters.map((letter, index) => (
                  <motion.span 
                    key={index}
                    variants={letterVariants}
                    className={letter === " " ? "mr-4" : "relative inline-block"}
                    style={{ 
                      textShadow: '0 0 10px rgba(255,255,255,0.3)'
                    }}
                  >
                    {letter}
                    {letter !== " " && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-pink"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1 + (index * 0.05), duration: 0.3 }}
                      />
                    )}
                  </motion.span>
                ))}
              </div>
              <motion.span 
                className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-normal text-brand-turquoise"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                COMPLETE GUIDE
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 opacity-90 font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A comprehensive 31-page guide to building a thriving online presence and unlocking your financial independence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.a 
                href="#buy" 
                className="group bg-brand-pink hover:bg-brand-darkPink text-white font-medium px-10 py-4 rounded-full text-center transition-all shadow-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Your Copy</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.a>
              
              <motion.a 
                href="#features" 
                className="bg-transparent border-2 border-white hover:border-brand-turquoise text-white hover:text-brand-turquoise font-medium px-10 py-4 rounded-full text-center transition-all relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Learn More</span>
                <motion.span 
                  className="absolute inset-0 bg-white/10 z-0"
                  initial={{ scale: 0, borderRadius: "100%" }}
                  whileHover={{ scale: 1.5, borderRadius: "0%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
              transition: isMouseMoving ? 'transform 0.1s ease-out' : 'transform 0.5s ease'
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-lg bg-gradient-to-r from-brand-pink/40 to-brand-turquoise/40 blur-xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img 
                src="/lovable-uploads/4a75294d-ae5a-4330-9471-baaa24b6c509.png" 
                alt="The Internet Hoe eBook Cover" 
                className="w-full max-w-md rounded-2xl shadow-2xl relative z-10"
                initial={{ rotate: 3 }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-brand-turquoise text-cosmic font-bold px-6 py-3 rounded-full z-20"
                initial={{ rotate: 3, scale: 1 }}
                animate={{ 
                  rotate: [3, 5, 3],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  ease: "easeInOut", 
                  repeat: Infinity
                }}
                whileHover={{ scale: 1.1 }}
              >
                Only £100
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-white/80 hover:text-white flex flex-col items-center transition-colors"
            whileHover={{ y: 3 }}
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut", 
              repeat: Infinity
            }}
          >
            <span className="mb-2 text-sm font-light">Discover More</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
        
        {/* Interactive cursor effect */}
        {isMouseMoving && (
          <motion.div 
            className="fixed w-4 h-4 rounded-full bg-brand-pink/50 pointer-events-none z-50 hidden md:block"
            style={{ 
              left: cursorCoordinates.x,
              top: cursorCoordinates.y,
              translateX: "-50%",
              translateY: "-50%"
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity
            }}
          />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
