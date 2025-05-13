import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from "@radix-ui/react-separator";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Separator className="w-12 h-1 bg-primary-500 mb-6" />
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-neutral-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-neutral-50 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-neutral-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-neutral-400 flex-shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-4 pt-0 border-t border-neutral-100 bg-white">
                <p className="text-neutral-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFAQ;