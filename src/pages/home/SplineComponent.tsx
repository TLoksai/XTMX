import Spline from "@splinetool/react-spline";

const SplineAndObjectives = () => {
  return (
    <main className="relative flex flex-col items-center bg-[#080412] px-4">
      {/* Spline Section */}
      <section className="relative flex flex-col items-center w-full md:min-h-screen">
        {/* Image for mobile view (Text Overlayed) */}
        <div className="relative block md:hidden w-full">
          <img
            src="/images/remove later bg.png"
            alt="Mobile Spline Image"
            className="w-full h-auto"
          />

          {/* Text Overlay on Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-lg font-bold leading-tight">
              AI-Transformation
            </h1>
            <h1 className="text-lg font-bold leading-tight">Partner</h1>
            <p className="mt-2 text-[10px] text-gray-300 text-center">
              Ship higher-quality software faster. Be the hero of your
              engineering teams.
            </p>
          </div>
        </div>

        {/* Spline for larger screens */}
        <div className="hidden md:block w-full h-full md:max-w-full max-w-sm mx-auto md:flex md:justify-center">
          <Spline
            scene="https://prod.spline.design/2BA-koqBKaGTuA3f/scene.splinecode"
            className="w-full h-auto"
          />
        </div>

        {/* Overlay Text for Desktop */}
        <div className="hidden md:flex absolute md:bottom-64 text-center text-white flex-col items-center px-4">
          <h1 className="text-6xl font-bold leading-tight">
          AI-Tech  Catalyst
          </h1>
          <h1 className="text-6xl font-bold leading-tight">Partner</h1>
          <p className="mt-3 text-sm text-gray-300 max-w-md text-center">
          Ignite your AI journey with precision data tagging and annotation – your catalyst for transformation.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="text-white py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Button */}
        <div className="flex justify-center">
          <button className="px-5 py-2 border border-purple-500 text-purple-400 rounded-full text-xs sm:text-sm md:text-base hover:bg-purple-600 hover:text-white transition">
            Objectives
          </button>
        </div>

        {/* Heading */}
        <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-white leading-snug mx-auto max-w-[90%] md:max-w-[1100px]">
          We are your <span className="text-[#A192FF]">strategic partner</span> —the dedicated channel that unlocks and accelerates your growth.
        </h2>

        {/* Supporting Text */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-[90%] md:max-w-[900px] mx-auto text-gray-400 leading-relaxed">
        The efficiency and analytical capability of digital solutions, combined with the impact of face to face, in-person interactions.
        Trusted by start-ups, large enterprises, investors and governments. We are reimagining the way we do business.
        </p>
      </section>
    </main>
  );
};

export default SplineAndObjectives;
