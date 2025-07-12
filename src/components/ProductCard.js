import React, { useContext } from "react";
import './productCard.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product, isModalOpen, onOpenModal }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product._id);

  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <div className="product-image">
          <img src={`/product-images/${product._id}.jpeg`} alt={product.name} />
        </div>
      </Link>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-details">7-OZ | ${product.price_amount}</p>
      <div className="card-buttons">
        <button
          className="add-to-cart"
          disabled={isModalOpen}
          onClick={() => {cart.addOneToCart(product._id); onOpenModal(); }}
        >
          ADD TO CART
        </button>

        <Link to={`/product/${product._id}`} className="view-more-link">
          <button className="view-more">VIEW MORE</button>
        </Link>
      </div>
    </div>
  );
}
