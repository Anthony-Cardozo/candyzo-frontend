import React, { useState } from "react";
import "./checkout.css"; // Import the CSS file

export default function Checkout() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const cartItems = [
    { id: 1, name: "Gushers", price: 9.0, quantity: 1 },
    { id: 2, name: "Watermelon Rings", price: 7.0, quantity: 2 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">
        {/* Billing & Shipping Form */}
        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Billing & Shipping</h3>

          <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" onChange={handleChange} required />

          <h3>Payment</h3>

          <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
          <div className="card-details">
            <input type="text" name="expiry" placeholder="MM/YY" onChange={handleChange} required />
            <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} required />
          </div>

          <button type="submit" className="checkout-button">Place Order</button>
        </form>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
