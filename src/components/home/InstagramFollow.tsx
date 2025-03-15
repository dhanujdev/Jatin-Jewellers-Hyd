import { Instagram } from 'lucide-react';

export default function InstagramFollow() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-white">Follow Us on Instagram</h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <p className="mb-10 text-white/80 font-light">
            Stay updated with our latest collections, designs, and exclusive offers by following our Instagram page.
          </p>

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/jatinjewellershyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-light text-black font-medium transition-colors"
            >
              <Instagram size={24} />
              <span className="uppercase tracking-wider text-sm">@jatinjewellershyd</span>
            </a>
          </div>

          <p className="mt-10 text-sm text-white/60">
            Get inspired by our stunning jewelry designs and be the first to know about our new arrivals and special promotions.
          </p>
        </div>
      </div>
    </section>
  );
} 