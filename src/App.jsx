import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/Admin';


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
        {/* Main content Area */}
         <main className="flex-grow">
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/admin" element={<Admin />} />
           </Routes>
         </main>
        
          {/* hero section*/}

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
