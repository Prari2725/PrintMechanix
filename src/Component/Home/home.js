import React, { useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

function Home() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(prev => !prev);
    };
    

  const [files, setFiles] = useState([]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
    // TODO: Implement upload logic here
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    // TODO: Implement upload logic here
  };

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="logo" aria-label="Voodoo Manufacturing Logo">PrintMechanix Manufacturing</div>
          <nav className="nav-desktop">
            <ul>
              <li><button className="nav-btn"><span className="material-icons">help_outline</span> How it works</button></li>
              <li><button className="nav-btn"><span className="material-icons">request_quote</span> Get a new quote</button></li>
              <li>
              <div className="language-select" aria-label="Select language">
            <button className="nav-btn"><span className="material-icons">language</span> English <span className="material-icons dropdown-icon">arrow_drop_down</span></button>
            {/* Language dropdown can be implemented here */}
          </div>
              </li>
            </ul>
          </nav>
          <div className="dropdown">
            <button
                className="nav-btn dropdown-toggle"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
            >
    <span className="material-icons">account_circle</span> My account <span className="material-icons dropdown-icon">arrow_drop_down</span>
  </button>

  {isDropdownOpen && (
    <div className="dropdown-menu" role="menu">
      <Link to="/signin" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Sign In</Link>
      <Link to="/signup" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Sign Up</Link>
    </div>
  )}
</div>



          {/* Mobile hamburger menu placeholder */}
        </div>
      </header>

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

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo" aria-label="Voodoo Logo">VOODOO</div>
          <p>Powered by 3D Printing Tech<br />Copyright © 2020</p>
          <a href="mailto:contact@voodoomfg.com" className="contact-link">contact@voodoomfg.com</a>
        </div>
      </footer>

      {/* Material Icons CDN */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <style>{`
        /* Reset & base */
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: #e1e7ef;
          color: #333;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        button {
          cursor: pointer;
          background: none;
          border: none;
          font: inherit;
          color: inherit;
        }
        a {
          color: #fff;
          text-decoration: underline;
        }
        a:focus,
        button:focus,
        label:focus {
          outline: 3px solid #06b6d4; /* teal highlight */
          outline-offset: 2px;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Header */
        .header {
          background: #d9e0e8;
          padding: 12px 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid #ccc;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .logo {
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          background-color: #6a00ff;
          padding: 8px 16px;
          border-radius: 6px;
          user-select: none;
          flex-shrink: 0;
        }
        .nav-desktop ul {
          list-style: none;
          display: flex;
          gap: 24px;
          align-items: center;
          margin: 0;
          padding: 0;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: #111;
          transition: color 5s ease;
        }
        .nav-btn:hover,
        .nav-btn:focus {
          color: #6a00ff;
        }
        .dropdown-icon {
          font-size: 16px;
        }
        .language-select {
          font-weight: 600;
          color: #111;
          display: flex;
          align-items: center;
          gap: 6px;
        }


        /* Dropdown styles */
.dropdown {
  position: relative;
}

.dropdown-toggle:focus + .dropdown-menu,
.dropdown-toggle:hover + .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  min-width: 160px;
  z-index: 10;
}

.dropdown-item {
  display: block;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.5s ease;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: #f0f0f0;
  color: #6a00ff;
}
        /* Upload Area */
        .upload-area-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: calc(100vh - 120px);
          padding: 32px 16px;
          box-sizing: border-box;
        }
        .upload-area {
          background: #fff;
          flex: 1 1 600px;
          max-width: 800px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
          padding: 48px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
          transition: box-shadow 0.3s ease;
          outline: none;
        }
        .upload-area:focus,
        .upload-area:hover {
          box-shadow: 0 6px 16px rgba(106, 0, 255, 0.3);
        }
        .upload-icon {
          user-select: none;
        }
        .upload-instruction {
          font-weight: 600;
          font-size: 1.15rem;
          margin: 0;
          user-select: text;
        }
        .upload-description {
          font-size: 0.85rem;
          color: #666;
          margin-top: 0;
          margin-bottom: 20px;
          user-select: text;
        }
        .browse-btn {
          padding: 8px 24px;
          border: 1.5px solid #3b82f6;
          border-radius: 6px;
          color: #3b82f6;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease,color 0.3s ease;
          user-select: none;
        }
        .browse-btn:hover,
        .browse-btn:focus {
          background-color: #3b82f6;
          color: white;
        }

        /* Uploaded files list */
        .uploaded-files {
          margin-top: 24px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          background: white;
          padding: 16px 24px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
          font-size: 0.9rem;
        }
        .uploaded-files h2 {
          margin-top: 0;
          font-weight: 700;
          color: #6a00ff;
        }
        .uploaded-files ul {
          list-style: disc inside;
          margin: 0;
          padding: 0;
        }

        /* Footer */
        .footer {
          background: #6a00ff;
          color: white;
          padding: 24px 16px;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-logo {
          font-weight: 900;
          font-size: 1.5rem;
          margin-bottom: 12px;
          user-select: none;
        }
        .contact-link {
          color: white;
          text-decoration: underline;
          font-weight: 600;
        }
        .contact-link:hover,
        .contact-link:focus {
          text-decoration: none;
          color: #c1a7ff;
        }

        /* Responsive breakpoints */
        @media (max-width: 767px) {
          .header-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .nav-desktop ul {
            flex-direction: column;
            gap: 12px;
            width: 100%;
            padding-left: 0;
          }
          .upload-area-container {
            height: auto;
            padding: 24px 16px 80px;
          }
          .upload-area {
            max-width: 100%;
            padding: 32px 24px;
          }
        }
        @media (min-width: 768px) and (max-width: 1439px) {
          /* Desktop layout handled by default flex */
        }
        @media (min-width: 1440px) {
          .container {
            max-width: 1400px;
          }
        }
      `}</style>
    </>
  );
}

export default Home;