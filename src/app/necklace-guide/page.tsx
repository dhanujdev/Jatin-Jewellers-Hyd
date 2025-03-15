import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Necklace & Pendant Guide | Jatin Jewellers',
  description: 'Discover the perfect diamond necklace or pendant with our comprehensive guide. Learn about chain types, pendant styles, and how to choose the ideal necklace length.',
};

export default function NecklaceGuide() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-cormorant font-light mb-6 text-black">
            Diamond Necklace & Pendant Guide
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-montserrat font-light">
            Find the perfect diamond necklace or pendant to complement your style and neckline. 
            Our comprehensive guide will help you select a piece that reflects your personal elegance.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80 mb-8 overflow-hidden">
            <Image 
              src="/images/necklace-guide/necklace-header.jpg" 
              alt="Diamond Necklaces" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <p className="text-black/80 font-montserrat font-light mb-6">
            A diamond necklace or pendant is more than just a beautiful accessory—it's a statement piece that draws attention 
            to your neckline and face. Whether you're looking for an everyday essential or a special occasion showstopper, 
            understanding the different styles, lengths, and settings will help you choose a piece that perfectly complements 
            your personal style and enhances your natural features.
          </p>
        </div>

        {/* Necklace Lengths */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Understanding Necklace Lengths</h2>
          
          <div className="relative h-96 md:h-80 mb-12 overflow-hidden">
            <Image 
              src="/images/necklace-guide/necklace-lengths.jpg" 
              alt="Necklace Length Guide" 
              fill
              className="object-contain"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Choker (14-16 inches)</h3>
              <p className="text-black/80 font-montserrat font-light">
                Sits tightly around the neck. Perfect for highlighting the collarbone and elongating the neck. 
                Ideal for both casual and formal settings, especially with open necklines.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Princess (17-19 inches)</h3>
              <p className="text-black/80 font-montserrat font-light">
                The most popular length, sitting at or just below the collarbone. Versatile and flattering for most necklines and face shapes. 
                Perfect for pendants and everyday wear.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Matinee (20-24 inches)</h3>
              <p className="text-black/80 font-montserrat font-light">
                Falls between the collarbone and the bust. Creates an elegant look that works well with both business and casual attire. 
                Excellent for larger pendants or statement pieces.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Opera (28-36 inches)</h3>
              <p className="text-black/80 font-montserrat font-light">
                Reaches below the bust, often to the mid-torso. Creates a dramatic, sophisticated look. 
                Can be worn as a single strand or doubled for a layered effect.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Rope (36+ inches)</h3>
              <p className="text-black/80 font-montserrat font-light">
                The longest style, hanging below the navel. Offers maximum versatility—can be worn as a single long strand, 
                doubled, or even tripled for different looks.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Adjustable Chains</h3>
              <p className="text-black/80 font-montserrat font-light">
                Many of our necklaces feature adjustable clasps, allowing you to customize the length for different outfits and occasions. 
                The perfect solution for versatile styling.
              </p>
            </div>
          </div>
        </div>

        {/* Chain Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Popular Chain Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Cable Chain */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/necklace-guide/cable-chain.jpg" 
                  alt="Cable Chain" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Cable Chain</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                The most classic and versatile chain, featuring uniform oval links connected in a simple pattern. 
                Its timeless design works well with any pendant and for any occasion.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Strong and durable</li>
                  <li>Available in various thicknesses</li>
                  <li>Classic, versatile appearance</li>
                  <li>Perfect for everyday wear</li>
                </ul>
              </div>
            </div>

            {/* Box Chain */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/necklace-guide/box-chain.jpg" 
                  alt="Box Chain" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Box Chain</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Features square links that create a smooth, sleek appearance. The geometric design catches light beautifully, 
                adding subtle sparkle even without a pendant.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Modern, architectural appearance</li>
                  <li>Lies flat against the skin</li>
                  <li>Excellent for heavier pendants</li>
                  <li>Resistant to kinking</li>
                </ul>
              </div>
            </div>

            {/* Rope Chain */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/necklace-guide/rope-chain.jpg" 
                  alt="Rope Chain" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Rope Chain</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Created from twisted metal links that resemble a rope, this chain offers a textured, dimensional look. 
                The twisted design creates beautiful light reflection and adds visual interest.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Highly reflective surface</li>
                  <li>Substantial, luxurious appearance</li>
                  <li>Strong and durable</li>
                  <li>Can be worn with or without a pendant</li>
                </ul>
              </div>
            </div>

            {/* Singapore Chain */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/necklace-guide/singapore-chain.jpg" 
                  alt="Singapore Chain" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Singapore Chain</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                A delicate chain with a unique twisted pattern that creates a diamond-cut effect. 
                The intricate design catches light from every angle, creating a continuous sparkle.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Features:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Elegant, feminine appearance</li>
                  <li>Exceptional sparkle</li>
                  <li>Lightweight and comfortable</li>
                  <li>Perfect for delicate pendants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pendant Styles */}
        <div className="bg-white-off p-8 mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Popular Pendant Styles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Solitaire Diamond</h3>
              <p className="text-black/80 font-montserrat font-light">
                A timeless classic featuring a single diamond. The simplicity highlights the beauty and brilliance 
                of the diamond itself. Available in various shapes and sizes.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Halo Design</h3>
              <p className="text-black/80 font-montserrat font-light">
                A center diamond surrounded by a circle of smaller diamonds. This design maximizes sparkle 
                and makes the center stone appear larger.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Three-Stone</h3>
              <p className="text-black/80 font-montserrat font-light">
                Featuring three diamonds in a row, often symbolizing past, present, and future. 
                Creates a balanced, harmonious look with exceptional brilliance.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Diamond Cross</h3>
              <p className="text-black/80 font-montserrat font-light">
                A meaningful symbol adorned with diamonds. Available in various designs from minimalist 
                to elaborate, combining spiritual significance with elegant beauty.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Initial/Monogram</h3>
              <p className="text-black/80 font-montserrat font-light">
                Personalized pendants featuring diamond-set initials or monograms. 
                A meaningful piece that combines personal significance with luxury.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Geometric Designs</h3>
              <p className="text-black/80 font-montserrat font-light">
                Modern pendants in shapes like circles, squares, or triangles set with diamonds. 
                Clean lines and contemporary appeal for the modern jewelry lover.
              </p>
            </div>
          </div>
        </div>

        {/* Choosing the Right Necklace */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Face & Neckline Considerations */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Choosing for Your Face & Neckline</h2>
            <div className="space-y-6 text-black/80 font-montserrat font-light">
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Round Face</h3>
                <p>
                  Longer necklaces (princess or matinee length) create a slimming, elongating effect. V-shaped pendants 
                  help create the illusion of length.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Long Face</h3>
                <p>
                  Choker or collar-length necklaces help create width and balance facial proportions. Round pendants 
                  complement and soften a long face.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Heart-Shaped Face</h3>
                <p>
                  Princess or matinee lengths with pendants that widen at the bottom balance a narrower chin. 
                  Chokers can also work well to add width to the lower part of the face.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Square Face</h3>
                <p>
                  Rounded or curved pendants and longer lengths help soften angular features. 
                  Avoid chokers which can emphasize a strong jawline.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Neckline Considerations</h3>
                <p>
                  Match your necklace to your neckline: V-necks pair well with V-shaped pendants, high necklines work with longer 
                  necklaces, and strapless or boat necks complement chokers or collar-length pieces.
                </p>
              </div>
            </div>
          </div>

          {/* Other Considerations */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Additional Considerations</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Height & Build</p>
                  <p>Petite individuals often look best in shorter, more delicate chains, while taller or larger-framed individuals can carry longer, more substantial pieces beautifully.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Neck Length</p>
                  <p>Those with shorter necks should avoid chokers and opt for princess or matinee lengths. Longer necks can showcase chokers and collar-length necklaces elegantly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Occasion & Wardrobe</p>
                  <p>Consider your lifestyle and typical attire. Versatile pieces that transition from day to evening offer the best value, while statement pieces may be reserved for special occasions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Layering Potential</p>
                  <p>If you enjoy layering necklaces, choose pieces of varying lengths that complement each other. Delicate chains with minimal pendants typically layer best.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Diamond Quality */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-6 text-center text-black">Understanding Diamond Quality in Necklaces</h2>
          <p className="text-black/80 font-montserrat font-light max-w-4xl mx-auto mb-8">
            When selecting a diamond necklace or pendant, consider these quality factors:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Cut Quality</h3>
              <p className="text-black/80 font-montserrat font-light">
                For pendants, cut is particularly important as it determines how the diamond catches and reflects light. 
                An excellent cut will ensure maximum brilliance and fire, even when viewed from a distance.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Clarity</h3>
              <p className="text-black/80 font-montserrat font-light">
                For necklaces, VS1-SI1 clarity grades offer excellent value, as minor inclusions are typically not visible 
                to the naked eye, especially at the distance necklaces are viewed.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Color</h3>
              <p className="text-black/80 font-montserrat font-light">
                The metal setting can influence how color is perceived. White metals like platinum or white gold pair well with 
                colorless diamonds (D-F), while yellow or rose gold can complement warmer diamond colors (G-J).
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Carat Weight</h3>
              <p className="text-black/80 font-montserrat font-light">
                For pendants, consider how the size proportionally relates to your neck and frame. A pendant that's too small may get lost, 
                while one that's too large may overwhelm your features.
              </p>
            </div>
          </div>
        </div>

        {/* Caring for Diamond Necklaces */}
        <div className="text-center mb-16 bg-white-off p-8">
          <h2 className="text-2xl font-cormorant mb-6 text-black">Caring for Your Diamond Necklace</h2>
          <p className="text-black/80 font-montserrat font-light max-w-3xl mx-auto mb-8">
            To maintain the brilliance of your diamond necklace, clean it regularly with mild soap and warm water. 
            Store it flat or hanging to prevent tangling, and check the clasp and settings periodically to ensure 
            everything is secure. For detailed care instructions, visit our Jewelry Care Guide.
          </p>
          <Link 
            href="/jewelry-care" 
            className="inline-block bg-black hover:bg-gold text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Jewelry Care Guide
          </Link>
        </div>

        {/* Related Links */}
        <div className="border-t border-black/10 pt-12">
          <h3 className="text-xl font-cormorant mb-6 text-center text-black">Explore Our Collections</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/category/pendants" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Diamond Pendants
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/solitaire" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Solitaire Collection
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/jewelry-care" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Jewelry Care Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 