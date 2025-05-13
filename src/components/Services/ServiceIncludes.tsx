import React from 'react';
import { PackageCheck } from 'lucide-react';

interface ServiceIncludesProps {
  includes: string[];
}

const ServiceIncludes: React.FC<ServiceIncludesProps> = ({ includes }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">What's Included</h3>
      <ul className="space-y-3">
        {includes.map((item, index) => (
          <li key={index} className="flex items-start">
            <PackageCheck className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-neutral-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceIncludes;