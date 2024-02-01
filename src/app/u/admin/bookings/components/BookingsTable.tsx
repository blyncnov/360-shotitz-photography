import React from "react";

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

export default BookingsTable;
