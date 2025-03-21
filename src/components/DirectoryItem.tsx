
import React, { useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Website } from '@/data/websites';
import { cn } from '@/lib/utils';

interface DirectoryItemProps {
  website: Website;
  index: number;
}

const DirectoryItem = ({ website, index }: DirectoryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  // Animation delay based on index
  const animationDelay = `${index * 0.03}s`;

  return (
    <div
      ref={itemRef}
      className="directory-item group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay }}
    >
      <a 
        href={website.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-between py-4 px-2 border-b border-border/40",
          "transition-colors duration-200 hover:bg-secondary/20",
          "animate-slide-in opacity-0"
        )}
        style={{ animationDelay, animationFillMode: 'forwards' }}
      >
        <div className="flex-1 flex items-center gap-2 md:gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium truncate">{website.name}</span>
              <div 
                className={cn(
                  "opacity-0 transform translate-y-1 transition-all duration-300",
                  isHovered && "opacity-100 translate-y-0"
                )}
              >
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground truncate max-w-2xl">{website.description}</p>
          </div>
        </div>
        
        <div className="flex gap-2 flex-shrink-0">
          {website.tags.map((tag) => (
            <span 
              key={`${website.id}-${tag}`} 
              className={cn(
                "text-xs px-2 py-0.5 rounded-full bg-secondary",
                "transition-all duration-300 badge-animate-in",
                isHovered ? "opacity-100" : "opacity-60"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default DirectoryItem;
