import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import MobileMenu from "./mobile-menu"; // import the new mobile menu component

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  // Toggle dark mode with persistence
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  // Initialize dark mode based on localStorage
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference) {
      const isDark = JSON.parse(storedPreference);
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  return (
    <nav
      className="
        fixed w-full z-50
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-gray-100
      "
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* "Logo" now points to /about */}
        <Link
          to="/about"
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(false)}
        >
          Kass Rojas
        </Link>

        {/* Desktop Nav (md and up) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${isActive
                  ? 'border-b-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100'
                  : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Desktop Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="
              px-3 py-2 rounded-md text-sm font-medium
              text-gray-700 dark:text-gray-300
              hover:text-black dark:hover:text-white
              focus:outline-none
            "
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          menuOpen={menuOpen}
          handleToggleMenu={handleToggleMenu}
          closeMenu={() => setMenuOpen(false)}
          navLinks={navLinks}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </nav>
  );
};

export default Header;