import React from 'react';
import { getServiceIcon } from '../../data/services';
import { Phone } from 'lucide-react';
import { useQuoteContext } from '../../lib/QuoteContext';

interface ServiceHeroProps {
  service: {
    title: string;
    description: string;
    icon?: string;
    location: string;
    category?: string;
    [key: string]: any; // Allow any additional properties
  };
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ service }) => {
  const Icon = service.icon ? getServiceIcon(service.icon) : null;
  const { openQuoteModal } = useQuoteContext();
  
  return (
    <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {service.category && (
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium mb-4">
                {service.category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {service.title}
            </h1>
            
            <p className="text-white/80 text-lg mb-6 max-w-xl">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openQuoteModal} 
                className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-3 rounded-md font-semibold transition-colors cursor-pointer"
              >
                Get a Free Quote
              </button>
              <a 
                href="tel:09-123-4567" 
                className="bg-primary-700 hover:bg-primary-600 text-white border border-primary-600 px-6 py-3 rounded-md font-semibold inline-flex items-center transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                09 123 4567
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            {Icon && (
              <div className="bg-white/10 p-12 rounded-full">
                <Icon size={120} className="text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;