import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="rounded-2xl inset-1 bg-pink-200 shadow-lg mx-4 border">
      <div className="rounded-2xl px-4">
        <div className=" flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Else</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#services" className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white w-full px-4 py-2 rounded-md text-base font-medium mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;