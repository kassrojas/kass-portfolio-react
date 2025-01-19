import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const MobileMenu = ({
  menuOpen,
  handleToggleMenu,
  closeMenu,
  navLinks,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="md:hidden">
      {/* Mobile Menu Icon (Hamburger / Close) */}
      <button
        onClick={handleToggleMenu}
        className="hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Nav Links (shown when menuOpen is true) */}
      {menuOpen && (
        <ul
          className="
            flex flex-col
            space-y-2 
            px-4 pb-4
            bg-gray-100 dark:bg-gray-900
          "
        >
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? `
                      px-3 py-2 rounded-md text-sm font-medium
                      border-b-2 border-gray-900 dark:border-gray-100 
                      text-gray-900 dark:text-gray-100
                    `
                    : `
                      px-3 py-2 rounded-md text-sm font-medium
                      text-gray-700 dark:text-gray-300 
                      hover:text-black dark:hover:text-white
                    `
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}

          {/* Dark Mode Toggle (mobile only) */}
          <li>
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
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;