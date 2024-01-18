import React from "react";
import Image from "next/image";

// Components
import WhiteSpace from "@/components/WhiteSpace";

// Pattern
import Shoot from "../../public/shoot1.jpeg";

const AboutUs = () => {
  return (
    <div className="py-12">
      <WhiteSpace>
        <div className="w-full flex flex-col gap-12">
          <div className="w-full text-center flex flex-col gap-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">
              <span className="text-primary">About 360 Shotitz </span>
            </h1>

            <p
              style={{ lineHeight: 1.7 }}
              className="text-lg font-normal text-white opacity-65 normal_text"
            >
              We provide the best services and experience at 360 Shotitz, and
              only a few can be explained in the following categories
            </p>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto grid md:grid-cols-[0.4fr_0.6fr] grid-cols-1 mt-12 gap-6">
          <div className="h-full w-full max-h-full max-w-full">
            <Image
              src={Shoot}
              alt="about us image"
              className="w-full object-cover rounded h-full min-h-[500px]"
            />
          </div>
          <div>
            <p
              className="text-sm normal_text opacity-95"
              style={{ lineHeight: 2 }}
            >
              Fill pencil draft union layer blur underline editor. Connection
              device ellipse vector line pixel. Outline text export distribute
              duplicate. Outline subtract object ellipse strikethrough pen
              bullet inspect. Component scrolling plugin prototype pen align
              content shadow mask auto. Font team rotate connection flatten.
              Undo invite overflow style move style plugin. Arrange background
              ellipse shadow export image thumbnail draft plugin. Create
              background image align undo effect selection mask reesizing text.
              Edit align overflow group select polygon plugin distribute. Union
              clip thumbnail variant vertical community clip. Flatten select
              mask union flatten. Component figma pixel strikethrough component
              thumbnail layout scale create duplicate. Blur thumbnail variant
              font overflow editor figma arrange prototype prototype. Undo mask
              object invite duplicate asset hand inspect reesizing. Draft
              variant connection prototype rotate project. Selection thumbnail
              underline invite layout reesizing. Ipsum text blur asset bold
              device selection. Star subtract shadow underline prototype vector
              polygon. Text vertical polygon hand content. Figma bold team
              bullet selection scrolling horizontal select. Subtract thumbnail
              clip background line scrolling undo. Main blur star effect draft
              font. Duplicate library underline hand follower device. Frame fill
              hand figma library align underline polygon line asset. Fill create
              community undo vector scale asset. Select thumbnail team
              distribute star content frame underline bold layout. Distribute
              boolean export pencil connection polygon export editor. Project
              library figma device list bullet slice flatten follower. Boolean
              list plugin frame object follower mask distribute thumbnail. Layer
              align variant content blur undo.
            </p>

            <div className="w-full flex gap-12 my-4">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-primary">500+</h2>
                <p>Awards</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-primary">2000+</h2>
                <p>Happy client</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl text-primary">3</h2>
                <p>Work Experience </p>
              </div>
            </div>
          </div>
        </div>
      </WhiteSpace>
    </div>
  );
};

export default AboutUs;
