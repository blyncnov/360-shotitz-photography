"use client";

import { Dispatch, SetStateAction, useState } from "react";
import OtpInput from "react-otp-input";

// Icons
import { FaTimes } from "react-icons/fa";

const OTPVerificationModal = ({
  setIsRequestedOTP,
}: {
  setIsRequestedOTP: Dispatch<SetStateAction<Boolean>>;
}) => {
  const [otp, setOtp] = useState("");

  const handleOTPVerification = async () => {
    alert(otp);
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 h-full bg-[black]/90 z-[9999] flex flex-col gap-6 justify-center items-center !-mt-3">
      <div className="relative bg-[#0F0F0F]  w-[90%] md:w-[500px] rounded-lg p-3 min-h-[200px] px-4 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <h2 className="text-primary font-medium text-2xl">
              Reset Password
            </h2>
            <p className="text-sm font-light opacity-80 mt-3">
              an <b>OTP</b> as been sent to <b>ajinaexample@gmail.com</b>, check
              your email to confirm and click on resend if not found
            </p>
          </div>

          <div className="w-full py-6">
            <OtpInput
              value={otp}
              onChange={setOtp}
              inputType="number"
              numInputs={6}
              inputStyle={{
                padding: "1rem 0",
                color: "white",
                fontSize: "1rem",
                width: "3rem",
                height: "3rem",
                marginRight: "20px",
                backgroundColor: "transparent",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
              renderSeparator={<span></span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>

          <button
            className="w-full min-h-12 bg-primary rounded-md mt-3"
            onClick={handleOTPVerification}
          >
            Confirm OTP
          </button>

          <button className="w-full min-h-12 border border-primary text-primary bg-transparent rounded-md mt-1">
            Resend OTP
          </button>
        </div>

        <div
          className="bg-[white] absolute -top-3 -right-2 rounded p-3 cursor-pointer flex gap-1 items-center justify-center"
          onClick={() => setIsRequestedOTP(false)}
        >
          <FaTimes className="text-2xl text-[#000000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
