
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Bolt, Brain, Lightbulb, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout title="About Me">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-yellow-300 mb-6">About Isaac John M. Marcial</h1>
          
          <div className="space-y-6">
            <p className="text-lg">
              I'm a young aspiring teenager with a passion for creativity and technology. As a student at San Beda Alabang in class 10-TLEICTCP-A, I'm particularly focused on developing my skills in computer programming while maintaining a balanced approach to education and personal interests.
            </p>
            
            <p className="text-lg">
              My journey in programming started with simple HTML and CSS websites, but I've since expanded my knowledge to include JavaScript, Python, and other programming languages. I'm fascinated by how code can transform ideas into functional applications and experiences.
            </p>
            
            <div className="bg-navy-dark/50 p-6 rounded-lg border border-white/10 my-8">
              <h2 className="text-2xl font-semibold text-yellow-300 mb-4">Programming Focus</h2>
              <p className="mb-4">
                My primary interest lies in computer programming and software development. I'm constantly exploring new technologies and frameworks to expand my skill set. Some areas I'm particularly interested in include:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Web development (front-end and back-end)</li>
                <li>Mobile application development</li>
                <li>User interface and experience design</li>
                <li>Game development</li>
                <li>Artificial intelligence and machine learning</li>
              </ul>
            </div>
            
            <p className="text-lg">
              While programming is my main focus, I believe in the value of diverse interests. My hobbies in digital drawing and football help me maintain creativity and teamwork skills that complement my technical abilities. Drawing improves my design sense, which is valuable for creating user interfaces, while football teaches me about teamwork and strategy.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-navy-dark p-5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <Target size={24} className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Goals</h3>
            <p>
              To become a proficient full-stack developer capable of creating innovative applications that solve real-world problems.
            </p>
          </div>
          
          <div className="bg-navy-dark p-5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
              <Brain size={24} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Philosophy</h3>
            <p>
              I believe in continuous learning and the power of technology to create positive change when used thoughtfully.
            </p>
          </div>
          
          <div className="bg-navy-dark p-5 rounded-lg border border-white/10 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Lightbulb size={24} className="text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
            <p>
              I'm inspired by innovative technology leaders and developers who create tools that improve people's lives.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Bolt size={28} className="text-yellow-300" />
            <h2 className="text-2xl font-bold text-yellow-300">Future Aspirations</h2>
          </div>
          <p className="mb-6">
            Looking ahead, I aim to pursue a degree in Computer Science or Software Engineering. My goal is to develop applications that make a positive impact, whether through educational tools, accessibility features, or innovative solutions to everyday challenges.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">
              Connect With Me <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
