import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shop */}
          <div>
            <h3 className="text-lg font-playfair mb-6 text-gold">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/rings" className="text-white/80 hover:text-gold text-sm transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/category/earrings" className="text-white/80 hover:text-gold text-sm transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/category/pendants" className="text-white/80 hover:text-gold text-sm transition-colors">
                  Pendants
                </Link>
              </li>
              <li>
                <Link href="/category/bracelets" className="text-white/80 hover:text-gold text-sm transition-colors">
                  Bracelets & Bangles
                </Link>
              </li>
              <li>
                <Link href="/category/solitaire" className="text-white/80 hover:text-gold text-sm transition-colors">
                  Solitaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-playfair mb-6 text-gold">Contact Us</h3>
            <address className="not-italic text-white/80 text-sm space-y-3">
              <p>Jatin Jewellers</p>
              <p>Road No.36, Jubilee Hills Checkpost</p>
              <p>Hyderabad, Telangana, 500033</p>
              <p className="mt-5">
                <a href="tel:+919999999999" className="hover:text-gold transition-colors">
                  +91 99999 99999
                </a>
              </p>
              <p>
                <a href="mailto:support@jatinjewellers.in" className="hover:text-gold transition-colors">
                  support@jatinjewellers.in
                </a>
              </p>
            </address>

            {/* Social Media */}
            <div className="flex space-x-5 mt-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/jatinjewellershyd" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-gold transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-white/60">
              Copyright &copy; {new Date().getFullYear()} Jatin Jewellers - All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/60 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping-policy" className="text-xs text-white/60 hover:text-gold transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
