import StoreHero from "@/components/home/StoreHero";
import TrustBar from "@/components/home/TrustBar";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Spotlight from "@/components/home/Spotlight";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <StoreHero />
      <TrustBar />
      <ShopByCategory />
      <FeaturedProducts />
      <Spotlight />
      <HowItWorks />
      <Reviews />
      <CTA />
    </>
  );
}
