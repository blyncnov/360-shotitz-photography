import React from "react";

// Icons
import { MdOutlinePending } from "react-icons/md";

const BookingsTable = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg text-white shadow-md">
        <table className="w-full border-collapse bg-transparent text-left text-sm text-white">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Booking Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-lg">
                Booking Status
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
          <tbody className="w-full  border-gray-100 opacity-70">
            {[1, 2, 3, 4].map((item) => {
              return (
                <tr className="w-full" key={item}>
                  <td className="flex gap-3 px-6 py-4 font-normal">
                    <div className="text-sm">
                      <div className="font-medium">23/05/2024</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-auto rounded bg-[green] px-2 py-1 text-xs font-semibold text-white inline-flex items-center gap-1">
                      <MdOutlinePending />
                      Success
                    </div>
                  </td>
                  <td className="px-6 py-4">Pending</td>
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

export default BookingsTable;
