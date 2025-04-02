
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
            <img 
              src="/lovable-uploads/d6110f5c-7c2f-400e-8189-8ccf6923fc75.png" 
              alt="Isaac John M. Marcial" 
              className="profile-image w-64 h-64 object-cover relative"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-yellow-300">
            Hello, I'm Isaac John M. Marcial
          </h1>
          <p className="text-xl mb-6">
            A young aspiring programmer with a passion for creativity and technology. 
            Welcome to my portfolio website!
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/profile">
                View Profile <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300/10">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 bg-navy-dark/50 p-6 rounded-lg border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Featured Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-navy/80 rounded-lg border border-white/10">
            <h3 className="text-xl font-medium mb-2">Computer Programming</h3>
            <p>Passionate about coding and developing innovative solutions.</p>
          </div>
          <div className="p-4 bg-navy/80 rounded-lg border border-white/10">
            <h3 className="text-xl font-medium mb-2">Digital Drawing</h3>
            <p>Creating digital art and designs using various software tools.</p>
          </div>
          <div className="p-4 bg-navy/80 rounded-lg border border-white/10">
            <h3 className="text-xl font-medium mb-2">Football</h3>
            <p>Developing teamwork and strategic thinking through sports.</p>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
