import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PublishingPrinting = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Publishing & Printing</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                We have specialized in publishing quality design and print works including magazines, books, brochures, newspapers, reports, 
                flyers and many more, owing to our expertise in content development and design of such products.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublishingPrinting;