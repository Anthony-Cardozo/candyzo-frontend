import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import './modal.css';
import { CartContext } from "../context/CartContext";
import useProducts from "../hooks/useProducts";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51R3jZ02fzFlPItbPjJnmSG0bt4toZT9iojRWYur1UU30OPceSQSTtwZAhJJIcDYpSIoRbg83zeoF5N6ZHX4ntFd700QKyaNnm8');

export default function Modal({isVisible, onClose}) {
  const cart = useContext(CartContext);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const navigate = useNavigate();
  const {products, loading, error} = useProducts();

  //checkout hooks
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);

  const handleClickOutside = (e) => {
    const modalContainer = document.querySelector('.modal.show');
    if (modalContainer && !modalContainer.contains(e.target)) {
      onClose(); 
    }
  };

  useEffect(() => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const isDesktop = window.innerWidth > 768;

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'hidden';
      if (isDesktop) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isVisible, onClose]);



  if (loading) 
    return (
        <div className="loading-body">
            <p>Loading products...</p>
        </div>
    );
  if (error) 
      return (
          <div className="error-body">
              <p>Error loading products: {error.message}...</p>
          </div>
      );

  const handleCheckout = async () => {
    console.log("Checkout clicked");
    setCheckoutLoading(true);
    setCheckoutError(null);

    try {
      const stripe = await stripePromise;

      console.log("🛒 Sending items:", cart.items.map(cartItem => {
        const product = products.find(p => p._id === cartItem.id);
        return {
          price: product.price,
          quantity: cartItem.quantity
        };
      }));

      const response = await fetch('https://candyzo-backend.onrender.com/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items.map(cartItem => {
            const product = products.find(p => p._id === cartItem.id);
            console.log(product);
            return {
              price: product.price,
              quantity: cartItem.quantity
           };
          }),
        }),
      });

      console.log("🛒 Sending items:", cart.items.map(cartItem => {
        const product = products.find(p => p._id === cartItem.id);
        return {
          price: product.price,
          quantity: cartItem.quantity
        };
      }));


      const data = await response.json();

      if(data.sessionID) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionID,
        });

      if(result.error)
        setCheckoutError(result.error.message);
    }
      else if(data.error)
        setCheckoutError(data.error);
      else
        setCheckoutError('Failed to create Stripe Checkout session.');
    } catch(err) {
      setCheckoutError(err.message);
    } finally {
      setCheckoutLoading(false);
    }

    console.log("🌐 Response status:", response.status);
    console.log("📨 Response data:", data);

  };

  return (
    <>
      {isVisible && <div className="modal-backdrop" onClick={onClose} />}
      <div className={`modal ${isVisible ? 'show' : ''}`}>
        <div className="modal-container">
          <div className="modal-header">
            <h1 className="modal-title">Cart</h1>
            <IoMdClose className="modal-close-icon" onClick={onClose} />
          </div>
          <hr className="modal-divider" />

          {productCount > 0 ? (
            cart.items.map((cartProduct) => {
              const product = products.find((prod) => prod._id === cartProduct.id);
              const totalPrice = product.price_amount * cartProduct.quantity;
              return (
                <div key={product._id} className="cart-item">
                  <img src="chamoy-gummies.png" alt={product.name} />
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="item-details">${totalPrice.toFixed(0)}</p>
                    <div className="counter-row">
                      <div className="counter-box">
                        <button onClick={() => cart.removeOneFromCart(product._id)}>-</button>
                        <input type="text" value={cartProduct.quantity} readOnly />
                        <button onClick={() => cart.addOneToCart(product._id)}>+</button>
                      </div>
                      <FaTrashAlt className="trash" onClick={() => cart.deleteFromCart(product._id)} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="empty">There are no items in your cart.</p>
          )}
        </div>
        {productCount > 0 && (
          <button className="checkout" onClick={handleCheckout}>Checkout</button>
        )}
      </div>
    </>
  );
}
