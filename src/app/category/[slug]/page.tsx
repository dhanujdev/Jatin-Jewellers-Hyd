import React from 'react';
import { getPostsByCategory } from '@/lib/instagram';
import CategoryClient from '@/components/category/CategoryClient';
import type { Metadata } from 'next';

// Map category slugs to display names
const categoryNames: {[key: string]: string} = {
  rings: 'Rings',
  earrings: 'Earrings',
  pendants: 'Pendants',
  bracelets: 'Bracelets',
  solitaire: 'Solitaire',
};

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = categoryNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${categoryName} Collection | Jatin Jewellers`,
    description: `Explore our exquisite collection of ${categoryName.toLowerCase()} crafted with precision and elegance at Jatin Jewellers.`,
  };
}

// In Next.js 15, params is now a Promise that needs to be awaited
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = categoryNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // Fetch posts for this category
  const products = await getPostsByCategory(slug);
  
  return <CategoryClient slug={slug} categoryName={categoryName} products={products} />;
} 