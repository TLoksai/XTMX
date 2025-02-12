import React from "react";

// Define the Partner type
interface Partner {
  id: number;
  logo: string;
  alt: string;
}

// Industry Partners Data (Repeated for Seamless Scrolling)
const partners: Partner[] = [
  { id: 1, logo: "/images/partners/1.png", alt: "Partner 1" },
  { id: 2, logo: "/images/partners/7.png", alt: "Partner 2" }, // Smaller and shifted logo
  { id: 3, logo: "/images/partners/3.png", alt: "Partner 3" },
  { id: 1, logo: "/images/partners/4.png", alt: "Partner 1" },
  { id: 2, logo: "/images/partners/2.png", alt: "Partner 2" }, // Smaller and shifted logo
  { id: 3, logo: "/images/partners/6.png", alt: "Partner 3" },
];

// Duplicate logos to create an infinite loop effect
const repeatedLogos: Partner[] = [...partners, ...partners, ...partners];

const CombinedSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Industry Partners Heading */}
      <div className="w-full py-10 text-center">
        <h2 className="text-3xl font-bold text-white">Client Partners</h2>
      </div>

      {/* Scrolling Logo Section */}
      <div className="w-full overflow-hidden relative group py-10">
        <div className="flex w-max gap-8 animate-scroll group-hover:[animation-play-state:paused] whitespace-nowrap">
          {repeatedLogos.map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 ${partner.id === 2 ? "translate-y-2" : ""}`}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`object-contain ${partner.id === 2 ? "h-6 md:h-8" : "h-10 md:h-12"}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind CSS Animation */}
      <style>
        {`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); } /* Scroll exactly one full set */
        }
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
      `}
      </style>

      {/* B2B Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-6 md:py-12 px-4 bg-[#080412] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-start md:items-center opacity-70">
          <img
            src="/images/b2b.png"
            alt="Glowing Background"
            className="w-full max-w-screen-xl h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl px-4 mt-12 md:mt-40">
          {/* Star Icons */}
          <div className="flex justify-center mb-4">
            <img
              src="/images/Vector.png"
              alt="Stars"
              className="w-8 md:w-10 opacity-80"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Creating <span className="text-purple-400">growth through</span> innovation
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-4">
            TCreating growth through innovation means challenging the status quo and turning bold ideas into action. By harnessing creative thinking and cutting-edge technology, we empower organizations to unlock new opportunities and thrive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CombinedSection;