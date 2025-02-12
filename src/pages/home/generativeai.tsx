import React from "react";

const AIInferenceSection: React.FC = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-16 text-white max-w-[1400px] mx-auto">
      
      {/* Left Side - Text & Features */}
      <div className="w-full sm:w-1/2 max-w-xl space-y-6 sm:pl-10 md:pl-16 lg:pl-20 text-center sm:text-left">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold leading-tight">
          <span className="text-[#B296F1]">AI-Powered: Elevating  </span>
          <span className="text-white"> Data Annotation, Tagging & AI Prompts.</span>
        </h1>

        {/* Objectives Button */}
        <div className="flex justify-center sm:justify-start">
          <button className="w-40 px-6 py-3 border-2 border-[#6253A1] text-white bg-[#6253A1] rounded-full text-lg font-semibold hover:bg-[#53458C] transition">
            Objectives
          </button>
        </div>

        {/* Features List */}
        <div className="space-y-8 mt-6">

          {/* First Feature */}
          <div className="border-t border-[#B296F1] pt-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
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
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  Data Annotation
                </h3>
                <p className="text-gray-400 text-sm">
                  Transforming raw data into actionable insights through expert annotation.
                </p>
              </div>
            </div>
          </div>

          {/* Second Feature */}
          <div className="border-t border-[#B296F1] pt-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
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
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  Data Tagging
                </h3>
                <p className="text-gray-400 text-sm">
                  Every detail counts—unlock smarter insights with precision data tagging.
                </p>
              </div>
            </div>
          </div>

          {/* Third Feature */}
          <div className="border-t border-[#B296F1] pt-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
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
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  AI Prompt
                </h3>
                <p className="text-gray-400 text-sm">
                  Every prompt counts—unlock AI's potential with precision-crafted instructions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side - AI Robot Image (Hidden on Mobile) */}
      <div className="hidden sm:flex w-1/2 justify-center pl-6 sm:pl-10 md:pl-16 lg:pl-20">
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
