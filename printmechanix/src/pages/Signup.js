import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaLock, FaEnvelope, FaPhone, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import IconWrapper from '../components/shared/IconWrapper';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const togglePasswordVisibility = (field) => {
    field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;

    // Validations
    if (!firstName || !lastName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill out all fields.');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email address.');
      setIsLoading(false);
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError('Phone number must be 10 digits.');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...signupData } = formData;
      await signup(signupData);
      navigate('/login', { state: { message: 'Account created successfully! Please login.' } });
    } catch (err) {
      console.error('Signup error:', err);
      setError(
        err.response?.data?.message ||
        err.response?.data?.details ||
        'Failed to create an account. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-xl">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <IconWrapper icon={AiFillCodepenCircle} className="h-14 w-14 text-indigo-600" />
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-3 text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="no-underline font-medium text-indigo-600 hover:text-indigo-500">
              sign in to your existing account
            </Link>
          </p>
        </div>

        {error && (
          <div className="mt-6 bg-red-50 border-l-4 border-red-400 p-4 rounded-r-md">
            <div className="flex">
              <IconWrapper icon={AiFillCodepenCircle} className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {[
            { name: 'firstName', type: 'text', placeholder: 'First Name', icon: FaUser },
            { name: 'lastName', type: 'text', placeholder: 'Last Name', icon: FaUser },
            { name: 'email', type: 'email', placeholder: 'Email address', icon: FaEnvelope },
            { name: 'phoneNumber', type: 'tel', placeholder: 'Phone number', icon: FaPhone },
          ].map(({ name, type, placeholder, icon: Icon }) => (
            <div key={name} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconWrapper icon={Icon} className="h-5 w-5 text-gray-400" />
              </div>
              <input
                name={name}
                type={type}
                required
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          ))}

          {/* Password */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconWrapper icon={FaLock} className="h-5 w-5 text-gray-400" />
            </div>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="block w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('password')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              <IconWrapper icon={showPassword ? FaEyeSlash : FaEye} className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconWrapper icon={FaLock} className="h-5 w-5 text-gray-400" />
            </div>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              minLength={6}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="block w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility('confirm')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              <IconWrapper icon={showConfirmPassword ? FaEyeSlash : FaEye} className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2.5 px-4 text-sm font-medium rounded-lg text-white ${
              isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
