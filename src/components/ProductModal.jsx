import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';

export default function ProductModal() {
  const { selectedProduct, setSelectedProduct, addToCart, setIsCartOpen, wishlist, toggleWishlist } = useApp();
  const [quantity, setQuantity] = useState(1);

  if (!selectedProduct) return null;

  const isLiked = wishlist.includes(selectedProduct.id);

  const incrementQty = () => setQuantity(prev => prev + 1);
  const decrementQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setSelectedProduct(null); // Close quick view
    setIsCartOpen(true);      // Open cart side drawer
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Background Mask */}
      <div 
        onClick={() => setSelectedProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      ></div>

      {/* Modal Dialog Content Container */}
      <div className="relative w-full max-w-4xl bg-luxury-cream border border-luxury-gold/25 shadow-2xl overflow-hidden animate-slide-up flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Close Modal Button */}
        <button
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white border border-luxury-gold/15 rounded-full flex items-center justify-center text-luxury-charcoal hover:text-luxury-gold hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* 1. Left Column: Jewelry Picture */}
        <div className="md:w-1/2 aspect-square md:aspect-auto md:h-[500px] bg-luxury-cream-warm relative select-none">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-full object-cover"
          />
          {selectedProduct.discount && (
            <span className="absolute top-4 left-4 bg-luxury-charcoal text-white text-[10px] tracking-widest uppercase px-2.5 py-1 font-serif font-semibold">
              {selectedProduct.discount}% Off
            </span>
          )}
        </div>

        {/* 2. Right Column: Detailed Product Data */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between h-auto md:h-[500px] overflow-y-auto">
          
          <div>
            {/* Category & Ratings */}
            <div className="flex items-center gap-4 mb-2">
              <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-semibold">
                {selectedProduct.category}
              </span>
              <div className="flex items-center text-luxury-gold gap-1 text-xs">
                <Star size={12} className="fill-luxury-gold text-luxury-gold" />
                <span className="font-sans font-semibold text-luxury-charcoal/80">
                  {selectedProduct.rating} ({selectedProduct.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Product Title */}
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mb-4">
              {selectedProduct.name}
            </h3>

            {/* Price Tags */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-xl font-bold text-luxury-charcoal">
                ${selectedProduct.price.toFixed(2)}
              </span>
              {selectedProduct.originalPrice && (
                <span className="font-sans text-sm text-gray-400 line-through">
                  ${selectedProduct.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6 font-light">
              {selectedProduct.description}
            </p>

            {/* Jewelry Specifications Table */}
            <div className="border-t border-b border-luxury-gold/15 py-4 mb-6">
              <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-luxury-charcoal mb-2">Specifications</h4>
              <div className="grid grid-cols-2 gap-y-2 text-xs font-sans text-gray-600">
                {Object.entries(selectedProduct.specs).map(([key, val]) => (
                  <React.Fragment key={key}>
                    <span className="capitalize text-gray-400 font-light">{key}:</span>
                    <span className="font-medium text-luxury-charcoal">{val}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity Controls & Action Buttons */}
          <div>
            {/* Quality Seals */}
            <div className="flex items-center gap-4 text-[10px] text-gray-400 font-sans mb-4">
              <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-luxury-gold" /> Hallmarked Gold</span>
              <span className="flex items-center gap-1"><Truck size={12} className="text-luxury-gold" /> Insured Shipping</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity Counter */}
              <div className="flex items-center border border-luxury-gold/30 h-12 bg-white/40">
                <button 
                  onClick={decrementQty}
                  className="px-3 text-luxury-charcoal hover:text-luxury-gold focus:outline-none"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 font-sans text-sm font-semibold select-none">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQty}
                  className="px-3 text-luxury-charcoal hover:text-luxury-gold focus:outline-none"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button 
                onClick={handleAddToCart}
                className="flex-grow btn-gold h-12 flex items-center justify-center gap-2 hover:brightness-105"
              >
                <ShoppingBag size={16} />
                <span>Add to Bag</span>
              </button>

              {/* Add to Wishlist Circle button */}
              <button
                onClick={() => toggleWishlist(selectedProduct.id)}
                className="w-12 h-12 border border-luxury-gold/30 hover:border-luxury-gold hover:text-red-500 flex items-center justify-center bg-white transition-colors duration-200"
                aria-label="Toggle wishlist"
              >
                <Heart size={18} className={isLiked ? 'fill-red-500 text-red-500' : 'text-luxury-charcoal'} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
