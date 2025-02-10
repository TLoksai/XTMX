import React from "react";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-12 bg-[#080412] text-white px-6 md:px-12">
      <div className="max-w-screen-xl w-full flex flex-col items-center gap-12">
        
        {/* Consulting & AI Prompt Cards (Aligned with Below Three Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-[700px_400px] gap-6 w-full max-w-[1100px]">
          
          {/* Consulting Card (Wider) */}
          <div className="bg-[#2D2352] p-8 rounded-2xl border border-purple-500 shadow-lg relative flex flex-col justify-between h-[320px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold">Consulting</h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-6">
                The efficiency and analytical capability of digital solutions, combined with
                the impact <br /> of face-to-face, in-person interactions.
                
                Trusted by start-ups, large enterprises, investors <br /> and governments.
                We are reimagining the way we do business.
              </p>
            </div>
            {/* Reduced Spiral Image Size */}
            <div className="absolute inset-0 flex justify-end items-center opacity-40">
              <img src="/images/services/spiral.png" alt="Consulting" className="w-[180px] md:w-[250px] h-auto" />
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-sm w-28">
              Get Started
            </button>
          </div>

          {/* AI Prompt Card (Narrower but Aligned) */}
          <div className="bg-[#2D2352] p-8 rounded-2xl border border-purple-500 shadow-lg relative flex flex-col justify-between h-[320px]">
            <div className="relative z-10">
              <h2 className="text-2xl font-extrabold">AI Prompt</h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-6">
                The efficiency and analytical capability of digital solutions, combined with
                the impact of face-to-face interactions.
              </p>
            </div>
            {/* Increased Robot Image Size */}
            <div className="absolute bottom-0 right-0 w-[130px] md:w-[200px] h-auto opacity-90">
              <img src="/images/services/robot.png" alt="AI Prompt" className="w-full h-auto" />
            </div>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-sm w-28">
              Get Started
            </button>
          </div>
        </div>

        {/* Lower Row - Three Cards (Aligned with First Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">

          {/* Med-Tech Card (Image Left) */}
          <div className="bg-[#2D2352] p-6 rounded-2xl border border-purple-500 shadow-lg text-left flex flex-col justify-between relative h-[260px]">
            <img src="/images/services/medtech.png" alt="MedTech" className="absolute top-4 left-4 w-16 md:w-20 h-auto opacity-80" />
            <h2 className="text-2xl font-extrabold mt-20">Med-Tech</h2> {/* Adjusted text lower */}
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The efficiency and analytical capability of digital solutions.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-sm w-28">
              Get Started
            </button>
          </div>

          {/* Tech Bros Card (Image Right) */}
          <div className="bg-[#2D2352] p-6 rounded-2xl border border-purple-500 shadow-lg text-left flex flex-col justify-between relative h-[260px]">
            <h2 className="text-2xl font-extrabold text-purple-400 mt-12">Tech Bros</h2>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The efficiency and analytical capability of digital solutions.
            </p>
            <img src="/images/services/techbros.png" alt="Tech Bros" className="absolute top-4 right-4 w-16 md:w-20 h-auto opacity-80" />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-sm w-28">
              Get Started
            </button>
          </div>

          {/* GEN AI Card (Image Right) */}
          <div className="bg-[#2D2352] p-6 rounded-2xl border border-purple-500 shadow-lg text-left flex flex-col justify-between relative h-[260px]">
            <h2 className="text-2xl font-extrabold mt-12">GEN AI</h2>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              The efficiency and analytical capability of digital solutions.
            </p>
            <img src="/images/services/gen ai.png" alt="GEN AI" className="absolute top-4 right-4 w-16 md:w-20 h-auto opacity-80" />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold text-sm w-28">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default Services;
