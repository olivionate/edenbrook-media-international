import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/4aa4b176-5c70-4c8f-9ac6-5e25a776ed6b.png" 
                alt="Edenbrook Media International" 
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-background/80 leading-relaxed">
                Edenbrook Media International is East Africa's leading communications and marketing firm, 
                offering comprehensive solutions to help businesses thrive in today's competitive marketplace.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/80 hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/about-us" className="text-background/80 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/news-updates" className="text-background/80 hover:text-brand-orange transition-colors">News & Updates</Link></li>
              <li><Link to="/blogs" className="text-background/80 hover:text-brand-orange transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-purple">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  TRV Plaza, 5th Floor<br />
                  Muthithi Road, Westlands<br />
                  Nairobi, Kenya
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <a href="tel:+254721658788" className="hover:text-brand-orange transition-colors">+254 721 658 788</a><br />
                  <a href="tel:+254736325788" className="hover:text-brand-orange transition-colors">+254 736 325 788</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <a href="mailto:info@edenbrookmedia.co.ke" className="hover:text-brand-orange transition-colors">info@edenbrookmedia.co.ke</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Edenbrook Media International. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => alert('Privacy Policy page coming soon!')} 
                className="text-background/60 hover:text-brand-orange transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => alert('Terms of Service page coming soon!')} 
                className="text-background/60 hover:text-brand-orange transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;