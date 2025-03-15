import Link from "next/link";
import { Menu, Search, ShoppingBag, User, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const categories = [
  { name: "Rings", href: "/category/rings" },
  { name: "Earrings", href: "/category/earrings" },
  { name: "Pendants", href: "/category/pendants" },
  { name: "Bracelets", href: "/category/bracelets" },
  { name: "Solitaire", href: "/category/solitaire" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gold/20 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-playfair font-bold text-black">
          <span className="text-gold">JATIN</span> JEWELLERS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="text-sm uppercase tracking-wider font-medium text-black hover:text-gold transition-colors"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Utility Icons */}
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 flex items-center justify-center text-black hover:text-gold transition-colors">
            <Search size={20} />
          </button>
          <Link href="/wishlist" className="w-8 h-8 flex items-center justify-center text-black hover:text-gold transition-colors">
            <Heart size={20} />
          </Link>
          <Link href="/account" className="w-8 h-8 flex items-center justify-center text-black hover:text-gold transition-colors">
            <User size={20} />
          </Link>
          <Link href="/cart" className="w-8 h-8 flex items-center justify-center text-black hover:text-gold transition-colors">
            <ShoppingBag size={20} />
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="w-8 h-8 flex items-center justify-center text-black">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="mt-8 mb-6">
                <Link href="/" className="text-xl font-playfair font-bold text-black">
                  <span className="text-gold">JATIN</span> JEWELLERS
                </Link>
              </div>
              <nav className="flex flex-col space-y-5">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="text-base uppercase tracking-wider font-medium text-black hover:text-gold transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
