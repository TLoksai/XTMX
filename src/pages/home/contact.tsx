const ContactSection = () => {
  return (
    <section
      className="relative flex justify-center px-6 md:px-16 lg:px-24 py-16 text-white bg-[url('/images/contact.png')] bg-cover bg-center"
    >
      {/* Overlay (Optional for Better Readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contact Button (Floating Above) */}
      <div className="absolute top-4 md:top-6 lg:top-8 bg-[hsl(252,32%,48%)] text-white px-6 py-3 rounded-full border-2 border-[#6135e4] text-sm md:text-lg font-semibold z-10 
      hover:bg-[#3953c5] hover:border-[#6253A1] hover:text-black transition duration-300 ease-in-out">
       Contact
      </div>



      {/* Main Container */}
      <div className="w-full md:w-4/5 bg-black p-6 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col md:flex-row mt-8 relative z-10">
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center px-4 py-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center">Get in touch with us</h2>

            {/* Message Box */}
            <div className="flex items-center space-x-4 bg-[#1e1e38] p-4 rounded-lg mt-4">
              <img
                src="/images/Ellipse 6.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-sm text-gray-300">
                Hi, I’m Amanda. Need help? Use the form below or email me at
                <span className="text-[#B296F1]"> hello@xtransmatrix.com</span>.
              </p>
            </div>

            {/* Form Fields */}
            <form className="space-y-4 mt-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
              />
              <textarea
                placeholder="Type your query here..."
                className="w-full p-3 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24"
              ></textarea>
              <button className="w-full px-6 py-3 bg-[#6253A1] text-white rounded-md text-lg font-semibold hover:bg-[#53458C] transition">
                Send my message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden mt-6 md:mt-0">
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
