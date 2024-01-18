import React from "react";

// Components
import WhiteSpace from "@/components/WhiteSpace";

// Pattern
import Wavy_pattern from "../../public/wavy_pattern.png";

const Pricing = () => {
  return (
    <div
      className="py-12"
      style={{
        background: `url(${Wavy_pattern.src}) 100px no-repeat, url(${Wavy_pattern.src}) 100px no-repeat`,
        backgroundPosition: "left top, bottom right",
        backgroundSize: "400px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65 normal_text"
            >
              This is the list containing below price tag including the services
              expected for each price. Each plan is carefully curated to provide
              you with the best service per each plan
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto grid gap-x-12 gap-y-6 md:grid-cols-3 grid-cols-1 justify-center items-center">
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

const PricingCard = () => {
  return (
    <div className="max-w-full w-full border border-[#BFBFBF] min-h-[400px] rounded-xl p-4 flex flex-col gap-6 justify-center items-center">
      <div>
        <h1 className="text-2xl font-normal">Sapphire</h1>
      </div>
      <div>
        <h2 className="text-4xl font-semibold">₦20,000</h2>
      </div>
      <div>
        <ul className="text-center flex flex-col gap-2 font-light">
          <li>15 mins session</li>
          <li>One edited picture</li>
          <li>One clothe option</li>
          <li>One location</li>
          <li>All soft copies</li>
          <li>Online access</li>
        </ul>
      </div>
      <div>
        <button className="h-10 w-32 mt-6 shadow inline-flex bg-[var(--primary-color)] hover:text-main justify-center items-center gap-2 rounded-full font-medium text-white align-middle transition-all text-md">
          Book here
        </button>
      </div>
    </div>
  );
};

export default Pricing;
