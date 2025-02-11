import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isClickInsideDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );

      if (!isClickInsideDropdown) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-center py-4">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-gray-700 text-white rounded-full relative z-50">
        
        {/* Logo */}
        <div className="flex items-center z-50">
          <img src="/images/3-removebg-preview 1.png" alt="XTransmatrix" className="h-8 w-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-40">
            <ul className="flex flex-col text-lg font-semibold text-white space-y-4">
              {["about", "services", "industries", "intelligence"].map((category) => (
                <li
                  key={category}
                  className="hover:text-[#5552FF] cursor-pointer relative"
                  onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <ChevronDown className="inline-block ml-2" />
                  {openDropdown === category && (
                    <ul className="bg-gray-700 mt-2 rounded-lg text-sm space-y-2 p-4 w-64 text-center">
                      {category === "about" && (
                        <>
                          <li><Link to="/cultures-values-esg" className="hover:text-[#5552FF] py-2 block">Cultures, Values and ESG</Link></li>
                          <li><Link to="/diversity-young-minds" className="hover:text-[#5552FF] py-2 block">Diversity by Young Minds</Link></li>
                          <li><Link to="/recent-awards-recognition" className="hover:text-[#5552FF] py-2 block">Recent Awards and Recognition</Link></li>
                          <li><Link to="/our-partners" className="hover:text-[#5552FF] py-2 block">Our Partners</Link></li>
                        </>
                      )}
                      {category === "services" && (
                        <>
                          <li><Link to="/forge-ai" className="hover:text-[#5552FF] py-2 block">Forge AI</Link></li>
                          <li><Link to="/perform-ai" className="hover:text-[#5552FF] py-2 block">Perform AI</Link></li>
                          <li><Link to="/advisory" className="hover:text-[#5552FF] py-2 block">Advisory</Link></li>
                          <li><Link to="/tech-squads" className="hover:text-[#5552FF] py-2 block">Tech Squads</Link></li>
                        </>
                      )}
                      {category === "industries" && (
                      <>
                        <li><Link to="/medtech" className="hover:text-[#5552FF] py-2 block">MEDTECH</Link></li>
                        <li><Link to="/automobile" className="hover:text-[#5552FF] py-2 block">Automobile</Link></li>
                        <li><Link to="/insurance" className="hover:text-[#5552FF] py-2 block">Insurance</Link></li>
                        <li><Link to="/banking" className="hover:text-[#5552FF] py-2 block">Banking and Payment</Link></li>
                      </>
                    )}
                    {category === "intelligence" && (
                      <>
                        <li><Link to="/xtmx-intelligence" className="hover:text-[#5552FF] py-2 block">XTMX Intelligence</Link></li>
                        <li><Link to="/events" className="hover:text-[#5552FF] py-2 block">Events</Link></li>
                      </>
                    )}

                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {["about", "services", "industries", "intelligence"].map((category) => (
            <div
              key={category}
              className="relative group"
              ref={(el) => (dropdownRefs.current[category] = el)}
              onMouseEnter={() => setOpenDropdown(category)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <li className="hover:text-[#5552FF] cursor-pointer flex items-center capitalize">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <ChevronDown className="ml-2" />
              </li>

              {/* Submenu */}
              {openDropdown === category && (
                <ul className="absolute bg-gray-700 text-white rounded-lg mt-2 p-4 shadow-lg space-y-2 text-sm w-64 text-center">
                  {category === "about" && (
                    <>
                      <li><Link to="/cultures-values-esg" className="hover:text-[#5552FF] py-2 block">Cultures, Values and ESG</Link></li>
                      <li><Link to="/diversity-young-minds" className="hover:text-[#5552FF] py-2 block">Diversity by Young Minds</Link></li>
                      <li><Link to="/recent-awards-recognition" className="hover:text-[#5552FF] py-2 block">Recent Awards and Recognition</Link></li>
                      <li><Link to="/our-partners" className="hover:text-[#5552FF] py-2 block">Our Partners</Link></li>
                    </>
                  )}
                  {category === "services" && (
                    <>
                      <li><Link to="/forge-ai" className="hover:text-[#5552FF] py-2 block">Forge AI</Link></li>
                      <li><Link to="/perform-ai" className="hover:text-[#5552FF] py-2 block">Perform AI</Link></li>
                      <li><Link to="/advisory" className="hover:text-[#5552FF] py-2 block">Advisory</Link></li>
                      <li><Link to="/tech-squads" className="hover:text-[#5552FF] py-2 block">Tech Squads</Link></li>
                    </>
                  )}
                  {category === "industries" && (
                  <>
                    <li><Link to="/medtech" className="hover:text-[#5552FF] py-2 block">MEDTECH</Link></li>
                    <li><Link to="/automobile" className="hover:text-[#5552FF] py-2 block">Automobile</Link></li>
                    <li><Link to="/insurance" className="hover:text-[#5552FF] py-2 block">Insurance</Link></li>
                    <li><Link to="/banking" className="hover:text-[#5552FF] py-2 block">Banking and Payment</Link></li>
                  </>
                )}
                {category === "intelligence" && (
                  <>
                    <li><Link to="/xtmx-intelligence" className="hover:text-[#5552FF] py-2 block">XTMX Intelligence</Link></li>
                    <li><Link to="/events" className="hover:text-[#5552FF] py-2 block">Events</Link></li>
                  </>
                )}


                </ul>
              )}
            </div>
          ))}
        </ul>

        {/* "Let's Connect" Button */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold">
          Let’s Connect
          <ArrowUpRight className="h-5 w-5 text-blue-400" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
