import { Button } from "@material-tailwind/react";
import React from "react";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className="w-4/5 mx-auto p-7 bg-[#161620] flex flex-col mt-32 gap-7">
      <div className="flex justify-between">
        <div className="flex flex-col w-3/4 gap-6">
          <div className="flex gap-1 items-center">
            <img src="/image/icons/logo.png" alt="logo" />
            <div className="flex flex-col mt-1">
              <p className="text-[#A942E7] font-bold text-[19px] leading-none">Steam</p>
              <p className="text-[#A942E7] font-bold text-sm leading-none">
                Upgrade
              </p>
            </div>
          </div>
          <span className="text-primary-grey text-xs">
            © 2024 SteamUpgrade.com | All rights reserved.
          </span>
          <Button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-grey bg-opacity-10 w-[136px] mt-10"
            type="button" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture=""          >
            <div className="flex gap-1 ">
              <Icon icon="Discord" />
              <span className="text-[13px] text-primary-grey normal-case">
                Support
              </span>
              <Icon icon="Link" className="w-4" />
            </div>
          </Button>
        </div>
        <div className="flex w-1/4 gap-16">
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