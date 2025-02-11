import React from "react";
import Spline from "@splinetool/react-spline";

const Home: React.FC = () => {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-black overflow-x-hidden">
      {/* Spline 3D Scene - Ensure it stays in the background */}
      <div className="absolute inset-0 w-full h-full">
        <Spline
          scene="https://prod.spline.design/IOhnGplRHlSb-M8P/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 text-center px-4 max-w-[330px] sm:max-w-none">
        <h1 className="text-xl sm:text-6xl font-bold text-white drop-shadow-lg">
          <span className="text-[#B296F1]">xTransmatrix AI Inference</span> that 
        </h1>
        <h2 className="text-xl sm:text-6xl font-bold text-white drop-shadow-lg">
          scales with you
        </h2>
        <button className="mt-4 sm:mt-8 px-5 sm:px-8 py-2 sm:py-4 bg-[#7F60ED] text-white rounded-full text-xs sm:text-lg font-semibold hover:bg-[#6b50cc] transition">
          Objectives
        </button>
      </div>
    </main>
  );
};

const CircularBackgroundWithText: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full sm:h-screen mt-20 sm:mt-0 overflow-x-hidden">
      {/* Circular Background Image - Desktop */}
      <img
        src="/images/Screenshot (189).png"
        alt="Circular Background"
        className="hidden sm:block absolute w-[90%] h-[90%] object-contain sm:w-[80%] sm:h-[80%] sm:translate-x-10 sm:-top-12" 
      />

      {/* Circular Background Image - Mobile */}
      <img
        src="/images/circle.png"
        alt="Circular Background"
        className="block sm:hidden w-[100%] max-w-[400px] h-auto object-contain relative"
      />

      {/* Desktop View (Hidden on Mobile) */}
      <div className="hidden sm:block absolute top-12 text-center w-full px-4 sm:px-0 sm:translate-x-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-white leading-snug">
          A hub of excellence
          <br className="hidden sm:block" />
          collaboration, and impact
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-white max-w-lg mx-auto leading-relaxed">
        Creating impact through excellence and seamless collaboration. 
          <br className="hidden sm:block" />
          
        </p>
        <div className="mt-4 flex justify-center items-center">
          <button className="px-4 py-2 bg-[#7F60ED] text-white rounded-full text-xs sm:text-sm font-semibold">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

const CombinedComponent: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <CircularBackgroundWithText />
    </div>
  );
};

export default CombinedComponent;
