import React from 'react';
import type { Metadata } from 'next';

// Map category slugs to display names for metadata
const categoryNames: {[key: string]: string} = {
  rings: 'Rings',
  earrings: 'Earrings',
  pendants: 'Pendants',
  bracelets: 'Bracelets',
  solitaire: 'Solitaire',
};

// Generate metadata for each category page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const categoryName = categoryNames[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${categoryName} Collection | Jatin Jewellers`,
    description: `Explore our exquisite collection of ${categoryName.toLowerCase()} crafted with precision and elegance at Jatin Jewellers.`,
  };
}

// In Next.js 15, layout components don't directly receive params as props
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
} 