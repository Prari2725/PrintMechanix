import React from "react";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const pageStyles = {
    backgroundColor: "#1e1e2f",
    minHeight: "100vh",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    fontFamily: "'Poppins', sans-serif",
};

const headerFooterStyles = {
    backgroundColor: "#121224",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    color: "#ddd",
    textAlign: "center",
};

const cardStyles = {
    backgroundColor: "#2a2a3e",
    borderRadius: "8px",
    padding: "2rem",
    textAlign: "center",
    color: "#eee",
    height: "100%",
    boxShadow: "0 4px 8px rgb(0 0 0 / 0.3)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    userSelect: "none",
};

const iconStyles = {
    fontSize: "4rem",
    marginBottom: "1rem",
    color: "#fff",
}; 




export default function GettingStartedBtn() {
    const navigate = useNavigate();
    // Handle card hover effect
    return (
        <div style={pageStyles}>
            {/* Responsive Header */}
            <header style={headerFooterStyles}>
                <h1 style={{ fontWeight: "700", fontSize: "1.8rem", color: "#fff" }}>
                    What are you looking to do?
                </h1>
            </header>

            {/* Main Content */}
            <main className="container my-5 flex-grow-1">
                <div className="row justify-content-center gx-4 gy-4">
                    {/* Card 1 */}
                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div
                            style={cardStyles}
                            className="w-100 d-flex flex-column align-items-center justify-content-start"
                            tabIndex={0}
                            role="button"
                            aria-label="3D Print Now Option"
                            onClick={() => navigate('/')}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") navigate('/');
                            }}
                        >
                            <span className="material-icons" style={iconStyles} aria-hidden="true">
                                upload
                            </span>
                            <h3 style={{ fontWeight: "600" }}>3D Print Now</h3>
                            <p style={{ fontSize: "0.9rem", marginTop: "1rem", maxWidth: "280px" }}>
                                Our fast-turnaround online service for 3D printed parts.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div
                            style={cardStyles}
                            className="w-100 d-flex flex-column align-items-center justify-content-start"
                            tabIndex={0}
                            role="button"
                            aria-label="Start a Project Option"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") alert("Start a Project selected");
                            }}
                            onClick={() => alert("Start a Project selected")}
                        >
                            <span className="material-icons" style={iconStyles} aria-hidden="true">
                                edit_note
                            </span>
                            <h3 style={{ fontWeight: "600" }}>Start a Project</h3>
                            <p style={{ fontSize: "0.9rem", marginTop: "1rem", maxWidth: "280px" }}>
                                For those who need help with 3D design or would like to discuss a larger project.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

           <Footer />
        </div>
    );
}
