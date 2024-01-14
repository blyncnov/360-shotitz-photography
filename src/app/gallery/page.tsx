import React from "react";

// Components
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FrequentlyAskedQuestions from "@/components/FAQ";

const Gallery = () => {
  return (
    <main className="w-full flex flex-col gap-12">
      <Portfolio />
      <Pricing />
      <FrequentlyAskedQuestions />
    </main>
  );
};

export default Gallery;
