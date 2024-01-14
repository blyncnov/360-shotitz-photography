import React from "react";

// Components
import HeroSection from "@/components/Hero";
import PhotographCTX from "@/components/CTX";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FrequentlyAskedQuestions from "@/components/FAQ";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-12">
      <HeroSection />
      <PhotographCTX />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FrequentlyAskedQuestions />
    </main>
  );
}
