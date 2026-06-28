import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const { cart, wishlist, toggleWishlist, addToCart, setSelectedProduct, setIsCartOpen } = useApp();
  
  const isLiked = wishlist.includes(product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsCartOpen(true); // Open the cart side panel to show success immediately
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleQuickViewClick = () => {
    setSelectedProduct(product);
  };

  return (
    <div className="glass-card group flex flex-col relative overflow-hidden bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
      
      {/* 1. Image and Badges Container */}
      <div className="zoom-container aspect-square bg-luxury-cream-warm flex items-center justify-center relative select-none">
        
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-4 left-4 z-10 bg-luxury-charcoal text-white text-[10px] tracking-widest uppercase px-2 py-1 font-serif font-semibold">
            {product.discount}% Off
          </span>
        )}

        {/* Wishlist Button (Always visible on top-right) */}
        <button 
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-luxury-charcoal hover:text-red-500 hover:scale-105 active:scale-95 transition-all duration-200"
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            size={16} 
            className={`transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-luxury-charcoal'}`} 
          />
        </button>

        {/* Product Image with Zoom on Hover */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="zoom-image w-full h-full object-cover"
          loading="lazy"
        />

        {/* Action Button Overlay on Hover */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-10">
          
          {/* Quick View Button */}
          <button 
            onClick={handleQuickViewClick}
            className="w-11 h-11 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white shadow-md flex items-center justify-center transition-all duration-200 transform translate-y-4 group-hover:translate-y-0"
            title="Quick View"
          >
            <Eye size={18} />
          </button>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCartClick}
            className="w-11 h-11 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white shadow-md flex items-center justify-center transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 delay-75"
            title="Add to Cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      {/* 2. Product Details */}
      <div className="p-5 flex flex-col flex-grow bg-white border-t border-luxury-gold/5">
        
        {/* Category & Rating */}
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] uppercase tracking-wider text-luxury-gold-dark font-medium font-sans">
            {product.category}
          </span>
          <div className="flex items-center text-luxury-gold gap-1 text-xs">
            <Star size={11} className="fill-luxury-gold text-luxury-gold" />
            <span className="font-sans font-semibold text-luxury-charcoal/80 text-[10px]">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-serif text-sm font-semibold text-luxury-charcoal hover:text-luxury-gold transition-colors duration-200 mb-3 line-clamp-1 cursor-pointer" onClick={handleQuickViewClick}>
          {product.name}
        </h3>

        {/* Prices Row */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-dashed border-luxury-gold/10">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-luxury-charcoal">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-sans text-[11px] text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCartClick}
            className="text-[11px] font-serif font-bold uppercase tracking-wider text-luxury-charcoal hover:text-luxury-gold-bright transition-colors"
          >
            {isInCart ? "Add More" : "Add to Cart"}
          </button>
        </div>

      </div>

    </div>
  );
}
