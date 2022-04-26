import React from "react";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col max-w-[800px] mt-[-60px] w-full h-screen mx-auto text-center justify-center">
        <p className="text-green-300 font-bold text-sm md:text-xl lg:text-2xl ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className=" lg:text-7xl md:text-6xl text-3xl font-bold p-2">
          Grow with data.
        </h1>

        <div>
          <p className="text-sm md:text-xl lg:text-2xl font-bold">
            Fast, flexible financing for BTB, BTC, & SASS platforms.
          </p>
        </div>
        <p className="text-sm md:text-xl lg:text-2xl text-gray-500">
          Monitor Monitor your data analytics to increase revenue for BTB, BTC,
          & SASS platforms.
        </p>
        <button className="bg-green-400 text-black drop-shadow-xl rounded-md w-[200px] font-medium mx-auto my-6 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
