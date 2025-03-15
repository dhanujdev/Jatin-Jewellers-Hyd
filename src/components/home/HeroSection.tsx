import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getFeaturedPosts, InstagramPost } from '@/lib/instagram';

export default function HeroSection() {
  const [heroSlides, setHeroSlides] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedPosts = async () => {
      try {
        const posts = await getFeaturedPosts(3);
        setHeroSlides(posts);
      } catch (error) {
        console.error('Error loading featured posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFeaturedPosts();
  }, []);

  // Show loading state while fetching posts
  if (loading) {
    return (
      <section className="relative h-[60vh] md:h-[80vh] bg-black/5 flex items-center justify-center">
        <div className="text-gold">Loading featured jewelry...</div>
      </section>
    );
  }

  // If no posts are found, show a fallback
  if (heroSlides.length === 0) {
    return (
      <section className="relative h-[60vh] md:h-[80vh] bg-black flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-playfair mb-6 gold-text-shadow">
            Elegance in Every Detail
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl font-light">
            Discover our exquisite collection of fine jewelry
          </p>
          <Link
            href="/category/rings"
            className="bg-gold hover:bg-gold-dark text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-[60vh] md:h-[80vh]">
              <div className="relative w-full h-full">
                <Image
                  src={slide.media_url}
                  alt={slide.caption}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <h1 className="text-3xl md:text-5xl font-playfair mb-3 md:mb-6 gold-text-shadow">
                    {slide.caption.split('#')[0].trim()}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl font-light">
                    Exquisite craftsmanship in every piece
                  </p>
                  <Link
                    href={`/category/${slide.category}`}
                    className="bg-gold hover:bg-gold-dark text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
                  >
                    Shop {slide.category}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
          <CarouselPrevious className="relative static translate-y-0 h-10 w-10 rounded-full bg-black/30 text-white border-gold hover:bg-gold hover:text-black transition-colors" />
          <CarouselNext className="relative static translate-y-0 h-10 w-10 rounded-full bg-black/30 text-white border-gold hover:bg-gold hover:text-black transition-colors" />
        </div>
      </Carousel>
    </section>
  );
}
