import React from "react";
import './productCard.css';
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function ProductCard({ product, isModalOpen }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} width="150" />
      </Link>
      <h3>{product.name}</h3>
      <p className="product-details">7-OZ | ${product.price.toFixed(0)}</p>
      <button className="add-to-cart"  disabled={isModalOpen} onClick={() => {cart.addOneToCart(product.id); console.log(cart.items);}}>ADD TO CART</button>
      <Link to={`/product/${product.id}`}>
        <button className="view-more">VIEW MORE</button>
      </Link>
    </div>
  );
}
