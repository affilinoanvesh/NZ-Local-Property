import React from 'react';
import { serviceCategories } from '../../data/services';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  includeAll?: boolean;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  selectedCategory, 
  onCategoryChange,
  includeAll = true
}) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {includeAll && (
          <button
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 hover:border-primary-200 hover:text-primary-600'
            }`}
            onClick={() => onCategoryChange('all')}
          >
            All Services
          </button>
        )}
        
        {serviceCategories.map(category => (
          <button
            key={category.id}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              selectedCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200 hover:border-primary-200 hover:text-primary-600'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.title.split(' ').slice(0, -1).join(' ')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;