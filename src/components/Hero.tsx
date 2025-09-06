import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-brand-orange/20 to-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-brand-purple/15 to-brand-orange/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-brand-orange" />
            <span className="text-sm font-medium text-foreground">East Africa's Leading Media Consultancy</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Transform Your </span>
            <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">
              Brand Story
            </span>
            <br />
            <span className="text-foreground">Into Success</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From strategic PR and creative design to multimedia production and digital marketing, 
            we help businesses stand out in today's competitive marketplace.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-orange to-brand-purple hover:from-brand-orange-dark hover:to-brand-purple-dark text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('about')}
            >
              Learn About Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">8+</div>
              <div className="text-muted-foreground">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-purple mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-orange mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;