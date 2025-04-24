import React from "react";
import ProductCard from "../components/ProductCard";
import './home.css'
import { Link } from 'react-router-dom';
import useProducts from "../hooks/useProducts";

export default function Home({isModalOpen}) {
    const { products, loading, error } = useProducts();

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
                    {products && Array.isArray(products) && products.map((prod) => (
                        <ProductCard product={prod} isModalOpen={isModalOpen}/>
                    ))}
                    {!products && !loading && !error && <p>No best sellers found.</p>}
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
