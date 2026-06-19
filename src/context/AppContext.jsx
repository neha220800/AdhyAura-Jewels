import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

// Curated high-fidelity jewelry list with premium Unsplash images and specifications
const initialProducts = [
  {
    id: 1,
    name: "Aura Royal Gold Choker",
    category: "Necklaces",
    price: 180.00,
    originalPrice: 200.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    reviewsCount: 24,
    description: "An exquisite 22k gold choker necklace featuring intricate hand-engraved motifs inspired by royal heritage. Perfectly hugs the collarbone to radiate confidence and grace.",
    specs: {
      material: "22k Yellow Gold",
      weight: "18.5 grams",
      length: "14 - 16 inches (Adjustable)",
      stone: "None"
    }
  },
  {
    id: 2,
    name: "Celestial Diamond Droplets",
    category: "Earrings",
    price: 162.00,
    originalPrice: 180.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    reviewsCount: 38,
    description: "Stunning 18k white gold drop earrings encrusted with brilliant-cut diamonds. Captures the light with every move, adding an astronomical sparkle to your aura.",
    specs: {
      material: "18k White Gold",
      weight: "6.2 grams",
      length: "1.2 inches",
      stone: "0.8 ct Brilliant-cut Diamond"
    }
  },
  {
    id: 3,
    name: "Classic Solitaire Promise",
    category: "Rings",
    price: 120.00,
    originalPrice: 133.33,
    discount: 10,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    reviewsCount: 19,
    description: "A timeless diamond solitaire ring mounted on a slender platinum band. Simple, graceful, and representing an eternal promise of pure devotion.",
    specs: {
      material: "950 Platinum",
      weight: "3.4 grams",
      size: "US 7 (Resizable)",
      stone: "0.5 ct Round Brilliant Diamond"
    }
  },
  {
    id: 4,
    name: "Imperial Golden Bangle",
    category: "Bracelets",
    price: 190.00,
    originalPrice: 211.11,
    discount: 10,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600",
    rating: 4.6,
    reviewsCount: 12,
    description: "A solid gold bangle adorned with subtle geometric engravings that represent continuity and balance. Adds a warm, elegant accent to both traditional and modern attire.",
    specs: {
      material: "18k Yellow Gold",
      weight: "14.2 grams",
      diameter: "2.4 inches",
      stone: "None"
    }
  },
  {
    id: 5,
    name: "Emerald Empress Pendant",
    category: "Necklaces",
    price: 135.00,
    originalPrice: 150.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600",
    rating: 4.9,
    reviewsCount: 42,
    description: "A breathtaking pear-cut Colombian emerald suspended from a delicate 18k yellow gold chain, surrounded by a micro-halo of pave-set diamonds.",
    specs: {
      material: "18k Yellow Gold",
      weight: "5.8 grams",
      length: "18 inches",
      stone: "1.2 ct Pear-cut Natural Emerald"
    }
  },
  {
    id: 6,
    name: "Vintage Sapphire Band",
    category: "Rings",
    price: 153.00,
    originalPrice: 170.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    reviewsCount: 29,
    description: "A vintage-inspired ring featuring three deep blue sapphires separated by delicate milgrain scrollwork and micro-diamonds, set in a polished white gold band.",
    specs: {
      material: "14k White Gold",
      weight: "4.1 grams",
      size: "US 6.5 (Resizable)",
      stone: "0.6 ct Oval Blue Sapphires"
    }
  },
  {
    id: 7,
    name: "Dazzling Cascade Studs",
    category: "Earrings",
    price: 108.00,
    originalPrice: 120.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    reviewsCount: 15,
    description: "Elegant cubic zirconia halo earrings crafted in high-grade sterling silver, designed to replicate the magnificent light refraction of rare D-color flawless diamonds.",
    specs: {
      material: "925 Sterling Silver",
      weight: "2.8 grams",
      length: "0.4 inches",
      stone: "Premium AAA+ Cubic Zirconia"
    }
  },
  {
    id: 8,
    name: "Signature Aura Rose Chain",
    category: "Bracelets",
    price: 144.00,
    originalPrice: 160.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    reviewsCount: 22,
    description: "A luxurious and heavy-link chain bracelet in warm 18k rose gold. Simple, modern, and striking on its own or layered with timepieces.",
    specs: {
      material: "18k Rose Gold",
      weight: "11.5 grams",
      length: "7.5 inches",
      stone: "None"
    }
  },
  {
    id: 9,
    name: "Dewdrop Pearl Eternity Band",
    category: "Rings",
    price: 99.00,
    originalPrice: 110.00,
    discount: 10,
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=600",
    rating: 4.8,
    reviewsCount: 17,
    description: "A delicate ring lined with micro-cultured Akoya pearls in an eternity wrap, set in polished rose gold. Brings a soft, pearlescent glow to your hand.",
    specs: {
      material: "14k Rose Gold",
      weight: "2.9 grams",
      size: "US 7 (Fixed)",
      stone: "Freshwater Akoya Pearls"
    }
  }
];

export const AppProvider = ({ children }) => {
  const [products] = useState(initialProducts);
  
  // Cart State (Persisted in LocalStorage)
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('adhyaura_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Wishlist State (Persisted in LocalStorage)
  const [wishlist, setWishlist] = useState(() => {
    const savedWish = localStorage.getItem('adhyaura_wishlist');
    return savedWish ? JSON.parse(savedWish) : [];
  });

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // for Quick View
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  // Auth State (Persisted in LocalStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('adhyaura_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('default');

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('adhyaura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('adhyaura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('adhyaura_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('adhyaura_user');
    }
  }, [currentUser]);

  // Auth Operations
  const logout = () => {
    setCurrentUser(null);
  };

  // Cart Operations
  const addToCart = (product, quantityToAdd = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Operations
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      }
      return [...prevWishlist, productId];
    });
  };

  // Cart Totals
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'price-asc') {
      return a.price - b.price;
    }
    if (selectedSort === 'price-desc') {
      return b.price - a.price;
    }
    if (selectedSort === 'rating') {
      return b.rating - a.rating;
    }
    return 0; // default order
  });

  return (
    <AppContext.Provider
      value={{
        products: sortedProducts,
        allProductsRaw: products,
        cart,
        wishlist,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        selectedProduct,
        setSelectedProduct,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isLoginOpen,
        setIsLoginOpen,
        currentUser,
        setCurrentUser,
        logout,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedSort,
        setSelectedSort,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
