import React from "react";

const PerformAISection: React.FC = () => {
  return (
    <section className="bg-[#0a0214] text-white font-sans">
      {/* Banner Section with Parallax Effect */}
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-white text-3xl md:text-4xl font-bold text-center px-4 bg-fixed"
        style={{
          backgroundImage: "url('/images/services1/perform ai/1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <h1 className="relative z-10 uppercase">Perform AI</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-lg mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h2 className="text-xl md:text-2xl font-bold">
            Accelerating AI{" "}
            <span className="text-purple-400">Performance and Efficiency</span>
          </h2>
          <p className="text-gray-300 mt-4 text-justify">
            We empower your AI initiatives with a specialized team of AI
            Operators, AI Trainers, and AI Prompt Engineers dedicated to
            enhancing AI performance and streamlining fast training processes.
            Our experts drive rapid training of AI systems through precise data
            annotation and a suite of tailored services essential for the
            future of AI Solutions as a Service. With cutting-edge methodologies
            and industry-leading practices, we optimize every model for
            accuracy, scalability, and efficiency.
          </p>
          <p className="text-gray-300 mt-4 text-justify">
            Operating from our state-of-the-art centers in Bangalore and
            Mangalore, we leverage local talent and advanced infrastructure to
            deliver agile, innovative solutions that meet the evolving demands
            of the digital landscape. At Perform AI, we transform your AI vision
            into high-performance reality, ensuring your business stays ahead in
            the fast-paced world of intelligent automation and data-driven
            decision-making.
          </p>

          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all duration-300 text-white font-semibold rounded-full flex items-center">
            Learn more →
          </button>
        </div>

        {/* Right-side Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/images/services1/perform ai/2.png"
            alt="Illustration showcasing AI performance"
            className="w-64 md:w-72 rounded-lg hover:shadow-lg transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default PerformAISection;
