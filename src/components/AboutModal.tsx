import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import AI-generated about section images
import aboutTeamAI from "@/assets/about-team-ai.jpg";
import aboutMissionAI from "@/assets/about-mission-ai.jpg"; 
import aboutVisionAI from "@/assets/about-vision-ai.jpg";
import aboutValuesAI from "@/assets/about-values-ai.jpg";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  const values = [
    { 
      icon: <Heart className="h-6 w-6" />, 
      title: "Integrity", 
      description: "We maintain the highest standards of honesty and ethical conduct in all our dealings." 
    },
    { 
      icon: <CheckCircle className="h-6 w-6" />, 
      title: "Honesty", 
      description: "Transparent communication and genuine relationships form the foundation of our work." 
    },
    { 
      icon: <Target className="h-6 w-6" />, 
      title: "Consistency", 
      description: "Reliable, consistent delivery of exceptional results across all our services." 
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold">
              About <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Edenbrook Media</span>
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in comprehensive marketing and communications solutions
          </p>
        </DialogHeader>
        
        <div className="overflow-y-auto px-6 pb-6 space-y-8">
          {/* Company Overview Section */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Experienced, Result-Oriented Business Advisors
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Edenbrook Media International is a Kenyan-based media entity with broad expertise in PR & Marketing 
                  Consultancy, Strategic & Business Planning, Branding & Creative Design, Event Planning & Management, 
                  and much more.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We're experienced, result-oriented business advisors with years of practical hands-on experience 
                  in business planning, marketing, PR and communications. Through a creative, disciplined and hands-on 
                  approach, we help businesses raise their profile and get noticed by customers and target audiences.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={aboutTeamAI} 
                  alt="Professional Business Team"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-orange mr-2" />
                We can help you to:
              </h4>
              <ul className="space-y-3 ml-7">
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Get a deeper understanding of your customer's needs
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Turn your long-term business vision into workable action plans
                </li>
                <li className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Stand out in your marketplace and make the competition notice
                </li>
              </ul>
            </div>
          </section>

          {/* Our Team Section */}
          <section className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Team</span>
              </h3>
            </div>
            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={aboutTeamAI} 
                  alt="Edenbrook Media Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <Users className="h-8 w-8 text-white mr-3" />
                  <h4 className="text-xl font-semibold text-white">Our Professional Team</h4>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team is built on people with great ideas. We have some of the brightest brains and 
                  greatest team players valued as part of our success.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our highly skilled communications consultants, strategic planners, marketing experts, 
                  creative personnel, graphic designers, and programmers work in consultation with you 
                  to create impactful solutions.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Mission & Vision Section */}
          <section className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8">
                Mission & <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Vision</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 border-brand-orange/20 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={aboutMissionAI} 
                    alt="Our Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-2xl font-semibold text-white">Our Mission</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    To help small, medium and large businesses and organizations with all their marketing 
                    and communication needs. As a regional leader in the industry, our passion is communications 
                    and developing solutions to our customers' biggest design challenges.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-brand-purple/20 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={aboutVisionAI} 
                    alt="Our Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-2xl font-semibold text-white">Our Vision</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    To be East Africa's leading communications and marketing firm offering valuable and 
                    unmatched services to a broad range of organizations seeking to remain relevant in 
                    today's changing marketplace.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8">
                Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Core Values</span>
              </h3>
            </div>
            
            {/* Values image */}
            <div className="relative mb-8">
              <img 
                src={aboutValuesAI} 
                alt="Our Core Values"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <h4 className="text-2xl font-semibold text-white">Built on Strong Values</h4>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm border-0">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-purple rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;