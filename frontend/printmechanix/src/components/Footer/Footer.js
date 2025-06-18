import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import IconWrapper from '../shared/IconWrapper';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PrintMechanix. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/yourprofile" // Replace with your real profile
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper icon={FaTwitter} className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://github.com/yourrepo" // Replace with your real profile
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper icon={FaGithub} className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your real profile
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper icon={FaLinkedin} className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@printmechanix.com"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
            >
              <IconWrapper icon={FaEnvelope} className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
