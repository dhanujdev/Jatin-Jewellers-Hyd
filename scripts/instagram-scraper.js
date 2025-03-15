#!/usr/bin/env node

/**
 * Instagram Scraper
 * 
 * This script uses Puppeteer to log in to Instagram and download images from the Jatin Jewellers account.
 * It will download posts and organize them into your website.
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

// Helper function for delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to scrape Instagram
async function scrapeInstagram() {
  try {
    console.log('Instagram Scraper Starting...');
    console.log('This script will scrape posts from the Jatin Jewellers Instagram account (@jatinjewellershyd)');
    
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
    
    // Navigate to Jatin Jewellers profile
    console.log('Navigating to Jatin Jewellers profile...');
    await page.goto('https://www.instagram.com/jatinjewellershyd/', { waitUntil: 'networkidle2' });
    
    // Get post links
    console.log('Collecting post links...');
    const postLinks = await page.evaluate(() => {
      // Try multiple selectors to find post links
      const selectors = [
        'a[href^="/p/"]',
        'article a[href*="/p/"]',
        'main article a[href*="/p/"]',
        'div[role="presentation"] a[href*="/p/"]'
      ];
      
      let links = [];
      for (const selector of selectors) {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
          links = Array.from(elements).map(link => link.href);
          break;
        }
      }
      
      // Remove duplicates
      return [...new Set(links)];
    });
    
    console.log(`Found ${postLinks.length} posts`);
    
    // If no posts found, try scrolling to load more content
    if (postLinks.length === 0) {
      console.log('No posts found initially, scrolling to load more content...');
      
      // Scroll down a few times to load more posts
      for (let i = 0; i < 5; i++) {
        await page.evaluate(() => {
          window.scrollBy(0, window.innerHeight);
        });
        await delay(1000); // Wait for content to load
      }
      
      // Try getting post links again
      const morePostLinks = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('a[href*="/p/"]'));
        return [...new Set(links.map(link => link.href))];
      });
      
      console.log(`Found ${morePostLinks.length} posts after scrolling`);
      
      if (morePostLinks.length > 0) {
        postLinks.push(...morePostLinks);
      }
    }
    
    console.log(`Total unique posts found: ${postLinks.length}`);
    
    if (postLinks.length === 0) {
      console.log('No posts found on the Jatin Jewellers Instagram profile.');
      console.log('Please check if the account exists and has public posts.');
      await browser.close();
      return;
    }
    
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
      
      try {
        // Add a random delay between requests to avoid rate limiting
        const delayTime = 1000 + Math.floor(Math.random() * 2000);
        console.log(`Waiting ${delayTime}ms before processing next post...`);
        await delay(delayTime);
        
        // Navigate to the post with a longer timeout
        await page.goto(postUrl, { 
          waitUntil: 'networkidle2',
          timeout: 30000 // 30 seconds timeout
        });
        
        // Get post data
        const postData = await page.evaluate(() => {
          // Try multiple selectors to find the image
          const imageSelectors = [
            'article img[style*="object-fit"]',
            'article div[role="button"] img',
            'article div[role="presentation"] img',
            'article img[crossorigin="anonymous"]',
            'img[alt*="Photo by"]',
            'img[alt*="Photo shared"]',
            'div[role="dialog"] img'
          ];
          
          let imageUrl = null;
          for (const selector of imageSelectors) {
            const img = document.querySelector(selector);
            if (img && img.src) {
              imageUrl = img.src;
              break;
            }
          }
          
          // Try multiple selectors to find the caption
          const captionSelectors = [
            'h1 + div',
            'article div[dir="auto"]',
            'article span[dir="auto"]',
            'div[role="dialog"] div[dir="auto"]',
            'ul li span'
          ];
          
          let caption = '';
          for (const selector of captionSelectors) {
            const element = document.querySelector(selector);
            if (element && element.textContent) {
              caption = element.textContent.trim();
              if (caption) break;
            }
          }
          
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
        
        try {
          // View image in new tab to download it
          const imageUrl = postData.imageUrl;
          const viewSource = await page.goto(imageUrl, { timeout: 30000 });
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
          
          console.log(`Successfully processed post: ${postUrl}`);
        } catch (imageError) {
          console.error(`Error downloading image from ${postUrl}:`, imageError.message);
        }
      } catch (postError) {
        console.error(`Error processing post ${postUrl}:`, postError.message);
      }
    }
    
    if (posts.length === 0) {
      console.log('No posts were successfully processed.');
      await browser.close();
      return;
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
    
    await fs.writeFile(path.join('src', 'lib', 'instagram.ts'), tsContent);
    console.log('Instagram utility file updated successfully');
    
    // Close browser
    await browser.close();
    
    console.log('Done! Instagram scraping completed successfully.');
    console.log(`Downloaded ${posts.length} posts from @jatinjewellershyd`);
  } catch (error) {
    console.error('Error scraping Instagram:', error);
    process.exit(1);
  }
}

// Run the script
scrapeInstagram(); 