import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Lock, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useApp();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    card: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset error on input change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.address.trim()) tempErrors.address = 'Shipping address is required';
    if (!formData.card.trim() || formData.card.replace(/\s/g, '').length !== 16) {
      tempErrors.card = 'Please enter a valid 16-digit card number';
    }
    if (!formData.expiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      tempErrors.expiry = 'Expiry format MM/YY is required';
    }
    if (!formData.cvv.trim() || formData.cvv.length !== 3) {
      tempErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate luxury transaction latency
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const generatedId = `AA-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      clearCart(); // Clear cart state on purchase
    }, 2500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSuccess(false);
    setFormData({ name: '', email: '', address: '', card: '', expiry: '', cvv: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Background Mask */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      ></div>

      {/* Checkout Window Container */}
      <div className="relative w-full max-w-lg bg-luxury-cream border border-luxury-gold/25 shadow-2xl p-6 md:p-8 animate-slide-up max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-luxury-charcoal hover:text-luxury-gold"
          aria-label="Close checkout"
        >
          <X size={20} />
        </button>

        {/* 1. Processing State Screen */}
        {isProcessing && (
          <div className="py-20 flex flex-col justify-center items-center text-center">
            <Loader2 className="animate-spin text-luxury-gold mb-6" size={48} />
            <h3 className="font-serif text-lg font-bold text-luxury-charcoal mb-2">Processing Secure Payment</h3>
            <p className="font-sans text-xs text-gray-500 max-w-xs leading-relaxed">
              Please do not refresh the page or click back. Your transaction is being authenticated with our banking partner.
            </p>
          </div>
        )}

        {/* 2. Success Purchase Screen */}
        {isSuccess && !isProcessing && (
          <div className="py-10 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/15 flex items-center justify-center mx-auto mb-6 border border-luxury-gold/30">
              <CheckCircle2 className="text-luxury-gold-dark" size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-luxury-charcoal mb-3">Order Completed!</h3>
            <p className="font-sans text-sm text-gray-600 mb-6 font-light">
              Thank you for shopping with AdhyAura Jewels. We are preparing your order for insured transit.
            </p>
            
            {/* Order Confirmation summary card */}
            <div className="bg-white/50 border border-luxury-gold/20 p-4 text-left max-w-sm mx-auto mb-8 text-xs font-sans space-y-2">
              <div className="flex justify-between"><span className="text-gray-400">Order ID:</span><span className="font-bold text-luxury-charcoal">{orderId}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Ship to:</span><span className="font-medium text-luxury-charcoal">{formData.name}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Confirmation email:</span><span className="font-medium text-luxury-charcoal">{formData.email}</span></div>
            </div>

            <button 
              onClick={handleClose}
              className="btn-gold py-3 px-8 text-xs font-bold"
            >
              Continue Shopping
            </button>
          </div>
        )}

        {/* 3. Form Input Screen */}
        {!isProcessing && !isSuccess && (
          <div className="animate-fade-in">
            
            {/* Header Title */}
            <div className="flex items-center gap-2 mb-6">
              <Lock size={16} className="text-luxury-gold" />
              <h3 className="font-serif text-lg font-bold text-luxury-charcoal">Secure Checkout</h3>
              <span className="text-xs text-gray-400 ml-auto font-sans">
                Total: <span className="font-bold text-luxury-charcoal">${cartTotal.toFixed(2)}</span>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Shipping fields */}
              <div className="border-b border-luxury-gold/10 pb-4 mb-4 space-y-3">
                <h4 className="font-serif text-[11px] font-bold uppercase tracking-wider text-luxury-gold-dark">Shipping Address</h4>
                
                <div>
                  <label htmlFor="chk-name" className="sr-only">Full Name</label>
                  <input
                    type="text"
                    id="chk-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`luxury-input py-2.5 text-xs ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="chk-email" className="sr-only">Email Address</label>
                  <input
                    type="email"
                    id="chk-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`luxury-input py-2.5 text-xs ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="chk-address" className="sr-only">Delivery Address</label>
                  <input
                    type="text"
                    id="chk-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street Address, Apt, City, Zip"
                    className={`luxury-input py-2.5 text-xs ${errors.address ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.address && <span className="text-[10px] text-red-500 mt-1 block">{errors.address}</span>}
                </div>
              </div>

              {/* Payment Fields */}
              <div className="space-y-3">
                <h4 className="font-serif text-[11px] font-bold uppercase tracking-wider text-luxury-gold-dark">Payment Details</h4>
                
                <div>
                  <label htmlFor="chk-card" className="sr-only">Card Number</label>
                  <input
                    type="text"
                    id="chk-card"
                    name="card"
                    maxLength="19"
                    value={formData.card}
                    onChange={(e) => {
                      // autoformat spaces every 4 digits
                      const val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                      const matches = val.match(/\d{4,16}/g);
                      const match = (matches && matches[0]) || '';
                      const parts = [];
                      for (let i=0, len=match.length; i<len; i+=4) {
                        parts.push(match.substring(i, i+4));
                      }
                      if (parts.length > 0) {
                        e.target.value = parts.join(' ');
                      } else {
                        e.target.value = val;
                      }
                      handleChange(e);
                    }}
                    placeholder="16-Digit Card Number (0000 0000 0000 0000)"
                    className={`luxury-input py-2.5 text-xs ${errors.card ? 'border-red-400 focus:border-red-400' : ''}`}
                  />
                  {errors.card && <span className="text-[10px] text-red-500 mt-1 block">{errors.card}</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="chk-expiry" className="sr-only">Expiry Date</label>
                    <input
                      type="text"
                      id="chk-expiry"
                      name="expiry"
                      maxLength="5"
                      value={formData.expiry}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length >= 2) {
                          e.target.value = `${val.slice(0, 2)}/${val.slice(2, 4)}`;
                        } else {
                          e.target.value = val;
                        }
                        handleChange(e);
                      }}
                      placeholder="Expiry MM/YY"
                      className={`luxury-input py-2.5 text-xs ${errors.expiry ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    {errors.expiry && <span className="text-[10px] text-red-500 mt-1 block">{errors.expiry}</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="chk-cvv" className="sr-only">CVV</label>
                    <input
                      type="password"
                      id="chk-cvv"
                      name="cvv"
                      maxLength="3"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="CVV"
                      className={`luxury-input py-2.5 text-xs ${errors.cvv ? 'border-red-400 focus:border-red-400' : ''}`}
                    />
                    {errors.cvv && <span className="text-[10px] text-red-500 mt-1 block">{errors.cvv}</span>}
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans py-2 bg-white/30 px-3 border border-luxury-gold/5 mt-4 justify-center">
                <ShieldCheck size={12} className="text-luxury-gold" />
                <span>Your payment credentials are fully encrypted & never stored.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full btn-gold h-12 flex items-center justify-center font-bold tracking-widest text-xs uppercase mt-6"
              >
                Complete Payment (${cartTotal.toFixed(2)})
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
