import React from "react";

// Components
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactUsComponent from "@/components/Contact";

const ContactUs = () => {
  return (
    <main className="w-full flex flex-col gap-12">
      <ContactUsComponent />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default ContactUs;
