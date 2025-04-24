import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          <li><a href="#about" className="text-gray-800 hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="text-gray-800 hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="text-gray-800 hover:text-blue-600">Experience</a></li>
          <li><a href="#education" className="text-gray-800 hover:text-blue-600">Education</a></li>
          <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

