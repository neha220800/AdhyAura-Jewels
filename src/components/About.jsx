import React from 'react';
import { Award, Feather, Flame } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Award className="text-luxury-gold stroke-[1.5px]" size={32} />,
      title: "Certified Purity",
      description: "Every diamond, gold, and silver piece is 100% hallmarked and certified to guarantee genuine value and absolute quality."
    },
    {
      icon: <Feather className="text-luxury-gold stroke-[1.5px]" size={32} />,
      title: "Heritage Artistry",
      description: "Handcrafted by local Indian artisans carrying centuries of ancestral knowledge in fine gold filigree and detailing."
    },
    {
      icon: <Flame className="text-luxury-gold stroke-[1.5px]" size={32} />,
      title: "Energetic Aura",
      description: "Designed following ancient metal-skin balance principles to enhance your alignment, confidence, and natural energy."
    }
  ];

  return (
    <section id="about" className="py-24 bg-luxury-cream-warm border-y border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-luxury-gold font-serif text-xs uppercase tracking-[0.25em]">Our Story</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-charcoal mt-2 mb-6">Why AdhyAura?</h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto"></div>
        </div>

        {/* Story Grid: Video/Image Showcase & Text Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Video Showcase Panel */}
          <div className="lg:col-span-6 relative aspect-video lg:aspect-square overflow-hidden group border border-luxury-gold/20 shadow-2xl bg-luxury-charcoal">
            {/* Elegant Golden border frames */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-luxury-gold/15 pointer-events-none z-10"></div>
            
            {/* Live Jewelry Show Video Loop */}
            <video 
              src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-gold-necklaces-on-display-40176-large.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-[6000ms] ease-out"
              poster="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600"
            ></video>
            
            {/* Glowing Accent */}
            <div className="absolute bottom-6 left-6 z-20 bg-luxury-charcoal/85 backdrop-blur-sm border border-luxury-gold/30 px-5 py-3 text-white">
              <p className="font-serif text-xs tracking-[0.2em] uppercase text-luxury-gold">Live Atelier</p>
              <p className="text-[10px] font-sans text-luxury-cream/75 mt-0.5">Handcrafting the Royal Gold Choker</p>
            </div>
          </div>

          {/* Right: Narrative Content */}
          <div className="lg:col-span-6">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-luxury-charcoal mb-6 leading-snug">
              Jewelry That Makes You Pure <br />
              <span className="italic font-normal text-luxury-gold-dark">And Amplifies Your Energetic Aura</span>
            </h3>
            
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
              "AdhyAura Jewels isn't just about adornment — it's about identity. Our designs blend the timeless beauty of Indian heritage with the elegance of modern craftsmanship."
            </p>
            
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light">
              Every piece tells a story, every sparkle carries tradition. Whether it's a wedding, a festival, or a personal milestone, our jewels become part of your memories, your emotions, your aura.
            </p>

            {/* Signature Quote Block */}
            <div className="border-l-[2px] border-luxury-gold pl-6 italic font-serif text-luxury-charcoal/80 text-sm py-1 my-4 bg-luxury-gold/5">
              "The jewelry we wear interacts with our energy. Gold brings clarity, diamonds amplify vision, and silver cleanses the spirit. We design for the soul."
              <span className="block text-xs uppercase tracking-widest text-luxury-gold-dark font-sans not-italic font-bold mt-2">
                — Neha Kumari, Founder
              </span>
            </div>
          </div>

        </div>

        {/* Pillars / Brand Benefits Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-luxury-gold/15 pt-16">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="text-center p-6 bg-white/40 hover:bg-white/70 transition-colors duration-300 border border-transparent hover:border-luxury-gold/10"
            >
              <div className="w-16 h-16 rounded-full bg-luxury-cream flex items-center justify-center mx-auto mb-6 shadow-sm border border-luxury-gold/10">
                {p.icon}
              </div>
              <h4 className="font-serif text-lg font-bold text-luxury-charcoal mb-3">{p.title}</h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">{p.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
