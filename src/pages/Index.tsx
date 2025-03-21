import React, { useState, useEffect } from 'react';
import { websites } from '@/data/websites';
import { filterWebsites, getAllCategories } from '@/lib/filter';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import DirectoryItem from '@/components/DirectoryItem';
import ViewToggle from '@/components/ViewToggle';
import DirectoryGrid from '@/components/DirectoryGrid';
import { SlidersHorizontal } from 'lucide-react';

type ViewMode = 'list' | 'grid';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredWebsites, setFilteredWebsites] = useState(websites);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const allCategories = getAllCategories(websites);

  // Update filtered websites when search term or selected categories change
  useEffect(() => {
    const filtered = filterWebsites(websites, searchTerm, selectedCategories);
    setFilteredWebsites(filtered);
  }, [searchTerm, selectedCategories]);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Clear all selected categories
  const handleClearCategories = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        {/* Search and filter section */}
        <div className="mb-8 space-y-6">
          <SearchBar 
            onSearch={setSearchTerm} 
            className="max-w-3xl mx-auto"
          />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Directory</h2>
              <span className="text-sm text-muted-foreground">
                ({filteredWebsites.length} websites)
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
              
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {isFilterOpen ? "Hide filters" : "Show filters"}
              </button>
            </div>
          </div>
          
          {/* Desktop filters */}
          <div className="hidden md:block animate-fade-in">
            <CategoryFilter
              categories={allCategories}
              selectedCategories={selectedCategories}
              onSelectCategory={handleCategorySelect}
              onClearCategories={handleClearCategories}
            />
          </div>
          
          {/* Mobile filters (collapsible) */}
          {isFilterOpen && (
            <div className="md:hidden animate-slide-in">
              <CategoryFilter
                categories={allCategories}
                selectedCategories={selectedCategories}
                onSelectCategory={handleCategorySelect}
                onClearCategories={handleClearCategories}
              />
            </div>
          )}
        </div>
        
        {/* Website listings */}
        {filteredWebsites.length > 0 ? (
          viewMode === 'list' ? (
            <div className="glass rounded-2xl overflow-hidden border shadow-sm">
              <div className="divide-y divide-border/40">
                {filteredWebsites.map((website, index) => (
                  <DirectoryItem 
                    key={website.id} 
                    website={website} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          ) : (
            <DirectoryGrid websites={filteredWebsites} />
          )
        ) : (
          <div className="py-16 text-center glass rounded-2xl border shadow-sm">
            <p className="text-muted-foreground">No websites found matching your criteria.</p>
            <button
              onClick={handleClearCategories}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>Yellow Book of the Internet — A curated directory of 1000+ websites</p>
      </footer>
    </div>
  );
};

export default Index;