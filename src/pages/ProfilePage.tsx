
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Book, Calendar, Home, School } from "lucide-react";

const ProfilePage = () => {
  return (
    <Layout title="Profile">
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
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-yellow-300">Isaac John M. Marcial</h1>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <School className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-xl">Education</h2>
                <p>San Beda Alabang</p>
                <p>Class Section: 10-TLEICTCP-A</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calendar className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-xl">Background</h2>
                <p>
                  I'm a student with a strong focus on computer programming and 
                  technology. I'm constantly learning new programming languages
                  and frameworks to enhance my skills.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Book className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-xl">Academic Interests</h2>
                <p>
                  My academic interests revolve around computer science, 
                  software development, and digital media. I'm particularly 
                  interested in web development and application design.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Home className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-xl">Personal Attributes</h2>
                <p>
                  I'm detail-oriented, creative, and enjoy problem-solving. 
                  I work well in team environments and am always eager to learn
                  new technologies and programming concepts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-12 bg-navy-dark/50 p-6 rounded-lg border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Programming Languages</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="bg-yellow-600/30 text-yellow-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Java</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Web Technologies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                <span className="bg-blue-400/30 text-blue-200 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Design & Creative Tools</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">Adobe Photoshop</span>
                <span className="bg-red-600/30 text-red-200 px-3 py-1 rounded-full text-sm">Adobe Illustrator</span>
                <span className="bg-pink-600/30 text-pink-200 px-3 py-1 rounded-full text-sm">Figma</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Other Skills</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm">Version Control (Git)</span>
                <span className="bg-teal-600/30 text-teal-200 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                <span className="bg-indigo-600/30 text-indigo-200 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProfilePage;
