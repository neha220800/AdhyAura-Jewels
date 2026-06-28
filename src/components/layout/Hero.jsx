import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';


const slides = [
  {
    tagline: "The Heritage of Purity and Energy",
    title: "AdhyAura",
    accent: "Royal Collection",
    description: "Handcrafted jewelry that makes you pure and keeps you energized. Where the deep-rooted richness of Indian legacy blends into standard, modern luxury.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1920",
    link: "#product"
  },
  {
    tagline: "The Sparkle of Eternity",
    title: "Celestial Brilliance",
    accent: "Diamond Collection",
    description: "Enchanting 18k white gold and platinum pieces encrusted with rare brilliant-cut diamonds. Crafted to catch the light from every angle and magnify your aura.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1920",
    link: "#product"
  },
  {
    tagline: "Handcrafted Ancestral Legacy",
    title: "Divine Heritage",
    accent: "Gold Filigree",
    description: "Exquisite details hand-chiseled by local Indian artisans carrying centuries of ancestral knowledge. Bring home blessings of prosperity and skin-metal balance.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1920",
    link: "#product"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-luxury-charcoal overflow-hidden select-none"
    >
      {/* Background Image Carousel with Fades */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[6000ms]`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}
      
      {/* Immersive Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-luxury-charcoal/20"></div>

      {/* Decorative Gold Frame Corner Elements */}
      <div className="absolute top-24 left-6 right-6 bottom-12 border border-luxury-gold/20 pointer-events-none hidden md:block z-10">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-luxury-gold/40"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-luxury-gold/40"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-luxury-gold/40"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-luxury-gold/40"></div>
      </div>

      {/* Ambient Pulsing Auric Glow Blob (symbolizes AdhyAura) */}
      <div className="absolute w-[500px] h-[500px] rounded-full luxury-aura-glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Floating Gold Dust Particles */}
      {[...Array(8)].map((_, i) => {
        const floatDuration = 10 + i * 2;
        const floatX = (i % 2 === 0 ? 50 : -50) * (i + 1);
        const size = 2 + (i % 3) * 2;
        const left = 10 + i * 11;
        const delay = -i * 2.5;
        return (
          <div
            key={i}
            className="gold-particle z-0"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              '--float-duration': `${floatDuration}s`,
              '--float-x': `${floatX}px`,
              animationDelay: `${delay}s`
            }}
          />
        );
      })}

      {/* Hero Content Block */}
      <div key={currentSlide} className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
        {/* Animated Brand Emblem */}
        <div className="flex justify-center mb-6 overflow-hidden">
          <img 
            src={logo} 
            alt="AdhyAura Logo" 
            className="h-20 md:h-24 object-contain animate-slide-up filter drop-shadow-[0_0_15px_rgba(212,175,55,0.35)]" 
          />
        </div>
        <div className="overflow-hidden">
          <span className="text-luxury-gold font-serif text-xs md:text-sm tracking-[0.3em] uppercase mb-4 inline-block font-semibold animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {slides[currentSlide].tagline}
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-wide leading-tight mb-6">
          <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {slides[currentSlide].title}
          </span>
          <span className="text-gold-gradient italic font-normal block mt-1 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {slides[currentSlide].accent}
          </span>
        </h1>
        
        <p className="font-sans text-xs md:text-base text-luxury-cream/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {slides[currentSlide].description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href={slides[currentSlide].link} 
            className="btn-gold px-10 py-4 font-bold shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Shop the Collection
          </a>
          <a 
            href="#about" 
            className="btn-outline border-white/60 text-white hover:bg-white hover:text-luxury-charcoal hover:border-white px-10 py-4 w-full sm:w-auto text-center transition-all duration-300"
          >
            Our Heritage
          </a>
        </div>
      </div>

      {/* Mini Slider Pagination Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-8 bg-luxury-gold' : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Luxury Bottom Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-80 animate-bounce pointer-events-none z-10">
        <span className="text-[9px] uppercase tracking-[0.2em] text-luxury-gold">Scroll Down</span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-luxury-gold to-transparent"></div>
      </div>
    </section>
  );
}
