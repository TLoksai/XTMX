import React from "react";

const ExperiencedHires: React.FC = () => {
  return (
    <div className="w-full text-white font-inter bg-black">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[650px] overflow-hidden font-inter">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/experienced1.jpg')",
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
          <h1>Experienced Hired</h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="px-6 sm:px-10 md:px-20 lg:px-32 py-12 text-center font-inter">
        <p className="font-bold text-xl md:text-2xl">ACCELERATE YOUR PLACE IN THE WORKPLACE</p>
        <p className="mt-4 text-lg md:text-xl">
          If creativity and innovation are your passion, then xTransMatrix is the place for you. 
          We believe that our domain expertise, commitment to delivery excellence, and 
          our unique ‘Be Yourself At Work’ culture foster creativity and innovation to 
          create bespoke, cutting-edge solutions for our clients.
        </p>
        <a
          href="https://xtransmatrix.com/search"
          className="inline-block bg-red-600 text-white px-6 py-3 mt-6 font-bold border-2 border-red-600 rounded-md hover:bg-white hover:text-red-600 transition"
        >
          ARE WE THE RIGHT FIT FOR YOU? APPLY NOW!
        </a>
      </div>

      {/* What We Offer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 md:px-20 lg:px-32 py-12 items-center font-inter">
        <div className="h-64 md:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/images/offere.jpg')" }}></div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">WHAT WE OFFER</h2>
          <p className="text-lg md:text-xl">
            The freedom to shape your personal and professional development. A diverse and 
            inclusive culture that supports both individuality and teamwork. Opportunities 
            for career advancement through industry roles, projects, coaching, and support.
            Learning & Development programs for a variety of learners. Participation in CSR 
            and well-being programs, diversity and inclusion groups, and more.
          </p>
        </div>
      </div>

      {/* Hiring Process Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-10 md:px-20 lg:px-32 py-12 items-center font-inter">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">OUR HIRING PROCESS</h2>
          <p className="text-lg md:text-xl">
            Our hiring process typically comprises four stages. After receiving your 
            application and resume, a recruiter will arrange an initial video or phone 
            call. If you are a good fit, we schedule follow-up interviews with the 
            team. The final stage includes a meeting with a senior leader.
          </p>
        </div>
        <div className="h-64 md:h-96 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/images/hiring.png')" }}></div>
      </div>

      {/* Career Grid Section */}
      <section className="text-center py-12 px-6 sm:px-10 md:px-20 lg:px-32 font-inter">
        <h2 className="text-2xl md:text-3xl font-bold border-b-4 border-red-500 inline-block mb-6">
          LATEST CAREERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            {
              title: "React Developer - (Frontend-Focused)",
              location: "India - Bengaluru",
              link: "https://xtransmatrix.com/search",
            },
            {
              title: "Backend Engineer - (with LLM Experience)",
              location: "India - Bengaluru",
              link: "https://xtransmatrix.com/search",
            },
          ].map((job, index) => (
            <a
              key={index}
              href={job.link}
              className="block no-underline text-white"
            >
              <div className="bg-gray-900 p-6 text-left border-l-4 border-teal-500 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-800">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-white text-base md:text-lg">{job.location}</p>
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                  Know more
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencedHires;
