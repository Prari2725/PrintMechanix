import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import pragatiimg from "../assets/pragati.jpg";

const teamMembers = [
  {
    name: "Pragati Peharkar",
    role: "Full Stack Developer",
    image: pragatiimg,
    bio: "The project developer behind our Invoice Processing System, ensuring robust functionality and user experience.",
    linkedin: "https://www.linkedin.com/in/pragatipeharkar",
    github: "https://github.com/Prari2725"
  }
];

const About = () => {
  useEffect(() => {
    document.title = "About Us - Invoice Processing System";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold text-indigo-900 mb-6">About Our Vision</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          At PrintMechanix, our vision is to revolutionize the 3D printing experience by delivering cutting-edge solutions that combine speed, precision, and innovation. We aim to empower creators, startups, and industries by transforming their ideas into tangible products with seamless workflows, transparent pricing, and reliable support. Our goal is to make high-quality 3D printing accessible, efficient, and impactful for every user.          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {[
            {
              title: "Custom 3D Printing",
              description: "Bring your ideas to life with precision 3D printing solutions.",
              icon: "🖨️"
            },
            {
              title: "Instant Quotes",
              description: "Get real-time pricing and production timelines for your models.",
              icon: "📦"
            },
            {
              title: "Local & Global Service",
              description: "Serving makers, businesses, and innovators across the globe.",
              icon: "📍"
            },
            {
              title: "Secure Platform",
              description: "Advanced authentication and data protection",
              icon: "🔒"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-12">Meet Our Team</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center p-8">
                    <div className="relative w-48 h-48 mb-6">
                      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900 mb-2">{member.name}</h3>
                    <p className="text-lg text-indigo-600 mb-4">{member.role}</p>
                    <p className="text-gray-700 text-center mb-6">{member.bio}</p>
                    <div className="flex space-x-6">
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
                        </svg>
                      </motion.a>
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
