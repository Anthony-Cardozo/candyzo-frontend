import React from "react";
import ProductCard from "../components/ProductCard";
import './home.css';
import { Link } from 'react-router-dom';
import useProducts from "../hooks/useProducts";
import './loading.css';

export default function Home({ isModalOpen, onOpenModal }) {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="loading-body"><div className="spinner"></div><p>Loading products...</p></div>;
  if (error) return <div className="error-body"><div className="spinner"></div><p>Error loading products: {error.message}</p></div>;

  return (
    <div className="body">
      <div className="hero-section">
        <div className="hero-text">
          <p>Your Favorite Candy, Drenched in Chamoy & Love.</p>
          <Link to="/shop"><button className="btn">Shop Now!</button></Link>
        </div>
      </div>

      <div className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-list">
          {Array.isArray(products) && products.length > 0 ? (
            products.slice(0,4).map((prod) => (
              <ProductCard key={prod._id} product={prod} isModalOpen={isModalOpen} onOpenModal={onOpenModal}/>
            ))
          ) : (
            <p>No best sellers found.</p>
          )}
        </div>
        <Link to="/shop"><button className="btn">View All</button></Link>
      </div>
      
      {/*<div className="hero-section2">
      </div>*/}
      <div className="learn-more">
        <Link to="/about"><button className="learn-more-btn">Learn More</button></Link>
      </div>
    </div>
  );
}
