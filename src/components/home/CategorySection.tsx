import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: "Rings",
    image: "https://ext.same-assets.com/2845033434/118577771.jpeg",
    link: "/category/rings",
  },
  {
    name: "Earrings",
    image: "https://ext.same-assets.com/4031244677/2680366754.jpeg",
    link: "/category/earrings",
  },
  {
    name: "Pendants",
    image: "https://ext.same-assets.com/1118148758/1365192601.jpeg",
    link: "/category/pendants",
  },
  {
    name: "Bracelets",
    image: "https://ext.same-assets.com/3079863475/266547809.jpeg",
    link: "/category/bracelets",
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              href={category.link}
              key={category.name}
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 w-full p-4 text-center">
                  <h3 className="text-xl font-playfair text-white">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
