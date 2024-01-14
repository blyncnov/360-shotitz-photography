import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="login-page w-full min-h-screen justify-center items-center flex">
      <div className="w-full max-w-[450px] bg-[#0F0F0F] rounded-2xl py-10 px-6">
        <div>
          <h1 className="text-3xl text-primary">Welcome Back!</h1>
          <p className="text-md text-white opacity-60 font-normal mt-1">
            Please enter your email and password
          </p>
        </div>
        <form className="flex flex-col gap-4 mt-8">
          <div>
            <label htmlFor="email_address">Email address</label>
            <input
              type="email"
              id="email_address"
              name="email_address"
              placeholder="Enter your email address"
              className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2"
            />
          </div>
          <div>
            <Link href="auth/register" className="text-primary float-right">
              Forgot password?
            </Link>
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <button className="w-full min-h-12 bg-primary rounded-md mt-3">
              Login
            </button>
            <button className="w-full min-h-12 border border-primary text-primary rounded-md mt-3">
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
