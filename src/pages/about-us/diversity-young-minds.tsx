import React from "react";

const DiversitySection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white">
      {/* Banner Section with Parallax Effect */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/about-us(Diversity)/hero.png')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative flex items-center justify-center h-full text-white text-3xl md:text-4xl font-bold">
          <h1>Diversity by Young Minds</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold">
            Diversity by <span className="text-purple-400">Young Minds</span>
          </h2>
          <p className="text-gray-300 mt-4">
            
          </p>
          <p className="text-gray-300 mt-4">
          At xTRansmatrix, we champion "Diversity by Young Minds"—a dynamic blend of GenZ energy and the right mix of change agents. We believe that true innovation springs from collaboration among diverse young talents, each bringing unique perspectives and bold ideas. In our vibrant ecosystem, these emerging leaders work side by side with experienced trailblazers, challenging conventions and transforming obstacles into opportunities. Together, we foster an environment where every voice is valued, every idea ignites progress, and every collaborative effort drives meaningful change for our clients, communities, and the future of work.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
        </div>

        {/* Right-side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/about-us(Diversity)/1.png"
            alt="Diversity"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;
