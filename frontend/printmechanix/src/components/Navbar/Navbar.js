import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AiFillCodepenCircle } from 'react-icons/ai';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import IconWrapper from '../shared/IconWrapper';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="no-underline flex items-center group">
              <IconWrapper icon={AiFillCodepenCircle} className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200" />
              <span className=" ml-2 text-gray-900 font-bold text-xl group-hover:text-indigo-600 transition-colors duration-200">PrintMechanix</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-between md:flex-1 md:ml-10">
            <div className=" flex items-center space-x-4">
              <Link to="/" className="no-underline text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</Link>
              <Link to="/about" className="no-underline text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link>
              <Link to="/contact" className="no-underline text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</Link>
              {user && (
                <>
                  <Link to="/quick-quote" className="no-underline text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Quick Quote</Link>
                  <Link to="/cart" className="no-underline text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">My Cart</Link>
                  {/* <Link to="/create-invoice" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Create Invoice</Link> */}
                </>
              )}
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <IconWrapper icon={FaUserCircle} className="h-6 w-6 text-gray-400" />
                  <button 
                    onClick={handleLogout}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="no-underline bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            >
              {isOpen ? (
                <IconWrapper icon={FaTimes} className="h-6 w-6" />
              ) : (
                <IconWrapper icon={FaBars} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link to="/" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</Link>
          <Link to="/about" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</Link>
          <Link to="/contact" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Contact</Link>
          {user ? (
            <>
              <Link to="/quick-quote" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Quick Quote</Link>
              <Link to="/cart" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">My Cart</Link>
             {/*} <Link to="/create-invoice" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Create Invoice</Link> */}
              <button 
                onClick={handleLogout}
                className="w-full text-left text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="no-underline text-gray-700 hover:text-indigo-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;