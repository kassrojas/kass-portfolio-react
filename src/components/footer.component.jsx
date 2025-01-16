import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://github.com/kassrojas"
          target="_blank"
          rel="noreferrer"
          title="My GitHub"
          className="hover:text-white transition-colors duration-200"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ikassandrarojas/"
          target="_blank"
          rel="noreferrer"
          title="My LinkedIn"
          className="hover:text-white transition-colors duration-200"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:kassandrarojass@gmail.com?subject=Message From Portfolio"
          title="My Email"
          className="hover:text-white transition-colors duration-200"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-center text-sm mt-4">© 2025 Kass Rojas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
