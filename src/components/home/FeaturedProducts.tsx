"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchInstagramPosts, InstagramPost } from '@/lib/instagram';

// Format price to Indian Rupees
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

// Mock prices for demonstration - in a real app, these would come from your product database
const mockPrices: {[key: string]: number} = {
  rings: 89999,
  earrings: 69999,
  pendants: 79999,
  bracelets: 99999,
  solitaire: 149999,
  uncategorized: 59999,
};

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const posts = await fetchInstagramPosts();
        // Get the 8 most recent posts
        const sortedPosts = posts
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 8);
        
        setFeaturedProducts(sortedPosts);
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  // Show loading state while fetching posts
  if (loading) {
    return (
      <section className="py-20 bg-white-off">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
              Featured Products
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
            <p className="text-black/70 max-w-2xl mx-auto font-light">
              Discover our most popular diamond jewelry pieces, crafted with precision and elegance
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array(8).fill(0).map((_, index) => (
              <div key={index} className="h-64 bg-black/5 flex items-center justify-center">
                <div className="text-gold">Loading...</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white-off">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
            Featured Products
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-light">
            Discover our most popular diamond jewelry pieces, crafted with precision and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => {
            // Generate a product name from the caption
            const productName = product.caption.split('#')[0].trim();
            // Get a price based on the category, defaulting to 'uncategorized' if category is undefined
            const category = product.category || 'uncategorized';
            const price = mockPrices[category];
            
            return (
              <Link
                href={`/category/${category}`}
                key={product.id}
                className="group bg-white elegant-shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.media_url}
                    alt={productName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-black font-medium mb-2 group-hover:text-gold transition-colors">
                    {productName}
                  </h3>
                  <p className="text-gold font-semibold">{formatPrice(price)}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/category/rings"
            className="inline-block bg-black hover:bg-gold text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
