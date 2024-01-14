import React from "react";
import Image from "next/image";

// Shotitz Logo
import ShotitzLogo from "../../public/brand/logo.jpeg";

const LoadingPage = () => {
  return (
    <div className="page-not-found w-full min-h-[100dvh] flex justify-center items-center">
      <div className="animate-pulse">
        <Image
          src={ShotitzLogo}
          priority={true}
          alt="scanr logo"
          className="w-[120px] object-cover -ml-6"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
