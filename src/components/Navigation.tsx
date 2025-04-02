
import { Link, useLocation } from "react-router-dom";
import { Home, User, Code, Info, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home", icon: <Home className="mr-2" size={18} /> },
    { path: "/profile", label: "Profile", icon: <User className="mr-2" size={18} /> },
    { path: "/hobbies", label: "Hobbies", icon: <Code className="mr-2" size={18} /> },
    { path: "/about", label: "About", icon: <Info className="mr-2" size={18} /> },
    { path: "/contact", label: "Contact", icon: <Phone className="mr-2" size={18} /> },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="text-yellow-300 font-bold text-xl">Isaac's Portfolio</div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-yellow-300"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center px-3 py-2 rounded hover:bg-navy-dark/40 transition-colors ${
                  location.pathname === link.path
                    ? "text-yellow-300 font-medium"
                    : "text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-navy-dark rounded-lg p-2">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded hover:bg-navy/90 transition-colors ${
                    location.pathname === link.path
                      ? "text-yellow-300 font-medium"
                      : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
