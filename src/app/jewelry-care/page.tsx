import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jewelry Care Guide | Jatin Jewellers',
  description: 'Learn how to properly care for your precious diamond jewelry with our comprehensive care guide. Expert tips for cleaning, storing, and maintaining your jewelry.',
};

export default function JewelryCare() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-cormorant font-light mb-6 text-black">
            Jewelry Care Guide
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-montserrat font-light">
            Proper care ensures your precious jewelry remains as beautiful as the day you received it. 
            Follow our expert guidelines to maintain the brilliance and longevity of your Jatin Jewellers pieces.
          </p>
        </div>

        {/* Care Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Daily Care */}
          <div>
            <div className="relative h-80 mb-8 overflow-hidden">
              <Image 
                src="/images/jewelry-care/daily-care.jpg" 
                alt="Daily Jewelry Care" 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Daily Care & Handling</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Always remove your jewelry before showering, swimming, or engaging in physical activities.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Apply perfumes, lotions, and hairsprays before putting on your jewelry to prevent chemical buildup.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Handle diamond jewelry by the band or edges, not by the gemstone, to avoid oil transfer from fingertips.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Remove rings when washing hands to prevent soap residue buildup, which can dull the brilliance of diamonds.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Avoid wearing jewelry while doing household chores, gardening, or any activity that might expose it to harsh chemicals.</p>
              </li>
            </ul>
          </div>

          {/* Cleaning */}
          <div>
            <div className="relative h-80 mb-8 overflow-hidden">
              <Image 
                src="/images/jewelry-care/cleaning.jpg" 
                alt="Jewelry Cleaning" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Cleaning Your Jewelry</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Clean your diamond jewelry regularly using a solution of mild dish soap and warm water.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Gently brush with a soft toothbrush to remove dirt from hard-to-reach areas.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Rinse thoroughly with warm water and pat dry with a soft, lint-free cloth.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>For platinum and gold settings, use specialized jewelry cleaners designed for these metals.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Avoid using harsh chemicals, bleach, or abrasive cleaners that can damage the metal settings.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>We recommend professional cleaning at Jatin Jewellers every 6 months to maintain optimal brilliance.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Storage */}
          <div>
            <div className="relative h-80 mb-8 overflow-hidden">
              <Image 
                src="/images/jewelry-care/storage.jpg" 
                alt="Jewelry Storage" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Proper Storage</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Store each piece separately in soft pouches or lined jewelry boxes to prevent scratching.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Keep diamond jewelry away from other gemstones, as diamonds can scratch softer stones.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Store in a cool, dry place away from direct sunlight and extreme temperature changes.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Consider using anti-tarnish strips in your jewelry box to prevent oxidation of metal settings.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>For valuable pieces, consider a home safe or a bank safety deposit box for long-term storage.</p>
              </li>
            </ul>
          </div>

          {/* Maintenance */}
          <div>
            <div className="relative h-80 mb-8 overflow-hidden">
              <Image 
                src="/images/jewelry-care/maintenance.jpg" 
                alt="Jewelry Maintenance" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Regular Maintenance</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Inspect your jewelry regularly for loose stones, worn prongs, or damaged clasps.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Have your diamond jewelry professionally checked and serviced annually.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Re-plating may be necessary for white gold pieces every few years to maintain their luster.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Consider insurance for valuable pieces to protect against loss, theft, or damage.</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Keep your original documentation and certificates in a safe place for insurance and resale purposes.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Special Care Instructions */}
        <div className="bg-white-off p-8 mb-16">
          <h2 className="text-2xl font-cormorant mb-6 text-center text-black">Special Care for Different Jewelry Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Diamond Rings</h3>
              <p className="text-black/80 font-montserrat font-light">
                Remove when applying hand cream. Avoid wearing while doing manual work. 
                Check prongs regularly as they can loosen with daily wear.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Diamond Earrings</h3>
              <p className="text-black/80 font-montserrat font-light">
                Clean backs regularly as they can accumulate oils and skin cells. 
                Check and tighten butterfly backs periodically to prevent loss.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Diamond Necklaces</h3>
              <p className="text-black/80 font-montserrat font-light">
                Store flat to prevent tangling. Apply perfume before wearing to avoid 
                chemical contact. Check clasps regularly for wear.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Services */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-cormorant mb-6 text-black">Professional Care Services</h2>
          <p className="text-black/80 font-montserrat font-light max-w-3xl mx-auto mb-8">
            At Jatin Jewellers, we offer comprehensive care services to keep your precious pieces 
            looking their best. Our expert jewelers provide cleaning, polishing, prong tightening, 
            stone replacement, and re-sizing services.
          </p>
          <Link 
            href="tel:+919999999999" 
            className="inline-block bg-black hover:bg-gold text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Contact Us for Services
          </Link>
        </div>

        {/* Related Links */}
        <div className="border-t border-black/10 pt-12">
          <h3 className="text-xl font-cormorant mb-6 text-center text-black">Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/ring-size-guide" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Ring Size Guide
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/rings" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Explore Our Rings
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/earrings" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Explore Our Earrings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 