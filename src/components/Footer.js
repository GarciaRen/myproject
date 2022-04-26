import React from "react";
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] py-12 px-4 mx-auto">
      <div className="flex lg:flex-row flex-col mx-auto items-center">
        <div className="basis-2/5 flex flex-col gap-2 mx-4 ">
          <h1 className="text-green-400 text-xl font-bold">REACT.</h1>
          <p className="text-white text-sm tracking-tight">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex flex-row gap-5 justify-start text-white mt-3 items-center ">
            <FaFacebookSquare
              size={30}
              className="hover:scale-150 duration-300 drop-shadow-lg cursor-pointer"
            />
            <FaInstagram
              size={30}
              className="hover:scale-150 duration-300 drop-shadow-lg cursor-pointer"
            />
            <FaTwitterSquare
              size={30}
              className="hover:scale-150 duration-300 drop-shadow-lg cursor-pointer"
            />
            <FaGithubSquare
              size={30}
              className="hover:scale-150 duration-300 drop-shadow-lg cursor-pointer"
            />
            <FaYoutubeSquare
              size={30}
              className="hover:scale-150 duration-300 drop-shadow-lg cursor-pointer"
            />
          </div>
        </div>
        <div className="basis-3/5 flex lg:flex-row md:flex-row flex-wrap  lg:justify-evenly gap-10 lg:gap-0 mx-4 mt-8">
          <div>
            {" "}
            <h6 className="font-semibold text-lg  text-green-400">Solutions</h6>
            <ul className="text-sm text-white">
              <li className="py-2 border-b border-gray-200">Analytics</li>
              <li className="py-2 border-b border-gray-200">Marketing</li>
              <li className="py-2 border-b border-gray-200">Commerce</li>
              <li className="py-2 border-b border-gray-200">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg text-green-400">Support</h6>
            <ul className="text-sm text-white">
              <li className="py-2 border-b border-gray-200">Pricing</li>
              <li className="py-2 border-b border-gray-200">Documentation</li>
              <li className="py-2 border-b border-gray-200">Guides</li>
              <li className="py-2 border-b border-gray-200">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg text-green-400">Company</h6>
            <ul className="text-sm text-white">
              <li className="py-2 border-b border-gray-200">About</li>
              <li className="py-2 border-b border-gray-200">Blog</li>
              <li className="py-2 border-b border-gray-200">Jobs</li>
              <li className="py-2 border-b border-gray-200">Press</li>
              <li className="py-2 border-b border-gray-200">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-lg  text-green-400">Legal</h6>
            <ul className="text-sm text-white">
              <li className="py-2 border-b border-gray-200">Claim</li>
              <li className="py-2 border-b border-gray-200">Policy</li>
              <li className="py-2 border-b border-gray-200">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
