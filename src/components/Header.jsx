import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <ul className="flex justify-center space-x-3 sm:space-x-6 text-sm sm:text-base">
          <li><a href="#about" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">About</a></li>
          <li><a href="#skills" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Skills</a></li>
          <li><a href="#experience" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Experience</a></li>
          <li><a href="#education" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Education</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-600 whitespace-nowrap">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;