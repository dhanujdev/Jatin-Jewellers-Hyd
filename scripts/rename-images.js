#!/usr/bin/env node

/**
 * Rename Instagram Images Script
 * 
 * This script renames image files based on the categories in the JSON file.
 * It ensures that the file paths in the JSON match the actual file locations.
 */

const fs = require('fs-extra');
const path = require('path');

async function renameImages() {
  try {
    console.log('Starting image renaming process...');
    
    // Paths
    const imagesDir = path.join('public', 'images', 'instagram');
    const dataPath = path.join('src', 'data', 'instagram-posts.json');
    
    // Check if files exist
    if (!await fs.pathExists(dataPath)) {
      throw new Error(`Instagram posts data file not found: ${dataPath}`);
    }
    
    // Load posts data
    const posts = await fs.readJson(dataPath);
    console.log(`Loaded ${posts.length} posts from ${dataPath}`);
    
    // Create category directories if they don't exist
    const categories = ['rings', 'earrings', 'pendants', 'bracelets'];
    for (const category of categories) {
      const categoryDir = path.join(imagesDir, category);
      await fs.ensureDir(categoryDir);
    }
    
    // Process each post
    for (const post of posts) {
      // Get current image filename and path
      const currentFilename = path.basename(post.media_url);
      const currentPath = path.join(imagesDir, currentFilename);
      
      // Generate new filename with correct category
      const postId = post.id;
      const newFilename = `${post.category}-${postId}.jpg`;
      const newPath = path.join(imagesDir, post.category, newFilename);
      
      // Check if current file exists
      if (await fs.pathExists(currentPath)) {
        // Move file to category directory
        await fs.move(currentPath, newPath, { overwrite: true });
        console.log(`Moved ${currentFilename} to ${post.category}/${newFilename}`);
        
        // Update post data
        post.media_url = `/images/instagram/${post.category}/${newFilename}`;
      } else {
        console.log(`Warning: File not found: ${currentPath}`);
      }
    }
    
    // Save updated posts data
    await fs.writeJson(dataPath, posts, { spaces: 2 });
    console.log(`\nSaved updated file paths to ${dataPath}`);
    
    // Update Instagram utility file
    console.log('Updating Instagram utility file...');
    const tsPath = path.join('src', 'lib', 'instagram.ts');
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

// Load Instagram posts from the JSON file
import instagramPostsData from '@/data/instagram-posts.json';
export const instagramPosts: InstagramPost[] = instagramPostsData;

// Fetch Instagram posts - returns the static data
export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  return Promise.resolve(instagramPosts);
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<InstagramPost[]> {
  return Promise.resolve(
    instagramPosts.filter(post => post.category === category)
  );
}

// Get featured posts for the carousel (best/newest posts)
export async function getFeaturedPosts(count: number = 3): Promise<InstagramPost[]> {
  // Sort by date (newest first) and take the specified count
  return [...instagramPosts]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, count);
}

// Helper function to categorize a post based on its caption
export function categorizePost(post: Omit<InstagramPost, 'category'>): string {
  const caption = post.caption.toLowerCase();
  
  if (caption.includes('#rings') || caption.includes('#ring')) {
    return 'rings';
  } else if (caption.includes('#earrings') || caption.includes('#earring')) {
    return 'earrings';
  } else if (caption.includes('#pendants') || caption.includes('#pendant') || caption.includes('#necklace')) {
    return 'pendants';
  } else if (caption.includes('#bracelets') || caption.includes('#bracelet')) {
    return 'bracelets';
  } else {
    return 'uncategorized';
  }
}`;
    
    await fs.writeFile(tsPath, tsContent);
    console.log('Instagram utility file updated successfully');
    
    console.log('\nDone! Image renaming completed successfully.');
    
    // Print summary of categories
    const categoryCounts = {};
    posts.forEach(post => {
      categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
    });
    
    console.log('\nCategory summary:');
    Object.entries(categoryCounts).forEach(([category, count]) => {
      console.log(`- ${category}: ${count} posts`);
    });
    
  } catch (error) {
    console.error('Error renaming images:', error);
  }
}

// Run the script
renameImages(); 