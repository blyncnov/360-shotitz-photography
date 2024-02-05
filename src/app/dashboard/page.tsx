"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCookie, recentBookingsAndImages } from "@/services/request";

// Icons
import { LuPlus } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import RecentBookingsEmptyState from "./components/Nothing";
import BookingProcess from "./components/Bookings/BookingProcess";
import { type } from "os";

const DashboardHome = () => {
  const [data, setData] = useState([]);

  const [isStartBookingProcess, setisStartBookingProcess] =
    useState<Boolean>(false);
  const router = useRouter();

  const getRecentData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("token: " + accessToken);
    if (accessToken) {
      await recentBookingsAndImages(accessToken);
    }
  };

  useEffect(() => {
    if (!getCookie("token")) {
      console.log("unAuthorized");
      router.push("/auth/login");
    }
    getRecentData();
  }, []);

  return (
    <>
      {isStartBookingProcess && (
        <BookingProcess setisStartBookingProcess={setisStartBookingProcess} />
      )}

      <div className="w-full text-white max-w-full min-w-full grid grid-cols-1 gap-8">
        <div className="w-full max-w-full min-w-full flex justify-between items-center gap-4">
          <h1 className="text-xl font-semibold opacity-85">
            Dashboard Overview
          </h1>
          <button
            title="create bookings"
            onClick={() => setisStartBookingProcess(true)}
            className="bg-[var(--primary-color)] text-white text-sm shadow p-3 rounded-xl flex gap-1 items-center cursor-pointer"
          >
            <LuPlus className="text-xl" />{" "}
            <span className="md:block hidden">Create Booking</span>
          </button>
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
              Recently View Image
            </h1>
            <button
              title="create bucks"
              className="text-white text-sm shadow p-3 rounded-xl flex gap-1 items-center cursor-pointer"
            >
              See all
            </button>
          </div>

          <div>
            <div className="w-full">
              <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    className="w-full gallery__img"
                    width={105}
                    height={105}
                  />
                </figure>
                <figure className="gallery__item gallery__item--2">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    width={105}
                    height={105}
                    className="w-full gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--3">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    width={105}
                    height={105}
                    className="w-full gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--4">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    width={105}
                    height={105}
                    className="w-full gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--5">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    width={105}
                    height={105}
                    className="w-full gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--6">
                  <Image
                    src="/shoot1.jpeg"
                    alt="Gallery image 1"
                    width={105}
                    height={105}
                    className="w-full gallery__img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-full max-w-full min-w-full flex justify-between items-center">
            <h1 className="text-xl font-semibold opacity-85">
              Recent Bookings
            </h1>
          </div>

          <div className="w-full my-6">
            <RecentBookingsEmptyState />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
