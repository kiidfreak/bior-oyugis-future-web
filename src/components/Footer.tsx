
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Money Bior</h3>
            <p className="mb-4">Together, We Build a Better Future</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/moneybior/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/manifesto" className="hover:text-blue-300">Manifesto</Link></li>
              <li><Link to="/campaigns" className="hover:text-blue-300">Campaign Events</Link></li>
              <li><Link to="/posters" className="hover:text-blue-300">Campaign Materials</Link></li>
              <li><Link to="/get-involved" className="hover:text-blue-300">Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Campaign Office</p>
              <p className="mb-2">Oyugis Town Center</p>
              <p className="mb-2">Homa Bay County, Kenya</p>
              <p className="flex items-center mb-2">
                <Mail size={16} className="mr-2" /> 
                <a href="mailto:contact@moneybior.com" className="hover:text-blue-300">
                  contact@moneybior.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Money Bior Campaign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
