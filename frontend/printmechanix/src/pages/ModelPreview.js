
// src/components/pages/ModelPreview.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import ModelViewer from './ModelViewer'; // Correct path
import QuoteCard from './QuoteCard';
function ModelPreview() {
  const { state } = useLocation();
  const uploadedFiles = state?.uploadedFiles || [];

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    existingCart.push(item);
    localStorage.setItem('cart', JSON.stringify(existingCart));
    alert(`Added ${item.fileName} to cart!`);
  };
  return (
    <div className="container py-5">
      <h3 className="mb-4 text-center text-primary">Uploaded 3D Models</h3>
      <div className="row">
        {uploadedFiles.map((file, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow p-3">
              <h5>{file.name}</h5>
              <ModelViewer file={file} />
                    <QuoteCard file={file} onAddToCart={handleAddToCart} />
                    <div className="text-center mt-5">
        <a href="/cart" className="btn btn-primary">Go to Cart</a>
      </div>

            </div>
          </div>
        ))}
      </div>
    </div>
    // <div className="container py-5">
    //   <h3 className="mb-4 text-center text-primary">Uploaded 3D Models</h3>
    //   <div className="row">
    //     {uploadedFiles.map((file, index) => (
    //       <div className="col-md-6 mb-4" key={index}>
    //         <div className="card shadow">
    //           <div className="card-header bg-light fw-bold">{file.name}</div>
    //           <div className="card-body d-flex">
    //             <div className="me-3">
    //               <p className="mb-2"><strong>Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB</p>
    //               <p className="mb-2"><strong>Type:</strong> {file.name.split('.').pop().toUpperCase()}</p>
    //             </div>
    //             <div className="flex-grow-1">
    //               <ModelViewer file={file} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}

export default ModelPreview;
