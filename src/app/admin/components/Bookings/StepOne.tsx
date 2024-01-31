"use client";

import React, { useState } from "react";

const BookingProcessOne = () => {
  return (
    <div>
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Create Bookings</h1>
      </div>

      <form className="flex flex-col gap-5 mt-8">
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Enter your Full Name"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="Phone_number">Phone Number</label>
          <input
            type="number"
            id="Phone_number"
            name="Phone_number"
            placeholder="+2348149055068"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="password">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder={new Date().getTime.toString()}
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>
        <div>
          <label htmlFor="time">Time </label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder={new Date().getTime.toString()}
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <button className="w-full min-h-12 bg-primary rounded-md mt-3">
            Make payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingProcessOne;
