"use client";

import React, { useState } from "react";
import Image from "next/image";

// Ghost Image
import GhostImage from "../../../../../../public/ghost.jpeg";

// Components
import EmptyState from "../components/Nothing";

import DeliverImage from "../components/DeliverImage";

const UserProfile = () => {
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
            <div>
              <Image
                src={GhostImage}
                width={150}
                height={150}
                alt={`ghost Image`}
                className="relative object-cover w-full rounded-lg shadow cursor-pointer"
              />
            </div>

            <div>
              <ul className="flex flex-col gap-6 font-medium text-lg">
                <li>Name: Ajani Ben D</li>
                <li>Phone Number: 09263645785745</li>
                <li>Booked Date: 11/04/2030; 2:30PM</li>
                <li>Plan Type: Plan Name</li>
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
            <EmptyState />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
