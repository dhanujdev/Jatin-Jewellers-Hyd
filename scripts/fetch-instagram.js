#!/usr/bin/env node

/**
 * Instagram Image Fetcher
 * 
 * This script fetches images from Instagram and saves them locally.
 * It also generates a JSON file with metadata about the images.
 * 
 * Usage:
 * 1. Set up Instagram Graph API access
 * 2. Add your access token to .env file
 * 3. Run this script: node scripts/fetch-instagram.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// Categories we want to extract from Instagram posts
const CATEGORIES = {
  RINGS: ['ring', 'rings', 'engagement', 'wedding', 'solitaire'],
  EARRINGS: ['earring', 'earrings', 'studs', 'jhumka', 'jhumkas'],
  PENDANTS: ['pendant', 'pendants', 'necklace', 'necklaces'],
  BRACELETS: ['bracelet', 'bracelets', 'bangle', 'bangles'],
};

// Function to categorize a post based on its caption
function categorizePost(post) {
  const caption = post.caption?.toLowerCase() || '';
  
  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    if (keywords.some(keyword => caption.includes(keyword))) {
      return category.toLowerCase();
    }
  }
  
  return 'uncategorized';
}

// Function to download an image from a URL
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    // Create directory if it doesn't exist
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(filepath);
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
    }).on('error', err => {
      fs.unlink(filepath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Main function to fetch Instagram posts and save them locally
async function fetchInstagramPosts() {
  try {
    console.log('Fetching Instagram posts...');
    
    // In a real implementation, you would:
    // 1. Use Instagram Graph API with proper authentication
    // 2. Store the access token securely
    // 3. Make API calls to fetch the posts
    
    // For demonstration, we'll use mock data
    const mockPosts = [
      {
        id: '1',
        media_url: 'https://ext.same-assets.com/2068770385/3215388855.jpeg',
        permalink: 'https://www.instagram.com/p/example1/',
        caption: 'Elegant diamond earrings with floral design #earrings #diamond #luxury',
        timestamp: '2023-05-15T10:00:00Z',
      },
      // ... other posts
    ];
    
    // Process each post
    const processedPosts = [];
    for (const post of mockPosts) {
      // Categorize the post
      const category = categorizePost(post);
      
      // Generate a filename based on category and ID
      const filename = `${category}-${processedPosts.filter(p => p.category === category).length + 1}.jpeg`;
      const filepath = path.join('public', 'images', 'instagram', filename);
      const relativeFilepath = `/images/instagram/${filename}`;
      
      // Download the image
      console.log(`Downloading image for post ${post.id} to ${filepath}...`);
      
      // In a real implementation, you would uncomment this:
      // await downloadImage(post.media_url, filepath);
      
      // Add the processed post to the array
      processedPosts.push({
        ...post,
        category,
        media_url: relativeFilepath,
      });
    }
    
    // Save the processed posts to a JSON file
    const outputPath = path.join('src', 'data', 'instagram-posts.json');
    
    // Create directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(processedPosts, null, 2));
    console.log(`Saved ${processedPosts.length} posts to ${outputPath}`);
    
    // Update the Instagram utility file
    console.log('Updating Instagram utility file...');
    const tsContent = `// Instagram API integration
// This file provides utilities to fetch and process Instagram images
// THIS FILE IS AUTO-GENERATED - DO NOT EDIT DIRECTLY

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
export const instagramPosts: InstagramPost[] = ${JSON.stringify(processedPosts, null, 2)};

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
}`;
    
    fs.writeFileSync(path.join('src', 'lib', 'instagram.ts'), tsContent);
    console.log('Instagram utility file updated successfully');
    
    console.log('Done!');
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    process.exit(1);
  }
}

// Run the script
fetchInstagramPosts(); 