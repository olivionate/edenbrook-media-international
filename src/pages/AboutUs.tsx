import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Heart, Target } from "lucide-react";

// Import AI-generated about section images
import aboutTeamAI from "@/assets/about-team-ai.jpg";
import aboutMissionAI from "@/assets/about-mission-ai.jpg"; 
import aboutVisionAI from "@/assets/about-vision-ai.jpg";
import aboutValuesAI from "@/assets/about-values-ai.jpg";

const AboutUs = () => {
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
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                About <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Edenbrook Media</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your trusted partner in comprehensive marketing and communications solutions
              </p>
            </div>

            <div className="space-y-16">
              {/* About Us Introduction */}
              <section className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-foreground">
                      About Us
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Edenbrook Media International is a Kenyan based media entity with a broad expertise in services relating to PR & Marketing Consultancy, Strategic & Business Planning, Branding & Creative Design, Event Planning & Management, Web Design & Development, Multimedia Production, Publishing & Printing, and Capacity Building & Training at large.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      We're experienced, result-oriented business advisors with years of practical hands-on experience in the areas of business planning, marketing, PR and communications. Once we understand your needs, we'll get down to work. Through a creative, disciplined and hands-on approach, we can help your business to raise its profile and get you noticed by customers and target audiences.
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
                  <h3 className="text-lg font-semibold text-foreground flex items-center">
                    <CheckCircle className="h-5 w-5 text-brand-orange mr-2" />
                    We can help you to:
                  </h3>
                  <ul className="space-y-3 ml-7">
                    <li className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Get a deeper understanding of your customer's needs
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Turn your long term business vision into a workable marketing, PR and communications action plan, with tactical milestones
                    </li>
                    <li className="flex items-start text-muted-foreground">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Stand out in your market place and make the competition sit up
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    At Edenbrook Media International, we'll work in partnership with you, from developing marketing strategy to creating your digital footprint. Our practical, specialist expertise and business advice can help you raise your profile and engage with your customers.
                  </p>
                </div>
              </section>

              {/* Our Team Section */}
              <section className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">
                    Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Team</span>
                  </h2>
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
                      <h3 className="text-xl font-semibold text-white">Our Professional Team</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our team is built on people with great ideas; needless to say, on our team, we already have some of the brightest brains and greatest team players that are a valued part of our success. Yet, we are always looking to engage intelligent self-thinkers to work with us to fulfill our clients' demands.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Our highly skilled communications consultants, strategic planners, marketing gurus, creative personnel, graphic designers, and programmers work in consultation with you and your staff to create the images that will profile your company, along with its core values and corporate ethics. We also work with you to attract the eye of potential clients, in addition to promoting sales goals within your current marketplace.
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Our Expertise Section */}
              <section className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-8">
                    Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Expertise</span>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 border-brand-orange/20 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={aboutMissionAI} 
                        alt="Our Comprehensive Solutions"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-semibold text-white">Comprehensive Solutions</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Our wealth of expertise and comprehensive solutions, coupled with a successful track record of delivering high-end marketing and communication services, pave the way for even greater market-oriented results. We make sure your corporate content and images are represented consistently, accurately and effectively every time with every assignment we handle.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-brand-purple/20 overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={aboutVisionAI} 
                        alt="Our Planning Process"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-2xl font-semibold text-white">Our Process</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Each creation is well-planned, starting with the brainstorming sessions, continuing through production and right up to the completion. It is all about planning, managing, trying to focus on the parts that have perhaps been overlooked, challenging assumptions, seeking alternatives and choosing the right solutions. A professional business image, created by the experts at Edenbrook Media International, is guaranteed with every assignment we undertake.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Our Partners Section */}
              <section className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-8">
                    Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Partners</span>
                  </h2>
                </div>
                
                {/* Partners image */}
                <div className="relative mb-8">
                  <img 
                    src={aboutValuesAI} 
                    alt="Our Partners"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-semibold text-white">Partnership Success</h3>
                  </div>
                </div>
                
                <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed text-center">
                      Our partners are also a big part of our success. We believe in forging company partnerships that can benefit our end customers; that is why we hand pick individuals and companies that will offer you the same quality level of products and services that meet our company standards.
                    </p>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
