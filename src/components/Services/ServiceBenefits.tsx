import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";

interface ServiceBenefitsProps {
  benefits: string[];
  title?: string;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ 
  benefits,
  title = "Key Benefits" 
}) => {
  return (
    <div className="bg-neutral-50 rounded-xl shadow-sm p-6 md:p-8 border border-neutral-100 h-full">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <Separator className="w-12 h-1 bg-primary-500 mb-6" />
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start group">
            <div className="mt-0.5 mr-3 flex-shrink-0 bg-primary-50 text-primary-600 rounded-full p-1 group-hover:bg-primary-100 transition-colors">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <p className="text-neutral-700">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;