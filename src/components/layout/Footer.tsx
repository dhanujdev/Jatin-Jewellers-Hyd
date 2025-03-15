import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex flex-col items-center">
            <div className="relative w-16 h-16 overflow-hidden rounded-full mb-4 border-2 border-gold">
              <Image 
                src="/images/logo/logo.jpg" 
                alt="Jatin Jewellers Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-cormorant font-light tracking-widest text-white mb-4">
              <span className="text-gold">JATIN</span> JEWELLERS
            </span>
          </Link>
          <p className="text-white/70 max-w-md mx-auto text-sm font-montserrat font-light tracking-wide">
            Crafting timeless elegance through exquisite diamond jewelry since 1985
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Shop */}
          <div>
            <h3 className="text-lg font-cormorant font-light tracking-wider mb-6 text-gold">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/rings" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/category/earrings" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/category/pendants" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Pendants
                </Link>
              </li>
              <li>
                <Link href="/category/bracelets" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Bracelets & Bangles
                </Link>
              </li>
              <li>
                <Link href="/category/solitaire" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Solitaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-cormorant font-light tracking-wider mb-6 text-gold">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/care" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link href="/sizing" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Ring Sizing Guide
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-white/80 hover:text-gold text-sm font-montserrat font-light tracking-wide luxury-transition">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-cormorant font-light tracking-wider mb-6 text-gold">Visit Us</h3>
            <address className="not-italic text-white/80 text-sm font-montserrat font-light tracking-wide space-y-3">
              <p>Jatin Jewellers</p>
              <p>Road No.36, Jubilee Hills Checkpost</p>
              <p>Hyderabad, Telangana, 500033</p>
              <p className="mt-5">
                <a href="tel:+919999999999" className="hover:text-gold luxury-transition">
                  +91 99999 99999
                </a>
              </p>
              <p>
                <a href="mailto:support@jatinjewellers.in" className="hover:text-gold luxury-transition">
                  support@jatinjewellers.in
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-14 text-center">
          <h3 className="text-lg font-cormorant font-light tracking-wider mb-4 text-gold">Join Our Newsletter</h3>
          <p className="text-white/70 max-w-md mx-auto text-sm font-montserrat font-light tracking-wide mb-5">
            Subscribe to receive updates on new collections and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/10 border border-white/20 text-white px-4 py-2 text-sm focus:outline-none focus:border-gold"
            />
            <button className="bg-gold hover:bg-gold/90 text-black px-4 py-2 text-sm luxury-transition flex items-center">
              <Mail size={16} className="mr-2" />
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold luxury-transition w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <Facebook size={18} />
          </a>
          <a href="https://www.instagram.com/jatinjewellershyd/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold luxury-transition w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <Instagram size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold luxury-transition w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <Twitter size={18} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold luxury-transition w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
            <Youtube size={18} />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10 text-sm text-white/60 font-montserrat font-light">
          <Link href="/privacy" className="hover:text-gold luxury-transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold luxury-transition">Terms of Service</Link>
          <Link href="/shipping" className="hover:text-gold luxury-transition">Shipping Policy</Link>
          <Link href="/refund" className="hover:text-gold luxury-transition">Refund Policy</Link>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-10 pt-8 text-center">
          <p className="text-sm text-white/60 font-montserrat font-light tracking-wide">
            Copyright &copy; {new Date().getFullYear()} Jatin Jewellers - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
