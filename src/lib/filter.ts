import { Website } from '@/data/websites';

export const filterWebsites = (
  websites: Website[],
  searchTerm: string,
  selectedCategories: string[]
): Website[] => {
  return websites.filter((website) => {
    // If there are selected categories and the website doesn't have any of them, filter it out
    if (
      selectedCategories.length > 0 &&
      !website.tags.some((tag) => selectedCategories.includes(tag))
    ) {
      return false;
    }

    // If there's a search term, check if it matches the website name, description, or tags
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = website.name.toLowerCase().includes(searchLower);
      const descriptionMatch = website.description.toLowerCase().includes(searchLower);
      const tagMatch = website.tags.some((tag) => tag.toLowerCase().includes(searchLower));
      const urlMatch = website.url.toLowerCase().includes(searchLower);
      
      return nameMatch || descriptionMatch || tagMatch || urlMatch;
    }

    return true;
  });
};

export const getAllCategories = (websites: Website[]): string[] => {
  const categoriesSet = new Set<string>();
  
  websites.forEach((website) => {
    website.tags.forEach((tag) => {
      categoriesSet.add(tag);
    });
  });
  
  return Array.from(categoriesSet).sort();
};
