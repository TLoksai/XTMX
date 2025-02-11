import Spline from "@splinetool/react-spline";

const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-col items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28 xl:px-32 py-2 md:py-4 text-white space-y-10 md:space-y-0 mt-[-100px] sm:mt-[-100px]
 max-w-[1400px] mx-auto">
      
      {/* Heading Section */}
      <div className="text-center w-full">
        <h1 className="text-xl sm:text-3xl font-bold leading-tight">
          <span className="text-[#B296F1]">Agentic AI Interference</span> that scales
          <br />
          Med Tech
        </h1>
        <button className="mt-4 px-4 py-2 bg-[#7F60ED] text-white rounded-full text-sm font-semibold">
          MedTech
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full space-y-10 md:space-y-0">
        
        {/* Left Text Section */}
        <div className="w-full md:w-/2 space-y-10 md:pl-12 lg:pl-16 xl:pl-20 order-2 md:order-1">
          
          {/* First Feature */}
          <div className="border-t border-[#B296F1] pt-6">
            <div className="flex items-start gap-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#B296F1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14H12L11 22L21 10H13L13 2Z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  Efficiency & Accuracy
                </h3>
                <p className="text-gray-400 text-sm">
                  We help AI models evolve to provide reliable and precise automation. 
                </p>
              </div>
            </div>
          </div>

          {/* Second Feature */}
          <div className="border-t border-[#B296F1] pt-6">
            <div className="flex items-start gap-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#B296F1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14H12L11 22L21 10H13L13 2Z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  Med-Tech Industry Experts
                </h3>
                <p className="text-gray-400 text-sm">
                  Our AI Operators understand the nuances of healthcare operations.
                </p>
              </div>
            </div>
          </div>

          {/* Third Feature */}
          <div className="border-t border-[#B296F1] pt-6">
            <div className="flex items-start gap-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#B296F1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 2L3 14H12L11 22L21 10H13L13 2Z" />
              </svg>
              <div>
                <h3 className="text-lg font-semibold text-[#B296F1]">
                  HIPAA-Compliant AI Trainers
                </h3>
                <p className="text-gray-400 text-sm">
                  We prioritize security and compliance in every process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spline 3D Shape Section */}
        <div className="w-full flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
            <Spline scene="https://prod.spline.design/3LBFEZjJayVhGb1e/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
