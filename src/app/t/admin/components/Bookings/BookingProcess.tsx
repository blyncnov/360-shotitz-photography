import React, { Dispatch, SetStateAction } from "react";

// Icons
import { FaTimes } from "react-icons/fa";

// booking process - steps
import BookingProcessOne from "./StepOne";
import BookingProcessTwo from "./StepTwo";
import BookingProcessThree from "./StepThree";
import FinalStep from "./FinalStep";

const BookingProcess = ({
  bucksID,
  setIsShowDetails,
}: {
  bucksID?: number;
  setIsShowDetails?: Dispatch<SetStateAction<Boolean>>;
}) => {
  return (
    <div className="w-full fixed top-0 left-0 right-0 h-full bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            <BookingProcessOne />
          </div>
        </div>

        <div
          className="bg-[white] absolute -top-3 -right-2 rounded p-3 cursor-pointer flex gap-1 items-center justify-center"
          // onClick={() => setIsShowDetails(false)}
        >
          <FaTimes className="text-2xl text-[#000000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
