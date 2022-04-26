import React from "react";
import Single from "../images/single.png";
import Double from "../images/double.png";
import Triple from "../images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-20 bg-white px-4">
      <div className="max-w-[1240px] flex lg:flex-row justify-evenly flex-wrap mx-auto">
        <div className="flex flex-col items-center shadow-xl p-10 my-4 border-2 rounded-lg hover:scale-105 duration-300 gap-1">
          <img className="w-20 bg-white border-black" src={Single} alt="#" />
          <h1 className="text-lg font-bold">Single User</h1>
          <p className="font-bold">Php 150</p>
          <div className="mt-3 text-sm">
            <p className="border-b border-gray-200">500 GB Storage</p>
            <p className="border-b border-gray-200">1 Granted User</p>
            <p className="border-b border-gray-200">Send up to 2 GB</p>
          </div>
          <button className="mt-2 bg-green-400 w-[150px] rounded-md p-1 font-semibold drop-shadow-lg">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col items-center shadow-xl p-10 my-4 border-2 rounded-lg hover:scale-105 duration-300 gap-1">
          <img className="w-20 bg-white border-black" src={Double} alt="#" />
          <h1 className="text-lg font-bold">Double User</h1>
          <p className="font-bold">Php 150</p>
          <div className="mt-3 text-sm">
            <p className="border-b border-gray-200">500 GB Storage</p>
            <p className="border-b border-gray-200">1 Granted User</p>
            <p className="border-b border-gray-200">Send up to 2 GB</p>
          </div>
          <button className="mt-2 bg-green-400 w-[150px] rounded-md p-1 font-semibold drop-shadow-lg">
            Start Trial
          </button>
        </div>
        <div className="flex flex-col items-center shadow-xl p-10 my-4 border-2 rounded-lg hover:scale-105 duration-300 gap-1">
          <img className="w-20 bg-white border-black" src={Triple} alt="#" />
          <h1 className="text-lg font-bold">Triple User</h1>
          <p className="font-bold">Php 150</p>
          <div className="mt-3 text-sm">
            <p className="border-b border-gray-200">500 GB Storage</p>
            <p className="border-b border-gray-200">1 Granted User</p>
            <p className="border-b border-gray-200">Send up to 2 GB</p>
          </div>
          <button className="mt-2 bg-green-400 w-[150px] rounded-md p-1 font-semibold drop-shadow-lg">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
