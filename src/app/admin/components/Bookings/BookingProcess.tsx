"use client";

import React, { useState, Dispatch, SetStateAction } from "react";

// Icons
import { FaTimes } from "react-icons/fa";

// booking process - steps
import BookingProcessOne from "./StepOne";
import BookingProcessTwo from "./StepTwo";
import FinalStep from "./FinalStep";

const BookingProcess = ({
  setisStartBookingProcess,
}: {
  setisStartBookingProcess: Dispatch<SetStateAction<Boolean>>;
}) => {
  const [bookingInfo, setBookingInfo] = useState({});
  const [bookingSteps, setBookingSteps] = useState(1);

  const HandleBookingProcessSubmission = () => {
    if (bookingSteps === 3) {
      return console.log(bookingInfo);
    } else {
      setBookingSteps(bookingSteps + 1);
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 h-full bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            {bookingSteps === 1 && <BookingProcessOne />}
            {bookingSteps === 2 && <BookingProcessTwo />}
            {bookingSteps === 3 && <FinalStep />}

            <button
              className="w-full min-h-12 bg-primary rounded-md mt-3"
              onClick={HandleBookingProcessSubmission}
            >
              {bookingSteps === 1 && "Make payment"}
              {bookingSteps === 2 && "Next"}
              {bookingSteps === 3 && "Completed"}
            </button>
          </div>
        </div>

        <div
          className="bg-[white] absolute -top-3 -right-2 rounded p-3 cursor-pointer flex gap-1 items-center justify-center"
          onClick={() => setisStartBookingProcess(false)}
        >
          <FaTimes className="text-2xl text-[#000000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
