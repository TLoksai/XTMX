const ServicesPage = () => {
  return (
    <div className="w-full bg-[#080412] text-white">
    {/* Hero Section */}
    <section className="bg-[#080412] text-white">
      {/* Hero Image with Parallax Effect */}
      <div
        className="relative bg-fixed bg-center bg-cover h-[750px] md:h-[550px] sm:h-[450px] flex items-center -mt-8"
        style={{
          backgroundImage:
            "url('/images/services1/forge-ai/lernmore/hero.png')",
        }}
      >
        {/* Overlay Image */}
        <img
          src="/images/about-us(Cultures)/learnmore/thework/over.png"
          alt="Overlay Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-110"
        />

        {/* Heading */}
        <h1 className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-center">
          FORGE AI <br />
        </h1>
      </div>
    </section>

    <div className="flex flex-col items-center justify-center p-10">
        <p className="text-center max-w-3xl mb-8 text-gray-300">
          Forge AI is a specialized AI development service focused on building Gen AI-integrated products
          that are enterprise-grade, production-ready, and fully supported. We work with businesses that have
          a clear idea and roadmap, executing their vision with precision and scalability.
        </p>
        <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold"> User Validation & Feedback Loop</h3>
            <p className="text-gray-200 mt-2">
            Rapid prototyping to validate core assumptions.
Ensure the product integrates seamlessly with existing workflows.
Build a functional MVP with a lean, scalable architecture.
            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Ideation & Strategy
            </h3>
            <p className="text-gray-200 mt-2">
            Work closely with founders and teams to refine Al-driven
Identify key pain points and target audience.
Develop a strategic roadmap for product development.
            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold"> Prototype & MVP Development</h3>
            <p className="text-gray-200 mt-2">
             
Rapid prototyping to validate core assumptions.
Build a functional MVP with a lean, scalable architecture.
Ensure the product integrates seamlessly with existing workflows

            </p>
          </div>
          <div className="bg-purple-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Scaling & PMF Alignment</h3>
            <p className="text-gray-200 mt-2">
            
Continuously refine the product based on real-world adoption.
Explore go-to-market strategies and growth channels.
Optimize Al models and infrastructure for scale.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#080412] text-white py-16 px-8 md:px-24 lg:px-32 ml-4 md:ml-8 lg:ml-16 xl:ml-32">
      {/* Why is this for? Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
          Why is this for?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>
            <span className="text-[#B296F1] font-semibold">Startups</span> and{" "}
            <span className="text-[#B296F1] font-semibold">entrepreneurs</span>{" "}
            validating AI ideas.
          </li>
          <li>
            <span className="text-[#B296F1] font-semibold">Enterprises</span>{" "}
            exploring AI-driven innovation.
          </li>
          <li>
            Investors looking to de-risk{" "}
            <span className="text-[#B296F1] font-semibold">AI product</span>{" "}
            investments.
          </li>
        </ul>
      </section>

      {/* Compliance Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Compliance{" "}
          <span className="text-[#B296F1]">( Data & Cyber Security Coverage )</span>
        </h2>
        <ul className="list-disc list-inside space-y-4 text-gray-300">
          <li>Comprehensive & General Insurance: 2M USD coverage</li>
          <li>Cybersecurity Insurance: 2M USD coverage</li>
          <li>Errors & Omissions Insurance: 5M USD coverage</li>
          <li>ISO9001, ISO27001. Certified</li>
          <li>Onboarded ISO AI System Lead Auditor</li>
        </ul>
      </section>
    </div>

     {/* Main Container */}
     <section
      className="relative flex justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-24 sm:py-32 text-white bg-[url('/images/contact.png')] bg-[length:80%] bg-center bg-no-repeat"
    >
      {/* Overlay (Optional for Better Readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contact Button (Floating Above) */}
      <div
        className="absolute top-6 sm:top-8 md:top-12 lg:top-16 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full border-2 border-[#35A7E4] text-xs sm:text-sm md:text-lg font-semibold z-10 hover:bg-[#3953C5] hover:border-[#6253A1]"
        style={{ backgroundColor: "rgba(98, 83, 161, 0.3)" }}
      >
        Contact
      </div>

      {/* Main Container */}
      <div className="w-full sm:w-5/6 md:w-4/5 bg-black p-6 sm:p-10 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col md:flex-row mt-12 sm:mt-16 relative z-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-8 py-6 sm:py-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center">Get in touch with us</h2>

            {/* Message Box */}
            <div className="flex items-center space-x-3 sm:space-x-4 bg-[#1e1e38] p-4 sm:p-5 rounded-lg mt-6 sm:mt-8">
              <img src="/images/Ellipse 6.png" alt="User Avatar" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-300">
                Hi, I’m Amanda. Need help? Use the form below or email me at
                <span className="text-[#B296F1]"> hello@xtransmatrix.com</span>.
              </p>
            </div>

            {/* Form Fields */}
            <form className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
              />
              <textarea
                placeholder="Type your query here..."
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24 sm:h-28"
              ></textarea>
              <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#6253A1] text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-[#53458C] transition">
                Send my message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-10 md:mt-0 h-64 sm:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7748129493244!2d77.59107387485258!3d13.061026713693185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1fb0f1f0b12f%3A0x6b0bb03d8998d63c!2s3H4X%2B448%2C%20Dasarahalli%20Main%20Rd%2C%20Sector%20B%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Byatarayanapura%20CMC%20and%20OG%20Part%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    </div>
  );
};

export default ServicesPage;
