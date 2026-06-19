import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Lock, Mail, User, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';

export default function LoginModal() {
  const { isLoginOpen, setIsLoginOpen, currentUser, setCurrentUser } = useApp();
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  if (!isLoginOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    setErrors({});
    setFormData({ name: '', email: '', password: '' });
  };

  const validateForm = () => {
    const tempErrors = {};
    if (mode === 'signup' && !formData.name.trim()) {
      tempErrors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.password.trim()) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate luxury authentication API latency
    setTimeout(() => {
      setIsSubmitting(false);
      
      const userPayload = {
        name: mode === 'signup' ? formData.name : formData.email.split('@')[0],
        email: formData.email
      };

      setCurrentUser(userPayload);
      setIsLoginOpen(false);
      // Reset form
      setFormData({ name: '', email: '', password: '' });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in">
      {/* Background Mask */}
      <div 
        onClick={() => setIsLoginOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-luxury-cream border border-luxury-gold/25 shadow-2xl p-6 md:p-8 animate-slide-up overflow-hidden">
        
        {/* Luxury Gold Corner Ornaments */}
        <div className="absolute top-2 left-2 right-2 bottom-2 border border-luxury-gold/10 pointer-events-none">
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-luxury-gold/30"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-luxury-gold/30"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-luxury-gold/30"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-luxury-gold/30"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsLoginOpen(false)}
          className="absolute top-4 right-4 text-luxury-charcoal hover:text-luxury-gold z-10"
          aria-label="Close login modal"
        >
          <X size={18} />
        </button>

        {/* Tab Headers */}
        <div className="flex border-b border-luxury-gold/15 mb-8 pt-4 justify-center">
          <button
            onClick={() => handleModeSwitch('signin')}
            className={`pb-3.5 px-6 text-xs font-serif uppercase tracking-widest transition-all duration-300 relative ${
              mode === 'signin' ? 'text-luxury-charcoal font-bold' : 'text-gray-400 hover:text-luxury-charcoal'
            }`}
          >
            Sign In
            {mode === 'signin' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold animate-fade-in"></span>
            )}
          </button>
          <button
            onClick={() => handleModeSwitch('signup')}
            className={`pb-3.5 px-6 text-xs font-serif uppercase tracking-widest transition-all duration-300 relative ${
              mode === 'signup' ? 'text-luxury-charcoal font-bold' : 'text-gray-400 hover:text-luxury-charcoal'
            }`}
          >
            Create Account
            {mode === 'signup' && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold animate-fade-in"></span>
            )}
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="font-serif text-xl font-bold text-luxury-charcoal">
            {mode === 'signin' ? 'Welcome Back' : 'Join AdhyAura'}
          </h3>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
            {mode === 'signin' ? 'Aura-based Luxury Awaits' : 'Experience Pure Legacy'}
          </p>
        </div>

        {/* Auth Loading Screen */}
        {isSubmitting ? (
          <div className="py-12 flex flex-col justify-center items-center text-center">
            <Loader2 className="animate-spin text-luxury-gold mb-6" size={40} />
            <h4 className="font-serif text-sm font-bold text-luxury-charcoal mb-1">
              {mode === 'signin' ? 'Verifying Credentials' : 'Creating Account'}
            </h4>
            <p className="text-[10px] text-gray-500 font-sans leading-relaxed max-w-[200px]">
              Connecting to secure servers and preparing your personalized catalog.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Name field (only for Signup mode) */}
            {mode === 'signup' && (
              <div>
                <label className="text-[10px] uppercase tracking-wider text-luxury-gold-dark font-sans block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`luxury-input py-2.5 pl-10 text-xs ${
                      errors.name ? 'border-red-400 focus:border-red-400' : ''
                    }`}
                  />
                  <User size={13} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-luxury-gold" />
                </div>
                {errors.name && <span className="text-[9px] text-red-500 mt-1 block">{errors.name}</span>}
              </div>
            )}

            {/* Email input field */}
            <div>
              <label className="text-[10px] uppercase tracking-wider text-luxury-gold-dark font-sans block mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className={`luxury-input py-2.5 pl-10 text-xs ${
                    errors.email ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                />
                <Mail size={13} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-luxury-gold" />
              </div>
              {errors.email && <span className="text-[9px] text-red-500 mt-1 block">{errors.email}</span>}
            </div>

            {/* Password input field */}
            <div>
              <label className="text-[10px] uppercase tracking-wider text-luxury-gold-dark font-sans block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`luxury-input py-2.5 pl-10 text-xs ${
                    errors.password ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                />
                <Lock size={13} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-luxury-gold" />
              </div>
              {errors.password && <span className="text-[9px] text-red-500 mt-1 block">{errors.password}</span>}
            </div>

            {mode === 'signin' && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-[10px] text-luxury-gold-dark hover:text-luxury-gold font-sans font-medium transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full btn-gold h-11 flex items-center justify-center gap-2 font-bold tracking-widest text-xs uppercase mt-6"
            >
              <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight size={13} />
            </button>

            {/* Social Logins */}
            <div className="relative flex items-center justify-center my-6">
              <span className="absolute w-full border-t border-luxury-gold/10"></span>
              <span className="relative bg-luxury-cream px-3 text-[10px] text-gray-400 font-sans tracking-wide">
                Or Continue With
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setCurrentUser({ name: 'Google User', email: 'user@google.com' });
                  setIsLoginOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2 px-4 border border-luxury-gold/15 bg-white/40 hover:bg-white transition-colors duration-250 text-xs font-sans text-luxury-charcoal"
              >
                {/* Simulated Google Logo Icon */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.2-5.136 4.2A5.6 5.6 0 0 1 8.35 13a5.6 5.6 0 0 1 5.64-5.6c1.55 0 2.95.61 4 1.62l3.1-3.1A9.97 9.97 0 0 0 13.99 3c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.8 0 9.96-4.08 9.96-10.11 0-.67-.08-1.18-.21-1.605H12.24z"/>
                </svg>
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrentUser({ name: 'Apple User', email: 'user@apple.com' });
                  setIsLoginOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-2 px-4 border border-luxury-gold/15 bg-white/40 hover:bg-white transition-colors duration-250 text-xs font-sans text-luxury-charcoal"
              >
                {/* Simulated Apple Logo Icon */}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94 1.07.08 2.15-.52 2.81-1.33z"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>

            {/* Security Note */}
            <div className="flex items-center gap-2 text-[9px] text-gray-400 font-sans py-2 bg-white/30 px-3 border border-luxury-gold/5 mt-4 justify-center">
              <ShieldCheck size={11} className="text-luxury-gold" />
              <span>Full SSL encryption. We protect your privacy.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
