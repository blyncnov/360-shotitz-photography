"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Icons
import { IoArrowBackSharp } from "react-icons/io5";

// Components
import BookingsTable from "./components/BookingsTable";

const Bookings = () => {
  const router = useRouter();

  return (
    <>
      <main className="w-full text-white max-w-full min-w-full grid grid-cols-1 gap-8">
        <div className="w-full max-w-full min-w-full flex justify-between items-center gap-4">
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => router.back()}
          >
            <div className="p-1 bg-white text-black rounded-full">
              <IoArrowBackSharp className="text-xl" />
            </div>
            <button className="text-2xl ">Bookings</button>
          </div>
        </div>

        <div className="w-full">
          <BookingsTable />
        </div>
      </main>
    </>
  );
};

export default Bookings;
