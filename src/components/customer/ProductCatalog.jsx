import React from 'react';
import { useApp } from '../../context/AppContext';
import ProductCard from './ProductCard';
import { Search, RotateCcw, Filter } from 'lucide-react';

export default function ProductCatalog() {
  const { 
    products, 
    searchQuery, 
    setSearchQuery, 
    selectedCategory, 
    setSelectedCategory, 
    selectedSort, 
    setSelectedSort 
  } = useApp();

  const categories = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSort('default');
  };

  return (
    <section id="product" className="py-24 bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-luxury-gold font-serif text-xs uppercase tracking-[0.25em]">Handpicked Collection</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-charcoal mt-2 mb-6">Latest Products</h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Search, Filter Tabs & Sort Controls Grid */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-12 pb-6 border-b border-luxury-gold/15">
          
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto scrollbar-none gap-2 pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 text-xs font-serif uppercase tracking-widest transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-luxury-charcoal text-white font-bold'
                    : 'bg-transparent text-luxury-charcoal/70 hover:text-luxury-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar & Sort Dropdowns */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-grow sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewels..."
                className="luxury-input pl-10 pr-4 py-2.5 text-xs text-luxury-charcoal bg-white/40 focus:bg-white"
              />
              <Search 
                size={14} 
                className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-luxury-gold" 
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="relative min-w-[160px]">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full px-4 py-2.5 bg-white/40 border border-luxury-gold/20 focus:border-luxury-gold text-xs font-serif uppercase tracking-wider focus:outline-none appearance-none cursor-pointer text-luxury-charcoal"
              >
                <option value="default">Default Sort</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              {/* Arrow custom overlay */}
              <div className="absolute right-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none text-luxury-gold">
                <Filter size={11} />
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search/Filter State */
          <div className="text-center py-20 bg-white/50 border border-dashed border-luxury-gold/25 max-w-lg mx-auto p-8 glass-card">
            <RotateCcw className="text-luxury-gold mx-auto mb-6 stroke-[1.2px]" size={48} />
            <h3 className="font-serif text-lg font-bold text-luxury-charcoal mb-2">No Jewels Found</h3>
            <p className="font-sans text-xs text-gray-500 max-w-xs mx-auto leading-relaxed mb-6">
              We couldn't find any piece matching your search query or filters. Please try checking another category or keyword.
            </p>
            <button 
              onClick={handleResetFilters}
              className="btn-primary py-2.5 px-6 text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
