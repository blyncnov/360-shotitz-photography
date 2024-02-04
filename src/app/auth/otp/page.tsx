"use client";
import React, { useEffect, useState } from "react";
import { verifyOTP } from "@/services/request";
import Loader from "@/Loader/Loader";
import { useRouter } from "next/navigation";

const ConfirmOTP = () => {
  const [loading, setLoading] = useState(false);

  interface OTPDetails {
    email: string;
    otp: number;
  }

  const [details, setDetails] = useState<OTPDetails>({
    email: "",
    otp: 0,
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    console.log(details.otp);
    e.preventDefault();
    if (details["email"] && details["otp"] > 0) {
      setLoading(true);
      await verifyOTP(details, router);
      setLoading(false);
    } else {
      console.log("not valid");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("userEmail");
    console.log("email: " + data);
    if (data !== null) {
      setDetails({ ...details, email: data });
    }
  }, []);

  return (
    <>
      <form
        className="w-full flex justify-center pt-[100px] gap-[20px] items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="otp">Confirm OTP</label>
        <input
          id="otp"
          type="number"
          name="otp"
          value={details["otp"]}
          onChange={(e: any) => {
            setDetails({ ...details, otp: e.target.value });
          }}
          className="w-[300px] px-[15px] py-[10px] text-black border-none outline-none rounded-[6px]"
        />
        <button
          className="bg-primary py-[10px] px-[35px] rounded-[12px]"
          type="submit"
        >
          {loading ? <Loader /> : "Verify"}
        </button>
      </form>
    </>
  );
};

export default ConfirmOTP;
