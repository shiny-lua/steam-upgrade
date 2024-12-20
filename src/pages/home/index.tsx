import React from "react";
import Layout from "../../components/layout";
import WalletModal from "../../components/layout/wallet-modal";
import LevelUpModal from "./components/level-up-modal";
import { useGlobalContext } from "../../context";
import { Button } from "@material-tailwind/react";

const Home = () => {
  const [state, { dispatch }]: GlobalContextType = useGlobalContext();

  const [showLevelUpModal, setShowLevelUpModal] = React.useState(false);
  return (
    <Layout>
      <div className="mx-auto w-[868px]">
        <div className="relative">
          <svg
            width="1141"
            height="842"
            viewBox="0 0 1141 842"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute left-0 top-[50px] z-0 transform scale-[2]"
          >
            <g opacity="0.33" filter="url(#filter0_f_570_13090)">
              <ellipse
                cx="285.599"
                cy="436.215"
                rx="85.5988"
                ry="205.785"
                fill="#4D69FF"
              ></ellipse>
              <ellipse
                cx="400.578"
                cy="374.785"
                rx="85.5988"
                ry="205.785"
                fill="#594DFF"
              ></ellipse>
              <ellipse
                cx="523.236"
                cy="436.215"
                rx="85.5988"
                ry="205.785"
                fill="#4D56FF"
              ></ellipse>
              <ellipse
                cx="627.988"
                cy="374.785"
                rx="85.5988"
                ry="205.785"
                fill="#884DFF"
              ></ellipse>
              <ellipse
                cx="719.98"
                cy="436.215"
                rx="85.5988"
                ry="205.785"
                fill="#BD5AFF"
              ></ellipse>
              <ellipse
                cx="855.401"
                cy="374.785"
                rx="85.5988"
                ry="205.785"
                fill="#DE5AFF"
              ></ellipse>
            </g>
            <defs>
              <filter
                id="filter0_f_570_13090"
                x="0"
                y="-31"
                width="1141"
                height="873"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_570_13090"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <div className="flex gap-4 mt-20 relative z-10">
            <div className="bg-primary-lightDark rounded-md flex flex-col gap-6 w-2/3 p-7">
              <div className="flex gap-2 items-center">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary-grey"
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
                <span className="text-primary-white text-base">Level Up</span>
              </div>
              <div className="rounded-r-full rounded-l-full bg-primary-dark flex gap-[14px] p-3 overflow-hidden">
                <div className="flex gap-2 items-center min-w-32">
                  <div className="flex items-center justify-center bg-primary-gradient w-5 h-5 rounded-full text-primary-white text-xs">
                    1
                  </div>
                  <span className="text-primary-white text-xs">
                    Choose Level
                  </span>
                </div>
                <div className="flex gap-2 items-center min-w-32">
                  <div className="flex items-center justify-center bg-primary-lightDark w-5 h-5 rounded-full text-primary-grey text-xs">
                    2
                  </div>
                  <span className="text-primary-grey text-xs">
                    Review Order
                  </span>
                </div>
                <div className="flex gap-2 items-center min-w-32">
                  <div className="flex items-center justify-center bg-primary-lightDark w-5 h-5 rounded-full text-primary-grey text-xs">
                    3
                  </div>
                  <span className="text-primary-grey text-xs">
                    Choose Payment
                  </span>
                </div>
                <div className="flex gap-2 items-center min-w-32">
                  <div className="flex items-center justify-center bg-primary-lightDark w-5 h-5 rounded-full text-primary-grey text-xs">
                    4
                  </div>
                  <span className="text-primary-grey text-xs">
                    Enjoy Your Level
                  </span>
                </div>
              </div>
              <div className="flex justify-around gap-3">
                <div className="flex flex-col gap-3 w-[45%]">
                  <span className="text-primary-grey text-xs">Your Level</span>
                  <div className="bg-primary-dark opacity-50 rounded-[10px] w-full px-4 py-3 flex justify-between items-center">
                    <span className="text-[#EDEDED] text-sm">0</span>
                    <div className="w-6 h-6 flex text-[10px] justify-center items-center rounded-full border border-[#828385] text-white">
                      0
                    </div>
                  </div>
                  <Button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 flex items-center justify-center gap-1"
                    type="button"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="text-primary-grey"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M497.408 898.56c-.08-.193-.272-.323-.385-.483l-91.92-143.664c-6.528-10.72-20.688-14.527-31.728-8.512l-8.193 5.04c-11.007 6-10.767 21.537-4.255 32.256l58.927 91.409c-5.024-1.104-10.096-2-15.056-3.296-103.184-26.993-190.495-96.832-239.535-191.6-46.336-89.52-55.04-191.695-24.512-287.743 30.512-96.048 99.775-174.464 189.295-220.784 15.248-7.888 21.2-26.64 13.312-41.856-7.872-15.264-26.64-21.231-41.855-13.327-104.272 53.952-184.4 145.28-219.969 257.152C45.982 485.008 56.11 604.033 110.078 708.29c57.136 110.336 158.832 191.664 279.024 223.136 1.36.352 2.784.56 4.16.911l-81.311 41.233c-11.008 6.032-14.657 19.631-8.128 30.351l3.152 8.176c6.56 10.72 17.84 14.527 28.815 8.512L484.622 944.4c.193-.128.385-.096.578-.224l9.984-5.456c5.52-3.024 9.168-7.969 10.624-13.505 1.52-5.52.815-11.663-2.448-16.991zm416.496-577.747c-57.056-110.304-155.586-191.63-275.762-223.118-8.56-2.24-17.311-3.984-26.048-5.712l79.824-40.48c11.008-6.033 17.568-19.632 11.04-30.369l-3.153-8.16c-6.56-10.736-20.752-14.528-31.727-8.528L519.262 80.654c-.176.112-.384.08-.577.208l-9.967 5.472c-5.537 3.04-9.168 7.967-10.624 13.503-1.52 5.52-.816 11.648 2.464 16.976l5.92 9.712c.096.192.272.305.384.497l91.92 143.648c6.512 10.736 20.688 14.528 31.712 8.513l7.216-5.025c11.008-6 11.727-21.536 5.231-32.24l-59.2-91.856c13.008 2 25.968 4.416 38.624 7.76 103.232 27.04 187.393 96.864 236.4 191.568 46.32 89.519 55.024 191.695 24.48 287.728-30.511 96.047-96.655 174.448-186.174 220.816-15.233 7.887-21.168 26.607-13.28 41.87 5.519 10.64 16.335 16.768 27.599 16.768 4.8 0 9.664-1.12 14.272-3.488 104.272-53.936 181.248-145.279 216.816-257.119 35.536-111.904 25.393-230.929-28.574-335.152z"></path>
                    </svg>
                    <span className="text-primary-grey normal-case">
                      Refresh
                    </span>
                  </Button>
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="mt-12 text-primary-dark opacity-75"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.56 14L5 13.587V2.393L5.54 2 11 7.627v.827L5.56 14z"></path>
                </svg>
                <div className="flex flex-col gap-3 w-[45%]">
                  <span className="text-primary-grey text-xs">
                    Dream Steam Level
                  </span>
                  <div className="bg-primary-dark opacity-50 rounded-[10px] w-full px-4 py-3 flex justify-between items-center">
                    <span className="text-[#EDEDED] text-sm">60</span>
                    <div className="w-6 h-6 flex text-[10px] justify-center items-center rounded-full border border-[#7653C9] text-white">
                      60
                    </div>
                  </div>
                  <div className="flex gap-2 h-8">
                    <div className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +1
                    </div>
                    <div className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +10
                    </div>
                    <div className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +100
                    </div>
                    <div className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bg-primary-dark border-primary-dark" />
              <div className="flex justify-between items-center">
                <span className="text-[13px] font-bold text-white">
                  $406.55
                </span>
                <div className="flex gap-[14px]">
                  <div className="flex gap-[6px] items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      className="text-[#3A3B54]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,60H76V196H44ZM212,196H100V60H212Z"></path>
                    </svg>
                    <span className="text-primary-grey text-[13px]">
                      3 Sets
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      className="text-[#3A3B54]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm-8,70.41-64-11.63V152h64ZM96,136H32a8,8,0,0,0-8,8v40a8,8,0,0,0,6.57,7.87l64,11.64a8.54,8.54,0,0,0,1.43.13,8,8,0,0,0,8-8V144A8,8,0,0,0,96,136Zm-8,50.05-48-8.73V152H88ZM213.13,33.86a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86ZM200,104H136V61.22l64-11.63ZM101.13,54.22a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM88,104H40V78.68L88,70Z"></path>
                    </svg>
                    <span className="text-primary-grey text-[13px]">
                      248 Cards
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      className="text-[#3A3B54]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"></path>
                    </svg>
                    <span className="text-primary-grey text-[13px]">
                      13 Games
                    </span>
                  </div>
                </div>
              </div>
              {!state.isLoggedIn ? (
                <Button
                  onClick={() => dispatch({type: "isLoggedIn", payload: true})}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4"
                  type="button"
                >
                  <div className="flex gap-1 justify-center items-center">
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
                    <span className="text-white normal-case text-sm">
                      Sign In with Steam
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                    </svg>
                  </div>
                </Button>
              ) : (
                <Button
                  onClick={() => setShowLevelUpModal(true)}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4"
                  type="button"
                >
                  <div className="flex gap-2 justify-center items-center">
                    Continue{" "}
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                    </svg>
                  </div>
                </Button>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-[#005128]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                  </svg>
                  <span className="text-white text-xs">Trustpilot</span>
                  <div className="ml-2 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
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
                        <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
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
                        <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
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
                        <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
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
                        <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
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
                        <path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <span className="text-primary-grey text-xs">
                  Rated&nbsp;4.7&nbsp;out of 5 Stars on{" "}
                  <span className="text-white">Trustpilot</span>
                </span>
              </div>
            </div>
            <div className="bg-primary-semiDark rounded-md flex flex-col gap-16 w-1/3 p-7">
              <div className="flex justify-between">
                <div className="flex w-[45%]">
                  <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <div className="border-[2px] border-[#828385] rounded-full w-10 h-10 text-white text-sm flex justify-center items-center">
                      0
                    </div>
                    <span className="text-primary-grey text-xs">
                      Current Level
                    </span>
                  </div>
                </div>
                <div className="flex w-[10%]">
                  <div className="rounded-full bg-[#0B0C13] flex justify-center mt-2 w-6 h-6 items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      className="text-primary-grey"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.56 14L5 13.587V2.393L5.54 2 11 7.627v.827L5.56 14z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex w-[45%]">
                  <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <div className="border-[2px] border-[#7652C9] rounded-full flex w-10 h-10 text-white text-sm justify-center items-center">
                      0
                    </div>
                    <span className="text-primary-grey text-xs">
                      Current Level
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Sets</span>
                  <span className="text-white text-xs font=bold">121</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">XP</span>
                  <span className="text-white text-xs font=bold">10,490</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">
                    Game Coupons
                  </span>
                  <span className="text-white text-xs font=bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Emotes</span>
                  <span className="text-white text-xs font=bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Backgrounds</span>
                  <span className="text-white text-xs font=bold">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Showcases</span>
                  <span className="text-white text-xs font=bold">
                    0
                    <span className="text-primary-grey text-xs text-bold">
                      /20
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Friend Cap</span>
                  <span className="text-white text-xs font=bold">
                    10
                    <span className="text-primary-grey text-xs text-bold">
                      /2,000
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">
                    Booster Pack Rate
                  </span>
                  <span className="text-white text-xs font=bold">+0%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">World Rank</span>
                  <span className="text-white text-xs font=bold">#2997856</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 flex justify-center gap-[14px] flex-col items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <g filter="url(#filter0_i_570_13265)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.00262 4.00003L24.0026 4C26.2118 4 28.0027 5.79085 28.0027 8V21.3811C28.0027 23.5901 26.2118 25.3809 24.0027 25.3811H20.501L16.8476 28.4077C16.3519 28.8184 15.6336 28.8164 15.1404 28.4028L11.5355 25.3811H8.00262C5.79349 25.3811 4.00262 23.5901 4.00262 21.3811V8.00003C4.00262 5.79089 5.79349 4.00003 8.00262 4.00003ZM12.8312 12.2369C12.8312 10.3969 14.3112 8.88444 16.1646 8.88444C18.0179 8.88444 19.4979 10.3969 19.4979 12.2369C19.4979 13.7408 18.5064 14.5253 17.9247 14.9208C17.7407 15.0459 17.6184 15.1563 17.5332 15.2708C17.4562 15.3745 17.3826 15.5169 17.3476 15.7492C17.2383 16.4773 16.5592 16.9791 15.8311 16.8696C15.1028 16.7603 14.6012 16.0813 14.7106 15.3531C14.9216 13.9473 15.7482 13.1759 16.4255 12.7154C16.635 12.5731 16.7318 12.4818 16.7814 12.4145C16.8159 12.3674 16.8218 12.3178 16.828 12.263L16.8312 12.2369C16.8312 11.8457 16.5212 11.5511 16.1646 11.5511C15.8079 11.5511 15.4979 11.8457 15.4979 12.2369C15.4979 12.9733 14.901 13.5703 14.1646 13.5703C13.4282 13.5703 12.8312 12.9733 12.8312 12.2369ZM15.9998 21C15.0792 21 14.3331 20.2539 14.3331 19.3333C14.3331 18.4128 15.0792 17.6667 15.9998 17.6667C16.9202 17.6667 17.6664 18.4128 17.6664 19.3333C17.6664 20.2539 16.9202 21 15.9998 21Z"
                fill="url(#paint0_linear_570_13265)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_i_570_13265"
                x="4.00262"
                y="4"
                width="24.0001"
                height="24.7144"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_570_13265"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_570_13265"
                x1="4"
                y1="4"
                x2="28"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A9ABCD"></stop>
                <stop offset="0.7" stop-color="#66688C"></stop>
                <stop offset="1" stop-color="#353655"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-[26px] text-white">HOW IT WORKS</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          <div className="bg-[#161620] opacity-90 flex gap-3 p-7 overflow-hidden">
            <div className="rounded-[10px] bg-[#252633] opacity-90 min-w-[38%] px-5 py-6 flex flex-col gap-[14px]">
              <span className="font-bold text-sm text-white">
                Log In with Steam &amp; Select Your Dream Level
              </span>
              <span className="text-primary-grey text-[13px]">
                Log into your Steam account via the button on the top right of
                the page and decide on the level you'd like to achieve. Use the
                level calculator to set your target level, and immediately see
                what it will take to reach it.
              </span>
              <svg
                width="246"
                height="164"
                viewBox="0 0 246 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_570_13274)">
                  <g clip-path="url(#clip0_570_13274)">
                    <rect width="246" height="164" rx="8" fill="#161620"></rect>
                    <rect
                      x="15"
                      y="-68"
                      width="307"
                      height="215.632"
                      rx="6.95094"
                      fill="#252633"
                      fill-opacity="0.9"
                    ></rect>
                    <g filter="url(#filter1_d_570_13274)">
                      <path
                        d="M33.047 16.2524V14.2714L31.2814 11.3868H32.5048L33.0539 12.3321L33.603 13.2705L34.1313 12.3182L34.6457 11.3868H35.8343L34.1035 14.2714V16.2524H33.047ZM34.8019 14.5147C34.8019 13.9679 34.9733 13.5254 35.3162 13.1871C35.6591 12.8442 36.0971 12.6727 36.63 12.6727C37.1675 12.6727 37.6054 12.8442 37.9437 13.1871C38.2866 13.5254 38.4581 13.9679 38.4581 14.5147C38.4581 15.0708 38.2889 15.518 37.9506 15.8562C37.6124 16.1945 37.1721 16.3637 36.63 16.3637C36.1063 16.3637 35.6707 16.1899 35.3232 15.8423C34.9756 15.4902 34.8019 15.0476 34.8019 14.5147ZM37.2138 15.3141C37.3575 15.1333 37.4293 14.8715 37.4293 14.5286C37.4293 14.1857 37.3575 13.9216 37.2138 13.7362C37.0748 13.5462 36.8802 13.4512 36.63 13.4512C36.3797 13.4512 36.1828 13.5462 36.0391 13.7362C35.9001 13.9216 35.8306 14.1857 35.8306 14.5286C35.8306 14.8715 35.9001 15.1333 36.0391 15.3141C36.1828 15.4902 36.3797 15.5782 36.63 15.5782C36.8802 15.5782 37.0748 15.4902 37.2138 15.3141ZM39.1372 15.1194V12.777H40.1242V14.8901C40.1242 15.3256 40.298 15.5434 40.6455 15.5434C40.8772 15.5434 41.051 15.4508 41.1669 15.2654C41.2827 15.0754 41.3406 14.8182 41.3406 14.4939V12.777H42.3277V16.2524H41.3406V15.6964C41.0765 16.1412 40.6988 16.3637 40.2076 16.3637C39.8833 16.3637 39.6238 16.2524 39.4291 16.03C39.2345 15.8029 39.1372 15.4994 39.1372 15.1194ZM43.2857 16.2524V12.777H44.2518V13.5694C44.3399 13.3516 44.4812 13.1523 44.6758 12.9716C44.8751 12.7955 45.1555 12.7075 45.5169 12.7075C45.6003 12.7075 45.6536 12.7098 45.6768 12.7144V13.7292C45.5424 13.7153 45.415 13.7084 45.2945 13.7084C44.9284 13.7084 44.6666 13.7941 44.509 13.9656C44.3515 14.1324 44.2727 14.429 44.2727 14.8553V16.2524H43.2857ZM47.6732 16.2524V11.3868H48.7297V15.3558H51.3502V16.2524H47.6732ZM51.6703 14.5078C51.6703 13.9748 51.8371 13.5369 52.1708 13.194C52.5044 12.8465 52.9238 12.6727 53.4289 12.6727C53.9525 12.6727 54.3649 12.8442 54.6661 13.1871C54.9673 13.53 55.118 13.9725 55.118 14.5147C55.118 14.6213 55.1156 14.7001 55.111 14.751H52.6573C52.6712 15.0337 52.7477 15.2492 52.8867 15.3975C53.0257 15.5411 53.2088 15.613 53.4358 15.613C53.7973 15.613 54.066 15.4114 54.2421 15.0082L55.1249 15.3488C55.0044 15.6269 54.8098 15.8678 54.541 16.0717C54.2769 16.2663 53.9085 16.3637 53.4358 16.3637C52.9029 16.3637 52.4743 16.1968 52.1499 15.8632C51.8302 15.5249 51.6703 15.0731 51.6703 14.5078ZM52.6921 14.0559H54.1379C54.0869 13.6064 53.8506 13.3817 53.4289 13.3817C53.2296 13.3817 53.0651 13.4396 52.9354 13.5555C52.8056 13.6713 52.7245 13.8381 52.6921 14.0559ZM56.6523 16.2524L55.3177 12.777H56.3534L56.833 14.2019L56.9859 14.6537C57.0693 14.9086 57.1551 15.1611 57.2431 15.4114C57.4146 14.8877 57.5443 14.4846 57.6323 14.2019L58.0911 12.777H59.099L57.8339 16.2524H56.6523ZM59.3068 14.5078C59.3068 13.9748 59.4736 13.5369 59.8073 13.194C60.1409 12.8465 60.5603 12.6727 61.0654 12.6727C61.589 12.6727 62.0015 12.8442 62.3027 13.1871C62.6039 13.53 62.7545 13.9725 62.7545 14.5147C62.7545 14.6213 62.7522 14.7001 62.7475 14.751H60.2939C60.3078 15.0337 60.3842 15.2492 60.5232 15.3975C60.6623 15.5411 60.8453 15.613 61.0724 15.613C61.4338 15.613 61.7026 15.4114 61.8787 15.0082L62.7614 15.3488C62.641 15.6269 62.4463 15.8678 62.1776 16.0717C61.9134 16.2663 61.545 16.3637 61.0724 16.3637C60.5395 16.3637 60.1108 16.1968 59.7864 15.8632C59.4667 15.5249 59.3068 15.0731 59.3068 14.5078ZM60.3286 14.0559H61.7744C61.7234 13.6064 61.4871 13.3817 61.0654 13.3817C60.8661 13.3817 60.7016 13.4396 60.5719 13.5555C60.4421 13.6713 60.361 13.8381 60.3286 14.0559ZM63.5004 16.2524V11.3868H64.4874V16.2524H63.5004Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <g filter="url(#filter2_i_570_13274)">
                      <rect
                        x="31.2189"
                        y="23.2034"
                        width="121.642"
                        height="27.8038"
                        rx="5.79245"
                        fill="#0C0D15"
                        fill-opacity="0.5"
                      ></rect>
                      <g opacity="0.5" filter="url(#filter3_d_570_13274)">
                        <path
                          d="M40.8031 37.4859C40.8031 36.4695 41.0626 35.6829 41.5816 35.126C42.106 34.5692 42.8061 34.2908 43.6819 34.2908C44.2442 34.2908 44.6983 34.3746 45.0443 34.5422V35.7829C44.6064 35.6153 44.1901 35.5315 43.7955 35.5315C43.3467 35.5315 42.9737 35.6694 42.6764 35.9451C42.3844 36.2154 42.2358 36.6047 42.2303 37.1128C42.3331 36.8912 42.5034 36.7101 42.7412 36.5695C42.9845 36.4289 43.2684 36.3587 43.5927 36.3587C44.0901 36.3587 44.5199 36.5209 44.8821 36.8452C45.2444 37.1696 45.4255 37.621 45.4255 38.1995C45.4255 38.8266 45.2173 39.324 44.801 39.6916C44.3848 40.0593 43.863 40.2431 43.2359 40.2431C42.7169 40.2485 42.2682 40.1187 41.8897 39.8538C41.5113 39.5889 41.2329 39.251 41.0545 38.8402C40.8815 38.4239 40.7977 37.9724 40.8031 37.4859ZM43.7549 38.8239C43.9171 38.6617 43.9982 38.4563 43.9982 38.2076C43.9982 37.9589 43.9198 37.7589 43.763 37.6075C43.6062 37.4507 43.4089 37.3723 43.171 37.3723C42.9332 37.3723 42.7358 37.4507 42.5791 37.6075C42.4277 37.7589 42.352 37.9589 42.352 38.2076C42.352 38.4617 42.4277 38.6672 42.5791 38.8239C42.7358 38.9807 42.9332 39.0591 43.171 39.0591C43.4035 39.0591 43.5981 38.9807 43.7549 38.8239ZM46.0219 37.4859C46.0219 36.4695 46.2815 35.6829 46.8005 35.126C47.3249 34.5692 48.025 34.2908 48.9008 34.2908C49.4631 34.2908 49.9172 34.3746 50.2632 34.5422V35.7829C49.8253 35.6153 49.409 35.5315 49.0143 35.5315C48.5656 35.5315 48.1926 35.6694 47.8952 35.9451C47.6033 36.2154 47.4546 36.6047 47.4492 37.1128C47.5519 36.8912 47.7222 36.7101 47.9601 36.5695C48.2034 36.4289 48.4872 36.3587 48.8116 36.3587C49.309 36.3587 49.7388 36.5209 50.101 36.8452C50.4632 37.1696 50.6443 37.621 50.6443 38.1995C50.6443 38.8266 50.4362 39.324 50.0199 39.6916C49.6036 40.0593 49.0819 40.2431 48.4548 40.2431C47.9358 40.2485 47.4871 40.1187 47.1086 39.8538C46.7302 39.5889 46.4517 39.251 46.2733 38.8402C46.1003 38.4239 46.0165 37.9724 46.0219 37.4859ZM48.9738 38.8239C49.136 38.6617 49.2171 38.4563 49.2171 38.2076C49.2171 37.9589 49.1387 37.7589 48.9819 37.6075C48.8251 37.4507 48.6278 37.3723 48.3899 37.3723C48.152 37.3723 47.9547 37.4507 47.7979 37.6075C47.6465 37.7589 47.5709 37.9589 47.5709 38.2076C47.5709 38.4617 47.6465 38.6672 47.7979 38.8239C47.9547 38.9807 48.152 39.0591 48.3899 39.0591C48.6224 39.0591 48.817 38.9807 48.9738 38.8239Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g clip-path="url(#clip1_570_13274)">
                        <circle
                          cx="136.641"
                          cy="37.1052"
                          r="6.54993"
                          stroke="#7652C9"
                          stroke-width="0.802032"
                        ></circle>
                        <g filter="url(#filter4_d_570_13274)">
                          <path
                            d="M134.148 36.8532C134.43 36.5448 134.752 36.3906 135.117 36.3906C135.474 36.3906 135.775 36.5205 136.019 36.7804C136.265 37.0384 136.388 37.3671 136.388 37.7666C136.388 38.172 136.266 38.5172 136.022 38.8023C135.779 39.0854 135.456 39.227 135.053 39.227C134.592 39.227 134.233 39.0496 133.977 38.6947C133.721 38.3378 133.593 37.8258 133.593 37.1586C133.593 35.5974 134.095 34.8167 135.1 34.8167C135.42 34.8167 135.69 34.906 135.911 35.0844C136.132 35.2628 136.267 35.5275 136.316 35.8786H135.751C135.703 35.4577 135.476 35.2473 135.071 35.2473C134.809 35.2473 134.596 35.386 134.433 35.6633C134.272 35.9387 134.177 36.3353 134.148 36.8532ZM134.143 37.2779C134.15 37.7666 134.235 38.1419 134.396 38.4037C134.557 38.6656 134.772 38.7965 135.041 38.7965C135.278 38.7965 135.467 38.7014 135.609 38.5114C135.75 38.3213 135.821 38.0847 135.821 37.8015C135.821 37.5145 135.748 37.2789 135.603 37.0946C135.459 36.9104 135.266 36.8182 135.024 36.8182C134.723 36.8182 134.43 36.9715 134.143 37.2779ZM137.465 36.8532C137.746 36.5448 138.069 36.3906 138.434 36.3906C138.79 36.3906 139.091 36.5205 139.335 36.7804C139.582 37.0384 139.705 37.3671 139.705 37.7666C139.705 38.172 139.583 38.5172 139.338 38.8023C139.096 39.0854 138.773 39.227 138.37 39.227C137.908 39.227 137.549 39.0496 137.293 38.6947C137.037 38.3378 136.909 37.8258 136.909 37.1586C136.909 35.5974 137.411 34.8167 138.416 34.8167C138.736 34.8167 139.007 34.906 139.228 35.0844C139.449 35.2628 139.584 35.5275 139.632 35.8786H139.068C139.019 35.4577 138.792 35.2473 138.387 35.2473C138.125 35.2473 137.913 35.386 137.75 35.6633C137.589 35.9387 137.494 36.3353 137.465 36.8532ZM137.459 37.2779C137.467 37.7666 137.551 38.1419 137.712 38.4037C137.873 38.6656 138.088 38.7965 138.358 38.7965C138.595 38.7965 138.784 38.7014 138.925 38.5114C139.067 38.3213 139.138 38.0847 139.138 37.8015C139.138 37.5145 139.065 37.2789 138.919 37.0946C138.776 36.9104 138.583 36.8182 138.34 36.8182C138.04 36.8182 137.746 36.9715 137.459 37.2779Z"
                            fill="white"
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g filter="url(#filter5_di_570_13274)">
                      <rect
                        x="31.2189"
                        y="57.958"
                        width="121.642"
                        height="18.5358"
                        rx="2.89623"
                        fill="#3A3B54"
                        shape-rendering="crispEdges"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M76.2252 63.608C76.3572 63.476 76.5711 63.476 76.7031 63.608L77.7167 64.6217C77.8487 64.7536 77.8487 64.9676 77.7167 65.0995L76.7031 66.1132C76.5711 66.2452 76.3572 66.2452 76.2252 66.1132C76.0933 65.9813 76.0933 65.7673 76.2252 65.6354L76.6621 65.1985H76.1262C75.0066 65.1985 74.0989 66.1062 74.0989 67.2259C74.0989 67.7784 74.3195 68.2787 74.6781 68.6447C74.8087 68.778 74.8066 68.9919 74.6733 69.1225C74.54 69.2531 74.326 69.251 74.1954 69.1177C73.718 68.6305 73.4231 67.9623 73.4231 67.2259C73.4231 65.733 74.6333 64.5227 76.1262 64.5227H76.6621L76.2252 64.0859C76.0933 63.9539 76.0933 63.74 76.2252 63.608ZM78.9308 65.3292C79.0641 65.1986 79.278 65.2007 79.4086 65.334C79.886 65.8212 80.181 66.4894 80.181 67.2259C80.181 68.7188 78.9707 69.929 77.4778 69.929H76.942L77.3788 70.3659C77.5108 70.4978 77.5108 70.7118 77.3788 70.8437C77.2469 70.9757 77.0329 70.9757 76.901 70.8437L75.8873 69.83C75.7554 69.6981 75.7554 69.4841 75.8873 69.3522L76.901 68.3385C77.0329 68.2066 77.2469 68.2066 77.3788 68.3385C77.5108 68.4705 77.5108 68.6844 77.3788 68.8164L76.942 69.2532H77.4778C78.5975 69.2532 79.5052 68.3455 79.5052 67.2259C79.5052 66.6733 79.2846 66.173 78.926 65.807C78.7953 65.6737 78.7975 65.4598 78.9308 65.3292Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M85.3557 69.7258V64.8602H87.7608C88.2751 64.8602 88.6806 64.9783 88.9772 65.2147C89.2738 65.4464 89.422 65.7568 89.422 66.1461C89.422 66.5307 89.3039 66.8389 89.0675 67.0706C88.8312 67.2976 88.537 67.4413 88.1848 67.5015C88.5092 67.534 88.7617 67.6336 88.9424 67.8004C89.1278 67.9672 89.2483 68.2198 89.3039 68.5581L89.5055 69.7258H88.3794L88.2334 68.6484C88.1917 68.3658 88.1014 68.1665 87.9623 68.0507C87.8233 67.9348 87.6009 67.8769 87.2951 67.8769H86.4123V69.7258H85.3557ZM86.4123 67.0219H87.5592C87.7955 67.0219 87.9809 66.9663 88.1153 66.8551C88.2543 66.7439 88.3238 66.584 88.3238 66.3755C88.3238 66.1716 88.2543 66.014 88.1153 65.9028C87.9809 65.7916 87.7955 65.736 87.5592 65.736H86.4123V67.0219ZM89.957 67.9811C89.957 67.4482 90.1238 67.0103 90.4575 66.6674C90.7911 66.3199 91.2105 66.1461 91.7156 66.1461C92.2392 66.1461 92.6516 66.3176 92.9528 66.6605C93.2541 67.0034 93.4047 67.4459 93.4047 67.9881C93.4047 68.0947 93.4023 68.1735 93.3977 68.2244H90.944C90.9579 68.5071 91.0344 68.7226 91.1734 68.8709C91.3124 69.0145 91.4955 69.0863 91.7225 69.0863C92.084 69.0863 92.3528 68.8848 92.5288 68.4816L93.4116 68.8222C93.2911 69.1002 93.0965 69.3412 92.8277 69.5451C92.5636 69.7397 92.1952 69.837 91.7225 69.837C91.1896 69.837 90.761 69.6702 90.4366 69.3366C90.1169 68.9983 89.957 68.5465 89.957 67.9811ZM90.9788 67.5293H92.4246C92.3736 67.0798 92.1373 66.8551 91.7156 66.8551C91.5163 66.8551 91.3518 66.913 91.2221 67.0289C91.0923 67.1447 91.0112 67.3115 90.9788 67.5293ZM94.3819 69.7258V67.0011H93.7077V66.2504H94.3819V65.7707C94.3819 65.4927 94.4584 65.2726 94.6113 65.1104C94.7642 64.9436 94.9774 64.8602 95.2508 64.8602H96.3212V65.6456H95.6748C95.5682 65.6456 95.4894 65.6711 95.4385 65.7221C95.3921 65.7684 95.369 65.8449 95.369 65.9515V66.2504H96.1753V67.0011H95.369V69.7258H94.3819ZM96.7572 69.7258V66.2504H97.7234V67.0428C97.8114 66.825 97.9528 66.6257 98.1474 66.445C98.3466 66.2689 98.627 66.1808 98.9884 66.1808C99.0719 66.1808 99.1251 66.1832 99.1483 66.1878V67.2026C99.0139 67.1887 98.8865 67.1818 98.766 67.1818C98.3999 67.1818 98.1381 67.2675 97.9806 67.439C97.823 67.6058 97.7442 67.9024 97.7442 68.3287V69.7258H96.7572ZM99.3788 67.9811C99.3788 67.4482 99.5456 67.0103 99.8792 66.6674C100.213 66.3199 100.632 66.1461 101.137 66.1461C101.661 66.1461 102.073 66.3176 102.375 66.6605C102.676 67.0034 102.826 67.4459 102.826 67.9881C102.826 68.0947 102.824 68.1735 102.819 68.2244H100.366C100.38 68.5071 100.456 68.7226 100.595 68.8709C100.734 69.0145 100.917 69.0863 101.144 69.0863C101.506 69.0863 101.775 68.8848 101.951 68.4816L102.833 68.8222C102.713 69.1002 102.518 69.3412 102.25 69.5451C101.985 69.7397 101.617 69.837 101.144 69.837C100.611 69.837 100.183 69.6702 99.8584 69.3366C99.5387 68.9983 99.3788 68.5465 99.3788 67.9811ZM100.401 67.5293H101.846C101.795 67.0798 101.559 66.8551 101.137 66.8551C100.938 66.8551 100.774 66.913 100.644 67.0289C100.514 67.1447 100.433 67.3115 100.401 67.5293ZM103.28 68.8292L104.177 68.5442C104.205 68.6693 104.272 68.799 104.379 68.9334C104.481 69.0632 104.678 69.128 104.97 69.128C105.132 69.128 105.259 69.0956 105.352 69.0307C105.449 68.9659 105.498 68.8824 105.498 68.7805C105.498 68.6832 105.465 68.6067 105.4 68.5511C105.336 68.4909 105.224 68.4445 105.067 68.4121L104.573 68.3148C104.17 68.236 103.876 68.1178 103.691 67.9603C103.51 67.8027 103.419 67.5641 103.419 67.2443C103.419 66.9107 103.554 66.6442 103.823 66.445C104.091 66.2457 104.455 66.1461 104.914 66.1461C105.294 66.1461 105.609 66.2249 105.859 66.3824C106.114 66.54 106.288 66.7277 106.381 66.9455L105.567 67.3139C105.447 66.9895 105.213 66.8273 104.865 66.8273C104.708 66.8273 104.585 66.8574 104.497 66.9176C104.413 66.9779 104.372 67.059 104.372 67.1609C104.372 67.2582 104.404 67.3324 104.469 67.3834C104.539 67.4297 104.666 67.4691 104.851 67.5015L105.331 67.5919C106.128 67.7448 106.527 68.1063 106.527 68.6762C106.527 69.0284 106.383 69.3088 106.096 69.5173C105.808 69.7212 105.414 69.8231 104.914 69.8231C104.501 69.8231 104.142 69.7328 103.837 69.5521C103.535 69.3713 103.35 69.1304 103.28 68.8292ZM107.224 69.7258V64.8602H108.211V66.1183V66.7856C108.476 66.3593 108.853 66.1461 109.344 66.1461C109.71 66.1461 109.986 66.255 110.172 66.4728C110.357 66.6906 110.45 66.9987 110.45 67.3973V69.7258H109.463V67.6127C109.463 67.1772 109.277 66.9594 108.906 66.9594C108.698 66.9594 108.543 67.0219 108.441 67.147C108.288 67.3324 108.211 67.6429 108.211 68.0785V69.7258H107.224Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <g filter="url(#filter6_i_570_13274)">
                      <path
                        d="M166.338 37.1037C166.338 36.1999 167.378 35.6915 168.091 36.2464L170.398 38.0404C170.957 38.4752 170.957 39.3202 170.398 39.755L168.091 41.549C167.378 42.1038 166.338 41.5955 166.338 40.6917L166.338 37.1037Z"
                        fill="#0C0D15"
                        fill-opacity="0.75"
                      ></path>
                    </g>
                    <g filter="url(#filter7_d_570_13274)">
                      <path
                        d="M184.724 16.2522V11.3865H186.559C187.277 11.3773 187.886 11.5951 188.387 12.0399C188.892 12.4848 189.14 13.0663 189.13 13.7846C189.14 14.5214 188.892 15.1192 188.387 15.578C187.886 16.0367 187.277 16.2615 186.559 16.2522H184.724ZM185.78 15.3764H186.51C187.529 15.3764 188.039 14.8527 188.039 13.8055C188.039 13.3282 187.912 12.9528 187.657 12.6794C187.402 12.4014 187.034 12.2624 186.552 12.2624H185.78V15.3764ZM189.9 16.2522V12.7767H190.867V13.5691C190.955 13.3513 191.096 13.1521 191.291 12.9714C191.49 12.7953 191.77 12.7072 192.132 12.7072C192.215 12.7072 192.268 12.7095 192.291 12.7142V13.729C192.157 13.7151 192.03 13.7082 191.909 13.7082C191.543 13.7082 191.281 13.7939 191.124 13.9653C190.966 14.1322 190.887 14.4287 190.887 14.8551V16.2522H189.9ZM192.522 14.5075C192.522 13.9746 192.689 13.5367 193.022 13.1938C193.356 12.8462 193.775 12.6725 194.281 12.6725C194.804 12.6725 195.217 12.8439 195.518 13.1868C195.819 13.5297 195.97 13.9723 195.97 14.5145C195.97 14.621 195.967 14.6998 195.963 14.7508H193.509C193.523 15.0335 193.599 15.2489 193.738 15.3972C193.877 15.5409 194.06 15.6127 194.287 15.6127C194.649 15.6127 194.918 15.4111 195.094 15.008L195.977 15.3486C195.856 15.6266 195.661 15.8676 195.393 16.0715C195.129 16.2661 194.76 16.3634 194.287 16.3634C193.755 16.3634 193.326 16.1966 193.002 15.8629C192.682 15.5247 192.522 15.0729 192.522 14.5075ZM193.544 14.0557H194.99C194.939 13.6062 194.702 13.3815 194.281 13.3815C194.081 13.3815 193.917 13.4394 193.787 13.5552C193.657 13.6711 193.576 13.8379 193.544 14.0557ZM196.514 15.3625C196.519 15.1354 196.574 14.9385 196.681 14.7716C196.787 14.6048 196.94 14.4704 197.14 14.3685C197.343 14.2665 197.568 14.1878 197.814 14.1322C198.064 14.0719 198.358 14.0256 198.697 13.9931V13.8611C198.697 13.5413 198.507 13.3815 198.127 13.3815C197.705 13.3815 197.45 13.5645 197.362 13.9306L196.472 13.736C196.5 13.444 196.662 13.1938 196.959 12.9853C197.26 12.7767 197.647 12.6725 198.12 12.6725C198.62 12.6725 199.002 12.786 199.267 13.0131C199.535 13.2401 199.67 13.5761 199.67 14.0209V15.293C199.67 15.3856 199.681 15.4436 199.704 15.4667C199.728 15.4899 199.786 15.5015 199.878 15.5015H200.184V16.2522H199.426C199.046 16.2522 198.838 16.0831 198.801 15.7448C198.532 16.1572 198.136 16.3634 197.612 16.3634C197.297 16.3634 197.035 16.2707 196.827 16.0854C196.618 15.9 196.514 15.6591 196.514 15.3625ZM198.697 14.8273V14.6048C198.298 14.6558 198.001 14.7276 197.807 14.8203C197.612 14.913 197.515 15.0613 197.515 15.2652C197.515 15.5154 197.665 15.6405 197.967 15.6405C198.175 15.6405 198.349 15.571 198.488 15.432C198.627 15.293 198.697 15.0914 198.697 14.8273ZM200.707 16.2522V12.7767H201.666V13.2772C201.884 12.874 202.231 12.6725 202.709 12.6725C203.135 12.6725 203.466 12.874 203.703 13.2772C203.985 12.874 204.375 12.6725 204.871 12.6725C205.227 12.6725 205.508 12.779 205.712 12.9922C205.915 13.2007 206.017 13.5135 206.017 13.9306V16.2522H205.03V14.1391C205.03 13.7035 204.85 13.4857 204.488 13.4857C204.349 13.4904 204.233 13.5205 204.141 13.5761C204.048 13.6317 203.981 13.7128 203.939 13.8194C203.902 13.9213 203.877 14.0209 203.863 14.1183C203.853 14.2156 203.849 14.3361 203.849 14.4797V16.2522H202.876V14.1391C202.876 13.7035 202.695 13.4857 202.333 13.4857C202.194 13.4904 202.079 13.5205 201.986 13.5761C201.893 13.6317 201.826 13.7128 201.784 13.8194C201.747 13.9213 201.722 14.0209 201.708 14.1183C201.699 14.2156 201.694 14.3361 201.694 14.4797V16.2522H200.707ZM208.296 14.862L209.29 14.5284C209.35 14.811 209.485 15.0474 209.693 15.2374C209.902 15.4274 210.177 15.5223 210.52 15.5223C210.835 15.5223 211.072 15.4667 211.229 15.3555C211.392 15.2443 211.473 15.0914 211.473 14.8968C211.473 14.577 211.208 14.3778 210.68 14.299L210.075 14.2156C209.051 14.0719 208.539 13.5854 208.539 12.7559C208.539 12.3342 208.711 11.982 209.054 11.6993C209.401 11.4167 209.872 11.2753 210.465 11.2753C211.03 11.2753 211.484 11.3958 211.827 11.6368C212.17 11.8731 212.402 12.1859 212.522 12.5751L211.549 12.9157C211.378 12.3828 211.016 12.1164 210.465 12.1164C210.191 12.1164 209.985 12.172 209.846 12.2832C209.707 12.3944 209.638 12.5381 209.638 12.7142C209.638 13.0015 209.846 13.1752 210.263 13.2355L210.868 13.3189C211.41 13.393 211.829 13.5575 212.126 13.8124C212.423 14.0673 212.571 14.4056 212.571 14.8273C212.571 15.2767 212.395 15.6451 212.043 15.9325C211.69 16.2198 211.183 16.3634 210.52 16.3634C209.899 16.3634 209.399 16.2244 209.019 15.9464C208.639 15.6683 208.398 15.3069 208.296 14.862ZM213.694 15.3416V13.5274H212.964V12.7767H213.694V11.6854H214.681V12.7767H215.585V13.5274H214.681V15.1609C214.681 15.2675 214.704 15.3463 214.75 15.3972C214.801 15.4436 214.88 15.4667 214.987 15.4667H215.737V16.2522H214.577C214.303 16.2522 214.088 16.1688 213.93 16.002C213.773 15.8351 213.694 15.615 213.694 15.3416ZM216.042 14.5075C216.042 13.9746 216.209 13.5367 216.543 13.1938C216.877 12.8462 217.296 12.6725 217.801 12.6725C218.325 12.6725 218.737 12.8439 219.038 13.1868C219.34 13.5297 219.49 13.9723 219.49 14.5145C219.49 14.621 219.488 14.6998 219.483 14.7508H217.03C217.043 15.0335 217.12 15.2489 217.259 15.3972C217.398 15.5409 217.581 15.6127 217.808 15.6127C218.169 15.6127 218.438 15.4111 218.614 15.008L219.497 15.3486C219.377 15.6266 219.182 15.8676 218.913 16.0715C218.649 16.2661 218.281 16.3634 217.808 16.3634C217.275 16.3634 216.846 16.1966 216.522 15.8629C216.202 15.5247 216.042 15.0729 216.042 14.5075ZM217.064 14.0557H218.51C218.459 13.6062 218.223 13.3815 217.801 13.3815C217.602 13.3815 217.437 13.4394 217.308 13.5552C217.178 13.6711 217.097 13.8379 217.064 14.0557ZM220.034 15.3625C220.039 15.1354 220.095 14.9385 220.201 14.7716C220.308 14.6048 220.461 14.4704 220.66 14.3685C220.864 14.2665 221.089 14.1878 221.334 14.1322C221.585 14.0719 221.879 14.0256 222.217 13.9931V13.8611C222.217 13.5413 222.027 13.3815 221.647 13.3815C221.225 13.3815 220.971 13.5645 220.882 13.9306L219.993 13.736C220.021 13.444 220.183 13.1938 220.479 12.9853C220.781 12.7767 221.167 12.6725 221.64 12.6725C222.141 12.6725 222.523 12.786 222.787 13.0131C223.056 13.2401 223.19 13.5761 223.19 14.0209V15.293C223.19 15.3856 223.202 15.4436 223.225 15.4667C223.248 15.4899 223.306 15.5015 223.399 15.5015H223.705V16.2522H222.947C222.567 16.2522 222.358 16.0831 222.321 15.7448C222.053 16.1572 221.656 16.3634 221.133 16.3634C220.818 16.3634 220.556 16.2707 220.347 16.0854C220.139 15.9 220.034 15.6591 220.034 15.3625ZM222.217 14.8273V14.6048C221.819 14.6558 221.522 14.7276 221.327 14.8203C221.133 14.913 221.035 15.0613 221.035 15.2652C221.035 15.5154 221.186 15.6405 221.487 15.6405C221.696 15.6405 221.87 15.571 222.009 15.432C222.148 15.293 222.217 15.0914 222.217 14.8273ZM224.227 16.2522V12.7767H225.187V13.2772C225.404 12.874 225.752 12.6725 226.229 12.6725C226.656 12.6725 226.987 12.874 227.223 13.2772C227.506 12.874 227.895 12.6725 228.391 12.6725C228.748 12.6725 229.028 12.779 229.232 12.9922C229.436 13.2007 229.538 13.5135 229.538 13.9306V16.2522H228.551V14.1391C228.551 13.7035 228.37 13.4857 228.009 13.4857C227.87 13.4904 227.754 13.5205 227.661 13.5761C227.569 13.6317 227.501 13.7128 227.46 13.8194C227.423 13.9213 227.397 14.0209 227.383 14.1183C227.374 14.2156 227.369 14.3361 227.369 14.4797V16.2522H226.396V14.1391C226.396 13.7035 226.215 13.4857 225.854 13.4857C225.715 13.4904 225.599 13.5205 225.506 13.5761C225.414 13.6317 225.347 13.7128 225.305 13.8194C225.268 13.9213 225.242 14.0209 225.228 14.1183C225.219 14.2156 225.214 14.3361 225.214 14.4797V16.2522H224.227ZM232.206 16.2522V11.3865H233.262V15.3555H235.883V16.2522H232.206ZM236.203 14.5075C236.203 13.9746 236.37 13.5367 236.703 13.1938C237.037 12.8462 237.456 12.6725 237.962 12.6725C238.485 12.6725 238.898 12.8439 239.199 13.1868C239.5 13.5297 239.651 13.9723 239.651 14.5145C239.651 14.621 239.648 14.6998 239.644 14.7508H237.19C237.204 15.0335 237.28 15.2489 237.419 15.3972C237.558 15.5409 237.741 15.6127 237.968 15.6127C238.33 15.6127 238.599 15.4111 238.775 15.008L239.658 15.3486C239.537 15.6266 239.342 15.8676 239.074 16.0715C238.81 16.2661 238.441 16.3634 237.968 16.3634C237.436 16.3634 237.007 16.1966 236.683 15.8629C236.363 15.5247 236.203 15.0729 236.203 14.5075ZM237.225 14.0557H238.671C238.62 13.6062 238.383 13.3815 237.962 13.3815C237.762 13.3815 237.598 13.4394 237.468 13.5552C237.338 13.6711 237.257 13.8379 237.225 14.0557ZM241.185 16.2522L239.85 12.7767H240.886L241.366 14.2017L241.519 14.6535C241.602 14.9083 241.688 15.1609 241.776 15.4111C241.947 14.8875 242.077 14.4843 242.165 14.2017L242.624 12.7767H243.632L242.367 16.2522H241.185ZM243.839 14.5075C243.839 13.9746 244.006 13.5367 244.34 13.1938C244.674 12.8462 245.093 12.6725 245.598 12.6725C246.122 12.6725 246.534 12.8439 246.835 13.1868C247.137 13.5297 247.287 13.9723 247.287 14.5145C247.287 14.621 247.285 14.6998 247.28 14.7508H244.826C244.84 15.0335 244.917 15.2489 245.056 15.3972C245.195 15.5409 245.378 15.6127 245.605 15.6127C245.966 15.6127 246.235 15.4111 246.411 15.008L247.294 15.3486C247.174 15.6266 246.979 15.8676 246.71 16.0715C246.446 16.2661 246.078 16.3634 245.605 16.3634C245.072 16.3634 244.643 16.1966 244.319 15.8629C243.999 15.5247 243.839 15.0729 243.839 14.5075ZM244.861 14.0557H246.307C246.256 13.6062 246.02 13.3815 245.598 13.3815C245.399 13.3815 245.234 13.4394 245.105 13.5552C244.975 13.6711 244.894 13.8379 244.861 14.0557ZM248.033 16.2522V11.3865H249.02V16.2522H248.033Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <g filter="url(#filter8_i_570_13274)">
                      <rect
                        x="184.14"
                        y="23.2031"
                        width="121.642"
                        height="27.8038"
                        rx="5.79245"
                        fill="#0C0D15"
                        fill-opacity="0.5"
                      ></rect>
                      <g filter="url(#filter9_d_570_13274)">
                        <path
                          d="M195.143 40.105V36.8612V36.0016C194.975 36.3152 194.754 36.572 194.478 36.772C194.208 36.9666 193.913 37.0748 193.594 37.0964V35.6205C194.443 35.5556 195.011 35.1582 195.297 34.4284H196.57V40.105H195.143ZM200.121 40.105V38.8723H197.348V37.7289L199.521 34.4284H201.491V37.7532H202.327V38.8723H201.491V40.105H200.121ZM200.121 37.7532V37.2505V35.588L198.677 37.7532H199.724H200.121ZM202.757 38.5318L204.208 38.2236C204.284 38.7858 204.57 39.067 205.068 39.067C205.3 39.067 205.484 39.0102 205.619 38.8967C205.76 38.7831 205.83 38.6291 205.83 38.4344C205.83 38.2344 205.76 38.0749 205.619 37.956C205.484 37.8316 205.298 37.7695 205.06 37.7695H204.468V36.7071H205.052C205.246 36.7071 205.411 36.6504 205.546 36.5368C205.687 36.4179 205.757 36.2665 205.757 36.0827C205.757 35.9043 205.692 35.7583 205.562 35.6448C205.433 35.5313 205.271 35.4745 205.076 35.4745C204.87 35.4745 204.706 35.5394 204.581 35.6691C204.457 35.7935 204.384 35.9746 204.362 36.2125L202.951 35.9854C203 35.488 203.216 35.0825 203.6 34.769C203.989 34.45 204.489 34.2905 205.1 34.2905C205.717 34.2905 206.214 34.4338 206.592 34.7203C206.971 35.0014 207.16 35.3691 207.16 35.8232C207.16 36.1638 207.06 36.453 206.86 36.6909C206.66 36.9234 206.382 37.0829 206.025 37.1694C206.414 37.2396 206.725 37.4045 206.957 37.664C207.19 37.9235 207.306 38.229 207.306 38.5804C207.306 39.0886 207.111 39.4941 206.722 39.7968C206.338 40.0942 205.8 40.2428 205.108 40.2428C204.443 40.2428 203.908 40.0942 203.503 39.7968C203.097 39.4995 202.849 39.0778 202.757 38.5318ZM208.028 40.105V38.6534C208.796 38.2695 209.385 37.9398 209.796 37.664C210.212 37.3829 210.491 37.1396 210.631 36.9342C210.777 36.7233 210.855 36.4909 210.866 36.2368C210.866 36.0151 210.799 35.834 210.664 35.6934C210.528 35.5529 210.361 35.4826 210.161 35.4826C209.642 35.4826 209.377 35.8502 209.366 36.5855L207.955 36.3828C207.95 35.8259 208.141 35.3366 208.531 34.9149C208.925 34.4933 209.482 34.2851 210.201 34.2905C210.855 34.2905 211.377 34.4554 211.766 34.7852C212.156 35.1096 212.35 35.5448 212.35 36.0908C212.35 36.6314 212.161 37.0991 211.783 37.4937C211.377 37.9425 210.609 38.4155 209.48 38.9129H211.207H212.358V40.105H208.028Z"
                          fill="#EDEDED"
                        ></path>
                      </g>
                    </g>
                    <g filter="url(#filter10_di_570_13274)">
                      <rect
                        x="184.14"
                        y="57.9578"
                        width="26.9349"
                        height="18.5358"
                        rx="2.89623"
                        fill="#3A3B54"
                        shape-rendering="crispEdges"
                      ></rect>
                      <path
                        d="M195.654 69.1139V67.689H194.229V66.8548H195.654V65.4299H196.488V66.8548H197.913V67.689H196.488V69.1139H195.654ZM199.627 69.7256V66.7367V66.0555C199.47 66.2965 199.275 66.498 199.043 66.6602C198.812 66.8178 198.573 66.9012 198.327 66.9105V65.8609C199.036 65.8006 199.514 65.467 199.759 64.8599H200.614V69.7256H199.627Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <g filter="url(#filter11_di_570_13274)">
                      <rect
                        x="215.709"
                        y="57.9578"
                        width="26.9349"
                        height="18.5358"
                        rx="2.89623"
                        fill="#3A3B54"
                        shape-rendering="crispEdges"
                      ></rect>
                      <path
                        d="M224.888 69.1139V67.689H223.463V66.8548H224.888V65.4299H225.722V66.8548H227.147V67.689H225.722V69.1139H224.888ZM228.861 69.7256V66.7367V66.0555C228.704 66.2965 228.509 66.498 228.277 66.6602C228.046 66.8178 227.807 66.9012 227.561 66.9105V65.8609C228.27 65.8006 228.748 65.467 228.993 64.8599H229.848V69.7256H228.861ZM230.775 67.2997C230.775 66.5119 230.961 65.891 231.331 65.4369C231.702 64.9781 232.189 64.7487 232.791 64.7487C233.389 64.7487 233.873 64.9781 234.244 65.4369C234.619 65.891 234.807 66.5119 234.807 67.2997C234.807 68.0921 234.622 68.7131 234.251 69.1626C233.88 69.6121 233.394 69.8368 232.791 69.8368C232.189 69.8368 231.702 69.6121 231.331 69.1626C230.961 68.7131 230.775 68.0921 230.775 67.2997ZM233.729 67.2997C233.729 66.7344 233.646 66.315 233.479 66.0416C233.312 65.7635 233.083 65.6245 232.791 65.6245C232.499 65.6245 232.27 65.7635 232.103 66.0416C231.936 66.315 231.853 66.7344 231.853 67.2997C231.853 67.865 231.936 68.2844 232.103 68.5578C232.27 68.8266 232.499 68.961 232.791 68.961C233.417 68.961 233.729 68.4072 233.729 67.2997Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <g opacity="0.5" filter="url(#filter12_d_570_13274)">
                      <line
                        x1="31.2189"
                        y1="91.4997"
                        x2="305.781"
                        y2="91.4997"
                        stroke="#303244"
                        stroke-opacity="0.5"
                        stroke-width="0.579245"
                        shape-rendering="crispEdges"
                      ></line>
                    </g>
                    <g filter="url(#filter13_d_570_13274)">
                      <rect
                        x="31.2189"
                        y="107.085"
                        width="274.562"
                        height="24.3283"
                        rx="4.63396"
                        fill="url(#paint0_linear_570_13274)"
                        shape-rendering="crispEdges"
                      ></rect>
                      <g filter="url(#filter14_d_570_13274)">
                        <path
                          d="M145.04 119.402C145.029 118.57 145.305 117.867 145.867 117.294C146.435 116.715 147.143 116.432 147.992 116.442C148.646 116.442 149.206 116.605 149.67 116.929C150.141 117.248 150.454 117.67 150.611 118.194L149.5 118.624C149.23 117.851 148.722 117.464 147.976 117.464C147.462 117.464 147.059 117.635 146.767 117.975C146.475 118.316 146.329 118.791 146.329 119.402C146.329 120.019 146.473 120.497 146.759 120.838C147.051 121.178 147.457 121.349 147.976 121.349C148.733 121.349 149.252 120.959 149.533 120.181L150.619 120.619C150.408 121.186 150.079 121.622 149.63 121.924C149.187 122.227 148.635 122.379 147.976 122.379C147.1 122.379 146.392 122.1 145.851 121.543C145.31 120.986 145.04 120.273 145.04 119.402ZM151.113 120.221C151.113 119.583 151.313 119.067 151.713 118.673C152.113 118.272 152.624 118.072 153.246 118.072C153.873 118.072 154.384 118.272 154.778 118.673C155.179 119.067 155.379 119.583 155.379 120.221C155.379 120.87 155.181 121.392 154.787 121.787C154.392 122.181 153.878 122.379 153.246 122.379C152.635 122.379 152.127 122.176 151.721 121.77C151.316 121.359 151.113 120.843 151.113 120.221ZM153.927 121.154C154.095 120.943 154.178 120.638 154.178 120.238C154.178 119.838 154.095 119.529 153.927 119.313C153.765 119.092 153.538 118.981 153.246 118.981C152.954 118.981 152.724 119.092 152.557 119.313C152.394 119.529 152.313 119.838 152.313 120.238C152.313 120.638 152.394 120.943 152.557 121.154C152.724 121.359 152.954 121.462 153.246 121.462C153.538 121.462 153.765 121.359 153.927 121.154ZM156.22 122.249V118.194H157.339V118.818C157.641 118.321 158.077 118.072 158.644 118.072C159.088 118.072 159.42 118.199 159.642 118.454C159.869 118.708 159.982 119.067 159.982 119.532V122.249H158.831V119.784C158.831 119.275 158.615 119.021 158.182 119.021C157.939 119.021 157.758 119.094 157.639 119.24C157.46 119.456 157.371 119.819 157.371 120.327V122.249H156.22ZM161.472 121.186V119.07H160.62V118.194H161.472V116.921H162.623V118.194H163.678V119.07H162.623V120.976C162.623 121.1 162.65 121.192 162.705 121.251C162.764 121.305 162.856 121.332 162.98 121.332H163.856V122.249H162.502C162.183 122.249 161.931 122.151 161.748 121.957C161.564 121.762 161.472 121.505 161.472 121.186ZM164.542 117.643V116.556H165.766V117.643H164.542ZM164.582 122.249V118.194H165.734V122.249H164.582ZM166.839 122.249V118.194H167.959V118.818C168.261 118.321 168.696 118.072 169.264 118.072C169.707 118.072 170.04 118.199 170.262 118.454C170.489 118.708 170.602 119.067 170.602 119.532V122.249H169.451V119.784C169.451 119.275 169.234 119.021 168.802 119.021C168.559 119.021 168.378 119.094 168.259 119.24C168.08 119.456 167.991 119.819 167.991 120.327V122.249H166.839ZM171.63 120.927V118.194H172.781V120.659C172.781 121.168 172.984 121.422 173.389 121.422C173.66 121.422 173.862 121.313 173.997 121.097C174.133 120.876 174.2 120.576 174.2 120.197V118.194H175.352V122.249H174.2V121.6C173.892 122.119 173.451 122.379 172.878 122.379C172.5 122.379 172.197 122.249 171.97 121.989C171.743 121.724 171.63 121.37 171.63 120.927ZM176.202 120.213C176.202 119.592 176.396 119.081 176.786 118.681C177.175 118.275 177.664 118.072 178.253 118.072C178.864 118.072 179.346 118.272 179.697 118.673C180.048 119.073 180.224 119.589 180.224 120.221C180.224 120.346 180.221 120.438 180.216 120.497H177.353C177.37 120.827 177.459 121.078 177.621 121.251C177.783 121.419 177.997 121.503 178.262 121.503C178.683 121.503 178.997 121.268 179.202 120.797L180.232 121.195C180.092 121.519 179.865 121.8 179.551 122.038C179.243 122.265 178.813 122.379 178.262 122.379C177.64 122.379 177.14 122.184 176.761 121.795C176.388 121.4 176.202 120.873 176.202 120.213ZM177.394 119.686H179.081C179.021 119.162 178.745 118.9 178.253 118.9C178.021 118.9 177.829 118.967 177.678 119.102C177.526 119.237 177.432 119.432 177.394 119.686Z"
                          fill="white"
                        ></path>
                      </g>
                      <g opacity="0.5" filter="url(#filter15_d_570_13274)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M186.985 116.306C187.117 116.175 187.331 116.175 187.463 116.306L189.45 118.293C189.977 118.821 189.977 119.676 189.45 120.204L187.463 122.191C187.331 122.323 187.117 122.323 186.985 122.191C186.853 122.059 186.853 121.845 186.985 121.713L188.972 119.726C189.236 119.462 189.236 119.035 188.972 118.771L186.985 116.784C186.853 116.652 186.853 116.438 186.985 116.306Z"
                          fill="white"
                        ></path>
                      </g>
                    </g>
                    <g filter="url(#filter16_d_570_13274)">
                      <g filter="url(#filter17_i_570_13274)">
                        <path
                          d="M191.305 121.719C189.7 121.156 188.157 122.699 188.72 124.304L194.111 139.666C194.723 141.411 197.159 141.493 197.888 139.794L200.561 133.56L206.795 130.887C208.494 130.158 208.412 127.722 206.667 127.11L191.305 121.719Z"
                          fill="url(#paint1_linear_570_13274)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="1"
                    y="1"
                    width="244"
                    height="162"
                    rx="7"
                    stroke="#161620"
                    stroke-width="2"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_i_570_13274"
                    x="0"
                    y="0"
                    width="246"
                    height="164"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 0 0.133333 0 0 0 0.75 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_d_570_13274"
                    x="31.2814"
                    y="11.3867"
                    width="33.2061"
                    height="5.5563"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter2_i_570_13274"
                    x="31.2189"
                    y="23.2034"
                    width="121.641"
                    height="28.9622"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1.15849"></feOffset>
                    <feGaussianBlur stdDeviation="2.31698"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter3_d_570_13274"
                    x="40.7949"
                    y="34.2908"
                    width="9.84937"
                    height="6.53969"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter4_d_570_13274"
                    x="133.593"
                    y="34.8167"
                    width="6.11218"
                    height="4.8076"
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
                    <feOffset dy="0.397197"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter5_di_570_13274"
                    x="31.2189"
                    y="57.958"
                    width="121.641"
                    height="19.6944"
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
                    <feOffset dy="1.15849"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter6_i_570_13274"
                    x="166.338"
                    y="36.0156"
                    width="4.47864"
                    height="6.92265"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1.15849"></feOffset>
                    <feGaussianBlur stdDeviation="2.31698"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter7_d_570_13274"
                    x="184.724"
                    y="11.2754"
                    width="64.2966"
                    height="5.66738"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter8_i_570_13274"
                    x="184.14"
                    y="23.2031"
                    width="121.641"
                    height="28.9622"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1.15849"></feOffset>
                    <feGaussianBlur stdDeviation="2.31698"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter9_d_570_13274"
                    x="193.594"
                    y="34.2825"
                    width="18.7643"
                    height="6.53969"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter10_di_570_13274"
                    x="184.14"
                    y="57.9578"
                    width="26.9349"
                    height="19.6944"
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
                    <feOffset dy="1.15849"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter11_di_570_13274"
                    x="215.709"
                    y="57.9578"
                    width="26.9349"
                    height="19.6944"
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
                    <feOffset dy="1.15849"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.579245"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter12_d_570_13274"
                    x="31.2189"
                    y="90.6307"
                    width="274.562"
                    height="1.15859"
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
                    <feOffset dy="-0.579245"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0 0.0823529 0 0 0 0.66 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter13_d_570_13274"
                    x="31.2189"
                    y="107.085"
                    width="274.562"
                    height="25.4869"
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
                    <feOffset dy="1.15849"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter14_d_570_13274"
                    x="144.445"
                    y="116.426"
                    width="36.3669"
                    height="7.11064"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feGaussianBlur stdDeviation="0.289623"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter15_d_570_13274"
                    x="183.604"
                    y="115.194"
                    width="9.26787"
                    height="9.26787"
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
                    <feOffset dy="0.579245"></feOffset>
                    <feGaussianBlur stdDeviation="0.289623"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter16_d_570_13274"
                    x="184"
                    y="119"
                    width="28"
                    height="28"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13274"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13274"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter17_i_570_13274"
                    x="188.602"
                    y="121.601"
                    width="19.4221"
                    height="19.4221"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.5"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13274"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_570_13274"
                    x1="30.8881"
                    y1="119.249"
                    x2="306.112"
                    y2="119.249"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AE42E9"></stop>
                    <stop offset="0.5" stop-color="#6852EA"></stop>
                    <stop offset="1" stop-color="#3C66EE"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_570_13274"
                    x1="188.599"
                    y1="121.601"
                    x2="207.43"
                    y2="141.799"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="#A9ABCD"></stop>
                  </linearGradient>
                  <clipPath id="clip0_570_13274">
                    <rect width="246" height="164" rx="8" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_570_13274">
                    <rect
                      width="13.9019"
                      height="13.9019"
                      fill="white"
                      transform="translate(129.691 30.1543)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="rounded-[10px] bg-[#252633] opacity-90 min-w-[38%] px-5 py-6 flex flex-col gap-[14px]">
              <span className="font-bold text-sm text-white">
                How the process works
              </span>
              <span className="text-primary-grey text-[13px]">
                As you select your level, check out the list of exclusive
                benefits and rewards that come with leveling up. This includes
                increased friend list capacity, profile customization options,
                and more community perks on Steam. See exactly how each level-up
                enhances your profile!
              </span>
              <svg
                width="246"
                height="164"
                viewBox="0 0 246 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_570_13350)">
                  <g clip-path="url(#clip0_570_13350)">
                    <rect width="246" height="164" rx="8" fill="#161620"></rect>
                    <g filter="url(#filter1_bdi_570_13350)">
                      <rect
                        x="16"
                        y="16"
                        width="246"
                        height="342.887"
                        rx="5.05479"
                        fill="#252633"
                      ></rect>
                      <g filter="url(#filter2_d_570_13350)">
                        <path
                          d="M27.7945 25.7535C28.3158 25.4525 28.9581 25.4525 29.4794 25.7535L30.7129 26.4656C31.2342 26.7666 31.5553 27.3228 31.5553 27.9248V29.3491C31.5553 29.9511 31.2342 30.5073 30.7129 30.8083L29.4794 31.5204C28.9581 31.8214 28.3158 31.8214 27.7945 31.5204L26.561 30.8083C26.0397 30.5073 25.7186 29.9511 25.7186 29.3491V27.9248C25.7186 27.3228 26.0397 26.7666 26.561 26.4656L27.7945 25.7535Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M27.4472 30.0067C27.5459 30.1054 27.7059 30.1054 27.8046 30.0067L28.5475 29.2638C28.5969 29.2145 28.6769 29.2145 28.7262 29.2638L29.4691 30.0067C29.5678 30.1054 29.7278 30.1054 29.8265 30.0067C29.9252 29.908 29.9252 29.748 29.8265 29.6493L29.0837 28.9064C28.8369 28.6596 28.4368 28.6596 28.1901 28.9064L27.4472 29.6493C27.3485 29.748 27.3485 29.908 27.4472 30.0067ZM27.4472 28.2375C27.5459 28.3362 27.7059 28.3362 27.8046 28.2375L28.5475 27.4946C28.5969 27.4453 28.6769 27.4453 28.7262 27.4946L29.4691 28.2375C29.5678 28.3362 29.7278 28.3362 29.8265 28.2375C29.9252 28.1388 29.9252 27.9788 29.8265 27.8801L29.0837 27.1372C28.8369 26.8905 28.4368 26.8905 28.1901 27.1372L27.4472 27.8801C27.3485 27.9788 27.3485 28.1388 27.4472 28.2375Z"
                          fill="#232431"
                        ></path>
                      </g>
                      <g filter="url(#filter3_d_570_13350)">
                        <path
                          d="M35.9428 31.137V26.4192H36.9673V30.2675H39.5082V31.137H35.9428ZM39.8185 29.4453C39.8185 28.9286 39.9803 28.504 40.3038 28.1715C40.6273 27.8345 41.0339 27.666 41.5237 27.666C42.0314 27.666 42.4313 27.8323 42.7233 28.1647C43.0154 28.4972 43.1614 28.9263 43.1614 29.452C43.1614 29.5554 43.1592 29.6318 43.1547 29.6812H40.7755C40.789 29.9553 40.8632 30.1642 40.998 30.308C41.1328 30.4473 41.3102 30.5169 41.5304 30.5169C41.8809 30.5169 42.1415 30.3215 42.3122 29.9306L43.1681 30.2608C43.0513 30.5304 42.8626 30.764 42.602 30.9617C42.3459 31.1504 41.9887 31.2448 41.5304 31.2448C41.0137 31.2448 40.5981 31.083 40.2835 30.7595C39.9735 30.4315 39.8185 29.9935 39.8185 29.4453ZM40.8092 29.0072H42.2111C42.1617 28.5714 41.9325 28.3535 41.5237 28.3535C41.3304 28.3535 41.1709 28.4096 41.0451 28.5219C40.9193 28.6343 40.8407 28.796 40.8092 29.0072ZM44.6491 31.137L43.3551 27.7671H44.3593L44.8243 29.1487L44.9726 29.5868C45.0535 29.8339 45.1366 30.0788 45.222 30.3215C45.3882 29.8137 45.514 29.4228 45.5994 29.1487L46.0442 27.7671H47.0215L45.7949 31.137H44.6491ZM47.223 29.4453C47.223 28.9286 47.3847 28.504 47.7082 28.1715C48.0318 27.8345 48.4384 27.666 48.9281 27.666C49.4359 27.666 49.8358 27.8323 50.1278 28.1647C50.4199 28.4972 50.5659 28.9263 50.5659 29.452C50.5659 29.5554 50.5636 29.6318 50.5592 29.6812H48.18C48.1935 29.9553 48.2676 30.1642 48.4024 30.308C48.5372 30.4473 48.7147 30.5169 48.9349 30.5169C49.2853 30.5169 49.5459 30.3215 49.7167 29.9306L50.5726 30.2608C50.4558 30.5304 50.2671 30.764 50.0065 30.9617C49.7504 31.1504 49.3932 31.2448 48.9349 31.2448C48.4182 31.2448 48.0025 31.083 47.688 30.7595C47.378 30.4315 47.223 29.9935 47.223 29.4453ZM48.2137 29.0072H49.6156C49.5662 28.5714 49.337 28.3535 48.9281 28.3535C48.7349 28.3535 48.5754 28.4096 48.4496 28.5219C48.3238 28.6343 48.2452 28.796 48.2137 29.0072ZM51.2891 31.137V26.4192H52.2462V31.137H51.2891ZM54.8115 29.297V26.4192H55.8359V29.1353C55.8359 29.5396 55.928 29.8474 56.1123 30.0586C56.2965 30.2653 56.5683 30.3686 56.9278 30.3686C57.6557 30.3686 58.0196 29.9575 58.0196 29.1353V26.4192H59.044V29.297C59.044 29.8946 58.8486 30.3686 58.4577 30.7191C58.0668 31.0696 57.5568 31.2448 56.9278 31.2448C56.2853 31.2448 55.7708 31.0696 55.3844 30.7191C55.0025 30.3686 54.8115 29.8946 54.8115 29.297ZM59.8915 32.4512V27.7671H60.8216V28.2187C60.9249 28.0704 61.0755 27.9401 61.2732 27.8278C61.4709 27.7154 61.6933 27.6593 61.9404 27.6593C62.3807 27.6593 62.7334 27.8255 62.9985 28.158C63.2681 28.486 63.4029 28.9173 63.4029 29.452C63.4029 29.9867 63.2681 30.4203 62.9985 30.7528C62.7334 31.0808 62.3807 31.2448 61.9404 31.2448C61.6978 31.2448 61.4798 31.1931 61.2866 31.0898C61.0979 30.9819 60.9519 30.8472 60.8486 30.6854V31.2718V32.4512H59.8915ZM62.3987 29.452C62.3987 28.7376 62.1336 28.3804 61.6034 28.3804C61.3563 28.3804 61.1608 28.4725 61.017 28.6567C60.8778 28.841 60.8081 29.1061 60.8081 29.452C60.8081 29.7935 60.8778 30.0564 61.017 30.2406C61.1608 30.4248 61.3563 30.5169 61.6034 30.5169C62.1336 30.5169 62.3987 30.1619 62.3987 29.452Z"
                          fill="#F3F3F3"
                        ></path>
                      </g>
                      <g filter="url(#filter4_i_570_13350)">
                        <rect
                          x="25.2671"
                          y="42.1165"
                          width="227.466"
                          height="16.8531"
                          rx="8.42653"
                          fill="#0C0D15"
                          fill-opacity="0.5"
                        ></rect>
                        <circle
                          cx="34.5342"
                          cy="50.5427"
                          r="4.21233"
                          fill="#3A3B54"
                        ></circle>
                        <circle
                          cx="34.5342"
                          cy="50.5427"
                          r="4.00171"
                          stroke="url(#paint0_linear_570_13350)"
                          stroke-opacity="0.15"
                          stroke-width="0.421233"
                        ></circle>
                        <g filter="url(#filter5_d_570_13350)">
                          <path
                            d="M34.4928 52.3313V50.1577V49.6624C34.3782 49.8376 34.2367 49.9842 34.0682 50.1021C33.8997 50.2167 33.7262 50.2774 33.5476 50.2841V49.5208C34.0632 49.477 34.4103 49.2344 34.5889 48.7929H35.2106V52.3313H34.4928Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <g filter="url(#filter6_d_570_13350)">
                          <path
                            d="M42.3439 50.7589C42.3372 50.2433 42.504 49.8086 42.8443 49.4547C43.1881 49.0975 43.6194 48.9223 44.1384 48.929C44.5461 48.929 44.8915 49.0301 45.1746 49.2323C45.4577 49.4345 45.6447 49.6906 45.7357 50.0007L45.1241 50.2281C44.9556 49.7361 44.6253 49.4901 44.1333 49.4901C43.7963 49.4901 43.5284 49.603 43.3296 49.8288C43.1342 50.0546 43.0364 50.3629 43.0364 50.7538C43.0364 51.1548 43.1342 51.4716 43.3296 51.7041C43.5251 51.9366 43.793 52.0529 44.1333 52.0529C44.6287 52.0529 44.9657 51.8002 45.1443 51.2947L45.7407 51.5323C45.6228 51.8726 45.4273 52.1388 45.1544 52.3309C44.8814 52.523 44.5411 52.619 44.1333 52.619C43.6009 52.6258 43.1679 52.4522 42.8342 52.0984C42.5006 51.7412 42.3372 51.2947 42.3439 50.7589ZM46.2668 52.5432V49.0049H46.8835V49.9248V50.4253C46.9542 50.3006 47.052 50.1927 47.1767 50.1017C47.3081 50.0007 47.4867 49.9501 47.7125 49.9501C47.9821 49.9501 48.1859 50.031 48.3241 50.1927C48.4623 50.3545 48.5313 50.5803 48.5313 50.8701V52.5432H47.9147V51.0066C47.9147 50.646 47.763 50.4657 47.4597 50.4657C47.2845 50.4657 47.1548 50.5179 47.0705 50.6224C46.9458 50.774 46.8835 51.0301 46.8835 51.3907V52.5432H46.2668ZM49.0764 51.2846C49.0764 50.8937 49.1943 50.5735 49.4302 50.3242C49.6695 50.0748 49.9744 49.9501 50.3451 49.9501C50.7158 49.9501 51.0191 50.0748 51.255 50.3242C51.4942 50.5735 51.6139 50.8937 51.6139 51.2846C51.6139 51.6788 51.4942 52.0007 51.255 52.25C51.0157 52.496 50.7124 52.619 50.3451 52.619C49.9812 52.619 49.6779 52.4927 49.4352 52.2399C49.196 51.9872 49.0764 51.6687 49.0764 51.2846ZM50.977 51.2947C50.977 51.0251 50.918 50.8178 50.8 50.6729C50.6855 50.5247 50.5338 50.4505 50.3451 50.4505C50.1497 50.4505 49.9946 50.5247 49.8801 50.6729C49.7689 50.8178 49.7133 51.0251 49.7133 51.2947C49.7133 51.5609 49.7689 51.7648 49.8801 51.9063C49.9946 52.0478 50.1497 52.1186 50.3451 52.1186C50.5406 52.1186 50.6939 52.0478 50.8051 51.9063C50.9197 51.7648 50.977 51.5609 50.977 51.2947ZM52.0085 51.2846C52.0085 50.8937 52.1265 50.5735 52.3624 50.3242C52.6016 50.0748 52.9066 49.9501 53.2773 49.9501C53.648 49.9501 53.9513 50.0748 54.1871 50.3242C54.4264 50.5735 54.546 50.8937 54.546 51.2846C54.546 51.6788 54.4264 52.0007 54.1871 52.25C53.9479 52.496 53.6446 52.619 53.2773 52.619C52.9133 52.619 52.6101 52.4927 52.3674 52.2399C52.1282 51.9872 52.0085 51.6687 52.0085 51.2846ZM53.9091 51.2947C53.9091 51.0251 53.8502 50.8178 53.7322 50.6729C53.6176 50.5247 53.466 50.4505 53.2773 50.4505C53.0818 50.4505 52.9268 50.5247 52.8122 50.6729C52.701 50.8178 52.6454 51.0251 52.6454 51.2947C52.6454 51.5609 52.701 51.7648 52.8122 51.9063C52.9268 52.0478 53.0818 52.1186 53.2773 52.1186C53.4727 52.1186 53.6261 52.0478 53.7373 51.9063C53.8518 51.7648 53.9091 51.5609 53.9091 51.2947ZM54.8952 51.8962L55.4664 51.7092C55.5271 52.0057 55.7293 52.154 56.073 52.154C56.2145 52.154 56.324 52.1287 56.4015 52.0782C56.4824 52.0276 56.5229 51.9569 56.5229 51.8659C56.5229 51.785 56.4942 51.7193 56.4369 51.6687C56.383 51.6182 56.287 51.5794 56.1488 51.5525L55.8152 51.4918C55.5389 51.4345 55.3333 51.3503 55.1985 51.2391C55.0671 51.1279 55.0014 50.9594 55.0014 50.7336C55.0014 50.5011 55.0957 50.3124 55.2844 50.1675C55.4765 50.0226 55.7225 49.9501 56.0224 49.9501C56.3021 49.9501 56.5313 50.0091 56.7099 50.127C56.8885 50.2416 57.0098 50.3848 57.0738 50.5567L56.5532 50.7791C56.4588 50.523 56.2752 50.3949 56.0022 50.3949C55.8708 50.3949 55.768 50.4219 55.6939 50.4758C55.6231 50.5263 55.5877 50.5937 55.5877 50.678C55.5877 50.7521 55.6147 50.8111 55.6686 50.8549C55.7225 50.8953 55.8236 50.9307 55.9719 50.9611L56.3004 51.0217C56.5363 51.0655 56.7385 51.1498 56.907 51.2745C57.0755 51.3958 57.1598 51.5727 57.1598 51.8052C57.1598 52.0512 57.0603 52.2483 56.8615 52.3966C56.6627 52.5415 56.3914 52.614 56.0477 52.614C55.7613 52.614 55.5102 52.55 55.2945 52.4219C55.0822 52.2905 54.9491 52.1152 54.8952 51.8962ZM57.5373 51.2846C57.5373 50.8903 57.6519 50.5702 57.8811 50.3242C58.1136 50.0748 58.4051 49.9501 58.7555 49.9501C59.1127 49.9501 59.3992 50.0714 59.6149 50.314C59.8305 50.5533 59.9384 50.8633 59.9384 51.2441C59.9384 51.298 59.935 51.3621 59.9282 51.4362H58.149C58.1591 51.6687 58.2197 51.844 58.3309 51.9619C58.4421 52.0765 58.5887 52.1338 58.7707 52.1338C59.047 52.1338 59.2526 51.9821 59.3874 51.6788L59.9434 51.8861C59.748 52.3747 59.3554 52.619 58.7656 52.619C58.3916 52.619 58.0934 52.5011 57.8709 52.2652C57.6485 52.0259 57.5373 51.6991 57.5373 51.2846ZM58.1692 50.9813H59.3166C59.3065 50.8027 59.2509 50.6628 59.1498 50.5617C59.0521 50.4606 58.9207 50.4101 58.7555 50.4101C58.6005 50.4101 58.4691 50.4606 58.3613 50.5617C58.2568 50.6628 58.1928 50.8027 58.1692 50.9813ZM61.8429 52.5432V49.0049H62.5V51.967H64.4057V52.5432H61.8429ZM64.6604 51.2846C64.6604 50.8903 64.775 50.5702 65.0042 50.3242C65.2367 50.0748 65.5282 49.9501 65.8786 49.9501C66.2359 49.9501 66.5223 50.0714 66.738 50.314C66.9536 50.5533 67.0615 50.8633 67.0615 51.2441C67.0615 51.298 67.0581 51.3621 67.0514 51.4362H65.2721C65.2822 51.6687 65.3428 51.844 65.454 51.9619C65.5653 52.0765 65.7118 52.1338 65.8938 52.1338C66.1701 52.1338 66.3757 51.9821 66.5105 51.6788L67.0665 51.8861C66.8711 52.3747 66.4785 52.619 65.8888 52.619C65.5147 52.619 65.2165 52.5011 64.9941 52.2652C64.7716 52.0259 64.6604 51.6991 64.6604 51.2846ZM65.2923 50.9813H66.4397C66.4296 50.8027 66.374 50.6628 66.2729 50.5617C66.1752 50.4606 66.0438 50.4101 65.8786 50.4101C65.7236 50.4101 65.5922 50.4606 65.4844 50.5617C65.3799 50.6628 65.3159 50.8027 65.2923 50.9813ZM68.1986 52.5432L67.2736 50.0259H67.9206L68.3048 51.2037L68.5727 52.0074L68.6788 51.6738L68.8254 51.2037L69.1944 50.0259H69.8212L68.9417 52.5432H68.1986ZM70.041 51.2846C70.041 50.8903 70.1556 50.5702 70.3848 50.3242C70.6173 50.0748 70.9088 49.9501 71.2592 49.9501C71.6164 49.9501 71.9029 50.0714 72.1186 50.314C72.3342 50.5533 72.4421 50.8633 72.4421 51.2441C72.4421 51.298 72.4387 51.3621 72.432 51.4362H70.6527C70.6628 51.6687 70.7234 51.844 70.8346 51.9619C70.9458 52.0765 71.0924 52.1338 71.2744 52.1338C71.5507 52.1338 71.7563 51.9821 71.8911 51.6788L72.4471 51.8861C72.2517 52.3747 71.8591 52.619 71.2693 52.619C70.8953 52.619 70.5971 52.5011 70.3747 52.2652C70.1522 52.0259 70.041 51.6991 70.041 51.2846ZM70.6729 50.9813H71.8203C71.8102 50.8027 71.7546 50.6628 71.6535 50.5617C71.5558 50.4606 71.4244 50.4101 71.2592 50.4101C71.1042 50.4101 70.9728 50.4606 70.865 50.5617C70.7605 50.6628 70.6965 50.8027 70.6729 50.9813ZM73.0266 52.5432V49.0049H73.6433V52.5432H73.0266Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <circle
                          cx="86.3881"
                          cy="50.5427"
                          r="4.21233"
                          fill="url(#paint1_linear_570_13350)"
                        ></circle>
                        <circle
                          cx="86.3881"
                          cy="50.5427"
                          r="4.00171"
                          stroke="url(#paint2_linear_570_13350)"
                          stroke-opacity="0.3"
                          stroke-width="0.421233"
                        ></circle>
                        <g filter="url(#filter7_d_570_13350)">
                          <path
                            d="M85.0984 52.3311V51.5526C85.614 51.2527 85.9964 51.0118 86.2458 50.8298C86.4952 50.6444 86.662 50.4861 86.7462 50.3546C86.8338 50.2198 86.8827 50.0648 86.8928 49.8896C86.8928 49.7312 86.844 49.6015 86.7462 49.5004C86.6485 49.3993 86.5255 49.3487 86.3772 49.3487C86.0133 49.3487 85.8229 49.5964 85.806 50.0918L85.0731 49.9755C85.0731 49.6318 85.191 49.3336 85.4269 49.0808C85.6662 48.8281 85.9897 48.7051 86.3974 48.7118C86.7917 48.7118 87.1018 48.8129 87.3275 49.0151C87.5533 49.2173 87.6662 49.4852 87.6662 49.8188C87.6662 50.1457 87.5685 50.4271 87.373 50.663C87.2349 50.8315 87.0411 50.9966 86.7917 51.1583C86.5424 51.3201 86.2087 51.4987 85.7909 51.6942H86.8271H87.6814V52.3311H85.0984Z"
                            fill="#EDEDED"
                          ></path>
                        </g>
                        <g filter="url(#filter8_d_570_13350)">
                          <path
                            d="M94.4303 52.5432V49.0049H96.0781C96.4387 49.0049 96.7251 49.0925 96.9374 49.2677C97.1497 49.4429 97.2559 49.6704 97.2559 49.9501C97.2559 50.2231 97.175 50.4404 97.0133 50.6022C96.8515 50.7639 96.6409 50.8701 96.3814 50.9206C96.6139 50.9476 96.7909 51.02 96.9122 51.138C97.0335 51.2559 97.116 51.4362 97.1599 51.6788L97.3216 52.5432H96.6139L96.4926 51.7344C96.4623 51.5188 96.3915 51.3688 96.2803 51.2846C96.1691 51.197 95.9972 51.1531 95.7647 51.1531H95.0874V52.5432H94.4303ZM95.0874 50.5971H95.9619C96.1506 50.5971 96.2989 50.5533 96.4067 50.4657C96.5179 50.3781 96.5735 50.25 96.5735 50.0815C96.5735 49.9164 96.5179 49.79 96.4067 49.7024C96.2989 49.6148 96.1506 49.571 95.9619 49.571H95.0874V50.5971ZM97.697 51.2846C97.697 50.8903 97.8116 50.5702 98.0407 50.3242C98.2732 50.0748 98.5647 49.9501 98.9152 49.9501C99.2724 49.9501 99.5589 50.0714 99.7745 50.314C99.9902 50.5533 100.098 50.8633 100.098 51.2441C100.098 51.298 100.095 51.3621 100.088 51.4362H98.3086C98.3187 51.6687 98.3794 51.844 98.4906 51.9619C98.6018 52.0765 98.7484 52.1338 98.9304 52.1338C99.2067 52.1338 99.4123 51.9821 99.5471 51.6788L100.103 51.8861C99.9076 52.3747 99.515 52.619 98.9253 52.619C98.5513 52.619 98.253 52.5011 98.0306 52.2652C97.8082 52.0259 97.697 51.6991 97.697 51.2846ZM98.3289 50.9813H99.4763C99.4662 50.8027 99.4106 50.6628 99.3095 50.5617C99.2118 50.4606 99.0803 50.4101 98.9152 50.4101C98.7602 50.4101 98.6288 50.4606 98.5209 50.5617C98.4165 50.6628 98.3524 50.8027 98.3289 50.9813ZM101.235 52.5432L100.31 50.0259H100.957L101.341 51.2037L101.609 52.0074L101.715 51.6738L101.862 51.2037L102.231 50.0259H102.858L101.978 52.5432H101.235ZM103.303 49.6266V48.9998H103.96V49.6266H103.303ZM103.328 52.5432V50.0259H103.94V52.5432H103.328ZM104.514 51.2846C104.514 50.8903 104.629 50.5702 104.858 50.3242C105.09 50.0748 105.382 49.9501 105.732 49.9501C106.089 49.9501 106.376 50.0714 106.592 50.314C106.807 50.5533 106.915 50.8633 106.915 51.2441C106.915 51.298 106.912 51.3621 106.905 51.4362H105.126C105.136 51.6687 105.196 51.844 105.308 51.9619C105.419 52.0765 105.565 52.1338 105.747 52.1338C106.024 52.1338 106.229 51.9821 106.364 51.6788L106.92 51.8861C106.725 52.3747 106.332 52.619 105.742 52.619C105.368 52.619 105.07 52.5011 104.848 52.2652C104.625 52.0259 104.514 51.6991 104.514 51.2846ZM105.146 50.9813H106.293C106.283 50.8027 106.228 50.6628 106.127 50.5617C106.029 50.4606 105.897 50.4101 105.732 50.4101C105.577 50.4101 105.446 50.4606 105.338 50.5617C105.234 50.6628 105.17 50.8027 105.146 50.9813ZM108.02 52.5432L107.206 50.0259H107.843L108.101 50.951C108.206 51.3486 108.295 51.6788 108.369 51.9417L108.617 51.0369L108.91 50.0259H109.633L109.936 51.0824C110.034 51.443 110.113 51.726 110.174 51.9316L110.457 50.8953L110.709 50.0259H111.341L110.517 52.5432H109.784L109.461 51.4008L109.319 50.8953L109.249 50.6426C109.215 50.7774 109.144 51.0285 109.036 51.3958L108.708 52.5432H108.02ZM112.709 50.7791C112.702 50.2467 112.872 49.8035 113.219 49.4497C113.57 49.0958 114.015 48.9223 114.554 48.929C115.093 48.9223 115.535 49.0958 115.878 49.4497C116.225 49.8035 116.396 50.2467 116.389 50.7791C116.389 51.3216 116.22 51.7648 115.883 52.1085C115.55 52.4489 115.107 52.619 114.554 52.619C114.005 52.619 113.56 52.4489 113.219 52.1085C112.879 51.7648 112.709 51.3216 112.709 50.7791ZM115.701 50.7791C115.701 50.3983 115.597 50.0883 115.388 49.849C115.182 49.6097 114.904 49.4901 114.554 49.4901C114.203 49.4901 113.924 49.6097 113.715 49.849C113.506 50.0883 113.401 50.3983 113.401 50.7791C113.401 51.1531 113.506 51.4598 113.715 51.6991C113.924 51.9383 114.203 52.058 114.554 52.058C114.904 52.058 115.182 51.9383 115.388 51.6991C115.597 51.4598 115.701 51.1531 115.701 50.7791ZM116.997 52.5432V50.0259H117.604V50.582C117.668 50.4337 117.769 50.2955 117.907 50.1675C118.042 50.0428 118.234 49.9804 118.483 49.9804C118.534 49.9804 118.589 49.9855 118.65 49.9956V50.6274C118.573 50.614 118.482 50.6072 118.377 50.6072C118.111 50.6072 117.917 50.6763 117.796 50.8145C117.674 50.9526 117.614 51.175 117.614 51.4817V52.5432H116.997ZM119.147 52.2551C118.952 52.0091 118.854 51.6856 118.854 51.2846C118.854 50.8836 118.952 50.5617 119.147 50.3191C119.343 50.0731 119.601 49.9501 119.921 49.9501C120.103 49.9501 120.263 49.9905 120.401 50.0714C120.543 50.1523 120.652 50.2551 120.73 50.3798V49.9248V49.0049H121.346V52.5432H120.75V52.1894C120.669 52.3141 120.558 52.4168 120.416 52.4977C120.275 52.5786 120.109 52.619 119.921 52.619C119.601 52.619 119.343 52.4977 119.147 52.2551ZM120.76 51.2846C120.76 51.0116 120.703 50.8027 120.588 50.6578C120.473 50.5095 120.318 50.4354 120.123 50.4354C119.924 50.4354 119.769 50.5061 119.658 50.6477C119.547 50.7858 119.491 50.9981 119.491 51.2846C119.491 51.8507 119.702 52.1338 120.123 52.1338C120.318 52.1338 120.473 52.0613 120.588 51.9164C120.703 51.7715 120.76 51.5609 120.76 51.2846ZM121.924 51.2846C121.924 50.8903 122.039 50.5702 122.268 50.3242C122.501 50.0748 122.792 49.9501 123.143 49.9501C123.5 49.9501 123.786 50.0714 124.002 50.314C124.218 50.5533 124.326 50.8633 124.326 51.2441C124.326 51.298 124.322 51.3621 124.315 51.4362H122.536C122.546 51.6687 122.607 51.844 122.718 51.9619C122.829 52.0765 122.976 52.1338 123.158 52.1338C123.434 52.1338 123.64 51.9821 123.775 51.6788L124.331 51.8861C124.135 52.3747 123.743 52.619 123.153 52.619C122.779 52.619 122.481 52.5011 122.258 52.2652C122.036 52.0259 121.924 51.6991 121.924 51.2846ZM122.556 50.9813H123.704C123.694 50.8027 123.638 50.6628 123.537 50.5617C123.439 50.4606 123.308 50.4101 123.143 50.4101C122.988 50.4101 122.856 50.4606 122.748 50.5617C122.644 50.6628 122.58 50.8027 122.556 50.9813ZM124.91 52.5432V50.0259H125.517V50.582C125.581 50.4337 125.682 50.2955 125.82 50.1675C125.955 50.0428 126.147 49.9804 126.396 49.9804C126.447 49.9804 126.502 49.9855 126.563 49.9956V50.6274C126.485 50.614 126.394 50.6072 126.29 50.6072C126.024 50.6072 125.83 50.6763 125.709 50.8145C125.587 50.9526 125.527 51.175 125.527 51.4817V52.5432H124.91Z"
                            fill="#F3F3F3"
                          ></path>
                        </g>
                        <circle
                          cx="139.242"
                          cy="50.5427"
                          r="4.21233"
                          fill="#3A3B54"
                        ></circle>
                        <circle
                          cx="139.242"
                          cy="50.5427"
                          r="4.00171"
                          stroke="url(#paint3_linear_570_13350)"
                          stroke-opacity="0.15"
                          stroke-width="0.421233"
                        ></circle>
                        <g filter="url(#filter9_d_570_13350)">
                          <path
                            d="M137.856 51.3201L138.609 51.1634C138.633 51.3656 138.697 51.5206 138.801 51.6284C138.906 51.7329 139.047 51.7851 139.226 51.7851C139.398 51.7851 139.532 51.7447 139.63 51.6638C139.731 51.5796 139.782 51.4667 139.782 51.3252C139.782 51.1802 139.731 51.064 139.63 50.9764C139.532 50.8888 139.398 50.8449 139.226 50.8449H138.897V50.2434H139.226C139.367 50.2434 139.485 50.2013 139.58 50.1171C139.674 50.0328 139.721 49.9233 139.721 49.7885C139.721 49.6537 139.674 49.5459 139.58 49.465C139.485 49.3807 139.367 49.3386 139.226 49.3386C139.077 49.3386 138.958 49.3875 138.867 49.4852C138.776 49.5829 138.725 49.716 138.715 49.8845L137.982 49.7733C138.013 49.4599 138.137 49.2055 138.356 49.0101C138.575 48.8112 138.865 48.7118 139.226 48.7118C139.593 48.7118 139.888 48.8011 140.11 48.9797C140.336 49.155 140.449 49.3791 140.449 49.652C140.449 49.8609 140.392 50.0379 140.277 50.1828C140.163 50.3277 140.002 50.4321 139.797 50.4962C140.019 50.54 140.198 50.6428 140.333 50.8045C140.467 50.9629 140.535 51.1482 140.535 51.3605C140.535 51.6807 140.417 51.9368 140.181 52.1289C139.945 52.3176 139.627 52.4119 139.226 52.4119C138.835 52.4119 138.521 52.3176 138.286 52.1289C138.05 51.9368 137.906 51.6672 137.856 51.3201Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <g filter="url(#filter10_d_570_13350)">
                          <path
                            d="M147.052 50.7589C147.045 50.2433 147.212 49.8086 147.552 49.4547C147.896 49.0975 148.327 48.9223 148.846 48.929C149.254 48.929 149.599 49.0301 149.882 49.2323C150.165 49.4345 150.352 49.6906 150.443 50.0007L149.832 50.2281C149.663 49.7361 149.333 49.4901 148.841 49.4901C148.504 49.4901 148.236 49.603 148.037 49.8288C147.842 50.0546 147.744 50.3629 147.744 50.7538C147.744 51.1548 147.842 51.4716 148.037 51.7041C148.233 51.9366 148.501 52.0529 148.841 52.0529C149.336 52.0529 149.673 51.8002 149.852 51.2947L150.448 51.5323C150.331 51.8726 150.135 52.1388 149.862 52.3309C149.589 52.523 149.249 52.619 148.841 52.619C148.309 52.6258 147.876 52.4522 147.542 52.0984C147.208 51.7412 147.045 51.2947 147.052 50.7589ZM150.974 52.5432V49.0049H151.591V49.9248V50.4253C151.662 50.3006 151.76 50.1927 151.884 50.1017C152.016 50.0007 152.194 49.9501 152.42 49.9501C152.69 49.9501 152.894 50.031 153.032 50.1927C153.17 50.3545 153.239 50.5803 153.239 50.8701V52.5432H152.622V51.0066C152.622 50.646 152.471 50.4657 152.167 50.4657C151.992 50.4657 151.862 50.5179 151.778 50.6224C151.654 50.774 151.591 51.0301 151.591 51.3907V52.5432H150.974ZM153.784 51.2846C153.784 50.8937 153.902 50.5735 154.138 50.3242C154.377 50.0748 154.682 49.9501 155.053 49.9501C155.423 49.9501 155.727 50.0748 155.963 50.3242C156.202 50.5735 156.322 50.8937 156.322 51.2846C156.322 51.6788 156.202 52.0007 155.963 52.25C155.723 52.496 155.42 52.619 155.053 52.619C154.689 52.619 154.386 52.4927 154.143 52.2399C153.904 51.9872 153.784 51.6687 153.784 51.2846ZM155.685 51.2947C155.685 51.0251 155.626 50.8178 155.508 50.6729C155.393 50.5247 155.242 50.4505 155.053 50.4505C154.857 50.4505 154.702 50.5247 154.588 50.6729C154.477 50.8178 154.421 51.0251 154.421 51.2947C154.421 51.5609 154.477 51.7648 154.588 51.9063C154.702 52.0478 154.857 52.1186 155.053 52.1186C155.248 52.1186 155.402 52.0478 155.513 51.9063C155.627 51.7648 155.685 51.5609 155.685 51.2947ZM156.716 51.2846C156.716 50.8937 156.834 50.5735 157.07 50.3242C157.309 50.0748 157.614 49.9501 157.985 49.9501C158.356 49.9501 158.659 50.0748 158.895 50.3242C159.134 50.5735 159.254 50.8937 159.254 51.2846C159.254 51.6788 159.134 52.0007 158.895 52.25C158.656 52.496 158.352 52.619 157.985 52.619C157.621 52.619 157.318 52.4927 157.075 52.2399C156.836 51.9872 156.716 51.6687 156.716 51.2846ZM158.617 51.2947C158.617 51.0251 158.558 50.8178 158.44 50.6729C158.325 50.5247 158.174 50.4505 157.985 50.4505C157.79 50.4505 157.635 50.5247 157.52 50.6729C157.409 50.8178 157.353 51.0251 157.353 51.2947C157.353 51.5609 157.409 51.7648 157.52 51.9063C157.635 52.0478 157.79 52.1186 157.985 52.1186C158.18 52.1186 158.334 52.0478 158.445 51.9063C158.56 51.7648 158.617 51.5609 158.617 51.2947ZM159.603 51.8962L160.174 51.7092C160.235 52.0057 160.437 52.154 160.781 52.154C160.922 52.154 161.032 52.1287 161.109 52.0782C161.19 52.0276 161.231 51.9569 161.231 51.8659C161.231 51.785 161.202 51.7193 161.145 51.6687C161.091 51.6182 160.995 51.5794 160.857 51.5525L160.523 51.4918C160.247 51.4345 160.041 51.3503 159.906 51.2391C159.775 51.1279 159.709 50.9594 159.709 50.7336C159.709 50.5011 159.803 50.3124 159.992 50.1675C160.184 50.0226 160.43 49.9501 160.73 49.9501C161.01 49.9501 161.239 50.0091 161.418 50.127C161.596 50.2416 161.718 50.3848 161.782 50.5567L161.261 50.7791C161.167 50.523 160.983 50.3949 160.71 50.3949C160.578 50.3949 160.476 50.4219 160.402 50.4758C160.331 50.5263 160.295 50.5937 160.295 50.678C160.295 50.7521 160.322 50.8111 160.376 50.8549C160.43 50.8953 160.531 50.9307 160.68 50.9611L161.008 51.0217C161.244 51.0655 161.446 51.1498 161.615 51.2745C161.783 51.3958 161.867 51.5727 161.867 51.8052C161.867 52.0512 161.768 52.2483 161.569 52.3966C161.37 52.5415 161.099 52.614 160.755 52.614C160.469 52.614 160.218 52.55 160.002 52.4219C159.79 52.2905 159.657 52.1152 159.603 51.8962ZM162.245 51.2846C162.245 50.8903 162.36 50.5702 162.589 50.3242C162.821 50.0748 163.113 49.9501 163.463 49.9501C163.82 49.9501 164.107 50.0714 164.323 50.314C164.538 50.5533 164.646 50.8633 164.646 51.2441C164.646 51.298 164.643 51.3621 164.636 51.4362H162.857C162.867 51.6687 162.927 51.844 163.039 51.9619C163.15 52.0765 163.296 52.1338 163.478 52.1338C163.755 52.1338 163.96 51.9821 164.095 51.6788L164.651 51.8861C164.456 52.3747 164.063 52.619 163.473 52.619C163.099 52.619 162.801 52.5011 162.579 52.2652C162.356 52.0259 162.245 51.6991 162.245 51.2846ZM162.877 50.9813H164.024C164.014 50.8027 163.959 50.6628 163.858 50.5617C163.76 50.4606 163.628 50.4101 163.463 50.4101C163.308 50.4101 163.177 50.4606 163.069 50.5617C162.964 50.6628 162.9 50.8027 162.877 50.9813ZM166.551 52.5432V49.0049H168.072C168.45 49.0049 168.749 49.106 168.972 49.3081C169.198 49.5103 169.311 49.7816 169.311 50.122C169.311 50.459 169.198 50.7302 168.972 50.9358C168.746 51.1413 168.446 51.2441 168.072 51.2441H167.208V52.5432H166.551ZM167.208 50.6881H167.956C168.161 50.6881 168.323 50.6376 168.441 50.5365C168.562 50.432 168.623 50.2938 168.623 50.122C168.623 49.9501 168.564 49.8153 168.446 49.7176C168.328 49.6199 168.165 49.571 167.956 49.571H167.208V50.6881ZM169.67 51.8962C169.67 51.5727 169.813 51.3385 170.099 51.1936C170.382 51.0453 170.767 50.9476 171.252 50.9004V50.8145C171.252 50.5516 171.099 50.4202 170.792 50.4202C170.475 50.4202 170.276 50.56 170.195 50.8397L169.634 50.6932C169.661 50.491 169.779 50.3174 169.988 50.1725C170.197 50.0242 170.465 49.9501 170.792 49.9501C171.139 49.9501 171.404 50.031 171.586 50.1927C171.771 50.3511 171.864 50.5836 171.864 50.8903V51.9063C171.864 51.9703 171.872 52.0125 171.889 52.0327C171.909 52.0495 171.951 52.058 172.015 52.058H172.253V52.5432H171.778C171.501 52.5432 171.35 52.4185 171.323 52.1692C171.124 52.4691 170.841 52.619 170.473 52.619C170.238 52.619 170.044 52.5533 169.892 52.4219C169.744 52.2905 169.67 52.1152 169.67 51.8962ZM171.252 51.507V51.3048C170.935 51.3385 170.696 51.3975 170.534 51.4817C170.376 51.5626 170.297 51.6805 170.297 51.8355C170.297 51.9366 170.329 52.0158 170.393 52.0731C170.46 52.127 170.554 52.154 170.676 52.154C170.841 52.154 170.977 52.0984 171.085 51.9872C171.196 51.8726 171.252 51.7125 171.252 51.507ZM174.075 50.0259H174.717L173.691 52.9223C173.617 53.1414 173.521 53.2964 173.403 53.3874C173.285 53.4817 173.118 53.5289 172.902 53.5289H172.245V53.0184H172.836C172.927 53.0184 172.997 52.9981 173.044 52.9577C173.094 52.9206 173.138 52.8532 173.175 52.7555L173.251 52.523L172.078 50.0259H172.745L173.211 51.1077L173.499 51.7799C173.596 51.4834 173.671 51.2576 173.721 51.1026L174.075 50.0259ZM175.182 52.5432V50.0259H175.784V50.3949C175.858 50.2568 175.961 50.1489 176.092 50.0714C176.224 49.9905 176.372 49.9501 176.537 49.9501C176.884 49.9501 177.133 50.1085 177.285 50.4253C177.48 50.1085 177.762 49.9501 178.129 49.9501C178.399 49.9501 178.608 50.0276 178.756 50.1826C178.904 50.3376 178.978 50.5651 178.978 50.865V52.5432H178.367V51.0066C178.367 50.646 178.215 50.4657 177.912 50.4657C177.75 50.4657 177.632 50.5112 177.558 50.6022C177.487 50.6864 177.44 50.7825 177.416 50.8903C177.396 50.9948 177.386 51.1312 177.386 51.2997V52.5432H176.78V51.0066C176.78 50.646 176.628 50.4657 176.325 50.4657C176.17 50.4657 176.053 50.5112 175.976 50.6022C175.858 50.7403 175.799 50.9729 175.799 51.2997V52.5432H175.182ZM179.527 51.2846C179.527 50.8903 179.642 50.5702 179.871 50.3242C180.103 50.0748 180.395 49.9501 180.745 49.9501C181.103 49.9501 181.389 50.0714 181.605 50.314C181.82 50.5533 181.928 50.8633 181.928 51.2441C181.928 51.298 181.925 51.3621 181.918 51.4362H180.139C180.149 51.6687 180.209 51.844 180.321 51.9619C180.432 52.0765 180.578 52.1338 180.76 52.1338C181.037 52.1338 181.242 51.9821 181.377 51.6788L181.933 51.8861C181.738 52.3747 181.345 52.619 180.755 52.619C180.381 52.619 180.083 52.5011 179.861 52.2652C179.638 52.0259 179.527 51.6991 179.527 51.2846ZM180.159 50.9813H181.306C181.296 50.8027 181.241 50.6628 181.14 50.5617C181.042 50.4606 180.91 50.4101 180.745 50.4101C180.59 50.4101 180.459 50.4606 180.351 50.5617C180.247 50.6628 180.183 50.8027 180.159 50.9813ZM182.513 52.5432V50.0259H183.114V50.4253C183.185 50.2938 183.289 50.1826 183.428 50.0916C183.566 49.9973 183.733 49.9501 183.928 49.9501C184.494 49.9501 184.777 50.2568 184.777 50.8701V52.5432H184.161V51.0066C184.161 50.646 184.009 50.4657 183.706 50.4657C183.53 50.4657 183.401 50.5179 183.316 50.6224C183.192 50.774 183.129 51.0301 183.129 51.3907V52.5432H182.513ZM185.752 51.9013V50.5061H185.206V50.0259H185.752V49.2374H186.369V50.0259H187.036V50.5061H186.369V51.8052C186.369 51.9602 186.446 52.0377 186.601 52.0377H187.137V52.5432H186.389C186.187 52.5432 186.03 52.4876 185.919 52.3764C185.807 52.2618 185.752 52.1034 185.752 51.9013Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <circle
                          cx="200.096"
                          cy="50.5427"
                          r="4.21233"
                          fill="#3A3B54"
                        ></circle>
                        <circle
                          cx="200.096"
                          cy="50.5427"
                          r="4.00171"
                          stroke="url(#paint4_linear_570_13350)"
                          stroke-opacity="0.15"
                          stroke-width="0.421233"
                        ></circle>
                        <g filter="url(#filter11_d_570_13350)">
                          <path
                            d="M200.312 52.3311V51.4869H198.598V50.8551L199.983 48.7927H201.019V50.8854H201.55V51.4869H201.019V52.3311H200.312ZM200.312 50.8854V50.5214V49.3993L199.301 50.8854H200.034H200.312Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <g filter="url(#filter12_d_570_13350)">
                          <path
                            d="M208.138 52.5432V49.0049H210.736V49.571H208.795V50.4404H210.251V50.9964H208.795V51.9821H210.736V52.5432H208.138ZM211.256 52.5432V50.0259H211.857V50.4253C211.928 50.2938 212.033 50.1826 212.171 50.0916C212.309 49.9973 212.476 49.9501 212.671 49.9501C213.237 49.9501 213.52 50.2568 213.52 50.8701V52.5432H212.904V51.0066C212.904 50.646 212.752 50.4657 212.449 50.4657C212.273 50.4657 212.144 50.5179 212.059 50.6224C211.935 50.774 211.872 51.0301 211.872 51.3907V52.5432H211.256ZM214.268 49.6266V49.0049H214.909V49.6266H214.268ZM213.676 53.5289V53.0184H214.05C214.209 53.0184 214.288 52.9409 214.288 52.7858V50.0259H214.894V52.8869C214.894 53.0891 214.839 53.2458 214.728 53.357C214.616 53.4716 214.46 53.5289 214.257 53.5289H213.676ZM215.467 51.2846C215.467 50.8937 215.585 50.5735 215.821 50.3242C216.06 50.0748 216.365 49.9501 216.736 49.9501C217.107 49.9501 217.41 50.0748 217.646 50.3242C217.885 50.5735 218.005 50.8937 218.005 51.2846C218.005 51.6788 217.885 52.0007 217.646 52.25C217.407 52.496 217.103 52.619 216.736 52.619C216.372 52.619 216.069 52.4927 215.826 52.2399C215.587 51.9872 215.467 51.6687 215.467 51.2846ZM217.368 51.2947C217.368 51.0251 217.309 50.8178 217.191 50.6729C217.076 50.5247 216.925 50.4505 216.736 50.4505C216.541 50.4505 216.386 50.5247 216.271 50.6729C216.16 50.8178 216.104 51.0251 216.104 51.2947C216.104 51.5609 216.16 51.7648 216.271 51.9063C216.386 52.0478 216.541 52.1186 216.736 52.1186C216.931 52.1186 217.085 52.0478 217.196 51.9063C217.311 51.7648 217.368 51.5609 217.368 51.2947ZM220.135 50.0259H220.777L219.75 52.9223C219.676 53.1414 219.58 53.2964 219.462 53.3874C219.344 53.4817 219.178 53.5289 218.962 53.5289H218.305V53.0184H218.896C218.987 53.0184 219.056 52.9981 219.103 52.9577C219.154 52.9206 219.198 52.8532 219.235 52.7555L219.311 52.523L218.138 50.0259H218.805L219.27 51.1077L219.558 51.7799C219.656 51.4834 219.73 51.2576 219.781 51.1026L220.135 50.0259ZM222.904 52.5432V51.0824L221.62 49.0049H222.388L222.889 49.849L222.934 49.9198L223.248 50.4556L223.591 49.844L224.061 49.0049H224.815L223.561 51.0773V52.5432H222.904ZM224.14 51.2846C224.14 50.8937 224.258 50.5735 224.494 50.3242C224.733 50.0748 225.038 49.9501 225.409 49.9501C225.78 49.9501 226.083 50.0748 226.319 50.3242C226.558 50.5735 226.678 50.8937 226.678 51.2846C226.678 51.6788 226.558 52.0007 226.319 52.25C226.08 52.496 225.776 52.619 225.409 52.619C225.045 52.619 224.742 52.4927 224.499 52.2399C224.26 51.9872 224.14 51.6687 224.14 51.2846ZM226.041 51.2947C226.041 51.0251 225.982 50.8178 225.864 50.6729C225.749 50.5247 225.598 50.4505 225.409 50.4505C225.214 50.4505 225.059 50.5247 224.944 50.6729C224.833 50.8178 224.777 51.0251 224.777 51.2947C224.777 51.5609 224.833 51.7648 224.944 51.9063C225.059 52.0478 225.214 52.1186 225.409 52.1186C225.605 52.1186 225.758 52.0478 225.869 51.9063C225.984 51.7648 226.041 51.5609 226.041 51.2947ZM227.219 51.7041V50.0259H227.836V51.5575C227.836 51.9215 227.981 52.1034 228.271 52.1034C228.486 52.1034 228.634 52.0175 228.715 51.8457C228.8 51.6772 228.842 51.4649 228.842 51.2087V50.0259H229.458V52.5432H228.847V52.1287C228.655 52.4556 228.378 52.619 228.018 52.619C227.762 52.619 227.565 52.5382 227.426 52.3764C227.288 52.2113 227.219 51.9872 227.219 51.7041ZM230.206 52.5432V50.0259H230.813V50.582C230.877 50.4337 230.978 50.2955 231.116 50.1675C231.251 50.0428 231.443 49.9804 231.692 49.9804C231.743 49.9804 231.799 49.9855 231.859 49.9956V50.6274C231.782 50.614 231.691 50.6072 231.586 50.6072C231.32 50.6072 231.126 50.6763 231.005 50.8145C230.884 50.9526 230.823 51.175 230.823 51.4817V52.5432H230.206ZM233.382 52.5432V49.0049H234.04V51.967H235.945V52.5432H233.382ZM236.2 51.2846C236.2 50.8903 236.314 50.5702 236.544 50.3242C236.776 50.0748 237.068 49.9501 237.418 49.9501C237.775 49.9501 238.062 50.0714 238.277 50.314C238.493 50.5533 238.601 50.8633 238.601 51.2441C238.601 51.298 238.598 51.3621 238.591 51.4362H236.812C236.822 51.6687 236.882 51.844 236.994 51.9619C237.105 52.0765 237.251 52.1338 237.433 52.1338C237.71 52.1338 237.915 51.9821 238.05 51.6788L238.606 51.8861C238.411 52.3747 238.018 52.619 237.428 52.619C237.054 52.619 236.756 52.5011 236.534 52.2652C236.311 52.0259 236.2 51.6991 236.2 51.2846ZM236.832 50.9813H237.979C237.969 50.8027 237.913 50.6628 237.812 50.5617C237.715 50.4606 237.583 50.4101 237.418 50.4101C237.263 50.4101 237.132 50.4606 237.024 50.5617C236.919 50.6628 236.855 50.8027 236.832 50.9813ZM239.738 52.5432L238.813 50.0259H239.46L239.844 51.2037L240.112 52.0074L240.218 51.6738L240.365 51.2037L240.734 50.0259H241.361L240.481 52.5432H239.738ZM241.581 51.2846C241.581 50.8903 241.695 50.5702 241.924 50.3242C242.157 50.0748 242.448 49.9501 242.799 49.9501C243.156 49.9501 243.442 50.0714 243.658 50.314C243.874 50.5533 243.982 50.8633 243.982 51.2441C243.982 51.298 243.978 51.3621 243.971 51.4362H242.192C242.202 51.6687 242.263 51.844 242.374 51.9619C242.485 52.0765 242.632 52.1338 242.814 52.1338C243.09 52.1338 243.296 51.9821 243.431 51.6788L243.987 51.8861C243.791 52.3747 243.399 52.619 242.809 52.619C242.435 52.619 242.137 52.5011 241.914 52.2652C241.692 52.0259 241.581 51.6991 241.581 51.2846ZM242.212 50.9813H243.36C243.35 50.8027 243.294 50.6628 243.193 50.5617C243.095 50.4606 242.964 50.4101 242.799 50.4101C242.644 50.4101 242.512 50.4606 242.404 50.5617C242.3 50.6628 242.236 50.8027 242.212 50.9813ZM244.566 52.5432V49.0049H245.183V52.5432H244.566ZM246.136 51.3351L245.943 49.9097V49.0049H246.616V49.9198L246.419 51.3351H246.136ZM245.898 52.5432V51.8052H246.656V52.5432H245.898Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                      </g>
                      <g clip-path="url(#clip1_570_13350)">
                        <rect
                          x="25.2671"
                          y="69.0791"
                          width="227.466"
                          height="99.8288"
                          rx="4.21233"
                          fill="#0C0D15"
                          fill-opacity="0.5"
                        ></rect>
                        <rect
                          x="25.4777"
                          y="69.2897"
                          width="227.045"
                          height="99.4075"
                          rx="4.00171"
                          stroke="#0C0D15"
                          stroke-opacity="0.5"
                          stroke-width="0.421233"
                        ></rect>
                        <path
                          d="M33.091 79.4337C33.0832 78.8283 33.2837 78.3172 33.6926 77.9004C34.1054 77.4798 34.6204 77.2734 35.2376 77.2812C35.7133 77.2812 36.1203 77.3992 36.4584 77.6351C36.8004 77.867 37.0284 78.1737 37.1424 78.555L36.3345 78.8676C36.1379 78.3054 35.7684 78.0243 35.2258 78.0243C34.8523 78.0243 34.5594 78.1481 34.3471 78.3958C34.1348 78.6435 34.0287 78.9895 34.0287 79.4337C34.0287 79.8819 34.1329 80.2299 34.3413 80.4775C34.5536 80.7252 34.8484 80.8491 35.2258 80.8491C35.7763 80.8491 36.1537 80.566 36.3581 79.9999L37.1483 80.3183C36.995 80.7311 36.7552 81.0476 36.4289 81.2678C36.1065 81.4879 35.7055 81.598 35.2258 81.598C34.5889 81.598 34.0739 81.3955 33.6808 80.9906C33.2876 80.5857 33.091 80.0667 33.091 79.4337ZM37.5074 80.0293C37.5074 79.5654 37.6529 79.19 37.9438 78.903C38.2347 78.612 38.6062 78.4666 39.0584 78.4666C39.5144 78.4666 39.8859 78.612 40.1729 78.903C40.4639 79.19 40.6093 79.5654 40.6093 80.0293C40.6093 80.5011 40.4658 80.8805 40.1788 81.1675C39.8918 81.4545 39.5184 81.598 39.0584 81.598C38.6141 81.598 38.2445 81.4506 37.9497 81.1557C37.6548 80.8569 37.5074 80.4815 37.5074 80.0293ZM39.5537 80.7075C39.6756 80.5542 39.7366 80.3321 39.7366 80.0411C39.7366 79.7502 39.6756 79.5261 39.5537 79.3689C39.4358 79.2077 39.2707 79.1271 39.0584 79.1271C38.8461 79.1271 38.679 79.2077 38.5571 79.3689C38.4392 79.5261 38.3802 79.7502 38.3802 80.0411C38.3802 80.3321 38.4392 80.5542 38.5571 80.7075C38.679 80.8569 38.8461 80.9316 39.0584 80.9316C39.2707 80.9316 39.4358 80.8569 39.5537 80.7075ZM41.1855 80.5424V78.555H42.0229V80.3478C42.0229 80.7174 42.1704 80.9021 42.4652 80.9021C42.6618 80.9021 42.8092 80.8235 42.9075 80.6663C43.0058 80.5051 43.055 80.2869 43.055 80.0117V78.555H43.8924V81.5037H43.055V81.0319C42.8309 81.4093 42.5104 81.598 42.0937 81.598C41.8185 81.598 41.5983 81.5037 41.4332 81.3149C41.2681 81.1223 41.1855 80.8648 41.1855 80.5424ZM44.7051 81.5037V78.555H45.519V79.0091C45.7391 78.6474 46.0556 78.4666 46.4684 78.4666C46.7908 78.4666 47.0326 78.559 47.1938 78.7437C47.3589 78.9285 47.4415 79.19 47.4415 79.5281V81.5037H46.604V79.7109C46.604 79.3413 46.4468 79.1566 46.1323 79.1566C45.9554 79.1566 45.8236 79.2096 45.7372 79.3158C45.6074 79.473 45.5425 79.7364 45.5425 80.106V81.5037H44.7051ZM48.5247 80.7311V79.1919H47.9055V78.555H48.5247V77.6292H49.3621V78.555H50.1287V79.1919H49.3621V80.5778C49.3621 80.6682 49.3817 80.7351 49.4211 80.7783C49.4643 80.8176 49.5311 80.8373 49.6216 80.8373H50.2585V81.5037H49.2736C49.0417 81.5037 48.8588 81.4329 48.7252 81.2914C48.5915 81.1498 48.5247 80.9631 48.5247 80.7311ZM50.5172 80.0234C50.5172 79.5713 50.6587 79.1998 50.9418 78.9089C51.2249 78.614 51.5807 78.4666 52.0092 78.4666C52.4535 78.4666 52.8034 78.612 53.0589 78.903C53.3145 79.1939 53.4422 79.5694 53.4422 80.0293C53.4422 80.1198 53.4403 80.1866 53.4363 80.2299H51.3546C51.3664 80.4697 51.4313 80.6525 51.5492 80.7783C51.6672 80.9002 51.8225 80.9611 52.0151 80.9611C52.3218 80.9611 52.5498 80.7901 52.6992 80.4481L53.4481 80.737C53.3459 80.9729 53.1808 81.1773 52.9528 81.3503C52.7287 81.5155 52.4161 81.598 52.0151 81.598C51.563 81.598 51.1993 81.4565 50.9241 81.1734C50.6528 80.8864 50.5172 80.5031 50.5172 80.0234ZM51.3841 79.6401H52.6107C52.5675 79.2588 52.367 79.0681 52.0092 79.0681C51.8402 79.0681 51.7006 79.1172 51.5905 79.2155C51.4804 79.3138 51.4116 79.4553 51.3841 79.6401ZM54.0751 81.5037V78.555H54.8948V79.2273C54.9695 79.0425 55.0894 78.8735 55.2545 78.7202C55.4236 78.5708 55.6615 78.4961 55.9681 78.4961C56.0389 78.4961 56.0841 78.498 56.1038 78.502V79.363C55.9897 79.3512 55.8816 79.3453 55.7794 79.3453C55.4688 79.3453 55.2467 79.418 55.113 79.5635C54.9793 79.705 54.9125 79.9566 54.9125 80.3183V81.5037H54.0751ZM56.556 80.0117V79.245H58.6554V80.0117H56.556ZM59.1719 80.3242L60.0152 80.0411C60.0664 80.281 60.1804 80.4815 60.3573 80.6427C60.5342 80.8039 60.7681 80.8844 61.0591 80.8844C61.3264 80.8844 61.5269 80.8373 61.6606 80.7429C61.7982 80.6486 61.867 80.5188 61.867 80.3537C61.867 80.0824 61.6429 79.9134 61.1947 79.8465L60.6816 79.7758C59.8128 79.6539 59.3783 79.2411 59.3783 78.5373C59.3783 78.1796 59.5238 77.8808 59.8147 77.641C60.1096 77.4011 60.5087 77.2812 61.0119 77.2812C61.4915 77.2812 61.8768 77.3834 62.1677 77.5879C62.4587 77.7884 62.6553 78.0538 62.7575 78.384L61.9319 78.673C61.7864 78.2209 61.4797 77.9948 61.0119 77.9948C60.7799 77.9948 60.605 78.042 60.487 78.1363C60.3691 78.2307 60.3101 78.3526 60.3101 78.502C60.3101 78.7457 60.487 78.8931 60.8409 78.9443L61.3539 79.015C61.8139 79.0779 62.1697 79.2175 62.4213 79.4337C62.6729 79.65 62.7988 79.937 62.7988 80.2947C62.7988 80.6761 62.6494 80.9886 62.3506 81.2324C62.0518 81.4761 61.6213 81.598 61.0591 81.598C60.5322 81.598 60.1076 81.4801 59.7853 81.2442C59.4629 81.0083 59.2584 80.7016 59.1719 80.3242ZM63.7516 80.7311V79.1919H63.1324V78.555H63.7516V77.6292H64.589V78.555H65.3556V79.1919H64.589V80.5778C64.589 80.6682 64.6086 80.7351 64.648 80.7783C64.6912 80.8176 64.758 80.8373 64.8485 80.8373H65.4854V81.5037H64.5005C64.2686 81.5037 64.0858 81.4329 63.9521 81.2914C63.8184 81.1498 63.7516 80.9631 63.7516 80.7311ZM66.0193 81.5037V78.555H66.8391V79.2273C66.9138 79.0425 67.0337 78.8735 67.1988 78.7202C67.3679 78.5708 67.6057 78.4961 67.9124 78.4961C67.9831 78.4961 68.0283 78.498 68.048 78.502V79.363C67.934 79.3512 67.8259 79.3453 67.7237 79.3453C67.4131 79.3453 67.1909 79.418 67.0573 79.5635C66.9236 79.705 66.8568 79.9566 66.8568 80.3183V81.5037H66.0193ZM68.5179 78.154V77.3638H69.4084V78.154H68.5179ZM68.5474 81.5037V78.555H69.3848V81.5037H68.5474ZM72.3768 81.5037L71.4568 80.277L71.0263 80.6957V81.5037H70.1889V77.3756H71.0263V78.6907V79.7463L72.2117 78.555H73.2378L72.0347 79.7227L73.4324 81.5037H72.3768ZM73.3057 80.0234C73.3057 79.5713 73.4473 79.1998 73.7303 78.9089C74.0134 78.614 74.3692 78.4666 74.7977 78.4666C75.242 78.4666 75.5919 78.612 75.8475 78.903C76.103 79.1939 76.2308 79.5694 76.2308 80.0293C76.2308 80.1198 76.2288 80.1866 76.2249 80.2299H74.1431C74.1549 80.4697 74.2198 80.6525 74.3378 80.7783C74.4557 80.9002 74.611 80.9611 74.8036 80.9611C75.1103 80.9611 75.3383 80.7901 75.4877 80.4481L76.2367 80.737C76.1345 80.9729 75.9693 81.1773 75.7413 81.3503C75.5172 81.5155 75.2047 81.598 74.8036 81.598C74.3515 81.598 73.9879 81.4565 73.7126 81.1734C73.4414 80.8864 73.3057 80.5031 73.3057 80.0234ZM74.1726 79.6401H75.3993C75.356 79.2588 75.1555 79.0681 74.7977 79.0681C74.6287 79.0681 74.4891 79.1172 74.379 79.2155C74.269 79.3138 74.2002 79.4553 74.1726 79.6401ZM78.1454 81.5037V80.5955C78.7469 80.2456 79.1932 79.9645 79.4841 79.7522C79.775 79.5359 79.9696 79.3512 80.0679 79.1978C80.1701 79.0406 80.2271 78.8597 80.2389 78.6553C80.2389 78.4705 80.1819 78.3191 80.0679 78.2012C79.9539 78.0833 79.8104 78.0243 79.6374 78.0243C79.2128 78.0243 78.9907 78.3132 78.971 78.8912L78.1159 78.7555C78.1159 78.3545 78.2535 78.0066 78.5287 77.7117C78.8079 77.4169 79.1853 77.2734 79.661 77.2812C80.121 77.2812 80.4827 77.3992 80.7461 77.6351C81.0095 77.8709 81.1412 78.1835 81.1412 78.5727C81.1412 78.9541 81.0272 79.2824 80.7992 79.5576C80.638 79.7541 80.4119 79.9468 80.121 80.1355C79.8301 80.3242 79.4408 80.5326 78.9533 80.7606H80.1623H81.1589V81.5037H78.1454Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M33.727 90.5583V87.02H35.3547C35.7254 87.02 36.0101 87.0975 36.2089 87.2525C36.4111 87.4042 36.5122 87.6131 36.5122 87.8793C36.5122 88.0882 36.4499 88.2652 36.3252 88.4101C36.2039 88.555 36.0388 88.6544 35.8298 88.7083C36.0657 88.7555 36.2578 88.8566 36.4061 89.0116C36.5544 89.1666 36.6285 89.3553 36.6285 89.5777C36.6285 89.881 36.5122 90.1203 36.2797 90.2955C36.0472 90.4707 35.749 90.5583 35.385 90.5583H33.727ZM34.3842 88.4505H35.2688C35.4507 88.4505 35.5923 88.4117 35.6934 88.3342C35.7944 88.2567 35.845 88.1472 35.845 88.0057C35.845 87.726 35.6529 87.5861 35.2688 87.5861H34.3842V88.4505ZM34.3842 89.9973H35.289C35.4945 89.9973 35.6546 89.9551 35.7692 89.8709C35.8838 89.7833 35.941 89.6586 35.941 89.4968C35.941 89.3385 35.8838 89.2171 35.7692 89.1329C35.6546 89.0453 35.4945 89.0015 35.289 89.0015H34.3842V89.9973ZM37.088 89.9113C37.088 89.5878 37.2313 89.3536 37.5177 89.2087C37.8008 89.0604 38.1849 88.9627 38.6702 88.9155V88.8296C38.6702 88.5668 38.5169 88.4353 38.2102 88.4353C37.8934 88.4353 37.6946 88.5752 37.6137 88.8549L37.0527 88.7083C37.0796 88.5061 37.1976 88.3326 37.4065 88.1877C37.6154 88.0394 37.8833 87.9652 38.2102 87.9652C38.5573 87.9652 38.8218 88.0461 39.0038 88.2079C39.1892 88.3663 39.2818 88.5988 39.2818 88.9054V89.9214C39.2818 89.9855 39.2902 90.0276 39.3071 90.0478C39.3273 90.0647 39.3694 90.0731 39.4335 90.0731H39.671V90.5583H39.1959C38.9196 90.5583 38.7679 90.4337 38.741 90.1843C38.5421 90.4842 38.2591 90.6342 37.8918 90.6342C37.6559 90.6342 37.4621 90.5685 37.3105 90.437C37.1622 90.3056 37.088 90.1304 37.088 89.9113ZM38.6702 89.5221V89.3199C38.3534 89.3536 38.1142 89.4126 37.9524 89.4968C37.794 89.5777 37.7148 89.6957 37.7148 89.8507C37.7148 89.9518 37.7469 90.031 37.8109 90.0883C37.8783 90.1422 37.9726 90.1691 38.0939 90.1691C38.2591 90.1691 38.3955 90.1135 38.5034 90.0023C38.6146 89.8877 38.6702 89.7277 38.6702 89.5221ZM40.1995 90.2702C40.0041 90.0242 39.9063 89.7007 39.9063 89.2997C39.9063 88.8987 40.0041 88.5769 40.1995 88.3342C40.395 88.0882 40.6528 87.9652 40.9729 87.9652C41.1549 87.9652 41.3149 88.0057 41.4531 88.0866C41.5946 88.1674 41.7041 88.2702 41.7817 88.3949V87.94V87.02H42.3983V90.5583H41.8019V90.2045C41.721 90.3292 41.6098 90.432 41.4683 90.5129C41.3267 90.5937 41.1616 90.6342 40.9729 90.6342C40.6528 90.6342 40.395 90.5129 40.1995 90.2702ZM41.812 89.2997C41.812 89.0267 41.7547 88.8178 41.6401 88.6729C41.5255 88.5246 41.3705 88.4505 41.1751 88.4505C40.9763 88.4505 40.8212 88.5213 40.71 88.6628C40.5988 88.801 40.5432 89.0133 40.5432 89.2997C40.5432 89.8658 40.7538 90.1489 41.1751 90.1489C41.3705 90.1489 41.5255 90.0765 41.6401 89.9316C41.7547 89.7867 41.812 89.576 41.812 89.2997ZM42.921 91.0284C42.921 90.8128 43.0255 90.6426 43.2344 90.5179C43.0794 90.4168 43.0019 90.2702 43.0019 90.0781C43.0019 89.8692 43.1316 89.6872 43.3911 89.5322C43.2058 89.3806 43.1131 89.1717 43.1131 88.9054C43.1131 88.6325 43.2125 88.4084 43.4113 88.2331C43.6135 88.0545 43.8679 87.9652 44.1746 87.9652C44.3869 87.9652 44.5739 88.0107 44.7357 88.1017C44.9008 88.1893 45.0238 88.3056 45.1047 88.4505C45.1215 88.3022 45.162 88.1978 45.226 88.1371C45.29 88.0731 45.3962 88.0411 45.5444 88.0411H45.7618V88.5213H45.5141C45.4198 88.5213 45.354 88.5415 45.317 88.5819C45.2833 88.619 45.2614 88.7032 45.2513 88.8347L45.2411 88.9105C45.2176 89.1868 45.1097 89.4059 44.9176 89.5676C44.7256 89.7294 44.4829 89.8102 44.1898 89.8102C43.9741 89.8102 43.8073 89.7799 43.6893 89.7193C43.5512 89.7664 43.4821 89.8355 43.4821 89.9265C43.4821 90.0141 43.563 90.0579 43.7247 90.0579H44.8115C45.0609 90.0579 45.2647 90.1287 45.4231 90.2702C45.5815 90.4084 45.6607 90.5836 45.6607 90.7959C45.6607 91.0284 45.5815 91.2104 45.4231 91.3418C45.2647 91.4766 45.0609 91.544 44.8115 91.544H43.6438C43.1619 91.544 42.921 91.3722 42.921 91.0284ZM44.5385 89.2542C44.6295 89.1632 44.675 89.0453 44.675 88.9004C44.675 88.7555 44.6295 88.6375 44.5385 88.5465C44.4509 88.4522 44.3347 88.405 44.1898 88.405C44.0448 88.405 43.9269 88.4522 43.8359 88.5465C43.7483 88.6375 43.7045 88.7555 43.7045 88.9004C43.7045 89.0453 43.7483 89.1632 43.8359 89.2542C43.9235 89.3418 44.0415 89.3856 44.1898 89.3856C44.3347 89.3856 44.4509 89.3418 44.5385 89.2542ZM43.7247 91.0739H44.7053C44.9345 91.0739 45.0491 90.9863 45.0491 90.8111C45.0491 90.6426 44.9345 90.5583 44.7053 90.5583H43.5731C43.4686 90.6156 43.4164 90.7049 43.4164 90.8263C43.4164 90.9914 43.5191 91.0739 43.7247 91.0739ZM45.8199 89.2997C45.8199 88.9054 45.9345 88.5853 46.1636 88.3393C46.3962 88.0899 46.6877 87.9652 47.0381 87.9652C47.3953 87.9652 47.6818 88.0866 47.8974 88.3292C48.1131 88.5684 48.221 88.8785 48.221 89.2593C48.221 89.3132 48.2176 89.3772 48.2108 89.4513H46.4316C46.4417 89.6839 46.5023 89.8591 46.6135 89.977C46.7247 90.0916 46.8713 90.1489 47.0533 90.1489C47.3296 90.1489 47.5352 89.9973 47.67 89.694L48.226 89.9012C48.0306 90.3899 47.638 90.6342 47.0482 90.6342C46.6742 90.6342 46.376 90.5162 46.1535 90.2803C45.9311 90.0411 45.8199 89.7142 45.8199 89.2997ZM46.4518 88.9964H47.5992C47.5891 88.8178 47.5335 88.678 47.4324 88.5769C47.3347 88.4758 47.2033 88.4252 47.0381 88.4252C46.8831 88.4252 46.7517 88.4758 46.6439 88.5769C46.5394 88.678 46.4754 88.8178 46.4518 88.9964Z"
                          fill="#A9ABCD"
                        ></path>
                        <g filter="url(#filter13_di_570_13350)">
                          <rect
                            x="215.726"
                            y="77.8188"
                            width="29.4247"
                            height="12.4247"
                            rx="2.5274"
                            fill="#3A3B54"
                            shape-rendering="crispEdges"
                          ></rect>
                          <path
                            d="M221.613 85.5862V84.55H220.577V83.9434H221.613V82.9071H222.22V83.9434H223.256V84.55H222.22V85.5862H221.613ZM224.503 86.031V83.8574V83.3621C224.388 83.5373 224.247 83.6839 224.078 83.8018C223.91 83.9164 223.736 83.9771 223.558 83.9838V83.2205C224.073 83.1767 224.42 82.9341 224.599 82.4926H225.221V86.031H224.503ZM225.895 84.2669C225.895 83.694 226.03 83.2424 226.299 82.9122C226.569 82.5786 226.923 82.4118 227.361 82.4118C227.796 82.4118 228.148 82.5786 228.417 82.9122C228.69 83.2424 228.827 83.694 228.827 84.2669C228.827 84.8431 228.692 85.2947 228.422 85.6216C228.153 85.9484 227.799 86.1119 227.361 86.1119C226.923 86.1119 226.569 85.9484 226.299 85.6216C226.03 85.2947 225.895 84.8431 225.895 84.2669ZM228.043 84.2669C228.043 83.8558 227.983 83.5508 227.861 83.352C227.74 83.1498 227.573 83.0487 227.361 83.0487C227.149 83.0487 226.982 83.1498 226.86 83.352C226.739 83.5508 226.678 83.8558 226.678 84.2669C226.678 84.678 226.739 84.983 226.86 85.1818C226.982 85.3773 227.149 85.475 227.361 85.475C227.816 85.475 228.043 85.0723 228.043 84.2669ZM229.291 84.2669C229.291 83.694 229.426 83.2424 229.695 82.9122C229.965 82.5786 230.319 82.4118 230.757 82.4118C231.192 82.4118 231.544 82.5786 231.813 82.9122C232.086 83.2424 232.223 83.694 232.223 84.2669C232.223 84.8431 232.088 85.2947 231.819 85.6216C231.549 85.9484 231.195 86.1119 230.757 86.1119C230.319 86.1119 229.965 85.9484 229.695 85.6216C229.426 85.2947 229.291 84.8431 229.291 84.2669ZM231.439 84.2669C231.439 83.8558 231.379 83.5508 231.257 83.352C231.136 83.1498 230.969 83.0487 230.757 83.0487C230.545 83.0487 230.378 83.1498 230.257 83.352C230.135 83.5508 230.075 83.8558 230.075 84.2669C230.075 84.678 230.135 84.983 230.257 85.1818C230.378 85.3773 230.545 85.475 230.757 85.475C231.212 85.475 231.439 85.0723 231.439 84.2669ZM233.402 86.031L234.787 84.1304L233.538 82.4926H234.524L234.842 82.9223L235.312 83.5744C235.333 83.5508 235.36 83.5137 235.393 83.4632C235.43 83.4093 235.481 83.3351 235.545 83.2408C235.612 83.143 235.675 83.0554 235.732 82.9779L236.071 82.4926H236.935L235.742 84.1456L237.102 86.031H236.116L235.686 85.3789C235.488 85.0723 235.36 84.8802 235.302 84.8027C235.306 84.8027 235.282 84.7656 235.232 84.6915L235.227 84.6965C235.22 84.7033 235.208 84.7184 235.191 84.742C235.178 84.7623 235.162 84.7842 235.146 84.8077C234.994 85.02 234.858 85.2138 234.736 85.389L234.281 86.031H233.402ZM237.485 86.031V82.4926H239.072C239.453 82.4926 239.761 82.5971 239.997 82.806C240.233 83.0116 240.351 83.2879 240.351 83.635C240.351 83.9821 240.233 84.2618 239.997 84.4741C239.761 84.6831 239.455 84.7875 239.077 84.7875H238.253V86.031H237.485ZM238.253 84.1506H238.936C239.121 84.1506 239.269 84.1051 239.381 84.0141C239.495 83.9198 239.552 83.7934 239.552 83.635C239.552 83.4834 239.495 83.3621 239.381 83.2711C239.266 83.1767 239.118 83.1296 238.936 83.1296H238.253V84.1506Z"
                            fill="#A9ABCD"
                          ></path>
                        </g>
                        <g filter="url(#filter14_d_570_13350)">
                          <line
                            x1="32.8492"
                            y1="99.6151"
                            x2="245.151"
                            y2="99.6151"
                            stroke="#303244"
                            stroke-opacity="0.25"
                            stroke-width="0.421233"
                            shape-rendering="crispEdges"
                          ></line>
                        </g>
                        <g clip-path="url(#clip2_570_13350)">
                          <rect
                            opacity="0.33"
                            x="34.5342"
                            y="121.18"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(-15 34.5342 121.18)"
                            fill="url(#pattern0_570_13350)"
                          ></rect>
                          <rect
                            opacity="0.33"
                            x="49.1866"
                            y="117.092"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(15 49.1866 117.092)"
                            fill="url(#pattern1_570_13350)"
                          ></rect>
                          <rect
                            x="38.9911"
                            y="115.407"
                            width="21.5882"
                            height="25.274"
                            fill="url(#pattern2_570_13350)"
                          ></rect>
                          <g filter="url(#filter15_b_570_13350)">
                            <rect
                              x="40.5376"
                              y="123.407"
                              width="17.9007"
                              height="10.9521"
                              rx="2.10616"
                              fill="#3A3B54"
                              fill-opacity="0.9"
                            ></rect>
                            <path
                              d="M44.2239 127.409C44.2239 127.002 44.5537 126.672 44.9605 126.672H45.4519C45.8587 126.672 46.1885 127.002 46.1885 127.409V127.9C46.1885 128.307 45.8587 128.637 45.4519 128.637H44.9605C44.5537 128.637 44.2239 128.307 44.2239 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M44.2239 129.866C44.2239 129.459 44.5537 129.129 44.9605 129.129H45.4519C45.8587 129.129 46.1885 129.459 46.1885 129.866V130.357C46.1885 130.764 45.8587 131.094 45.4519 131.094H44.9605C44.5537 131.094 44.2239 130.764 44.2239 130.357V129.866Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M46.6812 127.409C46.6812 127.002 47.0109 126.672 47.4177 126.672H47.9091C48.3159 126.672 48.6457 127.002 48.6457 127.409V127.9C48.6457 128.307 48.3159 128.637 47.9091 128.637H47.4177C47.0109 128.637 46.6812 128.307 46.6812 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M47.6634 129.129C47.1209 129.129 46.6812 129.569 46.6812 130.112C46.6812 130.654 47.1209 131.094 47.6634 131.094C48.2059 131.094 48.6457 130.654 48.6457 130.112C48.6457 129.569 48.2059 129.129 47.6634 129.129ZM47.1714 130.112C47.1714 129.84 47.3917 129.62 47.6634 129.62C47.9352 129.62 48.1555 129.84 48.1555 130.112C48.1555 130.383 47.9352 130.604 47.6634 130.604C47.3917 130.604 47.1714 130.383 47.1714 130.112Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M53.3245 130.883V130.039H51.6109V129.407L52.996 127.345H54.0322V129.438H54.5629V130.039H54.0322V130.883H53.3245ZM53.3245 129.438V129.074V127.952L52.3136 129.438H53.0465H53.3245Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <rect
                            opacity="0.33"
                            x="71.6027"
                            y="121.18"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(-15 71.6027 121.18)"
                            fill="url(#pattern3_570_13350)"
                          ></rect>
                          <rect
                            opacity="0.33"
                            x="86.2551"
                            y="117.092"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(15 86.2551 117.092)"
                            fill="url(#pattern4_570_13350)"
                          ></rect>
                          <rect
                            x="76.0596"
                            y="115.407"
                            width="21.5882"
                            height="25.274"
                            fill="url(#pattern5_570_13350)"
                          ></rect>
                          <g filter="url(#filter16_b_570_13350)">
                            <rect
                              x="77.6061"
                              y="123.407"
                              width="17.9007"
                              height="10.9521"
                              rx="2.10616"
                              fill="#3A3B54"
                              fill-opacity="0.9"
                            ></rect>
                            <path
                              d="M81.2925 127.409C81.2925 127.002 81.6223 126.672 82.0291 126.672H82.5205C82.9273 126.672 83.2571 127.002 83.2571 127.409V127.9C83.2571 128.307 82.9273 128.637 82.5205 128.637H82.0291C81.6223 128.637 81.2925 128.307 81.2925 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M81.2925 129.866C81.2925 129.459 81.6223 129.129 82.0291 129.129H82.5205C82.9273 129.129 83.2571 129.459 83.2571 129.866V130.357C83.2571 130.764 82.9273 131.094 82.5205 131.094H82.0291C81.6223 131.094 81.2925 130.764 81.2925 130.357V129.866Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M83.7497 127.409C83.7497 127.002 84.0795 126.672 84.4862 126.672H84.9777C85.3845 126.672 85.7142 127.002 85.7142 127.409V127.9C85.7142 128.307 85.3845 128.637 84.9777 128.637H84.4862C84.0795 128.637 83.7497 128.307 83.7497 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M84.732 129.129C84.1895 129.129 83.7497 129.569 83.7497 130.112C83.7497 130.654 84.1895 131.094 84.732 131.094C85.2745 131.094 85.7142 130.654 85.7142 130.112C85.7142 129.569 85.2745 129.129 84.732 129.129ZM84.2399 130.112C84.2399 129.84 84.4602 129.62 84.732 129.62C85.0037 129.62 85.224 129.84 85.224 130.112C85.224 130.383 85.0037 130.604 84.732 130.604C84.4602 130.604 84.2399 130.383 84.2399 130.112Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M90.393 130.883V130.039H88.6794V129.407L90.0644 127.345H91.1007V129.438H91.6314V130.039H91.1007V130.883H90.393ZM90.393 129.438V129.074V127.952L89.382 129.438H90.115H90.393Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <rect
                            opacity="0.33"
                            x="108.671"
                            y="121.18"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(-15 108.671 121.18)"
                            fill="url(#pattern6_570_13350)"
                          ></rect>
                          <rect
                            opacity="0.33"
                            x="123.324"
                            y="117.092"
                            width="15.7932"
                            height="18.4897"
                            transform="rotate(15 123.324 117.092)"
                            fill="url(#pattern7_570_13350)"
                          ></rect>
                          <rect
                            x="113.128"
                            y="115.407"
                            width="21.5882"
                            height="25.274"
                            fill="url(#pattern8_570_13350)"
                          ></rect>
                          <g filter="url(#filter17_b_570_13350)">
                            <rect
                              x="114.675"
                              y="123.407"
                              width="17.9007"
                              height="10.9521"
                              rx="2.10616"
                              fill="#3A3B54"
                              fill-opacity="0.9"
                            ></rect>
                            <path
                              d="M118.361 127.409C118.361 127.002 118.691 126.672 119.098 126.672H119.589C119.996 126.672 120.325 127.002 120.325 127.409V127.9C120.325 128.307 119.996 128.637 119.589 128.637H119.098C118.691 128.637 118.361 128.307 118.361 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M118.361 129.866C118.361 129.459 118.691 129.129 119.098 129.129H119.589C119.996 129.129 120.325 129.459 120.325 129.866V130.357C120.325 130.764 119.996 131.094 119.589 131.094H119.098C118.691 131.094 118.361 130.764 118.361 130.357V129.866Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M120.818 127.409C120.818 127.002 121.148 126.672 121.555 126.672H122.046C122.453 126.672 122.783 127.002 122.783 127.409V127.9C122.783 128.307 122.453 128.637 122.046 128.637H121.555C121.148 128.637 120.818 128.307 120.818 127.9V127.409Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M121.8 129.129C121.258 129.129 120.818 129.569 120.818 130.112C120.818 130.654 121.258 131.094 121.8 131.094C122.343 131.094 122.783 130.654 122.783 130.112C122.783 129.569 122.343 129.129 121.8 129.129ZM121.308 130.112C121.308 129.84 121.529 129.62 121.8 129.62C122.072 129.62 122.292 129.84 122.292 130.112C122.292 130.383 122.072 130.604 121.8 130.604C121.529 130.604 121.308 130.383 121.308 130.112Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M127.461 130.883V130.039H125.748V129.407L127.133 127.345H128.169V129.438H128.7V130.039H128.169V130.883H127.461ZM127.461 129.438V129.074V127.952L126.451 129.438H127.183H127.461Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                        </g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M36.3489 155.837C36.1939 155.798 36.0436 155.916 36.0436 156.075V158.994C36.0436 159.154 36.1939 159.271 36.3489 159.232L37.3318 158.986C37.4412 158.959 37.5179 158.861 37.5179 158.748V156.321C37.5179 156.208 37.4412 156.11 37.3318 156.083L36.3489 155.837ZM35.5522 156.075C35.5522 155.596 36.0029 155.244 36.4681 155.36L37.451 155.606C37.7792 155.688 38.0094 155.983 38.0094 156.321V158.748C38.0094 159.086 37.7792 159.381 37.451 159.463L36.4681 159.709C36.0029 159.825 35.5522 159.473 35.5522 158.994V156.075ZM34.815 155.569C34.9507 155.569 35.0607 155.679 35.0607 155.815V159.255C35.0607 159.39 34.9507 159.5 34.815 159.5C34.6793 159.5 34.5693 159.39 34.5693 159.255V155.815C34.5693 155.679 34.6793 155.569 34.815 155.569ZM33.8321 155.815C33.9679 155.815 34.0779 155.925 34.0779 156.06V159.009C34.0779 159.145 33.9679 159.255 33.8321 159.255C33.6964 159.255 33.5864 159.145 33.5864 159.009V156.06C33.5864 155.925 33.6964 155.815 33.8321 155.815Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          d="M40.578 158.523L41.3311 158.367C41.3547 158.569 41.4188 158.724 41.5232 158.832C41.6277 158.936 41.7692 158.989 41.9478 158.989C42.1197 158.989 42.2545 158.948 42.3522 158.867C42.4533 158.783 42.5039 158.67 42.5039 158.529C42.5039 158.384 42.4533 158.267 42.3522 158.18C42.2545 158.092 42.1197 158.048 41.9478 158.048H41.6193V157.447H41.9478C42.0894 157.447 42.2073 157.405 42.3017 157.32C42.396 157.236 42.4432 157.127 42.4432 156.992C42.4432 156.857 42.396 156.749 42.3017 156.668C42.2073 156.584 42.0894 156.542 41.9478 156.542C41.7996 156.542 41.6799 156.591 41.5889 156.689C41.498 156.786 41.4474 156.919 41.4373 157.088L40.7044 156.977C40.7347 156.663 40.8594 156.409 41.0784 156.213C41.2975 156.015 41.5873 155.915 41.9478 155.915C42.3151 155.915 42.61 156.004 42.8324 156.183C43.0582 156.358 43.1711 156.582 43.1711 156.855C43.1711 157.064 43.1138 157.241 42.9992 157.386C42.8847 157.531 42.7246 157.636 42.519 157.7C42.7414 157.743 42.92 157.846 43.0548 158.008C43.1896 158.166 43.257 158.352 43.257 158.564C43.257 158.884 43.1391 159.14 42.9032 159.332C42.6673 159.521 42.3488 159.615 41.9478 159.615C41.5569 159.615 41.2435 159.521 41.0076 159.332C40.7718 159.14 40.6285 158.871 40.578 158.523ZM44.828 158.523L45.5509 158.281C45.5947 158.486 45.6924 158.658 45.8441 158.796C45.9957 158.935 46.1962 159.004 46.4456 159.004C46.6747 159.004 46.8466 158.963 46.9612 158.882C47.0791 158.801 47.1381 158.69 47.1381 158.549C47.1381 158.316 46.946 158.171 46.5618 158.114L46.1221 158.053C45.3773 157.949 45.005 157.595 45.005 156.992C45.005 156.685 45.1296 156.429 45.379 156.224C45.6318 156.018 45.9738 155.915 46.4051 155.915C46.8163 155.915 47.1465 156.003 47.3959 156.178C47.6452 156.35 47.8137 156.577 47.9014 156.86L47.1937 157.108C47.069 156.721 46.8062 156.527 46.4051 156.527C46.2063 156.527 46.0564 156.567 45.9553 156.648C45.8542 156.729 45.8036 156.833 45.8036 156.962C45.8036 157.17 45.9553 157.297 46.2585 157.341L46.6983 157.401C47.0926 157.455 47.3976 157.575 47.6132 157.76C47.8289 157.946 47.9367 158.192 47.9367 158.498C47.9367 158.825 47.8087 159.093 47.5526 159.302C47.2965 159.511 46.9275 159.615 46.4456 159.615C45.994 159.615 45.6301 159.514 45.3537 159.312C45.0774 159.11 44.9022 158.847 44.828 158.523ZM48.3288 158.266C48.3288 157.878 48.4502 157.56 48.6928 157.31C48.9354 157.058 49.2404 156.931 49.6077 156.931C49.9885 156.931 50.2884 157.056 50.5075 157.305C50.7265 157.555 50.836 157.876 50.836 158.271C50.836 158.348 50.8343 158.406 50.831 158.443H49.0466C49.0567 158.648 49.1123 158.805 49.2134 158.913C49.3145 159.017 49.4476 159.069 49.6128 159.069C49.8756 159.069 50.0711 158.923 50.1991 158.63L50.8411 158.877C50.7535 159.079 50.6119 159.255 50.4165 159.403C50.2244 159.545 49.9565 159.615 49.6128 159.615C49.2252 159.615 48.9135 159.494 48.6776 159.251C48.4451 159.005 48.3288 158.677 48.3288 158.266ZM49.0719 157.937H50.1233C50.0862 157.61 49.9144 157.447 49.6077 157.447C49.4628 157.447 49.3432 157.489 49.2488 157.573C49.1545 157.657 49.0955 157.779 49.0719 157.937ZM51.5671 158.872V157.553H51.0364V157.007H51.5671V156.213H52.2849V157.007H52.9421V157.553H52.2849V158.741C52.2849 158.818 52.3018 158.876 52.3355 158.913C52.3725 158.946 52.4298 158.963 52.5073 158.963H53.0533V159.534H52.2091C52.0103 159.534 51.8536 159.474 51.739 159.352C51.6244 159.231 51.5671 159.071 51.5671 158.872ZM53.2987 158.882L53.9507 158.675C53.9709 158.766 54.0198 158.86 54.0973 158.958C54.1714 159.053 54.3147 159.1 54.527 159.1C54.6449 159.1 54.7376 159.076 54.805 159.029C54.8757 158.982 54.9111 158.921 54.9111 158.847C54.9111 158.776 54.8875 158.721 54.8404 158.68C54.7932 158.636 54.7123 158.603 54.5977 158.579L54.2388 158.508C53.9457 158.451 53.7317 158.365 53.5969 158.251C53.4655 158.136 53.3997 157.962 53.3997 157.73C53.3997 157.487 53.4975 157.293 53.6929 157.149C53.8884 157.004 54.1529 156.931 54.4865 156.931C54.7629 156.931 54.992 156.988 55.174 157.103C55.3593 157.218 55.4857 157.354 55.5531 157.513L54.9617 157.78C54.8741 157.545 54.7039 157.427 54.4511 157.427C54.3366 157.427 54.2473 157.448 54.1832 157.492C54.1226 157.536 54.0923 157.595 54.0923 157.669C54.0923 157.74 54.1158 157.794 54.163 157.831C54.2136 157.865 54.3062 157.893 54.441 157.917L54.7898 157.983C55.3694 158.094 55.6592 158.357 55.6592 158.771C55.6592 159.027 55.5548 159.231 55.3458 159.383C55.1369 159.531 54.8505 159.605 54.4865 159.605C54.1866 159.605 53.9254 159.539 53.703 159.408C53.484 159.277 53.3492 159.101 53.2987 158.882Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          d="M216.306 156.06C216.306 155.653 216.636 155.323 217.043 155.323H217.534C217.941 155.323 218.271 155.653 218.271 156.06V156.551C218.271 156.958 217.941 157.288 217.534 157.288H217.043C216.636 157.288 216.306 156.958 216.306 156.551V156.06Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          d="M216.306 158.517C216.306 158.111 216.636 157.781 217.043 157.781H217.534C217.941 157.781 218.271 158.111 218.271 158.517V159.009C218.271 159.416 217.941 159.745 217.534 159.745H217.043C216.636 159.745 216.306 159.416 216.306 159.009V158.517Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          d="M218.763 156.06C218.763 155.653 219.093 155.323 219.5 155.323H219.991C220.398 155.323 220.728 155.653 220.728 156.06V156.551C220.728 156.958 220.398 157.288 219.991 157.288H219.5C219.093 157.288 218.763 156.958 218.763 156.551V156.06Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M219.746 157.781C219.203 157.781 218.763 158.221 218.763 158.763C218.763 159.305 219.203 159.745 219.746 159.745C220.288 159.745 220.728 159.305 220.728 158.763C220.728 158.221 220.288 157.781 219.746 157.781ZM219.254 158.763C219.254 158.491 219.474 158.271 219.746 158.271C220.017 158.271 220.238 158.491 220.238 158.763C220.238 159.035 220.017 159.255 219.746 159.255C219.474 159.255 219.254 159.035 219.254 158.763Z"
                          fill="#A9ABCD"
                        ></path>
                        <path
                          d="M224.227 159.534V157.361V156.865C224.113 157.041 223.971 157.187 223.803 157.305C223.634 157.42 223.461 157.48 223.282 157.487V156.724C223.798 156.68 224.145 156.438 224.323 155.996H224.945V159.534H224.227ZM227.222 159.534V158.69H225.508V158.058L226.893 155.996H227.929V158.089H228.46V158.69H227.929V159.534H227.222ZM227.222 158.089V157.725V156.603L226.211 158.089H226.944H227.222ZM230.022 157.76C230.015 157.241 230.187 156.803 230.538 156.446C230.891 156.085 231.333 155.908 231.862 155.915C232.27 155.915 232.618 156.016 232.908 156.218C233.201 156.417 233.397 156.68 233.495 157.007L232.802 157.275C232.634 156.793 232.317 156.552 231.852 156.552C231.532 156.552 231.281 156.658 231.099 156.871C230.917 157.083 230.826 157.379 230.826 157.76C230.826 158.144 230.915 158.443 231.094 158.655C231.276 158.867 231.528 158.973 231.852 158.973C232.324 158.973 232.647 158.731 232.822 158.245L233.5 158.518C233.368 158.872 233.163 159.144 232.883 159.332C232.607 159.521 232.263 159.615 231.852 159.615C231.306 159.615 230.864 159.442 230.527 159.095C230.19 158.748 230.022 158.303 230.022 157.76ZM233.833 158.887C233.836 158.722 233.876 158.579 233.954 158.458C234.031 158.336 234.143 158.239 234.288 158.165C234.436 158.09 234.599 158.033 234.778 157.993C234.96 157.949 235.174 157.915 235.42 157.892V157.796C235.42 157.563 235.282 157.447 235.005 157.447C234.699 157.447 234.513 157.58 234.449 157.846L233.802 157.705C233.823 157.492 233.94 157.31 234.156 157.159C234.375 157.007 234.657 156.931 235 156.931C235.364 156.931 235.642 157.014 235.834 157.179C236.03 157.344 236.128 157.588 236.128 157.912V158.837C236.128 158.904 236.136 158.946 236.153 158.963C236.17 158.98 236.212 158.989 236.279 158.989H236.502V159.534H235.951C235.674 159.534 235.523 159.411 235.496 159.165C235.3 159.465 235.012 159.615 234.631 159.615C234.402 159.615 234.212 159.548 234.06 159.413C233.908 159.278 233.833 159.103 233.833 158.887ZM235.42 158.498V158.336C235.13 158.374 234.914 158.426 234.773 158.493C234.631 158.561 234.561 158.668 234.561 158.817C234.561 158.999 234.67 159.09 234.889 159.09C235.041 159.09 235.167 159.039 235.268 158.938C235.369 158.837 235.42 158.69 235.42 158.498ZM236.882 159.534V157.007H237.584V157.583C237.648 157.425 237.751 157.28 237.893 157.149C238.038 157.021 238.242 156.956 238.504 156.956C238.565 156.956 238.604 156.958 238.621 156.962V157.7C238.523 157.689 238.43 157.684 238.343 157.684C238.076 157.684 237.886 157.747 237.771 157.871C237.657 157.993 237.6 158.208 237.6 158.518V159.534H236.882ZM238.803 158.271C238.803 157.866 238.903 157.543 239.101 157.3C239.3 157.054 239.566 156.931 239.9 156.931C240.082 156.931 240.244 156.972 240.385 157.053C240.53 157.13 240.641 157.228 240.719 157.346V156.911V155.996H241.437V159.534H240.739V159.196C240.665 159.307 240.552 159.405 240.4 159.489C240.252 159.573 240.085 159.615 239.9 159.615C239.566 159.615 239.3 159.492 239.101 159.246C238.903 158.997 238.803 158.672 238.803 158.271ZM240.588 158.862C240.695 158.724 240.749 158.527 240.749 158.271C240.749 158.015 240.695 157.817 240.588 157.679C240.483 157.541 240.338 157.472 240.153 157.472C239.755 157.472 239.556 157.738 239.556 158.271C239.556 158.803 239.755 159.069 240.153 159.069C240.338 159.069 240.483 159 240.588 158.862ZM241.922 158.882L242.574 158.675C242.594 158.766 242.643 158.86 242.72 158.958C242.795 159.053 242.938 159.1 243.15 159.1C243.268 159.1 243.361 159.076 243.428 159.029C243.499 158.982 243.534 158.921 243.534 158.847C243.534 158.776 243.511 158.721 243.463 158.68C243.416 158.636 243.335 158.603 243.221 158.579L242.862 158.508C242.569 158.451 242.355 158.365 242.22 158.251C242.089 158.136 242.023 157.962 242.023 157.73C242.023 157.487 242.121 157.293 242.316 157.149C242.511 157.004 242.776 156.931 243.11 156.931C243.386 156.931 243.615 156.988 243.797 157.103C243.982 157.218 244.109 157.354 244.176 157.513L243.585 157.78C243.497 157.545 243.327 157.427 243.074 157.427C242.96 157.427 242.87 157.448 242.806 157.492C242.746 157.536 242.715 157.595 242.715 157.669C242.715 157.74 242.739 157.794 242.786 157.831C242.837 157.865 242.929 157.893 243.064 157.917L243.413 157.983C243.993 158.094 244.282 158.357 244.282 158.771C244.282 159.027 244.178 159.231 243.969 159.383C243.76 159.531 243.474 159.605 243.11 159.605C242.81 159.605 242.549 159.539 242.326 159.408C242.107 159.277 241.972 159.101 241.922 158.882Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="1"
                    y="1"
                    width="244"
                    height="162"
                    rx="7"
                    stroke="#161620"
                    stroke-width="2"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_i_570_13350"
                    x="0"
                    y="0"
                    width="246"
                    height="164"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 0 0.133333 0 0 0 0.75 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13350"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_bdi_570_13350"
                    x="3.36301"
                    y="3.36301"
                    width="271.274"
                    height="368.161"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="6.31849"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_570_13350"
                    ></feComposite>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.842466"></feOffset>
                    <feGaussianBlur stdDeviation="0.421233"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_570_13350"
                      result="effect2_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.227451 0 0 0 0 0.231373 0 0 0 0 0.309804 0 0 0 0.5 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect3_innerShadow_570_13350"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter2_d_570_13350"
                    x="24.8459"
                    y="25.2671"
                    width="7.58221"
                    height="7.58221"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feGaussianBlur stdDeviation="0.210616"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter3_d_570_13350"
                    x="35.9429"
                    y="26.4192"
                    width="27.46"
                    height="6.45322"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter4_i_570_13350"
                    x="25.2671"
                    y="42.1165"
                    width="227.466"
                    height="17.6955"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.842466"></feOffset>
                    <feGaussianBlur stdDeviation="1.68493"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13350"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter5_d_570_13350"
                    x="33.5476"
                    y="48.793"
                    width="1.66296"
                    height="3.95956"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter6_d_570_13350"
                    x="42.3339"
                    y="48.9189"
                    width="31.3094"
                    height="4.13144"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter7_d_570_13350"
                    x="85.0731"
                    y="48.7017"
                    width="2.60828"
                    height="4.05063"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter8_d_570_13350"
                    x="94.4302"
                    y="48.9189"
                    width="32.1327"
                    height="4.12143"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter9_d_570_13350"
                    x="137.856"
                    y="48.7119"
                    width="2.67908"
                    height="4.12118"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter10_d_570_13350"
                    x="147.042"
                    y="48.9189"
                    width="40.0954"
                    height="5.0311"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter11_d_570_13350"
                    x="198.598"
                    y="48.7927"
                    width="2.95197"
                    height="3.95956"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter12_d_570_13350"
                    x="208.138"
                    y="49.0049"
                    width="38.5181"
                    height="4.94516"
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
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter13_di_570_13350"
                    x="215.726"
                    y="77.8188"
                    width="29.4247"
                    height="13.267"
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
                    <feOffset dy="0.842466"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.421233"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13350"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter14_d_570_13350"
                    x="32.8492"
                    y="98.9833"
                    width="212.301"
                    height="0.842375"
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
                    <feOffset dy="-0.421233"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0705882 0 0 0 0 0.0745098 0 0 0 0 0.109804 0 0 0 1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13350"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <pattern
                    id="pattern0_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern1_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern2_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <filter
                    id="filter15_b_570_13350"
                    x="34.2191"
                    y="117.089"
                    width="30.5377"
                    height="23.5891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.15925"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_570_13350"
                    ></feComposite>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <pattern
                    id="pattern3_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern4_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern5_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <filter
                    id="filter16_b_570_13350"
                    x="71.2876"
                    y="117.089"
                    width="30.5377"
                    height="23.5891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.15925"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_570_13350"
                    ></feComposite>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <pattern
                    id="pattern6_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern7_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <pattern
                    id="pattern8_570_13350"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use transform="scale(0.00609756 0.00520833)"></use>
                  </pattern>
                  <filter
                    id="filter17_b_570_13350"
                    x="108.356"
                    y="117.089"
                    width="30.5377"
                    height="23.5891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.15925"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_570_13350"
                    ></feComposite>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_570_13350"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_570_13350"
                    x1="34.5342"
                    y1="46.3303"
                    x2="34.5342"
                    y2="54.755"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_570_13350"
                    x1="82.1656"
                    y1="50.5427"
                    x2="90.6106"
                    y2="50.5427"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AE42E9"></stop>
                    <stop offset="0.5" stop-color="#6852EA"></stop>
                    <stop offset="1" stop-color="#3C66EE"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_570_13350"
                    x1="86.3881"
                    y1="46.3303"
                    x2="86.3881"
                    y2="54.755"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_570_13350"
                    x1="139.242"
                    y1="46.3303"
                    x2="139.242"
                    y2="54.755"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_570_13350"
                    x1="200.096"
                    y1="46.3303"
                    x2="200.096"
                    y2="54.755"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <clipPath id="clip0_570_13350">
                    <rect width="246" height="164" rx="8" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_570_13350">
                    <rect
                      x="25.2671"
                      y="69.0791"
                      width="227.466"
                      height="252.74"
                      rx="4.21233"
                      fill="white"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip2_570_13350">
                    <rect
                      width="212.301"
                      height="37.911"
                      fill="white"
                      transform="translate(32.8492 109.093)"
                    ></rect>
                  </clipPath>
                  <image id="image0_570_13350" width="164" height="192"></image>
                </defs>
              </svg>
            </div>
            <div className="rounded-[10px] bg-[#252633] opacity-90 min-w-[38%] px-5 py-6 flex flex-col gap-[14px]">
              <span className="font-bold text-sm text-white">
                Choose Your Payment Method
              </span>
              <span className="text-primary-grey text-[13px]">
                Once you’re satisfied with your target level, move on to
                payment. We support a range of options to make checkout smooth
                and convenient. Each method will display the current price,
                allowing you to choose what works best for you.
              </span>
              <svg
                width="184"
                height="164"
                viewBox="0 0 184 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_570_13576)">
                  <g clip-path="url(#clip0_570_13576)">
                    <rect width="246" height="164" rx="8" fill="#161620"></rect>
                    <g filter="url(#filter1_bdi_570_13576)">
                      <rect
                        x="18"
                        y="-37"
                        width="209.959"
                        height="328.867"
                        rx="4.31423"
                        fill="#252633"
                      ></rect>
                      <g filter="url(#filter2_d_570_13576)">
                        <g clip-path="url(#clip1_570_13576)">
                          <rect
                            x="25.9094"
                            y="8.30249"
                            width="194.14"
                            height="35.1663"
                            rx="3.59519"
                            fill="#161620"
                          ></rect>
                          <g
                            opacity="0.33"
                            filter="url(#filter3_f_570_13576)"
                          ></g>
                          <path
                            d="M36.7606 25.8156V25.1749C36.2016 25.1222 35.7508 24.9429 35.4081 24.6371C35.0653 24.3312 34.8491 23.9489 34.7595 23.4902L36.0804 23.1105C36.1331 23.4005 36.2491 23.6352 36.4284 23.8145C36.6129 23.9938 36.8555 24.0834 37.156 24.0834C37.4302 24.0834 37.6385 24.0307 37.7809 23.9252C37.9233 23.8145 37.9944 23.6668 37.9944 23.4823C37.9944 23.1712 37.7677 22.9787 37.3142 22.9049L36.6894 22.81C36.1199 22.7309 35.6954 22.5569 35.416 22.288C35.1418 22.0138 35.0047 21.6262 35.0047 21.1253C35.0047 20.6771 35.1602 20.2974 35.4713 19.9863C35.7877 19.6699 36.2175 19.4801 36.7606 19.4168V18.7683H37.5911V19.4247C38.0709 19.488 38.4585 19.6515 38.7537 19.9151C39.0543 20.1735 39.252 20.5057 39.347 20.9117L38.034 21.2835C37.8969 20.7562 37.5832 20.4925 37.0928 20.4925C36.8608 20.4925 36.6815 20.5452 36.5549 20.6507C36.4336 20.7562 36.373 20.8933 36.373 21.062C36.373 21.3573 36.5681 21.5339 36.9583 21.5919L37.5832 21.671C38.1579 21.7501 38.6035 21.9399 38.9198 22.2405C39.2362 22.5358 39.3944 22.926 39.3944 23.4111C39.3944 23.8857 39.2389 24.2811 38.9278 24.5975C38.6166 24.9139 38.1711 25.1037 37.5911 25.167V25.8156H36.7606ZM39.9429 23.6958L41.2321 23.3557C41.3692 23.8356 41.6592 24.0755 42.1021 24.0755C42.3342 24.0755 42.5187 24.0069 42.6558 23.8698C42.7982 23.7275 42.8694 23.5297 42.8694 23.2766C42.8694 23.0288 42.7955 22.8363 42.6479 22.6992C42.5055 22.5569 42.3236 22.4857 42.1021 22.4857C41.7752 22.4857 41.5353 22.6307 41.3824 22.9207L40.0932 22.6913L40.544 19.5513H44.0953V20.7219H41.5406L41.4298 21.5049L41.3824 21.7818L41.3508 21.9716C41.6091 21.7132 41.9914 21.584 42.4976 21.584C43.0144 21.584 43.4441 21.7369 43.7869 22.0428C44.1349 22.3433 44.3089 22.7757 44.3089 23.3399C44.3089 23.9147 44.119 24.3734 43.7394 24.7161C43.365 25.0536 42.8351 25.2224 42.1496 25.2224C41.5538 25.2224 41.0607 25.08 40.6705 24.7952C40.2856 24.5105 40.0431 24.144 39.9429 23.6958ZM45.583 24.4551C45.1454 23.9437 44.9266 23.2397 44.9266 22.3433C44.9266 21.4469 45.148 20.7351 45.5909 20.2078C46.0339 19.6805 46.6139 19.4168 47.331 19.4168C48.0587 19.4168 48.644 19.6805 49.0869 20.2078C49.5298 20.7351 49.7513 21.4469 49.7513 22.3433C49.7513 23.2397 49.5298 23.9437 49.0869 24.4551C48.644 24.9666 48.0587 25.2224 47.331 25.2224C46.6033 25.2224 46.0207 24.9666 45.583 24.4551ZM47.331 24.0518C47.9321 24.0518 48.2327 23.4744 48.2327 22.3196C48.2327 21.1648 47.9321 20.5874 47.331 20.5874C46.7404 20.5874 46.4452 21.1648 46.4452 22.3196C46.4452 23.4744 46.7404 24.0518 47.331 24.0518ZM50.2352 25.0879V23.6879H51.7617V25.0879H50.2352ZM52.7417 24.993V23.7591C53.1371 23.9331 53.5722 24.0201 54.0467 24.0201C54.4527 24.0201 54.7955 23.8962 55.075 23.6484C55.3702 23.3847 55.5205 22.9919 55.5258 22.4699C55.4098 22.6808 55.2331 22.8495 54.9959 22.9761C54.7638 23.1026 54.4897 23.1659 54.1733 23.1659C53.6987 23.1659 53.2927 23.013 52.9552 22.7072C52.6178 22.3961 52.449 21.9637 52.449 21.41C52.449 20.7983 52.6468 20.3132 53.0422 19.9547C53.443 19.5961 53.9439 19.4168 54.545 19.4168C55.1672 19.4168 55.6998 19.6225 56.1427 20.0338C56.6595 20.4872 56.9178 21.1806 56.9178 22.1139C56.9178 23.1105 56.67 23.8777 56.1744 24.4156C55.684 24.9534 54.9932 25.2224 54.1021 25.2224C53.5906 25.2224 53.1371 25.1459 52.7417 24.993ZM55.3913 21.3863C55.3913 21.149 55.3175 20.9565 55.1699 20.8089C55.0222 20.656 54.8377 20.5795 54.6162 20.5795C54.4 20.5795 54.2155 20.656 54.0625 20.8089C53.9096 20.9618 53.8332 21.1543 53.8332 21.3863C53.8332 21.6183 53.9096 21.8108 54.0625 21.9637C54.2155 22.1113 54.4 22.1851 54.6162 22.1851C54.8377 22.1851 55.0222 22.1113 55.1699 21.9637C55.3175 21.8108 55.3913 21.6183 55.3913 21.3863ZM60.4978 20.7219H59.2086H57.3894V19.5513H61.4786V21.0224C60.8406 21.4496 60.3581 22.0217 60.0312 22.7388C59.7095 23.4559 59.554 24.2389 59.5645 25.0879H58.0459C58.0407 24.028 58.2938 23.1422 58.8052 22.4303C59.322 21.7132 59.8862 21.1437 60.4978 20.7219Z"
                            fill="#EDEDED"
                          ></path>
                          <g filter="url(#filter4_d_570_13576)">
                            <path
                              d="M35.0615 34.1213V30.0947H36.9137C37.3356 30.0947 37.6596 30.1829 37.8859 30.3593C38.116 30.5319 38.231 30.7697 38.231 31.0726C38.231 31.3104 38.1601 31.5117 38.0182 31.6766C37.8801 31.8415 37.6922 31.9546 37.4544 32.016C37.7229 32.0697 37.9415 32.1847 38.1102 32.3611C38.2789 32.5375 38.3633 32.7523 38.3633 33.0054C38.3633 33.3505 38.231 33.6228 37.9664 33.8222C37.7018 34.0216 37.3624 34.1213 36.9482 34.1213H35.0615ZM35.8093 31.7226H36.8159C37.023 31.7226 37.1841 31.6785 37.2991 31.5903C37.4142 31.5021 37.4717 31.3775 37.4717 31.2164C37.4717 30.8981 37.2531 30.739 36.8159 30.739H35.8093V31.7226ZM35.8093 33.4828H36.8389C37.0729 33.4828 37.255 33.4349 37.3854 33.339C37.5158 33.2393 37.581 33.0974 37.581 32.9134C37.581 32.7331 37.5158 32.5951 37.3854 32.4992C37.255 32.3995 37.0729 32.3496 36.8389 32.3496H35.8093V33.4828ZM38.8863 33.385C38.8863 33.0169 39.0493 32.7504 39.3752 32.5855C39.6973 32.4167 40.1345 32.3055 40.6867 32.2518V32.1541C40.6867 31.8549 40.5123 31.7054 40.1633 31.7054C39.8028 31.7054 39.5765 31.8645 39.4845 32.1828L38.846 32.016C38.8767 31.7859 39.0109 31.5884 39.2487 31.4235C39.4864 31.2548 39.7913 31.1704 40.1633 31.1704C40.5583 31.1704 40.8593 31.2624 41.0664 31.4465C41.2773 31.6268 41.3828 31.8914 41.3828 32.2403V33.3965C41.3828 33.4694 41.3924 33.5173 41.4115 33.5404C41.4345 33.5595 41.4825 33.5691 41.5553 33.5691H41.8257V34.1213H41.285C40.9705 34.1213 40.798 33.9794 40.7673 33.6957C40.541 34.037 40.2189 34.2076 39.8009 34.2076C39.5324 34.2076 39.3119 34.1328 39.1394 33.9833C38.9706 33.8337 38.8863 33.6343 38.8863 33.385ZM40.6867 32.9421V32.712C40.3263 32.7504 40.054 32.8175 39.8699 32.9134C39.6897 33.0054 39.5996 33.1396 39.5996 33.316C39.5996 33.4311 39.636 33.5212 39.7089 33.5864C39.7855 33.6477 39.8929 33.6784 40.031 33.6784C40.2189 33.6784 40.3742 33.6151 40.4969 33.4886C40.6235 33.3582 40.6867 33.176 40.6867 32.9421ZM42.2833 34.1213V30.0947H42.9851V34.1213H42.2833ZM43.6724 33.385C43.6724 33.0169 43.8354 32.7504 44.1613 32.5855C44.4834 32.4167 44.9206 32.3055 45.4728 32.2518V32.1541C45.4728 31.8549 45.2984 31.7054 44.9494 31.7054C44.5889 31.7054 44.3626 31.8645 44.2706 32.1828L43.6321 32.016C43.6628 31.7859 43.797 31.5884 44.0348 31.4235C44.2725 31.2548 44.5774 31.1704 44.9494 31.1704C45.3444 31.1704 45.6454 31.2624 45.8525 31.4465C46.0634 31.6268 46.1689 31.8914 46.1689 32.2403V33.3965C46.1689 33.4694 46.1785 33.5173 46.1976 33.5404C46.2206 33.5595 46.2686 33.5691 46.3414 33.5691H46.6118V34.1213H46.0711C45.7566 34.1213 45.5841 33.9794 45.5534 33.6957C45.3271 34.037 45.005 34.2076 44.587 34.2076C44.3185 34.2076 44.098 34.1328 43.9255 33.9833C43.7567 33.8337 43.6724 33.6343 43.6724 33.385ZM45.4728 32.9421V32.712C45.1124 32.7504 44.8401 32.8175 44.656 32.9134C44.4758 33.0054 44.3857 33.1396 44.3857 33.316C44.3857 33.4311 44.4221 33.5212 44.4949 33.5864C44.5716 33.6477 44.679 33.6784 44.8171 33.6784C45.005 33.6784 45.1603 33.6151 45.283 33.4886C45.4096 33.3582 45.4728 33.176 45.4728 32.9421ZM47.0694 34.1213V31.2567H47.7539V31.7111C47.8344 31.5616 47.9533 31.435 48.1105 31.3315C48.2678 31.2241 48.4576 31.1704 48.68 31.1704C49.3243 31.1704 49.6464 31.5194 49.6464 32.2173V34.1213H48.9446V32.3726C48.9446 31.9623 48.7721 31.7571 48.4269 31.7571C48.2275 31.7571 48.0799 31.8166 47.984 31.9355C47.8421 32.108 47.7712 32.3995 47.7712 32.8098V34.1213H47.0694ZM50.2666 32.6833C50.2666 32.2384 50.4066 31.876 50.6865 31.5961C50.9665 31.3123 51.3174 31.1704 51.7392 31.1704C52.0613 31.1704 52.3355 31.249 52.5618 31.4063C52.7919 31.5635 52.951 31.7686 53.0392 32.0217L52.395 32.2518C52.2723 31.9105 52.0479 31.7399 51.722 31.7399C51.5034 31.7399 51.325 31.8223 51.187 31.9872C51.0489 32.1521 50.9799 32.3841 50.9799 32.6833C50.9799 32.9862 51.0489 33.2221 51.187 33.3908C51.3289 33.5557 51.5091 33.6381 51.7277 33.6381C52.0728 33.6381 52.3087 33.4445 52.4352 33.0572L53.0968 33.293C52.9894 33.573 52.8168 33.7954 52.579 33.9603C52.3451 34.1252 52.0652 34.2076 51.7392 34.2076C51.3059 34.2076 50.9511 34.0676 50.675 33.7877C50.4028 33.5078 50.2666 33.1396 50.2666 32.6833ZM53.4575 32.689C53.4575 32.2403 53.5879 31.876 53.8486 31.5961C54.1132 31.3123 54.445 31.1704 54.8438 31.1704C55.2503 31.1704 55.5763 31.3085 55.8217 31.5846C56.0671 31.8568 56.1898 32.2097 56.1898 32.643C56.1898 32.7044 56.186 32.7772 56.1783 32.8616H54.1535C54.165 33.1262 54.234 33.3256 54.3606 33.4598C54.4871 33.5902 54.654 33.6554 54.861 33.6554C55.1755 33.6554 55.4094 33.4828 55.5628 33.1377L56.1956 33.3735C55.9732 33.9296 55.5264 34.2076 54.8553 34.2076C54.4296 34.2076 54.0902 34.0734 53.8371 33.805C53.584 33.5327 53.4575 33.1607 53.4575 32.689ZM54.1765 32.3439H55.4823C55.4708 32.1406 55.4075 31.9815 55.2925 31.8664C55.1813 31.7514 55.0317 31.6939 54.8438 31.6939C54.6674 31.6939 54.5178 31.7514 54.3951 31.8664C54.2762 31.9815 54.2034 32.1406 54.1765 32.3439Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <g filter="url(#filter5_di_570_13576)">
                            <rect
                              x="166.883"
                              y="18.3357"
                              width="44.5379"
                              height="15.0998"
                              rx="2.87615"
                              fill="#3A3B54"
                              fill-opacity="0.5"
                              shape-rendering="crispEdges"
                            ></rect>
                            <g opacity="0.5">
                              <path
                                d="M176.051 26.7122V25.0584C176.051 24.6557 176.051 24.4544 175.973 24.3006C175.904 24.1653 175.794 24.0553 175.658 23.9863C175.505 23.908 175.303 23.908 174.901 23.908H173.247C172.844 23.908 172.643 23.908 172.489 23.9863C172.354 24.0553 172.244 24.1653 172.175 24.3006C172.096 24.4544 172.096 24.6557 172.096 25.0584V26.7122C172.096 27.1149 172.096 27.3162 172.175 27.4701C172.244 27.6054 172.354 27.7154 172.489 27.7843C172.643 27.8627 172.844 27.8627 173.247 27.8627H174.901C175.303 27.8627 175.505 27.8627 175.658 27.7843C175.794 27.7154 175.904 27.6054 175.973 27.4701C176.051 27.3162 176.051 27.1149 176.051 26.7122Z"
                                stroke="#A9ABCD"
                                stroke-width="0.359519"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                            <path
                              d="M179.487 26.1096V24.1139H180.197V25.9974C180.197 26.2778 180.261 26.4913 180.389 26.6377C180.516 26.781 180.705 26.8527 180.954 26.8527C181.459 26.8527 181.711 26.5676 181.711 25.9974V24.1139H182.422V26.1096C182.422 26.524 182.286 26.8527 182.015 27.0957C181.744 27.3388 181.39 27.4603 180.954 27.4603C180.509 27.4603 180.152 27.3388 179.884 27.0957C179.619 26.8527 179.487 26.524 179.487 26.1096ZM182.831 26.7826L183.434 26.591C183.453 26.6751 183.498 26.7623 183.57 26.8527C183.638 26.9399 183.771 26.9836 183.967 26.9836C184.076 26.9836 184.162 26.9617 184.224 26.9181C184.29 26.8745 184.322 26.8184 184.322 26.7499C184.322 26.6844 184.3 26.633 184.257 26.5956C184.213 26.5551 184.138 26.524 184.032 26.5022L183.701 26.4367C183.43 26.3838 183.232 26.3043 183.107 26.1984C182.986 26.0924 182.925 25.932 182.925 25.717C182.925 25.4926 183.015 25.3135 183.196 25.1795C183.377 25.0455 183.621 24.9785 183.93 24.9785C184.185 24.9785 184.397 25.0315 184.565 25.1374C184.737 25.2434 184.853 25.3696 184.916 25.516L184.369 25.7637C184.288 25.5456 184.131 25.4365 183.897 25.4365C183.791 25.4365 183.708 25.4568 183.649 25.4973C183.593 25.5378 183.565 25.5923 183.565 25.6609C183.565 25.7263 183.587 25.7762 183.631 25.8104C183.677 25.8416 183.763 25.8681 183.888 25.8899L184.21 25.9507C184.746 26.0535 185.014 26.2965 185.014 26.6798C185.014 26.9166 184.917 27.1051 184.724 27.2453C184.531 27.3824 184.266 27.4509 183.93 27.4509C183.652 27.4509 183.411 27.3902 183.205 27.2687C183.003 27.1471 182.878 26.9851 182.831 26.7826ZM185.329 26.2124C185.329 25.8541 185.441 25.5596 185.665 25.329C185.89 25.0954 186.172 24.9785 186.511 24.9785C186.863 24.9785 187.141 25.0938 187.343 25.3244C187.546 25.5549 187.647 25.8525 187.647 26.2171C187.647 26.2887 187.646 26.3417 187.642 26.376H185.993C186.002 26.566 186.053 26.7109 186.147 26.8106C186.24 26.9072 186.363 26.9555 186.516 26.9555C186.759 26.9555 186.94 26.82 187.058 26.5489L187.652 26.7779C187.571 26.9649 187.44 27.1269 187.259 27.264C187.082 27.3948 186.834 27.4603 186.516 27.4603C186.158 27.4603 185.87 27.3481 185.651 27.1238C185.436 26.8963 185.329 26.5925 185.329 26.2124ZM186.016 25.9086H186.988C186.954 25.6064 186.795 25.4552 186.511 25.4552C186.377 25.4552 186.267 25.4942 186.18 25.5721C186.092 25.65 186.038 25.7621 186.016 25.9086ZM189.319 27.3855V24.1139H190.884C191.237 24.1139 191.508 24.1855 191.698 24.3289C191.888 24.4691 191.983 24.6607 191.983 24.9037C191.983 25.287 191.768 25.544 191.338 25.6749C191.565 25.7123 191.748 25.8058 191.885 25.9553C192.022 26.1018 192.09 26.2747 192.09 26.4741C192.09 26.7514 191.978 26.9727 191.754 27.1378C191.529 27.3029 191.241 27.3855 190.889 27.3855H189.319ZM190.029 25.4085H190.777C191.107 25.4085 191.272 25.2901 191.272 25.0533C191.272 24.9287 191.23 24.8399 191.146 24.7869C191.065 24.7308 190.942 24.7028 190.777 24.7028H190.029V25.4085ZM190.029 26.7966H190.786C191.166 26.7966 191.356 26.6611 191.356 26.39C191.356 26.1158 191.166 25.9787 190.786 25.9787H190.029V26.7966ZM192.472 26.7873C192.475 26.6346 192.513 26.5022 192.584 26.39C192.656 26.2778 192.759 26.1875 192.893 26.1189C193.03 26.0504 193.181 25.9974 193.346 25.96C193.515 25.9195 193.712 25.8883 193.94 25.8665V25.7777C193.94 25.5627 193.812 25.4552 193.557 25.4552C193.273 25.4552 193.102 25.5783 193.043 25.8245L192.444 25.6936C192.463 25.4973 192.572 25.329 192.771 25.1888C192.974 25.0486 193.234 24.9785 193.552 24.9785C193.888 24.9785 194.146 25.0549 194.323 25.2075C194.504 25.3602 194.594 25.5861 194.594 25.8852V26.7405C194.594 26.8028 194.602 26.8418 194.618 26.8574C194.633 26.8729 194.672 26.8807 194.734 26.8807H194.94V27.3855H194.431C194.175 27.3855 194.035 27.2718 194.01 27.0443C193.829 27.3216 193.563 27.4603 193.211 27.4603C192.999 27.4603 192.823 27.398 192.683 27.2733C192.542 27.1487 192.472 26.9867 192.472 26.7873ZM193.94 26.4274V26.2778C193.672 26.3121 193.473 26.3604 193.342 26.4227C193.211 26.485 193.145 26.5847 193.145 26.7218C193.145 26.8901 193.247 26.9742 193.449 26.9742C193.589 26.9742 193.706 26.9275 193.8 26.834C193.893 26.7405 193.94 26.605 193.94 26.4274ZM195.292 27.3855V24.1139H195.955V27.3855H195.292ZM196.466 26.7873C196.469 26.6346 196.507 26.5022 196.578 26.39C196.65 26.2778 196.753 26.1875 196.887 26.1189C197.024 26.0504 197.175 25.9974 197.34 25.96C197.508 25.9195 197.706 25.8883 197.934 25.8665V25.7777C197.934 25.5627 197.806 25.4552 197.55 25.4552C197.267 25.4552 197.095 25.5783 197.036 25.8245L196.438 25.6936C196.457 25.4973 196.566 25.329 196.765 25.1888C196.968 25.0486 197.228 24.9785 197.546 24.9785C197.882 24.9785 198.139 25.0549 198.317 25.2075C198.498 25.3602 198.588 25.5861 198.588 25.8852V26.7405C198.588 26.8028 198.596 26.8418 198.611 26.8574C198.627 26.8729 198.666 26.8807 198.728 26.8807H198.934V27.3855H198.424C198.169 27.3855 198.029 27.2718 198.004 27.0443C197.823 27.3216 197.557 27.4603 197.204 27.4603C196.993 27.4603 196.817 27.398 196.676 27.2733C196.536 27.1487 196.466 26.9867 196.466 26.7873ZM197.934 26.4274V26.2778C197.666 26.3121 197.466 26.3604 197.335 26.4227C197.204 26.485 197.139 26.5847 197.139 26.7218C197.139 26.8901 197.24 26.9742 197.443 26.9742C197.583 26.9742 197.7 26.9275 197.793 26.834C197.887 26.7405 197.934 26.605 197.934 26.4274ZM199.285 27.3855V25.0486H199.93V25.4085C200.105 25.1218 200.356 24.9785 200.683 24.9785C200.938 24.9785 201.13 25.0517 201.258 25.1982C201.388 25.3446 201.454 25.5518 201.454 25.8198V27.3855H200.79V25.9647C200.79 25.6718 200.666 25.5253 200.416 25.5253C200.276 25.5253 200.172 25.5674 200.103 25.6515C200 25.7762 199.949 25.9849 199.949 26.2778V27.3855H199.285ZM201.915 26.2124C201.915 25.8478 202.035 25.5518 202.275 25.3244C202.515 25.0938 202.814 24.9785 203.172 24.9785C203.44 24.9785 203.672 25.0424 203.869 25.1701C204.065 25.2979 204.204 25.4677 204.285 25.6796L203.672 25.9086C203.576 25.6375 203.401 25.502 203.149 25.502C202.984 25.502 202.848 25.5643 202.742 25.6889C202.636 25.8136 202.583 25.988 202.583 26.2124C202.583 26.4367 202.636 26.6128 202.742 26.7405C202.851 26.8683 202.989 26.9321 203.154 26.9321C203.409 26.9321 203.59 26.7841 203.696 26.4881L204.322 26.7125C204.232 26.9399 204.084 27.1222 203.878 27.2593C203.672 27.3933 203.436 27.4603 203.168 27.4603C202.803 27.4603 202.502 27.345 202.266 27.1144C202.032 26.8838 201.915 26.5832 201.915 26.2124ZM204.585 26.2124C204.585 25.8541 204.697 25.5596 204.922 25.329C205.146 25.0954 205.428 24.9785 205.768 24.9785C206.12 24.9785 206.397 25.0938 206.6 25.3244C206.802 25.5549 206.903 25.8525 206.903 26.2171C206.903 26.2887 206.902 26.3417 206.899 26.376H205.249C205.258 26.566 205.31 26.7109 205.403 26.8106C205.497 26.9072 205.62 26.9555 205.772 26.9555C206.015 26.9555 206.196 26.82 206.315 26.5489L206.908 26.7779C206.827 26.9649 206.696 27.1269 206.516 27.264C206.338 27.3948 206.09 27.4603 205.772 27.4603C205.414 27.4603 205.126 27.3481 204.908 27.1238C204.693 26.8963 204.585 26.5925 204.585 26.2124ZM205.272 25.9086H206.244C206.21 25.6064 206.051 25.4552 205.768 25.4552C205.634 25.4552 205.523 25.4942 205.436 25.5721C205.349 25.65 205.294 25.7621 205.272 25.9086Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g filter="url(#filter6_d_570_13576)">
                        <path
                          d="M26.0302 54.2346L26.6472 54.0275C26.6845 54.2029 26.768 54.3496 26.8974 54.4675C27.0268 54.5855 27.1979 54.6444 27.4108 54.6444C27.6064 54.6444 27.753 54.6099 27.8508 54.5409C27.9515 54.4718 28.0018 54.3769 28.0018 54.2561C28.0018 54.0577 27.8379 53.934 27.51 53.8851L27.1347 53.8333C26.499 53.7442 26.1812 53.4422 26.1812 52.9274C26.1812 52.6656 26.2876 52.447 26.5005 52.2716C26.7162 52.0961 27.0081 52.0084 27.3763 52.0084C27.7272 52.0084 28.009 52.0832 28.2219 52.2328C28.4347 52.3794 28.5785 52.5736 28.6533 52.8152L28.0493 53.0266C27.9429 52.6958 27.7185 52.5304 27.3763 52.5304C27.2066 52.5304 27.0786 52.565 26.9923 52.634C26.906 52.703 26.8629 52.7922 26.8629 52.9015C26.8629 53.0798 26.9923 53.1876 27.2511 53.225L27.6265 53.2768C27.963 53.3228 28.2233 53.4249 28.4074 53.5831C28.5914 53.7413 28.6835 53.9513 28.6835 54.213C28.6835 54.492 28.5742 54.7206 28.3556 54.899C28.137 55.0773 27.8221 55.1664 27.4108 55.1664C27.0254 55.1664 26.7147 55.0802 26.4789 54.9076C26.2431 54.735 26.0935 54.5107 26.0302 54.2346ZM29.3805 54.5322V53.4062H28.9275V52.9403H29.3805V52.263H29.9931V52.9403H30.554V53.4062H29.9931V54.4201C29.9931 54.4862 30.0075 54.5351 30.0363 54.5668C30.0679 54.5955 30.1168 54.6099 30.183 54.6099H30.6489V55.0974H29.9284C29.7587 55.0974 29.625 55.0456 29.5272 54.9421C29.4294 54.8386 29.3805 54.7019 29.3805 54.5322ZM30.8382 54.0145C30.8382 53.6838 30.9417 53.412 31.1488 53.1992C31.3559 52.9834 31.6162 52.8756 31.9297 52.8756C32.2547 52.8756 32.5107 52.982 32.6976 53.1948C32.8846 53.4077 32.9781 53.6823 32.9781 54.0189C32.9781 54.085 32.9766 54.1339 32.9737 54.1655H31.4508C31.4594 54.341 31.5069 54.4747 31.5932 54.5668C31.6795 54.6559 31.7931 54.7005 31.934 54.7005C32.1583 54.7005 32.3252 54.5754 32.4345 54.3252L32.9824 54.5366C32.9076 54.7091 32.7868 54.8587 32.62 54.9852C32.456 55.106 32.2274 55.1664 31.934 55.1664C31.6033 55.1664 31.3372 55.0629 31.1359 54.8558C30.9374 54.6459 30.8382 54.3654 30.8382 54.0145ZM31.4724 53.7341H32.3697C32.3381 53.4551 32.1914 53.3156 31.9297 53.3156C31.806 53.3156 31.7039 53.3516 31.6234 53.4235C31.5429 53.4954 31.4925 53.5989 31.4724 53.7341ZM33.3159 54.5452C33.3188 54.4043 33.3533 54.282 33.4195 54.1785C33.4856 54.0749 33.5805 53.9915 33.7042 53.9283C33.8307 53.865 33.9702 53.8161 34.1227 53.7816C34.278 53.7442 34.4606 53.7154 34.6706 53.6953V53.6133C34.6706 53.4149 34.5527 53.3156 34.3168 53.3156C34.0551 53.3156 33.8969 53.4292 33.8422 53.6565L33.29 53.5357C33.3073 53.3545 33.4079 53.1992 33.592 53.0697C33.779 52.9403 34.0191 52.8756 34.3125 52.8756C34.6231 52.8756 34.8604 52.9461 35.0243 53.087C35.1912 53.2279 35.2746 53.4364 35.2746 53.7125V54.502C35.2746 54.5596 35.2818 54.5955 35.2961 54.6099C35.3105 54.6243 35.3465 54.6315 35.404 54.6315H35.5938V55.0974H35.1236C34.8877 55.0974 34.7583 54.9924 34.7353 54.7825C34.5685 55.0385 34.3226 55.1664 33.9976 55.1664C33.802 55.1664 33.6395 55.1089 33.51 54.9939C33.3806 54.8788 33.3159 54.7293 33.3159 54.5452ZM34.6706 54.213V54.0749C34.4232 54.1066 34.2392 54.1512 34.1184 54.2087C33.9976 54.2662 33.9372 54.3582 33.9372 54.4848C33.9372 54.6401 34.0306 54.7178 34.2176 54.7178C34.347 54.7178 34.4549 54.6746 34.5411 54.5883C34.6274 54.502 34.6706 54.3769 34.6706 54.213ZM35.9183 55.0974V52.9403H36.5137V53.2509C36.6489 53.0007 36.8646 52.8756 37.1608 52.8756C37.4254 52.8756 37.6311 53.0007 37.7778 53.2509C37.9532 53.0007 38.1948 52.8756 38.5026 52.8756C38.724 52.8756 38.898 52.9417 39.0246 53.074C39.1511 53.2035 39.2144 53.3976 39.2144 53.6565V55.0974H38.6018V53.7859C38.6018 53.5155 38.4896 53.3803 38.2653 53.3803C38.179 53.3832 38.1071 53.4019 38.0496 53.4364C37.992 53.4709 37.9503 53.5213 37.9244 53.5874C37.9014 53.6507 37.8856 53.7125 37.877 53.7729C37.8712 53.8333 37.8684 53.9081 37.8684 53.9973V55.0974H37.2644V53.7859C37.2644 53.5155 37.1522 53.3803 36.9279 53.3803C36.8416 53.3832 36.7697 53.4019 36.7122 53.4364C36.6546 53.4709 36.6129 53.5213 36.587 53.5874C36.564 53.6507 36.5482 53.7125 36.5396 53.7729C36.5338 53.8333 36.531 53.9081 36.531 53.9973V55.0974H35.9183Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter7_di_570_13576)">
                        <rect
                          x="25.9094"
                          y="60.8496"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="30.9427"
                          y="67.321"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="30.6731"
                          y="67.0514"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint0_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip2_570_13576)">
                          <path
                            d="M41.3688 72.7103C41.3688 75.4901 39.1154 77.7435 36.3356 77.7435C33.5557 77.7435 31.3023 75.4901 31.3023 72.7103C31.3023 69.9304 33.5557 67.677 36.3356 67.677C39.1154 67.677 41.3688 69.9304 41.3688 72.7103Z"
                            fill="#3B4083"
                          ></path>
                          <path
                            d="M33.709 72.5559L33.4896 72.4604H35.1529C35.221 72.4604 35.2826 72.423 35.3094 72.3653L35.4496 72.0632L33.8341 72.0631C33.5622 72.0631 33.3165 72.2118 33.2089 72.4415L32.7678 73.3947C32.6723 73.6013 32.837 73.8305 33.081 73.8305H34.5171C34.5853 73.8305 34.6469 73.7931 34.6736 73.7354L34.8164 73.4278H33.3048L33.709 72.5559V72.5559Z"
                            fill="white"
                          ></path>
                          <path
                            d="M38.342 72.0631C38.0688 72.0631 37.8221 72.2135 37.7154 72.4449L37.5934 72.7098C37.4981 72.9162 37.6628 73.1452 37.9066 73.1452H39.0529L38.9218 73.4278H37.3734C37.3053 73.4278 37.2439 73.4651 37.2171 73.5226L37.0732 73.8305H38.8217C39.0943 73.8305 39.3406 73.6809 39.4476 73.4502L39.5758 73.174C39.6716 72.9675 39.5069 72.738 39.2628 72.738H38.1176L38.2017 72.556L37.9877 72.4605H39.7943C39.8626 72.4605 39.9242 72.423 39.9509 72.3652L40.0905 72.0632H38.3421L38.342 72.0631Z"
                            fill="white"
                          ></path>
                          <path
                            d="M37.8342 71.6604C37.8327 71.6604 37.8314 71.6592 37.8314 71.6578C37.8315 71.648 37.8318 71.6135 37.8319 71.607C37.8319 71.598 37.825 71.5908 37.8165 71.5908C37.8116 71.5908 37.8072 71.5932 37.8043 71.597C37.8029 71.5989 37.7854 71.6224 37.7746 71.6369C37.774 71.6376 37.773 71.6381 37.772 71.6381H36.9196C36.9162 71.6381 36.9135 71.6356 36.9134 71.6325L36.9117 71.6113C36.9116 71.6078 36.9152 71.6049 36.919 71.6056L36.9626 71.6094C36.9664 71.6097 36.9698 71.6075 36.9707 71.6041L37.0025 71.4856C37.0032 71.4828 37.0015 71.48 36.9986 71.4791L36.9691 71.4689C36.9674 71.4683 36.9661 71.467 36.9657 71.4654C36.9603 71.4448 36.9167 71.3068 36.7063 71.2759C36.6039 71.261 36.5369 71.3012 36.5011 71.3333C36.4852 71.3475 36.4721 71.3642 36.4618 71.3823L36.4493 71.4078C36.4482 71.4098 36.4433 71.4337 36.4433 71.4358L36.4499 71.5535C36.4499 71.5575 36.452 71.5613 36.4554 71.5637L36.5016 71.5821L36.4761 71.6209C36.4752 71.6238 36.4724 71.6258 36.4692 71.6258C36.4692 71.6258 36.4149 71.627 36.3882 71.6281C36.338 71.6299 36.2262 71.6863 36.1439 71.8484C36.063 72.0076 36.0497 72.0341 36.0497 72.0341C36.048 72.0371 36.0445 72.039 36.0408 72.0388L35.9656 72.0391C35.961 72.0391 35.956 72.0425 35.9541 72.0464L35.8372 72.3511C35.8353 72.355 35.8364 72.3608 35.8395 72.364L35.921 72.411C35.9233 72.4127 35.9243 72.4155 35.9236 72.4181L35.881 72.5339C35.8804 72.5365 35.8794 72.539 35.8779 72.5413L35.8214 72.5871C35.82 72.5883 35.8186 72.5898 35.8178 72.5914C35.8174 72.5923 35.817 72.5932 35.8167 72.5942L35.7389 72.7776C35.7379 72.7809 35.7347 72.7831 35.731 72.7831L35.6873 72.7833C35.6764 72.7833 35.6672 72.7911 35.6663 72.8011L35.6402 73.0754C35.6397 73.0802 35.639 73.085 35.6381 73.0898L35.6175 73.1986C35.6167 73.2012 35.6152 73.2034 35.6132 73.2053L35.5405 73.2564C35.5072 73.2856 35.4626 73.3391 35.4407 73.3764L35.1987 73.8466C35.1929 73.8566 35.1882 73.8738 35.1885 73.8852L35.2056 73.9134C35.2059 73.9235 35.2015 73.968 35.1964 73.977L35.1154 74.1075C35.1135 74.1106 35.1134 74.1144 35.115 74.1177L35.119 74.1262L35.1311 74.1484L35.3773 74.1488C35.3925 74.1501 35.4094 74.1321 35.4099 74.1128L35.4232 73.9574L35.4198 73.934L35.889 73.4269C35.9013 73.4131 35.9179 73.3889 35.9263 73.3729L36.1499 72.9188C36.1525 72.9138 36.1572 72.91 36.163 72.9082L36.1771 72.904C36.1857 72.9014 36.1951 72.904 36.2009 72.9104C36.2205 72.932 36.2665 73.004 36.2889 73.034C36.3074 73.0589 36.3994 73.1814 36.4396 73.2218C36.4507 73.2329 36.4849 73.2455 36.5002 73.2541C36.5052 73.2569 36.5069 73.2629 36.504 73.2675L36.37 73.4842L36.3108 73.7402C36.3087 73.7461 36.3071 73.7523 36.3062 73.7585L36.2526 73.9362C36.2529 73.9586 36.2342 73.9704 36.2327 73.9969L36.2132 74.1268C36.2129 74.1308 36.2164 74.1342 36.2208 74.1342L36.5519 74.1358H36.5521C36.5525 74.1358 36.5755 74.1355 36.589 74.135C36.5916 74.1349 36.5959 74.1345 36.5988 74.1342C36.6429 74.129 36.6731 74.1235 36.6937 74.1171C36.6946 74.1168 36.6955 74.1165 36.6964 74.1162C36.7107 74.1115 36.72 74.1064 36.7259 74.1007C36.7372 74.0898 36.7503 74.0765 36.7522 74.0594C36.7523 74.0588 36.7523 74.0582 36.7524 74.0575C36.7524 74.0571 36.7524 74.0566 36.7524 74.0562C36.7524 74.0553 36.7524 74.0544 36.7524 74.0534C36.7524 74.0533 36.7524 74.0532 36.7524 74.053C36.7524 74.0522 36.7523 74.0514 36.7522 74.0506C36.7518 74.0472 36.7509 74.0446 36.75 74.0425C36.75 74.0425 36.75 74.0425 36.75 74.0424C36.75 74.0424 36.7499 74.0423 36.7498 74.0423C36.7495 74.0416 36.7492 74.041 36.7488 74.0405C36.7485 74.0401 36.7484 74.0398 36.7481 74.0395C36.7462 74.0371 36.7443 74.0362 36.7441 74.036C36.7432 74.0355 36.7422 74.0351 36.7412 74.0348L36.5874 73.9921C36.5775 73.9893 36.5689 73.9837 36.5628 73.976L36.5216 73.9198C36.5196 73.9159 36.5205 73.9112 36.5238 73.9082L36.6042 73.8352C36.607 73.8328 36.6091 73.8298 36.6105 73.8266L36.8582 73.2887C36.8698 73.2546 36.866 73.2162 36.8582 73.1755C36.8525 73.1455 36.769 73.0166 36.7472 72.981C36.728 72.9496 36.6083 72.7568 36.5799 72.7111C36.5766 72.706 36.5724 72.7014 36.5671 72.698C36.5633 72.6956 36.5596 72.6925 36.5566 72.6893C36.5535 72.686 36.5513 72.6822 36.5501 72.678L36.5406 72.5442C36.5398 72.5412 36.542 72.5383 36.5453 72.5381L36.5884 72.5348C36.5925 72.5344 36.5961 72.5323 36.598 72.529L36.7473 72.2708C36.7493 72.2672 36.7492 72.2629 36.747 72.2595L36.7164 72.2247C36.7144 72.2215 36.7143 72.2174 36.7163 72.2142L36.762 72.1687C36.7639 72.1656 36.7682 72.1645 36.7716 72.1662L36.8932 72.2293C36.9005 72.2331 36.9089 72.2354 36.9174 72.2354C36.9511 72.2352 37.0066 72.2168 37.0355 72.2006C37.0431 72.1962 37.0494 72.1901 37.0536 72.1828L37.1132 72.0546C37.114 72.0529 37.1166 72.0532 37.117 72.0549L37.1336 72.1262C37.1347 72.1307 37.139 72.1332 37.1439 72.1322L37.3194 72.0963C37.3241 72.0953 37.3269 72.0911 37.326 72.0869L37.2846 71.9258C37.284 71.9236 37.2844 71.9213 37.2858 71.9194L37.3029 71.895C37.305 71.892 37.3066 71.8887 37.3076 71.8853L37.3282 71.7984C37.3288 71.7962 37.3309 71.7945 37.3334 71.7945L37.8191 71.7951C37.826 71.7951 37.8313 71.7903 37.8313 71.7839V71.708C37.8313 71.7066 37.8325 71.7054 37.8341 71.7054H38.0214C38.0247 71.7054 38.0274 71.7029 38.0274 71.6998V71.6656C38.0274 71.6626 38.0247 71.6601 38.0214 71.6601H37.834L37.8342 71.6604Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M31.4856 86.0927C31.4789 85.5759 31.65 85.1397 31.999 84.784C32.3513 84.425 32.7909 84.2488 33.3177 84.2556C33.7237 84.2556 34.071 84.3562 34.3596 84.5576C34.6515 84.7555 34.8461 85.0173 34.9434 85.3427L34.2539 85.6095C34.0861 85.1297 33.7707 84.8897 33.3076 84.8897C32.9889 84.8897 32.7389 84.9954 32.5577 85.2068C32.3765 85.4182 32.2859 85.7135 32.2859 86.0927C32.2859 86.4752 32.3748 86.7722 32.5526 86.9836C32.7338 87.195 32.9855 87.3007 33.3076 87.3007C33.7774 87.3007 34.0995 87.0591 34.274 86.5759L34.9485 86.8477C34.8176 87.2 34.6129 87.4701 34.3344 87.658C34.0593 87.846 33.717 87.9399 33.3076 87.9399C32.764 87.9399 32.3245 87.7671 31.9889 87.4215C31.6534 87.0759 31.4856 86.6329 31.4856 86.0927ZM35.2197 86.8527L35.9394 86.6111C35.9831 86.8158 36.0804 86.9869 36.2314 87.1245C36.3824 87.2621 36.582 87.3309 36.8303 87.3309C37.0585 87.3309 37.2296 87.2906 37.3437 87.2101C37.4612 87.1296 37.5199 87.0188 37.5199 86.8779C37.5199 86.6464 37.3286 86.5021 36.9461 86.445L36.5082 86.3846C35.7666 86.2806 35.3958 85.9283 35.3958 85.3276C35.3958 85.0223 35.52 84.7673 35.7683 84.5626C36.02 84.3579 36.3606 84.2556 36.7901 84.2556C37.1994 84.2556 37.5283 84.3428 37.7766 84.5173C38.0249 84.6884 38.1927 84.9149 38.2799 85.1968L37.5753 85.4434C37.4511 85.0575 37.1894 84.8646 36.7901 84.8646C36.5921 84.8646 36.4428 84.9048 36.3421 84.9854C36.2414 85.0659 36.1911 85.1699 36.1911 85.2974C36.1911 85.5055 36.3421 85.6313 36.6441 85.6749L37.082 85.7353C37.4746 85.789 37.7783 85.9081 37.993 86.0927C38.2078 86.2773 38.3151 86.5222 38.3151 86.8276C38.3151 87.153 38.1876 87.4198 37.9326 87.6278C37.6776 87.8359 37.3102 87.9399 36.8303 87.9399C36.3807 87.9399 36.0183 87.8392 35.7431 87.6379C35.468 87.4366 35.2935 87.1749 35.2197 86.8527ZM38.7811 87.8594V87.0843C39.2945 86.7856 39.6753 86.5457 39.9236 86.3645C40.1719 86.1799 40.338 86.0222 40.4219 85.8914C40.5092 85.7571 40.5578 85.6028 40.5679 85.4283C40.5679 85.2706 40.5192 85.1414 40.4219 85.0407C40.3246 84.9401 40.2021 84.8897 40.0545 84.8897C39.6921 84.8897 39.5025 85.1364 39.4857 85.6296L38.7559 85.5139C38.7559 85.1716 38.8734 84.8746 39.1082 84.623C39.3465 84.3713 39.6686 84.2488 40.0746 84.2556C40.4672 84.2556 40.7759 84.3562 41.0007 84.5576C41.2256 84.7589 41.338 85.0256 41.338 85.3578C41.338 85.6833 41.2407 85.9635 41.046 86.1984C40.9085 86.3662 40.7155 86.5306 40.4672 86.6917C40.2189 86.8527 39.8867 87.0306 39.4706 87.2252H40.5025H41.3531V87.8594H38.7811Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M31.4408 93.6306L31.9715 93.4278C32.0204 93.6176 32.111 93.7701 32.2433 93.8851C32.3785 93.9973 32.5525 94.0534 32.7653 94.0534C32.9666 94.0534 33.1191 94.016 33.2226 93.9412C33.3262 93.8635 33.3779 93.7586 33.3779 93.6263C33.3779 93.4077 33.2054 93.2682 32.8602 93.2078L32.4763 93.1431C32.1829 93.0913 31.9614 92.9949 31.8119 92.854C31.6652 92.7131 31.5918 92.5161 31.5918 92.263C31.5918 92.007 31.6939 91.7941 31.8981 91.6245C32.1052 91.4548 32.3813 91.3699 32.7265 91.3699C33.0515 91.3699 33.3161 91.4433 33.5203 91.5899C33.7245 91.7337 33.8597 91.9149 33.9258 92.1335L33.4038 92.3363C33.3003 92.0027 33.0687 91.8359 32.7092 91.8359C32.5338 91.8359 32.3986 91.8732 32.3037 91.948C32.2116 92.0228 32.1656 92.1192 32.1656 92.2371C32.1656 92.4355 32.308 92.5606 32.5927 92.6124L32.9853 92.6814C33.2931 92.7332 33.5318 92.8353 33.7015 92.9878C33.8741 93.1402 33.9603 93.3386 33.9603 93.5831C33.9603 93.8621 33.8554 94.0879 33.6454 94.2604C33.4383 94.433 33.1421 94.5193 32.7567 94.5193C32.4 94.5193 32.1081 94.4373 31.8809 94.2734C31.6565 94.1095 31.5099 93.8952 31.4408 93.6306ZM34.6733 93.9067V92.716H34.2073V92.3061H34.6733V91.6331H35.1996V92.3061H35.7691V92.716H35.1996V93.8247C35.1996 93.957 35.2658 94.0232 35.3981 94.0232H35.8554V94.4546H35.2169C35.0443 94.4546 34.9106 94.4071 34.8156 94.3122C34.7207 94.2144 34.6733 94.0793 34.6733 93.9067ZM36.0762 93.3803C36.0762 93.0438 36.174 92.7706 36.3695 92.5606C36.568 92.3478 36.8168 92.2414 37.1159 92.2414C37.4208 92.2414 37.6652 92.3449 37.8493 92.552C38.0334 92.7562 38.1254 93.0208 38.1254 93.3458C38.1254 93.3919 38.1226 93.4465 38.1168 93.5098H36.5982C36.6068 93.7082 36.6586 93.8578 36.7535 93.9585C36.8484 94.0562 36.9735 94.1051 37.1288 94.1051C37.3647 94.1051 37.5401 93.9757 37.6552 93.7169L38.1297 93.8937C37.9629 94.3108 37.6279 94.5193 37.1245 94.5193C36.8053 94.5193 36.5507 94.4186 36.3609 94.2173C36.1711 94.0131 36.0762 93.7341 36.0762 93.3803ZM36.6154 93.1215H37.5948C37.5862 92.9691 37.5387 92.8497 37.4524 92.7634C37.369 92.6771 37.2568 92.634 37.1159 92.634C36.9836 92.634 36.8714 92.6771 36.7794 92.7634C36.6902 92.8497 36.6356 92.9691 36.6154 93.1215ZM38.4949 93.9024C38.4949 93.6263 38.6171 93.4264 38.8616 93.3027C39.1032 93.1761 39.4311 93.0927 39.8453 93.0525V92.9791C39.8453 92.7548 39.7144 92.6426 39.4527 92.6426C39.1823 92.6426 39.0126 92.762 38.9436 93.0007L38.4647 92.8756C38.4877 92.703 38.5884 92.5549 38.7667 92.4312C38.945 92.3047 39.1737 92.2414 39.4527 92.2414C39.7489 92.2414 39.9747 92.3104 40.13 92.4485C40.2882 92.5837 40.3673 92.7821 40.3673 93.0438V93.911C40.3673 93.9656 40.3745 94.0016 40.3888 94.0189C40.4061 94.0332 40.4421 94.0404 40.4967 94.0404H40.6995V94.4546H40.2939C40.0581 94.4546 39.9287 94.3482 39.9057 94.1353C39.736 94.3913 39.4944 94.5193 39.1809 94.5193C38.9795 94.5193 38.8142 94.4632 38.6847 94.351C38.5582 94.2389 38.4949 94.0893 38.4949 93.9024ZM39.8453 93.5702V93.3976C39.5749 93.4264 39.3707 93.4767 39.2326 93.5486C39.0975 93.6176 39.0299 93.7183 39.0299 93.8506C39.0299 93.9369 39.0572 94.0045 39.1118 94.0534C39.1694 94.0994 39.2499 94.1224 39.3534 94.1224C39.4944 94.1224 39.6108 94.0749 39.7029 93.98C39.7978 93.8822 39.8453 93.7456 39.8453 93.5702ZM41.0427 94.4546V92.3061H41.556V92.621C41.6193 92.5031 41.707 92.4111 41.8192 92.3449C41.9314 92.2759 42.0579 92.2414 42.1989 92.2414C42.4951 92.2414 42.7079 92.3766 42.8374 92.6469C43.0042 92.3766 43.2444 92.2414 43.5579 92.2414C43.7879 92.2414 43.9663 92.3075 44.0928 92.4398C44.2194 92.5721 44.2826 92.7663 44.2826 93.0223V94.4546H43.7606V93.1431C43.7606 92.8353 43.6312 92.6814 43.3723 92.6814C43.2343 92.6814 43.1336 92.7203 43.0703 92.7979C43.0099 92.8698 42.9697 92.9518 42.9495 93.0438C42.9323 93.133 42.9237 93.2495 42.9237 93.3933V94.4546H42.406V93.1431C42.406 92.8353 42.2765 92.6814 42.0177 92.6814C41.8854 92.6814 41.7861 92.7203 41.72 92.7979C41.6193 92.9158 41.569 93.1143 41.569 93.3933V94.4546H41.0427Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter8_di_570_13576)">
                        <rect
                          x="75.5231"
                          y="60.8496"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="80.5563"
                          y="67.321"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="80.2867"
                          y="67.0514"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint1_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip3_570_13576)">
                          <path
                            d="M90.9824 72.7103C90.9824 75.4901 88.7289 77.7435 85.9491 77.7435C83.1693 77.7435 80.9158 75.4901 80.9158 72.7103C80.9158 69.9304 83.1693 67.677 85.9491 67.677C88.7289 67.677 90.9824 69.9304 90.9824 72.7103Z"
                            fill="#B38A40"
                          ></path>
                          <g clip-path="url(#clip4_570_13576)">
                            <path
                              d="M86.6456 69.6599C87.9705 69.9983 88.9503 71.1998 88.9503 72.6302C88.9503 72.6628 88.9496 72.6953 88.9485 72.7277L86.8867 72.4344C86.8263 72.1237 86.6251 71.8636 86.3522 71.7227L86.6456 69.6599ZM84.9773 72.1628C85.1182 71.8898 85.3784 71.6886 85.6891 71.6283L85.9824 69.5664C85.95 69.5654 85.9175 69.5647 85.8849 69.5647C84.4545 69.5647 83.253 70.5444 82.9146 71.8693L84.9773 72.1628ZM85.4175 73.5377C85.1445 73.3968 84.9433 73.1366 84.8829 72.826L82.8211 72.5326C82.8201 72.5651 82.8194 72.5975 82.8194 72.6302C82.8194 74.0605 83.7991 75.262 85.124 75.6004L85.4175 73.5377ZM86.7923 73.0976C86.6514 73.3705 86.3913 73.5717 86.0806 73.6321L85.7873 75.694C85.8197 75.695 85.8522 75.6957 85.8848 75.6957C87.3152 75.6957 88.5167 74.716 88.855 73.391L86.7923 73.0976Z"
                              fill="white"
                            ></path>
                          </g>
                        </g>
                        <path
                          d="M82.005 87.8594V84.9703H80.797V84.3361H83.978V84.9703H82.77V87.8594H82.005ZM84.4529 87.8594V84.3361H87.1608V84.9703H85.2179V85.8863H86.7732V86.5205H85.2179V87.8594H84.4529ZM87.5407 87.8594V87.0843C88.0541 86.7856 88.4349 86.5457 88.6833 86.3645C88.9316 86.1799 89.0977 86.0222 89.1815 85.8914C89.2688 85.7571 89.3174 85.6028 89.3275 85.4283C89.3275 85.2706 89.2789 85.1414 89.1815 85.0407C89.0842 84.9401 88.9618 84.8897 88.8141 84.8897C88.4517 84.8897 88.2621 85.1364 88.2454 85.6296L87.5155 85.5139C87.5155 85.1716 87.633 84.8746 87.8679 84.623C88.1061 84.3713 88.4282 84.2488 88.8342 84.2556C89.2268 84.2556 89.5356 84.3562 89.7604 84.5576C89.9852 84.7589 90.0976 85.0256 90.0976 85.3578C90.0976 85.6833 90.0003 85.9635 89.8057 86.1984C89.6681 86.3662 89.4752 86.5306 89.2268 86.6917C88.9785 86.8527 88.6463 87.0306 88.2303 87.2252H89.2621H90.1127V87.8594H87.5407Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M81.0544 93.6306L81.585 93.4278C81.6339 93.6176 81.7245 93.7701 81.8568 93.8851C81.992 93.9973 82.166 94.0534 82.3788 94.0534C82.5802 94.0534 82.7326 94.016 82.8361 93.9412C82.9397 93.8635 82.9915 93.7586 82.9915 93.6263C82.9915 93.4077 82.8189 93.2682 82.4737 93.2078L82.0898 93.1431C81.7964 93.0913 81.5749 92.9949 81.4254 92.854C81.2787 92.7131 81.2054 92.5161 81.2054 92.263C81.2054 92.007 81.3075 91.7941 81.5117 91.6245C81.7188 91.4548 81.9949 91.3699 82.34 91.3699C82.665 91.3699 82.9296 91.4433 83.1338 91.5899C83.338 91.7337 83.4732 91.9149 83.5394 92.1335L83.0173 92.3363C82.9138 92.0027 82.6823 91.8359 82.3227 91.8359C82.1473 91.8359 82.0121 91.8732 81.9172 91.948C81.8252 92.0228 81.7792 92.1192 81.7792 92.2371C81.7792 92.4355 81.9215 92.5606 82.2063 92.6124L82.5989 92.6814C82.9066 92.7332 83.1453 92.8353 83.315 92.9878C83.4876 93.1402 83.5739 93.3386 83.5739 93.5831C83.5739 93.8621 83.4689 94.0879 83.2589 94.2604C83.0518 94.433 82.7556 94.5193 82.3702 94.5193C82.0136 94.5193 81.7216 94.4373 81.4944 94.2734C81.2701 94.1095 81.1234 93.8952 81.0544 93.6306ZM84.2868 93.9067V92.716H83.8209V92.3061H84.2868V91.6331H84.8131V92.3061H85.3826V92.716H84.8131V93.8247C84.8131 93.957 84.8793 94.0232 85.0116 94.0232H85.4689V94.4546H84.8304C84.6578 94.4546 84.5241 94.4071 84.4292 94.3122C84.3343 94.2144 84.2868 94.0793 84.2868 93.9067ZM85.6897 93.3803C85.6897 93.0438 85.7875 92.7706 85.9831 92.5606C86.1815 92.3478 86.4303 92.2414 86.7294 92.2414C87.0343 92.2414 87.2788 92.3449 87.4628 92.552C87.6469 92.7562 87.739 93.0208 87.739 93.3458C87.739 93.3919 87.7361 93.4465 87.7303 93.5098H86.2117C86.2203 93.7082 86.2721 93.8578 86.367 93.9585C86.4619 94.0562 86.5871 94.1051 86.7424 94.1051C86.9782 94.1051 87.1537 93.9757 87.2687 93.7169L87.7433 93.8937C87.5765 94.3108 87.2414 94.5193 86.7381 94.5193C86.4188 94.5193 86.1643 94.4186 85.9744 94.2173C85.7846 94.0131 85.6897 93.7341 85.6897 93.3803ZM86.229 93.1215H87.2083C87.1997 92.9691 87.1522 92.8497 87.0659 92.7634C86.9825 92.6771 86.8704 92.634 86.7294 92.634C86.5971 92.634 86.485 92.6771 86.3929 92.7634C86.3038 92.8497 86.2491 92.9691 86.229 93.1215ZM88.1084 93.9024C88.1084 93.6263 88.2307 93.4264 88.4751 93.3027C88.7167 93.1761 89.0446 93.0927 89.4588 93.0525V92.9791C89.4588 92.7548 89.3279 92.6426 89.0662 92.6426C88.7958 92.6426 88.6261 92.762 88.5571 93.0007L88.0782 92.8756C88.1012 92.703 88.2019 92.5549 88.3802 92.4312C88.5585 92.3047 88.7872 92.2414 89.0662 92.2414C89.3624 92.2414 89.5882 92.3104 89.7435 92.4485C89.9017 92.5837 89.9808 92.7821 89.9808 93.0438V93.911C89.9808 93.9656 89.988 94.0016 90.0024 94.0189C90.0196 94.0332 90.0556 94.0404 90.1102 94.0404H90.313V94.4546H89.9075C89.6716 94.4546 89.5422 94.3482 89.5192 94.1353C89.3495 94.3913 89.1079 94.5193 88.7944 94.5193C88.5931 94.5193 88.4277 94.4632 88.2983 94.351C88.1717 94.2389 88.1084 94.0893 88.1084 93.9024ZM89.4588 93.5702V93.3976C89.1884 93.4264 88.9842 93.4767 88.8462 93.5486C88.711 93.6176 88.6434 93.7183 88.6434 93.8506C88.6434 93.9369 88.6707 94.0045 88.7254 94.0534C88.7829 94.0994 88.8634 94.1224 88.967 94.1224C89.1079 94.1224 89.2244 94.0749 89.3164 93.98C89.4113 93.8822 89.4588 93.7456 89.4588 93.5702ZM90.6562 94.4546V92.3061H91.1696V92.621C91.2329 92.5031 91.3206 92.4111 91.4327 92.3449C91.5449 92.2759 91.6715 92.2414 91.8124 92.2414C92.1086 92.2414 92.3215 92.3766 92.4509 92.6469C92.6177 92.3766 92.8579 92.2414 93.1714 92.2414C93.4015 92.2414 93.5798 92.3075 93.7063 92.4398C93.8329 92.5721 93.8962 92.7663 93.8962 93.0223V94.4546H93.3741V93.1431C93.3741 92.8353 93.2447 92.6814 92.9859 92.6814C92.8478 92.6814 92.7471 92.7203 92.6839 92.7979C92.6235 92.8698 92.5832 92.9518 92.5631 93.0438C92.5458 93.133 92.5372 93.2495 92.5372 93.3933V94.4546H92.0195V93.1431C92.0195 92.8353 91.8901 92.6814 91.6312 92.6814C91.4989 92.6814 91.3997 92.7203 91.3335 92.7979C91.2329 92.9158 91.1825 93.1143 91.1825 93.3933V94.4546H90.6562Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter9_d_570_13576)">
                        <path
                          d="M26.0863 111.04C26.0806 110.597 26.2272 110.223 26.5264 109.918C26.8284 109.61 27.2051 109.459 27.6567 109.465C28.0047 109.465 28.3024 109.551 28.5497 109.724C28.8 109.894 28.9668 110.118 29.0502 110.397L28.4591 110.626C28.3153 110.214 28.045 110.009 27.6481 110.009C27.3748 110.009 27.1606 110.099 27.0052 110.281C26.8499 110.462 26.7723 110.715 26.7723 111.04C26.7723 111.368 26.8485 111.622 27.0009 111.804C27.1562 111.985 27.3719 112.075 27.6481 112.075C28.0507 112.075 28.3268 111.868 28.4764 111.454L29.0545 111.687C28.9423 111.989 28.7669 112.221 28.5282 112.382C28.2923 112.543 27.9989 112.623 27.6481 112.623C27.1821 112.623 26.8053 112.475 26.5177 112.179C26.2301 111.883 26.0863 111.503 26.0863 111.04ZM29.4638 112.554V110.397H30.0635V110.889C30.1182 110.754 30.2059 110.63 30.3267 110.518C30.4504 110.409 30.6244 110.354 30.8487 110.354C30.9005 110.354 30.9336 110.355 30.9479 110.358V110.988C30.8645 110.98 30.7854 110.975 30.7107 110.975C30.4834 110.975 30.3209 111.028 30.2231 111.135C30.1254 111.238 30.0765 111.422 30.0765 111.687V112.554H29.4638ZM32.7413 110.397H33.3841L32.4825 112.895C32.4192 113.07 32.3358 113.197 32.2322 113.275C32.1287 113.355 31.9863 113.395 31.8051 113.395H31.1623V112.908H31.7231C31.7979 112.908 31.854 112.889 31.8914 112.852C31.9317 112.817 31.9691 112.753 32.0036 112.658L32.0424 112.546L30.9984 110.397H31.6541L32.0122 111.221C32.1215 111.483 32.2107 111.683 32.2797 111.821C32.3228 111.697 32.3933 111.483 32.4911 111.178L32.7413 110.397ZM33.7317 113.395V110.397H34.3271V110.686C34.3932 110.591 34.4896 110.508 34.6161 110.436C34.7427 110.364 34.8851 110.328 35.0433 110.328C35.3251 110.328 35.5509 110.434 35.7206 110.647C35.8932 110.857 35.9794 111.133 35.9794 111.476C35.9794 111.818 35.8932 112.095 35.7206 112.308C35.5509 112.518 35.3251 112.623 35.0433 112.623C34.8879 112.623 34.7484 112.59 34.6248 112.524C34.504 112.455 34.4105 112.369 34.3443 112.265V112.64V113.395H33.7317ZM35.3366 111.476C35.3366 111.018 35.1669 110.79 34.8275 110.79C34.6694 110.79 34.5442 110.849 34.4522 110.967C34.363 111.084 34.3185 111.254 34.3185 111.476C34.3185 111.694 34.363 111.862 34.4522 111.98C34.5442 112.098 34.6694 112.157 34.8275 112.157C35.1669 112.157 35.3366 111.93 35.3366 111.476ZM36.5976 111.989V110.863H36.1446V110.397H36.5976V109.72H37.2102V110.397H37.7711V110.863H37.2102V111.877C37.2102 111.943 37.2246 111.992 37.2533 112.024C37.285 112.052 37.3339 112.067 37.4 112.067H37.866V112.554H37.1455C36.9758 112.554 36.8421 112.502 36.7443 112.399C36.6465 112.295 36.5976 112.159 36.5976 111.989ZM38.0509 111.476C38.0509 111.136 38.1574 110.862 38.3702 110.652C38.583 110.439 38.8548 110.332 39.1856 110.332C39.5192 110.332 39.791 110.439 40.001 110.652C40.2138 110.862 40.3202 111.136 40.3202 111.476C40.3202 111.821 40.2152 112.098 40.0053 112.308C39.7953 112.518 39.5221 112.623 39.1856 112.623C38.8606 112.623 38.5902 112.515 38.3745 112.3C38.1588 112.081 38.0509 111.806 38.0509 111.476ZM39.548 111.972C39.6371 111.86 39.6817 111.697 39.6817 111.484C39.6817 111.271 39.6371 111.107 39.548 110.992C39.4617 110.875 39.3409 110.816 39.1856 110.816C39.0303 110.816 38.908 110.875 38.8189 110.992C38.7326 111.107 38.6894 111.271 38.6894 111.484C38.6894 111.697 38.7326 111.86 38.8189 111.972C38.908 112.081 39.0303 112.136 39.1856 112.136C39.3409 112.136 39.4617 112.081 39.548 111.972ZM40.6209 111.471C40.6209 111.135 40.7317 110.862 40.9531 110.652C41.1746 110.439 41.4507 110.332 41.7815 110.332C42.0288 110.332 42.2431 110.391 42.4243 110.509C42.6055 110.627 42.7335 110.784 42.8083 110.98L42.2431 111.191C42.1539 110.941 41.9929 110.816 41.7599 110.816C41.6075 110.816 41.4823 110.873 41.3846 110.988C41.2868 111.103 41.2379 111.264 41.2379 111.471C41.2379 111.678 41.2868 111.841 41.3846 111.959C41.4852 112.077 41.6118 112.136 41.7642 112.136C42.0001 112.136 42.1669 111.999 42.2647 111.726L42.8428 111.933C42.7594 112.143 42.6227 112.311 42.4329 112.438C42.2431 112.561 42.0245 112.623 41.7772 112.623C41.4406 112.623 41.1631 112.517 40.9445 112.304C40.7288 112.091 40.6209 111.814 40.6209 111.471ZM43.2022 111.851V110.397H43.8148V111.709C43.8148 111.979 43.9227 112.114 44.1384 112.114C44.2822 112.114 44.39 112.057 44.462 111.942C44.5339 111.824 44.5698 111.664 44.5698 111.463V110.397H45.1824V112.554H44.5698V112.209C44.4059 112.485 44.1715 112.623 43.8666 112.623C43.6653 112.623 43.5042 112.554 43.3834 112.416C43.2626 112.275 43.2022 112.087 43.2022 111.851ZM45.777 112.554V110.397H46.3767V110.889C46.4313 110.754 46.5191 110.63 46.6399 110.518C46.7635 110.409 46.9375 110.354 47.1619 110.354C47.2137 110.354 47.2467 110.355 47.2611 110.358V110.988C47.1777 110.98 47.0986 110.975 47.0238 110.975C46.7966 110.975 46.6341 111.028 46.5363 111.135C46.4385 111.238 46.3896 111.422 46.3896 111.687V112.554H45.777ZM47.6308 112.554V110.397H48.2305V110.889C48.2851 110.754 48.3728 110.63 48.4936 110.518C48.6173 110.409 48.7913 110.354 49.0157 110.354C49.0674 110.354 49.1005 110.355 49.1149 110.358V110.988C49.0315 110.98 48.9524 110.975 48.8776 110.975C48.6504 110.975 48.4879 111.028 48.3901 111.135C48.2923 111.238 48.2434 111.422 48.2434 111.687V112.554H47.6308ZM49.2579 111.471C49.2579 111.141 49.3615 110.869 49.5686 110.656C49.7756 110.44 50.0359 110.332 50.3494 110.332C50.6744 110.332 50.9304 110.439 51.1174 110.652C51.3043 110.864 51.3978 111.139 51.3978 111.476C51.3978 111.542 51.3963 111.591 51.3935 111.622H49.8705C49.8792 111.798 49.9266 111.932 50.0129 112.024C50.0992 112.113 50.2128 112.157 50.3537 112.157C50.5781 112.157 50.7449 112.032 50.8542 111.782L51.4021 111.993C51.3273 112.166 51.2065 112.315 51.0397 112.442C50.8758 112.563 50.6471 112.623 50.3537 112.623C50.023 112.623 49.7569 112.52 49.5556 112.313C49.3572 112.103 49.2579 111.822 49.2579 111.471ZM49.8921 111.191H50.7895C50.7578 110.912 50.6112 110.772 50.3494 110.772C50.2258 110.772 50.1236 110.808 50.0431 110.88C49.9626 110.952 49.9123 111.056 49.8921 111.191ZM51.8608 112.554V110.397H52.4561V110.729C52.6172 110.465 52.8487 110.332 53.1507 110.332C53.3866 110.332 53.5634 110.4 53.6814 110.535C53.8022 110.67 53.8626 110.862 53.8626 111.109V112.554H53.2499V111.243C53.2499 110.972 53.1349 110.837 52.9048 110.837C52.7754 110.837 52.679 110.876 52.6157 110.954C52.5208 111.069 52.4734 111.261 52.4734 111.532V112.554H51.8608ZM54.2883 111.471C54.2883 111.135 54.399 110.862 54.6205 110.652C54.8419 110.439 55.1181 110.332 55.4488 110.332C55.6962 110.332 55.9104 110.391 56.0916 110.509C56.2728 110.627 56.4008 110.784 56.4756 110.98L55.9104 111.191C55.8213 110.941 55.6602 110.816 55.4272 110.816C55.2748 110.816 55.1497 110.873 55.0519 110.988C54.9541 111.103 54.9052 111.264 54.9052 111.471C54.9052 111.678 54.9541 111.841 55.0519 111.959C55.1526 112.077 55.2791 112.136 55.4316 112.136C55.6674 112.136 55.8342 111.999 55.932 111.726L56.5101 111.933C56.4267 112.143 56.2901 112.311 56.1003 112.438C55.9104 112.561 55.6918 112.623 55.4445 112.623C55.108 112.623 54.8304 112.517 54.6118 112.304C54.3961 112.091 54.2883 111.814 54.2883 111.471ZM58.3191 110.397H58.9619L58.0603 112.895C57.997 113.07 57.9136 113.197 57.81 113.275C57.7065 113.355 57.5641 113.395 57.3829 113.395H56.7401V112.908H57.301C57.3757 112.908 57.4318 112.889 57.4692 112.852C57.5095 112.817 57.5469 112.753 57.5814 112.658L57.6202 112.546L56.5762 110.397H57.2319L57.59 111.221C57.6993 111.483 57.7885 111.683 57.8575 111.821C57.9006 111.697 57.9711 111.483 58.0689 111.178L58.3191 110.397Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter10_di_570_13576)">
                        <rect
                          x="25.9094"
                          y="118.306"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="30.9427"
                          y="124.778"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="30.6731"
                          y="124.508"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint2_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip5_570_13576)">
                          <path
                            d="M41.3579 130.178C41.3579 132.952 39.1093 135.201 36.3356 135.201C33.562 135.201 31.3134 132.952 31.3134 130.178C31.3134 127.405 33.5619 125.156 36.3356 125.156C39.1093 125.156 41.3579 127.405 41.3579 130.178Z"
                            fill="#F7931A"
                          ></path>
                          <path
                            d="M38.5926 129.557C38.6901 128.9 38.1899 128.546 37.5041 128.31L37.7259 127.418L37.1848 127.283L36.9646 128.151C36.8215 128.115 36.6752 128.082 36.5305 128.049L36.7507 127.179L36.2081 127.044L35.9863 127.934C35.8683 127.907 35.7519 127.88 35.6403 127.852L34.8916 127.665L34.7484 128.244C34.7484 128.244 35.1511 128.337 35.1417 128.341C35.2167 128.351 35.2852 128.389 35.3325 128.448C35.3798 128.507 35.4021 128.582 35.3948 128.657L35.3949 128.656L35.1417 129.672C35.164 129.677 35.183 129.683 35.2012 129.69L35.1983 129.689L35.1417 129.675L34.7862 131.091C34.7784 131.116 34.7657 131.139 34.7489 131.159C34.7321 131.179 34.7114 131.195 34.6882 131.207C34.6649 131.219 34.6395 131.227 34.6134 131.229C34.5874 131.231 34.5611 131.228 34.5363 131.219L34.5377 131.22L34.1429 131.122L33.8739 131.74L34.5801 131.915L34.9671 132.016L34.7421 132.917L35.2848 133.052L35.5066 132.16C35.6544 132.2 35.7976 132.237 35.9391 132.272L35.7173 133.161L36.26 133.296L36.4833 132.396C37.4098 132.571 38.105 132.5 38.3975 131.663C38.6335 130.99 38.3865 130.602 37.8989 130.348C38.2544 130.273 38.5202 130.038 38.5926 129.557ZM37.3516 131.295C37.1848 131.97 36.0508 131.61 35.6827 131.514L35.98 130.325C36.3481 130.411 37.5277 130.594 37.3516 131.295ZM37.5199 129.548C37.3626 130.161 36.4188 129.848 36.1169 129.773L36.3874 128.691C36.6925 128.766 37.6787 128.909 37.5199 129.548Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M31.663 145.316V141.793H33.3492C33.7283 141.793 34.0203 141.87 34.2249 142.024C34.4296 142.175 34.532 142.382 34.532 142.643C34.532 143.056 34.3004 143.333 33.8374 143.474C34.0823 143.514 34.2786 143.615 34.4263 143.776C34.5739 143.933 34.6477 144.12 34.6477 144.334C34.6477 144.633 34.5269 144.871 34.2853 145.049C34.0437 145.227 33.7334 145.316 33.3542 145.316H31.663ZM32.4281 143.187H33.2334C33.5891 143.187 33.7669 143.059 33.7669 142.804C33.7669 142.67 33.7216 142.574 33.631 142.517C33.5438 142.457 33.4112 142.427 33.2334 142.427H32.4281V143.187ZM32.4281 144.682H33.2435C33.6528 144.682 33.8575 144.536 33.8575 144.244C33.8575 143.949 33.6528 143.801 33.2435 143.801H32.4281V144.682ZM35.175 142.457V141.783H35.935V142.457H35.175ZM35.2001 145.316V142.799H35.9149V145.316H35.2001ZM36.8578 144.657V143.343H36.3293V142.799H36.8578V142.009H37.5725V142.799H38.2269V143.343H37.5725V144.526C37.5725 144.603 37.5893 144.66 37.6229 144.697C37.6598 144.73 37.7168 144.747 37.794 144.747H38.3376V145.316H37.497C37.2991 145.316 37.143 145.256 37.0289 145.135C36.9149 145.014 36.8578 144.855 36.8578 144.657ZM38.5534 144.053C38.5534 143.66 38.6826 143.341 38.941 143.096C39.1993 142.848 39.5215 142.724 39.9073 142.724C40.1959 142.724 40.4459 142.793 40.6573 142.93C40.8687 143.068 41.018 143.251 41.1053 143.479L40.4459 143.725C40.3419 143.433 40.154 143.288 39.8822 143.288C39.7043 143.288 39.5584 143.355 39.4443 143.489C39.3302 143.623 39.2731 143.811 39.2731 144.053C39.2731 144.294 39.3302 144.484 39.4443 144.621C39.5617 144.759 39.7094 144.828 39.8872 144.828C40.1624 144.828 40.357 144.668 40.4711 144.35L41.1455 144.591C41.0482 144.836 40.8888 145.032 40.6674 145.18C40.4459 145.324 40.1909 145.396 39.9023 145.396C39.5097 145.396 39.1859 145.272 38.9309 145.024C38.6792 144.776 38.5534 144.452 38.5534 144.053ZM41.4239 144.058C41.4239 143.662 41.5481 143.341 41.7964 143.096C42.0447 142.848 42.3618 142.724 42.7477 142.724C43.1369 142.724 43.454 142.848 43.699 143.096C43.9473 143.341 44.0714 143.662 44.0714 144.058C44.0714 144.46 43.9489 144.784 43.704 145.029C43.459 145.274 43.1403 145.396 42.7477 145.396C42.3685 145.396 42.0531 145.271 41.8014 145.019C41.5498 144.764 41.4239 144.443 41.4239 144.058ZM43.1705 144.636C43.2745 144.506 43.3265 144.316 43.3265 144.068C43.3265 143.819 43.2745 143.628 43.1705 143.494C43.0698 143.356 42.9289 143.288 42.7477 143.288C42.5665 143.288 42.4239 143.356 42.3198 143.494C42.2192 143.628 42.1688 143.819 42.1688 144.068C42.1688 144.316 42.2192 144.506 42.3198 144.636C42.4239 144.764 42.5665 144.828 42.7477 144.828C42.9289 144.828 43.0698 144.764 43.1705 144.636ZM44.5632 142.457V141.783H45.3232V142.457H44.5632ZM44.5884 145.316V142.799H45.3031V145.316H44.5884ZM45.9893 145.316V142.799H46.6839V143.187C46.8718 142.878 47.142 142.724 47.4943 142.724C47.7694 142.724 47.9758 142.803 48.1134 142.96C48.2543 143.118 48.3248 143.341 48.3248 143.63V145.316H47.61V143.786C47.61 143.47 47.4758 143.313 47.2074 143.313C47.0564 143.313 46.944 143.358 46.8702 143.449C46.7594 143.583 46.7041 143.808 46.7041 144.123V145.316H45.9893Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M31.4859 150.388C31.4802 149.948 31.6225 149.577 31.913 149.275C32.2064 148.97 32.5745 148.821 33.0175 148.826C33.3655 148.826 33.6603 148.913 33.9019 149.085C34.1435 149.258 34.3031 149.476 34.3808 149.741L33.8587 149.935C33.7149 149.515 33.4331 149.305 33.0132 149.305C32.7255 149.305 32.4969 149.402 32.3272 149.594C32.1604 149.787 32.077 150.05 32.077 150.384C32.077 150.726 32.1604 150.997 32.3272 151.195C32.494 151.393 32.7227 151.493 33.0132 151.493C33.4359 151.493 33.7236 151.277 33.876 150.846L34.3851 151.048C34.2844 151.339 34.1176 151.566 33.8846 151.73C33.6517 151.894 33.3612 151.976 33.0132 151.976C32.5587 151.982 32.1891 151.833 31.9044 151.531C31.6197 151.227 31.4802 150.846 31.4859 150.388ZM34.8341 151.911V149.763H35.3518V150.237C35.4064 150.111 35.4927 149.993 35.6106 149.883C35.7257 149.777 35.8896 149.724 36.1024 149.724C36.1456 149.724 36.193 149.728 36.2448 149.737V150.276C36.1787 150.265 36.101 150.259 36.0118 150.259C35.7846 150.259 35.6193 150.318 35.5157 150.436C35.4122 150.554 35.3604 150.743 35.3604 151.005V151.911H34.8341ZM38.0178 149.763H38.5657L37.6899 152.235C37.6267 152.422 37.5447 152.554 37.444 152.632C37.3434 152.712 37.201 152.752 37.0169 152.752H36.4561V152.317H36.9608C37.0385 152.317 37.0975 152.299 37.1377 152.265C37.1809 152.233 37.2183 152.176 37.2499 152.092L37.3146 151.894L36.3137 149.763H36.8832L37.2801 150.686L37.526 151.26C37.6094 151.007 37.6727 150.814 37.7158 150.682L38.0178 149.763ZM38.9629 152.752V149.763H39.4763V150.065C39.5453 149.958 39.6402 149.871 39.761 149.801C39.8847 149.73 40.0242 149.694 40.1795 149.694C40.4528 149.694 40.6728 149.799 40.8396 150.009C41.0093 150.219 41.0941 150.493 41.0941 150.833C41.0941 151.178 41.0093 151.455 40.8396 151.665C40.6728 151.872 40.4528 151.976 40.1795 151.976C40.0242 151.976 39.8862 151.941 39.7654 151.872C39.6474 151.803 39.5554 151.716 39.4893 151.609V151.997V152.752H38.9629ZM40.5419 150.833C40.5419 150.349 40.3636 150.108 40.007 150.108C39.843 150.108 39.7107 150.171 39.61 150.298C39.5123 150.424 39.4634 150.602 39.4634 150.833C39.4634 151.068 39.5123 151.25 39.61 151.376C39.7107 151.5 39.843 151.562 40.007 151.562C40.3636 151.562 40.5419 151.319 40.5419 150.833ZM41.7528 151.363V150.172H41.2869V149.763H41.7528V149.09H42.2792V149.763H42.8487V150.172H42.2792V151.281C42.2792 151.414 42.3453 151.48 42.4776 151.48H42.9349V151.911H42.2964C42.1239 151.911 41.9901 151.864 41.8952 151.769C41.8003 151.671 41.7528 151.536 41.7528 151.363ZM43.1514 150.837C43.1514 150.503 43.2521 150.23 43.4534 150.017C43.6576 149.804 43.9179 149.698 44.2343 149.698C44.5507 149.698 44.8095 149.804 45.0109 150.017C45.2151 150.23 45.3172 150.503 45.3172 150.837C45.3172 151.173 45.2151 151.448 45.0109 151.661C44.8066 151.871 44.5478 151.976 44.2343 151.976C43.9237 151.976 43.6648 151.868 43.4577 151.652C43.2535 151.437 43.1514 151.165 43.1514 150.837ZM44.7736 150.846C44.7736 150.615 44.7232 150.439 44.6226 150.315C44.5248 150.188 44.3954 150.125 44.2343 150.125C44.0675 150.125 43.9352 150.188 43.8374 150.315C43.7425 150.439 43.695 150.615 43.695 150.846C43.695 151.073 43.7425 151.247 43.8374 151.368C43.9352 151.488 44.0675 151.549 44.2343 151.549C44.4011 151.549 44.532 151.488 44.6269 151.368C44.7247 151.247 44.7736 151.073 44.7736 150.846ZM45.654 150.833C45.654 150.499 45.759 150.227 45.969 150.017C46.1789 149.804 46.4421 149.698 46.7585 149.698C47.0001 149.698 47.2057 149.757 47.3754 149.875C47.548 149.993 47.6673 150.147 47.7335 150.336L47.2503 150.509C47.1582 150.253 46.99 150.125 46.7455 150.125C46.5816 150.125 46.4478 150.187 46.3443 150.311C46.2407 150.434 46.189 150.608 46.189 150.833C46.189 151.06 46.2407 151.237 46.3443 151.363C46.4507 151.487 46.5859 151.549 46.7498 151.549C47.0087 151.549 47.1856 151.403 47.2805 151.113L47.7766 151.29C47.6961 151.5 47.5667 151.667 47.3883 151.79C47.2129 151.914 47.0029 151.976 46.7585 151.976C46.4334 151.976 46.1674 151.871 45.9603 151.661C45.7561 151.451 45.654 151.175 45.654 150.833ZM48.168 151.195V149.763H48.6943V151.07C48.6943 151.38 48.818 151.536 49.0653 151.536C49.2494 151.536 49.3759 151.462 49.445 151.316C49.5169 151.172 49.5528 150.991 49.5528 150.772V149.763H50.0792V151.911H49.5571V151.557C49.3932 151.836 49.1574 151.976 48.8496 151.976C48.631 151.976 48.4628 151.907 48.3448 151.769C48.2269 151.628 48.168 151.437 48.168 151.195ZM50.7175 151.911V149.763H51.2352V150.237C51.2899 150.111 51.3761 149.993 51.4941 149.883C51.6091 149.777 51.773 149.724 51.9859 149.724C52.029 149.724 52.0765 149.728 52.1283 149.737V150.276C52.0621 150.265 51.9844 150.259 51.8953 150.259C51.6681 150.259 51.5027 150.318 51.3991 150.436C51.2956 150.554 51.2438 150.743 51.2438 151.005V151.911H50.7175ZM52.5207 151.911V149.763H53.0384V150.237C53.0931 150.111 53.1794 149.993 53.2973 149.883C53.4123 149.777 53.5763 149.724 53.7891 149.724C53.8322 149.724 53.8797 149.728 53.9315 149.737V150.276C53.8653 150.265 53.7877 150.259 53.6985 150.259C53.4713 150.259 53.3059 150.318 53.2024 150.436C53.0988 150.554 53.047 150.743 53.047 151.005V151.911H52.5207ZM54.1014 150.837C54.1014 150.5 54.1992 150.227 54.3948 150.017C54.5932 149.804 54.842 149.698 55.1411 149.698C55.446 149.698 55.6905 149.801 55.8746 150.009C56.0586 150.213 56.1507 150.477 56.1507 150.802C56.1507 150.848 56.1478 150.903 56.142 150.966H54.6234C54.6321 151.165 54.6838 151.314 54.7787 151.415C54.8737 151.513 54.9988 151.562 55.1541 151.562C55.3899 151.562 55.5654 151.432 55.6804 151.173L56.155 151.35C55.9882 151.767 55.6531 151.976 55.1498 151.976C54.8305 151.976 54.576 151.875 54.3861 151.674C54.1963 151.47 54.1014 151.191 54.1014 150.837ZM54.6407 150.578H55.62C55.6114 150.426 55.5639 150.306 55.4776 150.22C55.3942 150.134 55.2821 150.091 55.1411 150.091C55.0088 150.091 54.8967 150.134 54.8046 150.22C54.7155 150.306 54.6608 150.426 54.6407 150.578ZM56.6496 151.911V149.763H57.163V150.103C57.2234 149.991 57.3125 149.896 57.4304 149.819C57.5484 149.738 57.6907 149.698 57.8575 149.698C58.3407 149.698 58.5823 149.96 58.5823 150.483V151.911H58.056V150.6C58.056 150.292 57.9266 150.138 57.6677 150.138C57.5182 150.138 57.4074 150.183 57.3355 150.272C57.2291 150.401 57.1759 150.62 57.1759 150.927V151.911H56.6496ZM59.0475 150.833C59.0475 150.499 59.1525 150.227 59.3624 150.017C59.5724 149.804 59.8356 149.698 60.1519 149.698C60.3935 149.698 60.5992 149.757 60.7689 149.875C60.9414 149.993 61.0608 150.147 61.127 150.336L60.6438 150.509C60.5517 150.253 60.3835 150.125 60.139 150.125C59.9751 150.125 59.8413 150.187 59.7378 150.311C59.6342 150.434 59.5825 150.608 59.5825 150.833C59.5825 151.06 59.6342 151.237 59.7378 151.363C59.8442 151.487 59.9794 151.549 60.1433 151.549C60.4022 151.549 60.579 151.403 60.674 151.113L61.1701 151.29C61.0896 151.5 60.9601 151.667 60.7818 151.79C60.6064 151.914 60.3964 151.976 60.1519 151.976C59.8269 151.976 59.5609 151.871 59.3538 151.661C59.1496 151.451 59.0475 151.175 59.0475 150.833ZM62.9679 149.763H63.5158L62.64 152.235C62.5767 152.422 62.4948 152.554 62.3941 152.632C62.2934 152.712 62.1511 152.752 61.967 152.752H61.4061V152.317H61.9109C61.9886 152.317 62.0475 152.299 62.0878 152.265C62.1309 152.233 62.1683 152.176 62.2 152.092L62.2647 151.894L61.2638 149.763H61.8332L62.2302 150.686L62.4761 151.26C62.5595 151.007 62.6227 150.814 62.6659 150.682L62.9679 149.763Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter11_di_570_13576)">
                        <rect
                          x="75.5231"
                          y="118.306"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="80.5563"
                          y="124.778"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="80.2867"
                          y="124.508"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint3_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip6_570_13576)">
                          <path
                            d="M90.9824 130.167C90.9824 132.947 88.7289 135.201 85.9491 135.201C83.1693 135.201 80.9158 132.947 80.9158 130.167C80.9158 127.387 83.1693 125.134 85.9491 125.134C88.7289 125.134 90.9824 127.387 90.9824 130.167Z"
                            fill="#627EEA"
                          ></path>
                          <path
                            opacity="0.6"
                            d="M86.1063 126.392V129.183L88.4657 130.236L86.1063 126.392Z"
                            fill="white"
                          ></path>
                          <path
                            d="M86.1064 126.392L83.747 130.236L86.1064 129.183V126.392Z"
                            fill="white"
                          ></path>
                          <path
                            opacity="0.6"
                            d="M86.1063 132.046V133.942L88.4657 130.676L86.1063 132.046Z"
                            fill="white"
                          ></path>
                          <path
                            d="M86.1064 133.942V132.044L83.747 130.676L86.1064 133.942Z"
                            fill="white"
                          ></path>
                          <path
                            opacity="0.2"
                            d="M86.1063 131.606L88.4657 130.236L86.1063 129.183V131.606Z"
                            fill="white"
                          ></path>
                          <path
                            opacity="0.6"
                            d="M83.747 130.236L86.1064 131.606V129.183L83.747 130.236Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M81.1455 145.316V141.793H83.8081V142.427H81.9105V143.192H83.345V143.816H81.9105V144.682H83.8081V145.316H81.1455ZM84.502 144.657V143.343H83.9735V142.799H84.502V142.009H85.2167V142.799H85.871V143.343H85.2167V144.526C85.2167 144.603 85.2335 144.66 85.267 144.697C85.3039 144.73 85.361 144.747 85.4382 144.747H85.9817V145.316H85.1412C84.9432 145.316 84.7872 145.256 84.6731 145.135C84.559 145.014 84.502 144.855 84.502 144.657ZM86.4375 145.316V141.793H87.1522V142.704V143.187C87.3435 142.878 87.617 142.724 87.9726 142.724C88.2377 142.724 88.4374 142.803 88.5716 142.96C88.7058 143.118 88.7729 143.341 88.7729 143.63V145.316H88.0582V143.786C88.0582 143.47 87.924 143.313 87.6555 143.313C87.5045 143.313 87.3921 143.358 87.3183 143.449C87.2076 143.583 87.1522 143.808 87.1522 144.123V145.316H86.4375ZM89.2746 144.053C89.2746 143.667 89.3954 143.35 89.637 143.101C89.8786 142.85 90.1823 142.724 90.5481 142.724C90.9272 142.724 91.2259 142.848 91.444 143.096C91.6621 143.345 91.7711 143.665 91.7711 144.058C91.7711 144.135 91.7695 144.192 91.7661 144.229H89.9894C89.9994 144.433 90.0548 144.589 90.1555 144.697C90.2561 144.801 90.3887 144.853 90.5531 144.853C90.8148 144.853 91.0094 144.707 91.137 144.415L91.7762 144.662C91.6889 144.863 91.548 145.037 91.3534 145.185C91.1621 145.326 90.8954 145.396 90.5531 145.396C90.1672 145.396 89.8568 145.276 89.6219 145.034C89.3904 144.789 89.2746 144.462 89.2746 144.053ZM90.0145 143.725H91.0615C91.0245 143.4 90.8534 143.237 90.5481 143.237C90.4038 143.237 90.2847 143.279 90.1907 143.363C90.0967 143.447 90.038 143.568 90.0145 143.725ZM92.3113 145.316V142.799H93.0109V143.373C93.0747 143.215 93.177 143.071 93.3179 142.94C93.4622 142.813 93.6652 142.749 93.927 142.749C93.9874 142.749 94.0259 142.751 94.0427 142.754V143.489C93.9454 143.479 93.8531 143.474 93.7659 143.474C93.5008 143.474 93.3112 143.536 93.1971 143.66C93.083 143.781 93.026 143.996 93.026 144.304V145.316H92.3113ZM94.2096 144.053C94.2096 143.667 94.3304 143.35 94.572 143.101C94.8136 142.85 95.1173 142.724 95.483 142.724C95.8622 142.724 96.1608 142.848 96.3789 143.096C96.5971 143.345 96.7061 143.665 96.7061 144.058C96.7061 144.135 96.7044 144.192 96.7011 144.229H94.9243C94.9344 144.433 94.9898 144.589 95.0904 144.697C95.1911 144.801 95.3236 144.853 95.4881 144.853C95.7498 144.853 95.9444 144.707 96.0719 144.415L96.7111 144.662C96.6239 144.863 96.483 145.037 96.2883 145.185C96.0971 145.326 95.8303 145.396 95.4881 145.396C95.1022 145.396 94.7918 145.276 94.5569 145.034C94.3254 144.789 94.2096 144.462 94.2096 144.053ZM94.9495 143.725H95.9964C95.9595 143.4 95.7884 143.237 95.483 143.237C95.3387 143.237 95.2196 143.279 95.1257 143.363C95.0317 143.447 94.973 143.568 94.9495 143.725ZM97.216 144.495V142.799H97.9308V144.329C97.9308 144.645 98.0566 144.803 98.3083 144.803C98.476 144.803 98.6019 144.735 98.6858 144.601C98.7696 144.464 98.8116 144.277 98.8116 144.043V142.799H99.5263V145.316H98.8116V144.913C98.6203 145.235 98.3468 145.396 97.9912 145.396C97.7563 145.396 97.5684 145.316 97.4274 145.155C97.2865 144.99 97.216 144.771 97.216 144.495ZM100.22 145.316V142.799H100.915V143.162C101.072 142.87 101.324 142.724 101.67 142.724C101.978 142.724 102.218 142.87 102.389 143.162C102.594 142.87 102.876 142.724 103.235 142.724C103.493 142.724 103.696 142.801 103.844 142.955C103.992 143.106 104.065 143.333 104.065 143.635V145.316H103.351V143.786C103.351 143.47 103.22 143.313 102.958 143.313C102.857 143.316 102.774 143.338 102.706 143.378C102.639 143.418 102.591 143.477 102.56 143.554C102.534 143.628 102.515 143.7 102.505 143.771C102.498 143.841 102.495 143.928 102.495 144.032V145.316H101.79V143.786C101.79 143.47 101.66 143.313 101.398 143.313C101.297 143.316 101.213 143.338 101.146 143.378C101.079 143.418 101.03 143.477 101 143.554C100.973 143.628 100.955 143.7 100.945 143.771C100.938 143.841 100.935 143.928 100.935 144.032V145.316H100.22Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M81.0994 150.388C81.0937 149.948 81.2361 149.577 81.5266 149.275C81.8199 148.97 82.1881 148.821 82.631 148.826C82.979 148.826 83.2738 148.913 83.5154 149.085C83.757 149.258 83.9166 149.476 83.9943 149.741L83.4723 149.935C83.3285 149.515 83.0466 149.305 82.6267 149.305C82.3391 149.305 82.1104 149.402 81.9407 149.594C81.7739 149.787 81.6905 150.05 81.6905 150.384C81.6905 150.726 81.7739 150.997 81.9407 151.195C82.1075 151.393 82.3362 151.493 82.6267 151.493C83.0495 151.493 83.3371 151.277 83.4895 150.846L83.9986 151.048C83.8979 151.339 83.7311 151.566 83.4982 151.73C83.2652 151.894 82.9747 151.976 82.6267 151.976C82.1722 151.982 81.8027 151.833 81.5179 151.531C81.2332 151.227 81.0937 150.846 81.0994 150.388ZM84.4476 151.911V149.763H84.9653V150.237C85.0199 150.111 85.1062 149.993 85.2241 149.883C85.3392 149.777 85.5031 149.724 85.716 149.724C85.7591 149.724 85.8066 149.728 85.8583 149.737V150.276C85.7922 150.265 85.7145 150.259 85.6254 150.259C85.3982 150.259 85.2328 150.318 85.1292 150.436C85.0257 150.554 84.9739 150.743 84.9739 151.005V151.911H84.4476ZM87.6314 149.763H88.1793L87.3035 152.235C87.2402 152.422 87.1582 152.554 87.0576 152.632C86.9569 152.712 86.8145 152.752 86.6305 152.752H86.0696V152.317H86.5744C86.652 152.317 86.711 152.299 86.7513 152.265C86.7944 152.233 86.8318 152.176 86.8634 152.092L86.9281 151.894L85.9272 149.763H86.4967L86.8936 150.686L87.1395 151.26C87.2229 151.007 87.2862 150.814 87.3294 150.682L87.6314 149.763ZM88.5764 152.752V149.763H89.0898V150.065C89.1589 149.958 89.2538 149.871 89.3746 149.801C89.4982 149.73 89.6377 149.694 89.7931 149.694C90.0663 149.694 90.2863 149.799 90.4531 150.009C90.6228 150.219 90.7077 150.493 90.7077 150.833C90.7077 151.178 90.6228 151.455 90.4531 151.665C90.2863 151.872 90.0663 151.976 89.7931 151.976C89.6377 151.976 89.4997 151.941 89.3789 151.872C89.261 151.803 89.1689 151.716 89.1028 151.609V151.997V152.752H88.5764ZM90.1554 150.833C90.1554 150.349 89.9771 150.108 89.6205 150.108C89.4565 150.108 89.3242 150.171 89.2236 150.298C89.1258 150.424 89.0769 150.602 89.0769 150.833C89.0769 151.068 89.1258 151.25 89.2236 151.376C89.3242 151.5 89.4565 151.562 89.6205 151.562C89.9771 151.562 90.1554 151.319 90.1554 150.833ZM91.3664 151.363V150.172H90.9004V149.763H91.3664V149.09H91.8927V149.763H92.4622V150.172H91.8927V151.281C91.8927 151.414 91.9589 151.48 92.0912 151.48H92.5485V151.911H91.91C91.7374 151.911 91.6036 151.864 91.5087 151.769C91.4138 151.671 91.3664 151.536 91.3664 151.363ZM92.7649 150.837C92.7649 150.503 92.8656 150.23 93.0669 150.017C93.2712 149.804 93.5314 149.698 93.8478 149.698C94.1642 149.698 94.423 149.804 94.6244 150.017C94.8286 150.23 94.9307 150.503 94.9307 150.837C94.9307 151.173 94.8286 151.448 94.6244 151.661C94.4202 151.871 94.1613 151.976 93.8478 151.976C93.5372 151.976 93.2783 151.868 93.0713 151.652C92.8671 151.437 92.7649 151.165 92.7649 150.837ZM94.3871 150.846C94.3871 150.615 94.3368 150.439 94.2361 150.315C94.1383 150.188 94.0089 150.125 93.8478 150.125C93.681 150.125 93.5487 150.188 93.4509 150.315C93.356 150.439 93.3085 150.615 93.3085 150.846C93.3085 151.073 93.356 151.247 93.4509 151.368C93.5487 151.488 93.681 151.549 93.8478 151.549C94.0146 151.549 94.1455 151.488 94.2404 151.368C94.3382 151.247 94.3871 151.073 94.3871 150.846ZM95.2675 150.833C95.2675 150.499 95.3725 150.227 95.5825 150.017C95.7924 149.804 96.0556 149.698 96.372 149.698C96.6136 149.698 96.8192 149.757 96.9889 149.875C97.1615 149.993 97.2808 150.147 97.347 150.336L96.8638 150.509C96.7718 150.253 96.6035 150.125 96.359 150.125C96.1951 150.125 96.0614 150.187 95.9578 150.311C95.8543 150.434 95.8025 150.608 95.8025 150.833C95.8025 151.06 95.8543 151.237 95.9578 151.363C96.0642 151.487 96.1994 151.549 96.3634 151.549C96.6222 151.549 96.7991 151.403 96.894 151.113L97.3901 151.29C97.3096 151.5 97.1802 151.667 97.0019 151.79C96.8264 151.914 96.6165 151.976 96.372 151.976C96.047 151.976 95.7809 151.871 95.5738 151.661C95.3696 151.451 95.2675 151.175 95.2675 150.833ZM97.7815 151.195V149.763H98.3078V151.07C98.3078 151.38 98.4315 151.536 98.6788 151.536C98.8629 151.536 98.9895 151.462 99.0585 151.316C99.1304 151.172 99.1664 150.991 99.1664 150.772V149.763H99.6927V151.911H99.1707V151.557C99.0067 151.836 98.7709 151.976 98.4631 151.976C98.2445 151.976 98.0763 151.907 97.9584 151.769C97.8404 151.628 97.7815 151.437 97.7815 151.195ZM100.331 151.911V149.763H100.849V150.237C100.903 150.111 100.99 149.993 101.108 149.883C101.223 149.777 101.387 149.724 101.599 149.724C101.643 149.724 101.69 149.728 101.742 149.737V150.276C101.676 150.265 101.598 150.259 101.509 150.259C101.282 150.259 101.116 150.318 101.013 150.436C100.909 150.554 100.857 150.743 100.857 151.005V151.911H100.331ZM102.134 151.911V149.763H102.652V150.237C102.707 150.111 102.793 149.993 102.911 149.883C103.026 149.777 103.19 149.724 103.403 149.724C103.446 149.724 103.493 149.728 103.545 149.737V150.276C103.479 150.265 103.401 150.259 103.312 150.259C103.085 150.259 102.919 150.318 102.816 150.436C102.712 150.554 102.661 150.743 102.661 151.005V151.911H102.134ZM103.715 150.837C103.715 150.5 103.813 150.227 104.008 150.017C104.207 149.804 104.456 149.698 104.755 149.698C105.06 149.698 105.304 149.801 105.488 150.009C105.672 150.213 105.764 150.477 105.764 150.802C105.764 150.848 105.761 150.903 105.756 150.966H104.237C104.246 151.165 104.297 151.314 104.392 151.415C104.487 151.513 104.612 151.562 104.768 151.562C105.003 151.562 105.179 151.432 105.294 151.173L105.769 151.35C105.602 151.767 105.267 151.976 104.763 151.976C104.444 151.976 104.189 151.875 104 151.674C103.81 151.47 103.715 151.191 103.715 150.837ZM104.254 150.578H105.234C105.225 150.426 105.177 150.306 105.091 150.22C105.008 150.134 104.896 150.091 104.755 150.091C104.622 150.091 104.51 150.134 104.418 150.22C104.329 150.306 104.274 150.426 104.254 150.578ZM106.263 151.911V149.763H106.776V150.103C106.837 149.991 106.926 149.896 107.044 149.819C107.162 149.738 107.304 149.698 107.471 149.698C107.954 149.698 108.196 149.96 108.196 150.483V151.911H107.67V150.6C107.67 150.292 107.54 150.138 107.281 150.138C107.132 150.138 107.021 150.183 106.949 150.272C106.843 150.401 106.789 150.62 106.789 150.927V151.911H106.263ZM108.661 150.833C108.661 150.499 108.766 150.227 108.976 150.017C109.186 149.804 109.449 149.698 109.765 149.698C110.007 149.698 110.213 149.757 110.382 149.875C110.555 149.993 110.674 150.147 110.74 150.336L110.257 150.509C110.165 150.253 109.997 150.125 109.753 150.125C109.589 150.125 109.455 150.187 109.351 150.311C109.248 150.434 109.196 150.608 109.196 150.833C109.196 151.06 109.248 151.237 109.351 151.363C109.458 151.487 109.593 151.549 109.757 151.549C110.016 151.549 110.193 151.403 110.287 151.113L110.784 151.29C110.703 151.5 110.574 151.667 110.395 151.79C110.22 151.914 110.01 151.976 109.765 151.976C109.44 151.976 109.174 151.871 108.967 151.661C108.763 151.451 108.661 151.175 108.661 150.833ZM112.581 149.763H113.129L112.254 152.235C112.19 152.422 112.108 152.554 112.008 152.632C111.907 152.712 111.765 152.752 111.581 152.752H111.02V152.317H111.524C111.602 152.317 111.661 152.299 111.701 152.265C111.744 152.233 111.782 152.176 111.813 152.092L111.878 151.894L110.877 149.763H111.447L111.844 150.686L112.09 151.26C112.173 151.007 112.236 150.814 112.279 150.682L112.581 149.763Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter12_di_570_13576)">
                        <rect
                          x="125.137"
                          y="118.306"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="130.17"
                          y="124.778"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="129.9"
                          y="124.508"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint4_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip7_570_13576)">
                          <path
                            d="M135.563 135.2C138.343 135.2 140.596 132.947 140.596 130.167C140.596 127.387 138.343 125.134 135.563 125.134C132.783 125.134 130.53 127.387 130.53 130.167C130.53 132.947 132.783 135.2 135.563 135.2Z"
                            fill="#0F97F8"
                          ></path>
                          <path
                            d="M134.489 134.147C134.489 134.281 134.38 134.357 134.254 134.319C132.513 133.765 131.259 132.142 131.259 130.217C131.259 128.292 132.513 126.673 134.254 126.119C134.384 126.077 134.489 126.157 134.489 126.291V126.627C134.489 126.715 134.422 126.82 134.338 126.849C132.962 127.356 131.981 128.678 131.981 130.217C131.981 131.756 132.962 133.082 134.338 133.581C134.422 133.61 134.489 133.715 134.489 133.803V134.147Z"
                            fill="white"
                          ></path>
                          <path
                            d="M135.919 132.906C135.919 133.007 135.84 133.086 135.739 133.086H135.383C135.282 133.086 135.202 133.007 135.202 132.906V132.34C134.418 132.231 134.036 131.799 133.936 131.199C133.919 131.094 133.998 131.006 134.103 131.006H134.51C134.594 131.006 134.665 131.069 134.686 131.149C134.762 131.501 134.967 131.778 135.597 131.778C136.058 131.778 136.389 131.518 136.389 131.132C136.389 130.746 136.196 130.599 135.517 130.486C134.514 130.352 134.036 130.045 134.036 129.261C134.036 128.657 134.498 128.179 135.206 128.082V127.529C135.206 127.428 135.286 127.348 135.387 127.348H135.743C135.844 127.348 135.924 127.428 135.924 127.529V128.099C136.502 128.204 136.867 128.531 136.989 129.076C137.01 129.181 136.93 129.274 136.821 129.274H136.444C136.364 129.274 136.297 129.219 136.272 129.144C136.167 128.8 135.924 128.644 135.492 128.644C135.018 128.644 134.77 128.871 134.77 129.194C134.77 129.534 134.909 129.706 135.638 129.806C136.624 129.941 137.136 130.222 137.136 131.06C137.136 131.698 136.662 132.214 135.919 132.327V132.902H135.915L135.919 132.906Z"
                            fill="white"
                          ></path>
                          <path
                            d="M136.872 134.319C136.742 134.361 136.637 134.281 136.637 134.147V133.812C136.637 133.711 136.695 133.619 136.788 133.589C138.159 133.086 139.145 131.765 139.145 130.226C139.145 128.686 138.163 127.361 136.788 126.862C136.704 126.832 136.637 126.727 136.637 126.639V126.304C136.637 126.17 136.746 126.094 136.872 126.132C138.612 126.677 139.866 128.304 139.866 130.226C139.866 132.147 138.612 133.77 136.872 134.328V134.319Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M130.554 143.942V141.793H131.319V143.821C131.319 144.123 131.388 144.353 131.526 144.511C131.663 144.665 131.866 144.742 132.135 144.742C132.678 144.742 132.95 144.435 132.95 143.821V141.793H133.715V143.942C133.715 144.388 133.569 144.742 133.277 145.004C132.985 145.266 132.605 145.396 132.135 145.396C131.655 145.396 131.271 145.266 130.982 145.004C130.697 144.742 130.554 144.388 130.554 143.942ZM134.24 144.309L134.96 144.068C135.003 144.272 135.101 144.443 135.252 144.581C135.403 144.719 135.602 144.787 135.851 144.787C136.079 144.787 136.25 144.747 136.364 144.667C136.482 144.586 136.54 144.475 136.54 144.334C136.54 144.103 136.349 143.959 135.966 143.902L135.529 143.841C134.787 143.737 134.416 143.385 134.416 142.784C134.416 142.479 134.54 142.224 134.789 142.019C135.04 141.814 135.381 141.712 135.81 141.712C136.22 141.712 136.549 141.799 136.797 141.974C137.045 142.145 137.213 142.371 137.3 142.653L136.596 142.9C136.471 142.514 136.21 142.321 135.81 142.321C135.612 142.321 135.463 142.361 135.362 142.442C135.262 142.522 135.211 142.626 135.211 142.754C135.211 142.962 135.362 143.088 135.664 143.131L136.102 143.192C136.495 143.246 136.799 143.365 137.013 143.549C137.228 143.734 137.336 143.979 137.336 144.284C137.336 144.61 137.208 144.876 136.953 145.084C136.698 145.292 136.331 145.396 135.851 145.396C135.401 145.396 135.039 145.296 134.764 145.094C134.488 144.893 134.314 144.631 134.24 144.309ZM137.968 145.316V141.793H139.296C139.816 141.786 140.258 141.944 140.62 142.266C140.986 142.588 141.165 143.009 141.159 143.529C141.165 144.063 140.986 144.495 140.62 144.828C140.258 145.16 139.816 145.323 139.296 145.316H137.968ZM138.733 144.682H139.261C139.999 144.682 140.368 144.303 140.368 143.544C140.368 143.199 140.276 142.927 140.092 142.729C139.907 142.527 139.64 142.427 139.291 142.427H138.733V144.682ZM141.575 143.549C141.569 143.032 141.74 142.596 142.089 142.241C142.441 141.882 142.881 141.705 143.407 141.712C143.813 141.712 144.161 141.813 144.449 142.014C144.741 142.212 144.936 142.474 145.033 142.799L144.344 143.066C144.176 142.586 143.86 142.346 143.397 142.346C143.079 142.346 142.829 142.452 142.647 142.663C142.466 142.875 142.376 143.17 142.376 143.549C142.376 143.932 142.464 144.229 142.642 144.44C142.823 144.652 143.075 144.757 143.397 144.757C143.867 144.757 144.189 144.516 144.364 144.032L145.038 144.304C144.907 144.657 144.703 144.927 144.424 145.115C144.149 145.302 143.807 145.396 143.397 145.396C142.854 145.396 142.414 145.224 142.079 144.878C141.743 144.532 141.575 144.089 141.575 143.549Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M130.713 150.388C130.708 149.948 130.85 149.577 131.14 149.275C131.434 148.97 131.802 148.821 132.245 148.826C132.593 148.826 132.888 148.913 133.129 149.085C133.371 149.258 133.53 149.476 133.608 149.741L133.086 149.935C132.942 149.515 132.66 149.305 132.241 149.305C131.953 149.305 131.724 149.402 131.555 149.594C131.388 149.787 131.304 150.05 131.304 150.384C131.304 150.726 131.388 150.997 131.555 151.195C131.721 151.393 131.95 151.493 132.241 151.493C132.663 151.493 132.951 151.277 133.103 150.846L133.612 151.048C133.512 151.339 133.345 151.566 133.112 151.73C132.879 151.894 132.589 151.976 132.241 151.976C131.786 151.982 131.416 151.833 131.132 151.531C130.847 151.227 130.708 150.846 130.713 150.388ZM134.061 151.911V149.763H134.579V150.237C134.634 150.111 134.72 149.993 134.838 149.883C134.953 149.777 135.117 149.724 135.33 149.724C135.373 149.724 135.42 149.728 135.472 149.737V150.276C135.406 150.265 135.328 150.259 135.239 150.259C135.012 150.259 134.847 150.318 134.743 150.436C134.64 150.554 134.588 150.743 134.588 151.005V151.911H134.061ZM137.245 149.763H137.793L136.917 152.235C136.854 152.422 136.772 152.554 136.671 152.632C136.571 152.712 136.428 152.752 136.244 152.752H135.683V152.317H136.188C136.266 152.317 136.325 152.299 136.365 152.265C136.408 152.233 136.446 152.176 136.477 152.092L136.542 151.894L135.541 149.763H136.111L136.507 150.686L136.753 151.26C136.837 151.007 136.9 150.814 136.943 150.682L137.245 149.763ZM138.19 152.752V149.763H138.704V150.065C138.773 149.958 138.868 149.871 138.988 149.801C139.112 149.73 139.252 149.694 139.407 149.694C139.68 149.694 139.9 149.799 140.067 150.009C140.237 150.219 140.321 150.493 140.321 150.833C140.321 151.178 140.237 151.455 140.067 151.665C139.9 151.872 139.68 151.976 139.407 151.976C139.252 151.976 139.114 151.941 138.993 151.872C138.875 151.803 138.783 151.716 138.717 151.609V151.997V152.752H138.19ZM139.769 150.833C139.769 150.349 139.591 150.108 139.234 150.108C139.07 150.108 138.938 150.171 138.837 150.298C138.74 150.424 138.691 150.602 138.691 150.833C138.691 151.068 138.74 151.25 138.837 151.376C138.938 151.5 139.07 151.562 139.234 151.562C139.591 151.562 139.769 151.319 139.769 150.833ZM140.98 151.363V150.172H140.514V149.763H140.98V149.09H141.507V149.763H142.076V150.172H141.507V151.281C141.507 151.414 141.573 151.48 141.705 151.48H142.162V151.911H141.524C141.351 151.911 141.217 151.864 141.123 151.769C141.028 151.671 140.98 151.536 140.98 151.363ZM142.379 150.837C142.379 150.503 142.479 150.23 142.681 150.017C142.885 149.804 143.145 149.698 143.462 149.698C143.778 149.698 144.037 149.804 144.238 150.017C144.442 150.23 144.545 150.503 144.545 150.837C144.545 151.173 144.442 151.448 144.238 151.661C144.034 151.871 143.775 151.976 143.462 151.976C143.151 151.976 142.892 151.868 142.685 151.652C142.481 151.437 142.379 151.165 142.379 150.837ZM144.001 150.846C144.001 150.615 143.951 150.439 143.85 150.315C143.752 150.188 143.623 150.125 143.462 150.125C143.295 150.125 143.163 150.188 143.065 150.315C142.97 150.439 142.922 150.615 142.922 150.846C142.922 151.073 142.97 151.247 143.065 151.368C143.163 151.488 143.295 151.549 143.462 151.549C143.628 151.549 143.759 151.488 143.854 151.368C143.952 151.247 144.001 151.073 144.001 150.846ZM144.881 150.833C144.881 150.499 144.986 150.227 145.196 150.017C145.406 149.804 145.669 149.698 145.986 149.698C146.227 149.698 146.433 149.757 146.603 149.875C146.775 149.993 146.895 150.147 146.961 150.336L146.478 150.509C146.386 150.253 146.217 150.125 145.973 150.125C145.809 150.125 145.675 150.187 145.572 150.311C145.468 150.434 145.416 150.608 145.416 150.833C145.416 151.06 145.468 151.237 145.572 151.363C145.678 151.487 145.813 151.549 145.977 151.549C146.236 151.549 146.413 151.403 146.508 151.113L147.004 151.29C146.923 151.5 146.794 151.667 146.616 151.79C146.44 151.914 146.23 151.976 145.986 151.976C145.661 151.976 145.395 151.871 145.188 151.661C144.983 151.451 144.881 151.175 144.881 150.833ZM147.395 151.195V149.763H147.922V151.07C147.922 151.38 148.045 151.536 148.293 151.536C148.477 151.536 148.603 151.462 148.672 151.316C148.744 151.172 148.78 150.991 148.78 150.772V149.763H149.307V151.911H148.784V151.557C148.621 151.836 148.385 151.976 148.077 151.976C147.858 151.976 147.69 151.907 147.572 151.769C147.454 151.628 147.395 151.437 147.395 151.195ZM149.945 151.911V149.763H150.463V150.237C150.517 150.111 150.603 149.993 150.721 149.883C150.836 149.777 151 149.724 151.213 149.724C151.256 149.724 151.304 149.728 151.356 149.737V150.276C151.289 150.265 151.212 150.259 151.123 150.259C150.895 150.259 150.73 150.318 150.627 150.436C150.523 150.554 150.471 150.743 150.471 151.005V151.911H149.945ZM151.748 151.911V149.763H152.266V150.237C152.32 150.111 152.407 149.993 152.525 149.883C152.64 149.777 152.804 149.724 153.016 149.724C153.06 149.724 153.107 149.728 153.159 149.737V150.276C153.093 150.265 153.015 150.259 152.926 150.259C152.699 150.259 152.533 150.318 152.43 150.436C152.326 150.554 152.274 150.743 152.274 151.005V151.911H151.748ZM153.329 150.837C153.329 150.5 153.427 150.227 153.622 150.017C153.821 149.804 154.069 149.698 154.368 149.698C154.673 149.698 154.918 149.801 155.102 150.009C155.286 150.213 155.378 150.477 155.378 150.802C155.378 150.848 155.375 150.903 155.369 150.966H153.851C153.859 151.165 153.911 151.314 154.006 151.415C154.101 151.513 154.226 151.562 154.381 151.562C154.617 151.562 154.793 151.432 154.908 151.173L155.382 151.35C155.216 151.767 154.88 151.976 154.377 151.976C154.058 151.976 153.803 151.875 153.614 151.674C153.424 151.47 153.329 151.191 153.329 150.837ZM153.868 150.578H154.847C154.839 150.426 154.791 150.306 154.705 150.22C154.622 150.134 154.509 150.091 154.368 150.091C154.236 150.091 154.124 150.134 154.032 150.22C153.943 150.306 153.888 150.426 153.868 150.578ZM155.877 151.911V149.763H156.39V150.103C156.451 149.991 156.54 149.896 156.658 149.819C156.776 149.738 156.918 149.698 157.085 149.698C157.568 149.698 157.81 149.96 157.81 150.483V151.911H157.283V150.6C157.283 150.292 157.154 150.138 156.895 150.138C156.746 150.138 156.635 150.183 156.563 150.272C156.456 150.401 156.403 150.62 156.403 150.927V151.911H155.877ZM158.275 150.833C158.275 150.499 158.38 150.227 158.59 150.017C158.8 149.804 159.063 149.698 159.379 149.698C159.621 149.698 159.827 149.757 159.996 149.875C160.169 149.993 160.288 150.147 160.354 150.336L159.871 150.509C159.779 150.253 159.611 150.125 159.366 150.125C159.202 150.125 159.069 150.187 158.965 150.311C158.862 150.434 158.81 150.608 158.81 150.833C158.81 151.06 158.862 151.237 158.965 151.363C159.072 151.487 159.207 151.549 159.371 151.549C159.63 151.549 159.806 151.403 159.901 151.113L160.397 151.29C160.317 151.5 160.187 151.667 160.009 151.79C159.834 151.914 159.624 151.976 159.379 151.976C159.054 151.976 158.788 151.871 158.581 151.661C158.377 151.451 158.275 151.175 158.275 150.833ZM162.195 149.763H162.743L161.867 152.235C161.804 152.422 161.722 152.554 161.621 152.632C161.521 152.712 161.378 152.752 161.194 152.752H160.633V152.317H161.138C161.216 152.317 161.275 152.299 161.315 152.265C161.358 152.233 161.396 152.176 161.427 152.092L161.492 151.894L160.491 149.763H161.061L161.458 150.686L161.703 151.26C161.787 151.007 161.85 150.814 161.893 150.682L162.195 149.763Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter13_di_570_13576)">
                        <rect
                          x="174.75"
                          y="118.306"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                        <rect
                          x="179.784"
                          y="124.778"
                          width="10.7859"
                          height="10.7859"
                          rx="5.39296"
                          fill="#3A3B54"
                        ></rect>
                        <rect
                          x="179.514"
                          y="124.508"
                          width="11.3252"
                          height="11.3252"
                          rx="5.6626"
                          stroke="url(#paint5_linear_570_13576)"
                          stroke-opacity="0.25"
                          stroke-width="0.539279"
                        ></rect>
                        <g clip-path="url(#clip8_570_13576)">
                          <path
                            d="M190.21 130.166C190.21 132.946 187.956 135.2 185.176 135.2C182.396 135.2 180.143 132.946 180.143 130.166C180.143 127.386 182.396 125.133 185.176 125.133C187.956 125.133 190.21 127.386 190.21 130.166Z"
                            fill="#26A17B"
                          ></path>
                          <path
                            d="M185.781 130.602V130.601C185.747 130.604 185.568 130.614 185.17 130.614C184.853 130.614 184.629 130.605 184.55 130.601V130.602C183.327 130.548 182.414 130.335 182.414 130.081C182.414 129.826 183.327 129.613 184.55 129.558V130.39C184.63 130.396 184.859 130.409 185.176 130.409C185.555 130.409 185.746 130.394 185.781 130.39V129.559C187.002 129.613 187.912 129.826 187.912 130.081C187.912 130.335 187.002 130.548 185.781 130.602ZM185.781 129.473V128.728H187.484V127.593H182.847V128.728H184.55V129.472C183.166 129.536 182.125 129.81 182.125 130.139C182.125 130.467 183.166 130.741 184.55 130.805V133.19H185.781V130.804C187.163 130.741 188.202 130.467 188.202 130.139C188.202 129.81 187.163 129.536 185.781 129.473Z"
                            fill="white"
                          ></path>
                        </g>
                        <path
                          d="M180.568 143.942V141.793H181.333V143.821C181.333 144.123 181.402 144.353 181.54 144.511C181.677 144.665 181.88 144.742 182.149 144.742C182.692 144.742 182.964 144.435 182.964 143.821V141.793H183.729V143.942C183.729 144.388 183.583 144.742 183.291 145.004C182.999 145.266 182.619 145.396 182.149 145.396C181.669 145.396 181.285 145.266 180.996 145.004C180.711 144.742 180.568 144.388 180.568 143.942ZM184.254 144.309L184.974 144.068C185.017 144.272 185.115 144.443 185.266 144.581C185.417 144.719 185.616 144.787 185.865 144.787C186.093 144.787 186.264 144.747 186.378 144.667C186.496 144.586 186.554 144.475 186.554 144.334C186.554 144.103 186.363 143.959 185.98 143.902L185.543 143.841C184.801 143.737 184.43 143.385 184.43 142.784C184.43 142.479 184.554 142.224 184.803 142.019C185.054 141.814 185.395 141.712 185.824 141.712C186.234 141.712 186.563 141.799 186.811 141.974C187.059 142.145 187.227 142.371 187.314 142.653L186.61 142.9C186.485 142.514 186.224 142.321 185.824 142.321C185.626 142.321 185.477 142.361 185.376 142.442C185.276 142.522 185.225 142.626 185.225 142.754C185.225 142.962 185.376 143.088 185.678 143.131L186.116 143.192C186.509 143.246 186.813 143.365 187.027 143.549C187.242 143.734 187.35 143.979 187.35 144.284C187.35 144.61 187.222 144.876 186.967 145.084C186.712 145.292 186.345 145.396 185.865 145.396C185.415 145.396 185.053 145.296 184.778 145.094C184.502 144.893 184.328 144.631 184.254 144.309ZM187.982 145.316V141.793H189.31C189.83 141.786 190.272 141.944 190.634 142.266C191 142.588 191.179 143.009 191.173 143.529C191.179 144.063 191 144.495 190.634 144.828C190.272 145.16 189.83 145.323 189.31 145.316H187.982ZM188.747 144.682H189.275C190.013 144.682 190.382 144.303 190.382 143.544C190.382 143.199 190.29 142.927 190.106 142.729C189.921 142.527 189.654 142.427 189.305 142.427H188.747V144.682ZM192.356 145.316V142.427H191.148V141.793H194.329V142.427H193.121V145.316H192.356Z"
                          fill="#F3F3F3"
                        ></path>
                        <path
                          d="M180.327 150.388C180.321 149.948 180.463 149.577 180.754 149.275C181.047 148.97 181.415 148.821 181.858 148.826C182.206 148.826 182.501 148.913 182.743 149.085C182.984 149.258 183.144 149.476 183.222 149.741L182.7 149.935C182.556 149.515 182.274 149.305 181.854 149.305C181.566 149.305 181.338 149.402 181.168 149.594C181.001 149.787 180.918 150.05 180.918 150.384C180.918 150.726 181.001 150.997 181.168 151.195C181.335 151.393 181.563 151.493 181.854 151.493C182.277 151.493 182.564 151.277 182.717 150.846L183.226 151.048C183.125 151.339 182.958 151.566 182.725 151.73C182.492 151.894 182.202 151.976 181.854 151.976C181.399 151.982 181.03 151.833 180.745 151.531C180.46 151.227 180.321 150.846 180.327 150.388ZM183.675 151.911V149.763H184.193V150.237C184.247 150.111 184.333 149.993 184.451 149.883C184.566 149.777 184.73 149.724 184.943 149.724C184.986 149.724 185.034 149.728 185.086 149.737V150.276C185.019 150.265 184.942 150.259 184.853 150.259C184.625 150.259 184.46 150.318 184.356 150.436C184.253 150.554 184.201 150.743 184.201 151.005V151.911H183.675ZM186.859 149.763H187.406L186.531 152.235C186.467 152.422 186.385 152.554 186.285 152.632C186.184 152.712 186.042 152.752 185.858 152.752H185.297V152.317H185.802C185.879 152.317 185.938 152.299 185.978 152.265C186.022 152.233 186.059 152.176 186.091 152.092L186.155 151.894L185.154 149.763H185.724L186.121 150.686L186.367 151.26C186.45 151.007 186.513 150.814 186.557 150.682L186.859 149.763ZM187.804 152.752V149.763H188.317V150.065C188.386 149.958 188.481 149.871 188.602 149.801C188.725 149.73 188.865 149.694 189.02 149.694C189.294 149.694 189.514 149.799 189.68 150.009C189.85 150.219 189.935 150.493 189.935 150.833C189.935 151.178 189.85 151.455 189.68 151.665C189.514 151.872 189.294 151.976 189.02 151.976C188.865 151.976 188.727 151.941 188.606 151.872C188.488 151.803 188.396 151.716 188.33 151.609V151.997V152.752H187.804ZM189.383 150.833C189.383 150.349 189.204 150.108 188.848 150.108C188.684 150.108 188.551 150.171 188.451 150.298C188.353 150.424 188.304 150.602 188.304 150.833C188.304 151.068 188.353 151.25 188.451 151.376C188.551 151.5 188.684 151.562 188.848 151.562C189.204 151.562 189.383 151.319 189.383 150.833ZM190.594 151.363V150.172H190.128V149.763H190.594V149.09H191.12V149.763H191.689V150.172H191.12V151.281C191.12 151.414 191.186 151.48 191.318 151.48H191.776V151.911H191.137C190.965 151.911 190.831 151.864 190.736 151.769C190.641 151.671 190.594 151.536 190.594 151.363ZM191.992 150.837C191.992 150.503 192.093 150.23 192.294 150.017C192.498 149.804 192.759 149.698 193.075 149.698C193.391 149.698 193.65 149.804 193.852 150.017C194.056 150.23 194.158 150.503 194.158 150.837C194.158 151.173 194.056 151.448 193.852 151.661C193.647 151.871 193.389 151.976 193.075 151.976C192.764 151.976 192.506 151.868 192.298 151.652C192.094 151.437 191.992 151.165 191.992 150.837ZM193.614 150.846C193.614 150.615 193.564 150.439 193.463 150.315C193.366 150.188 193.236 150.125 193.075 150.125C192.908 150.125 192.776 150.188 192.678 150.315C192.583 150.439 192.536 150.615 192.536 150.846C192.536 151.073 192.583 151.247 192.678 151.368C192.776 151.488 192.908 151.549 193.075 151.549C193.242 151.549 193.373 151.488 193.468 151.368C193.565 151.247 193.614 151.073 193.614 150.846ZM194.495 150.833C194.495 150.499 194.6 150.227 194.81 150.017C195.02 149.804 195.283 149.698 195.599 149.698C195.841 149.698 196.046 149.757 196.216 149.875C196.389 149.993 196.508 150.147 196.574 150.336L196.091 150.509C195.999 150.253 195.831 150.125 195.586 150.125C195.422 150.125 195.289 150.187 195.185 150.311C195.082 150.434 195.03 150.608 195.03 150.833C195.03 151.06 195.082 151.237 195.185 151.363C195.291 151.487 195.427 151.549 195.591 151.549C195.849 151.549 196.026 151.403 196.121 151.113L196.617 151.29C196.537 151.5 196.407 151.667 196.229 151.79C196.054 151.914 195.844 151.976 195.599 151.976C195.274 151.976 195.008 151.871 194.801 151.661C194.597 151.451 194.495 151.175 194.495 150.833ZM197.009 151.195V149.763H197.535V151.07C197.535 151.38 197.659 151.536 197.906 151.536C198.09 151.536 198.217 151.462 198.286 151.316C198.358 151.172 198.394 150.991 198.394 150.772V149.763H198.92V151.911H198.398V151.557C198.234 151.836 197.998 151.976 197.69 151.976C197.472 151.976 197.304 151.907 197.186 151.769C197.068 151.628 197.009 151.437 197.009 151.195ZM199.558 151.911V149.763H200.076V150.237C200.131 150.111 200.217 149.993 200.335 149.883C200.45 149.777 200.614 149.724 200.827 149.724C200.87 149.724 200.917 149.728 200.969 149.737V150.276C200.903 150.265 200.825 150.259 200.736 150.259C200.509 150.259 200.343 150.318 200.24 150.436C200.136 150.554 200.085 150.743 200.085 151.005V151.911H199.558ZM201.361 151.911V149.763H201.879V150.237C201.934 150.111 202.02 149.993 202.138 149.883C202.253 149.777 202.417 149.724 202.63 149.724C202.673 149.724 202.72 149.728 202.772 149.737V150.276C202.706 150.265 202.628 150.259 202.539 150.259C202.312 150.259 202.147 150.318 202.043 150.436C201.94 150.554 201.888 150.743 201.888 151.005V151.911H201.361ZM202.942 150.837C202.942 150.5 203.04 150.227 203.236 150.017C203.434 149.804 203.683 149.698 203.982 149.698C204.287 149.698 204.531 149.801 204.715 150.009C204.899 150.213 204.991 150.477 204.991 150.802C204.991 150.848 204.989 150.903 204.983 150.966H203.464C203.473 151.165 203.525 151.314 203.619 151.415C203.714 151.513 203.84 151.562 203.995 151.562C204.231 151.562 204.406 151.432 204.521 151.173L204.996 151.35C204.829 151.767 204.494 151.976 203.991 151.976C203.671 151.976 203.417 151.875 203.227 151.674C203.037 151.47 202.942 151.191 202.942 150.837ZM203.481 150.578H204.461C204.452 150.426 204.405 150.306 204.318 150.22C204.235 150.134 204.123 150.091 203.982 150.091C203.85 150.091 203.737 150.134 203.645 150.22C203.556 150.306 203.502 150.426 203.481 150.578ZM205.49 151.911V149.763H206.004V150.103C206.064 149.991 206.153 149.896 206.271 149.819C206.389 149.738 206.531 149.698 206.698 149.698C207.182 149.698 207.423 149.96 207.423 150.483V151.911H206.897V150.6C206.897 150.292 206.767 150.138 206.508 150.138C206.359 150.138 206.248 150.183 206.176 150.272C206.07 150.401 206.017 150.62 206.017 150.927V151.911H205.49ZM207.888 150.833C207.888 150.499 207.993 150.227 208.203 150.017C208.413 149.804 208.676 149.698 208.993 149.698C209.234 149.698 209.44 149.757 209.61 149.875C209.782 149.993 209.902 150.147 209.968 150.336L209.485 150.509C209.392 150.253 209.224 150.125 208.98 150.125C208.816 150.125 208.682 150.187 208.579 150.311C208.475 150.434 208.423 150.608 208.423 150.833C208.423 151.06 208.475 151.237 208.579 151.363C208.685 151.487 208.82 151.549 208.984 151.549C209.243 151.549 209.42 151.403 209.515 151.113L210.011 151.29C209.93 151.5 209.801 151.667 209.623 151.79C209.447 151.914 209.237 151.976 208.993 151.976C208.668 151.976 208.402 151.871 208.195 151.661C207.99 151.451 207.888 151.175 207.888 150.833ZM211.809 149.763H212.357L211.481 152.235C211.417 152.422 211.336 152.554 211.235 152.632C211.134 152.712 210.992 152.752 210.808 152.752H210.247V152.317H210.752C210.829 152.317 210.888 152.299 210.929 152.265C210.972 152.233 211.009 152.176 211.041 152.092L211.105 151.894L210.105 149.763H210.674L211.071 150.686L211.317 151.26C211.4 151.007 211.464 150.814 211.507 150.682L211.809 149.763Z"
                          fill="#A9ABCD"
                        ></path>
                      </g>
                      <g filter="url(#filter14_di_570_13576)">
                        <rect
                          x="25.9094"
                          y="162.697"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                      </g>
                      <g filter="url(#filter15_di_570_13576)">
                        <rect
                          x="75.5231"
                          y="162.697"
                          width="45.2994"
                          height="40.0761"
                          rx="2.87615"
                          fill="#3A3B54"
                          fill-opacity="0.5"
                          shape-rendering="crispEdges"
                        ></rect>
                      </g>
                    </g>
                    <g filter="url(#filter16_d_570_13576)">
                      <g filter="url(#filter17_i_570_13576)">
                        <path
                          d="M63.1996 130.153C61.9293 129.707 60.7075 130.929 61.1532 132.199L65.4211 144.361C65.9057 145.742 67.8344 145.807 68.4113 144.462L70.5275 139.527L75.4627 137.411C76.8078 136.834 76.7427 134.905 75.3616 134.42L63.1996 130.153Z"
                          fill="url(#paint6_linear_570_13576)"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="1"
                    y="1"
                    width="244"
                    height="162"
                    rx="7"
                    stroke="#161620"
                    stroke-width="2"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_i_570_13576"
                    x="0"
                    y="0"
                    width="246"
                    height="164"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0901961 0 0 0 0 0.0941176 0 0 0 0 0.133333 0 0 0 0.75 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter1_bdi_570_13576"
                    x="7.21443"
                    y="-47.7856"
                    width="231.53"
                    height="350.439"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.39279"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_570_13576"
                    ></feComposite>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.719038"></feOffset>
                    <feGaussianBlur stdDeviation="0.359519"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="effect1_backgroundBlur_570_13576"
                      result="effect2_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.227451 0 0 0 0 0.231373 0 0 0 0 0.309804 0 0 0 0.5 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect3_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter2_d_570_13576"
                    x="25.9094"
                    y="8.30249"
                    width="194.14"
                    height="35.8853"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter3_f_570_13576"
                    x="-85.5413"
                    y="-26.2146"
                    width="410.212"
                    height="313.86"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feGaussianBlur
                      stdDeviation="35.9519"
                      result="effect1_foregroundBlur_570_13576"
                    ></feGaussianBlur>
                  </filter>
                  <filter
                    id="filter4_d_570_13576"
                    x="35.0615"
                    y="30.0947"
                    width="21.1341"
                    height="4.47231"
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
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter5_di_570_13576"
                    x="166.883"
                    y="18.3357"
                    width="44.5378"
                    height="15.8189"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter6_d_570_13576"
                    x="26.0302"
                    y="52.0085"
                    width="13.1842"
                    height="3.51748"
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
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter7_di_570_13576"
                    x="25.9094"
                    y="60.8496"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter8_di_570_13576"
                    x="75.5231"
                    y="60.8496"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter9_d_570_13576"
                    x="26.0777"
                    y="109.457"
                    width="32.8842"
                    height="4.29848"
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
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter10_di_570_13576"
                    x="25.9094"
                    y="118.306"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter11_di_570_13576"
                    x="75.5231"
                    y="118.306"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter12_di_570_13576"
                    x="125.137"
                    y="118.306"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter13_di_570_13576"
                    x="174.75"
                    y="118.306"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter14_di_570_13576"
                    x="25.9094"
                    y="162.697"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter15_di_570_13576"
                    x="75.5231"
                    y="162.697"
                    width="45.2994"
                    height="40.7952"
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
                    <feOffset dy="0.719038"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.359519"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter16_d_570_13576"
                    x="57.4167"
                    y="128"
                    width="22.1667"
                    height="22.1667"
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
                    <feOffset dy="1.58333"></feOffset>
                    <feGaussianBlur stdDeviation="0.791667"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_570_13576"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_570_13576"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <filter
                    id="filter17_i_570_13576"
                    x="61.0596"
                    y="130.059"
                    width="15.3759"
                    height="15.3757"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="0.395833"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_570_13576"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_570_13576"
                    x1="36.3357"
                    y1="67.321"
                    x2="36.3357"
                    y2="78.107"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_570_13576"
                    x1="85.9493"
                    y1="67.321"
                    x2="85.9493"
                    y2="78.107"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_570_13576"
                    x1="36.3357"
                    y1="124.778"
                    x2="36.3357"
                    y2="135.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_570_13576"
                    x1="85.9493"
                    y1="124.778"
                    x2="85.9493"
                    y2="135.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_570_13576"
                    x1="135.563"
                    y1="124.778"
                    x2="135.563"
                    y2="135.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_570_13576"
                    x1="185.176"
                    y1="124.778"
                    x2="185.176"
                    y2="135.564"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_570_13576"
                    x1="61.0579"
                    y1="130.059"
                    x2="75.965"
                    y2="146.049"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="#A9ABCD"></stop>
                  </linearGradient>
                  <clipPath id="clip0_570_13576">
                    <rect width="246" height="164" rx="8" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_570_13576">
                    <rect
                      x="25.9094"
                      y="8.30249"
                      width="194.14"
                      height="35.1663"
                      rx="3.59519"
                      fill="white"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip2_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(31.3023 67.677)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip3_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(80.9158 67.677)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip4_570_13576">
                    <rect
                      width="7.19038"
                      height="7.19038"
                      fill="white"
                      transform="translate(82.3538 69.1155)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip5_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(31.3024 125.134)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip6_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(80.9158 125.134)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip7_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(130.53 125.134)"
                    ></rect>
                  </clipPath>
                  <clipPath id="clip8_570_13576">
                    <rect
                      width="10.0665"
                      height="10.0665"
                      fill="white"
                      transform="translate(180.143 125.133)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-14 flex justify-center gap-[14px] flex-col items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <g filter="url(#filter0_i_570_13774)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33335 5.33333C5.33335 4.59696 5.93031 4 6.66669 4H25.3334C26.0698 4 26.6667 4.59696 26.6667 5.33333C26.6667 6.06971 26.0698 6.66667 25.3334 6.66667H6.66669C5.93031 6.66667 5.33335 6.06971 5.33335 5.33333ZM2.66669 12C2.66669 9.79087 4.45755 8 6.66669 8H25.3334C27.5426 8 29.3334 9.79087 29.3334 12V24C29.3334 26.2092 27.5426 28 25.3334 28H6.66669C4.45755 28 2.66669 26.2092 2.66669 24V12ZM14.0891 14.1316C14.5511 13.9096 15.0994 13.972 15.4996 14.2921L18.833 16.9588C19.1492 17.2119 19.3334 17.5949 19.3334 18C19.3334 18.4051 19.1492 18.7881 18.833 19.0412L15.4996 21.7079C15.0994 22.028 14.5511 22.0904 14.0891 21.8684C13.6271 21.6464 13.3334 21.1792 13.3334 20.6667V15.3333C13.3334 14.8208 13.6271 14.3536 14.0891 14.1316Z"
                fill="url(#paint0_linear_570_13774)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_i_570_13774"
                x="2.66669"
                y="4"
                width="26.6667"
                height="24"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_570_13774"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_570_13774"
                x1="2.66377"
                y1="4"
                x2="25.6348"
                y2="31.3781"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A9ABCD"></stop>
                <stop offset="0.7" stop-color="#66688C"></stop>
                <stop offset="1" stop-color="#353655"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-[26px] text-white">QUICK GUIDE</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          <div className="bg-[#161620] opacity-90 flex gap-4 p-7 flex-col justify-center">
            <span className="font-bold text-base text-white">
              How the process works
            </span>
            <span className="text-primary-grey text-sm">
              The purpose of our service is to help you level up your steam
              profile as fast and as cheap as possible. Steam levels in general
              can be very confusing, and finding the right badges to craft can
              be exhausting. After you make a payment using our service, we will
              automatically send you a trade for all the cards that you need to
              craft to reach your desired level. We will also go through all
              your badges and only send you sets that you have not yet crafted.
              All you have to do is simply accept the trade and craft your sets
              to reach that sweet, sweet steam level!
            </span>
            <svg
              width="772"
              height="378"
              viewBox="0 0 772 378"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <g filter="url(#filter0_d_570_13783)">
                <rect width="772" height="376" rx="10" fill="#0C0D15"></rect>
              </g>
              <g filter="url(#filter1_d_570_13783)">
                <path
                  d="M305.4 193V183.2H306.8V193H305.4ZM309.318 193V186.056H310.592V187.218C310.713 186.901 310.97 186.597 311.362 186.308C311.763 186.009 312.263 185.86 312.86 185.86C313.663 185.86 314.265 186.089 314.666 186.546C315.067 186.994 315.268 187.629 315.268 188.45V193H313.952V188.758C313.952 187.591 313.467 187.008 312.496 187.008C311.936 187.008 311.516 187.176 311.236 187.512C310.984 187.811 310.821 188.151 310.746 188.534C310.671 188.917 310.634 189.407 310.634 190.004V193H309.318ZM316.808 191.208L318.054 190.802C318.288 191.679 318.894 192.118 319.874 192.118C320.864 192.118 321.358 191.796 321.358 191.152C321.358 190.639 320.943 190.298 320.112 190.13L319.272 189.976C318.554 189.827 318.008 189.607 317.634 189.318C317.27 189.019 317.088 188.571 317.088 187.974C317.088 187.358 317.34 186.854 317.844 186.462C318.348 186.061 318.969 185.86 319.706 185.86C320.462 185.86 321.078 186.023 321.554 186.35C322.04 186.667 322.366 187.092 322.534 187.624L321.372 188.072C321.092 187.288 320.532 186.896 319.692 186.896C319.263 186.896 318.932 186.989 318.698 187.176C318.465 187.353 318.348 187.573 318.348 187.834C318.348 188.077 318.428 188.263 318.586 188.394C318.745 188.525 319.058 188.637 319.524 188.73L320.35 188.898C320.948 189.01 321.489 189.229 321.974 189.556C322.46 189.873 322.702 190.368 322.702 191.04C322.702 191.703 322.45 192.23 321.946 192.622C321.442 193.005 320.747 193.196 319.86 193.196C319.095 193.196 318.428 193.019 317.858 192.664C317.298 192.309 316.948 191.824 316.808 191.208ZM323.907 189.556C323.907 188.445 324.201 187.554 324.789 186.882C325.377 186.201 326.133 185.86 327.057 185.86C327.981 185.86 328.728 186.182 329.297 186.826C329.867 187.47 330.151 188.291 330.151 189.29C330.151 189.467 330.137 189.659 330.109 189.864H325.223C325.251 190.611 325.438 191.171 325.783 191.544C326.138 191.908 326.591 192.09 327.141 192.09C327.972 192.09 328.579 191.647 328.961 190.76L330.165 191.194C329.923 191.838 329.535 192.333 329.003 192.678C328.481 193.023 327.851 193.196 327.113 193.196C326.133 193.196 325.354 192.879 324.775 192.244C324.197 191.6 323.907 190.704 323.907 189.556ZM325.251 188.814H328.779C328.77 188.226 328.602 187.764 328.275 187.428C327.949 187.083 327.543 186.91 327.057 186.91C326.581 186.91 326.175 187.083 325.839 187.428C325.503 187.773 325.307 188.235 325.251 188.814ZM331.959 193V186.056H333.247V187.526C333.433 187.115 333.718 186.751 334.101 186.434C334.493 186.117 334.978 185.958 335.557 185.958C335.781 185.958 335.995 185.981 336.201 186.028V187.386C335.902 187.339 335.655 187.316 335.459 187.316C334.003 187.316 333.275 188.17 333.275 189.878V193H331.959ZM338.25 191.292V187.148H336.668V186.056H338.25V183.886H339.566V186.056H341.442V187.148H339.566V191.18C339.566 191.637 339.794 191.866 340.252 191.866H341.708V193H339.986C338.828 193 338.25 192.431 338.25 191.292ZM348.428 193V188.898L344.872 183.2H346.552L348.316 186.126L349.142 187.526L349.954 186.126L351.606 183.2H353.272L349.828 188.842V193H348.428ZM352.585 192.146C351.951 191.446 351.633 190.573 351.633 189.528C351.633 188.483 351.946 187.61 352.571 186.91C353.197 186.21 353.985 185.86 354.937 185.86C355.889 185.86 356.673 186.21 357.289 186.91C357.915 187.61 358.227 188.483 358.227 189.528C358.227 190.573 357.915 191.446 357.289 192.146C356.664 192.846 355.88 193.196 354.937 193.196C354.004 193.196 353.22 192.846 352.585 192.146ZM356.869 189.556C356.869 188.725 356.692 188.091 356.337 187.652C355.992 187.213 355.525 186.994 354.937 186.994C354.34 186.994 353.869 187.213 353.523 187.652C353.178 188.091 353.005 188.725 353.005 189.556C353.005 190.368 353.173 190.989 353.509 191.418C353.855 191.847 354.331 192.062 354.937 192.062C355.535 192.062 356.006 191.847 356.351 191.418C356.697 190.979 356.869 190.359 356.869 189.556ZM359.888 190.62V186.056H361.204V190.298C361.204 191.474 361.68 192.062 362.632 192.062C363.164 192.062 363.561 191.903 363.822 191.586C364.242 191.082 364.452 190.247 364.452 189.08V186.056H365.768V193H364.48V191.81C364.293 192.146 364.013 192.463 363.64 192.762C363.285 193.051 362.795 193.196 362.17 193.196C361.423 193.196 360.854 192.972 360.462 192.524C360.079 192.067 359.888 191.432 359.888 190.62ZM367.918 193V184.488H364.46V183.2H372.902V184.488H369.318V193H367.918ZM371.564 190.62V186.056H372.88V190.298C372.88 191.474 373.356 192.062 374.308 192.062C374.84 192.062 375.236 191.903 375.498 191.586C375.918 191.082 376.128 190.247 376.128 189.08V186.056H377.444V193H376.156V191.81C375.969 192.146 375.689 192.463 375.316 192.762C374.961 193.051 374.471 193.196 373.846 193.196C373.099 193.196 372.53 192.972 372.138 192.524C371.755 192.067 371.564 191.432 371.564 190.62ZM381.016 191.95V193H379.742V183.2H381.058V185.776V187.106C381.534 186.275 382.271 185.86 383.27 185.86C384.11 185.86 384.791 186.196 385.314 186.868C385.846 187.531 386.112 188.413 386.112 189.514C386.112 190.625 385.846 191.516 385.314 192.188C384.782 192.86 384.096 193.196 383.256 193.196C382.257 193.196 381.51 192.781 381.016 191.95ZM384.754 189.514C384.754 187.825 384.133 186.98 382.892 186.98C382.313 186.98 381.846 187.199 381.492 187.638C381.146 188.067 380.974 188.693 380.974 189.514C380.974 190.335 381.146 190.97 381.492 191.418C381.846 191.857 382.313 192.076 382.892 192.076C384.133 192.076 384.754 191.222 384.754 189.514ZM387.386 189.556C387.386 188.445 387.68 187.554 388.268 186.882C388.856 186.201 389.612 185.86 390.536 185.86C391.46 185.86 392.207 186.182 392.776 186.826C393.345 187.47 393.63 188.291 393.63 189.29C393.63 189.467 393.616 189.659 393.588 189.864H388.702C388.73 190.611 388.917 191.171 389.262 191.544C389.617 191.908 390.069 192.09 390.62 192.09C391.451 192.09 392.057 191.647 392.44 190.76L393.644 191.194C393.401 191.838 393.014 192.333 392.482 192.678C391.959 193.023 391.329 193.196 390.592 193.196C389.612 193.196 388.833 192.879 388.254 192.244C387.675 191.6 387.386 190.704 387.386 189.556ZM388.73 188.814H392.258C392.249 188.226 392.081 187.764 391.754 187.428C391.427 187.083 391.021 186.91 390.536 186.91C390.06 186.91 389.654 187.083 389.318 187.428C388.982 187.773 388.786 188.235 388.73 188.814ZM400.826 193L397.662 183.2H399.216L401.218 189.668L401.862 191.768L402.52 189.682L404.55 183.2H406.09L402.898 193H400.826ZM407.344 184.768V183.2H408.744V184.768H407.344ZM407.4 193V186.056H408.716V193H407.4ZM410.478 189.528C410.478 188.427 410.744 187.54 411.276 186.868C411.808 186.196 412.494 185.86 413.334 185.86C414.332 185.86 415.07 186.28 415.546 187.12V185.776V183.2H416.862V193H415.574V191.95C415.098 192.781 414.351 193.196 413.334 193.196C412.494 193.196 411.808 192.865 411.276 192.202C410.744 191.539 410.478 190.648 410.478 189.528ZM415.616 189.542C415.616 188.73 415.438 188.1 415.084 187.652C414.738 187.204 414.276 186.98 413.698 186.98C412.466 186.98 411.85 187.834 411.85 189.542C411.85 191.231 412.466 192.076 413.698 192.076C414.286 192.076 414.752 191.861 415.098 191.432C415.443 190.993 415.616 190.363 415.616 189.542ZM418.64 189.556C418.64 188.445 418.934 187.554 419.522 186.882C420.11 186.201 420.866 185.86 421.79 185.86C422.714 185.86 423.46 186.182 424.03 186.826C424.599 187.47 424.884 188.291 424.884 189.29C424.884 189.467 424.87 189.659 424.842 189.864H419.956C419.984 190.611 420.17 191.171 420.516 191.544C420.87 191.908 421.323 192.09 421.874 192.09C422.704 192.09 423.311 191.647 423.694 190.76L424.898 191.194C424.655 191.838 424.268 192.333 423.736 192.678C423.213 193.023 422.583 193.196 421.846 193.196C420.866 193.196 420.086 192.879 419.508 192.244C418.929 191.6 418.64 190.704 418.64 189.556ZM419.984 188.814H423.512C423.502 188.226 423.334 187.764 423.008 187.428C422.681 187.083 422.275 186.91 421.79 186.91C421.314 186.91 420.908 187.083 420.572 187.428C420.236 187.773 420.04 188.235 419.984 188.814ZM427.097 192.146C426.462 191.446 426.145 190.573 426.145 189.528C426.145 188.483 426.458 187.61 427.083 186.91C427.708 186.21 428.497 185.86 429.449 185.86C430.401 185.86 431.185 186.21 431.801 186.91C432.426 187.61 432.739 188.483 432.739 189.528C432.739 190.573 432.426 191.446 431.801 192.146C431.176 192.846 430.392 193.196 429.449 193.196C428.516 193.196 427.732 192.846 427.097 192.146ZM431.381 189.556C431.381 188.725 431.204 188.091 430.849 187.652C430.504 187.213 430.037 186.994 429.449 186.994C428.852 186.994 428.38 187.213 428.035 187.652C427.69 188.091 427.517 188.725 427.517 189.556C427.517 190.368 427.685 190.989 428.021 191.418C428.366 191.847 428.842 192.062 429.449 192.062C430.046 192.062 430.518 191.847 430.863 191.418C431.208 190.979 431.381 190.359 431.381 189.556ZM438.318 193V183.2H439.718V187.288H444.856V183.2H446.256V193H444.856V188.576H439.718V193H438.318ZM448.062 189.556C448.062 188.445 448.356 187.554 448.944 186.882C449.532 186.201 450.288 185.86 451.212 185.86C452.136 185.86 452.882 186.182 453.452 186.826C454.021 187.47 454.306 188.291 454.306 189.29C454.306 189.467 454.292 189.659 454.264 189.864H449.378C449.406 190.611 449.592 191.171 449.938 191.544C450.292 191.908 450.745 192.09 451.296 192.09C452.126 192.09 452.733 191.647 453.116 190.76L454.32 191.194C454.077 191.838 453.69 192.333 453.158 192.678C452.635 193.023 452.005 193.196 451.268 193.196C450.288 193.196 449.508 192.879 448.93 192.244C448.351 191.6 448.062 190.704 448.062 189.556ZM449.406 188.814H452.934C452.924 188.226 452.756 187.764 452.43 187.428C452.103 187.083 451.697 186.91 451.212 186.91C450.736 186.91 450.33 187.083 449.994 187.428C449.658 187.773 449.462 188.235 449.406 188.814ZM456.113 193V186.056H457.401V187.526C457.588 187.115 457.872 186.751 458.255 186.434C458.647 186.117 459.132 185.958 459.711 185.958C459.935 185.958 460.15 185.981 460.355 186.028V187.386C460.056 187.339 459.809 187.316 459.613 187.316C458.157 187.316 457.429 188.17 457.429 189.878V193H456.113ZM460.995 189.556C460.995 188.445 461.289 187.554 461.877 186.882C462.465 186.201 463.221 185.86 464.145 185.86C465.069 185.86 465.816 186.182 466.385 186.826C466.955 187.47 467.239 188.291 467.239 189.29C467.239 189.467 467.225 189.659 467.197 189.864H462.311C462.339 190.611 462.526 191.171 462.871 191.544C463.226 191.908 463.679 192.09 464.229 192.09C465.06 192.09 465.667 191.647 466.049 190.76L467.253 191.194C467.011 191.838 466.623 192.333 466.091 192.678C465.569 193.023 464.939 193.196 464.201 193.196C463.221 193.196 462.442 192.879 461.863 192.244C461.285 191.6 460.995 190.704 460.995 189.556ZM462.339 188.814H465.867C465.858 188.226 465.69 187.764 465.363 187.428C465.037 187.083 464.631 186.91 464.145 186.91C463.669 186.91 463.263 187.083 462.927 187.428C462.591 187.773 462.395 188.235 462.339 188.814Z"
                  fill="#A9ABCD"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_570_13783"
                  x="0"
                  y="0"
                  width="772"
                  height="378"
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
                  <feOffset dy="2"></feOffset>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_570_13783"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_570_13783"
                    result="shape"
                  ></feBlend>
                </filter>
                <filter
                  id="filter1_d_570_13783"
                  x="305.4"
                  y="183.2"
                  width="161.853"
                  height="10.9961"
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
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_570_13783"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_570_13783"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] items-center pt-14 justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_570_13788)">
              <path
                d="M2.66669 15.3334C2.66669 13.705 3.83431 12.3494 5.37799 12.058C5.88677 6.72063 10.6779 2.66675 16.3334 2.66675C21.9888 2.66675 26.7799 6.72063 27.2887 12.058C28.8324 12.3494 30 13.705 30 15.3334V20.0001C30 21.529 28.9707 22.8174 27.5674 23.2103C26.9904 26.6845 23.9712 29.3334 20.3334 29.3334H18C16.1591 29.3334 14.6667 27.841 14.6667 26.0001V25.3334C14.6667 24.597 15.2636 24.0001 16 24.0001C16.7364 24.0001 17.3334 24.597 17.3334 25.3334V26.0001C17.3334 26.3682 17.6319 26.6667 18 26.6667H20.3334C22.4474 26.6667 24.2331 25.261 24.8068 23.3334H24.6667C23.9303 23.3334 23.3334 22.7365 23.3334 22.0001V13.3334C23.3334 12.6208 23.8924 12.0388 24.5958 12.0019C24.0674 8.30438 20.6451 5.33341 16.3334 5.33341C12.0216 5.33341 8.59934 8.30438 8.07093 12.0019C8.77434 12.0388 9.33335 12.6208 9.33335 13.3334V22.0001C9.33335 22.7365 8.73639 23.3334 8.00002 23.3334H6.00002C4.15907 23.3334 2.66669 21.841 2.66669 20.0001V15.3334Z"
                fill="url(#paint0_linear_570_13788)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_i_570_13788"
                x="2.66669"
                y="2.66675"
                width="27.3333"
                height="26.6667"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="0.5"></feOffset>
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_570_13788"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_570_13788"
                x1="2.6637"
                y1="2.66675"
                x2="28.465"
                y2="31.0349"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A9ABCD"></stop>
                <stop offset="0.7" stop-color="#66688C"></stop>
                <stop offset="1" stop-color="#353655"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-[26px] text-white">NEED HELP?</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          <div className="bg-[#161620] opacity-90 flex gap-4 p-7 flex-col justify-center">
            <span className="font-bold text-base text-white">Support</span>
            <span className="text-primary-grey text-sm">
              Need help? Click the button below to join our Discord server,
              where you can open a ticket in the{" "}
              <span className="text-white">#open-ticket channel.</span> Our
              support team is ready to assist you with any questions or issues
              you may have!
            </span>
            <Button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-28 mt-2"
              type="button"
            >
              <div className="flex items-center gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                </svg>
                <span className="normal-case text-white">Contact</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      {showLevelUpModal && (
        <LevelUpModal isOpen={showLevelUpModal} onClose={() => setShowLevelUpModal(false)} />
      )}
    </Layout>
  );
};

export default Home;
