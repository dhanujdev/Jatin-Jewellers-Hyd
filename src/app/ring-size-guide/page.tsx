import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ring Size Guide | Jatin Jewellers',
  description: 'Find your perfect ring size with our comprehensive ring sizing guide. Learn how to measure your ring size at home and understand international size conversions.',
};

export default function RingSizeGuide() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-cormorant font-light mb-6 text-black">
            Ring Size Guide
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-montserrat font-light">
            Finding your perfect ring size is essential for comfort and security. 
            Use our comprehensive guide to determine your exact size for a flawless fit.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80 mb-8 overflow-hidden">
            <Image 
              src="/images/ring-size/measuring-ring.jpg" 
              alt="Measuring Ring Size" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <p className="text-black/80 font-montserrat font-light mb-6">
            The perfect ring should slide over your knuckle with slight resistance and fit snugly on your finger without being too tight. 
            Temperature, time of day, and activities can all affect your finger size, so we recommend measuring your finger size:
          </p>
          <ul className="space-y-2 text-black/80 font-montserrat font-light mb-8">
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <p>At the end of the day when your fingers are at their largest</p>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <p>At normal body temperature (not too cold or hot)</p>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">•</span>
              <p>Measure 3-4 times for accuracy</p>
            </li>
          </ul>
        </div>

        {/* Measurement Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Method 1: Using Existing Ring */}
          <div>
            <div className="relative h-64 mb-8 overflow-hidden">
              <Image 
                src="/images/ring-size/existing-ring.jpg" 
                alt="Measuring with Existing Ring" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Method 1: Using an Existing Ring</h2>
            <ol className="space-y-4 text-black/80 font-montserrat font-light list-decimal pl-5">
              <li>
                <p>Select a ring that properly fits the intended finger</p>
              </li>
              <li>
                <p>Place the ring on a piece of paper and trace the inside circle</p>
              </li>
              <li>
                <p>Measure the diameter of this circle in millimeters</p>
              </li>
              <li>
                <p>Use our size chart below to find your ring size</p>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-white-off">
              <p className="text-sm text-black/60 italic">
                Note: Make sure the ring you're measuring is for the same finger and hand as the new ring will be worn on.
              </p>
            </div>
          </div>

          {/* Method 2: String or Paper Strip */}
          <div>
            <div className="relative h-64 mb-8 overflow-hidden">
              <Image 
                src="/images/ring-size/string-method.jpg" 
                alt="String Measurement Method" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <h2 className="text-2xl font-cormorant mb-4 text-black">Method 2: String or Paper Strip</h2>
            <ol className="space-y-4 text-black/80 font-montserrat font-light list-decimal pl-5">
              <li>
                <p>Cut a thin strip of paper or use a piece of string</p>
              </li>
              <li>
                <p>Wrap it around the base of your finger where the ring would sit</p>
              </li>
              <li>
                <p>Mark the point where the paper or string overlaps to form a complete circle</p>
              </li>
              <li>
                <p>Measure the length in millimeters</p>
              </li>
              <li>
                <p>Divide this length by 3.14 to get the diameter</p>
              </li>
              <li>
                <p>Use our size chart to find your ring size</p>
              </li>
            </ol>
          </div>
        </div>

        {/* Size Chart */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">International Ring Size Chart</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold text-white">
                  <th className="p-3 text-left font-montserrat font-medium">Diameter (mm)</th>
                  <th className="p-3 text-left font-montserrat font-medium">Circumference (mm)</th>
                  <th className="p-3 text-left font-montserrat font-medium">India/UK</th>
                  <th className="p-3 text-left font-montserrat font-medium">US/Canada</th>
                  <th className="p-3 text-left font-montserrat font-medium">Europe</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">14.9</td>
                  <td className="p-3 font-montserrat font-light">46.8</td>
                  <td className="p-3 font-montserrat font-light">H</td>
                  <td className="p-3 font-montserrat font-light">4</td>
                  <td className="p-3 font-montserrat font-light">47</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">15.3</td>
                  <td className="p-3 font-montserrat font-light">48.0</td>
                  <td className="p-3 font-montserrat font-light">I</td>
                  <td className="p-3 font-montserrat font-light">4.5</td>
                  <td className="p-3 font-montserrat font-light">48</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">15.7</td>
                  <td className="p-3 font-montserrat font-light">49.3</td>
                  <td className="p-3 font-montserrat font-light">J</td>
                  <td className="p-3 font-montserrat font-light">5</td>
                  <td className="p-3 font-montserrat font-light">49</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">16.1</td>
                  <td className="p-3 font-montserrat font-light">50.6</td>
                  <td className="p-3 font-montserrat font-light">K</td>
                  <td className="p-3 font-montserrat font-light">5.5</td>
                  <td className="p-3 font-montserrat font-light">50</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">16.5</td>
                  <td className="p-3 font-montserrat font-light">51.9</td>
                  <td className="p-3 font-montserrat font-light">L</td>
                  <td className="p-3 font-montserrat font-light">6</td>
                  <td className="p-3 font-montserrat font-light">51.5</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">16.9</td>
                  <td className="p-3 font-montserrat font-light">53.1</td>
                  <td className="p-3 font-montserrat font-light">M</td>
                  <td className="p-3 font-montserrat font-light">6.5</td>
                  <td className="p-3 font-montserrat font-light">52.5</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">17.3</td>
                  <td className="p-3 font-montserrat font-light">54.4</td>
                  <td className="p-3 font-montserrat font-light">N</td>
                  <td className="p-3 font-montserrat font-light">7</td>
                  <td className="p-3 font-montserrat font-light">54</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">17.7</td>
                  <td className="p-3 font-montserrat font-light">55.7</td>
                  <td className="p-3 font-montserrat font-light">O</td>
                  <td className="p-3 font-montserrat font-light">7.5</td>
                  <td className="p-3 font-montserrat font-light">55</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">18.1</td>
                  <td className="p-3 font-montserrat font-light">56.9</td>
                  <td className="p-3 font-montserrat font-light">P</td>
                  <td className="p-3 font-montserrat font-light">8</td>
                  <td className="p-3 font-montserrat font-light">57</td>
                </tr>
                <tr className="border-b border-black/10 hover:bg-white-off">
                  <td className="p-3 font-montserrat font-light">18.5</td>
                  <td className="p-3 font-montserrat font-light">58.1</td>
                  <td className="p-3 font-montserrat font-light">Q</td>
                  <td className="p-3 font-montserrat font-light">8.5</td>
                  <td className="p-3 font-montserrat font-light">58</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tips and Considerations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Special Considerations */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Special Considerations</h2>
            <div className="space-y-6 text-black/80 font-montserrat font-light">
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Wide Bands</h3>
                <p>
                  Wide bands ({'>'}6mm) tend to fit more snugly than narrow bands. Consider going up a half size for wide bands.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Knuckle Size</h3>
                <p>
                  If your knuckle is significantly larger than the base of your finger, consider a size that fits comfortably over your knuckle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Weather and Temperature</h3>
                <p>
                  Fingers tend to shrink in cold weather and expand in hot weather. Consider your local climate when choosing a size.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Dominant Hand</h3>
                <p>
                  The fingers on your dominant hand may be slightly larger. Measure the specific finger on the hand where you'll wear the ring.
                </p>
              </div>
            </div>
          </div>

          {/* Tips for Accurate Measurement */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Tips for Accurate Measurement</h2>
            <ul className="space-y-4 text-black/80 font-montserrat font-light">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Measure your finger 3-4 times on different days to account for daily fluctuations</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Avoid measuring when your hands are cold or hot</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Measure at the end of the day when your fingers are naturally at their largest</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>If you're between sizes, it's usually better to choose the larger size</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>For surprise gifts, try to borrow a ring that fits the intended finger</p>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <p>Consider the width of the band when determining size</p>
              </li>
            </ul>
            <div className="mt-8 p-4 bg-white-off">
              <p className="text-sm text-black/60">
                <strong>Remember:</strong> It's always better to have a ring slightly too large (which can be resized) than too small, which can be uncomfortable to wear.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Sizing Service */}
        <div className="text-center mb-16 bg-white-off p-8">
          <h2 className="text-2xl font-cormorant mb-6 text-black">Visit Us for Professional Sizing</h2>
          <p className="text-black/80 font-montserrat font-light max-w-3xl mx-auto mb-8">
            For the most accurate measurement, visit our store for a professional sizing. 
            Our experienced jewelers will ensure you get the perfect fit for your new ring 
            or resize your existing jewelry for optimal comfort.
          </p>
          <Link 
            href="tel:+919999999999" 
            className="inline-block bg-black hover:bg-gold text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Contact Us for Sizing
          </Link>
        </div>

        {/* Related Links */}
        <div className="border-t border-black/10 pt-12">
          <h3 className="text-xl font-cormorant mb-6 text-center text-black">Related Resources</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/jewelry-care" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Jewelry Care Guide
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/rings" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Explore Our Rings
            </Link>
            <span className="text-black/30">|</span>
            <Link href="/category/solitaire" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Solitaire Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 