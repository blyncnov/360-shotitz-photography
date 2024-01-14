import React from "react";
import Image from "next/image";

// Components
import WhiteSpace from "@/components/WhiteSpace";

const PhotographCTX = () => {
  return (
    <div className="py-12">
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 style={{ lineHeight: 1.5 }} className="text-4xl font-bold">
              <span className="text-primary"> &apos;&apos; A Photograph</span>{" "}
              Is Usually Looked At - Seldom Looked into. &apos;&apos;
            </h1>

            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
              tempore explicabo eaque sequi repellat id! A iste explicabo
              consequatur praesentium.
            </p>
          </div>
          <div className="w-full h-full flex flex-wrap md:flex-nowrap gap-x-12 gap-y-6 items-center">
            {[1, 2, 3].map((data, index) => {
              return (
                <div className="w-full flex flex-col gap-1" key={index}>
                  <div className="rounded">
                    <Image
                      src="/shoot1.jpeg"
                      alt="wedding shoot"
                      width="100"
                      height="100"
                      className="w-full object-cover rounded h-[350px]"
                    />
                  </div>
                  <div className="text-white py-2 flex justify-between gap-4">
                    <p className="text-lg">Best Background</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

export default PhotographCTX;
