
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Gamepad2, Palette } from "lucide-react";

const HobbiesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout title="Hobbies">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-300 mb-4">My Hobbies & Interests</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Exploring various activities helps me maintain a creative mindset and develop diverse skills that complement my programming interests.
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Card className="bg-navy-dark border-blue-500/30 h-full overflow-hidden">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Code size={30} className="text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Computer Programming</h2>
              <p className="text-center mb-4">
                More than just a hobby, programming is my passion and future career path.
              </p>
              <div className="space-y-3 mt-6">
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Web Development</h3>
                  <p className="text-sm text-white/80">
                    Creating responsive websites and interactive web applications.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Mobile App Development</h3>
                  <p className="text-sm text-white/80">
                    Learning to build cross-platform mobile applications.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Game Development</h3>
                  <p className="text-sm text-white/80">
                    Experimenting with simple game mechanics and interactive experiences.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-navy-dark border-purple-500/30 h-full overflow-hidden">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Palette size={30} className="text-purple-400" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Digital Drawing</h2>
              <p className="text-center mb-4">
                Expressing creativity through digital art and design.
              </p>
              <div className="space-y-3 mt-6">
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Character Design</h3>
                  <p className="text-sm text-white/80">
                    Creating original characters with unique personalities and backstories.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">UI/UX Design</h3>
                  <p className="text-sm text-white/80">
                    Designing user interfaces that are both functional and aesthetically pleasing.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Digital Painting</h3>
                  <p className="text-sm text-white/80">
                    Creating digital artwork using various brushes and techniques.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-navy-dark border-green-500/30 h-full overflow-hidden">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Gamepad2 size={30} className="text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Football</h2>
              <p className="text-center mb-4">
                Developing teamwork, strategy, and physical fitness through sports.
              </p>
              <div className="space-y-3 mt-6">
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Team Play</h3>
                  <p className="text-sm text-white/80">
                    Learning to collaborate effectively with teammates toward a common goal.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Strategic Thinking</h3>
                  <p className="text-sm text-white/80">
                    Developing the ability to analyze situations and make quick decisions.
                  </p>
                </div>
                <div className="bg-navy/80 p-3 rounded-lg border border-white/10">
                  <h3 className="font-medium mb-1">Physical Fitness</h3>
                  <p className="text-sm text-white/80">
                    Maintaining physical health and stamina through regular practice.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div 
        className="mt-12 bg-navy-dark/50 p-6 rounded-lg border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">How My Hobbies Complement My Programming</h2>
        <p className="mb-4">
          My diverse interests aren't just pastimes—they actively enhance my programming skills and perspective:
        </p>
        <ul className="space-y-2 ml-6 list-disc">
          <li>
            <span className="font-medium text-blue-300">Digital Drawing:</span> Improves my UI/UX design sensibilities, allowing me to create more visually appealing and intuitive applications.
          </li>
          <li>
            <span className="font-medium text-blue-300">Football:</span> Develops teamwork and strategic thinking that translates to collaborative coding projects and problem-solving approaches.
          </li>
          <li>
            <span className="font-medium text-blue-300">Creative Activities:</span> Enhance my ability to think outside the box when tackling complex programming challenges.
          </li>
        </ul>
      </motion.div>
    </Layout>
  );
};

export default HobbiesPage;
