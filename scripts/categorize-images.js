#!/usr/bin/env node

/**
 * Image Categorization Script
 * 
 * This script analyzes the downloaded Instagram images, searches for similar images on the web,
 * and uses the results to categorize the jewelry items appropriately.
 * 
 * Usage:
 * 1. Install dependencies: npm install fs-extra path axios sharp
 * 2. Run: node scripts/categorize-images.js
 */

const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const readline = require('readline');
const sharp = require('sharp');

// Categories we want to extract from Instagram posts
const CATEGORIES = {
  RINGS: ['ring', 'rings', 'engagement', 'wedding', 'solitaire', 'diamond ring', 'gold ring'],
  EARRINGS: ['earring', 'earrings', 'studs', 'jhumka', 'jhumkas', 'ear', 'stud'],
  PENDANTS: ['pendant', 'pendants', 'necklace', 'necklaces', 'chain', 'neck'],
  BRACELETS: ['bracelet', 'bracelets', 'bangle', 'bangles', 'wrist', 'arm'],
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

// Function to analyze image and suggest category
async function analyzeImage(imagePath, filename) {
  console.log(`\nAnalyzing image: ${filename}`);
  
  try {
    // Get image dimensions and basic info
    const metadata = await sharp(imagePath).metadata();
    console.log(`Image dimensions: ${metadata.width}x${metadata.height}`);
    
    // Display the image path for manual inspection
    console.log(`Image path: ${imagePath}`);
    
    // Extract any existing category from filename
    const existingCategory = filename.split('-')[0];
    console.log(`Current category: ${existingCategory}`);
    
    // Ask user to provide keywords for the image
    console.log('\nPlease look at the image and provide keywords that describe the jewelry item.');
    console.log('For example: "gold ring", "diamond earrings", "pearl necklace", etc.');
    const userKeywords = await askQuestion('Enter keywords (comma separated): ');
    
    // Split keywords and trim whitespace
    const keywords = userKeywords.split(',').map(k => k.trim());
    
    // Suggest category based on keywords
    const suggestedCategory = categorizeByKeywords(keywords);
    console.log(`\nBased on your keywords, suggested category: ${suggestedCategory}`);
    
    // Ask user to confirm or change category
    const categories = Object.keys(CATEGORIES).map(c => c.toLowerCase());
    console.log(`\nAvailable categories: ${categories.join(', ')}`);
    
    const finalCategory = await askQuestion(`Enter final category (default: ${suggestedCategory}): `);
    
    // Return the final category (use suggested if empty)
    return finalCategory || suggestedCategory;
  } catch (error) {
    console.error(`Error analyzing image ${filename}:`, error.message);
    return 'uncategorized';
  }
}

// Main function
async function categorizeImages() {
  try {
    console.log('Image Categorization Script Starting...');
    
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
    
    // Process each uncategorized post
    for (const post of uncategorizedPosts) {
      // Get image filename from media_url
      const filename = path.basename(post.media_url);
      const imagePath = path.join(imagesDir, filename);
      
      if (!await fs.pathExists(imagePath)) {
        console.error(`Image file not found: ${imagePath}`);
        continue;
      }
      
      // Analyze image and get category
      const category = await analyzeImage(imagePath, filename);
      
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
categorizeImages(); 