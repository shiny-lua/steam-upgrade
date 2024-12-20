import React from "react";
import { Link, useLocation } from "react-router-dom";

import WalletModal from "./wallet-modal";
import FreeModal from "./free-modal";
import { useGlobalContext } from "../../context";
import { Button } from "@material-tailwind/react";

const Header = () => {
  const [state, { dispatch }]: GlobalContextType = useGlobalContext();

  const [showWalletModal, setWalletModal] = React.useState(false);
  const [showFreeModal, setFreeModal] = React.useState(false);

  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="h-full w-full bg-primary pt-5 pb-8">
      <header className="flex justify-around">
        <div className="flex gap-6 items-center">
          {state.isLoggedIn && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: "isOpenedMenu",
                  payload: !state.isOpenedMenu
                })
              }}
              className="w-9 h-9 rounded-lg bg-[#252633] bg-opacity-90 flex items-center justify-center z-10 cursor-pointer"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute px-[2.5px] right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-[0] duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-300"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-150 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "delay-400 !w-full"
                      }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-200 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-500"
                      }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-smdelay-300 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-[0]"
                      }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-200"
                      }`}
                  ></span>
                </span>
              </span>
            </div>
          )}
          {state.isOpenedMenu && (
            <div
              className={`bg-primary-lightDark items-center rounded-lg flex gap-4 p-2 z-50 duration-300 ease-linear ${state.isOpenedMenu ? "fade-in" : "fade-out"
                }`}
            >
              <div>
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/home"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[14px] h-[14px]"
                  >
                    <g filter="url(#filter0_d_570_14911)">
                      <path
                        d="M6.82089 1.85829C7.85987 1.25844 9.13994 1.25844 10.1789 1.85829L12.9793 3.47509C14.0183 4.07495 14.6583 5.18352 14.6583 6.38323V9.61683C14.6583 10.8165 14.0183 11.9251 12.9793 12.525L10.1789 14.1418C9.13994 14.7416 7.85987 14.7416 6.82089 14.1418L4.02051 12.525C2.98154 11.9251 2.3415 10.8165 2.3415 9.61683V6.38322C2.3415 5.18352 2.98154 4.07495 4.02051 3.47509L6.82089 1.85829Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.98934 10.8902C6.19762 11.0985 6.53531 11.0985 6.74359 10.8902L8.31122 9.32259C8.41538 9.21843 8.58423 9.21843 8.68839 9.32259L10.256 10.8902C10.4643 11.0985 10.802 11.0985 11.0103 10.8902C11.2185 10.682 11.2185 10.3442 11.0103 10.136L9.44263 8.56835C8.92194 8.0476 8.07767 8.0476 7.55697 8.56835L5.98934 10.136C5.78106 10.3442 5.78106 10.682 5.98934 10.8902ZM5.98934 7.15688C6.19762 7.36515 6.53531 7.36515 6.74359 7.15688L8.31122 5.58924C8.41538 5.48509 8.58423 5.48509 8.68839 5.58924L10.256 7.15688C10.4643 7.36515 10.802 7.36515 11.0103 7.15688C11.2185 6.94861 11.2185 6.61091 11.0103 6.40263L9.44263 4.83498C8.92194 4.31428 8.07767 4.31428 7.55697 4.83498L5.98934 6.40263C5.78106 6.61091 5.78106 6.94861 5.98934 7.15688Z"
                        fill="#232431"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_570_14911"
                        x="0.549289"
                        y="0.888916"
                        width="15.9012"
                        height="15.9012"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="0.839505"></feOffset>
                        <feGaussianBlur stdDeviation="0.419753"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                        ></feColorMatrix>
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_570_14911"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_570_14911"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                  <span className="text-sm">Level Up</span>
                </Link>
              </div>
              <div>
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/orders"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 2.66667C2.5 2.29848 2.79848 2 3.16667 2C4.63943 2 5.83333 3.19391 5.83333 4.66667V8.75067C6.77041 8.99187 7.50813 9.7296 7.74933 10.6667H13.8333C14.2015 10.6667 14.5 10.9651 14.5 11.3333C14.5 11.7015 14.2015 12 13.8333 12H7.74933C7.45327 13.1501 6.40923 14 5.16667 14C3.69391 14 2.5 12.8061 2.5 11.3333C2.5 10.0908 3.34985 9.04673 4.5 8.75067V4.66667C4.5 3.93029 3.90305 3.33333 3.16667 3.33333C2.79848 3.33333 2.5 3.03485 2.5 2.66667ZM5.16667 10C5.90305 10 6.5 10.5969 6.5 11.3333C6.5 12.0697 5.90305 12.6667 5.16667 12.6667C4.43029 12.6667 3.83333 12.0697 3.83333 11.3333C3.83333 10.5969 4.43029 10 5.16667 10Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M9.83366 2.66663H10.167V5.33329C10.167 5.70148 10.4655 5.99996 10.8337 5.99996C11.2019 5.99996 11.5003 5.70148 11.5003 5.33329V2.66663H11.8337C13.3064 2.66663 14.5003 3.86053 14.5003 5.33329V6.66663C14.5003 8.13936 13.3064 9.33329 11.8337 9.33329H9.83366C8.36093 9.33329 7.16699 8.13936 7.16699 6.66663V5.33329C7.16699 3.86053 8.36093 2.66663 9.83366 2.66663Z"
                      fill="#A9ABCD"
                    ></path>
                  </svg>
                  <span className="text-sm ">Orders</span>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/ranks"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M7.83366 4C6.91319 4 6.16699 4.74619 6.16699 5.66667V12H10.8337V5.66667C10.8337 4.74619 10.0875 4 9.16699 4H7.83366Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M2.83301 5.66663C1.72844 5.66663 0.833008 6.56206 0.833008 7.66663V10.6666C0.833008 11.403 1.42996 12 2.16634 12H5.16634V5.66663H2.83301Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M11.833 6.66663V12H14.833C15.5694 12 16.1663 11.403 16.1663 10.6666V8.66663C16.1663 7.56203 15.2709 6.66663 14.1663 6.66663H11.833Z"
                      fill="#A9ABCD"
                    ></path>
                  </svg>
                  <span className="text-sm">Ranks</span>
                </Link>
              </div>
              <div>
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/affiliates"
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="NavBar_navIcon__Y7aDc"
                  >
                    <path
                      d="M2.8327 4.66667C2.8327 3.19391 4.02661 2 5.49937 2C6.97213 2 8.16602 3.19391 8.16602 4.66667C8.16602 6.13943 6.97213 7.33333 5.49937 7.33333C4.02661 7.33333 2.8327 6.13943 2.8327 4.66667Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M8.8327 4.66667C8.8327 3.19391 10.0266 2 11.4994 2C12.9722 2 14.166 3.19391 14.166 4.66667C14.166 6.13943 12.9722 7.33333 11.4994 7.33333C10.0266 7.33333 8.8327 6.13943 8.8327 4.66667Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M5.49919 8C7.41302 8 9.22842 9.32047 9.90415 11.7423C10.2574 13.0087 9.17735 14 8.06855 14H2.92983C1.82105 14 0.74098 13.0087 1.09427 11.7423C1.76994 9.32047 3.58534 8 5.49919 8Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M11.1889 11.3841C10.8637 10.2184 10.3046 9.2324 9.58594 8.46807C10.1829 8.15907 10.8354 8 11.4997 8C13.4135 8 15.2289 9.32047 15.9046 11.7423C16.2579 13.0087 15.1778 14 14.069 14H10.7198C11.2319 13.3033 11.4657 12.3761 11.1889 11.3841Z"
                      fill="#A9ABCD"
                    ></path>
                  </svg>
                  <span>Affiliates</span>
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <img src="/image/icons/logo.png" alt="logo" />
            <div className="text-white">SteamUpgrade</div>
          </div>
        </div>

        {state.isLoggedIn ? (
          <div className="flex rounded-[10px] border border-[#252633]">
            <div className="flex justify-center items-center w-24 text-sm text-white">
              $50.97
            </div>
            <div className="p-1 z-10">
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient flex items-center gap-2"
                type="button"
                style={{ position: "relative", overflow: "hidden" }}
                onClick={() => setWalletModal(true)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                </svg>
                <span
                  className="normal-case text-white text-sm"
                >
                  Wallet
                </span>
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={`bg-primary-lightDark items-center rounded-lg flex gap-4 p-2 z-50 duration-300 ease-linear `}
          >
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"} `}
                to="/home"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] h-[14px]"
                >
                  <g filter="url(#filter0_d_570_14911)">
                    <path
                      d="M6.82089 1.85829C7.85987 1.25844 9.13994 1.25844 10.1789 1.85829L12.9793 3.47509C14.0183 4.07495 14.6583 5.18352 14.6583 6.38323V9.61683C14.6583 10.8165 14.0183 11.9251 12.9793 12.525L10.1789 14.1418C9.13994 14.7416 7.85987 14.7416 6.82089 14.1418L4.02051 12.525C2.98154 11.9251 2.3415 10.8165 2.3415 9.61683V6.38322C2.3415 5.18352 2.98154 4.07495 4.02051 3.47509L6.82089 1.85829Z"
                      fill="#F3F3F3"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.98934 10.8902C6.19762 11.0985 6.53531 11.0985 6.74359 10.8902L8.31122 9.32259C8.41538 9.21843 8.58423 9.21843 8.68839 9.32259L10.256 10.8902C10.4643 11.0985 10.802 11.0985 11.0103 10.8902C11.2185 10.682 11.2185 10.3442 11.0103 10.136L9.44263 8.56835C8.92194 8.0476 8.07767 8.0476 7.55697 8.56835L5.98934 10.136C5.78106 10.3442 5.78106 10.682 5.98934 10.8902ZM5.98934 7.15688C6.19762 7.36515 6.53531 7.36515 6.74359 7.15688L8.31122 5.58924C8.41538 5.48509 8.58423 5.48509 8.68839 5.58924L10.256 7.15688C10.4643 7.36515 10.802 7.36515 11.0103 7.15688C11.2185 6.94861 11.2185 6.61091 11.0103 6.40263L9.44263 4.83498C8.92194 4.31428 8.07767 4.31428 7.55697 4.83498L5.98934 6.40263C5.78106 6.61091 5.78106 6.94861 5.98934 7.15688Z"
                      fill="#232431"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_570_14911"
                      x="0.549289"
                      y="0.888916"
                      width="15.9012"
                      height="15.9012"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="0.839505"></feOffset>
                      <feGaussianBlur stdDeviation="0.419753"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_570_14911"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_570_14911"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <span className="text-sm">Level Up</span>
              </Link>
            </div>
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"} `}
                to="/orders"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 2.66667C2.5 2.29848 2.79848 2 3.16667 2C4.63943 2 5.83333 3.19391 5.83333 4.66667V8.75067C6.77041 8.99187 7.50813 9.7296 7.74933 10.6667H13.8333C14.2015 10.6667 14.5 10.9651 14.5 11.3333C14.5 11.7015 14.2015 12 13.8333 12H7.74933C7.45327 13.1501 6.40923 14 5.16667 14C3.69391 14 2.5 12.8061 2.5 11.3333C2.5 10.0908 3.34985 9.04673 4.5 8.75067V4.66667C4.5 3.93029 3.90305 3.33333 3.16667 3.33333C2.79848 3.33333 2.5 3.03485 2.5 2.66667ZM5.16667 10C5.90305 10 6.5 10.5969 6.5 11.3333C6.5 12.0697 5.90305 12.6667 5.16667 12.6667C4.43029 12.6667 3.83333 12.0697 3.83333 11.3333C3.83333 10.5969 4.43029 10 5.16667 10Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M9.83366 2.66663H10.167V5.33329C10.167 5.70148 10.4655 5.99996 10.8337 5.99996C11.2019 5.99996 11.5003 5.70148 11.5003 5.33329V2.66663H11.8337C13.3064 2.66663 14.5003 3.86053 14.5003 5.33329V6.66663C14.5003 8.13936 13.3064 9.33329 11.8337 9.33329H9.83366C8.36093 9.33329 7.16699 8.13936 7.16699 6.66663V5.33329C7.16699 3.86053 8.36093 2.66663 9.83366 2.66663Z"
                    fill="#A9ABCD"
                  ></path>
                </svg>
                <span className="text-sm ">Orders</span>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"} `}
                to="/ranks"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    d="M7.83366 4C6.91319 4 6.16699 4.74619 6.16699 5.66667V12H10.8337V5.66667C10.8337 4.74619 10.0875 4 9.16699 4H7.83366Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M2.83301 5.66663C1.72844 5.66663 0.833008 6.56206 0.833008 7.66663V10.6666C0.833008 11.403 1.42996 12 2.16634 12H5.16634V5.66663H2.83301Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M11.833 6.66663V12H14.833C15.5694 12 16.1663 11.403 16.1663 10.6666V8.66663C16.1663 7.56203 15.2709 6.66663 14.1663 6.66663H11.833Z"
                    fill="#A9ABCD"
                  ></path>
                </svg>
                <span className="text-sm">Ranks</span>
              </Link>
            </div>
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"} `}
                to="/affiliates"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="NavBar_navIcon__Y7aDc"
                >
                  <path
                    d="M2.8327 4.66667C2.8327 3.19391 4.02661 2 5.49937 2C6.97213 2 8.16602 3.19391 8.16602 4.66667C8.16602 6.13943 6.97213 7.33333 5.49937 7.33333C4.02661 7.33333 2.8327 6.13943 2.8327 4.66667Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M8.8327 4.66667C8.8327 3.19391 10.0266 2 11.4994 2C12.9722 2 14.166 3.19391 14.166 4.66667C14.166 6.13943 12.9722 7.33333 11.4994 7.33333C10.0266 7.33333 8.8327 6.13943 8.8327 4.66667Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M5.49919 8C7.41302 8 9.22842 9.32047 9.90415 11.7423C10.2574 13.0087 9.17735 14 8.06855 14H2.92983C1.82105 14 0.74098 13.0087 1.09427 11.7423C1.76994 9.32047 3.58534 8 5.49919 8Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M11.1889 11.3841C10.8637 10.2184 10.3046 9.2324 9.58594 8.46807C10.1829 8.15907 10.8354 8 11.4997 8C13.4135 8 15.2289 9.32047 15.9046 11.7423C16.2579 13.0087 15.1778 14 14.069 14H10.7198C11.2319 13.3033 11.4657 12.3761 11.1889 11.3841Z"
                    fill="#A9ABCD"
                  ></path>
                </svg>
                <span>Affiliates</span>
              </Link>
            </div>
          </div>
        )}
        {state.isLoggedIn ? (
          <div className="flex gap-3 items-center">
            <div
              onClick={() => setFreeModal(true)}
              className="flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-4 h-4 text-primary-grey"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z"
                ></path>
              </svg>
              <span className="text-primary-grey text-sm">Free</span>
            </div>
            <div className="flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 text-primary-grey rounded-[10px]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                className="w-4 h-4 text-primary-grey"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
              </svg>
              <div className="bg-primary-dark flex items-center justify-center w-6 rounded-lg text-primary-grey">
                0
              </div>
            </div>
            <img
              src="/image/icons/user.png"
              alt=""
              className="!rounded-full w-10 h-10"
            />
          </div>
        ) : (
          <Button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 z-10"
            type="button"
            onClick={() => dispatch({
              type: "isLoggedIn",
              payload: true
            })}
          >
            <div className="flex gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary-white"
              >
                <g filter="url(#filter0_d_570_13921)">
                  <path
                    d="M1.28787 9.04138C1.72694 10.4768 2.61524 11.7333 3.82199 12.6259C5.02875 13.5186 6.49021 14.0003 7.99125 14C11.8622 14 15 10.8658 15 7C15 3.13425 11.8623 5.24811e-07 7.99213 5.24811e-07C6.21524 -0.00068686 4.50449 0.673889 3.20627 1.88714C1.90806 3.10038 1.11941 4.76163 1 6.5345L1.00262 6.53975L4.76863 8.08763C5.10828 7.86275 5.51057 7.75154 5.9175 7.77L7.6325 5.2815L7.63163 5.2465C7.63232 4.54069 7.91295 3.86398 8.41195 3.36482C8.91095 2.86565 9.58757 2.5848 10.2934 2.58388C10.9992 2.5848 11.6758 2.86565 12.1748 3.36482C12.6738 3.86398 12.9544 4.54069 12.9551 5.2465C12.9549 5.60116 12.8838 5.95221 12.7462 6.27907C12.6086 6.60594 12.4071 6.90207 12.1536 7.15011C11.9001 7.39815 11.5997 7.59312 11.2699 7.7236C10.9401 7.85408 10.5876 7.91745 10.233 7.91L7.7795 9.66C7.78782 9.98416 7.71497 10.3053 7.56758 10.5941C7.42018 10.8829 7.20292 11.1303 6.93555 11.3138C6.66817 11.4972 6.35918 11.611 6.03666 11.6446C5.71414 11.6782 5.38833 11.6306 5.08887 11.5063C4.80146 11.3865 4.54709 11.1993 4.34728 10.9605C4.14746 10.7217 4.00807 10.4383 3.94088 10.1343L1.28875 9.04138H1.28787Z"
                    fill="#F3F3F3"
                  ></path>
                  <path
                    d="M5.25951 11.0977C5.62407 11.2368 6.02849 11.2285 6.38701 11.0745C6.74553 10.9204 7.02995 10.6328 7.17996 10.2726C7.32997 9.91235 7.33376 9.50786 7.19054 9.14489C7.04731 8.78191 6.76833 8.489 6.41276 8.32828C6.06021 8.18117 5.66467 8.1749 5.30764 8.31078L6.20276 8.68178C6.33663 8.7375 6.45821 8.81906 6.56056 8.92177C6.66291 9.02449 6.74402 9.14636 6.79927 9.28042C6.85452 9.41449 6.88283 9.55812 6.88257 9.70312C6.88231 9.84813 6.85349 9.99166 6.79776 10.1255C6.74203 10.2594 6.66048 10.381 6.55777 10.4833C6.45505 10.5857 6.33318 10.6668 6.19912 10.722C6.06505 10.7773 5.92142 10.8056 5.77641 10.8053C5.63141 10.8051 5.48788 10.7763 5.35401 10.7205L4.48776 10.3618C4.6454 10.6937 4.92031 10.9564 5.25951 11.0977ZM8.51976 5.24653C8.51999 5.71701 8.70688 6.16818 9.03939 6.50103C9.37191 6.83388 9.8229 7.0212 10.2934 7.0219C10.7639 7.0212 11.2149 6.83388 11.5474 6.50103C11.8799 6.16818 12.0668 5.71701 12.067 5.24653C12.0663 4.77634 11.8792 4.32562 11.5468 3.99315C11.2143 3.66068 10.7636 3.47359 10.2934 3.4729C9.82321 3.47359 9.37248 3.66068 9.04001 3.99315C8.70754 4.32562 8.52046 4.77634 8.51976 5.24653ZM10.296 3.9104C10.4711 3.91052 10.6445 3.94512 10.8063 4.01224C10.968 4.07936 11.1149 4.17768 11.2387 4.30159C11.3624 4.4255 11.4606 4.57257 11.5275 4.7344C11.5944 4.89623 11.6288 5.06966 11.6286 5.24478C11.6285 5.41989 11.5939 5.59327 11.5268 5.75502C11.4597 5.91676 11.3614 6.0637 11.2374 6.18745C11.1135 6.31119 10.9665 6.40932 10.8046 6.47623C10.6428 6.54314 10.4694 6.57752 10.2943 6.5774C9.9406 6.57717 9.60151 6.43645 9.35159 6.18621C9.10168 5.93596 8.96141 5.59669 8.96164 5.24303C8.96187 4.88936 9.10259 4.55027 9.35283 4.30035C9.60307 4.05044 9.94235 3.91017 10.296 3.9104Z"
                    fill="#F3F3F3"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_d_570_13921"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13921"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13921"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <span
                className="text-white normal-case"
              >
                Sign In
              </span>
            </div>
          </Button>
        )}
      </header>
      {showWalletModal && <WalletModal isOpen={showWalletModal} onClose={() => setWalletModal(false)} />}
      {showFreeModal && <FreeModal isOpen={showFreeModal} onClose={() => setFreeModal(false)} />}
    </div>
  );
};

export default Header;
