import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroSlides = [
  {
    image: "https://ext.same-assets.com/3644294737/32073042.jpeg",
    title: "Elegance in Every Detail",
    subtitle: "Because Everyday Is Worthy of a Diamond",
    buttonText: "Shop Now",
    buttonLink: "/collections/new-arrivals",
  },
  {
    image: "https://ext.same-assets.com/3240105443/2056002979.jpeg",
    title: "Timeless Solitaires",
    subtitle: "Lab Grown Diamonds of Exceptional Quality",
    buttonText: "Explore Collection",
    buttonLink: "/category/solitaire",
  },
  {
    image: "https://ext.same-assets.com/1376627070/710333777.jpeg",
    title: "New Arrivals",
    subtitle: "Discover Our Latest Creations",
    buttonText: "View New Arrivals",
    buttonLink: "/collections/new-arrivals",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[60vh] md:h-[80vh]">
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <h1 className="text-3xl md:text-5xl font-playfair mb-3 md:mb-6 gold-text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-xl font-light">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="bg-gold hover:bg-gold-dark text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
                  >
                    {slide.buttonText}
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
