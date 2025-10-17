import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AboutModal from "@/components/AboutModal";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

// Import service images
import prMarketingImg from "@/assets/service-pr-marketing.jpg";
import creativeDesignImg from "@/assets/service-creative-design.jpg";
import eventManagementImg from "@/assets/service-event-management.jpg";
import publishingImg from "@/assets/service-publishing.jpg";
import webDevelopmentImg from "@/assets/service-web-development.jpg";
import businessPlanningImg from "@/assets/service-business-planning.jpg";
import multimediaImg from "@/assets/service-multimedia.jpg";
import trainingImg from "@/assets/service-training.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleMediaItemClick = (item: string) => {
    // Navigate to media pages
    if (item === 'News & Updates') {
      window.location.href = '/news-updates';
    } else if (item === 'Blogs') {
      window.location.href = '/blogs';
    } else {
      // For other items, alert user that these pages are coming soon
      alert(`${item} page coming soon!`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4aa4b176-5c70-4c8f-9ac6-5e25a776ed6b.png" 
              alt="Edenbrook Media International" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => setIsAboutModalOpen(true)}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 mt-2 bg-background border shadow-lg z-50 p-0">
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/pr-marketing-consultancy" className="w-full flex items-center p-3">
                    <img 
                      src={prMarketingImg} 
                      alt="PR & Marketing" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>PR & Marketing Consultancy</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/creative-design-branding" className="w-full flex items-center p-3">
                    <img 
                      src={creativeDesignImg} 
                      alt="Creative Design" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Creative Design & Branding</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/event-management-planning" className="w-full flex items-center p-3">
                    <img 
                      src={eventManagementImg} 
                      alt="Event Management" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Event Management & Planning</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/publishing-printing" className="w-full flex items-center p-3">
                    <img 
                      src={publishingImg} 
                      alt="Publishing & Printing" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Publishing & Printing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/web-design-development" className="w-full flex items-center p-3">
                    <img 
                      src={webDevelopmentImg} 
                      alt="Web Development" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Web Design & Development</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/business-strategic-plans" className="w-full flex items-center p-3">
                    <img 
                      src={businessPlanningImg} 
                      alt="Business Planning" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Business & Strategic Plans</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/multimedia-production" className="w-full flex items-center p-3">
                    <img 
                      src={multimediaImg} 
                      alt="Multimedia Production" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Multimedia Production</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:bg-muted p-0">
                  <Link to="/services/capacity-building-training" className="w-full flex items-center p-3">
                    <img 
                      src={trainingImg} 
                      alt="Training" 
                      className="w-12 h-12 object-cover rounded-md mr-3"
                    />
                    <span>Capacity Building & Training</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Media Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Media
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mt-2 bg-background border shadow-lg z-50">
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('News & Updates')}
                  className="cursor-pointer hover:bg-muted px-4 py-2"
                >
                  News & Updates
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Videos')}
                  className="cursor-pointer hover:bg-muted px-4 py-2"
                >
                  Videos
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Blogs')}
                  className="cursor-pointer hover:bg-muted px-4 py-2"
                >
                  Blogs
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Photo Gallery')}
                  className="cursor-pointer hover:bg-muted px-4 py-2"
                >
                  Photo Gallery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link to="/contact">
            <Button 
              variant="default" 
              className="hidden md:inline-flex bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange-dark hover:to-brand-purple-dark"
            >
              Get Started
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  setIsAboutModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              
              {/* Mobile Services Section */}
              <div>
                <button 
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      to="/services/pr-marketing-consultancy"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={prMarketingImg} 
                        alt="PR & Marketing" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      PR & Marketing Consultancy
                    </Link>
                    <Link 
                      to="/services/creative-design-branding"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={creativeDesignImg} 
                        alt="Creative Design" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Creative Design & Branding
                    </Link>
                    <Link 
                      to="/services/event-management-planning"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={eventManagementImg} 
                        alt="Event Management" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Event Management & Planning
                    </Link>
                    <Link 
                      to="/services/publishing-printing"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={publishingImg} 
                        alt="Publishing & Printing" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Publishing & Printing
                    </Link>
                    <Link 
                      to="/services/web-design-development"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={webDevelopmentImg} 
                        alt="Web Development" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Web Design & Development
                    </Link>
                    <Link 
                      to="/services/business-strategic-plans"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={businessPlanningImg} 
                        alt="Business Planning" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Business & Strategic Plans
                    </Link>
                    <Link 
                      to="/services/multimedia-production"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={multimediaImg} 
                        alt="Multimedia Production" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Multimedia Production
                    </Link>
                    <Link 
                      to="/services/capacity-building-training"
                      className="flex items-center text-left text-muted-foreground hover:text-primary transition-colors text-sm py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img 
                        src={trainingImg} 
                        alt="Training" 
                        className="w-8 h-8 object-cover rounded mr-2"
                      />
                      Capacity Building & Training
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Media Section */}
              <div>
                <button 
                  onClick={() => setIsMediaDropdownOpen(!isMediaDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-colors"
                >
                  Media
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMediaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMediaDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <button 
                      onClick={() => handleMediaItemClick('News & Updates')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      News & Updates
                    </button>
                    <button 
                      onClick={() => handleMediaItemClick('Videos')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Videos
                    </button>
                    <button 
                      onClick={() => handleMediaItemClick('Blogs')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Blogs
                    </button>
                    <button 
                      onClick={() => handleMediaItemClick('Photo Gallery')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Photo Gallery
                    </button>
                  </div>
                )}
              </div>
              
              <Link 
                to="/contact"
                className="text-left text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange-dark hover:to-brand-purple-dark"
                >
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
        
        {/* About Modal */}
        <AboutModal 
          isOpen={isAboutModalOpen} 
          onClose={() => setIsAboutModalOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;