import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Heart className="h-6 w-6" />, title: "Integrity", description: "We maintain the highest standards of honesty and ethical conduct in all our dealings." },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Honesty", description: "Transparent communication and genuine relationships form the foundation of our work." },
    { icon: <Target className="h-6 w-6" />, title: "Consistency", description: "Reliable, consistent delivery of exceptional results across all our services." }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Edenbrook Media</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in comprehensive marketing and communications solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
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
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-brand-purple/20 rounded-lg blur-xl"></div>
            <Card className="relative bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-brand-orange mr-3" />
                  <h4 className="text-xl font-semibold text-foreground">Our Team</h4>
                </div>
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
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 border-brand-orange/20">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-brand-orange mb-4">Our Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To help small, medium and large businesses and organizations with all their marketing 
                and communication needs. As a regional leader in the industry, our passion is communications 
                and developing solutions to our customers' biggest design challenges.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-brand-purple/20">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-brand-purple mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To be East Africa's leading communications and marketing firm offering valuable and 
                unmatched services to a broad range of organizations seeking to remain relevant in 
                today's changing marketplace.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Core Values</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-purple rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;