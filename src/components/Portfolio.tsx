import React from "react";
import Image from "next/image";

// Components
import WhiteSpace from "@/components/WhiteSpace";

const Portfolio = () => {
  return (
    <div className="py-12">
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">
              <span className="text-primary">Portfolio</span>
            </h1>

            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65 normal_text"
            >
              Our Portfolio showcase a few of our works so far, Have a glance at
              the masterpiece we have created.
            </p>
          </div>
          <div className="w-full">
            <div className="gallery">
              <figure className="gallery__item gallery__item--1">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  className="w-full gallery__img"
                  width={105}
                  height={105}
                />
              </figure>
              <figure className="gallery__item gallery__item--2">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  width={105}
                  height={105}
                  className="w-full gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--3">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  width={105}
                  height={105}
                  className="w-full gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--4">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  width={105}
                  height={105}
                  className="w-full gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--5">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  width={105}
                  height={105}
                  className="w-full gallery__img"
                />
              </figure>
              <figure className="gallery__item gallery__item--6">
                <Image
                  src="/shoot1.jpeg"
                  alt="Gallery image 1"
                  width={105}
                  height={105}
                  className="w-full gallery__img"
                />
              </figure>
            </div>
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

export default Portfolio;
