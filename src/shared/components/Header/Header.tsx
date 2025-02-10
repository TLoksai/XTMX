import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <header className="flex justify-center py-4">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-[#BBBBBB] text-white rounded-full relative z-50">
        
        {/* Logo */}
        <div className="flex items-center z-50">
          <img src="/images/3-removebg-preview 1.png" alt="XTransmatrix" className="h-8 w-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu (Fixed Position) */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#BBBBBB] bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-40">
            <button className="absolute top-6 right-6 text-white text-2xl" onClick={() => setIsOpen(false)}>
              <X className="h-8 w-8" />
            </button>
            <ul className="flex flex-col text-lg font-semibold text-white space-y-4">
              <li
                className="hover:text-[#5552FF] cursor-pointer relative"
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              >
                About us
                <ChevronDown className="inline-block ml-2" />
                {isAboutDropdownOpen && (
                  <ul className="bg-[#BBBBBB] mt-2 rounded-lg text-sm space-y-2 p-4 w-64 text-center">
                    <li className="hover:text-[#5552FF] cursor-pointer py-2">Cultures, Values and ESG</li>
                    <li className="hover:text-[#5552FF] cursor-pointer py-2">Diversity by Young Minds</li>
                    <li className="hover:text-[#5552FF] cursor-pointer py-2">FORGE AI</li>
                    <li className="hover:text-[#5552FF] cursor-pointer py-2">PERFORM AI</li>
                  </ul>
                )}
              </li>
              <li className="hover:text-[#5552FF] cursor-pointer">Technologies</li>
              <li className="hover:text-[#5552FF] cursor-pointer">Career</li>
              <li className="hover:text-[#5552FF] cursor-pointer">Med-Tech</li>
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li
            className="hover:text-[#5552FF] cursor-pointer relative group"
            onMouseEnter={() => setIsAboutDropdownOpen(true)}
            onMouseLeave={() => setIsAboutDropdownOpen(false)}
          >
            About us
            <ChevronDown className="inline-block ml-2" />
            {isAboutDropdownOpen && (
              <ul className="absolute bg-[#BBBBBB] text-white rounded-lg mt-2 p-4 shadow-lg space-y-2 text-sm w-64 text-center">
                <li className="hover:text-[#5552FF] cursor-pointer py-2">Cultures, Values and ESG</li>
                <li className="hover:text-[#5552FF] cursor-pointer py-2">Diversity by Young Minds</li>
                <li className="hover:text-[#5552FF] cursor-pointer py-2">FORGE AI</li>
                <li className="hover:text-[#5552FF] cursor-pointer py-2">PERFORM AI</li>
              </ul>
            )}
          </li>
          <li className="hover:text-[#5552FF] cursor-pointer">Technologies</li>
          <li className="hover:text-[#5552FF] cursor-pointer">Career</li>
          <li className="hover:text-[#5552FF] cursor-pointer">Med-Tech</li>
        </ul>

        {/* "Let's Connect" Button (Desktop Only) */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold">
          Let’s Connect
          <ArrowUpRight className="h-5 w-5 text-blue-400" />
        </button>
      </nav>
    </header>
  );
};

export default Header;