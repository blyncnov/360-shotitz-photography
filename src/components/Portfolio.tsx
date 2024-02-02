"use client";

import React from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";

// Components
import WhiteSpace from "@/components/WhiteSpace";
import NextJsImage from "./NextJsImage";
import photos from "@/data/photos";

const Portfolio = () => {
  return (
    <div className="md:py-12">
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
              Behind the lens comes some of our amazing event photography and
              video content.
            </p>
          </div>
          <div className="w-full">
            <PhotographyGallery />
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

const PhotographyGallery = () => {
  return (
    <PhotoAlbum
      layout="rows"
      photos={photos}
      renderPhoto={NextJsImage}
      defaultContainerWidth={1200}
      sizes={{ size: "calc(100vw - 240px)" }}
    />
  );
};

export default Portfolio;
