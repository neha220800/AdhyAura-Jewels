import React from 'react';
import { Facebook, Instagram, Twitter, Compass } from 'lucide-react';
import logo from '../logo.png';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About us', href: '#about' },
    { label: 'Products', href: '#product' },
    { label: 'Contact', href: '#contact' }
  ];

  const locations = [
    { city: 'Mumbai', desc: 'Flagship Atelier' },
    { city: 'Tokyo', desc: 'Ginza Showroom' },
    { city: 'Kathmandu', desc: 'Heritage Gallery' },
    { city: 'Seoul', desc: 'Boutique Store' }
  ];

  return (
    <footer className="bg-luxury-charcoal text-luxury-cream pt-20 pb-10 border-t border-luxury-gold/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-luxury-cream/10">
        
        {/* Column 1: Brand & Philosophy (Logo, social icons) */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#home" className="flex items-center gap-3 group transition-opacity hover:opacity-95">
            <div className="w-10 h-10 overflow-hidden relative flex-shrink-0 border border-luxury-gold/30 rounded-full bg-black shadow-md">
              <img 
                src={logo} 
                alt="AdhyAura Logo" 
                className="absolute top-[-3px] left-0 w-full h-[140%] object-contain" 
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-widest text-white">
              AdhyAura <span className="text-luxury-gold">Jewels</span>
            </span>
          </a>
          
          <p className="text-xs text-luxury-cream/70 leading-relaxed font-light max-w-sm">
            Handcrafted luxury jewelry designed to elevate your aura and purify your energy. Fusing the golden traditions of India's heritage with standard, high-fashion silhouettes.
          </p>

          <div className="flex items-center space-x-4">
            <a href="#" className="w-8 h-8 rounded-full border border-luxury-gold/30 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-luxury-gold/30 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-luxury-gold/30 hover:border-luxury-gold hover:text-luxury-gold flex items-center justify-center transition-colors" aria-label="Twitter">
              <Twitter size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4 lg:pl-6">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-luxury-gold">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-luxury-cream/70 font-light">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-luxury-gold transition-colors block py-0.5">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Locations */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-luxury-gold">Our Boutiques</h4>
          <ul className="space-y-3.5 text-xs font-light">
            {locations.map((loc, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <Compass size={12} className="text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white block leading-none">{loc.city}</span>
                  <span className="text-[10px] text-luxury-cream/50 mt-1 block">{loc.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact details */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="font-serif text-sm font-semibold tracking-wider text-luxury-gold">Concierge Contacts</h4>
          <ul className="space-y-3 text-xs text-luxury-cream/70 font-light">
            <li>
              <span className="text-[10px] text-luxury-cream/50 block">Customer Care Hotline</span>
              <span className="font-serif text-white font-semibold mt-0.5 block">+91 22 567 3456</span>
            </li>
            <li>
              <span className="text-[10px] text-luxury-cream/50 block">Official Support</span>
              <span className="font-serif text-white font-semibold mt-0.5 block">concierge@adhyaura.com</span>
            </li>
            <li>
              <span className="text-[10px] text-luxury-cream/50 block">Head Atelier</span>
              <span className="mt-0.5 block leading-relaxed">Mumbai, India - 400001</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar: Copyright credit section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-luxury-cream/50 tracking-wider uppercase font-sans gap-4">
        <div>
          created by <span className="text-luxury-gold font-bold font-serif normal-case text-xs">neha kumari &hearts;</span> || all rights reserved
        </div>
        <div className="flex space-x-6 text-[9px]">
          <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-luxury-gold transition-colors">Shipping & Returns</a>
        </div>
      </div>
    </footer>
  );
}
