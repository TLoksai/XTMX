import React from "react";

const AIInferenceSection: React.FC = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 md:px-24 lg:px-30 py-16 text-white">
      {/* Left Side - Text & Features */}
      <div className="w-full sm:w-1/2 max-w-xl space-y-6 sm:pl-12 md:pl-24 lg:pl-32 text-center sm:text-left">
        {/* Title - Ensure "Generative AI Inference that" is in one line */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          <span className="text-[#B296F1]">Generative AI Inference </span>
          <span className="text-white">that</span>
          <br /> {/* Ensures "scales with you" is on the second line */}
          scales with you
        </h1>

        {/* Objectives Button */}
        <div className="flex justify-center sm:justify-start">
          <button className="w-40 px-6 py-3 border-2 border-[#6253A1] text-white bg-[#6253A1] rounded-full text-lg font-semibold hover:bg-[#53458C] transition">
            Objectives
          </button>
        </div>

        {/* Features List */}
        <div className="space-y-8 mt-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="border-t border-[#B296F1] pt-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                {/* Lightning Icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#B296F1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block"
                >
                  <path d="M13 2L3 14H12L11 22L21 10H13L13 2Z" />
                </svg>

                {/* Feature Text */}
                <div>
                  <h3 className="text-lg font-semibold text-[#B296F1]">
                    Fast cold boots
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Load gigabytes of weights in seconds with our optimized
                    container file system.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - AI Robot Image (Hidden on Mobile) */}
      <div className="hidden sm:flex w-1/2 justify-center pl-6 sm:pl-12 md:pl-24 lg:pl-32">
        <img
          src="/images/generative.png"
          alt="AI Robot"
          className="w-[250px] sm:w-[350px] sm:h-[450px] object-cover opacity-90"
        />
      </div>
    </section>
  );
};

export default AIInferenceSection;
