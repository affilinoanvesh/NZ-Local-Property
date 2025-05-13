import React, { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';
import { useQuoteContext } from '../../lib/QuoteContext';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { openQuoteModal } = useQuoteContext();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Show after 5 seconds even without scroll
    const timer = setTimeout(() => {
      if (!isDismissed) setIsVisible(true);
    }, 5000);
    
    // Check if user has dismissed it before
    const hasBeenDismissed = localStorage.getItem('cta_dismissed');
    if (hasBeenDismissed) {
      setIsDismissed(true);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isDismissed]);
  
  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    // Store in localStorage that user has dismissed it
    localStorage.setItem('cta_dismissed', 'true');
    // Reset after 3 days
    setTimeout(() => {
      localStorage.removeItem('cta_dismissed');
    }, 3 * 24 * 60 * 60 * 1000);
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end space-y-4"
      role="complementary"
      aria-label="Contact information"
    >
      <div 
        className="bg-white rounded-xl shadow-xl overflow-hidden max-w-sm transition-all transform duration-300 ease-out"
        style={{
          animation: 'slideInRight 0.5s forwards',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div className="relative">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 h-2" />
          <div className="p-5">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-neutral-800 text-lg">Need property assistance?</h3>
              <button 
                onClick={handleDismiss}
                className="text-neutral-400 hover:text-neutral-600 p-1 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="text-neutral-600 mb-4">
              Contact our experts today for a free, no-obligation consultation on any property maintenance or repair service.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="tel:0800123456" 
                className="flex items-center justify-center py-2.5 px-4 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors shadow-sm"
                aria-label="Call us now at 0800 123 456"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </a>
              <button 
                onClick={openQuoteModal}
                className="flex items-center justify-center py-2.5 px-4 bg-neutral-100 text-neutral-800 rounded-md font-medium hover:bg-neutral-200 transition-colors"
                aria-label="Request a free quote online"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the CSS for the animation
const style = document.createElement('style');
style.textContent = `
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
`;
document.head.appendChild(style);

export default FloatingCTA;