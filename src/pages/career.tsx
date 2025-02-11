import React from "react";
import { FaTools, FaClock, FaHardHat } from "react-icons/fa";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      {/* Icons */}
      <div className="flex space-x-4 mb-6 animate-bounce">
        <FaTools className="text-5xl" />
        <FaClock className="text-5xl" />
        <FaHardHat className="text-5xl" />
      </div>

      {/* Message */}
      <h1 className="text-4xl font-bold mb-2">We're Under Construction 🚧</h1>
      <p className="text-lg max-w-lg">
        Our team is working hard to bring you something amazing. Stay tuned, we'll be launching soon! 🚀
      </p>

      {/* Contact */}
      <p className="mt-4 text-sm opacity-80">For inquiries, reach us at <span className="font-semibold">t hello@xtransmatrix.com</span></p>
    </div>
  );
};

export default ComingSoon;
