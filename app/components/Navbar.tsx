import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1002) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openDropdown &&
        !servicesRef.current?.contains(event.target as Node) &&
        !knowledgeRef.current?.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Dropdown menu items
  const servicesDropdown = [
    { label: "Machine Rentals", href: "/services#machine-rentals" },
    { label: "Technical Consultation", href: "/services#technical-consultation" },
  ];
  const knowledgeDropdown = [
    { label: "LAV Station", href: "/knowledge-transfer#farmex-station" },
    { label: "Rice Derbries", href: "/knowledge-transfer#rice-debris" },
  ];

  // Helper to close dropdowns
  const closeDropdowns = () => setOpenDropdown(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.getAttribute("href") || "";

    // Only scroll to top if there's no hash
    if (!href.includes("#")) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setMenuOpen(false);
    closeDropdowns();
  };


  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white duration-300 shadow-[0_8px_40px_0_rgba(0,0,0,0.45)]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 group">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <a href="/">
              <img src="/logo.jpg" alt="FarmEx Logo" className="h-16 w-auto" />
            </a>
          </div>
          {/* Desktop Nav */}
          <div className="hidden [@media(min-width:1002px)]:flex items-center space-x-6">
            <a href="/" className="text-black hover:text-green-600 font-medium" onClick={handleNavClick}>Home</a>
            <a href="/about" className="text-black hover:text-green-600 font-medium" onClick={handleNavClick}>About Us</a>
            <a href="/products" className="text-black hover:text-green-600 font-medium" onClick={handleNavClick}>Products</a>
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                className="text-black hover:text-green-600 font-medium flex items-center focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
                type="button"
              >
                Services <span className="ml-1">▼</span>
              </button>
              {openDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 animate-fade-in">
                  {servicesDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Knowledge Transfer Dropdown */}
            <div className="relative" ref={knowledgeRef}>
              <button
                className="text-gray-700 hover:text-green-600 font-medium flex items-center focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "knowledge" ? null : "knowledge")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "knowledge"}
                type="button"
              >
                Knowledge Transfer <span className="ml-1">▼</span>
              </button>
              {openDropdown === "knowledge" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50 animate-fade-in">
                  {knowledgeDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/news" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>News</a>
            <a href="/get-involved" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>Get Involved</a>
          </div>
          {/* Hamburger Button */}
          <button
            className="[@media(max-width:1002px)]:flex hidden flex-col items-center justify-center w-10 h-10 p-2 rounded focus:outline-none transition-all duration-300"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Open main menu</span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 my-1 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            ></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`[@media(max-width:1002px)]:block hidden fixed top-16 left-0 w-full z-60 bg-white shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'} ease-in-out`}
        >
          <div className="flex flex-col space-y-4 px-6 py-8">
            <a href="/" className="text-gray-900 hover:text-green-600 font-medium" onClick={handleNavClick}>Home</a>
            <a href="/about" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>About Us</a>
            <a href="/products" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>Products</a>
            {/* Services Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-green-600 font-medium flex items-center w-full text-left focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "services"}
                type="button"
              >
                Services <span className="ml-1">▼</span>
              </button>
              {openDropdown === "services" && (
                <div className="mt-1 ml-4 border-l pl-4 relative z-10">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block py-2 text-gray-700 hover:text-green-600"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Knowledge Transfer Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-green-600 font-medium flex items-center w-full text-left focus:outline-none"
                onClick={() => setOpenDropdown(openDropdown === "knowledge" ? null : "knowledge")}
                aria-haspopup="true"
                aria-expanded={openDropdown === "knowledge"}
                type="button"
              >
                Knowledge Transfer <span className="ml-1">▼</span>
              </button>
              {openDropdown === "knowledge" && (
                <div className="mt-1 ml-4 border-l pl-4">
                  {knowledgeDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-green-600"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/news" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>News</a>
            <a href="/get-involved" className="text-gray-700 hover:text-green-600 font-medium" onClick={handleNavClick}>Get Involved</a>
          </div>
        </div>
      </div>
    </nav>
  );
} 