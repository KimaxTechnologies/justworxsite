import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ClosingCTASection } from "@/components/home/ClosingCTASection";
import { DifferentiatorsSection } from "@/components/home/DifferentiatorsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialSection } from "@/components/home/SocialSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DifferentiatorsSection />
      <CategoriesSection />
      <SocialSection />
      <TestimonialSection />
      <ClosingCTASection />
    </>
  );
}
