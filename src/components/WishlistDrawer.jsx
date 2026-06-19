import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer() {
  const { 
    wishlist, 
    isWishlistOpen, 
    setIsWishlistOpen, 
    allProductsRaw, 
    toggleWishlist, 
    addToCart,
    setIsCartOpen 
  } = useApp();

  if (!isWishlistOpen) return null;

  // Filter products that are in the user's wishlist
  const likedProducts = allProductsRaw.filter(product => wishlist.includes(product.id));

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    toggleWishlist(product.id); // Remove from wishlist after adding to cart
    setIsWishlistOpen(false);   // Close wishlist drawer
    setIsCartOpen(true);        // Open cart drawer
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      
      {/* Background Mask */}
      <div 
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      ></div>

      {/* Drawer Sliding Sheet Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-luxury-cream border-l border-luxury-gold/20 flex flex-col shadow-2xl animate-slide-in-right h-full">
          
          {/* Header Panel */}
          <div className="p-6 border-b border-luxury-gold/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-red-500 fill-red-500" />
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">Your Wishlist</h3>
              <span className="text-xs bg-luxury-gold/15 text-luxury-gold-dark font-sans px-2 py-0.5 rounded-full font-semibold">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              className="text-luxury-charcoal hover:text-luxury-gold transition-colors"
              aria-label="Close wishlist"
            >
              <X size={22} />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-grow p-6 overflow-y-auto space-y-6">
            {likedProducts.length > 0 ? (
              likedProducts.map((product) => (
                <div key={product.id} className="flex gap-4 pb-6 border-b border-luxury-gold/5 items-start">
                  
                  {/* Thumbnail Image */}
                  <div className="w-20 h-20 bg-luxury-cream-warm border border-luxury-gold/10 overflow-hidden flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info details */}
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-luxury-gold-dark font-medium block">
                            {product.category}
                          </span>
                          <h4 className="font-serif text-sm font-semibold text-luxury-charcoal line-clamp-1">
                            {product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                      <p className="font-serif text-xs font-bold text-luxury-charcoal mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Move to Cart CTA */}
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="w-full mt-3 py-2 border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all duration-200 text-[10px] uppercase tracking-wider font-serif font-bold flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag size={11} />
                      <span>Move to Bag</span>
                    </button>

                  </div>

                </div>
              ))
            ) : (
              /* Empty Wishlist Panel State */
              <div className="h-full flex flex-col justify-center items-center text-center py-20">
                <Heart size={48} className="text-luxury-gold/40 mb-6 stroke-[1.2px]" />
                <h4 className="font-serif text-base font-bold text-luxury-charcoal mb-2">Wishlist is Empty</h4>
                <p className="font-sans text-xs text-gray-400 max-w-xs mx-auto leading-relaxed mb-6">
                  Save your favorite handcrafted items here to view them later or move them directly to your shopping bag.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="btn-outline py-2.5 px-6 text-xs"
                >
                  Explore Catalog
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
