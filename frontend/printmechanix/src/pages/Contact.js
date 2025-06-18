import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold text-indigo-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Have questions about our 3D Printing Services? We're here to help!
        Fill out the form, and our team will get back to you as soon as possible.
        </p>
      </motion.div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-4">
        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 flex flex-col space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Get in Touch</h3>
          <div className="flex items-start space-x-4">
            <span className="text-indigo-600 text-2xl mt-1"><FaMapMarkerAlt /></span>
            <div>
              <h4 className="font-medium text-indigo-700">Address</h4>
              <p>printmechanix, 3rd Floor</p>
              <p>Plot No. 10, Sector 3</p>
              <p>abc, xyz</p>
              <p>Maharashtra - 000000</p>
              <p>India</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-indigo-600 text-2xl"><FaEnvelope /></span>
            <div>
              <h4 className="font-medium text-indigo-700">Email</h4>
              <p>support@printmechanix.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-indigo-600 text-2xl"><FaPhoneAlt /></span>
            <div>
              <h4 className="font-medium text-indigo-700">Phone</h4>
              <p>+91 777777777</p>
            </div>
          </div>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {submitted ? (
            <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-6 rounded-lg text-center">
              <FaPaperPlane className="mx-auto text-4xl mb-2 text-green-500 animate-bounce" />
              <p className="font-semibold">Thank you for your message! We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center gap-2 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaPaperPlane className="inline-block text-xl" /> Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;