import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StoreLocations from "@/components/home/StoreLocations";
import InstagramFollow from "@/components/home/InstagramFollow";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <StoreLocations />
      <InstagramFeed />
      <InstagramFollow />
    </>
  );
}
