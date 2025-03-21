
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onSelectCategory: (category: string) => void;
  onClearCategories: () => void;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategories, 
  onSelectCategory,
  onClearCategories 
}: CategoryFilterProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Sort categories alphabetically
  const sortedCategories = [...categories].sort((a, b) => a.localeCompare(b));
  
  // Display only first 12 categories if not showing all
  const displayedCategories = showAll ? sortedCategories : sortedCategories.slice(0, 12);
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
        {selectedCategories.length > 0 && (
          <button 
            onClick={onClearCategories}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {displayedCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
              "hover:scale-105 active:scale-95",
              selectedCategories.includes(category)
                ? "bg-directory-yellow text-directory-yellow-foreground"
                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            )}
          >
            {category}
          </button>
        ))}
        
        {categories.length > 12 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-background hover:bg-secondary/50 border border-input transition-all duration-200"
          >
            {showAll ? "Show less" : `+${categories.length - 12} more`}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
