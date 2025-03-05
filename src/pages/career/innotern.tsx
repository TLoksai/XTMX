import React from "react";

const Innotern: React.FC = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center font-inter text-white">
            {/* Full-Width Image at the Top with Title */}
            <div className="relative w-full h-[350px] md:h-[650px] overflow-hidden font-inter">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/innotern.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <img
          src="/images/about-us(Cultures)/learnmore/thework/over.png"
          alt="Overlay Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative flex items-center justify-center h-full text-white text-2xl md:text-5xl font-bold text-center px-4">
          <h1>Hiring / Innotern</h1>
        </div>
      </div>
      <br/>
      <br/>

            {/* Second Section - Criteria Section */}
            <section className="flex flex-col items-center justify-center w-full px-10 bg-black">
                <h1 className="text-4xl font-bold text-white mb-6">
                    ARE YOU A GOOD FIT?
                </h1>
                <h2 className="text-xl  text-[#7F60ED] font-semibold mb-4">
                    HIRING CRITERIA
                </h2>
                <p className="text-white text-lg max-w-3xl text-center mb-6">
                    At xTransMatrix, we believe that our diverse and inclusive culture, where different perspectives are welcomed, gives us a
                    competitive edge. We look for candidates from a variety of backgrounds and experiences.
                </p>
                <h3 className="text-lg font-bold text-[#7F60ED] mb-3">
                    TO QUALIFY FOR OUR INNOTERN PROGRAM, YOU SHOULD MEET THESE CRITERIA:
                </h3>
                <ul className="text-white text-lg list-disc list-inside max-w-3xl text-left">
                    <li>Have a university or college degree</li>
                    <li>Be a recent university graduate</li>
                    <li>Possess exceptional analytical skills and problem-solving abilities</li>
                    <li>Have strong verbal and written communication skills</li>
                    <li>Be passionate about your work and focused on delivering excellence</li>
                </ul>
            </section>
            <br/>
            <br/>
            <br/>

            {/* APPLY NOW Section - Removed Extra Gap */}
            <section className="flex flex-col items-center justify-center w-full px-10 bg-black">
                <h1 className="text-4xl font-bold text-white mb-4">APPLY NOW!</h1>
                <a href="/search" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#7F60ED] bg-opacity-30 border border-purple-500 text-white px-6 py-3 text-lg font-semibold uppercase tracking-wide hover:bg-[#7F60ED] transition">
    CAREER SEARCH
  </button>
</a>

            </section>
        </div>
    );
};

export default Innotern;
