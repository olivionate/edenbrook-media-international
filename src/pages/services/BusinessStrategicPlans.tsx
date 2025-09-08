import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessStrategicPlans = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Business & Strategic Plans</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                On the Strategic Plan front, our strategic planners have years of experience engaging clients to write their strategic plans. 
                We would work with you on a defined period of time to deliver a strategic plan that is concise, fundamental and objectively visionary.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessStrategicPlans;