import { Button } from "@material-tailwind/react";
import React from "react";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className="w-[98%] lg:w-4/5 mx-auto p-3 xsm:p-5 sm:p-7 bg-[#161620] flex flex-col mt-32 gap-7">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-row mb-6 sm:mb-0 justify-between sm:justify-start sm:flex-col w-full sm:w-2/3 gap-6">
          <div>
            <div className="flex gap-1 items-center">
              <img src="/image/icons/logo.png" alt="logo" />
              <div className="flex flex-col mt-1">
                <p className="text-[#A942E7] font-bold text-[19px] leading-none">Steam</p>
                <p className="text-[#A942E7] font-bold text-sm leading-none">
                  Upgrade
                </p>
              </div>
            </div>
            <div className="mt-4 text-primary-grey text-xs">
              © 2024 SteamUpgrade.com | All rights reserved.
            </div>
          </div>
          <Button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none h-[45px] w-[140px] bg-primary-grey bg-opacity-10 lg:mt-10">
            <div className="flex gap-1 ">
              <Icon icon="Discord" />
              <span className="text-[13px] text-primary-grey normal-case">
                Support
              </span>
              <Icon icon="Link" className="w-3.5 ml-1" />
            </div>
          </Button>
        </div>
        <div className="flex w-full sm:w-1/3 sm:gap-6 lg:gap-16">
          <div className="flex flex-col gap-3 w-3/5">
            <span className="text-white font-bold text-sm">ABOUT</span>
            <span className="text-primary-grey font-bold text-sm">
              Cookies Policy
            </span>
            <span className="text-primary-grey font-bold text-sm">
              Terms of Service
            </span>
            <span className="text-primary-grey font-bold text-sm">
              Privacy Policy
            </span>
            <span className="text-primary-grey font-bold text-sm">Contact Us</span>
          </div>
          <div className="flex flex-col gap-3 w-2/5">
            <span className="text-white font-bold text-sm">SOCIAL</span>
            <div className="flex gap-1 items-center">
              <Icon icon="Steam" />
              <span className="text-primary-grey text-sm">Steam</span>
            </div>
            <div className="flex gap-1 items-center">
              <Icon icon="Discord" />
              <span className="text-primary-grey text-sm mt-1">Discord</span>
            </div>
            <div className="flex gap-1 items-center">
              <Icon icon="X" />
              <span className="text-primary-grey text-sm mt-1">X</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#303244] text-[#303244] opacity-50" />
      <Icon icon="Social" />
    </footer>
  );
};

export default Footer