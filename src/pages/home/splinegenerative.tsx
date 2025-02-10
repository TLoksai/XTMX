import React from "react";
import Spline from "@splinetool/react-spline";

const Home: React.FC = () => {
  return (
    <main className="relative flex items-center justify-center h-screen bg-black">
      {/* Spline 3D Scene */}
      <Spline
        scene="https://prod.spline.design/IOhnGplRHlSb-M8P/scene.splinecode"
        className="w-full h-full"
      />

      {/* Overlay Text */}
      <div className="absolute text-center px-4 max-w-[330px] sm:max-w-none">
        {/* Line 1 of Heading */}
        <h1 className="text-xl sm:text-6xl font-bold text-white drop-shadow-lg">
          <span className="text-[#B296F1]">Generative AI Inference</span> that
        </h1>

        {/* Line 2 of Heading */}
        <h2 className="text-xl sm:text-6xl font-bold text-white drop-shadow-lg">
          scales with you
        </h2>

        {/* Objectives Button */}
        <button
          className="mt-4 sm:mt-8 px-5 sm:px-8 py-2 sm:py-4 bg-[#7F60ED] text-white rounded-full text-xs sm:text-lg font-semibold hover:bg-[#6b50cc] transition"
        >
          Objectives
        </button>
      </div>
    </main>
  );
};

export default Home;
