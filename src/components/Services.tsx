import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Megaphone, 
  Palette, 
  Calendar, 
  BookOpen, 
  Globe, 
  Target, 
  Camera,
  GraduationCap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "PR & Marketing Consultancy",
      description: "Comprehensive PR & Marketing strategies, communications plans, and integrated marketing solutions tailored to your business needs.",
      features: ["Market Segmentation", "Brand Strategy", "Digital Strategy", "Customer Relationship Management"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Design & Branding",
      description: "Stylish presentations with cutting-edge graphics to move your business ahead of competitors with memorable brand identity.",
      features: ["Corporate Graphic Design", "Brand Identity Manual", "Logo Design", "Marketing Materials"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Event Management & Planning",
      description: "Complete event management services from conception to execution, ensuring your events exceed expectations and achieve objectives.",
      features: ["Exhibitions", "Conferences", "Workshops", "Product Launches"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Publishing & Printing",
      description: "Quality design and print services for magazines, books, brochures, reports, and more with expert content development.",
      features: ["Magazine Publishing", "Book Design", "Corporate Reports", "Marketing Collateral"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design & Development",
      description: "Professional website design and development services with fast turnaround times without compromising quality.",
      features: ["Website Design", "E-commerce Solutions", "Mobile Responsive", "CMS Development"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Business & Strategic Plans",
      description: "Comprehensive strategic and business planning services to guide your organization toward sustainable growth and success.",
      features: ["Strategic Planning", "Business Plan Development", "Market Analysis", "Financial Projections"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Multimedia Production",
      description: "Professional audio-visual services including photography, videography, and multimedia content creation for all occasions.",
      features: ["Corporate Photography", "Video Production", "TV Commercials", "Event Coverage"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Capacity Building & Training",
      description: "Knowledge development and mobilization services to support sustainable development across various sectors and industries.",
      features: ["Technical Training", "Workshop Facilitation", "Strategic Planning Support", "Change Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to help your business thrive in today's competitive marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-purple rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-brand-orange transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-orange to-brand-purple rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;