import React from "react";

// Components
import WhiteSpace from "@/components/WhiteSpace";

const Testimonials = () => {
  return (
    <div className="py-12">
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">Testimonials</h1>
            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              tempore explicabo eaque sequi repellat id! A iste explicabo
              consequatur praesentium.
            </p>
          </div>
          <div className="w-full max-w-4xl mx-auto"></div>
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

export default Testimonials;
