import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earring Guide | Jatin Jewellers',
  description: 'Discover the perfect diamond earrings with our comprehensive guide. Learn about different styles, settings, and how to choose earrings that complement your face shape.',
};

export default function EarringGuide() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-cormorant font-light mb-6 text-black">
            Diamond Earring Guide
          </h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-montserrat font-light">
            Discover the perfect diamond earrings to complement your style and face shape. 
            Our comprehensive guide will help you navigate the world of fine earrings with confidence.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-80 mb-8 overflow-hidden">
            <Image 
              src="/images/earring-guide/earring-header.jpg" 
              alt="Diamond Earrings" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <p className="text-black/80 font-montserrat font-light mb-6">
            Diamond earrings are a timeless addition to any jewelry collection, offering versatility and elegance for everyday wear and special occasions. 
            From classic studs to dramatic chandeliers, the right pair of earrings can enhance your features, complement your outfit, and express your personal style.
          </p>
        </div>

        {/* Earring Styles */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Popular Earring Styles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Stud Earrings */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/earring-guide/stud-earrings.jpg" 
                  alt="Diamond Stud Earrings" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Stud Earrings</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                The most versatile and timeless style, diamond studs sit directly on the earlobe without any drop. 
                They range from delicate everyday pieces to statement solitaires.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Everyday wear</li>
                  <li>All face shapes</li>
                  <li>Professional settings</li>
                  <li>First diamond earring purchase</li>
                </ul>
              </div>
            </div>

            {/* Drop Earrings */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/earring-guide/drop-earrings.jpg" 
                  alt="Diamond Drop Earrings" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Drop Earrings</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Extending below the earlobe, drop earrings feature a simple, elegant design that adds 
                movement and catches the light beautifully.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Evening events</li>
                  <li>Round and square face shapes</li>
                  <li>Adding length to the face</li>
                  <li>Balancing strong facial features</li>
                </ul>
              </div>
            </div>

            {/* Hoop Earrings */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/earring-guide/hoop-earrings.jpg" 
                  alt="Diamond Hoop Earrings" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Hoop Earrings</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Classic and contemporary, diamond hoops create a circular shape from the front to the back of the earlobe. 
                They range from small huggies to large statement pieces.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Versatile day-to-night wear</li>
                  <li>Heart and oval face shapes</li>
                  <li>Adding width to narrow faces</li>
                  <li>Modern, fashion-forward look</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {/* Chandelier Earrings */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/earring-guide/chandelier-earrings.jpg" 
                  alt="Diamond Chandelier Earrings" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Chandelier Earrings</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Dramatic and elaborate, chandelier earrings cascade down in a tiered design that resembles a chandelier. 
                These statement pieces often feature multiple diamonds in intricate patterns.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Special occasions and formal events</li>
                  <li>Square and round face shapes</li>
                  <li>Creating a glamorous, sophisticated look</li>
                  <li>Complementing updo hairstyles</li>
                </ul>
              </div>
            </div>

            {/* Jacket Earrings */}
            <div>
              <div className="relative h-64 mb-6 overflow-hidden">
                <Image 
                  src="/images/earring-guide/jacket-earrings.jpg" 
                  alt="Diamond Jacket Earrings" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <h3 className="text-xl font-cormorant mb-3 text-black">Jacket Earrings</h3>
              <p className="text-black/80 font-montserrat font-light mb-4">
                Innovative and versatile, jacket earrings feature a stud that passes through the earlobe with a decorative "jacket" 
                that attaches to the back, creating the appearance of a more elaborate earring.
              </p>
              <div className="space-y-2 text-black/80 font-montserrat font-light">
                <p className="font-medium text-gold">Perfect for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Versatile styling options</li>
                  <li>All face shapes</li>
                  <li>Those seeking multiple looks from one piece</li>
                  <li>Modern, innovative jewelry lovers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Diamond Settings */}
        <div className="bg-white-off p-8 mb-16">
          <h2 className="text-2xl font-cormorant mb-8 text-center text-black">Diamond Settings for Earrings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Prong Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                Metal claws hold the diamond in place, allowing maximum light exposure and brilliance. 
                Common in stud earrings, this setting showcases the diamond's full beauty.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Bezel Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                A metal rim surrounds the diamond, offering secure protection and a sleek, 
                contemporary look. Ideal for active lifestyles.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-cormorant mb-4 text-gold">Pavé Setting</h3>
              <p className="text-black/80 font-montserrat font-light">
                Small diamonds set closely together create a continuous sparkle effect. 
                This setting maximizes brilliance and creates a luxurious appearance.
              </p>
            </div>
          </div>
        </div>

        {/* Choosing the Right Earrings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Face Shape Considerations */}
          <div>
            <h2 className="text-2xl font-cormorant mb-6 text-black">Choosing Earrings for Your Face Shape</h2>
            <div className="space-y-6 text-black/80 font-montserrat font-light">
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Oval Face</h3>
                <p>
                  This balanced shape works well with most earring styles. Try teardrop and chandelier designs to accentuate your natural proportions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Round Face</h3>
                <p>
                  Long, linear earrings like drops and chandeliers create the illusion of length and slimness. Avoid round hoops which can emphasize fullness.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Square Face</h3>
                <p>
                  Soft, curved designs like hoops and oval drops help soften angular features. Avoid geometric shapes that echo your face's angles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Heart-Shaped Face</h3>
                <p>
                  Wider at the top and narrower at the chin, this face shape is complemented by drop earrings that widen at the bottom, creating balance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant text-gold mb-2">Diamond-Shaped Face</h3>
                <p>
                  With prominent cheekbones and a narrower forehead and jawline, this face shape pairs well with studs and short drops that don't compete with your natural angles.
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
                  <p className="font-medium">Hair Length and Style</p>
                  <p>Short hair and updos showcase earrings more prominently, while long, loose hair may partially conceal them. Consider your typical hairstyle when selecting earring size and style.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Skin Tone</p>
                  <p>White gold and platinum settings complement cool skin tones, while yellow and rose gold enhance warm skin tones. The metal choice can affect how the diamonds appear against your skin.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Occasion and Lifestyle</p>
                  <p>Consider where and how often you'll wear your earrings. Secure backs are essential for active lifestyles, while elaborate designs may be reserved for special occasions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <p className="font-medium">Comfort</p>
                  <p>Heavier earrings can cause discomfort over time. If you're sensitive to weight, opt for lighter designs or earrings with supportive backs that distribute weight evenly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Diamond Quality */}
        <div className="mb-16">
          <h2 className="text-2xl font-cormorant mb-6 text-center text-black">Understanding Diamond Quality in Earrings</h2>
          <p className="text-black/80 font-montserrat font-light max-w-4xl mx-auto mb-8">
            When selecting diamond earrings, consider the 4Cs: Cut, Color, Clarity, and Carat weight. For earrings, you may prioritize differently than for rings:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Cut & Brilliance</h3>
              <p className="text-black/80 font-montserrat font-light">
                Since earrings are viewed from a distance, prioritize excellent cut quality to maximize sparkle and brilliance. 
                A well-cut diamond will catch the light beautifully even when you move.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Color Grade</h3>
              <p className="text-black/80 font-montserrat font-light">
                For earrings, you can often choose a slightly lower color grade (G-I) than for engagement rings, 
                as slight color variations are less noticeable when diamonds aren't side by side.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Clarity</h3>
              <p className="text-black/80 font-montserrat font-light">
                VS1-SI1 clarity grades offer excellent value for earrings, as minor inclusions are typically not visible 
                to the naked eye, especially at the distance earrings are viewed.
              </p>
            </div>
            
            <div className="bg-white-off p-6">
              <h3 className="text-xl font-cormorant mb-3 text-gold">Carat Weight</h3>
              <p className="text-black/80 font-montserrat font-light">
                Consider your personal style and budget. Remember that the total carat weight is divided between two earrings, 
                so 1 carat total weight means 0.5 carats per ear.
              </p>
            </div>
          </div>
        </div>

        {/* Caring for Diamond Earrings */}
        <div className="text-center mb-16 bg-white-off p-8">
          <h2 className="text-2xl font-cormorant mb-6 text-black">Caring for Your Diamond Earrings</h2>
          <p className="text-black/80 font-montserrat font-light max-w-3xl mx-auto mb-8">
            To maintain the brilliance of your diamond earrings, clean them regularly with mild soap and warm water. 
            Store them separately from other jewelry to prevent scratches, and check the settings periodically to ensure 
            the diamonds are secure. For detailed care instructions, visit our Jewelry Care Guide.
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
            <Link href="/category/earrings" className="text-black hover:text-gold transition-colors font-montserrat font-light">
              Diamond Earrings
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