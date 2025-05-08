
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SuccessPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Update the document title
    document.title = "Payment Successful - Mya's World";
  }, []);

  return (
    <div className="font-poppins bg-gradient-to-b from-cosmic to-[#151835] min-h-screen">
      <Header />
      
      <div className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Thank You for Your Purchase!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Your payment has been processed successfully. Check your email for your download link to "The Internet Hoe Guide".
            </p>

            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8">
              <h2 className="font-medium text-lg mb-3">What happens next?</h2>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p>An email has been sent to the address you provided with download instructions.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p>If you don't see the email, please check your spam/junk folder.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <p>You'll have immediate access to download your ebook.</p>
                </li>
              </ul>
            </div>

            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuccessPage;
