import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PRMarketingConsultancy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">PR & Marketing Consultancy</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                In PR and Marketing Consultancy, we are advocates of integrated marketing communications here at Edenbrook Media International. 
                We professionally come up with a comprehensive PR & Marketing strategies, communications strategies and plans that involve key 
                tools for use in your establishment to bring about success in the market place.
              </p>
              
              <h2 className="text-2xl font-semibold text-primary mb-4">Integrated PR & Marketing Strategy</h2>
              <p className="mb-4">
                To get the most value in financial terms, from your marketing budget and to be effective, Integrated PR and marketing 
                strategies must be designed by starting to focus on your customer and their purchase journey with you.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Our Areas of Expertise:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Market segmentation</li>
                <li>Brand strategy</li>
                <li>Market mapping and positioning</li>
                <li>Customer relationship management</li>
                <li>Product development strategy</li>
                <li>Digital strategy and social media</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-primary mb-4">Communications Plan</h2>
              <p className="mb-4">
                Dealing with the media, whether print, radio or television can be difficult. With the right knowledge and strategy, you can 
                utilize all forms of media as a means of communicating company messages with successful results.
              </p>
              
              <p>
                A top communications agency, Edenbrook Media International is more than a communications firm. We function as a full business 
                partner to our clients, providing ongoing communications consulting and counsel.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PRMarketingConsultancy;