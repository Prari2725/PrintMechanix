// src/components/Home/Home.jsx
import React, { useState } from 'react';
import './home.css';
import Navbar from '../Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';



function Home() {
  const [files, setFiles] = useState([]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <Navbar />
      

      <main className="upload-area-container">
        <section
          className="upload-area"
          onDrop={handleFileDrop}
          onDragOver={preventDefaults}
          onDragEnter={preventDefaults}
          onDragLeave={preventDefaults}
          aria-label="File Upload Area"
          tabIndex="0"
        >
          <div className="upload-icon" aria-hidden="true">
            <span className="material-icons" style={{ fontSize: 48, color: '#7d7d7d' }}>folder_open</span>
          </div>
          <p className="upload-instruction"><strong>Drag and drop files here</strong></p>
          <p className="upload-description">
            .stl, .obj, .wrl, .step (.stp), .iges (.igs), .3mf, .dxf, .dwg and .zip (with models and textures) files<br />
            up to 400 Mb
          </p>
          <label htmlFor="fileInput" className="browse-btn" tabIndex="0">
            BROWSE FILES
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              multiple
              onChange={handleFileSelect}
              accept=".stl,.obj,.wrl,.step,.stp,.iges,.igs,.3mf,.dxf,.dwg,.zip"
            />
          </label>
        </section>

        {files.length > 0 && (
          <section className="uploaded-files" aria-live="polite" aria-atomic="true">
            <h2>Files selected:</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
              ))}
            </ul>
          </section>
        )}
      </main>

      {/* <footer className="footer position-fixed container-fluid">
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
      </footer> */}
    <Footer />

   
    </>
  );
}

export default Home;