// src/components/PreviewPage.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModelViewer from './ModelViewer';
import 'bootstrap/dist/css/bootstrap.min.css';

function PreviewPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const files = state?.uploadedFiles || [];
  const [rotation, setRotation] = useState('');

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate('/')}>← Back to Upload</button>

      <div className="row">
        {files.map((file, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{file.name}</h5>
                <p className="card-text">Size: {file.size} MB</p>
                <p className="card-text">Uploaded: {file.time}</p>

                <ModelViewer fileUrl={file.url} rotate={rotation} />

                <div className="btn-group mt-2" role="group" aria-label="Rotate controls">
                  <button className="btn btn-sm btn-primary" onClick={() => setRotation('left')} title="Rotate Left">←</button>
                  <button className="btn btn-sm btn-primary" onClick={() => setRotation('right')} title="Rotate Right">→</button>
                  <button className="btn btn-sm btn-primary" onClick={() => setRotation('up')} title="Rotate Up">↑</button>
                  <button className="btn btn-sm btn-primary" onClick={() => setRotation('down')} title="Rotate Down">↓</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewPage;
