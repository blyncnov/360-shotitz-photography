import React from "react";
import Image from "next/image";

// Components
import WhiteSpace from "@/components/WhiteSpace";
import SocialHandles from "@/components/SocialHandles";

const HeroSection = () => {
  return (
    <div className="w-full flex gap-2 flex-col">
      <WhiteSpace>
        <section className="w-full grid grid-cols-[0.3fr_0.7fr] gap-6 pt-6 pb-12">
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-5xl font-semibold text-primary">
              360 Shotitz Photography
            </h1>
            <p className="text-white text-lg font-normal">
              Event/Portrait Photographer & Film Maker.
            </p>
            <div>
              <SocialHandles />
            </div>
          </div>
          <div className="relative w-full h-full">
            <div className="w-full h-full flex overflow-x-scroll no-scrollbar gap-12 items-center absolute -top-12 left-0 right-0 min-h-[450px]">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, index) => {
                return (
                  <div
                    className="w-full h-full flex flex-col gap-2 no-scrollbar rounded group min-w-[250px]"
                    key={index}
                  >
                    <div className="overflow-hidden rounded">
                      <Image
                        src="/shoot1.jpeg"
                        alt="wedding shoot"
                        width="150"
                        height="150"
                        className="w-full max-w-full object-cover rounded group-hover:scale-125 transition-all"
                      />
                    </div>
                    <div className="text-black py-2 flex justify-between gap-4">
                      <div className="w-auto flex flex-col gap-1">
                        <p>Cole & Kemi </p>
                        <p className="ml-12">Wedding Video</p>
                      </div>
                      <div>
                        <p>2021</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </WhiteSpace>
      <div className="w-full bg-white text-black min-h-[250px] py-6">
        <WhiteSpace>
          <div className="relative">
            <h1 className="flex items-center gap-2">
              Scroll down{" "}
              <span>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="mt-1"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </span>
            </h1>
          </div>
        </WhiteSpace>
      </div>
    </div>
  );
};

export default HeroSection;
