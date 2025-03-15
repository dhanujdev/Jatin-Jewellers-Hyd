#!/usr/bin/env node

/**
 * Instagram Image Fetcher (Complete Version)
 * 
 * This script fetches images from Instagram using the Graph API and saves them locally.
 * It also generates a JSON file with metadata about the images and updates the Instagram utility file.
 * 
 * Prerequisites:
 * 1. Create a Facebook Developer account
 * 2. Create a Facebook App
 * 3. Set up Instagram Basic Display API
 * 4. Get a long-lived access token
 * 
 * Usage:
 * 1. Create a .env file with your Instagram access token:
 *    INSTAGRAM_ACCESS_TOKEN=your_access_token_here
 * 2. Run: npm install dotenv axios
 * 3. Run: node scripts/fetch-instagram-complete.js
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');
const axios = require('axios');

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

// Function to fetch Instagram posts using the Graph API
async function fetchInstagramPostsFromAPI() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  if (!accessToken) {
    throw new Error('Instagram access token not found. Please add INSTAGRAM_ACCESS_TOKEN to your .env file.');
  }
  
  try {
    // Get user ID
    const userResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);
    const userId = userResponse.data.id;
    
    // Get media
    const mediaResponse = await axios.get(
      `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink,timestamp,media_type&access_token=${accessToken}`
    );
    
    // Filter for images only
    return mediaResponse.data.data.filter(item => item.media_type === 'IMAGE');
  } catch (error) {
    console.error('Error fetching from Instagram API:', error.response?.data || error.message);
    throw error;
  }
}

// Main function to fetch Instagram posts and save them locally
async function fetchInstagramPosts() {
  try {
    console.log('Fetching Instagram posts...');
    
    let posts;
    try {
      // Try to fetch from Instagram API
      posts = await fetchInstagramPostsFromAPI();
      console.log(`Fetched ${posts.length} posts from Instagram API`);
    } catch (error) {
      console.warn('Failed to fetch from Instagram API, using mock data instead');
      // Fallback to mock data
      posts = [
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
        // Add more mock posts here if needed
      ];
    }
    
    // Process each post
    const processedPosts = [];
    for (const post of posts) {
      // Categorize the post
      const category = categorizePost(post);
      
      // Generate a filename based on category and ID
      const filename = `${category}-${post.id}.jpeg`;
      const filepath = path.join('public', 'images', 'instagram', filename);
      const relativeFilepath = `/images/instagram/${filename}`;
      
      // Download the image
      console.log(`Downloading image for post ${post.id} to ${filepath}...`);
      try {
        await downloadImage(post.media_url, filepath);
        console.log(`Downloaded image for post ${post.id}`);
      } catch (error) {
        console.error(`Failed to download image for post ${post.id}:`, error.message);
        continue; // Skip this post if download fails
      }
      
      // Add the processed post to the array
      processedPosts.push({
        id: post.id,
        media_url: relativeFilepath,
        permalink: post.permalink,
        caption: post.caption || '',
        timestamp: post.timestamp,
        category,
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
// Last updated: ${new Date().toISOString()}

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