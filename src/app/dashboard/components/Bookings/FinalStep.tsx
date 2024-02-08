import React from "react";
import { bankDetailsSchema } from "../Interface";

const FinalStep = ({ bankDetails }: { bankDetails: bankDetailsSchema }) => {
  return (
    <div className="w-full flex flex-col justify-between gap-12">
      <div className="w-full flex flex-col gap-4 text-white font-light">
        <div className="flex flex-col gap-1">
          <p className="text-lg text-primary">Payment Details</p>
          <p className="text-lg">Bank Name </p>
          <p className="text-3xl ">
            {bankDetails ? bankDetails.bank_name : ""}
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between gap-2 text-white font-light">
        <div className="flex flex-col gap-1">
          <p className="text-lg">Account Name </p>
          <p className="text-3xl ">
            {bankDetails ? bankDetails.account_name : ""}{" "}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-lg">Amount to transfer </p>
          <p className="text-4xl text-primary font-bold">N20,000</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 text-white font-light">
        <div className="flex flex-col gap-1">
          <p className="text-lg">Account Number </p>
          <p className="text-xl ">
            {bankDetails ? bankDetails.account_number : ""}{" "}
          </p>
        </div>
      </div>

      {/* <button className="w-full min-h-12 bg-primary rounded-md mt-3">
        Completed
      </button> */}
    </div>
  );
};

export default FinalStep;
