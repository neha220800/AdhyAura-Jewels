# AdhyAura Jewels | Luxury Jewelry E-Commerce Redesign

A premium, production-level e-commerce application for **AdhyAura Jewels** built using **React (Vite)** and **Tailwind CSS**. 

---

## ✨ Features Implemented

*   **Premium Visual Experience**: Luxury typography (Playfair Display & Inter), elegant gold gradient details, soft champagne backdrops, and glassmorphic headers.
*   **Persistent Global State**: Cart and Wishlist items are managed using React Context and persisted in the browser's `localStorage`.
*   **Interactive Cart Drawer**: A slide-out panel allowing real-time quantity updates, subtotals calculation, and item removal.
*   **Wishlist Drawer**: Quickly view liked items and move them directly to the shopping bag.
*   **Dynamic Catalog Filtering**: Search by query, filter by category tab, and sort by price or popularity rating.
*   **Quick View Details Modal**: Renders granular specifications (carat weight, stone, dimension, metal purity) and reviews.
*   **Simulated Secure Checkout**: Includes client-side credit card input formatting and verification, with an animated processing delay and checkout success summary.
*   **Validated Feedback Form**: Name, email, number, and comment checking with custom bottom success notifications (toasts).

---

## 🚀 How to Run Locally

Because your Windows user profile path contains exclamation marks (`Hello!!`), automated terminal runners might trigger parsing exceptions. Please run the commands below directly in your local terminal:

### 1. Install Dependencies
Open your command prompt or PowerShell inside the project directory `c:\redisgn_jewels` and install the package modules:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Once started, the site will open automatically in your browser at:
**[http://localhost:3000](http://localhost:3000)**

### 3. Build for Production
To bundle optimized, minified production assets inside the `/dist` directory:
```bash
npm run build
```

---

## 📂 Project Architecture

```
c:\redisgn_jewels\
├── index.html              # Main HTML entry with Google Font preconnects
├── package.json            # Scripts & module dependencies
├── postcss.config.js       # PostCSS processing configuration
├── tailwind.config.js      # Custom luxury themes, color palettes & custom animations
├── vite.config.js          # React server plugin settings
├── README.md               # Setup & execution guides
└── src/
    ├── main.jsx            # React mounting hook
    ├── index.css           # Tailwind custom layer helpers & scroll styles
    ├── App.jsx             # Top-level page assembly
    ├── context/
    │   └── AppContext.jsx  # Cart & Wishlist state providers
    └── components/
        ├── Header.jsx      # Scroll-detecting sticky glassmorphic navigation
        ├── Hero.jsx        # Premium parallax introduction banner
        ├── About.jsx       # Brand values & looped video presentation
        ├── ProductCatalog.jsx # Filters, search inputs & responsive grid maps
        ├── ProductCard.jsx # Card visual with hover options & wishlist buttons
        ├── ProductModal.jsx # Detailed quick-view sheets with specs
        ├── CartDrawer.jsx  # Slide-over shopping bag modifications
        ├── WishlistDrawer.jsx # Slide-over liked items modifications
        ├── CheckoutModal.jsx # Secure transaction overlay with validator checks
        └── ContactForm.jsx # Phone/email checks & floating submit confirmation toasts
```
