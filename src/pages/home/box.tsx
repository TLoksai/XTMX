import Spline from "@splinetool/react-spline";

const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-col items-center justify-between px-6 sm:px-12 md:px-20 lg:px-32 py-2 md:py-4 text-white space-y-10 md:space-y-0 mt-0 sm:mt-0">
      
      {/* Heading Section - Always at the top */}
      <div className="text-center w-full">
        <h1 className="text-xl sm:text-3xl font-bold leading-tight">
          <span className="text-[#B296F1]">Generative AI Inference</span> that
          <br />
          scales Med Tech
        </h1>
        <button className="mt-4 px-4 py-2 bg-[#7F60ED] text-white rounded-full text-sm font-semibold">
          MedTech
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full space-y-10 md:space-y-0">
        
        {/* Left Text Section - Comes last on mobile, remains same for desktop */}
        <div className="w-full md:w-1/2 space-y-10 md:pl-16 lg:pl-24 xl:pl-32 order-2 md:order-1">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border-t border-[#B296F1] pt-6">
              <div className="flex items-start gap-4">
                {/* Lightning Icon */}
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

        {/* Spline 3D Shape Section - Comes second on mobile, remains same for desktop */}
        <div className="w-full flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Spline scene="https://prod.spline.design/3LBFEZjJayVhGb1e/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
