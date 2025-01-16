// src/components/Header/header.component.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  // Toggle dark mode with persistence
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  // Initialize dark mode based on localStorage
  React.useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    if (storedPreference) {
      const isDark = JSON.parse(storedPreference);
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-white text-2xl font-bold"
              onClick={closeMobileMenu}
            >
              Kass Rojas
            </Link>
          </div>
          {/* Dark Mode Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
          {/* Menu Icon (Mobile) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label={isMobile ? "Close Menu" : "Open Menu"}
            >
              {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex md:items-center">
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b-2 border-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Dark Mode Toggle (Mobile) */}
      <div className="md:hidden flex items-center justify-center mt-2">
        <button
          onClick={toggleDarkMode}
          className="text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobile && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={closeMobileMenu}
          ></div>
          {/* Mobile Menu Links */}
          <div className="fixed top-16 left-0 w-full bg-gray-800 z-50">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                      : "text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
