import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ChildServiceCardProps {
  parentSlug: string;
  service: {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    features?: string[];
  };
}

const ChildServiceCard: React.FC<ChildServiceCardProps> = ({ parentSlug, service }) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-100 hover:border-primary-100 shadow-sm hover:shadow-md transition-all overflow-hidden hover:translate-y-[-2px]">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
        
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {service.description.split(' ').slice(0, 15).join(' ')}...
        </p>
        
        {service.features && service.features.length > 0 && (
          <ul className="mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-neutral-700 mb-1.5">
                <span className="bg-primary-50 text-primary-600 rounded-full p-0.5 mr-2 flex-shrink-0">
                  <svg className="h-2 w-2" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2L3.5 5.5L1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Link 
          to={`/${parentSlug}/${service.slug}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center mt-1"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ChildServiceCard;