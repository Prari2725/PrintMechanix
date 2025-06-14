import React from 'react';
import './Footer.css'; // Optional: external CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer position-fixed container-fluid bottom-0 w-100">
            <div className="footer-content">
                <div className="footer-row">
                    <div className="footer-logo">PrintMechanix</div>
                    <div>© 2025 All rights reserved</div>
                    <div>
                        <a href="mailto:printmechanix@gmail.com" className="contact-link">
                            printmechanix@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
