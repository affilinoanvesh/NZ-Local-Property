import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Check, X } from 'lucide-react';

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("meogzqvv"); // Using the same formspree endpoint
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
      // Remove overflow hidden after animation ends
      setTimeout(() => {
        if (!isOpen) document.body.style.overflow = '';
      }, 300);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const getInputClasses = () => {
    return `w-full px-4 py-3 border rounded-lg transition-all duration-200 bg-white
      border-neutral-200 hover:border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100`;
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black ${isVisible ? 'opacity-50' : 'opacity-0'} transition-opacity duration-300`}
        onClick={onClose}
      />
      
      {/* Modal container */}
      <div 
        className={`bg-white rounded-xl shadow-xl w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto relative ${isVisible ? 'scale-100' : 'scale-95'} transition-transform duration-300`}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="text-center mb-4 sm:mb-6">
          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-neutral-800 mb-1 sm:mb-2">Get Your Free Quote</h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Fill out this quick form and we'll get back to you with a no-obligation quote.
          </p>
        </div>
        
        {state.succeeded ? (
          <div className="py-4 sm:py-6 text-center">
            <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <Check className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3">Request received!</h3>
            <p className="text-sm sm:text-base text-neutral-600 mb-4">
              Thank you for your quote request. We'll be in touch very soon.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium rounded-md bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={getInputClasses()}
                  placeholder="John Smith"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-600" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={getInputClasses()}
                  placeholder="john@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={getInputClasses()}
                  placeholder="(021) 123 4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1">
                  Service Interest
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    className={`${getInputClasses()} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    <option value="general-repairs">General Repairs</option>
                    <option value="healthy-home">Healthy Home Solutions</option>
                    <option value="insurance">Insurance Work</option>
                    <option value="installations">Specialized Installations</option>
                    <option value="outdoor">Outdoor Maintenance</option>
                    <option value="handyman">Handyman Services</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-neutral-700 mb-1">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                className={getInputClasses()}
                placeholder="Please describe your project or requirements..."
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
            </div>
            
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Request Quote <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteFormModal; 