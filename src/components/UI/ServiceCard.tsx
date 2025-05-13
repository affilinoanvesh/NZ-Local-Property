import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../../types';
import { getServiceIcon } from '../../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = getServiceIcon(service.icon);
  
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full border border-neutral-100">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/0 via-primary-600/0 to-primary-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
        <div className="mb-4">
          <div className="inline-flex p-2 sm:p-3 rounded-lg bg-primary-50 text-primary-600 mb-4 sm:mb-5">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-5 flex-grow">
            {service.description}
          </p>
        </div>
        
        <Link 
          to={`/${service.slug}`}
          className="mt-auto inline-flex items-center font-medium text-primary-600 hover:text-primary-700 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base"
        >
          Learn More <ArrowUpRight className="ml-1.5 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;