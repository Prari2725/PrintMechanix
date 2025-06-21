// src/components/pages/QuickQuote.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFolderOpen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function QuickQuote() {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setUploadSuccess(false);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));

    setUploadProgress(1);

    try {
      const token = localStorage.getItem('token');

      await axios.post('http://localhost:8080/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percent);
        }
      });

      alert('Files uploaded successfully!');
      setUploadSuccess(true);

      // Pass actual file objects
      navigate('/preview', { state: { uploadedFiles: files } });

    } catch (error) {
      console.error(error);
      alert('Upload failed');
    } finally {
      setTimeout(() => setUploadProgress(0), 1000);
    }
  };

  return (
    <main className="container d-flex flex-column align-items-center justify-content-center py-5">
      {!uploadSuccess && (
        <section
          className="border border-3 border-primary rounded p-5 text-center w-100"
          style={{ maxWidth: '800px', backgroundColor: 'white' }}
        >
          <div className="mb-3 d-flex justify-content-center align-items-center text-primary" style={{ fontSize: '3rem' }}>
            <FaFolderOpen />
          </div>
          <p className="fw-bold fs-5">Drag and drop files here</p>
          <p className="text-secondary small mb-4">
            Supported: .stl, .obj, .wrl, .step/.stp, .iges/.igs, .3mf, .dxf, .dwg
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
                accept=".stl,.obj,.wrl,.step,.stp,.iges,.igs,.3mf,.dxf,.dwg,.gltf,.glb"
              />
            </label>
          </div>

          {files.length > 0 && (
            <>
              <ul className="list-unstyled mt-3">
                {files.map((file, index) => (
                  <li key={index}>{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</li>
                ))}
              </ul>

              <div className="mt-3">
                <button onClick={handleSubmit} className="btn btn-success">Upload Files</button>
              </div>
            </>
          )}

          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-3 w-100">
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: `${uploadProgress}%` }}
                  aria-valuenow={uploadProgress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {uploadProgress}%
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default QuickQuote;


