// Navbar.js
import React from "react";
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="bg-transparent absolute w-full z-10 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}  
              alt="Logo"
              className="h-20 w-50 mr-2"
            />
            
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-gray-300">
                Industries
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-gray-300">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex items-center">
          <span className="mr-2">📞</span>
          <a href="tel:03708050090" className="hover:text-gray-300">
            03708050090
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
