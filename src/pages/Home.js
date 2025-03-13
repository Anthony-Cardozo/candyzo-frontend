import React from "react";
import ProductCard from "../components/ProductCard";
import bestSellers from "../data/bestSellers";
import './home.css'

export default function Home() {
  return (
    <div className="body">
        <div className="hero-section">
            <div className="hero-text">
                <h1>Welcome to Cardozo Enchilados</h1>
                <p>Your favorite enchilados, made with love and care.</p>
                <button className="btn">Shop Now!</button>
            </div>
        </div>

   
        <div className="best-sellers">
            <h2>Best Sellers</h2>
            <div className="product-list">
                {bestSellers.map((bestSeller) => (
                    <div className="product-card" key={bestSeller.id}>
                        <ProductCard product={bestSeller} />
                    </div>
                ))}
            </div>
            <button className="btn">View All</button>
        </div>

    
        <div className="learn-more">
            <div>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>


    </div>

  );
}
