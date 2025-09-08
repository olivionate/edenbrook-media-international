const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Edenbrook Media</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading media and communications company committed to delivering excellence in every project we undertake.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading media company that transforms businesses through innovative communication strategies.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                We provide comprehensive media services that elevate brands and create meaningful connections with target audiences.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, excellence, and client satisfaction guide everything we do at Edenbrook Media.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600">
                Experienced professionals dedicated to delivering exceptional results for every client project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;