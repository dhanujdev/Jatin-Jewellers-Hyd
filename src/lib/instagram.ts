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

// Mock function to fetch Instagram data - replace with actual API call
// In production, this would be a server-side function that uses Instagram Graph API
export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  // This is a placeholder - in production, you would:
  // 1. Use Instagram Graph API with proper authentication
  // 2. Store the access token securely on the server
  // 3. Make API calls from the server to avoid exposing tokens
  
  // For now, we'll return mock data that you can replace with actual Instagram data
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_url: 'https://ext.same-assets.com/2068770385/3215388855.jpeg',
      permalink: 'https://www.instagram.com/p/example1/',
      caption: 'Elegant diamond earrings with floral design #earrings #diamond #luxury',
      timestamp: '2023-05-15T10:00:00Z',
    },
    {
      id: '2',
      media_url: 'https://ext.same-assets.com/1202188651/2997469454.jpeg',
      permalink: 'https://www.instagram.com/p/example2/',
      caption: 'Perfect solitaire engagement ring for your special day #ring #engagement #diamond',
      timestamp: '2023-06-20T14:30:00Z',
    },
    {
      id: '3',
      media_url: 'https://ext.same-assets.com/990724956/3338737471.jpeg',
      permalink: 'https://www.instagram.com/p/example3/',
      caption: 'Tennis bracelet with lab-grown diamonds #bracelet #diamond #luxury',
      timestamp: '2023-07-05T09:15:00Z',
    },
    {
      id: '4',
      media_url: 'https://ext.same-assets.com/3081301302/1540422722.jpeg',
      permalink: 'https://www.instagram.com/p/example4/',
      caption: 'Halo diamond pendant for everyday elegance #pendant #necklace #diamond',
      timestamp: '2023-08-12T16:45:00Z',
    },
    {
      id: '5',
      media_url: 'https://ext.same-assets.com/926956781/3410740655.jpeg',
      permalink: 'https://www.instagram.com/p/example5/',
      caption: 'Infinity diamond band - symbol of eternal love #ring #wedding #diamond',
      timestamp: '2023-09-18T11:20:00Z',
    },
    {
      id: '6',
      media_url: 'https://ext.same-assets.com/1806396106/3692520561.jpeg',
      permalink: 'https://www.instagram.com/p/example6/',
      caption: 'Classic diamond studs - a must-have in every collection #earrings #studs #diamond',
      timestamp: '2023-10-25T13:10:00Z',
    },
    {
      id: '7',
      media_url: 'https://ext.same-assets.com/1613108798/771767955.jpeg',
      permalink: 'https://www.instagram.com/p/example7/',
      caption: 'Diamond bangle with intricate design #bracelet #bangle #diamond',
      timestamp: '2023-11-30T15:40:00Z',
    },
    {
      id: '8',
      media_url: 'https://ext.same-assets.com/1938305152/1419367217.jpeg',
      permalink: 'https://www.instagram.com/p/example8/',
      caption: 'Heart-shaped diamond pendant - perfect gift for loved ones #pendant #necklace #diamond',
      timestamp: '2023-12-24T10:30:00Z',
    },
    {
      id: '9',
      media_url: 'https://ext.same-assets.com/2845033434/118577771.jpeg',
      permalink: 'https://www.instagram.com/p/example9/',
      caption: 'Elegant diamond ring with vintage design #ring #diamond #luxury',
      timestamp: '2024-01-15T12:00:00Z',
    },
    {
      id: '10',
      media_url: 'https://ext.same-assets.com/4031244677/2680366754.jpeg',
      permalink: 'https://www.instagram.com/p/example10/',
      caption: 'Diamond jhumkas with pearl drops #earrings #jhumkas #diamond',
      timestamp: '2024-02-20T14:15:00Z',
    },
    {
      id: '11',
      media_url: 'https://ext.same-assets.com/1118148758/1365192601.jpeg',
      permalink: 'https://www.instagram.com/p/example11/',
      caption: 'Elegant diamond pendant with chain #pendant #necklace #diamond',
      timestamp: '2024-03-10T09:45:00Z',
    },
    {
      id: '12',
      media_url: 'https://ext.same-assets.com/3079863475/266547809.jpeg',
      permalink: 'https://www.instagram.com/p/example12/',
      caption: 'Diamond bracelet with adjustable clasp #bracelet #diamond #luxury',
      timestamp: '2024-04-05T11:30:00Z',
    },
  ];

  // Categorize each post
  return mockPosts.map(post => ({
    ...post,
    category: categorizePost(post)
  }));
}

// Get posts for a specific category
export async function getPostsByCategory(category: string): Promise<InstagramPost[]> {
  const allPosts = await fetchInstagramPosts();
  return allPosts.filter(post => post.category === category.toLowerCase());
}

// Get featured posts for the carousel (best/newest posts)
export async function getFeaturedPosts(count: number = 3): Promise<InstagramPost[]> {
  const allPosts = await fetchInstagramPosts();
  // Sort by date (newest first) and take the specified count
  return allPosts
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, count);
} 