import React from 'react';
import { Link } from 'react-router-dom';
import './checkoutCancel.css'; // Make sure you create and import this CSS

export default function CheckoutCancel() {
  return (
    <div className="cancel-page">
      <div className="cancel-box">
        <h1>Payment Cancelled</h1>
        <p>Your payment didn’t go through. Don’t worry, you can head back and try again.</p>
        <Link to="/">
          <button className="cancel-button">Back to Store</button>
        </Link>
      </div>
    </div>
  );
}
