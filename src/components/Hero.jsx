import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 text-center flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Profile Picture */}
        <img 
          src="/Abbu-Profile.jpg" 
          alt="Abbu Bakar Siddiq" 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white mx-auto"
        />
        
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Abbu Bakar Siddiq</h1>
          <p className="text-lg sm:text-xl mb-6">Cyber Security Analyst | SOC Analyst</p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a href="https://www.linkedin.com/in/abu-bakar-siddiq-39013b292" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedin size={20} className="sm:size-24" />
            </a>
            <a href="mailto:abbubakarsiddiq200111@gmail.com" className="text-white hover:text-gray-300">
              <FaEnvelope size={20} className="sm:size-24" />
            </a>
          </div>

          {/* Resume Link */}
          <div className="mt-6">
            <a 
              href="/Abbu-Bakar-Siddiq-cv.pdf" 
              download
              className="block w-full sm:w-auto bg-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-500 mx-auto sm:mx-0"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;