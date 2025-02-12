import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (category: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(category);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Delayed closing of 200ms
  };

  return (
    <header className="flex justify-center py-4">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-gray-700 text-white rounded-full relative z-50">
        {/* Logo */}
        <div className="flex items-center z-50">
          <Link to="/">
            <img src="/images/3-removebg-preview 1.png" alt="XTransmatrix" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-700 text-white rounded-lg shadow-lg p-4 space-y-4 text-center md:hidden">
            {["about", "services", "industries", "intelligence"].map((category) => (
              <li key={category} className="hover:text-[#5552FF]">
                <Link to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="block bg-gray-600 py-2 px-4 rounded-lg hover:bg-gray-500">
                Let’s Connect
              </Link>
            </li>
          </ul>
        )}
        

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {["about", "services", "industries", "intelligence"].map((category) => (
            <div
              key={category}
              className="relative group"
              ref={(el) => (dropdownRefs.current[category] = el)}
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <li className="hover:text-[#5552FF] cursor-pointer flex items-center capitalize">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <ChevronDown className="ml-2" />
              </li>

              {/* Submenu */}
              {openDropdown === category && (
                <ul
                  className="absolute bg-gray-700 text-white rounded-lg mt-2 p-4 shadow-lg space-y-2 text-sm w-64 text-center"
                  onMouseEnter={() => handleMouseEnter(category)} // Prevents closing when moving into submenu
                  onMouseLeave={handleMouseLeave} // Delays closing when moving out
                >
                  {category === "about" && (
                    <>
                      <li>
                        <Link to="/cultures-values-esg" className="hover:text-[#5552FF] py-2 block">
                          Cultures, Values and ESG
                        </Link>
                      </li>
                      <li>
                        <Link to="/diversity-young-minds" className="hover:text-[#5552FF] py-2 block">
                          Diversity by Young Minds
                        </Link>
                      </li>
                      <li>
                        <Link to="/recent-awards-recognition" className="hover:text-[#5552FF] py-2 block">
                          Recent Awards and Recognition
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-partners" className="hover:text-[#5552FF] py-2 block">Our Partners</Link>
                      </li>
                    </>
                  )}
                  {category === "services" && (
                    <>
                      <li>
                        <Link to="/forge-ai" className="hover:text-[#5552FF] py-2 block">Forge AI</Link>
                      </li>
                      <li>
                        <Link to="/perform-ai" className="hover:text-[#5552FF] py-2 block">Perform AI</Link>
                      </li>
                      <li>
                        <Link to="/advisory" className="hover:text-[#5552FF] py-2 block">Advisory</Link>
                      </li>
                      <li>
                        <Link to="/tech-squads" className="hover:text-[#5552FF] py-2 block">Tech Squads</Link>
                      </li>
                    </>
                  )}
                  {category === "industries" && (
                    <>
                      <li>
                        <Link to="/medtech" className="hover:text-[#5552FF] py-2 block">MEDTECH</Link>
                      </li>
                      <li>
                        <Link to="/automobile" className="hover:text-[#5552FF] py-2 block">Automobile</Link>
                      </li>
                      <li>
                        <Link to="/insurance" className="hover:text-[#5552FF] py-2 block">Insurance</Link>
                      </li>
                      <li>
                        <Link to="/banking" className="hover:text-[#5552FF] py-2 block">Banking and Payment</Link>
                      </li>
                    </>
                  )}
                  {category === "intelligence" && (
                    <>
                      <li>
                        <Link to="/xtmx-intelligence" className="hover:text-[#5552FF] py-2 block">
                          XTMX Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/events" className="hover:text-[#5552FF] py-2 block">Events</Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </ul>

        {/* "Let's Connect" Button */}
        <Link
          to="/contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold"
        >
          Let’s Connect
          <ArrowUpRight className="h-5 w-5 text-blue-400" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
