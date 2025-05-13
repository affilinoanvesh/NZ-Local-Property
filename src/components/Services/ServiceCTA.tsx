import React from 'react';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { useQuoteContext } from '../../lib/QuoteContext';

interface ServiceCTAProps {
  title: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ title }) => {
  const { openQuoteModal } = useQuoteContext();
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
      <div className="bg-gradient-to-r from-primary-800 to-primary-700 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Get a Free Quote</h3>
        <p className="text-white/90">Contact us today for a free consultation and quote for your {title.toLowerCase()} project.</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <button 
            onClick={openQuoteModal} 
            className="bg-primary-600 hover:bg-primary-700 text-white w-full py-3 px-4 rounded-md font-medium inline-flex items-center justify-center transition-colors cursor-pointer"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Request a Quote
          </button>
          <a 
            href="tel:09-123-4567" 
            className="bg-white border border-neutral-200 hover:border-primary-200 text-neutral-800 hover:text-primary-600 w-full py-3 px-4 rounded-md font-medium inline-flex items-center justify-center transition-all"
          >
            <Phone className="mr-2 h-5 w-5" />
            09 123 4567
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-neutral-100">
          <h4 className="font-semibold text-neutral-800 mb-3">Why Contact Us Today</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Clock className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-neutral-800 font-medium block mb-0.5">Fast Response</span>
                <span className="text-sm text-neutral-600">We respond to all inquiries within 24 hours</span>
              </div>
            </li>
            <li className="flex items-start">
              <Calendar className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-neutral-800 font-medium block mb-0.5">Flexible Scheduling</span>
                <span className="text-sm text-neutral-600">Appointments available at your convenience</span>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-neutral-800 font-medium block mb-0.5">Auckland-Wide Service</span>
                <span className="text-sm text-neutral-600">We service all Auckland areas</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCTA;