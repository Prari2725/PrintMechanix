import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Navbar.css'; // Optional: For extra custom styles

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white bg-primary px-3 py-1 rounded" to="/">
          PrintMechanix
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <button className="btn btn-link nav-link">How it works</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link">Get a new quote</button>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                onClick={toggleDropdown}
              >
                <span className="material-icons align-middle">account_circle</span> My account
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li><Link className="dropdown-item" to="/signin" onClick={() => setDropdownOpen(false)}>Sign In</Link></li>
                  <li><Link className="dropdown-item" to="/signup" onClick={() => setDropdownOpen(false)}>Sign Up</Link></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
