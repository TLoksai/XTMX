const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
