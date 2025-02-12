import React from "react";
import { FaGithub, FaLinkedin, FaItchIo } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-50 py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
      {/* Social Media Links (Left Edge) */}
      <div className="flex space-x-6 flex-1 justify-center md:justify-start">
        <a href="https://github.com/jbalfour5" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://linkedin.com/in/ValleyBalfour" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="https://vall123.itch.io/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          <FaItchIo className="text-2xl" />
        </a>
      </div>

      {/* Navigation Links (Center) */}
      <nav className="flex space-x-6 flex-1 justify-center">
        <a href="#home" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          Home
        </a>
        <a href="#projects" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          Projects
        </a>
        <a href="#contact" className="text-zinc-400 hover:text-zinc-50 transition-colors">
          Contact
        </a>
      </nav>

      {/* Copyright Notice (Right Edge) */}
      <p className="text-zinc-400 text-sm flex-1 text-center md:text-right">
        &copy; {new Date().getFullYear()} Valley Balfour. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;