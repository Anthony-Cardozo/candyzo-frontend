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
import ScrollToTop from "./components/ScrollToTop";
import CheckoutCancel from "./pages/CheckoutCancel";
import CheckoutSuccess from "./pages/CheckoutSuccess";


function AppContent() {
  const cart = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  const handleCloseModal = () => setShowModal(false);

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
        <Route path="/" element={<Home isModalOpen={showModal} onOpenModal={() => setShowModal(true)}/>} />
        <Route path="/shop" element={<Shop isModalOpen={showModal} onOpenModal={() => setShowModal(true)}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product onOpenModal={() => setShowModal(true)}/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/cancel" element={<CheckoutCancel />} />
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
        <ScrollToTop>
          <AppContent />
        </ScrollToTop>
      </Router>
    </CartProvider>
  );
}