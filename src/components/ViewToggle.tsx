import React from 'react';
import { List, Grid } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ViewToggleProps {
  viewMode: 'list' | 'grid';
  onViewChange: (viewMode: 'list' | 'grid') => void;
}

const ViewToggle = ({ viewMode, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex border rounded-md overflow-hidden">
      <button
        onClick={() => onViewChange('list')}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 text-sm transition-colors",
          viewMode === 'list' 
            ? "bg-primary text-primary-foreground" 
            : "bg-background hover:bg-secondary/50"
        )}
        aria-label="List view"
      >
        <List className="h-4 w-4" />
        <span className="hidden sm:inline">List</span>
      </button>
      
      <button
        onClick={() => onViewChange('grid')}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 text-sm transition-colors",
          viewMode === 'grid' 
            ? "bg-primary text-primary-foreground" 
            : "bg-background hover:bg-secondary/50"
        )}
        aria-label="Grid view"
      >
        <Grid className="h-4 w-4" />
        <span className="hidden sm:inline">Grid</span>
      </button>
    </div>
  );
};

export default ViewToggle;