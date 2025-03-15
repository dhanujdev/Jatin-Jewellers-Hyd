import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPostsByCategory, InstagramPost } from '@/lib/instagram';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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

// Map category slugs to display names
const categoryNames: {[key: string]: string} = {
  rings: 'Rings',
  earrings: 'Earrings',
  pendants: 'Pendants',
  bracelets: 'Bracelets',
  solitaire: 'Solitaire',
};

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const categoryName = categoryNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // Fetch posts for this category
  const products = await getPostsByCategory(slug);
  
  return (
    <>
      <Header />
      <main>
        {/* Category Hero */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair mb-4 text-black">
                {categoryName} Collection
              </h1>
              <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
              <p className="text-black/70 max-w-2xl mx-auto font-light">
                Explore our exquisite collection of {categoryName.toLowerCase()} crafted with precision and elegance
              </p>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-12 bg-white-off">
          <div className="container mx-auto px-4">
            {products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-black/70">No products found in this category. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => {
                  // Generate a product name from the caption
                  const productName = product.caption.split('#')[0].trim();
                  // Get a price based on the category
                  const category = product.category || 'uncategorized';
                  const price = mockPrices[category];
                  
                  return (
                    <div
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
                        <a 
                          href={product.permalink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-sm text-black/70 hover:text-gold transition-colors"
                        >
                          View on Instagram
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 