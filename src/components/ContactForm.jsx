import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please tell us your name';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/[\s-+()]/g, ''))) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      tempErrors.message = 'Your message should be at least 10 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Dismiss floating success toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-luxury-gold" />,
      label: "Call Us Anytime",
      value: "+91 22 567 3456",
      href: "tel:+91225673456"
    },
    {
      icon: <Mail size={18} className="text-luxury-gold" />,
      label: "Email Concierge",
      value: "concierge@adhyaura.com",
      href: "mailto:concierge@adhyaura.com"
    },
    {
      icon: <MapPin size={18} className="text-luxury-gold" />,
      label: "Flagship Atelier",
      value: "Aura House, Colaba, Mumbai, 400001",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-luxury-cream-warm border-t border-luxury-gold/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-luxury-gold font-serif text-xs uppercase tracking-[0.25em]">Customer Relations</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxury-charcoal mt-2 mb-6">Contact Us</h2>
          <div className="w-16 h-[1.5px] bg-luxury-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Info details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mb-4">
                Let's Start a Conversation
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                Have a question about a particular jewelry piece, custom specifications, size guides, or wedding packages? Get in touch with our expert sales associates.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target={item.label === "Flagship Atelier" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="flex gap-4 p-5 bg-white/45 border border-luxury-gold/10 hover:border-luxury-gold/30 hover:bg-white/80 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-luxury-cream flex items-center justify-center border border-luxury-gold/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-sans block">
                      {item.label}
                    </span>
                    <span className="font-serif text-sm font-semibold text-luxury-charcoal mt-0.5 inline-flex items-center gap-1 group-hover:text-luxury-gold transition-colors">
                      {item.value}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="lg:col-span-7 bg-white/50 border border-luxury-gold/15 p-6 md:p-8 shadow-sm glass-card">
            <h3 className="font-serif text-lg font-bold text-luxury-charcoal mb-6">Send Us a Direct Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="ct-name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="ct-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`luxury-input text-xs ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="ct-email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="ct-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`luxury-input text-xs ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="ct-phone" className="sr-only">Contact Number</label>
                <input
                  type="text"
                  id="ct-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number (e.g. +91 98765 43210)"
                  className={`luxury-input text-xs ${errors.phone ? 'border-red-400 focus:border-red-400' : ''}`}
                />
                {errors.phone && <span className="text-[10px] text-red-500 mt-1 block">{errors.phone}</span>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="ct-message" className="sr-only">Feedback Message</label>
                <textarea
                  id="ct-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for, or share your valuable feedback..."
                  className={`luxury-input text-xs resize-none ${errors.message ? 'border-red-400 focus:border-red-400' : ''}`}
                ></textarea>
                {errors.message && <span className="text-[10px] text-red-500 mt-1 block">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary h-12 flex items-center justify-center gap-2 tracking-widest text-xs uppercase disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={14} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      {/* Floating Success Toast (renders on bottom-right) */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-luxury-charcoal text-white px-5 py-4 border border-luxury-gold/30 shadow-2xl animate-slide-up">
          <CheckCircle2 className="text-luxury-gold" size={18} />
          <div className="text-left font-sans">
            <p className="text-xs font-bold font-serif text-luxury-gold">Message Received</p>
            <p className="text-[10px] text-luxury-cream/80 mt-0.5">Thank you! Our concierge will contact you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
}
