import Hero from "@/components/home/Hero";
import IndustryStrip from "@/components/home/IndustryStrip";
import Showcase from "@/components/home/Showcase";
import Categories from "@/components/home/Categories";
import WhyNetics from "@/components/home/WhyNetics";
import Ecosystem from "@/components/home/Ecosystem";
import TimelinePreview from "@/components/home/TimelinePreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <IndustryStrip />
      <Showcase />
      <Categories />
      <WhyNetics />
      <Ecosystem />
      <TimelinePreview />
      <CTA />
    </>
  );
}
