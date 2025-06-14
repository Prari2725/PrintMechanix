import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Getting-Started.css'; // Optional: For extra custom styles
import Footer from '../Footer/Footer';

const GettingStarted = () => {
    return (
        <>
            <Navbar />

            {/* Top-right button fixed on screen with offset below navbar */}
            <div
                className="gtbtn position-fixed end-0 me-4"
                style={{ top: '80px', zIndex: 1050 }}
            >
                <Link to="/getstartbtn" className="btn btn-primary shadow-sm">
                    Getting Started
                </Link>

            </div>

            <div
                className="container d-flex flex-column justify-content-center align-items-center text-center"
                style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}

            >
                <div
                    className="bg-light p-5 rounded shadow-lg w-100"
                    style={{ maxWidth: '600px' }}
                >
                    <h1 className="mb-3">
                        Welcome to <span className="text-primary">PrintMechanix</span>
                    </h1>
                    <p className="mb-4 fs-5">
                        Your one-stop solution for customized print manufacturing.
                    </p>
                </div>
            </div>
          <Footer />
        </>
    );
};

export default GettingStarted;
