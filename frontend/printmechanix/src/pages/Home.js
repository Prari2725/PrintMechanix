import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-transparent overflow-hidden">
        {/* Creative & Blue Shades Animated Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Blurred blue blobs with enhanced animations */}
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-400 to-indigo-500 opacity-30 rounded-full filter blur-3xl animate-blob1"></div>
          <div className="absolute top-[100px] right-[-120px] w-[350px] h-[350px] bg-gradient-to-l from-blue-300 to-purple-400 opacity-30 rounded-full filter blur-3xl animate-blob2"></div>
          <div className="absolute bottom-[-120px] left-[50%] w-[350px] h-[350px] bg-gradient-to-tr from-blue-200 to-cyan-300 opacity-30 rounded-full filter blur-3xl animate-blob3"></div>
          
          {/* Enhanced SVG animated rings with gradients */}
          <svg
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
            width="900"
            height="900"
            viewBox="0 0 900 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.15 }}
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BFDBFE" />
                <stop offset="100%" stopColor="#C7D2FE" />
              </linearGradient>
            </defs>
            <circle cx="450" cy="450" r="320" stroke="url(#gradient1)" strokeWidth="60" fill="none" />
            <circle cx="450" cy="450" r="210" stroke="url(#gradient2)" strokeWidth="40" fill="none" />
            <circle cx="450" cy="450" r="120" stroke="url(#gradient3)" strokeWidth="20" fill="none" />
          </svg>
          
          {/* Enhanced Animations */}
          <style>
            {`
              @keyframes spin-slow {
                0% { transform: translate(-50%, -50%) rotate(0deg);}
                100% { transform: translate(-50%, -50%) rotate(360deg);}
              }
              .animate-spin-slow {
                animation: spin-slow 18s linear infinite;
              }
              @keyframes blob1 {
                0%, 100% { transform: scale(1) translate(0, 0) rotate(0deg);}
                50% { transform: scale(1.15) translate(40px, 30px) rotate(180deg);}
              }
              @keyframes blob2 {
                0%, 100% { transform: scale(1) translate(0, 0) rotate(0deg);}
                50% { transform: scale(1.1) translate(-30px, 20px) rotate(-180deg);}
              }
              @keyframes blob3 {
                0%, 100% { transform: scale(1) translate(0, 0) rotate(0deg);}
                50% { transform: scale(1.2) translate(-20px, -40px) rotate(90deg);}
              }
              .animate-blob1 { animation: blob1 15s ease-in-out infinite; }
              .animate-blob2 { animation: blob2 18s ease-in-out infinite; }
              .animate-blob3 { animation: blob3 20s ease-in-out infinite; }
              
              /* Enhanced button animations */
              .button-hover {
                transition: all 0.3s ease;
                transform: translateY(0);
              }
              .button-hover:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 20px -10px rgba(79, 70, 229, 0.4);
              }
              
              /* Feature card animations */
              .feature-card {
                transition: all 0.3s ease;
              }
              .feature-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.2);
              }
              
              /* Stats number animation */
              @keyframes countUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .stat-number {
                animation: countUp 1s ease-out forwards;
              }
            `}
          </style>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Bring Your Ideas to Life</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">with ease and precision</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Streamline your 3D printing journey with PrintMechanix. Upload, customize, track, and manage your prints—all in one powerful, easy-to-use platform.
                </p>
                <div className="flex justify-center items-center mt-4">
                <div className="flex justify-center items-center mt-4">
  {/* Get Started Button */}
  <div className="rounded-md shadow">
    <a
      href="/login"
      className="no-underline button-hover inline-flex items-center justify-center w-48 h-14 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600"
    >
      Get started
    </a>
  </div>

  {/* Learn More Button */}
  <div className="rounded-md shadow ml-3">
    <Link
      to="/about"
      className="no-underline button-hover inline-flex items-center justify-center w-48 h-14 text-base font-medium rounded-md text-indigo-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
    >
      Learn more
    </Link>
  </div>
</div>

                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 sm:text-4xl">
            Everything You Need for Seamless 3D Printing
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Enhanced Feature Cards */}
              <div className="feature-card relative p-6 rounded-xl bg-white shadow-sm">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy File Upload</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                Upload your 3D models effortlessly with our user-friendly interface.
                </p>
              </div>

              <div className="feature-card relative p-6 rounded-xl bg-white shadow-sm">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Order Tracking</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                Track the status of your prints—from processing to delivery—in real time.
                </p>
              </div>

              <div className="feature-card relative p-6 rounded-xl bg-white shadow-sm">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Payments</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                Enjoy smooth, encrypted transactions with trusted payment gateways.
                </p>
              </div>

              <div className="feature-card relative p-6 rounded-xl bg-white shadow-sm">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Analytics & Reports</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                Gain insights into order history, material usage, and printing trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            PrintMechanix empowers creators and businesses to manage their 3D printing projects with speed, accuracy, and ease—all in one streamlined platform.
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col stat-number">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Customers</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">100K+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0 stat-number" style={{ animationDelay: "0.2s" }}>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">prints Generated</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">1M+</dd>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0 stat-number" style={{ animationDelay: "0.4s" }}>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Payment Processed</dt>
              <dd className="order-1 text-5xl font-extrabold text-white">$500M</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block text-gray-900">Ready to get started?</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">Create your account today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/login" className="no-underline button-hover inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600">
                Get started 
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="no-underline button-hover inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;