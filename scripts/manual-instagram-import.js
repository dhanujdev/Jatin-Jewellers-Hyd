#!/usr/bin/env node

/**
 * Manual Instagram Import
 * 
 * This script allows you to manually import Instagram images without using the API or scraping.
 * You can simply place your images in the public/images/instagram/manual directory and run this script.
 * 
 * Usage:
 * 1. Create the directory: mkdir -p public/images/instagram/manual
 * 2. Copy your images to that directory
 * 3. Run: node scripts/manual-instagram-import.js
 */

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

// Categories we want to extract from Instagram posts
const CATEGORIES = {
  RINGS: ['ring', 'rings', 'engagement', 'wedding', 'solitaire'],
  EARRINGS: ['earring', 'earrings', 'studs', 'jhumka', 'jhumkas'],
  PENDANTS: ['pendant', 'pendants', 'necklace', 'necklaces'],
  BRACELETS: ['bracelet', 'bracelets', 'bangle', 'bangles'],
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

// Main function to import Instagram images
async function manualImport() {
  try {
    console.log('Manual Instagram Import Starting...');
    
    // Create directories
    const manualDir = path.join('public', 'images', 'instagram', 'manual');
    const imagesDir = path.join('public', 'images', 'instagram');
    const dataDir = path.join('src', 'data');
    
    await fs.ensureDir(manualDir);
    await fs.ensureDir(imagesDir);
    await fs.ensureDir(dataDir);
    
    // Check if there are images in the manual directory
    const files = await fs.readdir(manualDir);
    const imageFiles = files.filter(file => 
      ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );
    
    if (imageFiles.length === 0) {
      console.log(`No images found in ${manualDir}`);
      console.log(`Please copy your Instagram images to that directory and run this script again.`);
      return;
    }
    
    console.log(`Found ${imageFiles.length} images in ${manualDir}`);
    
    // Load existing posts if available
    let existingPosts = [];
    const outputPath = path.join(dataDir, 'instagram-posts.json');
    
    if (await fs.pathExists(outputPath)) {
      existingPosts = await fs.readJson(outputPath);
      console.log(`Loaded ${existingPosts.length} existing posts from ${outputPath}`);
    }
    
    // Process each image
    const posts = [...existingPosts];
    
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const filePath = path.join(manualDir, file);
      
      console.log(`\nProcessing image ${i + 1}/${imageFiles.length}: ${file}`);
      
      // Ask for post details
      const caption = await askQuestion('Enter caption for this image: ');
      
      // Categorize post
      let category = '';
      for (const [cat, keywords] of Object.entries(CATEGORIES)) {
        if (keywords.some(keyword => caption.toLowerCase().includes(keyword))) {
          category = cat.toLowerCase();
          break;
        }
      }
      
      // If no category was detected, ask user
      if (!category) {
        console.log('No category detected from caption. Available categories:');
        Object.keys(CATEGORIES).forEach((cat, index) => {
          console.log(`${index + 1}. ${cat.toLowerCase()}`);
        });
        console.log(`${Object.keys(CATEGORIES).length + 1}. uncategorized`);
        
        const categoryChoice = await askQuestion('Enter category number: ');
        const categoryIndex = parseInt(categoryChoice) - 1;
        
        if (categoryIndex >= 0 && categoryIndex < Object.keys(CATEGORIES).length) {
          category = Object.keys(CATEGORIES)[categoryIndex].toLowerCase();
        } else {
          category = 'uncategorized';
        }
      }
      
      console.log(`Categorized as: ${category}`);
      
      // Generate ID and filename
      const id = `manual-${Date.now()}-${i}`;
      const filename = `${category}-${id}.${path.extname(file).substring(1)}`;
      const destPath = path.join(imagesDir, filename);
      
      // Copy image
      await fs.copy(filePath, destPath);
      console.log(`Copied image to ${destPath}`);
      
      // Add to posts array
      posts.push({
        id,
        media_url: `/images/instagram/${filename}`,
        permalink: `https://www.instagram.com/jatinjewellershyd/`,
        caption,
        timestamp: new Date().toISOString(),
        category
      });
      
      // Ask if user wants to delete the original file
      const deleteOriginal = await askQuestion('Delete original file? (y/n): ');
      if (deleteOriginal.toLowerCase() === 'y') {
        await fs.remove(filePath);
        console.log(`Deleted original file: ${filePath}`);
      }
    }
    
    // Save posts data
    await fs.writeJson(outputPath, posts, { spaces: 2 });
    console.log(`\nSaved ${posts.length} posts to ${outputPath}`);
    
    // Update Instagram utility file
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
export const instagramPosts: InstagramPost[] = ${JSON.stringify(posts, null, 2)};

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
    
    await fs.writeFile(path.join('src', 'lib', 'instagram.ts'), tsContent);
    console.log('Instagram utility file updated successfully');
    
    console.log('\nDone! Manual import completed successfully.');
  } catch (error) {
    console.error('Error during manual import:', error);
    process.exit(1);
  }
}

// Run the script
manualImport(); 