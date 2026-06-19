import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCatalog from './components/ProductCatalog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Interactive Overlays
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import LoginModal from './components/LoginModal';

export default function App() {
  return (
    <AppProvider>
      <div className="relative min-h-screen flex flex-col">
        {/* Navigation Header */}
        <Header />

        {/* Main Content Areas */}
        <main className="flex-grow">
          {/* Hero Banner */}
          <Hero />
          
          {/* About us narrative */}
          <About />
          
          {/* Product list with search and filters */}
          <ProductCatalog />
          
          {/* Feedback and information details */}
          <ContactForm />
        </main>

        {/* Footer info details */}
        <Footer />

        {/* Dynamic sheets, drawers and modals */}
        <CartDrawer />
        <WishlistDrawer />
        <ProductModal />
        <CheckoutModal />
        <LoginModal />
      </div>
    </AppProvider>
  );
}
