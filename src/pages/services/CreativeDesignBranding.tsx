import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreativeDesignBranding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Creative Design & Branding</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                How can we help you put your business in the forefront in this increasingly competitive market? Using stylish and tasteful 
                presentations with cutting-edge graphics, we can rapidly move your business in front of your competitors and keep you at that place.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreativeDesignBranding;