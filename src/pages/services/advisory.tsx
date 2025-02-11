import React from "react";

const AdvisoryAndAIAdvisorySection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white">
      {/* Banner Section with Parallax Effect */}
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('/images/services1/advisory/1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Advisory & AI Risk Management</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16">
        {/* Project to Product Transformation */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              Project to <span className="text-purple-400">Product Transformation</span>
            </h2>
            <p className="text-gray-300 mt-4">
              At XTRANSMATRIX, our Advisory Services help organizations shift from a traditional project mindset to a dynamic, product-centric approach.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="/images/services1/advisory/2.png" alt="Product Transformation" className="w-64 md:w-72" />
          </div>
        </div>

        {/* AI Enabled Product & Team Agility */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              AI Enabled <span className="text-purple-400">Product & Team Agility</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Our AI Enabled Product & Team Agility Advisory service empowers organizations to revolutionize their product development.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
              Learn more →
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src="/images/services1/advisory/3.png" alt="AI Team Agility" className="w-64 md:w-72" />
          </div>
        </div>

        {/* AI Risk Management Advisory Services */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="md:w-1/3 flex justify-center">
            <img src="/images/services1/advisory/4.png" alt="AI Risk Management" className="w-64 md:w-72" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold">
              AI Risk Management <span className="text-purple-400">Advisory Services</span>
            </h2>
            <p className="text-gray-300 mt-4">
              At XTRANSMATRIX, in partnership with Cydratech, we offer comprehensive advisory services designed to help organizations navigate AI adoption complexities.
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
              Learn more →
            </button>
          </div>
        </div>
      </div>

      {/* Additional Advisory Approach */}
      <div className="bg-[#0a0214] text-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Our advisory approach includes</h2>
        <ul className="mt-6 text-gray-300 text-left space-y-4 max-w-4xl mx-auto">
          <li><span className="font-bold text-white">AI-Enabled Product Frameworks:</span> Enhance product development and accelerate time-to-market.</li>
          <li><span className="font-bold text-white">Agile Team Transformation:</span> Establish small, nimble squads that adapt quickly to market changes.</li>
          <li><span className="font-bold text-white">Expert Consultation:</span> Gain insights from seasoned consultants in digital transformation.</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full">
          Learn more →
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-16">
        <img src="/images/advisory-ai-risk.png" alt="AI Risk Management" className="w-72 md:w-96" />
      </div>
    </section>
  );
};

export default AdvisoryAndAIAdvisorySection;
