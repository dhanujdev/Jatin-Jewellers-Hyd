import { Instagram } from 'lucide-react';

export default function InstagramFollow() {
  return (
    <section className="py-16 bg-gold-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Follow Us on Instagram</h2>
          <p className="mb-8 text-gold-light/80">
            Stay updated with our latest collections, designs, and exclusive offers by following our Instagram page.
          </p>

          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/jatinjewellershyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-white text-gold-dark font-medium hover:bg-white/90 transition-colors"
            >
              <Instagram size={24} />
              <span>@jatinjewellershyd</span>
            </a>
          </div>

          <p className="mt-8 text-sm text-gold-light/70">
            Get inspired by our stunning jewelry designs and be the first to know about our new arrivals and special promotions.
          </p>
        </div>
      </div>
    </section>
  );
} 