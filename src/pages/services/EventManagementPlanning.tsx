import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import eventManagementImg from "@/assets/service-event-management.jpg";

const EventManagementPlanning = () => {
  const serviceData = servicesData["Event Management & Planning"];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src={eventManagementImg} 
                alt="Event Management & Planning" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
              />
              <h1 className="text-4xl font-bold text-primary mb-6">Event Management & Planning</h1>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">
                {serviceData}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagementPlanning;