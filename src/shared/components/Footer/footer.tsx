import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080412] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-start">
        
        {/* Left Section */}
        <div className="w-full md:w-1/3 space-y-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/3-removebg-preview 1.png" alt="XTransmatrix Logo" className="h-10" />
          </div>

          {/* Business Statement */}
          <p className="text-lg font-semibold">
            We growing up your business <br /> with personal AI manager.
          </p>
          <p className="text-gray-400">Xtransmatrix, 2025.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="w-full md:w-2/3 flex flex-wrap justify-between mt-8 md:mt-0 gap-8">
          <div>
            <h4 className="text-gray-400 font-semibold">Platform</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:text-gray-300">Plans & Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">Personal AI Manager</a></li>
              <li><a href="#" className="hover:text-gray-300">AI Business Writer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Company</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Resources</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-300">Papers</a></li>
              <li><a href="#" className="hover:text-gray-300">Press Conferences</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#7F60ED] text-white py-4 mt-6 rounded-t-lg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2028 Xtransmatrix Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
