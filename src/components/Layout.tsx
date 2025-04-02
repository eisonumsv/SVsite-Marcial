
import { ReactNode } from "react";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy-dark py-4 border-b border-white/20">
        <Navigation />
      </header>
      
      <motion.main 
        className="flex-1 container mx-auto py-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="window-container">
          <div className="window-header">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="ml-2">{title}</span>
            </h1>
          </div>
          <div className="window-content">
            {children}
          </div>
        </div>
      </motion.main>
      
      <footer className="bg-navy-dark py-4 border-t border-white/20 mt-auto">
        <div className="container mx-auto px-4 text-center text-yellow-300">
          <p>© 2023 Isaac John M. Marcial | Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
