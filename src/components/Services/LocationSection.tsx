import React from 'react';
import { MapPin } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";

interface LocationSectionProps {
  service: string;
  locations: string[];
}

const LocationSection: React.FC<LocationSectionProps> = ({ service, locations }) => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold mb-4">{service} in Auckland</h2>
      <Separator className="w-12 h-1 bg-primary-500 mb-6" />
      
      <p className="text-neutral-700 mb-6 leading-relaxed">
        We provide professional {service.toLowerCase()} services throughout the Auckland region. Our experienced team services all major areas including:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {locations.map((location, index) => (
          <div key={index} className="flex items-center">
            <MapPin className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
            <span className="text-neutral-700">{location}</span>
          </div>
        ))}
      </div>
      
      <div className="bg-primary-50 p-5 rounded-lg border border-primary-100">
        <h3 className="font-bold text-primary-800 mb-2">Local {service} Specialists</h3>
        <p className="text-neutral-700 text-sm">
          Our team of local specialists understands Auckland's unique property conditions and requirements. 
          We're familiar with local building codes, climate considerations, and property types across all Auckland regions.
          This local expertise ensures we deliver the best {service.toLowerCase()} solutions for your specific location.
        </p>
      </div>
    </div>
  );
};

export default LocationSection;