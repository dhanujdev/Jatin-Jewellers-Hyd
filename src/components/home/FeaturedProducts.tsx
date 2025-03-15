import Link from 'next/link';
import Image from 'next/image';

const featuredProducts = [
  {
    id: 1,
    name: "Diamond Floral Earrings",
    price: 89999,
    image: "https://ext.same-assets.com/2068770385/3215388855.jpeg",
    category: "earrings",
    slug: "diamond-floral-earrings",
  },
  {
    id: 2,
    name: "Solitaire Engagement Ring",
    price: 124999,
    image: "https://ext.same-assets.com/1202188651/2997469454.jpeg",
    category: "rings",
    slug: "solitaire-engagement-ring",
  },
  {
    id: 3,
    name: "Tennis Diamond Bracelet",
    price: 149999,
    image: "https://ext.same-assets.com/990724956/3338737471.jpeg",
    category: "bracelets",
    slug: "tennis-diamond-bracelet",
  },
  {
    id: 4,
    name: "Halo Diamond Pendant",
    price: 99999,
    image: "https://ext.same-assets.com/3081301302/1540422722.jpeg",
    category: "pendants",
    slug: "halo-diamond-pendant",
  },
  {
    id: 5,
    name: "Infinity Diamond Band",
    price: 79999,
    image: "https://ext.same-assets.com/926956781/3410740655.jpeg",
    category: "rings",
    slug: "infinity-diamond-band",
  },
  {
    id: 6,
    name: "Classic Diamond Studs",
    price: 69999,
    image: "https://ext.same-assets.com/1806396106/3692520561.jpeg",
    category: "earrings",
    slug: "classic-diamond-studs",
  },
  {
    id: 7,
    name: "Diamond Bangle",
    price: 159999,
    image: "https://ext.same-assets.com/1613108798/771767955.jpeg",
    category: "bracelets",
    slug: "diamond-bangle",
  },
  {
    id: 8,
    name: "Heart Diamond Pendant",
    price: 89999,
    image: "https://ext.same-assets.com/1938305152/1419367217.jpeg",
    category: "pendants",
    slug: "heart-diamond-pendant",
  },
];

// Format price to Indian Rupees
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white-off">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
            Bestsellers
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-2xl mx-auto font-light">
            Discover our most popular lab-grown diamond jewelry pieces, crafted with precision and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              href={`/product/${product.category}/${product.slug}`}
              key={product.id}
              className="group bg-white elegant-shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-black font-medium mb-2 group-hover:text-gold transition-colors">
                  {product.name}
                </h3>
                <p className="text-gold font-semibold">{formatPrice(product.price)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/collections/bestsellers"
            className="inline-block bg-black hover:bg-gold text-white px-10 py-3 uppercase tracking-wider text-sm font-medium transition-colors"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
