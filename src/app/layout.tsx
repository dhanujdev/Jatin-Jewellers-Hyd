import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Elegant serif font for headings
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

// Clean sans-serif font for body text
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jatin Jewellers - Exquisite Lab Grown Diamond Jewellery",
  description: "Discover our stunning collection of lab grown diamond jewelry at Jatin Jewellers. Elegant designs, superior craftsmanship, and sustainable luxury - all at accessible prices.",
  keywords: "lab grown diamonds, diamond jewelry, sustainable jewelry, ethical diamonds, engagement rings, diamond earrings, diamond pendants, diamond bracelets, Jatin Jewellers",
  authors: [{ name: "Jatin Jewellers" }],
  creator: "Jatin Jewellers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jatinjewellers.in",
    title: "Jatin Jewellers - Exquisite Lab Grown Diamond Jewellery",
    description: "Discover our stunning collection of lab grown diamond jewelry at Jatin Jewellers. Elegant designs, superior craftsmanship, and sustainable luxury.",
    siteName: "Jatin Jewellers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
