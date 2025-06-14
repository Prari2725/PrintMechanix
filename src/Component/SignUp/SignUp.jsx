import React from "react";
import "./SignUp.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function SignUp() {
  return (
    <>
    <Navbar />
      <div className="d-flex pt-3 flex-column min-vh-100" style={{ paddingBottom: '100px' }}>


        <main className="container my-5 flex-grow-1">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <h2 className="mb-4 fw-bold">Sign up to PrintMechanix</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="name@example.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold d-flex justify-content-between align-items-center">
                    Password
                    <small className="text-muted" style={{ fontSize: '0.875rem' }}>
                      At least 10 characters long
                    </small>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    minLength={10}
                    required
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label fw-semibold">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label fw-semibold">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-4 fw-semibold">
                  SIGN UP
                </button>
              </form>

              <div className="text-center">
                <p className="mb-1">
                  Already registered?{' '}
                  <a href="#signin" className="text-decoration-none">
                    <span className="material-icons align-middle" style={{ fontSize: '18px', verticalAlign: 'middle' }}>
                      login
                    </span>{' '}
                    Sign In
                  </a>
                </p>
                <p>
                  Or sign in{' '}
                  <a href="#code" className="text-decoration-none">
                    with a code
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
        
      </div>
      <Footer />
    </>
  );
}