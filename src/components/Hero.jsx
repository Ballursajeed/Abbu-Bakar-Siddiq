import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center flex items-center justify-center space-x-8">
        {/* Profile Picture */}
        <img 
          src="Abbu-Profile.jpg" 
          alt="Sajeed Balluru" 
          className="w-40 h-40 rounded-full border-4 border-white"
        />
        
        <div>
          <h1 className="text-4xl font-bold mb-4">Abbu Bakar Siddiq</h1>
          <p className="text-xl mb-8">Cyber Security Analyst | SOC Analyst</p>
          <div className="flex justify-center space-x-4">
            
            <a href="https://www.linkedin.com/in/abu-bakar-siddiq-39013b292" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
         
            <a href="mailto:abbubakarsiddiq200111@gmail.com" className="text-white hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Resume Link */}
          <div className="mt-6">
            <a 
              href="/Abbu-Bakar-Siddiq-cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-blue-700 py-2 px-4 rounded-full hover:bg-blue-500"
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
