import React from "react";
import ProductCard from "../components/ProductCard";
import './home.css'
import { Link } from 'react-router-dom';
import UseBestSellers from "../hooks/UseBestSellers";

export default function Home({isModalOpen}) {
    const { bestSellers, loading, error } = UseBestSellers();

    if (loading) 
        return (
            <div className="loading-body">
                <p>Loading featured products...</p>
            </div>
        );
    if (error) 
        return (
            <div className="error-body">
                <p>Error loading best sellers: {error.message}...</p>
            </div>
        );

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
                    {bestSellers && Array.isArray(bestSellers) && bestSellers.map((bestSeller) => (
                        <ProductCard product={bestSeller} isModalOpen={isModalOpen}/>
                    ))}
                    {!bestSellers && !loading && !error && <p>No best sellers found.</p>}
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
