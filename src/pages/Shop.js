import React from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import './shop.css'

export default function Shop({isModalOpen, onOpenModal}) {

const {products, loading, error} = useProducts();

if (loading) return <div className="loading-body"><div className="spinner"></div><p>Loading products...</p></div>;
if (error) return <div className="error-body"><div className="spinner"></div><p>Error loading products: {error.message}</p></div>;

return (
    <div className="body">
        <h1>Gummy Enchilados</h1>
        <div className="product-list">
            {products.map((product) => (
                    <ProductCard key={product._id} product={product} isModalOpen={isModalOpen} onOpenModal={onOpenModal}/>
            ))}
        </div>
    </div>
);
}
