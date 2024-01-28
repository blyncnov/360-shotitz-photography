import React from "react";

// Icons
import { MdOutlinePending } from "react-icons/md";

const BookingsTable = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Booking Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Booking Status
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Shooting Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Plan Type
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {[1, 2, 3, 4].map((item) => {
              return (
                <tr className="hover:bg-gray-50" key={item}>
                  <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        23/05/2024
                      </div>
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
