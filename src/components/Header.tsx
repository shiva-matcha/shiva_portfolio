import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold font-bahn">Shiva Portfolio</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#resume" className="hover:text-blue-400 transition">Resume</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Message</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
