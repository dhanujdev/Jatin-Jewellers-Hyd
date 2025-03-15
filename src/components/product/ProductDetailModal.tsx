"use client";

import React from 'react';
import Image from 'next/image';
import { X, Instagram, MessageCircle } from 'lucide-react';
import { InstagramPost } from '@/lib/instagram';

// Format price to Indian Rupees
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

// Define a type for product details
interface ProductDetails {
  description: string;
  weight: string;
  material: string;
  diamondCarat: string;
  diamondClarity: string;
  diamondColor: string;
  diamondCut: string;
  designDetails: string;
  careInstructions: string;
}

// Mock product details - in a real app, these would come from your product database
const mockProductDetails: {[key: string]: ProductDetails} = {
  rings: {
    description: "Exquisite diamond ring crafted with precision and elegance. Perfect for special occasions or as a timeless gift.",
    weight: "2.5 grams",
    material: "18K Gold",
    diamondCarat: "0.75 carat",
    diamondClarity: "VS1",
    diamondColor: "E",
    diamondCut: "Excellent",
    designDetails: "Halo setting with micropavé band",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  },
  earrings: {
    description: "Stunning diamond earrings that add a touch of sophistication to any outfit. Designed for everyday luxury.",
    weight: "3.2 grams",
    material: "18K White Gold",
    diamondCarat: "1.0 carat total",
    diamondClarity: "VS2",
    diamondColor: "F",
    diamondCut: "Excellent",
    designDetails: "Drop style with secure butterfly backs",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  },
  pendants: {
    description: "Elegant diamond pendant that captures light beautifully. A versatile piece that complements any neckline.",
    weight: "1.8 grams",
    material: "18K Rose Gold",
    diamondCarat: "0.5 carat",
    diamondClarity: "VVS2",
    diamondColor: "D",
    diamondCut: "Excellent",
    designDetails: "Solitaire pendant with delicate chain",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  },
  bracelets: {
    description: "Luxurious diamond bracelet that wraps your wrist in brilliance. A statement piece for special occasions.",
    weight: "5.7 grams",
    material: "18K Gold",
    diamondCarat: "2.0 carats total",
    diamondClarity: "VS1-VS2",
    diamondColor: "F-G",
    diamondCut: "Excellent",
    designDetails: "Tennis bracelet with secure clasp",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  },
  solitaire: {
    description: "Breathtaking diamond solitaire that symbolizes eternal love. The perfect choice for engagements and celebrations.",
    weight: "3.0 grams",
    material: "Platinum",
    diamondCarat: "1.5 carat",
    diamondClarity: "IF",
    diamondColor: "D",
    diamondCut: "Ideal",
    designDetails: "Classic four-prong setting on a slim band",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  },
  uncategorized: {
    description: "Beautiful diamond jewelry piece crafted with attention to detail. A perfect addition to your collection.",
    weight: "2.0 grams",
    material: "18K Gold",
    diamondCarat: "0.5 carat",
    diamondClarity: "VS1",
    diamondColor: "F",
    diamondCut: "Very Good",
    designDetails: "Contemporary design with classic elements",
    careInstructions: "Clean with mild soap and warm water. Store in a jewelry box when not in use."
  }
};

// Mock prices for demonstration
const mockPrices: {[key: string]: number} = {
  rings: 89999,
  earrings: 69999,
  pendants: 79999,
  bracelets: 99999,
  solitaire: 149999,
  uncategorized: 59999,
};

interface ProductDetailModalProps {
  product: InstagramPost;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!isOpen) return null;
  
  // Generate a product name from the caption
  const productName = product.caption.split('#')[0].trim() || "Exquisite Diamond Jewelry";
  
  // Get details based on the category
  const category = product.category || 'uncategorized';
  const price = mockPrices[category];
  const details = mockProductDetails[category];
  
  // Generate WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hi Jatin Jewellers, I'm interested in this ${category} (${productName}) that I saw on your website. Can you provide more information?`
  );
  
  // Instagram username
  const instagramUsername = 'jatinjewellershyd';
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-black/60 hover:text-black transition-colors z-10"
        >
          <X size={24} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative h-[300px] md:h-full min-h-[400px] bg-white-off">
            <Image
              src={product.media_url}
              alt={productName}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-playfair mb-2 text-black">{productName}</h2>
            <p className="text-gold text-xl font-semibold mb-6">{formatPrice(price)}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/60 mb-2">Description</h3>
                <p className="text-black/80">{details.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Material</h3>
                  <p className="text-black/80">{details.material}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Weight</h3>
                  <p className="text-black/80">{details.weight}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Diamond Carat</h3>
                  <p className="text-black/80">{details.diamondCarat}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Diamond Clarity</h3>
                  <p className="text-black/80">{details.diamondClarity}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Diamond Color</h3>
                  <p className="text-black/80">{details.diamondColor}</p>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black/60 mb-1">Diamond Cut</h3>
                  <p className="text-black/80">{details.diamondCut}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/60 mb-2">Design Details</h3>
                <p className="text-black/80">{details.designDetails}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black/60 mb-2">Care Instructions</h3>
                <p className="text-black/80">{details.careInstructions}</p>
              </div>
              
              {/* Contact Buttons */}
              <div className="pt-4 space-y-3">
                <h3 className="text-sm uppercase tracking-wider text-black/60 mb-2">Interested in this piece?</h3>
                
                <a 
                  href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-md hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>Ask on WhatsApp</span>
                </a>
                
                <div className="space-y-2">
                  <a 
                    href="https://www.instagram.com/direct/t/jatinjewellershyd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white py-3 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Instagram size={18} />
                    <span>Message me on Instagram</span>
                  </a>
                  <p className="text-xs text-black/60 text-center">
                    Opens Instagram direct message to Jatin Jewellers. Please mention this {category} in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 