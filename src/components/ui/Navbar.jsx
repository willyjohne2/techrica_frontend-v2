import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 shadow-lg border-b border-slate-800">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="/techrica-logo.png"
            alt="TechRica Logo"
            className="max-w-[3em]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-slate-100 font-medium">
            {["/", "/about", "/projects", "/contact"].map((path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-orange-400 transition-all duration-200"
                >
                  {["Home", "About", "Projects", "Contact"][i]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl z-50 p-2 rounded-lg hover:bg-slate-800 transition"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 text-lg p-8 pt-28 text-white">
          {["/", "/about", "/projects", "/contact"].map((path, i) => (
            <li key={i}>
              <Link
                to={path}
                onClick={closeMenu}
                className="block px-5 py-3 rounded-xl bg-slate-800/40 hover:bg-slate-700/60 transition-all duration-200"
              >
                {["Home", "About", "Projects", "Contact"][i]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;