import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080412] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-start">
        
        {/* Left Section */}
        <div className="w-full md:w-1/3 space-y-4">
        <div className="flex items-center">
  <a href="/" aria-label="XTransmatrix Home">
    <img
      src="/images/3-removebg-preview 1.png"
      alt="XTransmatrix Logo"
      className="h-10"
    />
  </a>
</div>

          <p className="text-lg font-semibold">
            We growing up your business <br /> with personal AI manager.
          </p>
          <p className="text-gray-400">Xtransmatrix, 2025.</p>
          <div className="flex gap-4 mt-4">
            <img src="/images/footer/1.png" alt="Image 1" className="h-14 w-auto" />
            <img src="/images/footer/2.png" alt="Image 2" className="h-14 w-auto" />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="w-full md:w-2/3 flex flex-wrap justify-between mt-8 md:mt-0 gap-8">
          <div>
            <h4 className="text-gray-400 font-semibold">Services</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="/forge-ai" className="hover:text-gray-300">Forge AI</a></li>
              <li><a href="perform-ai" className="hover:text-gray-300">Perform AI</a></li>
              <li><a href="/advisory" className="hover:text-gray-300">Advisory</a></li>
              <li><a href="/tech-squads" className="hover:text-gray-300">Tech Squads</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Industries</h4>
            <ul className="space-y-2 mt-2">
              <li><a href="/medtech" className="hover:text-gray-300">Med-Tech</a></li>
              <li><a href="/automobile" className="hover:text-gray-300">Automobile</a></li>
              <li><a href="insurance" className="hover:text-gray-300">Insurance</a></li>
              <li><a href="banking" className="hover:text-gray-300">Banking and Payment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold">Social Media</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/" className="hover:text-gray-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/@xtransmatrixconsultingserv7036" className="hover:text-gray-300">
                <FaYoutube size={18} />
              </a>
              <a href="https://www.linkedin.com/company/xtransmatrix/?viewAsMember=true" className="hover:text-gray-300">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#7F60ED] text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 Xtransmatrix Inc. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
