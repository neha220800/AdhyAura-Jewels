import {Routes,Route} from 'react-router-dom';
import Home from './pages/customer/Home';
import Login from './pages/customer/Login';
import Profile from './pages/customer/Profile';
import Admin from './pages/admin/Admin';


import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import ProductCatalog from './components/customer/ProductCatalog';
import ContactForm from './components/layout/ContactForm';
import Footer from './components/layout/Footer';

// Interactive Overlays
import CartDrawer from './components/customer/CartDrawer';
import WishlistDrawer from './components/customer/WishlistDrawer';
import ProductModal from './components/customer/ProductModal';
import CheckoutModal from './components/customer/CheckoutModal';
import LoginModal from './components/customer/LoginModal';

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
