import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="container text-center py-5">
      <h2 className="text-success mb-4">✅ Order Successful!</h2>
      <p className="lead">Thank you for your order. A confirmation email has been sent.</p>

      <div className="mt-4">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}

export default ThankYou;
