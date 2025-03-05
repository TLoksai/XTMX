import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <section className="relative flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 text-white bg-[url('/images/contact.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="w-full max-w-6xl bg-black p-6 sm:p-10 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 mt-12 sm:mt-16 relative z-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center">Get in touch with us</h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-6 sm:mt-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your query here..."
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24 sm:h-28"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#6253A1] text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-[#53458C] transition"
              >
                Send my message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full md:w-1/2 flex flex-col self-stretch">
          <div className="w-full h-full rounded-lg overflow-hidden flex-grow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7748129493244!2d77.59107387485258!3d13.061026713693185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1fb0f1f0b12f%3A0x6b0bb03d8998d63c!2s3H4X%2B448%2C%20Dasarahalli%20Main%20Rd%2C%20Sector%20B%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Byatarayanapura%20CMC%20and%20OG%20Part%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;