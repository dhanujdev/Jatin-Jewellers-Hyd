#!/usr/bin/env node

/**
 * Google Lens Image Categorization Script
 * 
 * This script uses Puppeteer to search each Instagram image with Google Lens,
 * retrieve keywords, and automatically categorize the jewelry items.
 * 
 * Usage:
 * 1. Install dependencies: npm install puppeteer fs-extra path
 * 2. Run: node scripts/google-lens-categorize.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');

// Categories we want to extract from Instagram posts with improved keywords
const CATEGORIES = {
  RINGS: [
    'ring', 'rings', 'engagement', 'wedding', 'solitaire', 'diamond ring', 
    'gold ring', 'finger', 'band', 'signet', 'cocktail ring', 'eternity'
  ],
  EARRINGS: [
    'earring', 'earrings', 'studs', 'jhumka', 'jhumkas', 'ear', 'stud', 
    'earlobe', 'hoop', 'chandelier earrings', 'drop earrings', 'dangle', 
    'jhumki', 'bali', 'kaan', 'tops', 'ear tops'
  ],
  PENDANTS: [
    'pendant', 'pendants', 'necklace', 'necklaces', 'chain', 'neck', 'choker', 
    'collar', 'locket', 'mangalsutra', 'tanmaniya', 'aad', 'haar'
  ],
  BRACELETS: [
    'bracelet', 'bracelets', 'bangle', 'bangles', 'wrist', 'arm', 'cuff', 
    'kada', 'kangan', 'churi', 'wristlet', 'tennis bracelet'
  ],
};

// Helper function for delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to categorize based on keywords with improved logic
function categorizeByKeywords(keywords) {
  const lowerKeywords = keywords.map(k => k.toLowerCase());
  
  // Count matches for each category
  const categoryScores = {};
  
  for (const [category, categoryKeywords] of Object.entries(CATEGORIES)) {
    categoryScores[category] = 0;
    
    for (const keyword of categoryKeywords) {
      for (const k of lowerKeywords) {
        if (k.includes(keyword)) {
          categoryScores[category]++;
          // Give extra weight to exact matches
          if (k === keyword) {
            categoryScores[category]++;
          }
        }
      }
    }
  }
  
  // Find category with highest score
  let highestScore = 0;
  let bestCategory = 'uncategorized';
  
  for (const [category, score] of Object.entries(categoryScores)) {
    if (score > highestScore) {
      highestScore = score;
      bestCategory = category;
    }
  }
  
  // Only categorize if we have a minimum confidence
  if (highestScore >= 2) {
    return bestCategory.toLowerCase();
  }
  
  return 'uncategorized';
}

// Function to search Google Lens for image and get keywords
async function searchGoogleLens(browser, imagePath) {
  console.log(`Searching Google Lens for image: ${imagePath}`);
  
  try {
    // Create a new page
    const page = await browser.newPage();
    
    // Go to Google Lens
    await page.goto('https://lens.google.com/', { waitUntil: 'networkidle2' });
    
    // Accept cookies if the dialog appears
    try {
      const acceptButton = await page.$('button[aria-label="Accept all"]');
      if (acceptButton) {
        await acceptButton.click();
        await delay(1000);
      }
    } catch (e) {
      console.log('No cookie dialog found, continuing...');
    }
    
    // Check for captcha before proceeding
    const hasCaptcha = await checkForCaptcha(page);
    if (hasCaptcha) {
      console.log('⚠️ CAPTCHA detected! Please solve it manually.');
      console.log('Waiting for 60 seconds to allow manual intervention...');
      await delay(60000); // Wait for 60 seconds to give time to solve the captcha
    }
    
    // Click on the camera icon or upload button
    const uploadButton = await page.$('input[type="file"]');
    if (!uploadButton) {
      // Try to find the camera icon and click it
      const cameraIcon = await page.$('div[aria-label="Search by image"]');
      if (cameraIcon) {
        await cameraIcon.click();
        await delay(1000);
        
        // Now find the file input
        const fileInput = await page.$('input[type="file"]');
        if (fileInput) {
          await fileInput.uploadFile(imagePath);
        } else {
          throw new Error('File input not found after clicking camera icon');
        }
      } else {
        throw new Error('Neither upload button nor camera icon found');
      }
    } else {
      // Upload the image directly
      await uploadButton.uploadFile(imagePath);
    }
    
    // Wait for results to load
    await delay(5000);
    
    // Check for captcha after upload
    const hasCaptchaAfterUpload = await checkForCaptcha(page);
    if (hasCaptchaAfterUpload) {
      console.log('⚠️ CAPTCHA detected after upload! Please solve it manually.');
      console.log('Waiting for 60 seconds to allow manual intervention...');
      await delay(60000); // Wait for 60 seconds to give time to solve the captcha
    }
    
    // Extract keywords from search results with improved extraction
    const keywords = await page.evaluate(() => {
      const results = [];
      
      // Try to get visual matches
      const visualMatches = document.querySelectorAll('h2, h3, span, div');
      visualMatches.forEach(element => {
        const text = element.textContent.trim();
        if (text && text.length > 2 && !text.includes('Google') && !text.includes('Search')) {
          results.push(text);
        }
      });
      
      // Try to get any text that might describe the image
      const allText = document.body.innerText;
      const words = allText.split(/\s+/);
      const relevantWords = words.filter(word => 
        word.length > 3 && 
        !word.includes('Google') && 
        !word.includes('Search') && 
        !word.includes('http') &&
        !word.includes('lens')
      );
      
      // Extract multi-word phrases that might be relevant
      const phrases = [];
      for (let i = 0; i < relevantWords.length - 1; i++) {
        if (relevantWords[i].length > 3 && relevantWords[i+1].length > 3) {
          phrases.push(`${relevantWords[i]} ${relevantWords[i+1]}`);
        }
      }
      
      results.push(...relevantWords, ...phrases);
      
      return [...new Set(results)]; // Remove duplicates
    });
    
    // Take a screenshot for debugging
    await page.screenshot({ path: `lens-result-${path.basename(imagePath)}.png` });
    
    // Close the page
    await page.close();
    
    console.log(`Found keywords: ${keywords.join(', ')}`);
    return keywords;
  } catch (error) {
    console.error(`Error searching Google Lens for image: ${error.message}`);
    return ['jewelry']; // Default fallback keyword
  }
}

// Function to check for captcha
async function checkForCaptcha(page) {
  const captchaTexts = [
    'unusual traffic',
    'captcha',
    'verify you are a human',
    'robot',
    'automated',
    'security check',
    'i\'m not a robot'
  ];
  
  const pageContent = await page.evaluate(() => document.body.innerText);
  
  for (const text of captchaTexts) {
    if (pageContent.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
  }
  
  // Also check for reCAPTCHA iframe
  const recaptchaFrame = await page.$('iframe[src*="recaptcha"]');
  if (recaptchaFrame) {
    return true;
  }
  
  return false;
}

// Main function
async function googleLensCategorize() {
  let browser;
  
  try {
    console.log('Google Lens Image Categorization Script Starting...');
    
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
    
    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: false, // Set to false for debugging
      defaultViewport: null,
      args: ['--window-size=1280,800']
    });
    
    // Process each uncategorized post
    for (const post of uncategorizedPosts) {
      // Get image filename from media_url
      const filename = path.basename(post.media_url);
      const imagePath = path.join(imagesDir, filename);
      
      if (!await fs.pathExists(imagePath)) {
        console.error(`Image file not found: ${imagePath}`);
        continue;
      }
      
      console.log(`\nProcessing image: ${filename}`);
      
      // Search Google Lens for image and get keywords
      const keywords = await searchGoogleLens(browser, imagePath);
      
      // Add caption words to keywords for better categorization
      if (post.caption) {
        keywords.push(...post.caption.split(' '));
      }
      
      // Categorize based on keywords
      const category = categorizeByKeywords(keywords);
      console.log(`Categorized as: ${category}`);
      
      // Generate new filename with correct category
      const postId = post.id;
      const newFilename = `${category}-${postId}.jpg`;
      
      // Create category directory if it doesn't exist
      const categoryDir = path.join(imagesDir, category);
      await fs.ensureDir(categoryDir);
      
      const newImagePath = path.join(categoryDir, newFilename);
      
      // Rename file if category changed
      if (filename !== newFilename) {
        await fs.move(imagePath, newImagePath, { overwrite: true });
        console.log(`Renamed ${filename} to ${category}/${newFilename}`);
        
        // Update post data
        post.category = category;
        post.media_url = `/images/instagram/${category}/${newFilename}`;
      }
      
      // Add a delay between requests to avoid being blocked
      await delay(3000 + Math.floor(Math.random() * 2000));
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
    
    console.log('\nDone! Google Lens image categorization completed successfully.');
    
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
  } finally {
    // Close browser if it was opened
    if (browser) {
      await browser.close();
    }
  }
}

// Run the script
googleLensCategorize(); 