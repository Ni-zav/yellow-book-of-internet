
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (term: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  return (
    <div 
      className={cn(
        "relative transition-all duration-300 ease-in-out",
        isFocused ? "scale-[1.01]" : "scale-100",
        className
      )}
    >
      <div 
        className={cn(
          "flex items-center px-4 h-12 md:h-14 w-full rounded-xl border bg-background",
          "transition-all duration-300",
          isFocused ? "border-primary ring-1 ring-primary/20" : "border-input"
        )}
      >
        <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          placeholder="Search websites or categories..."
          className="flex-1 border-0 bg-transparent px-3 py-2 outline-none focus:outline-none text-sm md:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
