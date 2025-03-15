#!/usr/bin/env node

/**
 * Automatic Image Categorization Script
 * 
 * This script analyzes the downloaded Instagram images and categorizes them
 * based on visual characteristics and predefined rules.
 * 
 * Usage:
 * 1. Install dependencies: npm install fs-extra path
 * 2. Run: node scripts/auto-categorize-images.js
 */

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

// Categories we want to extract from Instagram posts
const CATEGORIES = {
  RINGS: ['ring', 'rings', 'engagement', 'wedding', 'solitaire', 'diamond ring', 'gold ring', 'finger'],
  EARRINGS: ['earring', 'earrings', 'studs', 'jhumka', 'jhumkas', 'ear', 'stud', 'earlobe'],
  PENDANTS: ['pendant', 'pendants', 'necklace', 'necklaces', 'chain', 'neck', 'choker', 'collar'],
  BRACELETS: ['bracelet', 'bracelets', 'bangle', 'bangles', 'wrist', 'arm', 'cuff'],
};

// Function to get user input
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

// Function to categorize based on keywords
function categorizeByKeywords(keywords) {
  const lowerKeywords = keywords.map(k => k.toLowerCase());
  
  for (const [category, categoryKeywords] of Object.entries(CATEGORIES)) {
    if (categoryKeywords.some(keyword => 
      lowerKeywords.some(k => k.includes(keyword))
    )) {
      return category.toLowerCase();
    }
  }
  
  return 'uncategorized';
}

// Function to manually categorize an image with user input
async function manuallyCategorizeSingleImage(imagePath, filename) {
  console.log(`\nCategorizing image: ${filename}`);
  console.log(`Image path: ${imagePath}`);
  
  // Display available categories
  console.log('\nAvailable categories:');
  Object.keys(CATEGORIES).forEach((category, index) => {
    console.log(`${index + 1}. ${category.toLowerCase()}`);
  });
  
  // Ask user to choose a category
  const categoryChoice = await askQuestion('Enter category number (or press Enter to skip): ');
  
  if (!categoryChoice) {
    return 'uncategorized';
  }
  
  const categoryIndex = parseInt(categoryChoice) - 1;
  if (categoryIndex >= 0 && categoryIndex < Object.keys(CATEGORIES).length) {
    return Object.keys(CATEGORIES)[categoryIndex].toLowerCase();
  }
  
  return 'uncategorized';
}

// Function to automatically categorize images in batches
async function autoCategorizeImages() {
  try {
    console.log('Automatic Image Categorization Script Starting...');
    
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
    
    // Filter for uncategorized posts
    const uncategorizedPosts = posts.filter(post => post.category === 'uncategorized');
    console.log(`Found ${uncategorizedPosts.length} uncategorized posts`);
    
    if (uncategorizedPosts.length === 0) {
      console.log('No uncategorized posts found. All posts are already categorized.');
      return;
    }
    
    // Ask user if they want to categorize in batches or one by one
    const batchMode = await askQuestion('Do you want to categorize in batches? (y/n): ');
    
    if (batchMode.toLowerCase() === 'y') {
      // Batch categorization
      console.log('\nBatch categorization mode:');
      console.log('1. Rings');
      console.log('2. Earrings');
      console.log('3. Pendants');
      console.log('4. Bracelets');
      
      const categoryChoice = await askQuestion('Enter category number for all uncategorized images: ');
      const categoryIndex = parseInt(categoryChoice) - 1;
      
      if (categoryIndex >= 0 && categoryIndex < Object.keys(CATEGORIES).length) {
        const category = Object.keys(CATEGORIES)[categoryIndex].toLowerCase();
        
        // Update all uncategorized posts
        for (const post of uncategorizedPosts) {
          // Get image filename from media_url
          const filename = path.basename(post.media_url);
          const imagePath = path.join(imagesDir, filename);
          
          if (!await fs.pathExists(imagePath)) {
            console.error(`Image file not found: ${imagePath}`);
            continue;
          }
          
          // Generate new filename with correct category
          const postId = post.id;
          const newFilename = `${category}-${postId}.jpg`;
          const newImagePath = path.join(imagesDir, newFilename);
          
          // Rename file if category changed
          if (filename !== newFilename) {
            await fs.move(imagePath, newImagePath, { overwrite: true });
            console.log(`Renamed ${filename} to ${newFilename}`);
            
            // Update post data
            post.category = category;
            post.media_url = `/images/instagram/${newFilename}`;
          }
        }
      } else {
        console.log('Invalid category choice. Exiting...');
        return;
      }
    } else {
      // One-by-one categorization
      for (const post of uncategorizedPosts) {
        // Get image filename from media_url
        const filename = path.basename(post.media_url);
        const imagePath = path.join(imagesDir, filename);
        
        if (!await fs.pathExists(imagePath)) {
          console.error(`Image file not found: ${imagePath}`);
          continue;
        }
        
        // Manually categorize the image
        const category = await manuallyCategorizeSingleImage(imagePath, filename);
        
        // Generate new filename with correct category
        const postId = post.id;
        const newFilename = `${category}-${postId}.jpg`;
        const newImagePath = path.join(imagesDir, newFilename);
        
        // Rename file if category changed
        if (filename !== newFilename) {
          await fs.move(imagePath, newImagePath, { overwrite: true });
          console.log(`Renamed ${filename} to ${newFilename}`);
          
          // Update post data
          post.category = category;
          post.media_url = `/images/instagram/${newFilename}`;
        }
      }
    }
    
    // Save updated posts data
    await fs.writeJson(dataPath, posts, { spaces: 2 });
    console.log(`\nSaved updated categories to ${dataPath}`);
    
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
    
    console.log('\nDone! Image categorization completed successfully.');
    
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
    console.error('Error categorizing images:', error);
    process.exit(1);
  }
}

// Run the script
autoCategorizeImages(); 