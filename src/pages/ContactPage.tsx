
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { GithubIcon, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll respond as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-yellow-300 mb-6">Get in Touch</h1>
          <p className="mb-8 text-lg">
            I'm always interested in new opportunities, collaborations, or just chatting about technology and programming. Feel free to reach out!
          </p>
          
          <div className="space-y-6">
            <Card className="bg-navy-dark border-white/10 p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Mail className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-white/80">isaacjohnmandinmarcial@gmail.com</p>
              </div>
            </Card>
            
            <Card className="bg-navy-dark border-white/10 p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Phone className="text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-white/80">09XX XXX XXXX</p>
              </div>
            </Card>
            
            <Card className="bg-navy-dark border-white/10 p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <MapPin className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium">School</h3>
                <p className="text-white/80">San Beda Alabang</p>
              </div>
            </Card>
            
            <Card className="bg-navy-dark border-white/10 p-4 flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <GithubIcon className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium">GitHub</h3>
                <p className="text-white/80">github.com/isaacmarcial</p>
              </div>
            </Card>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-navy-dark border-white/10 p-6">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-300">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-navy border-white/20 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-navy border-white/20 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="bg-navy border-white/20 focus:border-blue-500 min-h-[150px]"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="mr-2" size={16} />
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="mt-8 p-4 bg-navy-dark/50 rounded-lg border border-white/10">
            <h3 className="text-lg font-medium mb-2 text-yellow-300">Available For:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">
                Programming Projects
              </span>
              <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">
                Web Development
              </span>
              <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="bg-yellow-600/30 text-yellow-200 px-3 py-1 rounded-full text-sm">
                Digital Art
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactPage;
