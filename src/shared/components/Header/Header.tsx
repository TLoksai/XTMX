import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

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
    }, 200);
  };

  return (
    <header className="flex justify-center py-4 ">
      <nav className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-2 bg-gray-700 text-white rounded-full relative z-50 ">
        <div className="flex items-center z-50 ">
          <Link to="/">
            <img src="/images/3-removebg-preview 1.png" alt="XTransmatrix" className="h-12 w-auto" />
          </Link>
        </div>

        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-gray-700 text-white rounded-lg shadow-lg p-4 space-y-4 text-center md:hidden">
            {["about", "services", "industries", "intelligence","Careers"].map((category) => (
              <li key={category} className="hover:text-[#5552FF]">
                <button onClick={() => setMobileSubmenu(mobileSubmenu === category ? null : category)}
                  className="w-full text-left flex justify-between items-center px-4 py-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  <ChevronDown className={`ml-2 transform transition-transform ${mobileSubmenu === category ? "rotate-180" : ""}`} />
                </button>

                {/* Mobile Submenu */}
                {mobileSubmenu === category && (
                  <ul className="pl-6 space-y-2 text-sm">
                    {category === "about" && (
                      <>
                        <li><Link to="/cultures-values-esg">Cultures, Values and ESG</Link></li>
                        <li><Link to="/diversity-young-minds">Diversity by Young Minds</Link></li>
                        <li><Link to="/recent-awards-recognition">Recent Awards and Recognition</Link></li>
                        <li><Link to="/our-partners">Our Partners</Link></li>
                      </>
                    )}
                    {category === "services" && (
                      <>
                        <li><Link to="/forge-ai">Forge AI</Link></li>
                        <li><Link to="/perform-ai">Perform AI</Link></li>
                        <li><Link to="/advisory">Advisory</Link></li>
                        <li><Link to="/tech-squads">Tech Squads</Link></li>
                      </>
                    )}
                    {category === "industries" && (
                      <>
                        <li><Link to="/medtech">MEDTECH</Link></li>
                        <li><Link to="/automobile">Automobile</Link></li>
                        <li><Link to="/insurance">Insurance</Link></li>
                        <li><Link to="/banking">Banking and Payment</Link></li>
                      </>
                    )}
                    {category === "intelligence" && (
                      <>
                        <li><Link to="/xtmx-intelligence">XTMX Intelligence</Link></li>
                        <li><Link to="/events">Events</Link></li>
                      </>
                    )}
                    
                    {category === "Careers" && (
                    <>
                      <li><Link to="/career_search">Career Search</Link></li>
                      <li><Link to="/entry_Level_Innotern">Entry Level / Innotern</Link></li>
                      <li><Link to="/experienced_Hired">Experienced Hired</Link></li>
                      <li><Link to="/team">Meet Our Team</Link></li>
                    </>
                  )}
                  </ul>
                )}
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
          {["about", "services", "industries", "intelligence","Careers"].map((category) => (
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

              {openDropdown === category && (
                <ul
                  className="absolute bg-gray-700 text-white rounded-lg mt-2 p-4 shadow-lg space-y-2 text-sm w-64 text-center"
                  onMouseEnter={() => handleMouseEnter(category)}
                  onMouseLeave={handleMouseLeave}
                >
                  {category === "about" && (
                    <>
                      <li><Link to="/cultures-values-esg">Cultures, Values and ESG</Link></li>
                      <li><Link to="/diversity-young-minds">Diversity by Young Minds</Link></li>
                      <li><Link to="/recent-awards-recognition">Recent Awards and Recognition</Link></li>
                      <li><Link to="/our-partners">Our Partners</Link></li>
                    </>
                  )}
                  {category === "services" && (
                    <>
                      <li><Link to="/forge-ai">Forge AI</Link></li>
                      <li><Link to="/perform-ai">Perform AI</Link></li>
                      <li><Link to="/advisory">Advisory</Link></li>
                      <li><Link to="/tech-squads">Tech Squads</Link></li>
                    </>
                  )}
                  {category === "industries" && (
                    <>
                      <li><Link to="/medtech">MEDTECH</Link></li>
                      <li><Link to="/automobile">Automobile</Link></li>
                      <li><Link to="/insurance">Insurance</Link></li>
                      <li><Link to="/banking">Banking and Payment</Link></li>
                    </>
                  )}
                  {category === "intelligence" && (
                    <>
                      <li><Link to="/xtmx-intelligence">XTMX Intelligence</Link></li>
                      <li><Link to="/events">Events</Link></li>
                    </>
                  )}
                  
                  {category === "Careers" && (
                    <>
                      <li><Link to="/search">Career Search</Link></li>
                      <li><Link to="/entry_Level_Innotern">Entry Level / Innotern</Link></li>
                      <li><Link to="/experienced_Hired">Experienced Hired</Link></li>
                      <li><Link to="/team">Meet Our Team</Link></li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold">
          Let’s Connect
          <ArrowUpRight className="h-5 w-5 text-blue-400" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
