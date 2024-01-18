import React from "react";

// Components
import Pricing from "@/components/Pricing";
import FrequentlyAskedQuestions from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/About";
import OurTeam from "@/components/OurTeam";

const About = () => {
  return (
    <main className="w-full flex flex-col gap-12">
      <AboutUs />
      <Testimonials />
      <OurTeam />
      <Pricing />
      <FrequentlyAskedQuestions />
    </main>
  );
};

export default About;
