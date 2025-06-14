import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SignInPage = () => {
  return (
    <>
    <Navbar />
      

      {/* Main Content */}
      <main className="container my-5 pt-5 pb-3" style={{ maxWidth: '480px' }}>
        <h2 className="mb-4 fw-bold">Sign in to PrintMechanix</h2>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              aria-describedby="emailHelp"
            />
          </div>

          {/* Password */}
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <label htmlFor="password" className="form-label fw-semibold mb-0">
              Password
            </label>
            <a href="/reset-password" className="small text-primary text-decoration-none">
              Reset
            </a>
          </div>
          <input
            type="password"
            className="form-control mb-4"
            id="password"
            placeholder="Enter your password"
            required
          />

          {/* Sign In Button */}
          <button type="submit" className="btn btn-primary w-100 mb-4">
            SIGN IN
          </button>
        </form>

        {/* Additional options */}
        <div className="text-center small text-secondary">
          <p>
            Don’t have an account?{' '}
            <a href="/signup" className="text-primary text-decoration-none fw-semibold">
              Sign Up
            </a>
          </p>
          <p>
            Or sign in{' '}
            <a href="/signin-code" className="text-primary text-decoration-none fw-semibold">
              with a code
            </a>
          </p>
        </div>
      </main>

      
    
    <Footer />
    </>
  );
};

export default SignInPage;
