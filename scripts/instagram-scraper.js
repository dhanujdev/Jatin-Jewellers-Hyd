#!/usr/bin/env node

/**
 * Instagram Scraper
 * 
 * This script uses Puppeteer to log in to Instagram and download images from your account.
 * It will download posts, highlights, and stories, then organize them into your website.
 * 
 * Usage:
 * 1. Install dependencies: npm install puppeteer fs-extra path
 * 2. Run: node scripts/instagram-scraper.js
 * 
 * IMPORTANT: This script is for personal use only. Using it may violate Instagram's Terms of Service.
 * Use at your own risk and be respectful of Instagram's rate limits to avoid account restrictions.
 */

const puppeteer = require('puppeteer');
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

// Function to categorize a post based on its caption
function categorizePost(caption) {
  const lowerCaption = caption?.toLowerCase() || '';
  
  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    if (keywords.some(keyword => lowerCaption.includes(keyword))) {
      return category.toLowerCase();
    }
  }
  
  return 'uncategorized';
}

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

// Main function to scrape Instagram
async function scrapeInstagram() {
  try {
    console.log('Instagram Scraper Starting...');
    
    // Get Instagram credentials
    const username = await askQuestion('Enter your Instagram username: ');
    const password = await askQuestion('Enter your Instagram password: ');
    
    if (!username || !password) {
      throw new Error('Username and password are required');
    }
    
    // Launch browser
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: false, // Set to true for production
      defaultViewport: null,
      args: ['--window-size=1280,800']
    });
    
    const page = await browser.newPage();
    
    // Navigate to Instagram
    console.log('Navigating to Instagram...');
    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });
    
    // Accept cookies if the dialog appears
    try {
      await page.waitForSelector('button[tabindex="0"]', { timeout: 5000 });
      const buttons = await page.$$('button[tabindex="0"]');
      if (buttons.length > 0) {
        await buttons[1].click(); // Usually the second button is "Accept"
      }
    } catch (e) {
      console.log('No cookie dialog found, continuing...');
    }
    
    // Login
    console.log('Logging in...');
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle2' })
    ]);
    
    // Check if login was successful
    const url = page.url();
    if (url.includes('challenge') || url.includes('login')) {
      console.log('Login failed or additional verification required.');
      console.log('Please complete the verification manually in the browser.');
      await page.waitForNavigation({ timeout: 60000 }); // Wait for manual verification
    }
    
    // Navigate to profile
    console.log('Navigating to your profile...');
    await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });
    
    // Get post links
    console.log('Collecting post links...');
    const postLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href^="/p/"]'));
      return links.map(link => link.href);
    });
    
    console.log(`Found ${postLinks.length} posts`);
    
    // Create directories
    const imagesDir = path.join('public', 'images', 'instagram');
    const dataDir = path.join('src', 'data');
    
    await fs.ensureDir(imagesDir);
    await fs.ensureDir(dataDir);
    
    // Process each post
    const posts = [];
    
    for (let i = 0; i < postLinks.length; i++) {
      const postUrl = postLinks[i];
      console.log(`Processing post ${i + 1}/${postLinks.length}: ${postUrl}`);
      
      await page.goto(postUrl, { waitUntil: 'networkidle2' });
      
      // Get post data
      const postData = await page.evaluate(() => {
        // Get image URL
        const imageElement = document.querySelector('article img[style*="object-fit"]');
        const imageUrl = imageElement ? imageElement.src : null;
        
        // Get caption
        const captionElement = document.querySelector('h1 + div');
        const caption = captionElement ? captionElement.textContent : '';
        
        // Get timestamp
        const timeElement = document.querySelector('time');
        const timestamp = timeElement ? timeElement.dateTime : new Date().toISOString();
        
        return { imageUrl, caption, timestamp };
      });
      
      if (!postData.imageUrl) {
        console.log(`No image found for post ${postUrl}, skipping...`);
        continue;
      }
      
      // Categorize post
      const category = categorizePost(postData.caption);
      
      // Generate filename
      const postId = postUrl.split('/p/')[1].split('/')[0];
      const filename = `${category}-${postId}.jpg`;
      const filepath = path.join(imagesDir, filename);
      
      // Download image
      console.log(`Downloading image to ${filepath}...`);
      
      // View image in new tab to download it
      const imageUrl = postData.imageUrl;
      const viewSource = await page.goto(imageUrl);
      const buffer = await viewSource.buffer();
      await fs.writeFile(filepath, buffer);
      
      // Add to posts array
      posts.push({
        id: postId,
        media_url: `/images/instagram/${filename}`,
        permalink: postUrl,
        caption: postData.caption,
        timestamp: postData.timestamp,
        category
      });
    }
    
    // Save posts data
    const outputPath = path.join(dataDir, 'instagram-posts.json');
    await fs.writeJson(outputPath, posts, { spaces: 2 });
    console.log(`Saved ${posts.length} posts to ${outputPath}`);
    
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
    
    // Close browser
    await browser.close();
    
    console.log('Done! Instagram scraping completed successfully.');
  } catch (error) {
    console.error('Error scraping Instagram:', error);
    process.exit(1);
  }
}

// Run the script
scrapeInstagram(); 