import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from './pages/Product';
import Footer from './components/Footer';
import Checkout from "./pages/Checkout";
import './App.css'
import CartProvider from "./context/CartContext";
import Bar from "./components/Bar";
import Modal from './components/Modal';
import { CartContext } from "./context/CartContext";
import { useContext, useEffect, useState } from "react";



function AppContent() {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (productCount > 0) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [productCount]);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  return (
    <>
      <Bar />
      <NavBar showModal={showModal} onOpenModal={() => setShowModal(true)}/>
      <Routes>
        <Route path="/" element={<Home isModalOpen={showModal} />} />
        <Route path="/shop" element={<Shop isModalOpen={showModal}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <Modal isVisible={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}