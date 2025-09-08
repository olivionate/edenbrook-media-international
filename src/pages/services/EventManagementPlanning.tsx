import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EventManagementPlanning = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Event Management & Planning</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                Any event management company can help you choose linens, organize catering or find a hotel for your event. It takes a real 
                partner to get to know your business, understand your objectives, and design and deliver an event that will help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventManagementPlanning;