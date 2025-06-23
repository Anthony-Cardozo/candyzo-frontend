import React from 'react';
import { Link } from 'react-router-dom';
import './checkoutSuccess.css';

export default function CheckoutSuccess() {
  return (
    <div className="success-page">
      <div className="success-box">
        <h1>Thank You!</h1>
        <p>Your payment was successful. Your delicious treats are on their way 🎉</p>
        <Link to="/">
          <button className="success-button">Back to Store</button>
        </Link>
      </div>
    </div>
  );
}
