"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createBookings } from "@/services/request";

// Icons
import { FaTimes } from "react-icons/fa";

// booking process - steps
import BookingProcessOne from "./StepOne";
import BookingProcessTwo from "./StepTwo";
import BookingProcessThree from "./StepThree";
import FinalStep from "./FinalStep";
import { bookingSchema } from "../Interface";
import Loader from "@/Loader/Loader";

const BookingProcess = ({
  setisStartBookingProcess,
}: {
  setisStartBookingProcess: Dispatch<SetStateAction<Boolean>>;
}) => {
  const [bookingInfo, setBookingInfo] = useState<bookingSchema>({
    phone: "",
    plan: "SAPPHIRE",
    shoot_type: "OUTDOOR",
    number_of_shoot: 1,
    location: "",
    shooting_date: new Date().getTime.toString(),
    shooting_time: "",
  });
  const [bookingSteps, setBookingSteps] = useState(1);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (
      bookingInfo["phone"] &&
      bookingInfo["plan"] &&
      bookingInfo["shoot_type"] &&
      bookingInfo["number_of_shoot"] &&
      bookingInfo["location"] &&
      bookingInfo["shooting_date"] &&
      bookingInfo["shooting_time"]
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [changing]);

  const HandleBookingProcessSubmission = async () => {
    setChanging(!changing);
    let data = [];
    if (bookingSteps === 4) {
      if (valid) {
        setLoading(true);
        // TODO: CALL API TO MAKE BOOKINGS RATHER THAN CONSOLE LOGGING IT
        data = await createBookings(bookingInfo);
        console.log(data);
        console.log(bookingInfo);
        setLoading(false);
        // END BOOKING PROCESS
        return setisStartBookingProcess(false);
      }
    } else {
      setBookingSteps(bookingSteps + 1);
    }
  };

  return (
    <div className="w-full min-h-[100vh] h-[100vh] overflow-y-scroll py-24 fixed top-0 left-0 right-0 bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            {bookingSteps === 1 && (
              <BookingProcessOne
                setBookingInfo={setBookingInfo}
                bookingInfo={bookingInfo}
              />
            )}
            {bookingSteps === 2 && (
              <BookingProcessTwo
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
              />
            )}
            {bookingSteps === 3 && (
              <BookingProcessThree
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
              />
            )}
            {bookingSteps === 4 && (
              <FinalStep
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
              />
            )}

            <button
              className="w-full min-h-12 bg-primary rounded-md mt-6"
              onClick={HandleBookingProcessSubmission}
            >
              {bookingSteps === 1 && "Make payment"}
              {bookingSteps === 2 && "Next"}
              {bookingSteps === 3 && "Next"}
              {loading
                ? bookingSteps === 4 && <Loader />
                : bookingSteps === 4 && "Completed"}
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
