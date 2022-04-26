import React from "react";
import Laptop from "../images/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img src={Laptop} className="w-[500px] mx-auto my-4 " alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-green-500 font-bold lg:text-2xl md:text-xl text-md">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-lg font-bold lg:text-3xl md:text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="bg-[#313030] text-[#00df9a] w-[200px] rounded-md mx-auto py-2 md:mx-0 my-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
