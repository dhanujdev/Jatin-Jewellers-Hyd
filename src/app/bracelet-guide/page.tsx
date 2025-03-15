import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bracelet & Bangle Guide | Jatin Jewellers',
  description: 'Discover the perfect diamond bracelet or bangle with our comprehensive guide. Learn about different styles, proper sizing, and how to choose pieces that complement your style.',
};

export default function BraceletGuide() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-cormorant font-light mb-6 text-black">
            Diamond Bracelet & Bangle Guide
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-montserrat font-light">
            Discover the perfect diamond bracelet or bangle to elevate your style. 
            Our comprehensive guide will help you select a piece that combines elegance with personal expression.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80 mb-8 overflow-hidden">
            <Image 
              src="/images/bracelet-guide/bracelet-header.jpg" 
              alt="Diamond Bracelets" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <p className="text-black/80 font-montserrat font-light mb-6">
            Diamond bracelets and bangles are versatile pieces that add sophistication to any outfit, from casual daywear to formal evening attire. 
            Whether worn alone as a statement piece or layered with other bracelets for a more contemporary look, the right bracelet can become 
            a signature element of your personal style. This guide will help you navigate the various styles, materials, and considerations 
            to find the perfect bracelet for your collection.
          </p>
        </div>

        {/* Bracelet Styles */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Popular Bracelet Styles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tennis Bracelet */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/tennis-bracelet.jpg" 
                  alt="Diamond Tennis Bracelet" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Tennis Bracelet</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                A classic design featuring a continuous line of diamonds set in a flexible band. 
                Known for its elegant simplicity and versatility, the tennis bracelet offers timeless appeal.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Everyday luxury</li>
                  <li>Both casual and formal occasions</li>
                  <li>Layering with other bracelets</li>
                  <li>A timeless investment piece</li>
                </ul>
              </div>
            </div>

            {/* Bangle */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/diamond-bangle.jpg" 
                  alt="Diamond Bangle" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Diamond Bangle</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                A rigid bracelet with a circular or oval shape that slips over the hand. 
                Diamond bangles range from minimalist designs with a few accent stones to fully encrusted statement pieces.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Making a bold statement</li>
                  <li>Stacking multiple bangles together</li>
                  <li>Creating an elegant jingling sound when moving</li>
                  <li>Complementing both traditional and contemporary outfits</li>
                </ul>
              </div>
            </div>

            {/* Charm Bracelet */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/charm-bracelet.jpg" 
                  alt="Diamond Charm Bracelet" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Charm Bracelet</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                A chain or link bracelet adorned with dangling charms, some featuring diamonds or other gemstones. 
                These personalized pieces tell a story and can be customized over time.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expressing personal style and memories</li>
                  <li>Creating a unique, evolving piece</li>
                  <li>Commemorating special occasions</li>
                  <li>Gifting (with the option to add charms later)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* Cuff Bracelet */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/cuff-bracelet.jpg" 
                  alt="Diamond Cuff Bracelet" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Cuff Bracelet</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                A rigid, wide bracelet with an opening that allows it to slip onto the wrist. 
                Diamond cuffs make a bold statement and can feature intricate designs or minimalist elegance.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Making a dramatic fashion statement</li>
                  <li>Special occasions and formal events</li>
                  <li>Showcasing artistic or architectural designs</li>
                  <li>Complementing sleeveless or short-sleeved outfits</li>
                </ul>
              </div>
            </div>

            {/* Link Bracelet */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/link-bracelet.jpg" 
                  alt="Diamond Link Bracelet" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Link Bracelet</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Features connected links of various shapes and sizes, often with diamond accents or pavé settings. 
                These bracelets offer a balance of structure and flexibility.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Versatile day-to-night wear</li>
                  <li>Adding texture and dimension</li>
                  <li>Combining metals (in two-tone designs)</li>
                  <li>Creating a substantial yet comfortable feel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bracelet Settings */}
        <div className="bg-white-off p-8 mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Diamond Settings for Bracelets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Prong Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                Metal claws hold each diamond in place, allowing maximum light exposure and brilliance. 
                Common in tennis bracelets, this setting showcases each diamond individually.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Channel Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                Diamonds are set in a row between two parallel metal channels, creating a smooth, 
                streamlined look. Offers excellent protection for the stones.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Pavé Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                Small diamonds set closely together with minimal metal visible, creating a continuous 
                sparkle effect. Creates a luxurious, diamond-encrusted appearance.
              </p>
            </div>
          </div>
        </div>

        {/* Bracelet Sizing */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Finding Your Perfect Bracelet Size</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="relative h-80 mb-8 overflow-hidden">
                <Image 
                  src="/images/bracelet-guide/bracelet-sizing.jpg" 
                  alt="Bracelet Sizing" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-4 text-black">How to Measure Your Wrist</h3>
              <ol className="space-y-4 text-black/80 font-montserrat font-light list-decimal pl-5">
                <li>
                  <p>Wrap a flexible measuring tape or a strip of paper around your wrist, just below the wrist bone.</p>
                </li>
                <li>
                  <p>If using paper, mark where it overlaps and measure the length with a ruler.</p>
                </li>
                <li>
                  <p>Add 1.5-2 cm (0.5-0.75 inches) to your wrist measurement for a comfortable fit.</p>
                </li>
                <li>
                  <p>For bangles, measure the widest part of your hand with your thumb tucked in against your palm.</p>
                </li>
              </ol>
              <div className="mt-6 p-4 bg-white-off">
                <p className="text-sm text-black/60 italic">
                  Note: Different bracelet styles require different fits. Tennis bracelets should be snug but not tight, 
                  while bangles need to fit over the widest part of your hand.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-cormorant mb-6 text-black">Standard Bracelet Sizes</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gold text-white">
                      <th className="p-3 text-left font-montserrat font-medium">Wrist Size</th>
                      <th className="p-3 text-left font-montserrat font-medium">Recommended Bracelet Length</th>
                      <th className="p-3 text-left font-montserrat font-medium">Fit Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">14-15 cm (5.5-6 in)</td>
                      <td className="p-3 font-montserrat font-light">16-17 cm (6.5-6.75 in)</td>
                      <td className="p-3 font-montserrat font-light">Snug fit</td>
                    </tr>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">16-17 cm (6.25-6.75 in)</td>
                      <td className="p-3 font-montserrat font-light">18-19 cm (7-7.5 in)</td>
                      <td className="p-3 font-montserrat font-light">Standard fit</td>
                    </tr>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">18-19 cm (7-7.5 in)</td>
                      <td className="p-3 font-montserrat font-light">20-21 cm (7.75-8.25 in)</td>
                      <td className="p-3 font-montserrat font-light">Loose fit</td>
                    </tr>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">20-21 cm (7.75-8.25 in)</td>
                      <td className="p-3 font-montserrat font-light">22-23 cm (8.5-9 in)</td>
                      <td className="p-3 font-montserrat font-light">Extra loose fit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-cormorant mt-10 mb-6 text-black">Bangle Sizing</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gold text-white">
                      <th className="p-3 text-left font-montserrat font-medium">Hand Circumference</th>
                      <th className="p-3 text-left font-montserrat font-medium">Recommended Bangle Size</th>
                      <th className="p-3 text-left font-montserrat font-medium">Standard Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">15-16.5 cm (6-6.5 in)</td>
                      <td className="p-3 font-montserrat font-light">Small</td>
                      <td className="p-3 font-montserrat font-light">5.5-6 cm diameter</td>
                    </tr>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">17-18.5 cm (6.75-7.25 in)</td>
                      <td className="p-3 font-montserrat font-light">Medium</td>
                      <td className="p-3 font-montserrat font-light">6.5-7 cm diameter</td>
                    </tr>
                    <tr className="border-b border-black/10 hover:bg-white-off">
                      <td className="p-3 font-montserrat font-light">19-20.5 cm (7.5-8 in)</td>
                      <td className="p-3 font-montserrat font-light">Large</td>
                      <td className="p-3 font-montserrat font-light">7.5-8 cm diameter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Choosing the Right Bracelet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Style Considerations */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Choosing for Your Style & Occasion</h2>
            <div className="space-y-6 text-black/80 font-montserrat font-light">
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">For Everyday Wear</h3>
                <p>
                  Choose comfortable, secure designs that won't catch on clothing or interfere with daily activities. 
                  Tennis bracelets, thin bangles, and link bracelets with secure clasps are excellent options.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">For Special Occasions</h3>
                <p>
                  Make a statement with more elaborate designs featuring larger diamonds or unique settings. 
                  Wider cuffs, statement bangles, and tennis bracelets with larger stones create a dramatic effect.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">For Stacking</h3>
                <p>
                  If you enjoy wearing multiple bracelets together, choose pieces with varying textures and widths but 
                  complementary designs. Mix metals thoughtfully and consider how pieces will sit together on your wrist.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">For Gifting</h3>
                <p>
                  Tennis bracelets and bangles make timeless gifts that can be treasured for generations. 
                  Consider adjustable designs if you're unsure of the recipient's exact size.
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
                  <p className="font-medium">Wrist Size & Proportion</p>
                  <p>Consider the width of your wrist when choosing bracelet thickness. Delicate designs complement smaller wrists, while wider styles can balance larger wrists.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Metal Choice</p>
                  <p>Select metals that complement your skin tone and existing jewelry collection. White gold and platinum have a modern appeal, while yellow gold offers timeless warmth.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Lifestyle Considerations</p>
                  <p>If you have an active lifestyle or work with your hands, choose secure designs with safety clasps and consider more protective settings like bezel or channel.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Versatility</p>
                  <p>For maximum value, select pieces that transition easily between casual and formal settings. Classic designs in neutral metals offer the greatest versatility.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Diamond Quality */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-6 text-center text-black">Understanding Diamond Quality in Bracelets</h2>
          <p className="text-black/80 font-montserrat font-light max-w-4xl mx-auto mb-8">
            When selecting a diamond bracelet, consider these quality factors:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Cut Quality</h3>
              <p className="text-black/80 font-montserrat font-light">
                For maximum sparkle, prioritize excellent cut quality, especially for tennis bracelets where 
                multiple diamonds create a continuous line of brilliance.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Clarity</h3>
              <p className="text-black/80 font-montserrat font-light">
                VS1-SI1 clarity grades offer excellent value for bracelets, as minor inclusions are typically not visible 
                to the naked eye, especially in smaller stones often used in bracelet designs.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Color</h3>
              <p className="text-black/80 font-montserrat font-light">
                For white gold or platinum settings, consider G-I color diamonds for an excellent balance of quality and value. 
                For yellow gold settings, J-K colors can appear white while offering significant savings.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Total Carat Weight</h3>
              <p className="text-black/80 font-montserrat font-light">
                Consider the total carat weight distributed across all diamonds. In tennis bracelets, consistent stone size 
                creates a harmonious look, while graduated sizes can create a dynamic effect.
              </p>
            </div>
          </div>
        </div>

        {/* Caring for Diamond Bracelets */}
        <div className="text-center mb-16 bg-white-off p-8">
          <h2 className="text-2xl font-cormorant mb-6 text-black">Caring for Your Diamond Bracelet</h2>
          <p className="text-black/80 font-montserrat font-light max-w-3xl mx-auto mb-8">
            To maintain the brilliance of your diamond bracelet, clean it regularly with mild soap and warm water. 
            Check clasps and settings periodically to ensure all diamonds are secure. Remove bracelets during 
            activities that might cause damage, and store them separately to prevent scratching.
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
            <Link href="/category/bracelets" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Diamond Bracelets
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/bangles" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Diamond Bangles
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