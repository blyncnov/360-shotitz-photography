"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Ghost Image
import GhostImage from "../../../../../../public/ghost.jpeg";

// Components
import EmptyState from "../components/Nothing";
import { retrieveBookingDetails } from "@/services/adminRequest";

import DeliverImage from "../components/DeliverImage";

const UserProfile = () => {
  const [userBookingDetails, setUserBookingDetails] = useState<any>();

  const getUserId = () => {
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/"); // Split the URL by "/"
    const id = parts[4];
    return id;
  };

  const getAllBookings = async () => {
    let userId = getUserId();
    console.log(userId);
    let data;
    const accessToken = localStorage.getItem("adminAccessToken");
    console.log("adminAccessToken: " + accessToken);
    if (accessToken) {
      data = await retrieveBookingDetails(accessToken, userId);
      if (data) {
        setUserBookingDetails(data);
      }
    } else {
      data = await retrieveBookingDetails("string", userId);
    }
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem("adminRefreshToken");
    if (refreshToken) {
      getAllBookings();
    } else {
      console.log("unAuthorized");
      window.location.pathname = "/auth/login";
    }
  }, []);

  const [isDelivering, setisDelivering] = useState<Boolean>(false);
  return (
    <>
      {isDelivering && <DeliverImage setisDelivering={setisDelivering} />}

      <div className="w-full text-white max-w-full min-w-full grid grid-cols-1 gap-8">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full max-w-full min-w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold opacity-85">Deliveries</h1>
          </div>

          <div className="w-full max-w-full flex md:flex-row flex-col gap-x-12 gap-y-6">
            {userBookingDetails?.avatar ? (
              <div>
                <Image
                  src={userBookingDetails.avatar}
                  width={150}
                  height={150}
                  alt={`ghost Image`}
                  className="relative object-cover w-full rounded-lg shadow cursor-pointer"
                />
              </div>
            ) : (
              <div>
                <Image
                  src={GhostImage}
                  width={150}
                  height={150}
                  alt={`ghost Image`}
                  className="relative object-cover w-full rounded-lg shadow cursor-pointer"
                />
              </div>
            )}

            <div>
              <ul className="flex flex-col gap-6 font-medium text-lg">
                <li>Name: {userBookingDetails?.name}</li>
                <li>Phone Number: 09263645785745</li>
                <li>
                  Booked Date: {userBookingDetails?.shooting_date};{" "}
                  {userBookingDetails?.shooting_time}
                </li>
                <li>Plan Type: {userBookingDetails?.plan}</li>
              </ul>
              <button
                className="w-full min-h-12 bg-primary rounded-md mt-6"
                onClick={() => setisDelivering(true)}
              >
                Deliver Image
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full max-w-full min-w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold opacity-85">
              Deliver History
            </h1>
          </div>

          <div className="w-full my-6">
            {userBookingDetails?.delivered_bookings.length > 0 ? (
              <BookingsTable recentBookings={userBookingDetails?.delivered_bookings}/>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const BookingsTable = ({ recentBookings }: { recentBookings: any }) => {
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
            {recentBookings?.map((item: any, index: any) => {
              return (
                <tr
                  className="w-full hover:bg-[white]/10 cursor-pointer"
                  key={index}
                >
                  <td className="flex gap-3 px-6 py-4 font-normal">
                    <div className="text-sm">
                      <h2 className="font-medium">{item?.name}</h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <h2 className="font-medium">08138395869</h2>
                    </div>
                  </td>
                  <td className="px-6 py-4">{item?.number_of_shoot}</td>
                  <td className="px-6 py-4">{item?.shooting_date}</td>
                  <td className="px-6 py-4">{item?.plan}</td>
                  <td className="px-6 py-4">₦{item?.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserProfile;
