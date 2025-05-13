import React from 'react';
import { Check, X } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";

interface ServiceComparisonProps {
  service: string;
  benefits: string[];
}

const ServiceComparison: React.FC<ServiceComparisonProps> = ({ service, benefits }) => {
  return (
    <div className="my-12">
      <h2 className="text-xl font-bold mb-4">Why Choose Professional {service}</h2>
      <Separator className="w-12 h-1 bg-primary-500 mb-6" />
      
      <div className="overflow-hidden rounded-lg border border-neutral-200">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="p-4 text-left bg-neutral-50 border-b border-neutral-200"></th>
              <th className="p-4 text-center bg-neutral-50 border-b border-neutral-200 text-neutral-700">DIY Approach</th>
              <th className="p-4 text-center bg-primary-50 border-b border-primary-100 text-primary-700 font-bold">Professional Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b border-neutral-100 text-neutral-700 font-medium">Quality Results</td>
              <td className="p-4 border-b border-neutral-100 text-center">
                <X className="h-5 w-5 text-red-500 mx-auto" />
              </td>
              <td className="p-4 border-b border-primary-50 text-center bg-primary-50/30">
                <Check className="h-5 w-5 text-primary-600 mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-neutral-100 text-neutral-700 font-medium">Time Efficiency</td>
              <td className="p-4 border-b border-neutral-100 text-center">
                <X className="h-5 w-5 text-red-500 mx-auto" />
              </td>
              <td className="p-4 border-b border-primary-50 text-center bg-primary-50/30">
                <Check className="h-5 w-5 text-primary-600 mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-neutral-100 text-neutral-700 font-medium">Proper Equipment</td>
              <td className="p-4 border-b border-neutral-100 text-center">
                <X className="h-5 w-5 text-red-500 mx-auto" />
              </td>
              <td className="p-4 border-b border-primary-50 text-center bg-primary-50/30">
                <Check className="h-5 w-5 text-primary-600 mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b border-neutral-100 text-neutral-700 font-medium">Expert Knowledge</td>
              <td className="p-4 border-b border-neutral-100 text-center">
                <X className="h-5 w-5 text-red-500 mx-auto" />
              </td>
              <td className="p-4 border-b border-primary-50 text-center bg-primary-50/30">
                <Check className="h-5 w-5 text-primary-600 mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="p-4 text-neutral-700 font-medium">Guaranteed Results</td>
              <td className="p-4 text-center">
                <X className="h-5 w-5 text-red-500 mx-auto" />
              </td>
              <td className="p-4 text-center bg-primary-50/30">
                <Check className="h-5 w-5 text-primary-600 mx-auto" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 bg-neutral-50 p-5 rounded-lg border border-neutral-100">
        <h3 className="font-bold text-neutral-800 mb-3">Our Professional Advantage</h3>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceComparison;