import React from "react";

// Define the Partner type
interface Partner {
  id: number;
  logo: string;
  alt: string;
  size: "small" | "medium" | "large";
}

// Industry Partners Data (Repeated for Seamless Scrolling)
const partners: Partner[] = [
  { id: 1, logo: "/images/partners/6.png", alt: "Partner 1", size: "large" },
  { id: 2, logo: "/images/partners/7.png", alt: "Partner 2", size: "large" },
  { id: 3, logo: "/images/partners/3.png", alt: "Partner 3", size: "large" },
  { id: 1, logo: "/images/partners/4.png", alt: "Partner 1", size: "large" },
  { id: 2, logo: "/images/partners/6.png", alt: "Partner 2", size: "large" },
  { id: 3, logo: "/images/partners/5.jpg", alt: "Partner 3", size: "large" },
];

// Duplicate logos to create an infinite loop effect
const repeatedLogos: Partner[] = [...partners, ...partners, ...partners];

const CombinedSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Industry Partners Heading */}
      <div className="w-full py-10 text-center">
        <h2 className="text-3xl font-bold text-white">Clients</h2>
      </div>

      {/* Scrolling Logo Section */}
      <div className="w-full overflow-hidden relative group py-10">
        <div className="flex w-max gap-8 animate-scroll group-hover:[animation-play-state:paused] whitespace-nowrap">
          {repeatedLogos.map((partner, index) => (
            <div
              key={index}
              className={`flex-shrink-0 px-4 ${
                partner.id === 2 ? "translate-y-2" : ""
              }`}
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`object-contain ${
                  partner.size === "small"
                    ? "h-6 md:h-8"
                    : partner.size === "medium"
                    ? "h-10 md:h-12"
                    : "h-14 md:h-16"
                }`}
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
          animation: scroll 5s linear infinite;
        }
      `}
      </style>

      {/* Full-width Background Image Section */}
      <section className="relative bg-[#080412] overflow-hidden">
        <img
          src="/images/b2b1.png"
          alt="Glowing Background"
          className="w-full h-[60vh] object-cover"
        />

        {/* Centered Text Over the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white translate-y-36 px-4 sm:px-6">
          {/* Main Heading */}
          <h1 className="text-lg sm:text-2xl md:text-5xl font-extra">
            Creating <span className="text-purple-400">growth through</span> innovation
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-md sm:max-w-lg md:max-w-2xl mx-auto mt-4">
            Creating growth through innovation means challenging the status quo and turning bold ideas into action. By harnessing
            creative thinking and cutting-edge technology, we empower organizations to unlock new opportunities and thrive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CombinedSection;
