import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const TAX_RATE = 0.18;
const SHIPPING_FEE = 50;
const MIN_ORDER_TOTAL = 500;
const stripePromise = loadStripe("pk_test_51RcSDV35vgh7VGMvsEepH5EHb2bCJd5ryHrhXyX5F8GhoYB7gB3znk1WlreXAuLoIVJ9XOKrRv4ZtPCOpeFLFxYg00cqrXRgEF"); // Replace with your Stripe public key

function CartPage() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_FEE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    if (subtotal < MIN_ORDER_TOTAL) {
      alert(`Minimum order value is ₹${MIN_ORDER_TOTAL}. Add more items.`);
      return;
    }

    if (!formData.name || !formData.email || !formData.address) {
      alert('Please fill out all contact details.');
      return;
    }

    try {
      const stripe = await stripePromise;

      const response = await axios.post('http://localhost:8080/api/checkout/create-session', {
        items: cart,
        customer: formData,
        summary: { subtotal, tax, shipping: SHIPPING_FEE, total }
      });

      const sessionId = response.data.id;

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Stripe checkout error:', error);
      alert('❌ Payment initiation failed.');
    }
  };

  const updateToMinimum = () => {
    const needed = MIN_ORDER_TOTAL - subtotal;
    alert(`Add ₹${needed.toFixed(2)} more to reach the minimum order value.`);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-primary">🧺 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-md-8">
            {cart.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{item.fileName}</h5>
                    <p>Material: {item.material}</p>
                    <p>Color: {item.color}</p>
                    <p>Resolution: {item.resolution}</p>
                    <p>Infill: {item.infill}</p>
                    <p>Qty: {item.quantity}</p>
                    <p className="fw-bold text-success">Price: ₹{item.price}</p>
                  </div>
                  <button className="btn btn-outline-danger" onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Form */}
          <div className="col-md-4">
            <div className="card shadow-sm p-3">
              <h5 className="mb-3">Order Summary</h5>
              <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
              <p>Tax (18%): ₹{tax.toFixed(2)}</p>
              <p>Shipping: ₹{SHIPPING_FEE}</p>
              <hr />
              <h5>Total: ₹{total.toFixed(2)}</h5>

              {subtotal < MIN_ORDER_TOTAL && (
                <button className="btn btn-warning w-100 my-2" onClick={updateToMinimum}>
                  Update to ₹{MIN_ORDER_TOTAL} Minimum
                </button>
              )}

              <hr />
              <h6 className="mt-3">Contact Info</h6>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />

              <button
                className="btn btn-success w-100"
                onClick={handleCheckout}
                disabled={subtotal < MIN_ORDER_TOTAL}
              >
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
