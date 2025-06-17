// src/components/Home/Home.jsx
import React, { useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function BrowseFile() {
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
    
      <main className="container d-flex flex-column align-items-center justify-content-center py-5" style={{ minHeight: 'calc(100vh - 160px)' }}>
        <section
          className="border border-3 border-primary rounded p-5 text-center w-100"
          style={{ maxWidth: '800px', backgroundColor: 'white' }}
          onDrop={handleFileDrop}
          onDragOver={preventDefaults}
          onDragEnter={preventDefaults}
          onDragLeave={preventDefaults}
          aria-label="File Upload Area"
          tabIndex="0"
        >
          <div className="mb-3 d-flex justify-content-center align-items-center text-primary" style={{ fontSize: '3rem' }}>
            <FaFolderOpen />
          </div>
          <p className="fw-bold fs-5">Drag and drop files here</p>
          <p className="text-secondary small mb-4">
            .stl, .obj, .wrl, .step (.stp), .iges (.igs), .3mf, .dxf, .dwg and .zip files up to 400 MB
          </p>

          <div>
            <label htmlFor="fileInput" className="btn btn-outline-primary fw-semibold">
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
          </div>
        </section>

        {files.length > 0 && (
          <section className="mt-5 p-4 border rounded shadow w-100" style={{ maxWidth: '800px', backgroundColor: 'white' }}>
            <h5 className="text-primary fw-bold">Files selected:</h5>
            <ul className="list-unstyled mt-3">
              {files.map((file, index) => (
                <li key={index} className="mb-1">
                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  );
}

export default BrowseFile;
