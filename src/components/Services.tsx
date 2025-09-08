import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "PR & Marketing Consultancy",
      slug: "pr-marketing-consultancy",
      description: "Comprehensive PR and marketing strategies that bring success in the marketplace.",
      image: "/src/assets/service-pr-marketing.jpg"
    },
    {
      name: "Creative Design & Branding",
      slug: "creative-design-branding", 
      description: "Stylish presentations with cutting-edge graphics to move your business forward.",
      image: "/src/assets/service-creative-design.jpg"
    },
    {
      name: "Event Management & Planning",
      slug: "event-management-planning",
      description: "Professional event management that exceeds expectations and achieves your goals.",
      image: "/src/assets/service-event-management.jpg"
    },
    {
      name: "Publishing & Printing",
      slug: "publishing-printing",
      description: "Quality design and print works including magazines, books, and brochures.",
      image: "/src/assets/service-publishing.jpg"
    },
    {
      name: "Web Design & Development",
      slug: "web-design-development",
      description: "Comprehensive web services from design to full development and implementation.",
      image: "/src/assets/service-web-development.jpg"
    },
    {
      name: "Business & Strategic Plans",
      slug: "business-strategic-plans",
      description: "Strategic planning services to guide your organization toward success.",
      image: "/src/assets/service-business-planning.jpg"
    },
    {
      name: "Multimedia Production",
      slug: "multimedia-production",
      description: "Audio visual services providing world-class experiences for events and marketing.",
      image: "/src/assets/service-multimedia.jpg"
    },
    {
      name: "Capacity Building & Training",
      slug: "capacity-building-training",
      description: "High quality training programs to enhance your team's capabilities.",
      image: "/src/assets/service-training.jpg"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive media and communication solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;