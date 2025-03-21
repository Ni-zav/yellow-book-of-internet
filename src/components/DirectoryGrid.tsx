import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Website } from '@/data/websites';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DirectoryGridProps {
  websites: Website[];
}

const DirectoryGrid = ({ websites }: DirectoryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {websites.map((website) => (
        <a
          key={website.id}
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block h-full"
        >
          <Card className="h-full transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] glass border-border/40">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {website.name}
                </h3>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {website.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 gap-2 flex flex-wrap">
              {website.tags.map((tag) => (
                <span 
                  key={`${website.id}-${tag}`}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </CardFooter>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default DirectoryGrid;