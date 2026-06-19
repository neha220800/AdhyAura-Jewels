import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    cartTotal, 
    updateQuantity, 
    removeFromCart,
    setIsCheckoutOpen 
  } = useApp();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartOpen(false);      // Close cart drawer
    setIsCheckoutOpen(true);   // Open checkout modal
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      
      {/* Background Mask */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      ></div>

      {/* Drawer Sliding Sheet Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-luxury-cream border-l border-luxury-gold/20 flex flex-col shadow-2xl animate-slide-in-right h-full">
          
          {/* Header Panel */}
          <div className="p-6 border-b border-luxury-gold/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-luxury-gold" />
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">Your Shopping Bag</h3>
              <span className="text-xs bg-luxury-gold/15 text-luxury-gold-dark font-sans px-2 py-0.5 rounded-full font-semibold">
                {cart.length}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-luxury-gold/5 items-start">
                  
                  {/* Thumbnail Image */}
                  <div className="w-20 h-20 bg-luxury-cream-warm border border-luxury-gold/10 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-luxury-gold-dark font-medium block">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-luxury-charcoal line-clamp-1">
                        {item.name}
                      </h4>
                      <p className="font-serif text-xs font-bold text-luxury-charcoal mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity modifier and delete row */}
                    <div className="flex justify-between items-center mt-3">
                      
                      {/* Counter */}
                      <div className="flex items-center border border-luxury-gold/20 bg-white text-xs">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:text-luxury-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="px-3 font-sans font-semibold select-none">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:text-luxury-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors duration-200"
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>

                    </div>
                  </div>

                </div>
              ))
            ) : (
              /* Empty Cart Panel State */
              <div className="h-full flex flex-col justify-center items-center text-center py-20">
                <ShoppingBag size={48} className="text-luxury-gold/40 mb-6 stroke-[1.2px]" />
                <h4 className="font-serif text-base font-bold text-luxury-charcoal mb-2">Your Bag is Empty</h4>
                <p className="font-sans text-xs text-gray-400 max-w-xs mx-auto leading-relaxed mb-6">
                  Before proceeding to checkout, you must add some beautiful hand-crafted jewelry pieces to your cart.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline py-2.5 px-6 text-xs"
                >
                  Continue Browsing
                </button>
              </div>
            )}
          </div>

          {/* Cart Bottom Summary Panel */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-luxury-gold/15 bg-luxury-cream-warm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">Shipping</span>
                <span className="text-xs font-serif font-bold text-luxury-gold-dark">Free Complementary</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-serif font-bold text-luxury-charcoal">Subtotal</span>
                <span className="text-lg font-serif font-bold text-luxury-charcoal">${cartTotal.toFixed(2)}</span>
              </div>

              <button 
                onClick={handleCheckoutClick}
                className="w-full btn-gold h-12 flex items-center justify-center gap-2 font-bold group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-[10px] text-gray-400 text-center font-sans mt-3">
                Secure SSL 256-bit checkout encryption.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
