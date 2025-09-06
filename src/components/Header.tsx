import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleMediaItemClick = (item: string) => {
    // For now, just log the selection - can be expanded to navigate to actual pages
    console.log(`Navigate to ${item}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4aa4b176-5c70-4c8f-9ac6-5e25a776ed6b.png" 
              alt="Edenbrook Media International" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            
            {/* Media Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-foreground hover:text-primary transition-colors">
                  Media
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 mt-2">
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('News Updates')}
                  className="cursor-pointer hover:bg-muted"
                >
                  News Updates
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Videos')}
                  className="cursor-pointer hover:bg-muted"
                >
                  Videos
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Blogs')}
                  className="cursor-pointer hover:bg-muted"
                >
                  Blogs
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleMediaItemClick('Photo Gallery')}
                  className="cursor-pointer hover:bg-muted"
                >
                  Photo Gallery
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <Button 
            variant="default" 
            className="hidden md:inline-flex bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange-dark hover:to-brand-purple-dark"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </Button>

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
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              
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
                      onClick={() => handleMediaItemClick('News Updates')}
                      className="block text-left text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      News Updates
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
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="default" 
                className="w-full bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange-dark hover:to-brand-purple-dark"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;