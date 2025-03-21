
import React from 'react';

const Header = () => {
  return (
    <header className="py-12 px-6 md:px-12 text-center hero-gradient">
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-directory-yellow/20 text-xs font-medium tracking-wide mb-4 animate-fade-in">
          Curated Directory
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 animate-slide-in">
          Yellow Book <span className="text-directory-yellow">of the Internet</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          A curated collection of 200+ unique websites, organized by category.
        </p>
      </div>
    </header>
  );
};

export default Header;
