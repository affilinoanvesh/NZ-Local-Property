import React from 'react';
import ServiceCard from './ServiceCard';
import { Service } from '../../types';

interface ServiceGridProps {
  services: Service[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ 
  services,
  columns = 3,
  className = ""
}) => {
  // Create a dynamic grid class based on the number of columns
  let gridClass = 'grid grid-cols-1 gap-4 sm:gap-6 md:gap-8';
  
  // Add responsive column classes
  if (columns === 2) {
    gridClass += ' md:grid-cols-2';
  } else if (columns === 3) {
    gridClass += ' sm:grid-cols-2 lg:grid-cols-3';
  } else if (columns === 4) {
    gridClass += ' sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  }
  
  // Add any additional classes
  if (className) {
    gridClass += ` ${className}`;
  }
  
  return (
    <div className={gridClass}>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;