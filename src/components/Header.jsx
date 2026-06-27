import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingBag, Menu, X, User } from 'lucide-react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const { 
    cartCount, 
    wishlist, 
    setIsCartOpen, 
    setIsWishlistOpen,
    currentUser,
    setIsLoginOpen,
    logout
  } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // Monitor scroll height to trigger background styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/Home' },
    { label: 'About us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-luxury-cream/90 backdrop-blur-md border-b border-luxury-gold/15 py-4 shadow-md' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Mobile Hamburger Menu Icon */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
            isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold-light'
          }`}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Brand Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group transition-opacity hover:opacity-95"
        >
          <div className="w-9 h-9 overflow-hidden relative flex-shrink-0 border border-luxury-gold/30 rounded-full bg-black shadow-inner">
            <img 
              src={logo} 
              alt="AdhyAura Logo" 
              className="absolute top-[-2.5px] left-0 w-full h-[140%] object-contain" 
            />
          </div>
          <span className={`font-serif text-lg md:text-xl font-bold tracking-widest transition-colors duration-300 ${
            isScrolled ? 'text-luxury-charcoal' : 'text-white'
          }`}>
            AdhyAura <span className="text-luxury-gold">Jewels</span>
          </span>
        </a>

        {/* Desktop Navigation Link Items */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 relative group ${
                isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-[-4px] left-0 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-luxury-gold' : 'bg-white'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* Action Header Icons */}
        <div className="flex items-center space-x-5 md:space-x-6">
          
          {/* User Profile Account Icon */}
          <div className="relative">
            <button 
              onClick={() => {
                if (!currentUser) {
                  setIsLoginOpen(true);
                } else {
                  setIsUserDropdownOpen(!isUserDropdownOpen);
                }
              }}
              className={`transition-colors duration-300 flex items-center relative gap-1 focus:outline-none ${
                isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold-light'
              }`}
              aria-label="User account"
            >
              {currentUser ? (
                <div className="w-6 h-6 rounded-full bg-luxury-gold text-white text-[9px] font-bold flex items-center justify-center font-sans tracking-wide uppercase border border-luxury-gold/50 shadow-sm">
                  {currentUser.name.slice(0, 2)}
                </div>
              ) : (
                <User size={20} className="stroke-[2px]" />
              )}
            </button>

            {/* Profile Dropdown Menu */}
            {currentUser && isUserDropdownOpen && (
              <>
                <div 
                  onClick={() => setIsUserDropdownOpen(false)}
                  className="fixed inset-0 z-30"
                ></div>
                <div className="absolute right-0 mt-3.5 w-48 bg-luxury-cream border border-luxury-gold/20 shadow-2xl p-4 z-40 animate-slide-down text-left">
                  <div className="border-b border-luxury-gold/10 pb-2 mb-2">
                    <p className="text-[9px] text-gray-400 font-sans uppercase tracking-wider">Signed In As</p>
                    <p className="font-serif text-xs font-bold text-luxury-charcoal truncate mt-0.5">{currentUser.name}</p>
                    <p className="text-[9px] text-gray-500 font-sans truncate">{currentUser.email}</p>
                  </div>
                  <ul className="space-y-2 text-[10px] font-serif text-luxury-charcoal">
                    <li>
                      <button 
                        onClick={() => {
                          setIsUserDropdownOpen(false);
                          alert('Redirecting to Profile settings (Mock)');
                        }}
                        className="w-full text-left hover:text-luxury-gold transition-colors py-0.5"
                      >
                        Account Profile
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => {
                          setIsUserDropdownOpen(false);
                          alert('Redirecting to order tracking (Mock)');
                        }}
                        className="w-full text-left hover:text-luxury-gold transition-colors py-0.5"
                      >
                        My Aura Orders
                      </button>
                    </li>
                    <li className="border-t border-luxury-gold/10 pt-2 mt-2">
                      <button 
                        onClick={() => {
                          setIsUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full text-left text-red-500 hover:text-red-600 transition-colors font-bold uppercase tracking-wider text-[9px] font-sans"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* Wishlist Icon Counter */}
          <button 
            onClick={() => setIsWishlistOpen(true)}
            className={`transition-colors duration-300 relative ${
              isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold-light'
            }`}
            aria-label="Wishlist"
          >
            <Heart size={20} className="stroke-[2.2px]" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-luxury-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold animate-pulse">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Icon Counter */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className={`transition-colors duration-300 relative ${
              isScrolled ? 'text-luxury-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold-light'
            }`}
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={20} className="stroke-[2.2px]" />
            {cartCount > 0 && (
              <span className={`absolute -top-2 -right-2 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-bold transition-colors duration-300 ${
                isScrolled ? 'bg-luxury-charcoal' : 'bg-luxury-gold'
              }`}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          {/* Overlay mask */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          ></div>
          
          {/* Drawer content */}
          <div className="fixed top-0 left-0 w-4/5 max-w-sm h-full bg-luxury-cream border-r border-luxury-gold/15 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300">
            <div>
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 overflow-hidden relative flex-shrink-0 border border-luxury-gold/30 rounded-full bg-black">
                    <img 
                      src={logo} 
                      alt="AdhyAura Logo" 
                      className="absolute top-[-2px] left-0 w-full h-[140%] object-contain" 
                    />
                  </div>
                  <span className="font-serif text-base font-bold tracking-widest text-luxury-charcoal">AdhyAura</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-luxury-charcoal hover:text-luxury-gold"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-serif font-medium tracking-wide text-luxury-charcoal hover:text-luxury-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="border-t border-luxury-gold/20 pt-6">
              <p className="text-xs text-gray-500 font-sans tracking-wide">Pure, energetic, and always in balance.</p>
              <p className="text-[11px] text-luxury-gold-dark mt-1">© 2026 AdhyAura Jewels</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
