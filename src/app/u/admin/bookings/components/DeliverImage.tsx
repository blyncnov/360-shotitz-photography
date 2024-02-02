"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, Dispatch, SetStateAction } from "react";

// Icons
import { FaTimes } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

// Ghost Image
import GhostImage from "../../../../../../public/ghost.jpeg";

// Define the type  element (HTMLInputElement)
type InputRefType = HTMLInputElement;

const DeliverImage = ({
  setisDelivering,
}: {
  setisDelivering: Dispatch<SetStateAction<Boolean>>;
}) => {
  const router = useRouter();

  // BLOB: data URL
  const [dataImageURL, setDataImageURL] = useState<string | null>(null);

  // Create target REF
  const upload_ref = useRef<InputRefType>(null);

  // Upload Image With Preview
  const UploadFileHandler = () => {
    if (upload_ref.current) {
      return upload_ref.current.click();
    }
  };

  // OnUpload Image
  const OnChangeUploadFile = (e: any) => {
    const file = e.target.files[0];
    setDataImageURL(URL.createObjectURL(file));

    // Call API to upload image to database
  };

  const HandleDelivery = () => {
    // TODO: CALL API TO Deliver Image
  };

  return (
    <div className="w-full min-h-[100vh] h-[100vh] overflow-y-scroll py-24 fixed top-0 left-0 right-0 bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            <div>
              <form className="flex flex-col gap-5 mt-8">
                <div className="w-full flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-primary">
                    Cover Image
                  </h2>

                  <div className="flex">
                    <div
                      onClick={UploadFileHandler}
                      className="relative w-auto"
                    >
                      <div className="relative flex flex-col">
                        {dataImageURL !== null ? (
                          <div className="relative w-auto transition-all rounded flex items-center justify-center">
                            <Image
                              src={dataImageURL}
                              width={40}
                              height={40}
                              alt={`Profile Image`}
                              className="relative object-cover w-40 h-40 rounded-lg shadow-sm cursor-pointer"
                            />
                          </div>
                        ) : (
                          <Image
                            src={GhostImage}
                            width={40}
                            height={40}
                            alt={`ghost Image`}
                            className="relative object-cover w-40 h-40 rounded-lg shadow cursor-pointer"
                          />
                        )}
                        <div className="absolute -bottom-2 -right-2 bg-[var(--primary-color)] shadow-md rounded-lg text-3xl p-1.5 flex items-center justify-center cursor-pointer">
                          <LuPlus
                            className="text-xl cursor-pointer text-white"
                            onClick={UploadFileHandler}
                          />
                        </div>
                        <input
                          type="file"
                          ref={upload_ref}
                          name="upload_profile_pics"
                          style={{ display: "none" }} // To Hide Input:File
                          onChange={OnChangeUploadFile}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">
                    Deliver Image
                  </h2>
                </div>
                <div>
                  <label htmlFor="project_name">Project Name</label>
                  <input
                    type="text"
                    id="project_name"
                    name="project_name"
                    placeholder="Ajani Born Dara"
                    className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
                  />
                </div>
                <div>
                  <label htmlFor="date_and_time">Date & Time</label>
                  <input
                    type="datetime-local"
                    id="date_and_time"
                    name="date_and_time"
                    placeholder={new Date().getTime.toString()}
                    className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="project_url">Project URL</label>
                  <input
                    type="text"
                    id="project_url"
                    name="project_url"
                    placeholder="Link to the work"
                    className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
                  />
                </div>
              </form>
            </div>

            <button
              className="w-full min-h-12 bg-primary rounded-md mt-6"
              onClick={HandleDelivery}
            >
              Deliver Image
            </button>
          </div>
        </div>

        <div
          className="bg-[white] absolute -top-3 -right-2 rounded p-3 cursor-pointer flex gap-1 items-center justify-center"
          onClick={() => setisDelivering(false)}
        >
          <FaTimes className="text-2xl text-[#000000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default DeliverImage;
