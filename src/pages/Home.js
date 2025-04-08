import React from "react";
import ProductCard from "../components/ProductCard";
import bestSellers from "../data/bestSellers";
import './home.css'
import { Link } from 'react-router-dom';

export default function Home({isModalOpen}) {
  return (
    <div className="body">
        <div className="hero-section">
            <div className="hero-text">
                <h1>Welcome to Cardozo Enchilados</h1>
                <p>Your favorite enchilados, made with love and care.</p>
                <Link to="/shop">
                <button className="btn">Shop Now!</button>
                </Link>
            </div>
        </div>

   
        <div className="best-sellers">
            <h2>Best Sellers</h2>
            <div className="product-list">
                {bestSellers.map((bestSeller) => (
                        <ProductCard product={bestSeller} isModalOpen={isModalOpen}/>
                ))}
            </div>
            <Link to="/shop">
            <button className="btn">View All</button>
            </Link>
        </div>

    
        <div className="learn-more">
            <div>
                <Link to="/about">
                <button className="learn-more-btn">Learn More</button>
                </Link>
            </div>
        </div>


    </div>

  );
}
