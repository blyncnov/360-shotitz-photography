"use client";

import React, { useState } from "react";

const BookingProcessOne = ({
  setBookingInfo,
}: {
  setBookingInfo: React.Dispatch<React.SetStateAction<{}>>;
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Create Bookings</h1>
      </div>

      <form className="flex flex-col gap-5 mt-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="full_name">Shoot Type</label>
          <select
            name="shoot_type"
            id="shoot_type"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          >
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
        <div>
          <label htmlFor="Phone_number">Number of Shoot</label>
          <input
            type="number"
            id="no_of_shoot"
            name="no_of_shoot"
            placeholder="e.g 20"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="password">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g lagos"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        {/* <div className="w-full flex flex-col gap-2.5">
          <button className="w-full min-h-12 bg-primary rounded-md mt-3">
            Make payment
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default BookingProcessOne;
