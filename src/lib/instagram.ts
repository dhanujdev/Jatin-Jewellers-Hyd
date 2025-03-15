// Instagram API integration
// This file provides utilities to fetch and process Instagram images
// THIS FILE IS AUTO-GENERATED - DO NOT EDIT DIRECTLY
// Last updated: 2025-03-15T18:43:48.050Z

export type InstagramPost = {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  timestamp: string;
  category: string;
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

// Static data - loaded from Instagram once
export const instagramPosts: InstagramPost[] = [
  {
    "id": "1",
    "media_url": "/images/instagram/rings-1.jpeg",
    "permalink": "https://www.instagram.com/p/example1/",
    "caption": "Elegant diamond earrings with floral design #earrings #diamond #luxury",
    "timestamp": "2023-05-15T10:00:00Z",
    "category": "rings"
  },
  {
    "id": "2",
    "media_url": "/images/instagram/rings-2.jpeg",
    "permalink": "https://www.instagram.com/p/example2/",
    "caption": "Perfect solitaire engagement ring for your special day #ring #engagement #diamond",
    "timestamp": "2023-06-20T14:30:00Z",
    "category": "rings"
  }
];

// Fetch Instagram posts - returns the static data
export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
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