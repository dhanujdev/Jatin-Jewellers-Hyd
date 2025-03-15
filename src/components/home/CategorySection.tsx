import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchInstagramPosts, InstagramPost } from '@/lib/instagram';

// Define the categories we want to display
const categoryNames = ["rings", "earrings", "pendants", "bracelets"];

export default function CategorySection() {
  const [categories, setCategories] = useState<{[key: string]: InstagramPost}>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryImages = async () => {
      try {
        const posts = await fetchInstagramPosts();
        
        // Get one representative image for each category
        const categoryImages: {[key: string]: InstagramPost} = {};
        
        // For each category, find the first post that matches
        categoryNames.forEach(categoryName => {
          const post = posts.find(p => p.category === categoryName);
          if (post) {
            categoryImages[categoryName] = post;
          }
        });
        
        setCategories(categoryImages);
      } catch (error) {
        console.error('Error loading category images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryImages();
  }, []);

  // Show loading state while fetching posts
  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
              Shop by Category
            </h2>
            <div className="w-24 h-px bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {categoryNames.map((category) => (
              <div key={category} className="h-64 md:h-72 bg-black/5 flex items-center justify-center">
                <div className="text-gold">Loading {category}...</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
            Shop by Category
          </h2>
          <div className="w-24 h-px bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categoryNames.map((categoryName) => {
            const post = categories[categoryName];
            
            // If we don't have an image for this category, show a placeholder
            if (!post) {
              return (
                <Link
                  href={`/category/${categoryName}`}
                  key={categoryName}
                  className="group relative overflow-hidden elegant-shadow transition-all duration-300 hover:shadow-lg bg-black/5"
                >
                  <div className="relative h-64 md:h-72 w-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300" />
                    <div className="absolute bottom-0 w-full p-5 text-center transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                      <h3 className="text-xl font-playfair text-white group-hover:text-gold transition-colors capitalize">{categoryName}</h3>
                    </div>
                  </div>
                </Link>
              );
            }
            
            return (
              <Link
                href={`/category/${categoryName}`}
                key={categoryName}
                className="group relative overflow-hidden elegant-shadow transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 md:h-72 w-full">
                  <Image
                    src={post.media_url}
                    alt={categoryName}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  <div className="absolute bottom-0 w-full p-5 text-center transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                    <h3 className="text-xl font-playfair text-white group-hover:text-gold transition-colors capitalize">{categoryName}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
