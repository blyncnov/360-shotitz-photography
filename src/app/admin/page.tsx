"use client";

import React, { useState } from "react";

// Icons
import { CiMoneyBill } from "react-icons/ci";
import { BsStars } from "react-icons/bs";

// Components
import RecentBookingsEmptyState from "./components/Nothing";

const DashboardHome = () => {
  return (
    <>
      <div className="w-full text-white max-w-full min-w-full grid grid-cols-1 gap-8">
        <div className="w-full max-w-full min-w-full flex justify-between items-center gap-4">
          <h1 className="text-xl font-semibold opacity-85">
            Dashboard Overview
          </h1>
        </div>

        <div className="w-full max-w-full min-w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="w-full max-w-full min-w-full grid grid-cols-1 gap-8 ">
            <div className="w-full px-6 py-8 flex gap-5 bg-dashboardGray rounded-lg">
              {" "}
              <div className="bg-[#333333] text-3xl w-14 h-14 flex justify-center items-center rounded cursor-pointer">
                <CiMoneyBill />
              </div>
              <div className="w-auto flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Total Bookings</h1>
                <p className="text-xl font-normal opacity-50">$30</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-full min-w-full grid grid-cols-1 gap-8 ">
            <div className="w-full px-6 py-8 flex gap-5 bg-dashboardGray rounded-lg">
              <div className="bg-[#333333] text-3xl w-14 h-14 flex justify-center items-center rounded cursor-pointer">
                <BsStars />
              </div>

              <div className="w-auto flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Pending Bookings</h1>
                <p className="text-xl font-normal opacity-50">$30</p>
              </div>
            </div>
          </section>

          <section className="w-full max-w-full min-w-full grid grid-cols-1 gap-8 ">
            <div className="w-full px-6 py-8 flex gap-5 bg-dashboardGray rounded-lg">
              {" "}
              <div className="bg-[#333333] text-3xl w-14 h-14 flex justify-center items-center rounded cursor-pointer">
                <BsStars />
              </div>
              <div className="w-auto flex flex-col gap-1">
                <h1 className="text-2xl font-semibold opacity-85">
                  Gallery Image
                </h1>
                <p className="text-xl font-normal opacity-50">$30</p>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full max-w-full min-w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold opacity-85">
              Recently Delivered
            </h1>
            <button
              title="create bucks"
              className="text-white text-sm shadow p-3 rounded-xl flex gap-1 items-center cursor-pointer"
            >
              See all
            </button>
          </div>

          <div>
            <BookingsTable />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full max-w-full min-w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold opacity-85">
              Recent Bookings
            </h1>
          </div>

          <div>
            <BookingsTable />
          </div>
        </div>
      </div>
    </>
  );
};

const BookingsTable = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg text-white shadow-md">
        <table className="w-full border-collapse bg-transparent text-left text-sm text-white">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Picture Delivererd
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Shooting Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Plan Type
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="w-full  border-gray-100 opacity-70 ">
            {[1, 2, 3, 4].map((item) => {
              return (
                <tr
                  className="w-full hover:bg-[white]/10 cursor-pointer"
                  key={item}
                >
                  <td className="flex gap-3 px-6 py-4 font-normal">
                    <div className="text-sm">
                      <h2 className="font-medium">Adeola Adewale</h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <h2 className="font-medium">08138395869</h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">23</td>
                  <td className="px-6 py-4">23/09/2024</td>
                  <td className="px-6 py-4">Plan Name</td>
                  <td className="px-6 py-4">₦4,000</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardHome;
