// Instagram API integration
// This file provides utilities to fetch and process Instagram images

export type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
  category?: string; // Derived from hashtags or caption
};

// Categories we want to extract from Instagram posts
export const CATEGORIES = {
  RINGS: ['ring', 'rings', 'engagement', 'wedding', 'solitaire'],
  EARRINGS: ['earring', 'earrings', 'studs', 'jhumka', 'jhumkas'],
  PENDANTS: ['pendant', 'pendants', 'necklace', 'necklaces'],
  BRACELETS: ['bracelet', 'bracelets', 'bangle', 'bangles'],
};

// Function to categorize a post based on its caption
export function categorizePost(post: InstagramPost): string {
  const caption = post.caption?.toLowerCase() || '';
  
  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    if (keywords.some(keyword => caption.includes(keyword))) {
      return category.toLowerCase();
    }
  }
  
  return 'uncategorized';
}

// Static data - this represents images that have been pulled from Instagram once
// In a real implementation, this would be loaded from a JSON file or database
// that gets updated when you manually sync with Instagram
export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    media_url: '/images/instagram/earrings-1.jpeg',
    permalink: 'https://www.instagram.com/p/example1/',
    caption: 'Elegant diamond earrings with floral design #earrings #diamond #luxury',
    timestamp: '2023-05-15T10:00:00Z',
    category: 'earrings',
  },
  {
    id: '2',
    media_url: '/images/instagram/rings-1.jpeg',
    permalink: 'https://www.instagram.com/p/example2/',
    caption: 'Perfect solitaire engagement ring for your special day #ring #engagement #diamond',
    timestamp: '2023-06-20T14:30:00Z',
    category: 'rings',
  },
  {
    id: '3',
    media_url: '/images/instagram/bracelets-1.jpeg',
    permalink: 'https://www.instagram.com/p/example3/',
    caption: 'Tennis bracelet with lab-grown diamonds #bracelet #diamond #luxury',
    timestamp: '2023-07-05T09:15:00Z',
    category: 'bracelets',
  },
  {
    id: '4',
    media_url: '/images/instagram/pendants-1.jpeg',
    permalink: 'https://www.instagram.com/p/example4/',
    caption: 'Halo diamond pendant for everyday elegance #pendant #necklace #diamond',
    timestamp: '2023-08-12T16:45:00Z',
    category: 'pendants',
  },
  {
    id: '5',
    media_url: '/images/instagram/rings-2.jpeg',
    permalink: 'https://www.instagram.com/p/example5/',
    caption: 'Infinity diamond band - symbol of eternal love #ring #wedding #diamond',
    timestamp: '2023-09-18T11:20:00Z',
    category: 'rings',
  },
  {
    id: '6',
    media_url: '/images/instagram/earrings-2.jpeg',
    permalink: 'https://www.instagram.com/p/example6/',
    caption: 'Classic diamond studs - a must-have in every collection #earrings #studs #diamond',
    timestamp: '2023-10-25T13:10:00Z',
    category: 'earrings',
  },
  {
    id: '7',
    media_url: '/images/instagram/bracelets-2.jpeg',
    permalink: 'https://www.instagram.com/p/example7/',
    caption: 'Diamond bangle with intricate design #bracelet #bangle #diamond',
    timestamp: '2023-11-30T15:40:00Z',
    category: 'bracelets',
  },
  {
    id: '8',
    media_url: '/images/instagram/pendants-2.jpeg',
    permalink: 'https://www.instagram.com/p/example8/',
    caption: 'Heart-shaped diamond pendant - perfect gift for loved ones #pendant #necklace #diamond',
    timestamp: '2023-12-24T10:30:00Z',
    category: 'pendants',
  },
  {
    id: '9',
    media_url: '/images/instagram/rings-3.jpeg',
    permalink: 'https://www.instagram.com/p/example9/',
    caption: 'Elegant diamond ring with vintage design #ring #diamond #luxury',
    timestamp: '2024-01-15T12:00:00Z',
    category: 'rings',
  },
  {
    id: '10',
    media_url: '/images/instagram/earrings-3.jpeg',
    permalink: 'https://www.instagram.com/p/example10/',
    caption: 'Diamond jhumkas with pearl drops #earrings #jhumkas #diamond',
    timestamp: '2024-02-20T14:15:00Z',
    category: 'earrings',
  },
  {
    id: '11',
    media_url: '/images/instagram/pendants-3.jpeg',
    permalink: 'https://www.instagram.com/p/example11/',
    caption: 'Elegant diamond pendant with chain #pendant #necklace #diamond',
    timestamp: '2024-03-10T09:45:00Z',
    category: 'pendants',
  },
  {
    id: '12',
    media_url: '/images/instagram/bracelets-3.jpeg',
    permalink: 'https://www.instagram.com/p/example12/',
    caption: 'Diamond bracelet with adjustable clasp #bracelet #diamond #luxury',
    timestamp: '2024-04-05T11:30:00Z',
    category: 'bracelets',
  },
];

// Fetch Instagram posts - now returns the static data
// This simulates loading from a local source instead of making API calls
export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  // In a real implementation, this would load from a JSON file or database
  // that gets updated when you manually sync with Instagram
  return Promise.resolve(instagramPosts);
}

// Get posts for a specific category
export async function getPostsByCategory(category: string): Promise<InstagramPost[]> {
  return instagramPosts.filter(post => post.category === category.toLowerCase());
}

// Get featured posts for the carousel (best/newest posts)
export async function getFeaturedPosts(count: number = 3): Promise<InstagramPost[]> {
  // Sort by date (newest first) and take the specified count
  return [...instagramPosts]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, count);
} 