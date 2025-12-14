import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-transparent backdrop-blur-sm rounded-2xl bg-white shadow-lg mx-4 border">
        <div className="rounded-2xl px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Else
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
                }
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
                }
              >
                About
              </NavLink>
              
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
                }
              >
                Services
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop with blur */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Slide-in Menu from right */}
        <div className={`absolute right-0 top-0 h-full w-64 bg-white/90 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <div className="space-y-6">
              <NavLink 
                to="/" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `block text-lg font-medium transition-all duration-200 ${isActive ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500 hover:translate-x-2'}`
                }
              >
                Home
              </NavLink>
              
              <NavLink 
                to="/about" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `block text-lg font-medium transition-all duration-200 ${isActive ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500 hover:translate-x-2'}`
                }
              >
                About
              </NavLink>
              
              <NavLink 
                to="/services" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `block text-lg font-medium transition-all duration-200 ${isActive ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500 hover:translate-x-2'}`
                }
              >
                Services
              </NavLink>
              
              <NavLink 
                to="/contact" 
                onClick={handleLinkClick}
                className={({ isActive }) => 
                  `block text-lg font-medium transition-all duration-200 ${isActive ? 'text-blue-500' : 'text-gray-800 hover:text-blue-500 hover:translate-x-2'}`
                }
              >
                Contact
              </NavLink>
            </div>
            
            {/* Close button inside menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 p-2"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;