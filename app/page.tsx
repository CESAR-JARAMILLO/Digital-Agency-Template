import BannerSection from "@/components/BannerSection";
import FeatureHighlight from "@/components/FeatureHighlight";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/TestimonialsSection";
import bannerData from "@/data/banner";
import { featureSections } from "@/data/featureSections";

export default function Home() {
  return (
    <>
      <Hero />

      {featureSections.map((feature, index) => (
        <FeatureHighlight key={index} {...feature} />
      ))}

      <BannerSection {...bannerData} />

      <TestimonialSection />
    </>
  );
}
