import React from "react";

const Services: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-12 bg-[#080412] text-white px-6 md:px-12 overflow-hidden">
      <div className="max-w-screen-xl w-full flex flex-col items-center gap-12">
        
        {/* Row 1: Forge AI & Perform AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1100px]">
          
          {/* Forge AI Card */}
          <div className="bg-[#2D2352] p-8 rounded-2xl border border-purple-500 shadow-lg flex flex-col justify-between h-[320px] relative">
            <div className="relative z-10"><br/>
              <h2 className="text-2xl font-extrabold">Forge AI</h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-4">
                Forge AI is redefining innovation by transforming ideas into intelligent, data-driven solutions. 
                With advanced AI capabilities, we empower businesses to streamline operations, enhance decision-making, and drive growth.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-[40%] opacity-40 pointer-events-none">
              <img src="/images/services/spiral.png" alt="Forge AI" className="w-full h-auto" />
            </div>
            <a href="/forge-ai" className="relative z-20">
              <button className="px-4 py-2 bg-[#5552FF] hover:bg-[#4640E6] rounded-full text-white font-semibold text-sm w-28 transition">
                Get Started
              </button>
            </a>
          </div>

          {/* Perform AI Card */}
          <div className="bg-[#2D2352] p-8 rounded-2xl border border-purple-500 shadow-lg flex flex-col justify-between h-[320px] relative">
            <div className="relative z-10"><br/>
              <h2 className="text-2xl font-extrabold">Perform AI</h2>
              <p className="text-gray-300 text-sm leading-relaxed mt-4">
                Perform AI empowers businesses with intelligent automation, driving efficiency and innovation. Harness AI to optimize processes and unlock new possibilities.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-[40%] opacity-90 pointer-events-none">
              <img src="/images/services/robot.png" alt="Perform AI" className="w-full h-auto" />
            </div>
            <a href="/perform-ai">
              <button className="px-4 py-2 bg-[#5552FF] hover:bg-[#4640E6] rounded-full text-white font-semibold text-sm w-28 transition">
                Get Started
              </button>
            </a>
          </div>
          
        </div>

        {/* Row 2: Advisory & Tech Squads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">
          
          {/* Advisory Card */}
          <div className="bg-[#2D2352] p-6 rounded-2xl border border-purple-500 shadow-lg flex flex-col justify-between relative h-[260px]">
            <h2 className="text-2xl font-extrabold">Advisory</h2>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Expert guidance to navigate AI-driven transformation with confidence and strategy.
            </p>
            <img 
              src="/images/services/gen ai.png" 
              alt="GEN AI" 
              className="absolute top-4 right-4 w-[35%] md:w-[30%] opacity-80 pointer-events-none" 
            />
            <a href="/advisory">
              <button className="px-4 py-2 bg-[#5552FF] hover:bg-[#4640E6] rounded-full text-white font-semibold text-sm w-28 transition">
                Get Started
              </button>
            </a>
          </div>

          {/* Tech Squads Card */}
          <div className="bg-[#2D2352] p-6 rounded-2xl border border-purple-500 shadow-lg flex flex-col justify-between relative h-[260px] sm:col-span-2">
            <h2 className="text-2xl font-extrabold text-purple-400">Tech Squads</h2>
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              Building high-performance tech squads that drive innovation, deliver solutions, and accelerate business growth with agile expertise.
            </p>
            <img 
              src="/images/services/techbros1.png" 
              alt="Tech Bros" 
              className="absolute top-4 right-4 w-[35%] md:w-[30%] opacity-80 pointer-events-none" 
            />
            <a href="/tech-squads">
              <button className="px-4 py-2 bg-[#5552FF] hover:bg-[#4640E6] rounded-full text-white font-semibold text-sm w-28 transition">
                Get Started
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>  
  );
};

export default Services;
