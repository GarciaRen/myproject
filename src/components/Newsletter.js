import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-20 text-white px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center">
        <div className="basis-4/5 flex flex-col lg:items-center md:items-center w-full gap-2">
          <div className="">
            <h1 className="lg:text-3xl text-xl font-bold">
              Want tips & tricks to optimize your flow?
            </h1>
            <p className=" text-sm lg:text-lg">
              Sign up to our newsletter and stay up to date.
            </p>
          </div>
        </div>
        <div className="basis-3/5 flex flex-col lg:items-center md:items-center w-full gap-2">
          <div className="flex flex-col justify-center lg:flex-row gap-2 lg:mt-10 mt-3 ">
            <input
              className="py-1 lg:w-[250px]  rounded-md px-1 text-black w-auto"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-green-400 text-black border-1 font-semibold rounded-md w-[100px] border-black py-1">
              Notify Me
            </button>
          </div>
          <div>
            <p>We care bout the protection of your data. Read our </p>
            <span className="text-green-300">Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
