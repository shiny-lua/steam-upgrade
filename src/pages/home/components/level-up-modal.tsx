import React from "react";
import Modal from "../../../components/modal";
import { Button } from "@material-tailwind/react";

const LevelUpModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [tabIdx, setTabIdx] = React.useState(0);

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Modal>
      <div
        className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm"
        style={{ opacity: 1 }}
      >
        <div ref={modalRef}
          className="relative m-4 shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] !w-[584px] !min-w-[584px] min-h-[80vh] h-[80vh] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <span>
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
              </span>
              <span className="text-sm text-primary-white">Level Up</span>
            </div>
            <svg
              onClick={onClose}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="w-4 h-4  text-primary-grey cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
            </svg>
          </div>

          <div className="rounded-r-full rounded-l-full bg-primary-dark flex gap-[14px] px-2 py-4 overflow-hidden">
            <div className="flex gap-2 items-center w-[120px]">
              <div
                className={`flex items-center justify-center bg-primary-lightDark  text-primary-white w-5 h-5 rounded-full text-xs`}
              >
                1
              </div>
              <span className="text-primary-grey text-xs">Choose Level</span>
            </div>
            <div className="flex gap-2 items-center w-[120px]">
              <div
                className={`flex items-center justify-center ${tabIdx !== 0 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white"}  w-5 h-5 rounded-full text-xs`}
              >
                2
              </div>
              <span className="text-primary-white text-xs">Review Order</span>
            </div>
            <div className="flex gap-2 items-center w-1/4">
              <div
                className={`flex items-center justify-center ${tabIdx == 1 || tabIdx == 2 ? "bg-primary-gradient text-primary-white " : "bg-primary-lightDark text-primary-grey"}  w-5 h-5 rounded-full text-xs`}
              >
                3
              </div>
              <span className="text-primary-grey text-xs">Choose Payment</span>
            </div>
            <div className="flex gap-2 items-center w-1/4">
              <div
                className={`flex items-center justify-center ${tabIdx !== 3 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white "}  w-5 h-5 rounded-full text-xs`}
              >
                {" "}
                4
              </div>
              <span className="text-primary-grey text-xs">
                Enjoy Your Level
              </span>
            </div>
          </div>
          {tabIdx == 0 && (
            <div>
              <div className="rounded-md bg-primary-dark flex p-5 flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold text-sm">
                      Counter-Strike 2
                    </span>
                    <span className="text-primary-grey text-sm">Badge</span>
                  </div>
                  <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">
                    +100 XP
                  </div>
                </div>
                <svg
                  width="504"
                  height="90"
                  viewBox="0 0 504 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4"
                >
                  <g clip-path="url(#clip0_570_9323)">
                    <rect
                      opacity="0.33"
                      x="4"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 4 28.7039)"
                      fill="url(#pattern0_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="38.7847"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 38.7847 19)"
                      fill="url(#pattern1_570_9323)"
                    ></rect>
                    <rect
                      x="14.5808"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern2_570_9323)"
                    ></rect>
                    <g filter="url(#filter0_b_570_9323)">
                      <rect
                        x="19"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M27.7515 43.491C27.7515 42.5253 28.5343 41.7424 29.5 41.7424H30.6667C31.6324 41.7424 32.4152 42.5253 32.4152 43.491V44.6576C32.4152 45.6233 31.6324 46.4062 30.6667 46.4062H29.5C28.5343 46.4062 27.7515 45.6233 27.7515 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M27.7515 49.3242C27.7515 48.3585 28.5343 47.5757 29.5 47.5757H30.6667C31.6324 47.5757 32.4152 48.3585 32.4152 49.3242V50.4909C32.4152 51.4565 31.6324 52.2394 30.6667 52.2394H29.5C28.5343 52.2394 27.7515 51.4565 27.7515 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M33.5847 43.491C33.5847 42.5253 34.3676 41.7424 35.3333 41.7424H36.4999C37.4656 41.7424 38.2485 42.5253 38.2485 43.491V44.6576C38.2485 45.6233 37.4656 46.4062 36.4999 46.4062H35.3333C34.3676 46.4062 33.5847 45.6233 33.5847 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.9166 47.5757C34.6287 47.5757 33.5847 48.6197 33.5847 49.9076C33.5847 51.1954 34.6287 52.2394 35.9166 52.2394C37.2045 52.2394 38.2485 51.1954 38.2485 49.9076C38.2485 48.6197 37.2045 47.5757 35.9166 47.5757ZM34.7485 49.9076C34.7485 49.2624 35.2715 48.7394 35.9166 48.7394C36.5618 48.7394 37.0847 49.2624 37.0847 49.9076C37.0847 50.5527 36.5618 51.0757 35.9166 51.0757C35.2715 51.0757 34.7485 50.5527 34.7485 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M49.356 50.9912V48.9872H45.288V47.4872L48.576 42.5912H51.036V47.5592H52.296V48.9872H51.036V50.9912H49.356ZM49.356 47.5592V46.6952V44.0312L46.956 47.5592H48.696H49.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <rect
                      opacity="0.33"
                      x="92"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 92 28.7039)"
                      fill="url(#pattern3_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="126.785"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 126.785 19)"
                      fill="url(#pattern4_570_9323)"
                    ></rect>
                    <rect
                      x="102.581"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern5_570_9323)"
                    ></rect>
                    <g filter="url(#filter1_b_570_9323)">
                      <rect
                        x="107"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M115.751 43.491C115.751 42.5253 116.534 41.7424 117.5 41.7424H118.667C119.632 41.7424 120.415 42.5253 120.415 43.491V44.6576C120.415 45.6233 119.632 46.4062 118.667 46.4062H117.5C116.534 46.4062 115.751 45.6233 115.751 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M115.751 49.3242C115.751 48.3585 116.534 47.5757 117.5 47.5757H118.667C119.632 47.5757 120.415 48.3585 120.415 49.3242V50.4909C120.415 51.4565 119.632 52.2394 118.667 52.2394H117.5C116.534 52.2394 115.751 51.4565 115.751 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M121.585 43.491C121.585 42.5253 122.368 41.7424 123.333 41.7424H124.5C125.466 41.7424 126.248 42.5253 126.248 43.491V44.6576C126.248 45.6233 125.466 46.4062 124.5 46.4062H123.333C122.368 46.4062 121.585 45.6233 121.585 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M123.917 47.5757C122.629 47.5757 121.585 48.6197 121.585 49.9076C121.585 51.1954 122.629 52.2394 123.917 52.2394C125.204 52.2394 126.248 51.1954 126.248 49.9076C126.248 48.6197 125.204 47.5757 123.917 47.5757ZM122.748 49.9076C122.748 49.2624 123.271 48.7394 123.917 48.7394C124.562 48.7394 125.085 49.2624 125.085 49.9076C125.085 50.5527 124.562 51.0757 123.917 51.0757C123.271 51.0757 122.748 50.5527 122.748 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M137.356 50.9912V48.9872H133.288V47.4872L136.576 42.5912H139.036V47.5592H140.296V48.9872H139.036V50.9912H137.356ZM137.356 47.5592V46.6952V44.0312L134.956 47.5592H136.696H137.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <rect
                      opacity="0.33"
                      x="180"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 180 28.7039)"
                      fill="url(#pattern6_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="214.785"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 214.785 19)"
                      fill="url(#pattern7_570_9323)"
                    ></rect>
                    <rect
                      x="190.581"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern8_570_9323)"
                    ></rect>
                    <g filter="url(#filter2_b_570_9323)">
                      <rect
                        x="195"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M203.751 43.491C203.751 42.5253 204.534 41.7424 205.5 41.7424H206.667C207.632 41.7424 208.415 42.5253 208.415 43.491V44.6576C208.415 45.6233 207.632 46.4062 206.667 46.4062H205.5C204.534 46.4062 203.751 45.6233 203.751 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M203.751 49.3242C203.751 48.3585 204.534 47.5757 205.5 47.5757H206.667C207.632 47.5757 208.415 48.3585 208.415 49.3242V50.4909C208.415 51.4565 207.632 52.2394 206.667 52.2394H205.5C204.534 52.2394 203.751 51.4565 203.751 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M209.585 43.491C209.585 42.5253 210.368 41.7424 211.333 41.7424H212.5C213.466 41.7424 214.248 42.5253 214.248 43.491V44.6576C214.248 45.6233 213.466 46.4062 212.5 46.4062H211.333C210.368 46.4062 209.585 45.6233 209.585 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M211.917 47.5757C210.629 47.5757 209.585 48.6197 209.585 49.9076C209.585 51.1954 210.629 52.2394 211.917 52.2394C213.204 52.2394 214.248 51.1954 214.248 49.9076C214.248 48.6197 213.204 47.5757 211.917 47.5757ZM210.748 49.9076C210.748 49.2624 211.271 48.7394 211.917 48.7394C212.562 48.7394 213.085 49.2624 213.085 49.9076C213.085 50.5527 212.562 51.0757 211.917 51.0757C211.271 51.0757 210.748 50.5527 210.748 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M225.356 50.9912V48.9872H221.288V47.4872L224.576 42.5912H227.036V47.5592H228.296V48.9872H227.036V50.9912H225.356ZM225.356 47.5592V46.6952V44.0312L222.956 47.5592H224.696H225.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern1_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern2_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter0_b_570_9323"
                      x="4"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <pattern
                      id="pattern3_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern4_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern5_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter1_b_570_9323"
                      x="92"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <pattern
                      id="pattern6_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern7_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern8_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter2_b_570_9323"
                      x="180"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <clipPath id="clip0_570_9323">
                      <rect
                        width="504"
                        height="90"
                        fill="white"
                        transform="translate(0 0.00878906)"
                      ></rect>
                    </clipPath>
                    <image
                      id="image0_570_9323"
                      width="164"
                      height="192"
                    ></image>
                  </defs>
                </svg>
                <div className="flex justify-between mt-2">
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
                </div>
              </div>
              <div className="rounded-md bg-primary-dark flex p-5 flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold text-sm">
                      Counter-Strike 2
                    </span>
                    <span className="text-primary-grey text-sm">Badge</span>
                  </div>
                  <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">
                    +100 XP
                  </div>
                </div>
                <svg
                  width="504"
                  height="90"
                  viewBox="0 0 504 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4"
                >
                  <g clip-path="url(#clip0_570_9323)">
                    <rect
                      opacity="0.33"
                      x="4"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 4 28.7039)"
                      fill="url(#pattern0_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="38.7847"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 38.7847 19)"
                      fill="url(#pattern1_570_9323)"
                    ></rect>
                    <rect
                      x="14.5808"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern2_570_9323)"
                    ></rect>
                    <g filter="url(#filter0_b_570_9323)">
                      <rect
                        x="19"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M27.7515 43.491C27.7515 42.5253 28.5343 41.7424 29.5 41.7424H30.6667C31.6324 41.7424 32.4152 42.5253 32.4152 43.491V44.6576C32.4152 45.6233 31.6324 46.4062 30.6667 46.4062H29.5C28.5343 46.4062 27.7515 45.6233 27.7515 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M27.7515 49.3242C27.7515 48.3585 28.5343 47.5757 29.5 47.5757H30.6667C31.6324 47.5757 32.4152 48.3585 32.4152 49.3242V50.4909C32.4152 51.4565 31.6324 52.2394 30.6667 52.2394H29.5C28.5343 52.2394 27.7515 51.4565 27.7515 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M33.5847 43.491C33.5847 42.5253 34.3676 41.7424 35.3333 41.7424H36.4999C37.4656 41.7424 38.2485 42.5253 38.2485 43.491V44.6576C38.2485 45.6233 37.4656 46.4062 36.4999 46.4062H35.3333C34.3676 46.4062 33.5847 45.6233 33.5847 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.9166 47.5757C34.6287 47.5757 33.5847 48.6197 33.5847 49.9076C33.5847 51.1954 34.6287 52.2394 35.9166 52.2394C37.2045 52.2394 38.2485 51.1954 38.2485 49.9076C38.2485 48.6197 37.2045 47.5757 35.9166 47.5757ZM34.7485 49.9076C34.7485 49.2624 35.2715 48.7394 35.9166 48.7394C36.5618 48.7394 37.0847 49.2624 37.0847 49.9076C37.0847 50.5527 36.5618 51.0757 35.9166 51.0757C35.2715 51.0757 34.7485 50.5527 34.7485 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M49.356 50.9912V48.9872H45.288V47.4872L48.576 42.5912H51.036V47.5592H52.296V48.9872H51.036V50.9912H49.356ZM49.356 47.5592V46.6952V44.0312L46.956 47.5592H48.696H49.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <rect
                      opacity="0.33"
                      x="92"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 92 28.7039)"
                      fill="url(#pattern3_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="126.785"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 126.785 19)"
                      fill="url(#pattern4_570_9323)"
                    ></rect>
                    <rect
                      x="102.581"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern5_570_9323)"
                    ></rect>
                    <g filter="url(#filter1_b_570_9323)">
                      <rect
                        x="107"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M115.751 43.491C115.751 42.5253 116.534 41.7424 117.5 41.7424H118.667C119.632 41.7424 120.415 42.5253 120.415 43.491V44.6576C120.415 45.6233 119.632 46.4062 118.667 46.4062H117.5C116.534 46.4062 115.751 45.6233 115.751 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M115.751 49.3242C115.751 48.3585 116.534 47.5757 117.5 47.5757H118.667C119.632 47.5757 120.415 48.3585 120.415 49.3242V50.4909C120.415 51.4565 119.632 52.2394 118.667 52.2394H117.5C116.534 52.2394 115.751 51.4565 115.751 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M121.585 43.491C121.585 42.5253 122.368 41.7424 123.333 41.7424H124.5C125.466 41.7424 126.248 42.5253 126.248 43.491V44.6576C126.248 45.6233 125.466 46.4062 124.5 46.4062H123.333C122.368 46.4062 121.585 45.6233 121.585 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M123.917 47.5757C122.629 47.5757 121.585 48.6197 121.585 49.9076C121.585 51.1954 122.629 52.2394 123.917 52.2394C125.204 52.2394 126.248 51.1954 126.248 49.9076C126.248 48.6197 125.204 47.5757 123.917 47.5757ZM122.748 49.9076C122.748 49.2624 123.271 48.7394 123.917 48.7394C124.562 48.7394 125.085 49.2624 125.085 49.9076C125.085 50.5527 124.562 51.0757 123.917 51.0757C123.271 51.0757 122.748 50.5527 122.748 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M137.356 50.9912V48.9872H133.288V47.4872L136.576 42.5912H139.036V47.5592H140.296V48.9872H139.036V50.9912H137.356ZM137.356 47.5592V46.6952V44.0312L134.956 47.5592H136.696H137.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <rect
                      opacity="0.33"
                      x="180"
                      y="28.7039"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(-15 180 28.7039)"
                      fill="url(#pattern6_570_9323)"
                    ></rect>
                    <rect
                      opacity="0.33"
                      x="214.785"
                      y="19"
                      width="37.4929"
                      height="43.8941"
                      transform="rotate(15 214.785 19)"
                      fill="url(#pattern7_570_9323)"
                    ></rect>
                    <rect
                      x="190.581"
                      y="15"
                      width="51.25"
                      height="60"
                      fill="url(#pattern8_570_9323)"
                    ></rect>
                    <g filter="url(#filter2_b_570_9323)">
                      <rect
                        x="195"
                        y="33.9912"
                        width="41"
                        height="26"
                        rx="5"
                        fill="#3A3B54"
                        fill-opacity="0.9"
                      ></rect>
                      <path
                        d="M203.751 43.491C203.751 42.5253 204.534 41.7424 205.5 41.7424H206.667C207.632 41.7424 208.415 42.5253 208.415 43.491V44.6576C208.415 45.6233 207.632 46.4062 206.667 46.4062H205.5C204.534 46.4062 203.751 45.6233 203.751 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M203.751 49.3242C203.751 48.3585 204.534 47.5757 205.5 47.5757H206.667C207.632 47.5757 208.415 48.3585 208.415 49.3242V50.4909C208.415 51.4565 207.632 52.2394 206.667 52.2394H205.5C204.534 52.2394 203.751 51.4565 203.751 50.4909V49.3242Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M209.585 43.491C209.585 42.5253 210.368 41.7424 211.333 41.7424H212.5C213.466 41.7424 214.248 42.5253 214.248 43.491V44.6576C214.248 45.6233 213.466 46.4062 212.5 46.4062H211.333C210.368 46.4062 209.585 45.6233 209.585 44.6576V43.491Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M211.917 47.5757C210.629 47.5757 209.585 48.6197 209.585 49.9076C209.585 51.1954 210.629 52.2394 211.917 52.2394C213.204 52.2394 214.248 51.1954 214.248 49.9076C214.248 48.6197 213.204 47.5757 211.917 47.5757ZM210.748 49.9076C210.748 49.2624 211.271 48.7394 211.917 48.7394C212.562 48.7394 213.085 49.2624 213.085 49.9076C213.085 50.5527 212.562 51.0757 211.917 51.0757C211.271 51.0757 210.748 50.5527 210.748 49.9076Z"
                        fill="#A9ABCD"
                      ></path>
                      <path
                        d="M225.356 50.9912V48.9872H221.288V47.4872L224.576 42.5912H227.036V47.5592H228.296V48.9872H227.036V50.9912H225.356ZM225.356 47.5592V46.6952V44.0312L222.956 47.5592H224.696H225.356Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern1_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern2_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter0_b_570_9323"
                      x="4"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <pattern
                      id="pattern3_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern4_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern5_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter1_b_570_9323"
                      x="92"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <pattern
                      id="pattern6_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern7_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <pattern
                      id="pattern8_570_9323"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use transform="scale(0.00609756 0.00520833)"></use>
                    </pattern>
                    <filter
                      id="filter2_b_570_9323"
                      x="180"
                      y="18.9912"
                      width="71"
                      height="56"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="7.5"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_570_9323"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_570_9323"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <clipPath id="clip0_570_9323">
                      <rect
                        width="504"
                        height="90"
                        fill="white"
                        transform="translate(0 0.00878906)"
                      ></rect>
                    </clipPath>
                    <image
                      id="image0_570_9323"
                      width="164"
                      height="192"
                    ></image>
                  </defs>
                </svg>
                <div className="flex justify-between mt-2">
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
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={onClose}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] w-1/6 normal-case"
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setTabIdx(1)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-5/6 normal-case flex gap-2 items-center justify-center"
                  type="button"
                >
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
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 1 && (
            <div>
              <div className="bg-[#161620] p-6 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold text-primary-white">
                    $50.97
                  </span>
                  <span className="text-base text-primary-grey">Balance</span>
                </div>
                <div className="flex gap-1 items-center p-3 bg-[#3A3B54] bg-opacity-50 rounded-md">
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
                    <path d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"></path>
                  </svg>
                  <span className="font-bold text-sm mt-[1px] text-primary-grey">
                    Use Balance
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">Steam</span>
                <div className="flex gap-2">
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2313)">
                      <rect
                        y="0.00878906"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0088"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2588"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2313)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2313)">
                        <path
                          d="M43 32.999C43 40.7311 36.7321 46.999 29 46.999C21.2679 46.999 15 40.7311 15 32.999C15 25.2669 21.2679 18.999 29 18.999C36.7321 18.999 43 25.2669 43 32.999Z"
                          fill="#3B4083"
                        ></path>
                        <path
                          d="M21.6944 32.5691L21.0841 32.3036H25.7106C25.9002 32.3036 26.0715 32.1995 26.1459 32.0392L26.5358 31.1989L22.0424 31.1984C21.2863 31.1984 20.6027 31.6122 20.3035 32.251L19.0766 34.9024C18.8109 35.4768 19.2689 36.1144 19.9476 36.1144H23.9422C24.1318 36.1144 24.3031 36.0104 24.3775 35.85L24.7747 34.9943H20.5703L21.6944 32.5693V32.5691Z"
                          fill="white"
                        ></path>
                        <path
                          d="M34.5812 31.1986C33.8212 31.1986 33.1349 31.6167 32.8383 32.2605L32.4988 32.9972C32.2337 33.5715 32.6919 34.2083 33.3701 34.2083H36.5585L36.1938 34.9945H31.8869C31.6977 34.9945 31.5267 35.098 31.4521 35.258L31.0519 36.1146H35.9153C36.6737 36.1146 37.3588 35.6984 37.6564 35.0567L38.0129 34.2884C38.2794 33.7139 37.8212 33.0757 37.1424 33.0757H33.957L34.1908 32.5696L33.5956 32.3039H38.6206C38.8105 32.3039 38.982 32.1995 39.0563 32.0389L39.4444 31.1987H34.5814L34.5812 31.1986Z"
                          fill="white"
                        ></path>
                        <path
                          d="M33.1687 30.0783C33.1644 30.0783 33.1608 30.075 33.1608 30.0711C33.1612 30.0439 33.162 29.9478 33.1622 29.9297C33.1622 29.9048 33.1432 29.8847 33.1195 29.8847C33.1057 29.8847 33.0935 29.8915 33.0856 29.9021C33.0815 29.9074 33.0328 29.9728 33.0028 30.0129C33.0011 30.0151 32.9986 30.0163 32.9957 30.0163H30.6246C30.6153 30.0163 30.6077 30.0095 30.6075 30.0009L30.6027 29.9419C30.6026 29.9319 30.6124 29.9241 30.6231 29.926L30.7443 29.9366C30.7549 29.9374 30.7643 29.9312 30.7669 29.9218L30.8552 29.5921C30.8571 29.5845 30.8525 29.5767 30.8446 29.574L30.7625 29.5458C30.7577 29.5441 30.7542 29.5405 30.753 29.536C30.7381 29.4786 30.6167 29.0948 30.0314 29.009C29.7467 28.9673 29.5602 29.0792 29.4606 29.1684C29.4164 29.208 29.3799 29.2544 29.3514 29.3049L29.3165 29.3758C29.3134 29.3812 29.2998 29.4477 29.2998 29.4538L29.3183 29.7809C29.3183 29.7921 29.3241 29.8026 29.3336 29.8095L29.462 29.8605L29.3911 29.9686C29.3887 29.9766 29.3809 29.982 29.3719 29.982C29.3719 29.982 29.221 29.9856 29.1465 29.9884C29.007 29.9936 28.6962 30.1503 28.467 30.6012C28.242 31.044 28.205 31.1178 28.205 31.1178C28.2003 31.1262 28.1906 31.1315 28.1803 31.131L27.9712 31.1316C27.9583 31.1316 27.9446 31.1412 27.9391 31.1519L27.614 31.9995C27.6086 32.0103 27.6118 32.0265 27.6203 32.0356L27.8472 32.1661C27.8535 32.171 27.8562 32.1786 27.8543 32.1858L27.7358 32.508C27.7343 32.5151 27.7314 32.5222 27.7273 32.5286L27.5701 32.656C27.566 32.6593 27.5623 32.6634 27.5601 32.6679C27.5589 32.6704 27.5579 32.673 27.5571 32.6757L27.3407 33.186C27.3378 33.195 27.3288 33.2011 27.3187 33.2011L27.1972 33.2017C27.1667 33.2017 27.1413 33.2234 27.1386 33.2513L27.0659 34.0141C27.0646 34.0275 27.0627 34.0409 27.0602 34.0543L27.0029 34.357C27.0007 34.364 26.9965 34.3703 26.9908 34.3754L26.7887 34.5175C26.6961 34.599 26.572 34.7476 26.5113 34.8514L25.8381 36.1592C25.8218 36.187 25.8087 36.2349 25.8095 36.2666L25.8574 36.345C25.8581 36.3731 25.8458 36.497 25.8318 36.5219L25.6062 36.8848C25.6011 36.8937 25.6008 36.9042 25.6052 36.9134L25.6164 36.9369L25.6501 36.9989L26.3347 36.9998C26.3772 37.0034 26.4241 36.9533 26.4255 36.8997L26.4626 36.4675L26.4529 36.4024L27.7582 34.9918C27.7923 34.9536 27.8386 34.8862 27.8618 34.8416L28.4838 33.5785C28.4911 33.5646 28.5042 33.554 28.5201 33.5492L28.5594 33.5375C28.5834 33.5303 28.6095 33.5373 28.6256 33.5551C28.68 33.6153 28.8081 33.8155 28.8705 33.8989C28.922 33.9682 29.1779 34.3091 29.2897 34.4214C29.3205 34.4523 29.4157 34.4874 29.4583 34.5113C29.4722 34.5191 29.4767 34.5356 29.4687 34.5486L29.096 35.1514L28.9313 35.8633C28.9256 35.8798 28.9212 35.897 28.9185 35.9141L28.7694 36.4085C28.7704 36.4709 28.7184 36.5037 28.7141 36.5773L28.6599 36.9386C28.6592 36.9497 28.6688 36.9591 28.6809 36.9591L29.6018 36.9638H29.6026C29.6037 36.9638 29.6675 36.963 29.7051 36.9616C29.7123 36.9613 29.7245 36.9602 29.7325 36.9593C29.8552 36.9449 29.9392 36.9294 29.9963 36.9117C29.9988 36.9109 30.0014 36.9101 30.0039 36.9092C30.0436 36.8962 30.0694 36.8818 30.086 36.866C30.1174 36.8358 30.1537 36.7989 30.1591 36.7513C30.1593 36.7494 30.1595 36.7477 30.1596 36.7458C30.1596 36.7447 30.1596 36.7435 30.1598 36.7424C30.1598 36.7397 30.1598 36.7372 30.1598 36.7346C30.1598 36.7343 30.1598 36.7338 30.1598 36.7335C30.1598 36.7311 30.1595 36.7288 30.1591 36.7266C30.1579 36.7171 30.1556 36.7099 30.1528 36.7041C30.1528 36.7041 30.1528 36.7041 30.1528 36.704C30.1528 36.7039 30.1527 36.7037 30.1525 36.7035C30.1517 36.7017 30.1506 36.7001 30.1496 36.6985C30.1489 36.6976 30.1484 36.6967 30.1476 36.6957C30.1423 36.689 30.1372 36.6865 30.1366 36.6862C30.134 36.6848 30.1313 36.6836 30.1284 36.6827L29.7007 36.5639C29.6733 36.5561 29.6494 36.5405 29.6324 36.5193L29.5176 36.363C29.512 36.3521 29.5145 36.3389 29.5238 36.3305L29.7475 36.1275C29.7552 36.1208 29.7611 36.1126 29.765 36.1035L30.454 34.6075C30.4862 34.5126 30.4756 34.4057 30.454 34.2927C30.4381 34.2092 30.2059 33.8506 30.1452 33.7515C30.0918 33.6642 29.7587 33.128 29.6797 33.001C29.6707 32.9866 29.659 32.9738 29.6443 32.9645C29.6337 32.9577 29.6234 32.9492 29.6149 32.9401C29.6065 32.9311 29.6004 32.9205 29.5969 32.9089L29.5707 32.5365C29.5683 32.5284 29.5744 32.5203 29.5836 32.5197L29.7035 32.5105C29.7148 32.5095 29.725 32.5034 29.7303 32.4942L30.1454 31.7761C30.1511 31.7663 30.1508 31.7543 30.1445 31.7448L30.0596 31.6479C30.0538 31.639 30.0536 31.6278 30.0592 31.6187L30.1864 31.4922C30.1917 31.4834 30.2036 31.4805 30.213 31.4853L30.5512 31.6608C30.5717 31.6714 30.5949 31.6777 30.6185 31.6777C30.7123 31.6771 30.8668 31.626 30.9471 31.5808C30.9683 31.5688 30.9858 31.5518 30.9973 31.5315L31.1632 31.1747C31.1654 31.1702 31.1727 31.1708 31.1737 31.1756L31.22 31.3741C31.2231 31.3866 31.2349 31.3936 31.2485 31.3908L31.7369 31.2908C31.7498 31.2881 31.7577 31.2764 31.755 31.2646L31.6399 30.8167C31.6384 30.8106 31.6395 30.8042 31.6433 30.7989L31.6908 30.731C31.6967 30.7226 31.7011 30.7134 31.7038 30.7039L31.7613 30.4622C31.7628 30.456 31.7688 30.4514 31.7757 30.4514L33.1268 30.453C33.1458 30.453 33.1605 30.4396 33.1605 30.422V30.2107C33.1605 30.2068 33.1641 30.2035 33.1683 30.2035H33.6892C33.6984 30.2035 33.706 30.1967 33.706 30.1881V30.0929C33.706 30.0845 33.6986 30.0775 33.6892 30.0775H33.1681L33.1687 30.0783Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M14.7117 69.0958C14.693 67.6584 15.169 66.4451 16.1397 65.4558C17.1197 64.4571 18.3424 63.9671 19.8077 63.9858C20.937 63.9858 21.903 64.2658 22.7057 64.8258C23.5177 65.3764 24.059 66.1044 24.3297 67.0098L22.4117 67.7518C21.945 66.4171 21.0677 65.7498 19.7797 65.7498C18.893 65.7498 18.1977 66.0438 17.6937 66.6318C17.1897 67.2198 16.9377 68.0411 16.9377 69.0958C16.9377 70.1598 17.185 70.9858 17.6797 71.5738C18.1837 72.1618 18.8837 72.4558 19.7797 72.4558C21.0864 72.4558 21.9824 71.7838 22.4677 70.4398L24.3437 71.1958C23.9797 72.1758 23.4104 72.9271 22.6357 73.4498C21.8704 73.9724 20.9184 74.2338 19.7797 74.2338C18.2677 74.2338 17.045 73.7531 16.1117 72.7918C15.1784 71.8304 14.7117 70.5984 14.7117 69.0958ZM25.0981 71.2098L27.1001 70.5378C27.2214 71.1071 27.4921 71.5831 27.9121 71.9658C28.3321 72.3484 28.8874 72.5398 29.5781 72.5398C30.2127 72.5398 30.6887 72.4278 31.0061 72.2038C31.3327 71.9798 31.4961 71.6718 31.4961 71.2798C31.4961 70.6358 30.9641 70.2344 29.9001 70.0758L28.6821 69.9078C26.6194 69.6184 25.5881 68.6384 25.5881 66.9678C25.5881 66.1184 25.9334 65.4091 26.6241 64.8398C27.3241 64.2704 28.2714 63.9858 29.4661 63.9858C30.6047 63.9858 31.5194 64.2284 32.2101 64.7138C32.9007 65.1898 33.3674 65.8198 33.6101 66.6038L31.6501 67.2898C31.3047 66.2164 30.5767 65.6798 29.4661 65.6798C28.9154 65.6798 28.5001 65.7918 28.2201 66.0158C27.9401 66.2398 27.8001 66.5291 27.8001 66.8838C27.8001 67.4624 28.2201 67.8124 29.0601 67.9338L30.2781 68.1018C31.3701 68.2511 32.2147 68.5824 32.8121 69.0958C33.4094 69.6091 33.7081 70.2904 33.7081 71.1398C33.7081 72.0451 33.3534 72.7871 32.6441 73.3658C31.9347 73.9444 30.9127 74.2338 29.5781 74.2338C28.3274 74.2338 27.3194 73.9538 26.5541 73.3938C25.7887 72.8338 25.3034 72.1058 25.0981 71.2098ZM35.004 74.0098V71.8538C36.432 71.0231 37.4914 70.3558 38.182 69.8518C38.8727 69.3384 39.3347 68.8998 39.568 68.5358C39.8107 68.1624 39.946 67.7331 39.974 67.2478C39.974 66.8091 39.8387 66.4498 39.568 66.1698C39.2974 65.8898 38.9567 65.7498 38.546 65.7498C37.538 65.7498 37.0107 66.4358 36.964 67.8078L34.934 67.4858C34.934 66.5338 35.2607 65.7078 35.914 65.0078C36.5767 64.3078 37.4727 63.9671 38.602 63.9858C39.694 63.9858 40.5527 64.2658 41.178 64.8258C41.8034 65.3858 42.116 66.1278 42.116 67.0518C42.116 67.9571 41.8454 68.7364 41.304 69.3898C40.9214 69.8564 40.3847 70.3138 39.694 70.7618C39.0034 71.2098 38.0794 71.7044 36.922 72.2458H39.792H42.158V74.0098H35.004Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.415 89.7178L15.891 89.1538C16.027 89.6818 16.279 90.1058 16.647 90.4258C17.023 90.7378 17.507 90.8938 18.099 90.8938C18.659 90.8938 19.083 90.7898 19.371 90.5818C19.659 90.3658 19.803 90.0738 19.803 89.7058C19.803 89.0978 19.323 88.7098 18.363 88.5418L17.295 88.3618C16.479 88.2178 15.863 87.9498 15.447 87.5578C15.039 87.1658 14.835 86.6178 14.835 85.9138C14.835 85.2018 15.119 84.6098 15.687 84.1378C16.263 83.6658 17.031 83.4298 17.991 83.4298C18.895 83.4298 19.631 83.6338 20.199 84.0418C20.767 84.4418 21.143 84.9458 21.327 85.5538L19.875 86.1178C19.587 85.1898 18.943 84.7258 17.943 84.7258C17.455 84.7258 17.079 84.8298 16.815 85.0378C16.559 85.2458 16.431 85.5138 16.431 85.8418C16.431 86.3938 16.827 86.7418 17.619 86.8858L18.711 87.0778C19.567 87.2218 20.231 87.5058 20.703 87.9298C21.183 88.3538 21.423 88.9058 21.423 89.5858C21.423 90.3618 21.131 90.9898 20.547 91.4698C19.971 91.9498 19.147 92.1898 18.075 92.1898C17.083 92.1898 16.271 91.9618 15.639 91.5058C15.015 91.0498 14.607 90.4538 14.415 89.7178ZM23.406 90.4858V87.1738H22.11V86.0338H23.406V84.1618H24.87V86.0338H26.454V87.1738H24.87V90.2578C24.87 90.6258 25.054 90.8098 25.422 90.8098H26.694V92.0098H24.918C24.438 92.0098 24.066 91.8778 23.802 91.6138C23.538 91.3418 23.406 90.9658 23.406 90.4858ZM27.3081 89.0218C27.3081 88.0858 27.5801 87.3258 28.1241 86.7418C28.6761 86.1498 29.3681 85.8538 30.2001 85.8538C31.0481 85.8538 31.7281 86.1418 32.2401 86.7178C32.7521 87.2858 33.0081 88.0218 33.0081 88.9258C33.0081 89.0538 33.0001 89.2058 32.9841 89.3818H28.7601C28.7841 89.9338 28.9281 90.3498 29.1921 90.6298C29.4561 90.9018 29.8041 91.0378 30.2361 91.0378C30.8921 91.0378 31.3801 90.6778 31.7001 89.9578L33.0201 90.4498C32.5561 91.6098 31.6241 92.1898 30.2241 92.1898C29.3361 92.1898 28.6281 91.9098 28.1001 91.3498C27.5721 90.7818 27.3081 90.0058 27.3081 89.0218ZM28.8081 88.3018H31.5321C31.5081 87.8778 31.3761 87.5458 31.1361 87.3058C30.9041 87.0658 30.5921 86.9458 30.2001 86.9458C29.8321 86.9458 29.5201 87.0658 29.2641 87.3058C29.0161 87.5458 28.8641 87.8778 28.8081 88.3018ZM34.0358 90.4738C34.0358 89.7058 34.3758 89.1498 35.0558 88.8058C35.7278 88.4538 36.6398 88.2218 37.7918 88.1098V87.9058C37.7918 87.2818 37.4278 86.9698 36.6998 86.9698C35.9478 86.9698 35.4758 87.3018 35.2838 87.9658L33.9518 87.6178C34.0158 87.1378 34.2958 86.7258 34.7918 86.3818C35.2878 86.0298 35.9238 85.8538 36.6998 85.8538C37.5238 85.8538 38.1518 86.0458 38.5838 86.4298C39.0238 86.8058 39.2438 87.3578 39.2438 88.0858V90.4978C39.2438 90.6498 39.2638 90.7498 39.3038 90.7978C39.3518 90.8378 39.4518 90.8578 39.6038 90.8578H40.1678V92.0098H39.0398C38.3838 92.0098 38.0238 91.7138 37.9598 91.1218C37.4878 91.8338 36.8158 92.1898 35.9438 92.1898C35.3838 92.1898 34.9238 92.0338 34.5638 91.7218C34.2118 91.4098 34.0358 90.9938 34.0358 90.4738ZM37.7918 89.5498V89.0698C37.0398 89.1498 36.4718 89.2898 36.0878 89.4898C35.7118 89.6818 35.5238 89.9618 35.5238 90.3298C35.5238 90.5698 35.5998 90.7578 35.7518 90.8938C35.9118 91.0218 36.1358 91.0858 36.4238 91.0858C36.8158 91.0858 37.1398 90.9538 37.3958 90.6898C37.6598 90.4178 37.7918 90.0378 37.7918 89.5498ZM41.1224 92.0098V86.0338H42.5504V86.9098C42.7264 86.5818 42.9704 86.3258 43.2824 86.1418C43.5944 85.9498 43.9464 85.8538 44.3384 85.8538C45.1624 85.8538 45.7544 86.2298 46.1144 86.9818C46.5784 86.2298 47.2464 85.8538 48.1184 85.8538C48.7584 85.8538 49.2544 86.0378 49.6064 86.4058C49.9584 86.7738 50.1344 87.3138 50.1344 88.0258V92.0098H48.6824V88.3618C48.6824 87.5058 48.3224 87.0778 47.6024 87.0778C47.2184 87.0778 46.9384 87.1858 46.7624 87.4018C46.5944 87.6018 46.4824 87.8298 46.4264 88.0858C46.3784 88.3338 46.3544 88.6578 46.3544 89.0578V92.0098H44.9144V88.3618C44.9144 87.5058 44.5544 87.0778 43.8344 87.0778C43.4664 87.0778 43.1904 87.1858 43.0064 87.4018C42.7264 87.7298 42.5864 88.2818 42.5864 89.0578V92.0098H41.1224Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2313"
                        x="0"
                        y="0.00878906"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2313"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2313"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2313"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2313"
                        x1="29.0005"
                        y1="18.0088"
                        x2="29.0005"
                        y2="48.0098"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2313">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.999)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2270)">
                      <rect
                        y="0.00878906"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0088"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2588"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2270)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2270)">
                        <path
                          d="M43 32.999C43 40.7311 36.7321 46.999 29 46.999C21.2679 46.999 15 40.7311 15 32.999C15 25.2669 21.2679 18.999 29 18.999C36.7321 18.999 43 25.2669 43 32.999Z"
                          fill="#B38A40"
                        ></path>
                        <path
                          d="M30.9375 24.5149C34.6228 25.456 37.348 28.798 37.348 32.7766C37.348 32.8674 37.3461 32.9578 37.3431 33.0479L31.6081 32.2322C31.4402 31.368 30.8805 30.6443 30.1213 30.2525L30.9375 24.5149ZM26.2973 31.4766C26.6891 30.7174 27.4128 30.1577 28.2769 29.9898L29.0927 24.2547C29.0026 24.2519 28.9123 24.25 28.8215 24.25C24.843 24.25 21.501 26.975 20.5598 30.6604L26.2973 31.4766ZM27.5214 35.3009C26.7622 34.909 26.2025 34.1853 26.0347 33.3212L20.2996 32.5053C20.2968 32.5955 20.2949 32.6858 20.2949 32.7766C20.2949 36.7551 23.0199 40.0971 26.7052 41.0383L27.5214 35.3009ZM31.3456 34.0767C30.9537 34.8359 30.2301 35.3955 29.3659 35.5634L28.5501 41.2986C28.6403 41.3014 28.7306 41.3034 28.8214 41.3034C32.7999 41.3034 36.1419 38.5782 37.083 34.8929L31.3456 34.0767Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M17.6221 74.0098V65.9738H14.2621V64.2098H23.1101V65.9738H19.7501V74.0098H17.6221ZM24.4309 74.0098V64.2098H31.9629V65.9738H26.5589V68.5218H30.8849V70.2858H26.5589V74.0098H24.4309ZM33.0197 74.0098V71.8538C34.4477 71.0231 35.507 70.3558 36.1977 69.8518C36.8883 69.3384 37.3503 68.8998 37.5837 68.5358C37.8263 68.1624 37.9617 67.7331 37.9897 67.2478C37.9897 66.8091 37.8543 66.4498 37.5837 66.1698C37.313 65.8898 36.9723 65.7498 36.5617 65.7498C35.5537 65.7498 35.0263 66.4358 34.9797 67.8078L32.9497 67.4858C32.9497 66.5338 33.2763 65.7078 33.9297 65.0078C34.5923 64.3078 35.4883 63.9671 36.6177 63.9858C37.7097 63.9858 38.5683 64.2658 39.1937 64.8258C39.819 65.3858 40.1317 66.1278 40.1317 67.0518C40.1317 67.9571 39.861 68.7364 39.3197 69.3898C38.937 69.8564 38.4003 70.3138 37.7097 70.7618C37.019 71.2098 36.095 71.7044 34.9377 72.2458H37.8077H40.1737V74.0098H33.0197Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.415 89.7178L15.891 89.1538C16.027 89.6818 16.279 90.1058 16.647 90.4258C17.023 90.7378 17.507 90.8938 18.099 90.8938C18.659 90.8938 19.083 90.7898 19.371 90.5818C19.659 90.3658 19.803 90.0738 19.803 89.7058C19.803 89.0978 19.323 88.7098 18.363 88.5418L17.295 88.3618C16.479 88.2178 15.863 87.9498 15.447 87.5578C15.039 87.1658 14.835 86.6178 14.835 85.9138C14.835 85.2018 15.119 84.6098 15.687 84.1378C16.263 83.6658 17.031 83.4298 17.991 83.4298C18.895 83.4298 19.631 83.6338 20.199 84.0418C20.767 84.4418 21.143 84.9458 21.327 85.5538L19.875 86.1178C19.587 85.1898 18.943 84.7258 17.943 84.7258C17.455 84.7258 17.079 84.8298 16.815 85.0378C16.559 85.2458 16.431 85.5138 16.431 85.8418C16.431 86.3938 16.827 86.7418 17.619 86.8858L18.711 87.0778C19.567 87.2218 20.231 87.5058 20.703 87.9298C21.183 88.3538 21.423 88.9058 21.423 89.5858C21.423 90.3618 21.131 90.9898 20.547 91.4698C19.971 91.9498 19.147 92.1898 18.075 92.1898C17.083 92.1898 16.271 91.9618 15.639 91.5058C15.015 91.0498 14.607 90.4538 14.415 89.7178ZM23.406 90.4858V87.1738H22.11V86.0338H23.406V84.1618H24.87V86.0338H26.454V87.1738H24.87V90.2578C24.87 90.6258 25.054 90.8098 25.422 90.8098H26.694V92.0098H24.918C24.438 92.0098 24.066 91.8778 23.802 91.6138C23.538 91.3418 23.406 90.9658 23.406 90.4858ZM27.3081 89.0218C27.3081 88.0858 27.5801 87.3258 28.1241 86.7418C28.6761 86.1498 29.3681 85.8538 30.2001 85.8538C31.0481 85.8538 31.7281 86.1418 32.2401 86.7178C32.7521 87.2858 33.0081 88.0218 33.0081 88.9258C33.0081 89.0538 33.0001 89.2058 32.9841 89.3818H28.7601C28.7841 89.9338 28.9281 90.3498 29.1921 90.6298C29.4561 90.9018 29.8041 91.0378 30.2361 91.0378C30.8921 91.0378 31.3801 90.6778 31.7001 89.9578L33.0201 90.4498C32.5561 91.6098 31.6241 92.1898 30.2241 92.1898C29.3361 92.1898 28.6281 91.9098 28.1001 91.3498C27.5721 90.7818 27.3081 90.0058 27.3081 89.0218ZM28.8081 88.3018H31.5321C31.5081 87.8778 31.3761 87.5458 31.1361 87.3058C30.9041 87.0658 30.5921 86.9458 30.2001 86.9458C29.8321 86.9458 29.5201 87.0658 29.2641 87.3058C29.0161 87.5458 28.8641 87.8778 28.8081 88.3018ZM34.0358 90.4738C34.0358 89.7058 34.3758 89.1498 35.0558 88.8058C35.7278 88.4538 36.6398 88.2218 37.7918 88.1098V87.9058C37.7918 87.2818 37.4278 86.9698 36.6998 86.9698C35.9478 86.9698 35.4758 87.3018 35.2838 87.9658L33.9518 87.6178C34.0158 87.1378 34.2958 86.7258 34.7918 86.3818C35.2878 86.0298 35.9238 85.8538 36.6998 85.8538C37.5238 85.8538 38.1518 86.0458 38.5838 86.4298C39.0238 86.8058 39.2438 87.3578 39.2438 88.0858V90.4978C39.2438 90.6498 39.2638 90.7498 39.3038 90.7978C39.3518 90.8378 39.4518 90.8578 39.6038 90.8578H40.1678V92.0098H39.0398C38.3838 92.0098 38.0238 91.7138 37.9598 91.1218C37.4878 91.8338 36.8158 92.1898 35.9438 92.1898C35.3838 92.1898 34.9238 92.0338 34.5638 91.7218C34.2118 91.4098 34.0358 90.9938 34.0358 90.4738ZM37.7918 89.5498V89.0698C37.0398 89.1498 36.4718 89.2898 36.0878 89.4898C35.7118 89.6818 35.5238 89.9618 35.5238 90.3298C35.5238 90.5698 35.5998 90.7578 35.7518 90.8938C35.9118 91.0218 36.1358 91.0858 36.4238 91.0858C36.8158 91.0858 37.1398 90.9538 37.3958 90.6898C37.6598 90.4178 37.7918 90.0378 37.7918 89.5498ZM41.1224 92.0098V86.0338H42.5504V86.9098C42.7264 86.5818 42.9704 86.3258 43.2824 86.1418C43.5944 85.9498 43.9464 85.8538 44.3384 85.8538C45.1624 85.8538 45.7544 86.2298 46.1144 86.9818C46.5784 86.2298 47.2464 85.8538 48.1184 85.8538C48.7584 85.8538 49.2544 86.0378 49.6064 86.4058C49.9584 86.7738 50.1344 87.3138 50.1344 88.0258V92.0098H48.6824V88.3618C48.6824 87.5058 48.3224 87.0778 47.6024 87.0778C47.2184 87.0778 46.9384 87.1858 46.7624 87.4018C46.5944 87.6018 46.4824 87.8298 46.4264 88.0858C46.3784 88.3338 46.3544 88.6578 46.3544 89.0578V92.0098H44.9144V88.3618C44.9144 87.5058 44.5544 87.0778 43.8344 87.0778C43.4664 87.0778 43.1904 87.1858 43.0064 87.4018C42.7264 87.7298 42.5864 88.2818 42.5864 89.0578V92.0098H41.1224Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2270"
                        x="0"
                        y="0.00878906"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2270"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2270"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2270"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2270"
                        x1="29.0005"
                        y1="18.0088"
                        x2="29.0005"
                        y2="48.0098"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2270">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.999)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_746_1751)">
                      <rect
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.25"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_746_1751)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_746_1751)">
                        <path
                          d="M43 32.9902C43 40.7223 36.7321 46.9902 29 46.9902C21.2679 46.9902 15 40.7223 15 32.9902C15 25.2582 21.2679 18.9902 29 18.9902C36.7321 18.9902 43 25.2582 43 32.9902Z"
                          fill="#D86437"
                        ></path>
                        <g clip-path="url(#clip1_746_1751)">
                          <path
                            d="M20.2785 36.0412L20.2539 31.0159C20.2539 31.0159 22.8991 31.9715 24.7048 32.0026L24.7343 35.223C24.7343 35.223 22.607 35.223 20.3349 36.0788M25.6384 31.9732L27.0947 31.9437L27.1242 35.223H25.6965L25.6384 31.9732ZM29.4552 32.6081L28.5143 33.6259L29.5157 34.6552L30.4427 33.5899L29.4552 32.6081ZM28.0275 29.5636L31.157 29.5489L31.1856 31.083H28.0716L28.0275 29.5636ZM32.1028 34.0636L29.8757 36.3055L30.968 37.383L33.0634 35.223L32.1028 34.0636ZM27.1225 24.0245L32.0799 24C32.0799 24 31.094 26.8145 31.0621 28.6465L28.0455 28.6612C28.0455 28.6612 27.9301 26.3866 27.0857 24.0818M37.7466 38.4196L34.2694 42C34.2694 42 32.9954 39.3065 31.7363 37.9925L33.8529 35.8137C33.8529 35.8137 35.5253 37.3347 37.7327 38.3517"
                            fill="black"
                          ></path>
                        </g>
                      </g>
                      <path
                        d="M15.4397 74.001V64.201H20.2837C21.3197 64.201 22.1363 64.439 22.7337 64.915C23.331 65.3816 23.6297 66.007 23.6297 66.791C23.6297 67.5656 23.3917 68.1863 22.9157 68.653C22.4397 69.1103 21.847 69.3996 21.1377 69.521C21.791 69.5863 22.2997 69.787 22.6637 70.123C23.037 70.459 23.2797 70.9676 23.3917 71.649L23.7977 74.001H21.5297L21.2357 71.831C21.1517 71.2616 20.9697 70.8603 20.6897 70.627C20.4097 70.3936 19.9617 70.277 19.3457 70.277H17.5677V74.001H15.4397ZM17.5677 68.555H19.8777C20.3537 68.555 20.727 68.443 20.9977 68.219C21.2777 67.995 21.4177 67.673 21.4177 67.253C21.4177 66.8423 21.2777 66.525 20.9977 66.301C20.727 66.077 20.3537 65.965 19.8777 65.965H17.5677V68.555ZM25.1398 71.719V67.001H27.1278V71.257C27.1278 72.1343 27.4778 72.573 28.1778 72.573C28.6445 72.573 28.9945 72.3863 29.2278 72.013C29.4611 71.6303 29.5778 71.1123 29.5778 70.459V67.001H31.5658V74.001H29.5778V72.881C29.0458 73.777 28.2851 74.225 27.2958 74.225C26.6425 74.225 26.1198 74.001 25.7278 73.553C25.3358 73.0956 25.1398 72.4843 25.1398 71.719ZM32.9073 72.195L34.7133 71.621C34.7693 71.873 34.9046 72.1343 35.1193 72.405C35.3246 72.6663 35.7213 72.797 36.3093 72.797C36.636 72.797 36.8926 72.7316 37.0793 72.601C37.2753 72.4703 37.3733 72.3023 37.3733 72.097C37.3733 71.901 37.308 71.747 37.1773 71.635C37.0466 71.5136 36.8226 71.4203 36.5053 71.355L35.5113 71.159C34.6993 71.0003 34.1066 70.7623 33.7333 70.445C33.3693 70.1276 33.1873 69.647 33.1873 69.003C33.1873 68.331 33.458 67.7943 33.9993 67.393C34.5406 66.9916 35.2733 66.791 36.1973 66.791C36.9626 66.791 37.5973 66.9496 38.1013 67.267C38.6146 67.5843 38.9646 67.9623 39.1513 68.401L37.5133 69.143C37.2706 68.4896 36.7993 68.163 36.0993 68.163C35.782 68.163 35.5346 68.2236 35.3573 68.345C35.1893 68.4663 35.1053 68.6296 35.1053 68.835C35.1053 69.031 35.1706 69.1803 35.3013 69.283C35.4413 69.3763 35.698 69.4556 36.0713 69.521L37.0373 69.703C38.6426 70.011 39.4453 70.739 39.4453 71.887C39.4453 72.5963 39.156 73.161 38.5773 73.581C37.9986 73.9916 37.2053 74.197 36.1973 74.197C35.3666 74.197 34.6433 74.015 34.0273 73.651C33.4206 73.287 33.0473 72.8016 32.9073 72.195ZM41.3187 72.167V68.513H39.8487V67.001H41.3187V64.803H43.3067V67.001H45.1267V68.513H43.3067V71.803C43.3067 72.0176 43.3533 72.1763 43.4467 72.279C43.5493 72.3723 43.708 72.419 43.9227 72.419H45.4347V74.001H43.0967C42.546 74.001 42.112 73.833 41.7947 73.497C41.4773 73.161 41.3187 72.7176 41.3187 72.167Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.415 89.709L15.891 89.145C16.027 89.673 16.279 90.097 16.647 90.417C17.023 90.729 17.507 90.885 18.099 90.885C18.659 90.885 19.083 90.781 19.371 90.573C19.659 90.357 19.803 90.065 19.803 89.697C19.803 89.089 19.323 88.701 18.363 88.533L17.295 88.353C16.479 88.209 15.863 87.941 15.447 87.549C15.039 87.157 14.835 86.609 14.835 85.905C14.835 85.193 15.119 84.601 15.687 84.129C16.263 83.657 17.031 83.421 17.991 83.421C18.895 83.421 19.631 83.625 20.199 84.033C20.767 84.433 21.143 84.937 21.327 85.545L19.875 86.109C19.587 85.181 18.943 84.717 17.943 84.717C17.455 84.717 17.079 84.821 16.815 85.029C16.559 85.237 16.431 85.505 16.431 85.833C16.431 86.385 16.827 86.733 17.619 86.877L18.711 87.069C19.567 87.213 20.231 87.497 20.703 87.921C21.183 88.345 21.423 88.897 21.423 89.577C21.423 90.353 21.131 90.981 20.547 91.461C19.971 91.941 19.147 92.181 18.075 92.181C17.083 92.181 16.271 91.953 15.639 91.497C15.015 91.041 14.607 90.445 14.415 89.709ZM23.406 90.477V87.165H22.11V86.025H23.406V84.153H24.87V86.025H26.454V87.165H24.87V90.249C24.87 90.617 25.054 90.801 25.422 90.801H26.694V92.001H24.918C24.438 92.001 24.066 91.869 23.802 91.605C23.538 91.333 23.406 90.957 23.406 90.477ZM27.3081 89.013C27.3081 88.077 27.5801 87.317 28.1241 86.733C28.6761 86.141 29.3681 85.845 30.2001 85.845C31.0481 85.845 31.7281 86.133 32.2401 86.709C32.7521 87.277 33.0081 88.013 33.0081 88.917C33.0081 89.045 33.0001 89.197 32.9841 89.373H28.7601C28.7841 89.925 28.9281 90.341 29.1921 90.621C29.4561 90.893 29.8041 91.029 30.2361 91.029C30.8921 91.029 31.3801 90.669 31.7001 89.949L33.0201 90.441C32.5561 91.601 31.6241 92.181 30.2241 92.181C29.3361 92.181 28.6281 91.901 28.1001 91.341C27.5721 90.773 27.3081 89.997 27.3081 89.013ZM28.8081 88.293H31.5321C31.5081 87.869 31.3761 87.537 31.1361 87.297C30.9041 87.057 30.5921 86.937 30.2001 86.937C29.8321 86.937 29.5201 87.057 29.2641 87.297C29.0161 87.537 28.8641 87.869 28.8081 88.293ZM34.0358 90.465C34.0358 89.697 34.3758 89.141 35.0558 88.797C35.7278 88.445 36.6398 88.213 37.7918 88.101V87.897C37.7918 87.273 37.4278 86.961 36.6998 86.961C35.9478 86.961 35.4758 87.293 35.2838 87.957L33.9518 87.609C34.0158 87.129 34.2958 86.717 34.7918 86.373C35.2878 86.021 35.9238 85.845 36.6998 85.845C37.5238 85.845 38.1518 86.037 38.5838 86.421C39.0238 86.797 39.2438 87.349 39.2438 88.077V90.489C39.2438 90.641 39.2638 90.741 39.3038 90.789C39.3518 90.829 39.4518 90.849 39.6038 90.849H40.1678V92.001H39.0398C38.3838 92.001 38.0238 91.705 37.9598 91.113C37.4878 91.825 36.8158 92.181 35.9438 92.181C35.3838 92.181 34.9238 92.025 34.5638 91.713C34.2118 91.401 34.0358 90.985 34.0358 90.465ZM37.7918 89.541V89.061C37.0398 89.141 36.4718 89.281 36.0878 89.481C35.7118 89.673 35.5238 89.953 35.5238 90.321C35.5238 90.561 35.5998 90.749 35.7518 90.885C35.9118 91.013 36.1358 91.077 36.4238 91.077C36.8158 91.077 37.1398 90.945 37.3958 90.681C37.6598 90.409 37.7918 90.029 37.7918 89.541ZM41.1224 92.001V86.025H42.5504V86.901C42.7264 86.573 42.9704 86.317 43.2824 86.133C43.5944 85.941 43.9464 85.845 44.3384 85.845C45.1624 85.845 45.7544 86.221 46.1144 86.973C46.5784 86.221 47.2464 85.845 48.1184 85.845C48.7584 85.845 49.2544 86.029 49.6064 86.397C49.9584 86.765 50.1344 87.305 50.1344 88.017V92.001H48.6824V88.353C48.6824 87.497 48.3224 87.069 47.6024 87.069C47.2184 87.069 46.9384 87.177 46.7624 87.393C46.5944 87.593 46.4824 87.821 46.4264 88.077C46.3784 88.325 46.3544 88.649 46.3544 89.049V92.001H44.9144V88.353C44.9144 87.497 44.5544 87.069 43.8344 87.069C43.4664 87.069 43.1904 87.177 43.0064 87.393C42.7264 87.721 42.5864 88.273 42.5864 89.049V92.001H41.1224Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_746_1751"
                        x="0"
                        y="0"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_746_1751"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_746_1751"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_746_1751"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_746_1751"
                        x1="29.0005"
                        y1="18"
                        x2="29.0005"
                        y2="48.001"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_746_1751">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.9902)"
                        ></rect>
                      </clipPath>
                      <clipPath id="clip1_746_1751">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(20 24)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">
                  Cryptocurrency
                </span>
                <div className="flex flex-wrap gap-2">
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2354)">
                      <rect
                        y="0.00976562"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0098"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2598"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2354)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2354)">
                        <path
                          d="M42.9695 33.0311C42.9695 40.7463 36.715 47.0005 29.0001 47.0005C21.2853 47.0005 15.0308 40.746 15.0308 33.0311C15.0308 25.3163 21.285 19.0618 29.0001 19.0618C36.715 19.0618 42.9695 25.316 42.9695 33.0311Z"
                          fill="#F7931A"
                        ></path>
                        <path
                          d="M35.2783 31.303C35.5496 29.4743 34.1583 28.4899 32.2508 27.8336L32.8677 25.353L31.3627 24.9768L30.7502 27.3918C30.3521 27.2911 29.9452 27.1993 29.5427 27.1074L30.1552 24.688L28.6458 24.3118L28.0289 26.788C27.7008 26.7136 27.3771 26.6393 27.0664 26.5605L24.9839 26.0399L24.5858 27.6499C24.5858 27.6499 25.7058 27.908 25.6796 27.9211C25.8883 27.9467 26.0788 28.0529 26.2103 28.217C26.3419 28.381 26.4041 28.59 26.3837 28.7994L26.3839 28.7964L25.6796 31.6227C25.7417 31.637 25.7945 31.6536 25.8452 31.6734L25.8371 31.6705L25.6796 31.6311L24.6908 35.5686C24.6692 35.6381 24.6339 35.7025 24.5871 35.7582C24.5403 35.8139 24.4829 35.8597 24.4182 35.893C24.3535 35.9263 24.2828 35.9464 24.2103 35.9521C24.1378 35.9578 24.0649 35.949 23.9958 35.9262L23.9996 35.9274L22.9014 35.6561L22.1533 37.3755L24.1177 37.8611L25.1939 38.1411L24.5683 40.648L26.0777 41.0243L26.6946 38.5436C27.1058 38.653 27.5039 38.758 27.8977 38.8543L27.2808 41.3261L28.7902 41.7024L29.4114 39.1999C31.9883 39.6855 33.9221 39.4886 34.7358 37.1611C35.3921 35.2886 34.7052 34.208 33.3489 33.5036C34.3377 33.2936 35.0771 32.6418 35.2783 31.303ZM31.8264 36.1374C31.3627 38.0143 28.2083 37.0124 27.1846 36.7455L28.0114 33.438C29.0352 33.6786 32.3164 34.1861 31.8264 36.1374ZM32.2946 31.2768C31.8571 32.983 29.2321 32.1124 28.3921 31.9024L29.1446 28.8924C29.9933 29.1024 32.7364 29.5005 32.2946 31.2768Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.4699 74.0107V64.2107H20.1599C21.2146 64.2107 22.0266 64.4254 22.5959 64.8547C23.1653 65.2747 23.4499 65.8487 23.4499 66.5767C23.4499 67.7247 22.8059 68.4947 21.5179 68.8867C22.1993 68.9987 22.7453 69.2787 23.1559 69.7267C23.5666 70.1654 23.7719 70.6834 23.7719 71.2807C23.7719 72.1114 23.4359 72.7741 22.7639 73.2687C22.0919 73.7634 21.2286 74.0107 20.1739 74.0107H15.4699ZM17.5979 68.0887H19.8379C20.8273 68.0887 21.3219 67.7341 21.3219 67.0247C21.3219 66.6514 21.1959 66.3854 20.9439 66.2267C20.7013 66.0587 20.3326 65.9747 19.8379 65.9747H17.5979V68.0887ZM17.5979 72.2467H19.8659C21.0046 72.2467 21.5739 71.8407 21.5739 71.0287C21.5739 70.2074 21.0046 69.7967 19.8659 69.7967H17.5979V72.2467ZM25.2384 66.0587V64.1827H27.3524V66.0587H25.2384ZM25.3084 74.0107V67.0107H27.2964V74.0107H25.3084ZM29.9193 72.1767V68.5227H28.4493V67.0107H29.9193V64.8127H31.9073V67.0107H33.7273V68.5227H31.9073V71.8127C31.9073 72.0274 31.9539 72.1861 32.0473 72.2887C32.1499 72.3821 32.3086 72.4287 32.5233 72.4287H34.0353V74.0107H31.6973C31.1466 74.0107 30.7126 73.8427 30.3953 73.5067C30.0779 73.1707 29.9193 72.7274 29.9193 72.1767ZM34.6355 70.4967C34.6355 69.4047 34.9948 68.5181 35.7135 67.8367C36.4322 67.1461 37.3282 66.8007 38.4015 66.8007C39.2042 66.8007 39.8995 66.9921 40.4875 67.3747C41.0755 67.7574 41.4908 68.2661 41.7335 68.9007L39.8995 69.5867C39.6102 68.7747 39.0875 68.3687 38.3315 68.3687C37.8368 68.3687 37.4308 68.5554 37.1135 68.9287C36.7962 69.3021 36.6375 69.8247 36.6375 70.4967C36.6375 71.1687 36.7962 71.6961 37.1135 72.0787C37.4402 72.4614 37.8508 72.6527 38.3455 72.6527C39.1108 72.6527 39.6522 72.2094 39.9695 71.3227L41.8455 71.9947C41.5748 72.6761 41.1315 73.2221 40.5155 73.6327C39.8995 74.0341 39.1902 74.2347 38.3875 74.2347C37.2955 74.2347 36.3948 73.8894 35.6855 73.1987C34.9855 72.5081 34.6355 71.6074 34.6355 70.4967ZM42.6199 70.5107C42.6199 69.4094 42.9652 68.5181 43.6559 67.8367C44.3465 67.1461 45.2285 66.8007 46.3019 66.8007C47.3845 66.8007 48.2665 67.1461 48.9479 67.8367C49.6386 68.5181 49.9839 69.4094 49.9839 70.5107C49.9839 71.6307 49.6432 72.5314 48.9619 73.2127C48.2805 73.8941 47.3939 74.2347 46.3019 74.2347C45.2472 74.2347 44.3699 73.8847 43.6699 73.1847C42.9699 72.4754 42.6199 71.5841 42.6199 70.5107ZM47.4779 72.1207C47.7672 71.7567 47.9119 71.2294 47.9119 70.5387C47.9119 69.8481 47.7672 69.3161 47.4779 68.9427C47.1979 68.5601 46.8059 68.3687 46.3019 68.3687C45.7979 68.3687 45.4012 68.5601 45.1119 68.9427C44.8319 69.3161 44.6919 69.8481 44.6919 70.5387C44.6919 71.2294 44.8319 71.7567 45.1119 72.1207C45.4012 72.4754 45.7979 72.6527 46.3019 72.6527C46.8059 72.6527 47.1979 72.4754 47.4779 72.1207ZM51.3517 66.0587V64.1827H53.4657V66.0587H51.3517ZM51.4217 74.0107V67.0107H53.4097V74.0107H51.4217ZM55.3185 74.0107V67.0107H57.2505V68.0887C57.7732 67.2301 58.5245 66.8007 59.5045 66.8007C60.2699 66.8007 60.8439 67.0201 61.2265 67.4587C61.6185 67.8974 61.8145 68.5181 61.8145 69.3207V74.0107H59.8265V69.7547C59.8265 68.8774 59.4532 68.4387 58.7065 68.4387C58.2865 68.4387 57.9739 68.5647 57.7685 68.8167C57.4605 69.1901 57.3065 69.8154 57.3065 70.6927V74.0107H55.3185Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.7747C14.6002 86.5507 14.9962 85.5187 15.8042 84.6787C16.6202 83.8307 17.6442 83.4147 18.8762 83.4307C19.8442 83.4307 20.6642 83.6707 21.3362 84.1507C22.0082 84.6307 22.4522 85.2387 22.6682 85.9747L21.2162 86.5147C20.8162 85.3467 20.0322 84.7627 18.8642 84.7627C18.0642 84.7627 17.4282 85.0307 16.9562 85.5667C16.4922 86.1027 16.2602 86.8347 16.2602 87.7627C16.2602 88.7147 16.4922 89.4667 16.9562 90.0187C17.4202 90.5707 18.0562 90.8467 18.8642 90.8467C20.0402 90.8467 20.8402 90.2467 21.2642 89.0467L22.6802 89.6107C22.4002 90.4187 21.9362 91.0507 21.2882 91.5067C20.6402 91.9627 19.8322 92.1907 18.8642 92.1907C17.6002 92.2067 16.5722 91.7947 15.7802 90.9547C14.9882 90.1067 14.6002 89.0467 14.6162 87.7747ZM23.929 92.0107V86.0347H25.369V87.3547C25.521 87.0027 25.761 86.6747 26.089 86.3707C26.409 86.0747 26.865 85.9267 27.457 85.9267C27.577 85.9267 27.709 85.9387 27.853 85.9627V87.4627C27.669 87.4307 27.453 87.4147 27.205 87.4147C26.573 87.4147 26.113 87.5787 25.825 87.9067C25.537 88.2347 25.393 88.7627 25.393 89.4907V92.0107H23.929ZM32.7846 86.0347H34.3086L31.8726 92.9107C31.6966 93.4307 31.4686 93.7987 31.1886 94.0147C30.9086 94.2387 30.5126 94.3507 30.0006 94.3507H28.4406V93.1387H29.8446C30.0606 93.1387 30.2246 93.0907 30.3366 92.9947C30.4566 92.9067 30.5606 92.7467 30.6486 92.5147L30.8286 91.9627L28.0446 86.0347H29.6286L30.7326 88.6027L31.4166 90.1987C31.6486 89.4947 31.8246 88.9587 31.9446 88.5907L32.7846 86.0347ZM35.4134 94.3507V86.0347H36.8414V86.8747C37.0334 86.5787 37.2974 86.3347 37.6334 86.1427C37.9774 85.9427 38.3654 85.8427 38.7974 85.8427C39.5574 85.8427 40.1694 86.1347 40.6334 86.7187C41.1054 87.3027 41.3414 88.0667 41.3414 89.0107C41.3414 89.9707 41.1054 90.7427 40.6334 91.3267C40.1694 91.9027 39.5574 92.1907 38.7974 92.1907C38.3654 92.1907 37.9814 92.0947 37.6454 91.9027C37.3174 91.7107 37.0614 91.4667 36.8774 91.1707V92.2507V94.3507H35.4134ZM39.8054 89.0107C39.8054 87.6667 39.3094 86.9947 38.3174 86.9947C37.8614 86.9947 37.4934 87.1707 37.2134 87.5227C36.9414 87.8747 36.8054 88.3707 36.8054 89.0107C36.8054 89.6667 36.9414 90.1707 37.2134 90.5227C37.4934 90.8667 37.8614 91.0387 38.3174 91.0387C39.3094 91.0387 39.8054 90.3627 39.8054 89.0107ZM43.1735 90.4867V87.1747H41.8775V86.0347H43.1735V84.1627H44.6375V86.0347H46.2215V87.1747H44.6375V90.2587C44.6375 90.6267 44.8215 90.8107 45.1895 90.8107H46.4615V92.0107H44.6855C44.2055 92.0107 43.8335 91.8787 43.5695 91.6147C43.3055 91.3427 43.1735 90.9667 43.1735 90.4867ZM47.0637 89.0227C47.0637 88.0947 47.3437 87.3347 47.9037 86.7427C48.4717 86.1507 49.1957 85.8547 50.0757 85.8547C50.9557 85.8547 51.6757 86.1507 52.2357 86.7427C52.8037 87.3347 53.0877 88.0947 53.0877 89.0227C53.0877 89.9587 52.8037 90.7227 52.2357 91.3147C51.6677 91.8987 50.9477 92.1907 50.0757 92.1907C49.2117 92.1907 48.4917 91.8907 47.9157 91.2907C47.3477 90.6907 47.0637 89.9347 47.0637 89.0227ZM51.5757 89.0467C51.5757 88.4067 51.4357 87.9147 51.1557 87.5707C50.8837 87.2187 50.5237 87.0427 50.0757 87.0427C49.6117 87.0427 49.2437 87.2187 48.9717 87.5707C48.7077 87.9147 48.5757 88.4067 48.5757 89.0467C48.5757 89.6787 48.7077 90.1627 48.9717 90.4987C49.2437 90.8347 49.6117 91.0027 50.0757 91.0027C50.5397 91.0027 50.9037 90.8347 51.1677 90.4987C51.4397 90.1627 51.5757 89.6787 51.5757 89.0467ZM54.0246 89.0107C54.0246 88.0827 54.3166 87.3267 54.9006 86.7427C55.4846 86.1507 56.2166 85.8547 57.0966 85.8547C57.7686 85.8547 58.3406 86.0187 58.8126 86.3467C59.2926 86.6747 59.6246 87.1027 59.8086 87.6307L58.4646 88.1107C58.2086 87.3987 57.7406 87.0427 57.0606 87.0427C56.6046 87.0427 56.2326 87.2147 55.9446 87.5587C55.6566 87.9027 55.5126 88.3867 55.5126 89.0107C55.5126 89.6427 55.6566 90.1347 55.9446 90.4867C56.2406 90.8307 56.6166 91.0027 57.0726 91.0027C57.7926 91.0027 58.2846 90.5987 58.5486 89.7907L59.9286 90.2827C59.7046 90.8667 59.3446 91.3307 58.8486 91.6747C58.3606 92.0187 57.7766 92.1907 57.0966 92.1907C56.1926 92.1907 55.4526 91.8987 54.8766 91.3147C54.3086 90.7307 54.0246 89.9627 54.0246 89.0107ZM61.0172 90.0187V86.0347H62.4812V89.6707C62.4812 90.5347 62.8252 90.9667 63.5132 90.9667C64.0252 90.9667 64.3772 90.7627 64.5692 90.3547C64.7692 89.9547 64.8692 89.4507 64.8692 88.8427V86.0347H66.3332V92.0107H64.8812V91.0267C64.4252 91.8027 63.7692 92.1907 62.9132 92.1907C62.3052 92.1907 61.8372 91.9987 61.5092 91.6147C61.1812 91.2227 61.0172 90.6907 61.0172 90.0187ZM68.1087 92.0107V86.0347H69.5487V87.3547C69.7007 87.0027 69.9407 86.6747 70.2687 86.3707C70.5887 86.0747 71.0447 85.9267 71.6367 85.9267C71.7567 85.9267 71.8887 85.9387 72.0327 85.9627V87.4627C71.8487 87.4307 71.6327 87.4147 71.3847 87.4147C70.7527 87.4147 70.2927 87.5787 70.0047 87.9067C69.7167 88.2347 69.5727 88.7627 69.5727 89.4907V92.0107H68.1087ZM73.1243 92.0107V86.0347H74.5643V87.3547C74.7163 87.0027 74.9563 86.6747 75.2843 86.3707C75.6043 86.0747 76.0603 85.9267 76.6523 85.9267C76.7723 85.9267 76.9043 85.9387 77.0483 85.9627V87.4627C76.8643 87.4307 76.6483 87.4147 76.4003 87.4147C75.7683 87.4147 75.3083 87.5787 75.0203 87.9067C74.7323 88.2347 74.5883 88.7627 74.5883 89.4907V92.0107H73.1243ZM77.521 89.0227C77.521 88.0867 77.793 87.3267 78.337 86.7427C78.889 86.1507 79.581 85.8547 80.413 85.8547C81.261 85.8547 81.941 86.1427 82.453 86.7187C82.965 87.2867 83.221 88.0227 83.221 88.9267C83.221 89.0547 83.213 89.2067 83.197 89.3827H78.973C78.997 89.9347 79.141 90.3507 79.405 90.6307C79.669 90.9027 80.017 91.0387 80.449 91.0387C81.105 91.0387 81.593 90.6787 81.913 89.9587L83.233 90.4507C82.769 91.6107 81.837 92.1907 80.437 92.1907C79.549 92.1907 78.841 91.9107 78.313 91.3507C77.785 90.7827 77.521 90.0067 77.521 89.0227ZM79.021 88.3027H81.745C81.721 87.8787 81.589 87.5467 81.349 87.3067C81.117 87.0667 80.805 86.9467 80.413 86.9467C80.045 86.9467 79.733 87.0667 79.477 87.3067C79.229 87.5467 79.077 87.8787 79.021 88.3027ZM84.6087 92.0107V86.0347H86.0367V86.9827C86.2047 86.6707 86.4527 86.4067 86.7807 86.1907C87.1087 85.9667 87.5047 85.8547 87.9687 85.8547C89.3127 85.8547 89.9847 86.5827 89.9847 88.0387V92.0107H88.5207V88.3627C88.5207 87.5067 88.1607 87.0787 87.4407 87.0787C87.0247 87.0787 86.7167 87.2027 86.5167 87.4507C86.2207 87.8107 86.0727 88.4187 86.0727 89.2747V92.0107H84.6087ZM91.2785 89.0107C91.2785 88.0827 91.5705 87.3267 92.1545 86.7427C92.7385 86.1507 93.4705 85.8547 94.3505 85.8547C95.0225 85.8547 95.5945 86.0187 96.0665 86.3467C96.5465 86.6747 96.8785 87.1027 97.0625 87.6307L95.7185 88.1107C95.4625 87.3987 94.9945 87.0427 94.3145 87.0427C93.8585 87.0427 93.4865 87.2147 93.1985 87.5587C92.9105 87.9027 92.7665 88.3867 92.7665 89.0107C92.7665 89.6427 92.9105 90.1347 93.1985 90.4867C93.4945 90.8307 93.8705 91.0027 94.3265 91.0027C95.0465 91.0027 95.5385 90.5987 95.8025 89.7907L97.1825 90.2827C96.9585 90.8667 96.5985 91.3307 96.1025 91.6747C95.6145 92.0187 95.0305 92.1907 94.3505 92.1907C93.4465 92.1907 92.7065 91.8987 92.1305 91.3147C91.5625 90.7307 91.2785 89.9627 91.2785 89.0107ZM102.183 86.0347H103.707L101.271 92.9107C101.095 93.4307 100.867 93.7987 100.587 94.0147C100.307 94.2387 99.9111 94.3507 99.3991 94.3507H97.8391V93.1387H99.2431C99.4591 93.1387 99.6231 93.0907 99.7351 92.9947C99.8551 92.9067 99.9591 92.7467 100.047 92.5147L100.227 91.9627L97.4431 86.0347H99.0271L100.131 88.6027L100.815 90.1987C101.047 89.4947 101.223 88.9587 101.343 88.5907L102.183 86.0347Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2354"
                        x="0"
                        y="0.00976562"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2354"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2354"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2354"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2354"
                        x1="29.0005"
                        y1="18.0098"
                        x2="29.0005"
                        y2="48.0107"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2354">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.001)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_390_6050)">
                      <rect
                        y="0.000976562"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.001"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.251"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_390_6050)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_390_6050)">
                        <path
                          d="M43 32.9922C43 40.7243 36.7321 46.9922 29 46.9922C21.2679 46.9922 15 40.7243 15 32.9922C15 25.2601 21.2679 18.9922 29 18.9922C36.7321 18.9922 43 25.2601 43 32.9922Z"
                          fill="#627EEA"
                        ></path>
                        <path
                          opacity="0.6"
                          d="M29.4375 22.4922V30.2534L36 33.1847L29.4375 22.4922Z"
                          fill="white"
                        ></path>
                        <path
                          d="M29.4375 22.4922L22.875 33.1847L29.4375 30.2534V22.4922Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.6"
                          d="M29.4375 38.2159V43.4921L36 34.4053L29.4375 38.2159Z"
                          fill="white"
                        ></path>
                        <path
                          d="M29.4375 43.4921V38.2115L22.875 34.4053L29.4375 43.4921Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.2"
                          d="M29.4375 36.995L36 33.1844L29.4375 30.2532V36.995Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.6"
                          d="M22.875 33.1844L29.4375 36.995V30.2532L22.875 33.1844Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.261 74.002V64.202H22.667V65.966H17.389V68.094H21.379V69.83H17.389V72.238H22.667V74.002H15.261ZM24.597 72.168V68.514H23.127V67.002H24.597V64.804H26.585V67.002H28.405V68.514H26.585V71.804C26.585 72.0186 26.6317 72.1773 26.725 72.28C26.8277 72.3733 26.9863 72.42 27.201 72.42H28.713V74.002H26.375C25.8243 74.002 25.3903 73.834 25.073 73.498C24.7557 73.162 24.597 72.7186 24.597 72.168ZM29.9806 74.002V64.202H31.9686V66.736V68.08C32.5006 67.2213 33.2613 66.792 34.2506 66.792C34.988 66.792 35.5433 67.0113 35.9166 67.45C36.29 67.8886 36.4766 68.5093 36.4766 69.312V74.002H34.4886V69.746C34.4886 68.8686 34.1153 68.43 33.3686 68.43C32.9486 68.43 32.636 68.556 32.4306 68.808C32.1226 69.1813 31.9686 69.8066 31.9686 70.684V74.002H29.9806ZM37.8722 70.488C37.8722 69.4146 38.2082 68.5326 38.8802 67.842C39.5522 67.142 40.3968 66.792 41.4142 66.792C42.4688 66.792 43.2995 67.1373 43.9062 67.828C44.5128 68.5186 44.8162 69.41 44.8162 70.502C44.8162 70.7166 44.8115 70.8753 44.8022 70.978H39.8602C39.8882 71.5473 40.0422 71.9813 40.3222 72.28C40.6022 72.5693 40.9708 72.714 41.4282 72.714C42.1562 72.714 42.6975 72.308 43.0522 71.496L44.8302 72.182C44.5875 72.742 44.1955 73.2273 43.6542 73.638C43.1222 74.03 42.3802 74.226 41.4282 74.226C40.3548 74.226 39.4915 73.89 38.8382 73.218C38.1942 72.5366 37.8722 71.6266 37.8722 70.488ZM39.9302 69.578H42.8422C42.7395 68.6726 42.2635 68.22 41.4142 68.22C41.0128 68.22 40.6815 68.3366 40.4202 68.57C40.1588 68.8033 39.9955 69.1393 39.9302 69.578ZM46.3185 74.002V67.002H48.2645V68.598C48.4419 68.1593 48.7265 67.758 49.1185 67.394C49.5199 67.0393 50.0845 66.862 50.8125 66.862C50.9805 66.862 51.0879 66.8666 51.1345 66.876V68.92C50.8639 68.892 50.6072 68.878 50.3645 68.878C49.6272 68.878 49.0999 69.0506 48.7825 69.396C48.4652 69.732 48.3065 70.3293 48.3065 71.188V74.002H46.3185ZM51.5987 70.488C51.5987 69.4146 51.9347 68.5326 52.6067 67.842C53.2787 67.142 54.1234 66.792 55.1407 66.792C56.1954 66.792 57.0261 67.1373 57.6327 67.828C58.2394 68.5186 58.5427 69.41 58.5427 70.502C58.5427 70.7166 58.5381 70.8753 58.5287 70.978H53.5867C53.6147 71.5473 53.7687 71.9813 54.0487 72.28C54.3287 72.5693 54.6974 72.714 55.1547 72.714C55.8827 72.714 56.4241 72.308 56.7787 71.496L58.5567 72.182C58.3141 72.742 57.9221 73.2273 57.3807 73.638C56.8487 74.03 56.1067 74.226 55.1547 74.226C54.0814 74.226 53.2181 73.89 52.5647 73.218C51.9207 72.5366 51.5987 71.6266 51.5987 70.488ZM53.6567 69.578H56.5687C56.4661 68.6726 55.9901 68.22 55.1407 68.22C54.7394 68.22 54.4081 68.3366 54.1467 68.57C53.8854 68.8033 53.7221 69.1393 53.6567 69.578ZM59.9611 71.72V67.002H61.9491V71.258C61.9491 72.1353 62.2991 72.574 62.9991 72.574C63.4658 72.574 63.8158 72.3873 64.0491 72.014C64.2824 71.6313 64.3991 71.1133 64.3991 70.46V67.002H66.3871V74.002H64.3991V72.882C63.8671 73.778 63.1064 74.226 62.1171 74.226C61.4638 74.226 60.9411 74.002 60.5491 73.554C60.1571 73.0966 59.9611 72.4853 59.9611 71.72ZM68.3166 74.002V67.002H70.2486V68.01C70.6873 67.198 71.3873 66.792 72.3486 66.792C73.2073 66.792 73.8746 67.198 74.3506 68.01C74.9199 67.198 75.7039 66.792 76.7026 66.792C77.4213 66.792 77.9859 67.0066 78.3966 67.436C78.8073 67.856 79.0126 68.486 79.0126 69.326V74.002H77.0246V69.746C77.0246 68.8686 76.6606 68.43 75.9326 68.43C75.6526 68.4393 75.4193 68.5 75.2326 68.612C75.0459 68.724 74.9106 68.8873 74.8266 69.102C74.7519 69.3073 74.7006 69.508 74.6726 69.704C74.6539 69.9 74.6446 70.1426 74.6446 70.432V74.002H72.6846V69.746C72.6846 68.8686 72.3206 68.43 71.5926 68.43C71.3126 68.4393 71.0793 68.5 70.8926 68.612C70.7059 68.724 70.5706 68.8873 70.4866 69.102C70.4119 69.3073 70.3606 69.508 70.3326 69.704C70.3139 69.9 70.3046 70.1426 70.3046 70.432V74.002H68.3166Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.766C14.6002 86.542 14.9962 85.51 15.8042 84.67C16.6202 83.822 17.6442 83.406 18.8762 83.422C19.8442 83.422 20.6642 83.662 21.3362 84.142C22.0082 84.622 22.4522 85.23 22.6682 85.966L21.2162 86.506C20.8162 85.338 20.0322 84.754 18.8642 84.754C18.0642 84.754 17.4282 85.022 16.9562 85.558C16.4922 86.094 16.2602 86.826 16.2602 87.754C16.2602 88.706 16.4922 89.458 16.9562 90.01C17.4202 90.562 18.0562 90.838 18.8642 90.838C20.0402 90.838 20.8402 90.238 21.2642 89.038L22.6802 89.602C22.4002 90.41 21.9362 91.042 21.2882 91.498C20.6402 91.954 19.8322 92.182 18.8642 92.182C17.6002 92.198 16.5722 91.786 15.7802 90.946C14.9882 90.098 14.6002 89.038 14.6162 87.766ZM23.929 92.002V86.026H25.369V87.346C25.521 86.994 25.761 86.666 26.089 86.362C26.409 86.066 26.865 85.918 27.457 85.918C27.577 85.918 27.709 85.93 27.853 85.954V87.454C27.669 87.422 27.453 87.406 27.205 87.406C26.573 87.406 26.113 87.57 25.825 87.898C25.537 88.226 25.393 88.754 25.393 89.482V92.002H23.929ZM32.7846 86.026H34.3086L31.8726 92.902C31.6966 93.422 31.4686 93.79 31.1886 94.006C30.9086 94.23 30.5126 94.342 30.0006 94.342H28.4406V93.13H29.8446C30.0606 93.13 30.2246 93.082 30.3366 92.986C30.4566 92.898 30.5606 92.738 30.6486 92.506L30.8286 91.954L28.0446 86.026H29.6286L30.7326 88.594L31.4166 90.19C31.6486 89.486 31.8246 88.95 31.9446 88.582L32.7846 86.026ZM35.4134 94.342V86.026H36.8414V86.866C37.0334 86.57 37.2974 86.326 37.6334 86.134C37.9774 85.934 38.3654 85.834 38.7974 85.834C39.5574 85.834 40.1694 86.126 40.6334 86.71C41.1054 87.294 41.3414 88.058 41.3414 89.002C41.3414 89.962 41.1054 90.734 40.6334 91.318C40.1694 91.894 39.5574 92.182 38.7974 92.182C38.3654 92.182 37.9814 92.086 37.6454 91.894C37.3174 91.702 37.0614 91.458 36.8774 91.162V92.242V94.342H35.4134ZM39.8054 89.002C39.8054 87.658 39.3094 86.986 38.3174 86.986C37.8614 86.986 37.4934 87.162 37.2134 87.514C36.9414 87.866 36.8054 88.362 36.8054 89.002C36.8054 89.658 36.9414 90.162 37.2134 90.514C37.4934 90.858 37.8614 91.03 38.3174 91.03C39.3094 91.03 39.8054 90.354 39.8054 89.002ZM43.1735 90.478V87.166H41.8775V86.026H43.1735V84.154H44.6375V86.026H46.2215V87.166H44.6375V90.25C44.6375 90.618 44.8215 90.802 45.1895 90.802H46.4615V92.002H44.6855C44.2055 92.002 43.8335 91.87 43.5695 91.606C43.3055 91.334 43.1735 90.958 43.1735 90.478ZM47.0637 89.014C47.0637 88.086 47.3437 87.326 47.9037 86.734C48.4717 86.142 49.1957 85.846 50.0757 85.846C50.9557 85.846 51.6757 86.142 52.2357 86.734C52.8037 87.326 53.0877 88.086 53.0877 89.014C53.0877 89.95 52.8037 90.714 52.2357 91.306C51.6677 91.89 50.9477 92.182 50.0757 92.182C49.2117 92.182 48.4917 91.882 47.9157 91.282C47.3477 90.682 47.0637 89.926 47.0637 89.014ZM51.5757 89.038C51.5757 88.398 51.4357 87.906 51.1557 87.562C50.8837 87.21 50.5237 87.034 50.0757 87.034C49.6117 87.034 49.2437 87.21 48.9717 87.562C48.7077 87.906 48.5757 88.398 48.5757 89.038C48.5757 89.67 48.7077 90.154 48.9717 90.49C49.2437 90.826 49.6117 90.994 50.0757 90.994C50.5397 90.994 50.9037 90.826 51.1677 90.49C51.4397 90.154 51.5757 89.67 51.5757 89.038ZM54.0246 89.002C54.0246 88.074 54.3166 87.318 54.9006 86.734C55.4846 86.142 56.2166 85.846 57.0966 85.846C57.7686 85.846 58.3406 86.01 58.8126 86.338C59.2926 86.666 59.6246 87.094 59.8086 87.622L58.4646 88.102C58.2086 87.39 57.7406 87.034 57.0606 87.034C56.6046 87.034 56.2326 87.206 55.9446 87.55C55.6566 87.894 55.5126 88.378 55.5126 89.002C55.5126 89.634 55.6566 90.126 55.9446 90.478C56.2406 90.822 56.6166 90.994 57.0726 90.994C57.7926 90.994 58.2846 90.59 58.5486 89.782L59.9286 90.274C59.7046 90.858 59.3446 91.322 58.8486 91.666C58.3606 92.01 57.7766 92.182 57.0966 92.182C56.1926 92.182 55.4526 91.89 54.8766 91.306C54.3086 90.722 54.0246 89.954 54.0246 89.002ZM61.0172 90.01V86.026H62.4812V89.662C62.4812 90.526 62.8252 90.958 63.5132 90.958C64.0252 90.958 64.3772 90.754 64.5692 90.346C64.7692 89.946 64.8692 89.442 64.8692 88.834V86.026H66.3332V92.002H64.8812V91.018C64.4252 91.794 63.7692 92.182 62.9132 92.182C62.3052 92.182 61.8372 91.99 61.5092 91.606C61.1812 91.214 61.0172 90.682 61.0172 90.01ZM68.1087 92.002V86.026H69.5487V87.346C69.7007 86.994 69.9407 86.666 70.2687 86.362C70.5887 86.066 71.0447 85.918 71.6367 85.918C71.7567 85.918 71.8887 85.93 72.0327 85.954V87.454C71.8487 87.422 71.6327 87.406 71.3847 87.406C70.7527 87.406 70.2927 87.57 70.0047 87.898C69.7167 88.226 69.5727 88.754 69.5727 89.482V92.002H68.1087ZM73.1243 92.002V86.026H74.5643V87.346C74.7163 86.994 74.9563 86.666 75.2843 86.362C75.6043 86.066 76.0603 85.918 76.6523 85.918C76.7723 85.918 76.9043 85.93 77.0483 85.954V87.454C76.8643 87.422 76.6483 87.406 76.4003 87.406C75.7683 87.406 75.3083 87.57 75.0203 87.898C74.7323 88.226 74.5883 88.754 74.5883 89.482V92.002H73.1243ZM77.521 89.014C77.521 88.078 77.793 87.318 78.337 86.734C78.889 86.142 79.581 85.846 80.413 85.846C81.261 85.846 81.941 86.134 82.453 86.71C82.965 87.278 83.221 88.014 83.221 88.918C83.221 89.046 83.213 89.198 83.197 89.374H78.973C78.997 89.926 79.141 90.342 79.405 90.622C79.669 90.894 80.017 91.03 80.449 91.03C81.105 91.03 81.593 90.67 81.913 89.95L83.233 90.442C82.769 91.602 81.837 92.182 80.437 92.182C79.549 92.182 78.841 91.902 78.313 91.342C77.785 90.774 77.521 89.998 77.521 89.014ZM79.021 88.294H81.745C81.721 87.87 81.589 87.538 81.349 87.298C81.117 87.058 80.805 86.938 80.413 86.938C80.045 86.938 79.733 87.058 79.477 87.298C79.229 87.538 79.077 87.87 79.021 88.294ZM84.6087 92.002V86.026H86.0367V86.974C86.2047 86.662 86.4527 86.398 86.7807 86.182C87.1087 85.958 87.5047 85.846 87.9687 85.846C89.3127 85.846 89.9847 86.574 89.9847 88.03V92.002H88.5207V88.354C88.5207 87.498 88.1607 87.07 87.4407 87.07C87.0247 87.07 86.7167 87.194 86.5167 87.442C86.2207 87.802 86.0727 88.41 86.0727 89.266V92.002H84.6087ZM91.2785 89.002C91.2785 88.074 91.5705 87.318 92.1545 86.734C92.7385 86.142 93.4705 85.846 94.3505 85.846C95.0225 85.846 95.5945 86.01 96.0665 86.338C96.5465 86.666 96.8785 87.094 97.0625 87.622L95.7185 88.102C95.4625 87.39 94.9945 87.034 94.3145 87.034C93.8585 87.034 93.4865 87.206 93.1985 87.55C92.9105 87.894 92.7665 88.378 92.7665 89.002C92.7665 89.634 92.9105 90.126 93.1985 90.478C93.4945 90.822 93.8705 90.994 94.3265 90.994C95.0465 90.994 95.5385 90.59 95.8025 89.782L97.1825 90.274C96.9585 90.858 96.5985 91.322 96.1025 91.666C95.6145 92.01 95.0305 92.182 94.3505 92.182C93.4465 92.182 92.7065 91.89 92.1305 91.306C91.5625 90.722 91.2785 89.954 91.2785 89.002ZM102.183 86.026H103.707L101.271 92.902C101.095 93.422 100.867 93.79 100.587 94.006C100.307 94.23 99.9111 94.342 99.3991 94.342H97.8391V93.13H99.2431C99.4591 93.13 99.6231 93.082 99.7351 92.986C99.8551 92.898 99.9591 92.738 100.047 92.506L100.227 91.954L97.4431 86.026H99.0271L100.131 88.594L100.815 90.19C101.047 89.486 101.223 88.95 101.343 88.582L102.183 86.026Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_390_6050"
                        x="0"
                        y="0.000976562"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_390_6050"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_390_6050"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_390_6050"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_390_6050"
                        x1="29.0005"
                        y1="18.001"
                        x2="29.0005"
                        y2="48.002"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_390_6050">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.9922)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_390_6064)">
                      <rect
                        y="0.000976562"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.001"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.251"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_390_6064)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_390_6064)">
                        <path
                          d="M29 46.9912C36.7321 46.9912 43 40.7233 43 32.9912C43 25.2591 36.7321 18.9912 29 18.9912C21.2679 18.9912 15 25.2591 15 32.9912C15 40.7233 21.2679 46.9912 29 46.9912Z"
                          fill="#0F97F8"
                        ></path>
                        <path
                          d="M26.0126 44.0624C26.0126 44.4357 25.7093 44.6457 25.3593 44.5407C20.5176 43.0007 17.0293 38.4857 17.0293 33.1307C17.0293 27.7757 20.5176 23.2724 25.3593 21.7324C25.721 21.6157 26.0126 21.8374 26.0126 22.2107V23.144C26.0126 23.389 25.826 23.6807 25.5926 23.7624C21.766 25.174 19.036 28.849 19.036 33.1307C19.036 37.4124 21.766 41.099 25.5926 42.4874C25.826 42.569 26.0126 42.8607 26.0126 43.1057V44.0624Z"
                          fill="white"
                        ></path>
                        <path
                          d="M29.9914 40.6095C29.9914 40.8895 29.7697 41.1111 29.4897 41.1111H28.498C28.218 41.1111 27.9964 40.8895 27.9964 40.6095V39.0345C25.8147 38.7311 24.753 37.5295 24.473 35.8611C24.4264 35.5695 24.648 35.3245 24.9397 35.3245H26.0714C26.3047 35.3245 26.503 35.4995 26.5614 35.7211C26.7714 36.7011 27.343 37.4711 29.093 37.4711C30.3764 37.4711 31.298 36.7478 31.298 35.6745C31.298 34.6011 30.7614 34.1928 28.8714 33.8778C26.083 33.5045 24.753 32.6528 24.753 30.4711C24.753 28.7911 26.0364 27.4611 28.008 27.1928V25.6528C28.008 25.3728 28.2297 25.1511 28.5097 25.1511H29.5014C29.7814 25.1511 30.003 25.3728 30.003 25.6528V27.2395C31.613 27.5311 32.628 28.4411 32.9664 29.9578C33.0247 30.2495 32.803 30.5061 32.4997 30.5061H31.4497C31.228 30.5061 31.0414 30.3545 30.9714 30.1445C30.6797 29.1878 30.003 28.7561 28.8014 28.7561C27.483 28.7561 26.7947 29.3861 26.7947 30.2845C26.7947 31.2295 27.1797 31.7078 29.2097 31.9878C31.9514 32.3611 33.3747 33.1428 33.3747 35.4761C33.3747 37.2495 32.0564 38.6845 29.9914 38.9995V40.5978H29.9797L29.9914 40.6095Z"
                          fill="white"
                        ></path>
                        <path
                          d="M32.6397 44.5408C32.278 44.6575 31.9863 44.4358 31.9863 44.0625V43.1291C31.9863 42.8491 32.1497 42.5925 32.4063 42.5108C36.2213 41.1108 38.963 37.4358 38.963 33.1541C38.963 28.8725 36.233 25.1858 32.4063 23.7975C32.173 23.7158 31.9863 23.4241 31.9863 23.1791V22.2458C31.9863 21.8725 32.2897 21.6625 32.6397 21.7675C37.4813 23.2841 40.9697 27.8108 40.9697 33.1541C40.9697 38.4975 37.4813 43.0125 32.6397 44.5641V44.5408Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.2076 70.18V64.202H17.3356V69.844C17.3356 70.684 17.5269 71.3233 17.9096 71.762C18.2922 72.1913 18.8569 72.406 19.6036 72.406C21.1156 72.406 21.8716 71.552 21.8716 69.844V64.202H23.9996V70.18C23.9996 71.4213 23.5936 72.406 22.7816 73.134C21.9696 73.862 20.9102 74.226 19.6036 74.226C18.2689 74.226 17.2002 73.862 16.3976 73.134C15.6042 72.406 15.2076 71.4213 15.2076 70.18ZM25.4594 71.202L27.4614 70.53C27.5827 71.0993 27.8534 71.5753 28.2734 71.958C28.6934 72.3406 29.2487 72.532 29.9394 72.532C30.574 72.532 31.05 72.42 31.3674 72.196C31.694 71.972 31.8574 71.664 31.8574 71.272C31.8574 70.628 31.3254 70.2266 30.2614 70.068L29.0434 69.9C26.9807 69.6106 25.9494 68.6306 25.9494 66.96C25.9494 66.1106 26.2947 65.4013 26.9854 64.832C27.6854 64.2626 28.6327 63.978 29.8274 63.978C30.966 63.978 31.8807 64.2206 32.5714 64.706C33.262 65.182 33.7287 65.812 33.9714 66.596L32.0114 67.282C31.666 66.2086 30.938 65.672 29.8274 65.672C29.2767 65.672 28.8614 65.784 28.5814 66.008C28.3014 66.232 28.1614 66.5213 28.1614 66.876C28.1614 67.4546 28.5814 67.8046 29.4214 67.926L30.6394 68.094C31.7314 68.2433 32.5761 68.5746 33.1734 69.088C33.7707 69.6013 34.0694 70.2826 34.0694 71.132C34.0694 72.0373 33.7147 72.7793 33.0054 73.358C32.296 73.9366 31.274 74.226 29.9394 74.226C28.6887 74.226 27.6807 73.946 26.9154 73.386C26.15 72.826 25.6647 72.098 25.4594 71.202ZM35.8274 74.002V64.202H39.5234C40.97 64.1833 42.1974 64.622 43.2054 65.518C44.2227 66.414 44.722 67.5853 44.7034 69.032C44.722 70.516 44.2227 71.72 43.2054 72.644C42.1974 73.568 40.97 74.0206 39.5234 74.002H35.8274ZM37.9554 72.238H39.4254C41.4787 72.238 42.5054 71.1833 42.5054 69.074C42.5054 68.1126 42.2487 67.3566 41.7354 66.806C41.222 66.246 40.48 65.966 39.5094 65.966H37.9554V72.238ZM45.8621 69.088C45.8434 67.6506 46.3194 66.4373 47.2901 65.448C48.2701 64.4493 49.4928 63.9593 50.9581 63.978C52.0874 63.978 53.0534 64.258 53.8561 64.818C54.6681 65.3686 55.2094 66.0966 55.4801 67.002L53.5621 67.744C53.0954 66.4093 52.2181 65.742 50.9301 65.742C50.0434 65.742 49.3481 66.036 48.8441 66.624C48.3401 67.212 48.0881 68.0333 48.0881 69.088C48.0881 70.152 48.3354 70.978 48.8301 71.566C49.3341 72.154 50.0341 72.448 50.9301 72.448C52.2368 72.448 53.1328 71.776 53.6181 70.432L55.4941 71.188C55.1301 72.168 54.5608 72.9193 53.7861 73.442C53.0208 73.9646 52.0688 74.226 50.9301 74.226C49.4181 74.226 48.1954 73.7453 47.2621 72.784C46.3288 71.8226 45.8621 70.5906 45.8621 69.088Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.766C14.6002 86.542 14.9962 85.51 15.8042 84.67C16.6202 83.822 17.6442 83.406 18.8762 83.422C19.8442 83.422 20.6642 83.662 21.3362 84.142C22.0082 84.622 22.4522 85.23 22.6682 85.966L21.2162 86.506C20.8162 85.338 20.0322 84.754 18.8642 84.754C18.0642 84.754 17.4282 85.022 16.9562 85.558C16.4922 86.094 16.2602 86.826 16.2602 87.754C16.2602 88.706 16.4922 89.458 16.9562 90.01C17.4202 90.562 18.0562 90.838 18.8642 90.838C20.0402 90.838 20.8402 90.238 21.2642 89.038L22.6802 89.602C22.4002 90.41 21.9362 91.042 21.2882 91.498C20.6402 91.954 19.8322 92.182 18.8642 92.182C17.6002 92.198 16.5722 91.786 15.7802 90.946C14.9882 90.098 14.6002 89.038 14.6162 87.766ZM23.929 92.002V86.026H25.369V87.346C25.521 86.994 25.761 86.666 26.089 86.362C26.409 86.066 26.865 85.918 27.457 85.918C27.577 85.918 27.709 85.93 27.853 85.954V87.454C27.669 87.422 27.453 87.406 27.205 87.406C26.573 87.406 26.113 87.57 25.825 87.898C25.537 88.226 25.393 88.754 25.393 89.482V92.002H23.929ZM32.7846 86.026H34.3086L31.8726 92.902C31.6966 93.422 31.4686 93.79 31.1886 94.006C30.9086 94.23 30.5126 94.342 30.0006 94.342H28.4406V93.13H29.8446C30.0606 93.13 30.2246 93.082 30.3366 92.986C30.4566 92.898 30.5606 92.738 30.6486 92.506L30.8286 91.954L28.0446 86.026H29.6286L30.7326 88.594L31.4166 90.19C31.6486 89.486 31.8246 88.95 31.9446 88.582L32.7846 86.026ZM35.4134 94.342V86.026H36.8414V86.866C37.0334 86.57 37.2974 86.326 37.6334 86.134C37.9774 85.934 38.3654 85.834 38.7974 85.834C39.5574 85.834 40.1694 86.126 40.6334 86.71C41.1054 87.294 41.3414 88.058 41.3414 89.002C41.3414 89.962 41.1054 90.734 40.6334 91.318C40.1694 91.894 39.5574 92.182 38.7974 92.182C38.3654 92.182 37.9814 92.086 37.6454 91.894C37.3174 91.702 37.0614 91.458 36.8774 91.162V92.242V94.342H35.4134ZM39.8054 89.002C39.8054 87.658 39.3094 86.986 38.3174 86.986C37.8614 86.986 37.4934 87.162 37.2134 87.514C36.9414 87.866 36.8054 88.362 36.8054 89.002C36.8054 89.658 36.9414 90.162 37.2134 90.514C37.4934 90.858 37.8614 91.03 38.3174 91.03C39.3094 91.03 39.8054 90.354 39.8054 89.002ZM43.1735 90.478V87.166H41.8775V86.026H43.1735V84.154H44.6375V86.026H46.2215V87.166H44.6375V90.25C44.6375 90.618 44.8215 90.802 45.1895 90.802H46.4615V92.002H44.6855C44.2055 92.002 43.8335 91.87 43.5695 91.606C43.3055 91.334 43.1735 90.958 43.1735 90.478ZM47.0637 89.014C47.0637 88.086 47.3437 87.326 47.9037 86.734C48.4717 86.142 49.1957 85.846 50.0757 85.846C50.9557 85.846 51.6757 86.142 52.2357 86.734C52.8037 87.326 53.0877 88.086 53.0877 89.014C53.0877 89.95 52.8037 90.714 52.2357 91.306C51.6677 91.89 50.9477 92.182 50.0757 92.182C49.2117 92.182 48.4917 91.882 47.9157 91.282C47.3477 90.682 47.0637 89.926 47.0637 89.014ZM51.5757 89.038C51.5757 88.398 51.4357 87.906 51.1557 87.562C50.8837 87.21 50.5237 87.034 50.0757 87.034C49.6117 87.034 49.2437 87.21 48.9717 87.562C48.7077 87.906 48.5757 88.398 48.5757 89.038C48.5757 89.67 48.7077 90.154 48.9717 90.49C49.2437 90.826 49.6117 90.994 50.0757 90.994C50.5397 90.994 50.9037 90.826 51.1677 90.49C51.4397 90.154 51.5757 89.67 51.5757 89.038ZM54.0246 89.002C54.0246 88.074 54.3166 87.318 54.9006 86.734C55.4846 86.142 56.2166 85.846 57.0966 85.846C57.7686 85.846 58.3406 86.01 58.8126 86.338C59.2926 86.666 59.6246 87.094 59.8086 87.622L58.4646 88.102C58.2086 87.39 57.7406 87.034 57.0606 87.034C56.6046 87.034 56.2326 87.206 55.9446 87.55C55.6566 87.894 55.5126 88.378 55.5126 89.002C55.5126 89.634 55.6566 90.126 55.9446 90.478C56.2406 90.822 56.6166 90.994 57.0726 90.994C57.7926 90.994 58.2846 90.59 58.5486 89.782L59.9286 90.274C59.7046 90.858 59.3446 91.322 58.8486 91.666C58.3606 92.01 57.7766 92.182 57.0966 92.182C56.1926 92.182 55.4526 91.89 54.8766 91.306C54.3086 90.722 54.0246 89.954 54.0246 89.002ZM61.0172 90.01V86.026H62.4812V89.662C62.4812 90.526 62.8252 90.958 63.5132 90.958C64.0252 90.958 64.3772 90.754 64.5692 90.346C64.7692 89.946 64.8692 89.442 64.8692 88.834V86.026H66.3332V92.002H64.8812V91.018C64.4252 91.794 63.7692 92.182 62.9132 92.182C62.3052 92.182 61.8372 91.99 61.5092 91.606C61.1812 91.214 61.0172 90.682 61.0172 90.01ZM68.1087 92.002V86.026H69.5487V87.346C69.7007 86.994 69.9407 86.666 70.2687 86.362C70.5887 86.066 71.0447 85.918 71.6367 85.918C71.7567 85.918 71.8887 85.93 72.0327 85.954V87.454C71.8487 87.422 71.6327 87.406 71.3847 87.406C70.7527 87.406 70.2927 87.57 70.0047 87.898C69.7167 88.226 69.5727 88.754 69.5727 89.482V92.002H68.1087ZM73.1243 92.002V86.026H74.5643V87.346C74.7163 86.994 74.9563 86.666 75.2843 86.362C75.6043 86.066 76.0603 85.918 76.6523 85.918C76.7723 85.918 76.9043 85.93 77.0483 85.954V87.454C76.8643 87.422 76.6483 87.406 76.4003 87.406C75.7683 87.406 75.3083 87.57 75.0203 87.898C74.7323 88.226 74.5883 88.754 74.5883 89.482V92.002H73.1243ZM77.521 89.014C77.521 88.078 77.793 87.318 78.337 86.734C78.889 86.142 79.581 85.846 80.413 85.846C81.261 85.846 81.941 86.134 82.453 86.71C82.965 87.278 83.221 88.014 83.221 88.918C83.221 89.046 83.213 89.198 83.197 89.374H78.973C78.997 89.926 79.141 90.342 79.405 90.622C79.669 90.894 80.017 91.03 80.449 91.03C81.105 91.03 81.593 90.67 81.913 89.95L83.233 90.442C82.769 91.602 81.837 92.182 80.437 92.182C79.549 92.182 78.841 91.902 78.313 91.342C77.785 90.774 77.521 89.998 77.521 89.014ZM79.021 88.294H81.745C81.721 87.87 81.589 87.538 81.349 87.298C81.117 87.058 80.805 86.938 80.413 86.938C80.045 86.938 79.733 87.058 79.477 87.298C79.229 87.538 79.077 87.87 79.021 88.294ZM84.6087 92.002V86.026H86.0367V86.974C86.2047 86.662 86.4527 86.398 86.7807 86.182C87.1087 85.958 87.5047 85.846 87.9687 85.846C89.3127 85.846 89.9847 86.574 89.9847 88.03V92.002H88.5207V88.354C88.5207 87.498 88.1607 87.07 87.4407 87.07C87.0247 87.07 86.7167 87.194 86.5167 87.442C86.2207 87.802 86.0727 88.41 86.0727 89.266V92.002H84.6087ZM91.2785 89.002C91.2785 88.074 91.5705 87.318 92.1545 86.734C92.7385 86.142 93.4705 85.846 94.3505 85.846C95.0225 85.846 95.5945 86.01 96.0665 86.338C96.5465 86.666 96.8785 87.094 97.0625 87.622L95.7185 88.102C95.4625 87.39 94.9945 87.034 94.3145 87.034C93.8585 87.034 93.4865 87.206 93.1985 87.55C92.9105 87.894 92.7665 88.378 92.7665 89.002C92.7665 89.634 92.9105 90.126 93.1985 90.478C93.4945 90.822 93.8705 90.994 94.3265 90.994C95.0465 90.994 95.5385 90.59 95.8025 89.782L97.1825 90.274C96.9585 90.858 96.5985 91.322 96.1025 91.666C95.6145 92.01 95.0305 92.182 94.3505 92.182C93.4465 92.182 92.7065 91.89 92.1305 91.306C91.5625 90.722 91.2785 89.954 91.2785 89.002ZM102.183 86.026H103.707L101.271 92.902C101.095 93.422 100.867 93.79 100.587 94.006C100.307 94.23 99.9111 94.342 99.3991 94.342H97.8391V93.13H99.2431C99.4591 93.13 99.6231 93.082 99.7351 92.986C99.8551 92.898 99.9591 92.738 100.047 92.506L100.227 91.954L97.4431 86.026H99.0271L100.131 88.594L100.815 90.19C101.047 89.486 101.223 88.95 101.343 88.582L102.183 86.026Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_390_6064"
                        x="0"
                        y="0.000976562"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_390_6064"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_390_6064"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_390_6064"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_390_6064"
                        x1="29.0005"
                        y1="18.001"
                        x2="29.0005"
                        y2="48.002"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_390_6064">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.9912)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="112"
                    viewBox="0 0 126 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_390_6075)">
                      <rect
                        y="0.000976562"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.001"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.251"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_390_6075)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_390_6075)">
                        <path
                          d="M43 32.9902C43 40.7223 36.7321 46.9902 29 46.9902C21.2679 46.9902 15 40.7223 15 32.9902C15 25.2582 21.2679 18.9902 29 18.9902C36.7321 18.9902 43 25.2582 43 32.9902Z"
                          fill="#26A17B"
                        ></path>
                        <path
                          d="M30.6819 34.2008V34.199C30.5857 34.206 30.0896 34.2358 28.9827 34.2358C28.0989 34.2358 27.4768 34.2095 27.2581 34.199V34.2016C23.8561 34.052 21.3168 33.4597 21.3168 32.7509C21.3168 32.043 23.8561 31.4507 27.2581 31.2984V33.6119C27.4803 33.6277 28.1173 33.6653 28.9976 33.6653C30.0534 33.6653 30.5831 33.6215 30.6819 33.6128V31.3001C34.0769 31.4515 36.6101 32.0439 36.6101 32.7509C36.6101 33.4597 34.0769 34.0503 30.6819 34.2008ZM30.6819 31.0595V28.9893H35.4192V25.8323H22.5208V28.9893H27.2581V31.0587C23.4081 31.2354 20.5127 31.9984 20.5127 32.9119C20.5127 33.8254 23.4081 34.5875 27.2581 34.7652V41.3994H30.6819V34.7634C34.5258 34.5866 37.4142 33.8245 37.4142 32.9119C37.4142 31.9993 34.5258 31.2372 30.6819 31.0595Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.3218 70.18V64.202H17.4498V69.844C17.4498 70.684 17.6411 71.3233 18.0238 71.762C18.4065 72.1913 18.9711 72.406 19.7178 72.406C21.2298 72.406 21.9858 71.552 21.9858 69.844V64.202H24.1138V70.18C24.1138 71.4213 23.7078 72.406 22.8958 73.134C22.0838 73.862 21.0245 74.226 19.7178 74.226C18.3831 74.226 17.3145 73.862 16.5118 73.134C15.7185 72.406 15.3218 71.4213 15.3218 70.18ZM25.5736 71.202L27.5756 70.53C27.697 71.0993 27.9676 71.5753 28.3876 71.958C28.8076 72.3406 29.363 72.532 30.0536 72.532C30.6883 72.532 31.1643 72.42 31.4816 72.196C31.8083 71.972 31.9716 71.664 31.9716 71.272C31.9716 70.628 31.4396 70.2266 30.3756 70.068L29.1576 69.9C27.095 69.6106 26.0636 68.6306 26.0636 66.96C26.0636 66.1106 26.409 65.4013 27.0996 64.832C27.7996 64.2626 28.747 63.978 29.9416 63.978C31.0803 63.978 31.995 64.2206 32.6856 64.706C33.3763 65.182 33.843 65.812 34.0856 66.596L32.1256 67.282C31.7803 66.2086 31.0523 65.672 29.9416 65.672C29.391 65.672 28.9756 65.784 28.6956 66.008C28.4156 66.232 28.2756 66.5213 28.2756 66.876C28.2756 67.4546 28.6956 67.8046 29.5356 67.926L30.7536 68.094C31.8456 68.2433 32.6903 68.5746 33.2876 69.088C33.885 69.6013 34.1836 70.2826 34.1836 71.132C34.1836 72.0373 33.829 72.7793 33.1196 73.358C32.4103 73.9366 31.3883 74.226 30.0536 74.226C28.803 74.226 27.795 73.946 27.0296 73.386C26.2643 72.826 25.779 72.098 25.5736 71.202ZM35.9416 74.002V64.202H39.6376C41.0843 64.1833 42.3116 64.622 43.3196 65.518C44.337 66.414 44.8363 67.5853 44.8176 69.032C44.8363 70.516 44.337 71.72 43.3196 72.644C42.3116 73.568 41.0843 74.0206 39.6376 74.002H35.9416ZM38.0696 72.238H39.5396C41.593 72.238 42.6196 71.1833 42.6196 69.074C42.6196 68.1126 42.363 67.3566 41.8496 66.806C41.3363 66.246 40.5943 65.966 39.6236 65.966H38.0696V72.238ZM48.1094 74.002V65.966H44.7494V64.202H53.5974V65.966H50.2374V74.002H48.1094Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.766C14.6002 86.542 14.9962 85.51 15.8042 84.67C16.6202 83.822 17.6442 83.406 18.8762 83.422C19.8442 83.422 20.6642 83.662 21.3362 84.142C22.0082 84.622 22.4522 85.23 22.6682 85.966L21.2162 86.506C20.8162 85.338 20.0322 84.754 18.8642 84.754C18.0642 84.754 17.4282 85.022 16.9562 85.558C16.4922 86.094 16.2602 86.826 16.2602 87.754C16.2602 88.706 16.4922 89.458 16.9562 90.01C17.4202 90.562 18.0562 90.838 18.8642 90.838C20.0402 90.838 20.8402 90.238 21.2642 89.038L22.6802 89.602C22.4002 90.41 21.9362 91.042 21.2882 91.498C20.6402 91.954 19.8322 92.182 18.8642 92.182C17.6002 92.198 16.5722 91.786 15.7802 90.946C14.9882 90.098 14.6002 89.038 14.6162 87.766ZM23.929 92.002V86.026H25.369V87.346C25.521 86.994 25.761 86.666 26.089 86.362C26.409 86.066 26.865 85.918 27.457 85.918C27.577 85.918 27.709 85.93 27.853 85.954V87.454C27.669 87.422 27.453 87.406 27.205 87.406C26.573 87.406 26.113 87.57 25.825 87.898C25.537 88.226 25.393 88.754 25.393 89.482V92.002H23.929ZM32.7846 86.026H34.3086L31.8726 92.902C31.6966 93.422 31.4686 93.79 31.1886 94.006C30.9086 94.23 30.5126 94.342 30.0006 94.342H28.4406V93.13H29.8446C30.0606 93.13 30.2246 93.082 30.3366 92.986C30.4566 92.898 30.5606 92.738 30.6486 92.506L30.8286 91.954L28.0446 86.026H29.6286L30.7326 88.594L31.4166 90.19C31.6486 89.486 31.8246 88.95 31.9446 88.582L32.7846 86.026ZM35.4134 94.342V86.026H36.8414V86.866C37.0334 86.57 37.2974 86.326 37.6334 86.134C37.9774 85.934 38.3654 85.834 38.7974 85.834C39.5574 85.834 40.1694 86.126 40.6334 86.71C41.1054 87.294 41.3414 88.058 41.3414 89.002C41.3414 89.962 41.1054 90.734 40.6334 91.318C40.1694 91.894 39.5574 92.182 38.7974 92.182C38.3654 92.182 37.9814 92.086 37.6454 91.894C37.3174 91.702 37.0614 91.458 36.8774 91.162V92.242V94.342H35.4134ZM39.8054 89.002C39.8054 87.658 39.3094 86.986 38.3174 86.986C37.8614 86.986 37.4934 87.162 37.2134 87.514C36.9414 87.866 36.8054 88.362 36.8054 89.002C36.8054 89.658 36.9414 90.162 37.2134 90.514C37.4934 90.858 37.8614 91.03 38.3174 91.03C39.3094 91.03 39.8054 90.354 39.8054 89.002ZM43.1735 90.478V87.166H41.8775V86.026H43.1735V84.154H44.6375V86.026H46.2215V87.166H44.6375V90.25C44.6375 90.618 44.8215 90.802 45.1895 90.802H46.4615V92.002H44.6855C44.2055 92.002 43.8335 91.87 43.5695 91.606C43.3055 91.334 43.1735 90.958 43.1735 90.478ZM47.0637 89.014C47.0637 88.086 47.3437 87.326 47.9037 86.734C48.4717 86.142 49.1957 85.846 50.0757 85.846C50.9557 85.846 51.6757 86.142 52.2357 86.734C52.8037 87.326 53.0877 88.086 53.0877 89.014C53.0877 89.95 52.8037 90.714 52.2357 91.306C51.6677 91.89 50.9477 92.182 50.0757 92.182C49.2117 92.182 48.4917 91.882 47.9157 91.282C47.3477 90.682 47.0637 89.926 47.0637 89.014ZM51.5757 89.038C51.5757 88.398 51.4357 87.906 51.1557 87.562C50.8837 87.21 50.5237 87.034 50.0757 87.034C49.6117 87.034 49.2437 87.21 48.9717 87.562C48.7077 87.906 48.5757 88.398 48.5757 89.038C48.5757 89.67 48.7077 90.154 48.9717 90.49C49.2437 90.826 49.6117 90.994 50.0757 90.994C50.5397 90.994 50.9037 90.826 51.1677 90.49C51.4397 90.154 51.5757 89.67 51.5757 89.038ZM54.0246 89.002C54.0246 88.074 54.3166 87.318 54.9006 86.734C55.4846 86.142 56.2166 85.846 57.0966 85.846C57.7686 85.846 58.3406 86.01 58.8126 86.338C59.2926 86.666 59.6246 87.094 59.8086 87.622L58.4646 88.102C58.2086 87.39 57.7406 87.034 57.0606 87.034C56.6046 87.034 56.2326 87.206 55.9446 87.55C55.6566 87.894 55.5126 88.378 55.5126 89.002C55.5126 89.634 55.6566 90.126 55.9446 90.478C56.2406 90.822 56.6166 90.994 57.0726 90.994C57.7926 90.994 58.2846 90.59 58.5486 89.782L59.9286 90.274C59.7046 90.858 59.3446 91.322 58.8486 91.666C58.3606 92.01 57.7766 92.182 57.0966 92.182C56.1926 92.182 55.4526 91.89 54.8766 91.306C54.3086 90.722 54.0246 89.954 54.0246 89.002ZM61.0172 90.01V86.026H62.4812V89.662C62.4812 90.526 62.8252 90.958 63.5132 90.958C64.0252 90.958 64.3772 90.754 64.5692 90.346C64.7692 89.946 64.8692 89.442 64.8692 88.834V86.026H66.3332V92.002H64.8812V91.018C64.4252 91.794 63.7692 92.182 62.9132 92.182C62.3052 92.182 61.8372 91.99 61.5092 91.606C61.1812 91.214 61.0172 90.682 61.0172 90.01ZM68.1087 92.002V86.026H69.5487V87.346C69.7007 86.994 69.9407 86.666 70.2687 86.362C70.5887 86.066 71.0447 85.918 71.6367 85.918C71.7567 85.918 71.8887 85.93 72.0327 85.954V87.454C71.8487 87.422 71.6327 87.406 71.3847 87.406C70.7527 87.406 70.2927 87.57 70.0047 87.898C69.7167 88.226 69.5727 88.754 69.5727 89.482V92.002H68.1087ZM73.1243 92.002V86.026H74.5643V87.346C74.7163 86.994 74.9563 86.666 75.2843 86.362C75.6043 86.066 76.0603 85.918 76.6523 85.918C76.7723 85.918 76.9043 85.93 77.0483 85.954V87.454C76.8643 87.422 76.6483 87.406 76.4003 87.406C75.7683 87.406 75.3083 87.57 75.0203 87.898C74.7323 88.226 74.5883 88.754 74.5883 89.482V92.002H73.1243ZM77.521 89.014C77.521 88.078 77.793 87.318 78.337 86.734C78.889 86.142 79.581 85.846 80.413 85.846C81.261 85.846 81.941 86.134 82.453 86.71C82.965 87.278 83.221 88.014 83.221 88.918C83.221 89.046 83.213 89.198 83.197 89.374H78.973C78.997 89.926 79.141 90.342 79.405 90.622C79.669 90.894 80.017 91.03 80.449 91.03C81.105 91.03 81.593 90.67 81.913 89.95L83.233 90.442C82.769 91.602 81.837 92.182 80.437 92.182C79.549 92.182 78.841 91.902 78.313 91.342C77.785 90.774 77.521 89.998 77.521 89.014ZM79.021 88.294H81.745C81.721 87.87 81.589 87.538 81.349 87.298C81.117 87.058 80.805 86.938 80.413 86.938C80.045 86.938 79.733 87.058 79.477 87.298C79.229 87.538 79.077 87.87 79.021 88.294ZM84.6087 92.002V86.026H86.0367V86.974C86.2047 86.662 86.4527 86.398 86.7807 86.182C87.1087 85.958 87.5047 85.846 87.9687 85.846C89.3127 85.846 89.9847 86.574 89.9847 88.03V92.002H88.5207V88.354C88.5207 87.498 88.1607 87.07 87.4407 87.07C87.0247 87.07 86.7167 87.194 86.5167 87.442C86.2207 87.802 86.0727 88.41 86.0727 89.266V92.002H84.6087ZM91.2785 89.002C91.2785 88.074 91.5705 87.318 92.1545 86.734C92.7385 86.142 93.4705 85.846 94.3505 85.846C95.0225 85.846 95.5945 86.01 96.0665 86.338C96.5465 86.666 96.8785 87.094 97.0625 87.622L95.7185 88.102C95.4625 87.39 94.9945 87.034 94.3145 87.034C93.8585 87.034 93.4865 87.206 93.1985 87.55C92.9105 87.894 92.7665 88.378 92.7665 89.002C92.7665 89.634 92.9105 90.126 93.1985 90.478C93.4945 90.822 93.8705 90.994 94.3265 90.994C95.0465 90.994 95.5385 90.59 95.8025 89.782L97.1825 90.274C96.9585 90.858 96.5985 91.322 96.1025 91.666C95.6145 92.01 95.0305 92.182 94.3505 92.182C93.4465 92.182 92.7065 91.89 92.1305 91.306C91.5625 90.722 91.2785 89.954 91.2785 89.002ZM102.183 86.026H103.707L101.271 92.902C101.095 93.422 100.867 93.79 100.587 94.006C100.307 94.23 99.9111 94.342 99.3991 94.342H97.8391V93.13H99.2431C99.4591 93.13 99.6231 93.082 99.7351 92.986C99.8551 92.898 99.9591 92.738 100.047 92.506L100.227 91.954L97.4431 86.026H99.0271L100.131 88.594L100.815 90.19C101.047 89.486 101.223 88.95 101.343 88.582L102.183 86.026Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_390_6075"
                        x="0"
                        y="0.000976562"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_390_6075"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_390_6075"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_390_6075"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_390_6075"
                        x1="29.0005"
                        y1="18.001"
                        x2="29.0005"
                        y2="48.002"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_390_6075">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 18.9902)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2398)">
                      <rect
                        y="0.0107422"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0107"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2607"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2398)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2398)">
                        <path
                          d="M43 33.001C43 40.7331 36.7321 47.001 29 47.001C21.2679 47.001 15 40.7331 15 33.001C15 25.2689 21.2679 19.001 29 19.001C36.7321 19.001 43 25.2689 43 33.001Z"
                          fill="#BFBBBB"
                        ></path>
                        <path
                          d="M24.1219 35.8141L22.875 36.2997L23.4787 33.876L24.7387 33.3685L26.5631 26.001H31.0475L29.735 31.4216L30.9688 30.9229L30.3737 33.3291L29.1225 33.8279L28.3831 36.8904H35.125L34.3594 40.001H23.0938L24.1219 35.8141Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.6477 74.0117V64.2117H17.7757V72.2057H23.0537V74.0117H15.6477ZM24.0763 66.0597V64.1837H26.1903V66.0597H24.0763ZM24.1463 74.0117V67.0117H26.1343V74.0117H24.1463ZM28.7571 72.1777V68.5237H27.2871V67.0117H28.7571V64.8137H30.7451V67.0117H32.5651V68.5237H30.7451V71.8137C30.7451 72.0284 30.7918 72.1871 30.8851 72.2897C30.9878 72.3831 31.1465 72.4297 31.3611 72.4297H32.8731V74.0117H30.5351C29.9845 74.0117 29.5505 73.8437 29.2331 73.5077C28.9158 73.1717 28.7571 72.7284 28.7571 72.1777ZM33.4874 70.4977C33.4874 69.4244 33.8234 68.5424 34.4954 67.8517C35.1674 67.1517 36.0121 66.8017 37.0294 66.8017C38.0841 66.8017 38.9147 67.1471 39.5214 67.8377C40.1281 68.5284 40.4314 69.4197 40.4314 70.5117C40.4314 70.7264 40.4267 70.8851 40.4174 70.9877H35.4754C35.5034 71.5571 35.6574 71.9911 35.9374 72.2897C36.2174 72.5791 36.5861 72.7237 37.0434 72.7237C37.7714 72.7237 38.3127 72.3177 38.6674 71.5057L40.4454 72.1917C40.2027 72.7517 39.8107 73.2371 39.2694 73.6477C38.7374 74.0397 37.9954 74.2357 37.0434 74.2357C35.9701 74.2357 35.1067 73.8997 34.4534 73.2277C33.8094 72.5464 33.4874 71.6364 33.4874 70.4977ZM35.5454 69.5877H38.4574C38.3547 68.6824 37.8787 68.2297 37.0294 68.2297C36.6281 68.2297 36.2967 68.3464 36.0354 68.5797C35.7741 68.8131 35.6107 69.1491 35.5454 69.5877ZM41.4578 70.4977C41.4578 69.4057 41.8171 68.5191 42.5358 67.8377C43.2544 67.1471 44.1504 66.8017 45.2238 66.8017C46.0264 66.8017 46.7218 66.9931 47.3098 67.3757C47.8978 67.7584 48.3131 68.2671 48.5558 68.9017L46.7218 69.5877C46.4324 68.7757 45.9098 68.3697 45.1538 68.3697C44.6591 68.3697 44.2531 68.5564 43.9358 68.9297C43.6184 69.3031 43.4598 69.8257 43.4598 70.4977C43.4598 71.1697 43.6184 71.6971 43.9358 72.0797C44.2624 72.4624 44.6731 72.6537 45.1678 72.6537C45.9331 72.6537 46.4744 72.2104 46.7918 71.3237L48.6678 71.9957C48.3971 72.6771 47.9538 73.2231 47.3378 73.6337C46.7218 74.0351 46.0124 74.2357 45.2098 74.2357C44.1178 74.2357 43.2171 73.8904 42.5078 73.1997C41.8078 72.5091 41.4578 71.6084 41.4578 70.4977ZM49.4421 70.5117C49.4421 69.4104 49.7875 68.5191 50.4781 67.8377C51.1688 67.1471 52.0508 66.8017 53.1241 66.8017C54.2068 66.8017 55.0888 67.1471 55.7701 67.8377C56.4608 68.5191 56.8061 69.4104 56.8061 70.5117C56.8061 71.6317 56.4655 72.5324 55.7841 73.2137C55.1028 73.8951 54.2161 74.2357 53.1241 74.2357C52.0695 74.2357 51.1921 73.8857 50.4921 73.1857C49.7921 72.4764 49.4421 71.5851 49.4421 70.5117ZM54.3001 72.1217C54.5895 71.7577 54.7341 71.2304 54.7341 70.5397C54.7341 69.8491 54.5895 69.3171 54.3001 68.9437C54.0201 68.5611 53.6281 68.3697 53.1241 68.3697C52.6201 68.3697 52.2235 68.5611 51.9341 68.9437C51.6541 69.3171 51.5141 69.8491 51.5141 70.5397C51.5141 71.2304 51.6541 71.7577 51.9341 72.1217C52.2235 72.4764 52.6201 72.6537 53.1241 72.6537C53.6281 72.6537 54.0201 72.4764 54.3001 72.1217ZM58.174 66.0597V64.1837H60.288V66.0597H58.174ZM58.244 74.0117V67.0117H60.232V74.0117H58.244ZM62.1408 74.0117V67.0117H64.0728V68.0897C64.5955 67.2311 65.3468 66.8017 66.3268 66.8017C67.0921 66.8017 67.6661 67.0211 68.0488 67.4597C68.4408 67.8984 68.6368 68.5191 68.6368 69.3217V74.0117H66.6488V69.7557C66.6488 68.8784 66.2755 68.4397 65.5288 68.4397C65.1088 68.4397 64.7961 68.5657 64.5908 68.8177C64.2828 69.1911 64.1288 69.8164 64.1288 70.6937V74.0117H62.1408Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.7757C14.6002 86.5517 14.9962 85.5197 15.8042 84.6797C16.6202 83.8317 17.6442 83.4157 18.8762 83.4317C19.8442 83.4317 20.6642 83.6717 21.3362 84.1517C22.0082 84.6317 22.4522 85.2397 22.6682 85.9757L21.2162 86.5157C20.8162 85.3477 20.0322 84.7637 18.8642 84.7637C18.0642 84.7637 17.4282 85.0317 16.9562 85.5677C16.4922 86.1037 16.2602 86.8357 16.2602 87.7637C16.2602 88.7157 16.4922 89.4677 16.9562 90.0197C17.4202 90.5717 18.0562 90.8477 18.8642 90.8477C20.0402 90.8477 20.8402 90.2477 21.2642 89.0477L22.6802 89.6117C22.4002 90.4197 21.9362 91.0517 21.2882 91.5077C20.6402 91.9637 19.8322 92.1917 18.8642 92.1917C17.6002 92.2077 16.5722 91.7957 15.7802 90.9557C14.9882 90.1077 14.6002 89.0477 14.6162 87.7757ZM23.929 92.0117V86.0357H25.369V87.3557C25.521 87.0037 25.761 86.6757 26.089 86.3717C26.409 86.0757 26.865 85.9277 27.457 85.9277C27.577 85.9277 27.709 85.9397 27.853 85.9637V87.4637C27.669 87.4317 27.453 87.4157 27.205 87.4157C26.573 87.4157 26.113 87.5797 25.825 87.9077C25.537 88.2357 25.393 88.7637 25.393 89.4917V92.0117H23.929ZM32.7846 86.0357H34.3086L31.8726 92.9117C31.6966 93.4317 31.4686 93.7997 31.1886 94.0157C30.9086 94.2397 30.5126 94.3517 30.0006 94.3517H28.4406V93.1397H29.8446C30.0606 93.1397 30.2246 93.0917 30.3366 92.9957C30.4566 92.9077 30.5606 92.7477 30.6486 92.5157L30.8286 91.9637L28.0446 86.0357H29.6286L30.7326 88.6037L31.4166 90.1997C31.6486 89.4957 31.8246 88.9597 31.9446 88.5917L32.7846 86.0357ZM35.4134 94.3517V86.0357H36.8414V86.8757C37.0334 86.5797 37.2974 86.3357 37.6334 86.1437C37.9774 85.9437 38.3654 85.8437 38.7974 85.8437C39.5574 85.8437 40.1694 86.1357 40.6334 86.7197C41.1054 87.3037 41.3414 88.0677 41.3414 89.0117C41.3414 89.9717 41.1054 90.7437 40.6334 91.3277C40.1694 91.9037 39.5574 92.1917 38.7974 92.1917C38.3654 92.1917 37.9814 92.0957 37.6454 91.9037C37.3174 91.7117 37.0614 91.4677 36.8774 91.1717V92.2517V94.3517H35.4134ZM39.8054 89.0117C39.8054 87.6677 39.3094 86.9957 38.3174 86.9957C37.8614 86.9957 37.4934 87.1717 37.2134 87.5237C36.9414 87.8757 36.8054 88.3717 36.8054 89.0117C36.8054 89.6677 36.9414 90.1717 37.2134 90.5237C37.4934 90.8677 37.8614 91.0397 38.3174 91.0397C39.3094 91.0397 39.8054 90.3637 39.8054 89.0117ZM43.1735 90.4877V87.1757H41.8775V86.0357H43.1735V84.1637H44.6375V86.0357H46.2215V87.1757H44.6375V90.2597C44.6375 90.6277 44.8215 90.8117 45.1895 90.8117H46.4615V92.0117H44.6855C44.2055 92.0117 43.8335 91.8797 43.5695 91.6157C43.3055 91.3437 43.1735 90.9677 43.1735 90.4877ZM47.0637 89.0237C47.0637 88.0957 47.3437 87.3357 47.9037 86.7437C48.4717 86.1517 49.1957 85.8557 50.0757 85.8557C50.9557 85.8557 51.6757 86.1517 52.2357 86.7437C52.8037 87.3357 53.0877 88.0957 53.0877 89.0237C53.0877 89.9597 52.8037 90.7237 52.2357 91.3157C51.6677 91.8997 50.9477 92.1917 50.0757 92.1917C49.2117 92.1917 48.4917 91.8917 47.9157 91.2917C47.3477 90.6917 47.0637 89.9357 47.0637 89.0237ZM51.5757 89.0477C51.5757 88.4077 51.4357 87.9157 51.1557 87.5717C50.8837 87.2197 50.5237 87.0437 50.0757 87.0437C49.6117 87.0437 49.2437 87.2197 48.9717 87.5717C48.7077 87.9157 48.5757 88.4077 48.5757 89.0477C48.5757 89.6797 48.7077 90.1637 48.9717 90.4997C49.2437 90.8357 49.6117 91.0037 50.0757 91.0037C50.5397 91.0037 50.9037 90.8357 51.1677 90.4997C51.4397 90.1637 51.5757 89.6797 51.5757 89.0477ZM54.0246 89.0117C54.0246 88.0837 54.3166 87.3277 54.9006 86.7437C55.4846 86.1517 56.2166 85.8557 57.0966 85.8557C57.7686 85.8557 58.3406 86.0197 58.8126 86.3477C59.2926 86.6757 59.6246 87.1037 59.8086 87.6317L58.4646 88.1117C58.2086 87.3997 57.7406 87.0437 57.0606 87.0437C56.6046 87.0437 56.2326 87.2157 55.9446 87.5597C55.6566 87.9037 55.5126 88.3877 55.5126 89.0117C55.5126 89.6437 55.6566 90.1357 55.9446 90.4877C56.2406 90.8317 56.6166 91.0037 57.0726 91.0037C57.7926 91.0037 58.2846 90.5997 58.5486 89.7917L59.9286 90.2837C59.7046 90.8677 59.3446 91.3317 58.8486 91.6757C58.3606 92.0197 57.7766 92.1917 57.0966 92.1917C56.1926 92.1917 55.4526 91.8997 54.8766 91.3157C54.3086 90.7317 54.0246 89.9637 54.0246 89.0117ZM61.0172 90.0197V86.0357H62.4812V89.6717C62.4812 90.5357 62.8252 90.9677 63.5132 90.9677C64.0252 90.9677 64.3772 90.7637 64.5692 90.3557C64.7692 89.9557 64.8692 89.4517 64.8692 88.8437V86.0357H66.3332V92.0117H64.8812V91.0277C64.4252 91.8037 63.7692 92.1917 62.9132 92.1917C62.3052 92.1917 61.8372 91.9997 61.5092 91.6157C61.1812 91.2237 61.0172 90.6917 61.0172 90.0197ZM68.1087 92.0117V86.0357H69.5487V87.3557C69.7007 87.0037 69.9407 86.6757 70.2687 86.3717C70.5887 86.0757 71.0447 85.9277 71.6367 85.9277C71.7567 85.9277 71.8887 85.9397 72.0327 85.9637V87.4637C71.8487 87.4317 71.6327 87.4157 71.3847 87.4157C70.7527 87.4157 70.2927 87.5797 70.0047 87.9077C69.7167 88.2357 69.5727 88.7637 69.5727 89.4917V92.0117H68.1087ZM73.1243 92.0117V86.0357H74.5643V87.3557C74.7163 87.0037 74.9563 86.6757 75.2843 86.3717C75.6043 86.0757 76.0603 85.9277 76.6523 85.9277C76.7723 85.9277 76.9043 85.9397 77.0483 85.9637V87.4637C76.8643 87.4317 76.6483 87.4157 76.4003 87.4157C75.7683 87.4157 75.3083 87.5797 75.0203 87.9077C74.7323 88.2357 74.5883 88.7637 74.5883 89.4917V92.0117H73.1243ZM77.521 89.0237C77.521 88.0877 77.793 87.3277 78.337 86.7437C78.889 86.1517 79.581 85.8557 80.413 85.8557C81.261 85.8557 81.941 86.1437 82.453 86.7197C82.965 87.2877 83.221 88.0237 83.221 88.9277C83.221 89.0557 83.213 89.2077 83.197 89.3837H78.973C78.997 89.9357 79.141 90.3517 79.405 90.6317C79.669 90.9037 80.017 91.0397 80.449 91.0397C81.105 91.0397 81.593 90.6797 81.913 89.9597L83.233 90.4517C82.769 91.6117 81.837 92.1917 80.437 92.1917C79.549 92.1917 78.841 91.9117 78.313 91.3517C77.785 90.7837 77.521 90.0077 77.521 89.0237ZM79.021 88.3037H81.745C81.721 87.8797 81.589 87.5477 81.349 87.3077C81.117 87.0677 80.805 86.9477 80.413 86.9477C80.045 86.9477 79.733 87.0677 79.477 87.3077C79.229 87.5477 79.077 87.8797 79.021 88.3037ZM84.6087 92.0117V86.0357H86.0367V86.9837C86.2047 86.6717 86.4527 86.4077 86.7807 86.1917C87.1087 85.9677 87.5047 85.8557 87.9687 85.8557C89.3127 85.8557 89.9847 86.5837 89.9847 88.0397V92.0117H88.5207V88.3637C88.5207 87.5077 88.1607 87.0797 87.4407 87.0797C87.0247 87.0797 86.7167 87.2037 86.5167 87.4517C86.2207 87.8117 86.0727 88.4197 86.0727 89.2757V92.0117H84.6087ZM91.2785 89.0117C91.2785 88.0837 91.5705 87.3277 92.1545 86.7437C92.7385 86.1517 93.4705 85.8557 94.3505 85.8557C95.0225 85.8557 95.5945 86.0197 96.0665 86.3477C96.5465 86.6757 96.8785 87.1037 97.0625 87.6317L95.7185 88.1117C95.4625 87.3997 94.9945 87.0437 94.3145 87.0437C93.8585 87.0437 93.4865 87.2157 93.1985 87.5597C92.9105 87.9037 92.7665 88.3877 92.7665 89.0117C92.7665 89.6437 92.9105 90.1357 93.1985 90.4877C93.4945 90.8317 93.8705 91.0037 94.3265 91.0037C95.0465 91.0037 95.5385 90.5997 95.8025 89.7917L97.1825 90.2837C96.9585 90.8677 96.5985 91.3317 96.1025 91.6757C95.6145 92.0197 95.0305 92.1917 94.3505 92.1917C93.4465 92.1917 92.7065 91.8997 92.1305 91.3157C91.5625 90.7317 91.2785 89.9637 91.2785 89.0117ZM102.183 86.0357H103.707L101.271 92.9117C101.095 93.4317 100.867 93.7997 100.587 94.0157C100.307 94.2397 99.9111 94.3517 99.3991 94.3517H97.8391V93.1397H99.2431C99.4591 93.1397 99.6231 93.0917 99.7351 92.9957C99.8551 92.9077 99.9591 92.7477 100.047 92.5157L100.227 91.9637L97.4431 86.0357H99.0271L100.131 88.6037L100.815 90.1997C101.047 89.4957 101.223 88.9597 101.343 88.5917L102.183 86.0357Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2398"
                        x="0"
                        y="0.0107422"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2398"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2398"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2398"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2398"
                        x1="29.0005"
                        y1="18.0107"
                        x2="29.0005"
                        y2="48.0117"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2398">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.001)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2407)">
                      <rect
                        y="0.0107422"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0107"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2607"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2407)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2407)">
                        <path
                          d="M43 33C43 40.7321 36.7321 47 29 47C21.2679 47 15 40.7321 15 33C15 25.2679 21.2679 19 29 19C36.7321 19 43 25.2679 43 33Z"
                          fill="black"
                        ></path>
                        <path
                          d="M34.8111 29.5129C34.7662 29.5644 34.709 29.6038 34.6449 29.6275C34.5817 29.655 34.5134 29.6686 34.4445 29.6675H21.4753C21.0173 29.6675 20.7825 29.0949 21.1031 28.7516L23.2331 26.4898C23.2788 26.438 23.3361 26.3979 23.4049 26.3693C23.4679 26.3407 23.5365 26.3293 23.6053 26.3293H36.6262C37.0899 26.3293 37.3189 26.9077 36.9925 27.251L34.8108 29.5129H34.8111ZM34.8111 39.625C34.7137 39.7224 34.5819 39.7796 34.4445 39.7796H21.4753C21.0173 39.7796 20.7825 39.2184 21.1031 38.8865L23.2331 36.6762C23.2789 36.6246 23.3419 36.5846 23.4049 36.5616C23.4679 36.533 23.5365 36.5216 23.6053 36.5216H36.6262C37.0899 36.5216 37.3189 37.0883 36.9925 37.4206L34.8108 39.625H34.8111ZM34.8111 31.5799C34.7141 31.482 34.5823 31.4265 34.4445 31.4253H21.4753C21.0173 31.4253 20.7825 31.9865 21.1031 32.3187L23.2331 34.529C23.2789 34.5803 23.3419 34.6206 23.4049 34.6433C23.4679 34.6722 23.5365 34.6836 23.6053 34.6836H36.6262C37.0899 34.6836 37.3189 34.1166 36.9925 33.7846L34.8108 31.5799H34.8111Z"
                          fill="url(#paint1_linear_389_2407)"
                        ></path>
                      </g>
                      <path
                        d="M14.7524 71.2117L16.7544 70.5397C16.8757 71.1091 17.1464 71.5851 17.5664 71.9677C17.9864 72.3504 18.5417 72.5417 19.2324 72.5417C19.867 72.5417 20.343 72.4297 20.6604 72.2057C20.987 71.9817 21.1504 71.6737 21.1504 71.2817C21.1504 70.6377 20.6184 70.2364 19.5544 70.0777L18.3364 69.9097C16.2737 69.6204 15.2424 68.6404 15.2424 66.9697C15.2424 66.1204 15.5877 65.4111 16.2784 64.8417C16.9784 64.2724 17.9257 63.9877 19.1204 63.9877C20.259 63.9877 21.1737 64.2304 21.8644 64.7157C22.555 65.1917 23.0217 65.8217 23.2644 66.6057L21.3044 67.2917C20.959 66.2184 20.231 65.6817 19.1204 65.6817C18.5697 65.6817 18.1544 65.7937 17.8744 66.0177C17.5944 66.2417 17.4544 66.5311 17.4544 66.8857C17.4544 67.4644 17.8744 67.8144 18.7144 67.9357L19.9324 68.1037C21.0244 68.2531 21.869 68.5844 22.4664 69.0977C23.0637 69.6111 23.3624 70.2924 23.3624 71.1417C23.3624 72.0471 23.0077 72.7891 22.2984 73.3677C21.589 73.9464 20.567 74.2357 19.2324 74.2357C17.9817 74.2357 16.9737 73.9557 16.2084 73.3957C15.443 72.8357 14.9577 72.1077 14.7524 71.2117ZM24.4343 70.5117C24.4343 69.4104 24.7797 68.5191 25.4703 67.8377C26.161 67.1471 27.043 66.8017 28.1163 66.8017C29.199 66.8017 30.081 67.1471 30.7623 67.8377C31.453 68.5191 31.7983 69.4104 31.7983 70.5117C31.7983 71.6317 31.4577 72.5324 30.7763 73.2137C30.095 73.8951 29.2083 74.2357 28.1163 74.2357C27.0617 74.2357 26.1843 73.8857 25.4843 73.1857C24.7843 72.4764 24.4343 71.5851 24.4343 70.5117ZM29.2923 72.1217C29.5817 71.7577 29.7263 71.2304 29.7263 70.5397C29.7263 69.8491 29.5817 69.3171 29.2923 68.9437C29.0123 68.5611 28.6203 68.3697 28.1163 68.3697C27.6123 68.3697 27.2157 68.5611 26.9263 68.9437C26.6463 69.3171 26.5063 69.8491 26.5063 70.5397C26.5063 71.2304 26.6463 71.7577 26.9263 72.1217C27.2157 72.4764 27.6123 72.6537 28.1163 72.6537C28.6203 72.6537 29.0123 72.4764 29.2923 72.1217ZM33.2502 74.0117V64.2117H35.2382V74.0117H33.2502ZM36.768 72.2197C36.7773 71.7624 36.8893 71.3657 37.104 71.0297C37.3187 70.6937 37.6267 70.4231 38.028 70.2177C38.4387 70.0124 38.8913 69.8537 39.386 69.7417C39.89 69.6204 40.4827 69.5271 41.164 69.4617V69.1957C41.164 68.5517 40.7813 68.2297 40.016 68.2297C39.1667 68.2297 38.6533 68.5984 38.476 69.3357L36.684 68.9437C36.74 68.3557 37.0667 67.8517 37.664 67.4317C38.2707 67.0117 39.05 66.8017 40.002 66.8017C41.01 66.8017 41.78 67.0304 42.312 67.4877C42.8533 67.9451 43.124 68.6217 43.124 69.5177V72.0797C43.124 72.2664 43.1473 72.3831 43.194 72.4297C43.2407 72.4764 43.3573 72.4997 43.544 72.4997H44.16V74.0117H42.634C41.8687 74.0117 41.4487 73.6711 41.374 72.9897C40.8327 73.8204 40.0347 74.2357 38.98 74.2357C38.3453 74.2357 37.818 74.0491 37.398 73.6757C36.978 73.3024 36.768 72.8171 36.768 72.2197ZM41.164 71.1417V70.6937C40.3613 70.7964 39.764 70.9411 39.372 71.1277C38.98 71.3144 38.784 71.6131 38.784 72.0237C38.784 72.5277 39.0873 72.7797 39.694 72.7797C40.114 72.7797 40.464 72.6397 40.744 72.3597C41.024 72.0797 41.164 71.6737 41.164 71.1417ZM45.2131 74.0117V67.0117H47.1451V68.0897C47.6677 67.2311 48.4191 66.8017 49.3991 66.8017C50.1644 66.8017 50.7384 67.0211 51.1211 67.4597C51.5131 67.8984 51.7091 68.5191 51.7091 69.3217V74.0117H49.7211V69.7557C49.7211 68.8784 49.3477 68.4397 48.6011 68.4397C48.1811 68.4397 47.8684 68.5657 47.6631 68.8177C47.3551 69.1911 47.2011 69.8164 47.2011 70.6937V74.0117H45.2131ZM53.1606 72.2197C53.1699 71.7624 53.2819 71.3657 53.4966 71.0297C53.7113 70.6937 54.0193 70.4231 54.4206 70.2177C54.8313 70.0124 55.2839 69.8537 55.7786 69.7417C56.2826 69.6204 56.8753 69.5271 57.5566 69.4617V69.1957C57.5566 68.5517 57.1739 68.2297 56.4086 68.2297C55.5593 68.2297 55.0459 68.5984 54.8686 69.3357L53.0766 68.9437C53.1326 68.3557 53.4593 67.8517 54.0566 67.4317C54.6633 67.0117 55.4426 66.8017 56.3946 66.8017C57.4026 66.8017 58.1726 67.0304 58.7046 67.4877C59.2459 67.9451 59.5166 68.6217 59.5166 69.5177V72.0797C59.5166 72.2664 59.5399 72.3831 59.5866 72.4297C59.6333 72.4764 59.7499 72.4997 59.9366 72.4997H60.5526V74.0117H59.0266C58.2613 74.0117 57.8413 73.6711 57.7666 72.9897C57.2253 73.8204 56.4273 74.2357 55.3726 74.2357C54.7379 74.2357 54.2106 74.0491 53.7906 73.6757C53.3706 73.3024 53.1606 72.8171 53.1606 72.2197ZM57.5566 71.1417V70.6937C56.7539 70.7964 56.1566 70.9411 55.7646 71.1277C55.3726 71.3144 55.1766 71.6131 55.1766 72.0237C55.1766 72.5277 55.4799 72.7797 56.0866 72.7797C56.5066 72.7797 56.8566 72.6397 57.1366 72.3597C57.4166 72.0797 57.5566 71.6737 57.5566 71.1417Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.6162 87.7757C14.6002 86.5517 14.9962 85.5197 15.8042 84.6797C16.6202 83.8317 17.6442 83.4157 18.8762 83.4317C19.8442 83.4317 20.6642 83.6717 21.3362 84.1517C22.0082 84.6317 22.4522 85.2397 22.6682 85.9757L21.2162 86.5157C20.8162 85.3477 20.0322 84.7637 18.8642 84.7637C18.0642 84.7637 17.4282 85.0317 16.9562 85.5677C16.4922 86.1037 16.2602 86.8357 16.2602 87.7637C16.2602 88.7157 16.4922 89.4677 16.9562 90.0197C17.4202 90.5717 18.0562 90.8477 18.8642 90.8477C20.0402 90.8477 20.8402 90.2477 21.2642 89.0477L22.6802 89.6117C22.4002 90.4197 21.9362 91.0517 21.2882 91.5077C20.6402 91.9637 19.8322 92.1917 18.8642 92.1917C17.6002 92.2077 16.5722 91.7957 15.7802 90.9557C14.9882 90.1077 14.6002 89.0477 14.6162 87.7757ZM23.929 92.0117V86.0357H25.369V87.3557C25.521 87.0037 25.761 86.6757 26.089 86.3717C26.409 86.0757 26.865 85.9277 27.457 85.9277C27.577 85.9277 27.709 85.9397 27.853 85.9637V87.4637C27.669 87.4317 27.453 87.4157 27.205 87.4157C26.573 87.4157 26.113 87.5797 25.825 87.9077C25.537 88.2357 25.393 88.7637 25.393 89.4917V92.0117H23.929ZM32.7846 86.0357H34.3086L31.8726 92.9117C31.6966 93.4317 31.4686 93.7997 31.1886 94.0157C30.9086 94.2397 30.5126 94.3517 30.0006 94.3517H28.4406V93.1397H29.8446C30.0606 93.1397 30.2246 93.0917 30.3366 92.9957C30.4566 92.9077 30.5606 92.7477 30.6486 92.5157L30.8286 91.9637L28.0446 86.0357H29.6286L30.7326 88.6037L31.4166 90.1997C31.6486 89.4957 31.8246 88.9597 31.9446 88.5917L32.7846 86.0357ZM35.4134 94.3517V86.0357H36.8414V86.8757C37.0334 86.5797 37.2974 86.3357 37.6334 86.1437C37.9774 85.9437 38.3654 85.8437 38.7974 85.8437C39.5574 85.8437 40.1694 86.1357 40.6334 86.7197C41.1054 87.3037 41.3414 88.0677 41.3414 89.0117C41.3414 89.9717 41.1054 90.7437 40.6334 91.3277C40.1694 91.9037 39.5574 92.1917 38.7974 92.1917C38.3654 92.1917 37.9814 92.0957 37.6454 91.9037C37.3174 91.7117 37.0614 91.4677 36.8774 91.1717V92.2517V94.3517H35.4134ZM39.8054 89.0117C39.8054 87.6677 39.3094 86.9957 38.3174 86.9957C37.8614 86.9957 37.4934 87.1717 37.2134 87.5237C36.9414 87.8757 36.8054 88.3717 36.8054 89.0117C36.8054 89.6677 36.9414 90.1717 37.2134 90.5237C37.4934 90.8677 37.8614 91.0397 38.3174 91.0397C39.3094 91.0397 39.8054 90.3637 39.8054 89.0117ZM43.1735 90.4877V87.1757H41.8775V86.0357H43.1735V84.1637H44.6375V86.0357H46.2215V87.1757H44.6375V90.2597C44.6375 90.6277 44.8215 90.8117 45.1895 90.8117H46.4615V92.0117H44.6855C44.2055 92.0117 43.8335 91.8797 43.5695 91.6157C43.3055 91.3437 43.1735 90.9677 43.1735 90.4877ZM47.0637 89.0237C47.0637 88.0957 47.3437 87.3357 47.9037 86.7437C48.4717 86.1517 49.1957 85.8557 50.0757 85.8557C50.9557 85.8557 51.6757 86.1517 52.2357 86.7437C52.8037 87.3357 53.0877 88.0957 53.0877 89.0237C53.0877 89.9597 52.8037 90.7237 52.2357 91.3157C51.6677 91.8997 50.9477 92.1917 50.0757 92.1917C49.2117 92.1917 48.4917 91.8917 47.9157 91.2917C47.3477 90.6917 47.0637 89.9357 47.0637 89.0237ZM51.5757 89.0477C51.5757 88.4077 51.4357 87.9157 51.1557 87.5717C50.8837 87.2197 50.5237 87.0437 50.0757 87.0437C49.6117 87.0437 49.2437 87.2197 48.9717 87.5717C48.7077 87.9157 48.5757 88.4077 48.5757 89.0477C48.5757 89.6797 48.7077 90.1637 48.9717 90.4997C49.2437 90.8357 49.6117 91.0037 50.0757 91.0037C50.5397 91.0037 50.9037 90.8357 51.1677 90.4997C51.4397 90.1637 51.5757 89.6797 51.5757 89.0477ZM54.0246 89.0117C54.0246 88.0837 54.3166 87.3277 54.9006 86.7437C55.4846 86.1517 56.2166 85.8557 57.0966 85.8557C57.7686 85.8557 58.3406 86.0197 58.8126 86.3477C59.2926 86.6757 59.6246 87.1037 59.8086 87.6317L58.4646 88.1117C58.2086 87.3997 57.7406 87.0437 57.0606 87.0437C56.6046 87.0437 56.2326 87.2157 55.9446 87.5597C55.6566 87.9037 55.5126 88.3877 55.5126 89.0117C55.5126 89.6437 55.6566 90.1357 55.9446 90.4877C56.2406 90.8317 56.6166 91.0037 57.0726 91.0037C57.7926 91.0037 58.2846 90.5997 58.5486 89.7917L59.9286 90.2837C59.7046 90.8677 59.3446 91.3317 58.8486 91.6757C58.3606 92.0197 57.7766 92.1917 57.0966 92.1917C56.1926 92.1917 55.4526 91.8997 54.8766 91.3157C54.3086 90.7317 54.0246 89.9637 54.0246 89.0117ZM61.0172 90.0197V86.0357H62.4812V89.6717C62.4812 90.5357 62.8252 90.9677 63.5132 90.9677C64.0252 90.9677 64.3772 90.7637 64.5692 90.3557C64.7692 89.9557 64.8692 89.4517 64.8692 88.8437V86.0357H66.3332V92.0117H64.8812V91.0277C64.4252 91.8037 63.7692 92.1917 62.9132 92.1917C62.3052 92.1917 61.8372 91.9997 61.5092 91.6157C61.1812 91.2237 61.0172 90.6917 61.0172 90.0197ZM68.1087 92.0117V86.0357H69.5487V87.3557C69.7007 87.0037 69.9407 86.6757 70.2687 86.3717C70.5887 86.0757 71.0447 85.9277 71.6367 85.9277C71.7567 85.9277 71.8887 85.9397 72.0327 85.9637V87.4637C71.8487 87.4317 71.6327 87.4157 71.3847 87.4157C70.7527 87.4157 70.2927 87.5797 70.0047 87.9077C69.7167 88.2357 69.5727 88.7637 69.5727 89.4917V92.0117H68.1087ZM73.1243 92.0117V86.0357H74.5643V87.3557C74.7163 87.0037 74.9563 86.6757 75.2843 86.3717C75.6043 86.0757 76.0603 85.9277 76.6523 85.9277C76.7723 85.9277 76.9043 85.9397 77.0483 85.9637V87.4637C76.8643 87.4317 76.6483 87.4157 76.4003 87.4157C75.7683 87.4157 75.3083 87.5797 75.0203 87.9077C74.7323 88.2357 74.5883 88.7637 74.5883 89.4917V92.0117H73.1243ZM77.521 89.0237C77.521 88.0877 77.793 87.3277 78.337 86.7437C78.889 86.1517 79.581 85.8557 80.413 85.8557C81.261 85.8557 81.941 86.1437 82.453 86.7197C82.965 87.2877 83.221 88.0237 83.221 88.9277C83.221 89.0557 83.213 89.2077 83.197 89.3837H78.973C78.997 89.9357 79.141 90.3517 79.405 90.6317C79.669 90.9037 80.017 91.0397 80.449 91.0397C81.105 91.0397 81.593 90.6797 81.913 89.9597L83.233 90.4517C82.769 91.6117 81.837 92.1917 80.437 92.1917C79.549 92.1917 78.841 91.9117 78.313 91.3517C77.785 90.7837 77.521 90.0077 77.521 89.0237ZM79.021 88.3037H81.745C81.721 87.8797 81.589 87.5477 81.349 87.3077C81.117 87.0677 80.805 86.9477 80.413 86.9477C80.045 86.9477 79.733 87.0677 79.477 87.3077C79.229 87.5477 79.077 87.8797 79.021 88.3037ZM84.6087 92.0117V86.0357H86.0367V86.9837C86.2047 86.6717 86.4527 86.4077 86.7807 86.1917C87.1087 85.9677 87.5047 85.8557 87.9687 85.8557C89.3127 85.8557 89.9847 86.5837 89.9847 88.0397V92.0117H88.5207V88.3637C88.5207 87.5077 88.1607 87.0797 87.4407 87.0797C87.0247 87.0797 86.7167 87.2037 86.5167 87.4517C86.2207 87.8117 86.0727 88.4197 86.0727 89.2757V92.0117H84.6087ZM91.2785 89.0117C91.2785 88.0837 91.5705 87.3277 92.1545 86.7437C92.7385 86.1517 93.4705 85.8557 94.3505 85.8557C95.0225 85.8557 95.5945 86.0197 96.0665 86.3477C96.5465 86.6757 96.8785 87.1037 97.0625 87.6317L95.7185 88.1117C95.4625 87.3997 94.9945 87.0437 94.3145 87.0437C93.8585 87.0437 93.4865 87.2157 93.1985 87.5597C92.9105 87.9037 92.7665 88.3877 92.7665 89.0117C92.7665 89.6437 92.9105 90.1357 93.1985 90.4877C93.4945 90.8317 93.8705 91.0037 94.3265 91.0037C95.0465 91.0037 95.5385 90.5997 95.8025 89.7917L97.1825 90.2837C96.9585 90.8677 96.5985 91.3317 96.1025 91.6757C95.6145 92.0197 95.0305 92.1917 94.3505 92.1917C93.4465 92.1917 92.7065 91.8997 92.1305 91.3157C91.5625 90.7317 91.2785 89.9637 91.2785 89.0117ZM102.183 86.0357H103.707L101.271 92.9117C101.095 93.4317 100.867 93.7997 100.587 94.0157C100.307 94.2397 99.9111 94.3517 99.3991 94.3517H97.8391V93.1397H99.2431C99.4591 93.1397 99.6231 93.0917 99.7351 92.9957C99.8551 92.9077 99.9591 92.7477 100.047 92.5157L100.227 91.9637L97.4431 86.0357H99.0271L100.131 88.6037L100.815 90.1997C101.047 89.4957 101.223 88.9597 101.343 88.5917L102.183 86.0357Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2407"
                        x="0"
                        y="0.0107422"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2407"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2407"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2407"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2407"
                        x1="29.0005"
                        y1="18.0107"
                        x2="29.0005"
                        y2="48.0117"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_389_2407"
                        x1="21.9451"
                        y1="39.9476"
                        x2="36.1131"
                        y2="26.1538"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#CF41E8"></stop>
                        <stop offset="1" stop-color="#10F2B0"></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2407">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">Bank</span>
                <div className="flex gap-2">
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2444)">
                      <rect
                        y="0.0117188"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0117"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2617"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2444)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2444)">
                        <path
                          d="M43 33.002C43 40.734 36.7321 47.002 29 47.002C21.2679 47.002 15 40.734 15 33.002C15 25.2699 21.2679 19.002 29 19.002C36.7321 19.002 43 25.2699 43 33.002Z"
                          fill="#626378"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M36.4995 29.8232C36.4995 30.6897 35.8425 31.4026 34.9995 31.4911V36.4096C35.5373 36.741 35.9584 37.2552 36.1679 37.8837C36.474 38.802 35.7905 39.7503 34.8225 39.7503H23.1765C22.2085 39.7503 21.525 38.802 21.8311 37.8837C22.0407 37.2552 22.4618 36.741 22.9995 36.4096V31.4911C22.1565 31.4026 21.4995 30.6897 21.4995 29.8232C21.4995 29.188 21.8584 28.6073 22.4266 28.3232L27.6578 25.7076C28.5025 25.2853 29.4965 25.2853 30.3412 25.7076L35.5724 28.3232C36.1406 28.6073 36.4995 29.188 36.4995 29.8232ZM31.9995 31.5003H33.4995V36.0003H31.9995V31.5003ZM25.9995 36.0003H24.4995V31.5003H25.9995V36.0003ZM27.4995 36.0003V31.5003H30.4995V36.0003H27.4995Z"
                          fill="white"
                        ></path>
                      </g>
                      <path
                        d="M15.2033 74.0127V64.2127H19.8933C20.948 64.2127 21.76 64.4274 22.3293 64.8567C22.8987 65.2767 23.1833 65.8507 23.1833 66.5787C23.1833 67.7267 22.5393 68.4967 21.2513 68.8887C21.9327 69.0007 22.4787 69.2807 22.8893 69.7287C23.3 70.1674 23.5053 70.6854 23.5053 71.2827C23.5053 72.1134 23.1693 72.776 22.4973 73.2707C21.8253 73.7654 20.962 74.0127 19.9073 74.0127H15.2033ZM17.3313 68.0907H19.5713C20.5607 68.0907 21.0553 67.736 21.0553 67.0267C21.0553 66.6534 20.9293 66.3874 20.6773 66.2287C20.4347 66.0607 20.066 65.9767 19.5713 65.9767H17.3313V68.0907ZM17.3313 72.2487H19.5993C20.738 72.2487 21.3073 71.8427 21.3073 71.0307C21.3073 70.2094 20.738 69.7987 19.5993 69.7987H17.3313V72.2487ZM24.6498 72.2207C24.6592 71.7634 24.7712 71.3667 24.9858 71.0307C25.2005 70.6947 25.5085 70.424 25.9098 70.2187C26.3205 70.0134 26.7732 69.8547 27.2678 69.7427C27.7718 69.6214 28.3645 69.528 29.0458 69.4627V69.1967C29.0458 68.5527 28.6632 68.2307 27.8978 68.2307C27.0485 68.2307 26.5352 68.5994 26.3578 69.3367L24.5658 68.9447C24.6218 68.3567 24.9485 67.8527 25.5458 67.4327C26.1525 67.0127 26.9318 66.8027 27.8838 66.8027C28.8918 66.8027 29.6618 67.0314 30.1938 67.4887C30.7352 67.946 31.0058 68.6227 31.0058 69.5187V72.0807C31.0058 72.2674 31.0292 72.384 31.0758 72.4307C31.1225 72.4774 31.2392 72.5007 31.4258 72.5007H32.0418V74.0127H30.5158C29.7505 74.0127 29.3305 73.672 29.2558 72.9907C28.7145 73.8214 27.9165 74.2367 26.8618 74.2367C26.2272 74.2367 25.6998 74.05 25.2798 73.6767C24.8598 73.3034 24.6498 72.818 24.6498 72.2207ZM29.0458 71.1427V70.6947C28.2432 70.7974 27.6458 70.942 27.2538 71.1287C26.8618 71.3154 26.6658 71.614 26.6658 72.0247C26.6658 72.5287 26.9692 72.7807 27.5758 72.7807C27.9958 72.7807 28.3458 72.6407 28.6258 72.3607C28.9058 72.0807 29.0458 71.6747 29.0458 71.1427ZM33.0949 74.0127V67.0127H35.0269V68.0907C35.5496 67.232 36.3009 66.8027 37.2809 66.8027C38.0462 66.8027 38.6202 67.022 39.0029 67.4607C39.3949 67.8994 39.5909 68.52 39.5909 69.3227V74.0127H37.6029V69.7567C37.6029 68.8794 37.2296 68.4407 36.4829 68.4407C36.0629 68.4407 35.7502 68.5667 35.5449 68.8187C35.2369 69.192 35.0829 69.8174 35.0829 70.6947V74.0127H33.0949ZM46.6424 74.0127L44.4584 71.1007L43.4364 72.0947V74.0127H41.4484V64.2127H43.4364V67.3347V69.8407L46.2504 67.0127H48.6864L45.8304 69.7847L49.1484 74.0127H46.6424Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.5732 87.7767C14.5572 86.5527 14.9532 85.5207 15.7612 84.6807C16.5772 83.8327 17.6012 83.4167 18.8332 83.4327C19.8012 83.4327 20.6212 83.6727 21.2932 84.1527C21.9652 84.6327 22.4092 85.2407 22.6252 85.9767L21.1732 86.5167C20.7732 85.3487 19.9892 84.7647 18.8212 84.7647C18.0212 84.7647 17.3852 85.0327 16.9132 85.5687C16.4492 86.1047 16.2172 86.8367 16.2172 87.7647C16.2172 88.7167 16.4492 89.4687 16.9132 90.0207C17.3772 90.5727 18.0132 90.8487 18.8212 90.8487C19.9972 90.8487 20.7972 90.2487 21.2212 89.0487L22.6372 89.6127C22.3572 90.4207 21.8932 91.0527 21.2452 91.5087C20.5972 91.9647 19.7892 92.1927 18.8212 92.1927C17.5572 92.2087 16.5292 91.7967 15.7372 90.9567C14.9452 90.1087 14.5572 89.0487 14.5732 87.7767ZM23.526 90.4767C23.526 89.7087 23.866 89.1527 24.546 88.8087C25.218 88.4567 26.13 88.2247 27.282 88.1127V87.9087C27.282 87.2847 26.918 86.9727 26.19 86.9727C25.438 86.9727 24.966 87.3047 24.774 87.9687L23.442 87.6207C23.506 87.1407 23.786 86.7287 24.282 86.3847C24.778 86.0327 25.414 85.8567 26.19 85.8567C27.014 85.8567 27.642 86.0487 28.074 86.4327C28.514 86.8087 28.734 87.3607 28.734 88.0887V90.5007C28.734 90.6527 28.754 90.7527 28.794 90.8007C28.842 90.8407 28.942 90.8607 29.094 90.8607H29.658V92.0127H28.53C27.874 92.0127 27.514 91.7167 27.45 91.1247C26.978 91.8367 26.306 92.1927 25.434 92.1927C24.874 92.1927 24.414 92.0367 24.054 91.7247C23.702 91.4127 23.526 90.9967 23.526 90.4767ZM27.282 89.5527V89.0727C26.53 89.1527 25.962 89.2927 25.578 89.4927C25.202 89.6847 25.014 89.9647 25.014 90.3327C25.014 90.5727 25.09 90.7607 25.242 90.8967C25.402 91.0247 25.626 91.0887 25.914 91.0887C26.306 91.0887 26.63 90.9567 26.886 90.6927C27.15 90.4207 27.282 90.0407 27.282 89.5527ZM30.0846 90.4767L31.4406 90.0327C31.5846 90.7367 32.0646 91.0887 32.8806 91.0887C33.2166 91.0887 33.4766 91.0287 33.6606 90.9087C33.8526 90.7887 33.9486 90.6207 33.9486 90.4047C33.9486 90.2127 33.8806 90.0567 33.7446 89.9367C33.6166 89.8167 33.3886 89.7247 33.0606 89.6607L32.2686 89.5167C31.6126 89.3807 31.1246 89.1807 30.8046 88.9167C30.4926 88.6527 30.3366 88.2527 30.3366 87.7167C30.3366 87.1647 30.5606 86.7167 31.0086 86.3727C31.4646 86.0287 32.0486 85.8567 32.7606 85.8567C33.4246 85.8567 33.9686 85.9967 34.3926 86.2767C34.8166 86.5487 35.1046 86.8887 35.2566 87.2967L34.0206 87.8247C33.7966 87.2167 33.3606 86.9127 32.7126 86.9127C32.4006 86.9127 32.1566 86.9767 31.9806 87.1047C31.8126 87.2247 31.7286 87.3847 31.7286 87.5847C31.7286 87.7607 31.7926 87.9007 31.9206 88.0047C32.0486 88.1007 32.2886 88.1847 32.6406 88.2567L33.4206 88.4007C33.9806 88.5047 34.4606 88.7047 34.8606 89.0007C35.2606 89.2887 35.4606 89.7087 35.4606 90.2607C35.4606 90.8447 35.2246 91.3127 34.7526 91.6647C34.2806 92.0087 33.6366 92.1807 32.8206 92.1807C32.1406 92.1807 31.5446 92.0287 31.0326 91.7247C30.5286 91.4127 30.2126 90.9967 30.0846 90.4767ZM36.765 92.0127V83.6127H38.229V85.7967V86.9847C38.397 86.6887 38.629 86.4327 38.925 86.2167C39.237 85.9767 39.661 85.8567 40.197 85.8567C40.837 85.8567 41.321 86.0487 41.649 86.4327C41.977 86.8167 42.141 87.3527 42.141 88.0407V92.0127H40.677V88.3647C40.677 87.5087 40.317 87.0807 39.597 87.0807C39.181 87.0807 38.873 87.2047 38.673 87.4527C38.377 87.8127 38.229 88.4207 38.229 89.2767V92.0127H36.765Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2444"
                        x="0"
                        y="0.0117188"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2444"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2444"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2444"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2444"
                        x1="29.0005"
                        y1="18.0117"
                        x2="29.0005"
                        y2="48.0127"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2444">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.002)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2499)">
                      <rect
                        y="0.0117188"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0117"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2617"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2499)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2499)">
                        <path
                          d="M43 33.002C43 40.734 36.7321 47.002 29 47.002C21.2679 47.002 15 40.734 15 33.002C15 25.2699 21.2679 19.002 29 19.002C36.7321 19.002 43 25.2699 43 33.002Z"
                          fill="white"
                        ></path>
                        <path
                          d="M27.8 35.9134H26.3419L27.2539 30.1052H28.7119L27.8 35.9134Z"
                          fill="#2537C3"
                        ></path>
                        <path
                          d="M33.0852 30.2473C32.7976 30.1298 32.3414 30 31.7774 30C30.3374 30 29.3235 30.7909 29.3172 31.9215C29.3053 32.7558 30.0432 33.2191 30.5951 33.4973C31.1593 33.7815 31.351 33.967 31.351 34.2204C31.3453 34.6095 30.8952 34.7888 30.4754 34.7888C29.8932 34.7888 29.5813 34.6964 29.1073 34.4799L28.9153 34.3871L28.7113 35.6909C29.0532 35.8514 29.6833 35.9938 30.3374 36C31.8674 36 32.8634 35.2214 32.8752 34.0165C32.881 33.3553 32.4914 32.8486 31.6513 32.4347C31.1413 32.1689 30.829 31.9897 30.829 31.7178C30.835 31.4706 31.0932 31.2174 31.6688 31.2174C32.1429 31.205 32.4911 31.3224 32.755 31.4398L32.8869 31.5015L33.0852 30.2473Z"
                          fill="#2537C3"
                        ></path>
                        <path
                          d="M35.0238 33.8558C35.1439 33.5221 35.606 32.2307 35.606 32.2307C35.5999 32.2431 35.7258 31.8909 35.7978 31.6746L35.8997 32.1751C35.8997 32.1751 36.1758 33.5654 36.2358 33.8558C36.0079 33.8558 35.3118 33.8558 35.0238 33.8558ZM36.8237 30.1052H35.6958C35.348 30.1052 35.0838 30.2102 34.9337 30.5871L32.7679 35.9133H34.2979C34.2979 35.9133 34.5498 35.1964 34.6039 35.0421C34.7717 35.0421 36.26 35.0421 36.476 35.0421C36.5178 35.246 36.6499 35.9133 36.6499 35.9133H38L36.8237 30.1052Z"
                          fill="#2537C3"
                        ></path>
                        <path
                          d="M25.1239 30.1052L23.6959 34.0658L23.5399 33.2626C23.2759 32.3357 22.4479 31.3287 21.5239 30.828L22.8319 35.9072H24.3738L26.6657 30.1052H25.1239Z"
                          fill="#2537C3"
                        ></path>
                        <path
                          d="M22.3699 30.1052H20.024L20 30.2226C21.83 30.7046 23.0419 31.866 23.5399 33.2626L23.0299 30.5935C22.9459 30.2225 22.6879 30.1175 22.3699 30.1052Z"
                          fill="#2537C3"
                        ></path>
                      </g>
                      <path
                        d="M17.8587 74.0127L14.4707 64.2127H16.8367L18.4887 69.5187L19.3567 72.3047C19.5434 71.7634 19.8421 70.8347 20.2527 69.5187L21.9047 64.2127H24.2427L20.8687 74.0127H17.8587ZM25.3019 66.0607V64.1847H27.4159V66.0607H25.3019ZM25.3719 74.0127V67.0127H27.3599V74.0127H25.3719ZM28.6807 72.2067L30.4867 71.6327C30.5427 71.8847 30.6781 72.146 30.8927 72.4167C31.0981 72.678 31.4947 72.8087 32.0827 72.8087C32.4094 72.8087 32.6661 72.7434 32.8527 72.6127C33.0487 72.482 33.1467 72.314 33.1467 72.1087C33.1467 71.9127 33.0814 71.7587 32.9507 71.6467C32.8201 71.5254 32.5961 71.432 32.2787 71.3667L31.2847 71.1707C30.4727 71.012 29.8801 70.774 29.5067 70.4567C29.1427 70.1394 28.9607 69.6587 28.9607 69.0147C28.9607 68.3427 29.2314 67.806 29.7727 67.4047C30.3141 67.0034 31.0467 66.8027 31.9707 66.8027C32.7361 66.8027 33.3707 66.9614 33.8747 67.2787C34.3881 67.596 34.7381 67.974 34.9247 68.4127L33.2867 69.1547C33.0441 68.5014 32.5727 68.1747 31.8727 68.1747C31.5554 68.1747 31.3081 68.2354 31.1307 68.3567C30.9627 68.478 30.8787 68.6414 30.8787 68.8467C30.8787 69.0427 30.9441 69.192 31.0747 69.2947C31.2147 69.388 31.4714 69.4674 31.8447 69.5327L32.8107 69.7147C34.4161 70.0227 35.2187 70.7507 35.2187 71.8987C35.2187 72.608 34.9294 73.1727 34.3507 73.5927C33.7721 74.0034 32.9787 74.2087 31.9707 74.2087C31.1401 74.2087 30.4167 74.0267 29.8007 73.6627C29.1941 73.2987 28.8207 72.8134 28.6807 72.2067ZM36.2182 72.2207C36.2275 71.7634 36.3395 71.3667 36.5542 71.0307C36.7689 70.6947 37.0769 70.424 37.4782 70.2187C37.8889 70.0134 38.3415 69.8547 38.8362 69.7427C39.3402 69.6214 39.9329 69.528 40.6142 69.4627V69.1967C40.6142 68.5527 40.2315 68.2307 39.4662 68.2307C38.6169 68.2307 38.1035 68.5994 37.9262 69.3367L36.1342 68.9447C36.1902 68.3567 36.5169 67.8527 37.1142 67.4327C37.7209 67.0127 38.5002 66.8027 39.4522 66.8027C40.4602 66.8027 41.2302 67.0314 41.7622 67.4887C42.3035 67.946 42.5742 68.6227 42.5742 69.5187V72.0807C42.5742 72.2674 42.5975 72.384 42.6442 72.4307C42.6909 72.4774 42.8075 72.5007 42.9942 72.5007H43.6102V74.0127H42.0842C41.3189 74.0127 40.8989 73.672 40.8242 72.9907C40.2829 73.8214 39.4849 74.2367 38.4302 74.2367C37.7955 74.2367 37.2682 74.05 36.8482 73.6767C36.4282 73.3034 36.2182 72.818 36.2182 72.2207ZM40.6142 71.1427V70.6947C39.8115 70.7974 39.2142 70.942 38.8222 71.1287C38.4302 71.3154 38.2342 71.614 38.2342 72.0247C38.2342 72.5287 38.5375 72.7807 39.1442 72.7807C39.5642 72.7807 39.9142 72.6407 40.1942 72.3607C40.4742 72.0807 40.6142 71.6747 40.6142 71.1427Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.5732 87.7767C14.5572 86.5527 14.9532 85.5207 15.7612 84.6807C16.5772 83.8327 17.6012 83.4167 18.8332 83.4327C19.8012 83.4327 20.6212 83.6727 21.2932 84.1527C21.9652 84.6327 22.4092 85.2407 22.6252 85.9767L21.1732 86.5167C20.7732 85.3487 19.9892 84.7647 18.8212 84.7647C18.0212 84.7647 17.3852 85.0327 16.9132 85.5687C16.4492 86.1047 16.2172 86.8367 16.2172 87.7647C16.2172 88.7167 16.4492 89.4687 16.9132 90.0207C17.3772 90.5727 18.0132 90.8487 18.8212 90.8487C19.9972 90.8487 20.7972 90.2487 21.2212 89.0487L22.6372 89.6127C22.3572 90.4207 21.8932 91.0527 21.2452 91.5087C20.5972 91.9647 19.7892 92.1927 18.8212 92.1927C17.5572 92.2087 16.5292 91.7967 15.7372 90.9567C14.9452 90.1087 14.5572 89.0487 14.5732 87.7767ZM23.526 90.4767C23.526 89.7087 23.866 89.1527 24.546 88.8087C25.218 88.4567 26.13 88.2247 27.282 88.1127V87.9087C27.282 87.2847 26.918 86.9727 26.19 86.9727C25.438 86.9727 24.966 87.3047 24.774 87.9687L23.442 87.6207C23.506 87.1407 23.786 86.7287 24.282 86.3847C24.778 86.0327 25.414 85.8567 26.19 85.8567C27.014 85.8567 27.642 86.0487 28.074 86.4327C28.514 86.8087 28.734 87.3607 28.734 88.0887V90.5007C28.734 90.6527 28.754 90.7527 28.794 90.8007C28.842 90.8407 28.942 90.8607 29.094 90.8607H29.658V92.0127H28.53C27.874 92.0127 27.514 91.7167 27.45 91.1247C26.978 91.8367 26.306 92.1927 25.434 92.1927C24.874 92.1927 24.414 92.0367 24.054 91.7247C23.702 91.4127 23.526 90.9967 23.526 90.4767ZM27.282 89.5527V89.0727C26.53 89.1527 25.962 89.2927 25.578 89.4927C25.202 89.6847 25.014 89.9647 25.014 90.3327C25.014 90.5727 25.09 90.7607 25.242 90.8967C25.402 91.0247 25.626 91.0887 25.914 91.0887C26.306 91.0887 26.63 90.9567 26.886 90.6927C27.15 90.4207 27.282 90.0407 27.282 89.5527ZM30.0846 90.4767L31.4406 90.0327C31.5846 90.7367 32.0646 91.0887 32.8806 91.0887C33.2166 91.0887 33.4766 91.0287 33.6606 90.9087C33.8526 90.7887 33.9486 90.6207 33.9486 90.4047C33.9486 90.2127 33.8806 90.0567 33.7446 89.9367C33.6166 89.8167 33.3886 89.7247 33.0606 89.6607L32.2686 89.5167C31.6126 89.3807 31.1246 89.1807 30.8046 88.9167C30.4926 88.6527 30.3366 88.2527 30.3366 87.7167C30.3366 87.1647 30.5606 86.7167 31.0086 86.3727C31.4646 86.0287 32.0486 85.8567 32.7606 85.8567C33.4246 85.8567 33.9686 85.9967 34.3926 86.2767C34.8166 86.5487 35.1046 86.8887 35.2566 87.2967L34.0206 87.8247C33.7966 87.2167 33.3606 86.9127 32.7126 86.9127C32.4006 86.9127 32.1566 86.9767 31.9806 87.1047C31.8126 87.2247 31.7286 87.3847 31.7286 87.5847C31.7286 87.7607 31.7926 87.9007 31.9206 88.0047C32.0486 88.1007 32.2886 88.1847 32.6406 88.2567L33.4206 88.4007C33.9806 88.5047 34.4606 88.7047 34.8606 89.0007C35.2606 89.2887 35.4606 89.7087 35.4606 90.2607C35.4606 90.8447 35.2246 91.3127 34.7526 91.6647C34.2806 92.0087 33.6366 92.1807 32.8206 92.1807C32.1406 92.1807 31.5446 92.0287 31.0326 91.7247C30.5286 91.4127 30.2126 90.9967 30.0846 90.4767ZM36.765 92.0127V83.6127H38.229V85.7967V86.9847C38.397 86.6887 38.629 86.4327 38.925 86.2167C39.237 85.9767 39.661 85.8567 40.197 85.8567C40.837 85.8567 41.321 86.0487 41.649 86.4327C41.977 86.8167 42.141 87.3527 42.141 88.0407V92.0127H40.677V88.3647C40.677 87.5087 40.317 87.0807 39.597 87.0807C39.181 87.0807 38.873 87.2047 38.673 87.4527C38.377 87.8127 38.229 88.4207 38.229 89.2767V92.0127H36.765Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2499"
                        x="0"
                        y="0.0117188"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2499"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2499"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2499"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2499"
                        x1="29.0005"
                        y1="18.0117"
                        x2="29.0005"
                        y2="48.0127"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2499">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.002)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2430)">
                      <rect
                        y="0.0117188"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0117"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2617"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2430)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2430)">
                        <path
                          d="M43 33.002C43 40.734 36.7321 47.002 29 47.002C21.2679 47.002 15 40.734 15 33.002C15 25.2699 21.2679 19.002 29 19.002C36.7321 19.002 43 25.2699 43 33.002Z"
                          fill="white"
                        ></path>
                        <path
                          d="M31.4458 28.6863H26.5581V37.3139H31.4458V28.6863Z"
                          fill="#FF5F00"
                        ></path>
                        <path
                          d="M26.8677 33.0001C26.8677 31.2475 27.7046 29.6928 28.9925 28.6863C28.0065 27.9233 26.7944 27.5104 25.5477 27.513C22.4603 27.513 19.9624 29.966 19.9624 33.0001C19.9624 36.0343 22.4603 38.4873 25.5477 38.4873C26.7944 38.4898 28.0065 38.077 28.9925 37.3139C28.3317 36.8056 27.7965 36.1522 27.4281 35.4043C27.0597 34.6564 26.8679 33.8338 26.8677 33.0001Z"
                          fill="#EB001B"
                        ></path>
                        <path
                          d="M38.0384 33.0001C38.0384 36.0343 35.5405 38.4873 32.4531 38.4873C31.2064 38.4898 29.9943 38.077 29.0083 37.3139C29.6705 36.8067 30.2068 36.1537 30.5756 35.4055C30.9445 34.6573 31.1359 33.8342 31.135 33.0001C31.135 31.2475 30.2962 29.6928 29.0083 28.6863C29.9943 27.9233 31.2064 27.5104 32.4531 27.513C35.5405 27.513 38.0384 29.9825 38.0384 33.0001Z"
                          fill="#F79E1B"
                        ></path>
                      </g>
                      <path
                        d="M15.6028 74.0127V64.2127H19.0888L20.6988 68.9867C21.0068 69.9107 21.2541 70.606 21.4408 71.0727C21.6274 70.606 21.8748 69.9107 22.1828 68.9867L23.8208 64.2127H27.1808V74.0127H25.0528V69.9807V66.0187L22.3228 74.0127H20.4328L17.7308 66.0327V69.9807V74.0127H15.6028ZM28.7817 72.2207C28.791 71.7634 28.903 71.3667 29.1177 71.0307C29.3323 70.6947 29.6403 70.424 30.0417 70.2187C30.4523 70.0134 30.905 69.8547 31.3997 69.7427C31.9037 69.6214 32.4963 69.528 33.1777 69.4627V69.1967C33.1777 68.5527 32.795 68.2307 32.0297 68.2307C31.1803 68.2307 30.667 68.5994 30.4897 69.3367L28.6977 68.9447C28.7537 68.3567 29.0803 67.8527 29.6777 67.4327C30.2843 67.0127 31.0637 66.8027 32.0157 66.8027C33.0237 66.8027 33.7937 67.0314 34.3257 67.4887C34.867 67.946 35.1377 68.6227 35.1377 69.5187V72.0807C35.1377 72.2674 35.161 72.384 35.2077 72.4307C35.2543 72.4774 35.371 72.5007 35.5577 72.5007H36.1737V74.0127H34.6477C33.8823 74.0127 33.4623 73.672 33.3877 72.9907C32.8463 73.8214 32.0483 74.2367 30.9937 74.2367C30.359 74.2367 29.8317 74.05 29.4117 73.6767C28.9917 73.3034 28.7817 72.818 28.7817 72.2207ZM33.1777 71.1427V70.6947C32.375 70.7974 31.7777 70.942 31.3857 71.1287C30.9937 71.3154 30.7977 71.614 30.7977 72.0247C30.7977 72.5287 31.101 72.7807 31.7077 72.7807C32.1277 72.7807 32.4777 72.6407 32.7577 72.3607C33.0377 72.0807 33.1777 71.6747 33.1777 71.1427ZM36.6387 72.2067L38.4447 71.6327C38.5007 71.8847 38.6361 72.146 38.8507 72.4167C39.0561 72.678 39.4527 72.8087 40.0407 72.8087C40.3674 72.8087 40.6241 72.7434 40.8107 72.6127C41.0067 72.482 41.1047 72.314 41.1047 72.1087C41.1047 71.9127 41.0394 71.7587 40.9087 71.6467C40.7781 71.5254 40.5541 71.432 40.2367 71.3667L39.2427 71.1707C38.4307 71.012 37.8381 70.774 37.4647 70.4567C37.1007 70.1394 36.9187 69.6587 36.9187 69.0147C36.9187 68.3427 37.1894 67.806 37.7307 67.4047C38.2721 67.0034 39.0047 66.8027 39.9287 66.8027C40.6941 66.8027 41.3287 66.9614 41.8327 67.2787C42.3461 67.596 42.6961 67.974 42.8827 68.4127L41.2447 69.1547C41.0021 68.5014 40.5307 68.1747 39.8307 68.1747C39.5134 68.1747 39.2661 68.2354 39.0887 68.3567C38.9207 68.478 38.8367 68.6414 38.8367 68.8467C38.8367 69.0427 38.9021 69.192 39.0327 69.2947C39.1727 69.388 39.4294 69.4674 39.8027 69.5327L40.7687 69.7147C42.3741 70.0227 43.1767 70.7507 43.1767 71.8987C43.1767 72.608 42.8874 73.1727 42.3087 73.5927C41.7301 74.0034 40.9367 74.2087 39.9287 74.2087C39.0981 74.2087 38.3747 74.0267 37.7587 73.6627C37.1521 73.2987 36.7787 72.8134 36.6387 72.2067ZM45.0501 72.1787V68.5247H43.5801V67.0127H45.0501V64.8147H47.0381V67.0127H48.8581V68.5247H47.0381V71.8147C47.0381 72.0294 47.0848 72.188 47.1781 72.2907C47.2808 72.384 47.4395 72.4307 47.6541 72.4307H49.1661V74.0127H46.8281C46.2775 74.0127 45.8435 73.8447 45.5261 73.5087C45.2088 73.1727 45.0501 72.7294 45.0501 72.1787ZM49.7804 70.4987C49.7804 69.4254 50.1164 68.5434 50.7884 67.8527C51.4604 67.1527 52.305 66.8027 53.3224 66.8027C54.377 66.8027 55.2077 67.148 55.8144 67.8387C56.421 68.5294 56.7244 69.4207 56.7244 70.5127C56.7244 70.7274 56.7197 70.886 56.7104 70.9887H51.7684C51.7964 71.558 51.9504 71.992 52.2304 72.2907C52.5104 72.58 52.879 72.7247 53.3364 72.7247C54.0644 72.7247 54.6057 72.3187 54.9604 71.5067L56.7384 72.1927C56.4957 72.7527 56.1037 73.238 55.5624 73.6487C55.0304 74.0407 54.2884 74.2367 53.3364 74.2367C52.263 74.2367 51.3997 73.9007 50.7464 73.2287C50.1024 72.5474 49.7804 71.6374 49.7804 70.4987ZM51.8384 69.5887H54.7504C54.6477 68.6834 54.1717 68.2307 53.3224 68.2307C52.921 68.2307 52.5897 68.3474 52.3284 68.5807C52.067 68.814 51.9037 69.15 51.8384 69.5887ZM58.2267 74.0127V67.0127H60.1727V68.6087C60.3501 68.17 60.6347 67.7687 61.0267 67.4047C61.4281 67.05 61.9927 66.8727 62.7207 66.8727C62.8887 66.8727 62.9961 66.8774 63.0427 66.8867V68.9307C62.7721 68.9027 62.5154 68.8887 62.2727 68.8887C61.5354 68.8887 61.0081 69.0614 60.6907 69.4067C60.3734 69.7427 60.2147 70.34 60.2147 71.1987V74.0127H58.2267ZM63.4929 70.4987C63.4929 69.4067 63.8523 68.52 64.5709 67.8387C65.2896 67.148 66.1856 66.8027 67.2589 66.8027C68.0616 66.8027 68.7569 66.994 69.3449 67.3767C69.9329 67.7594 70.3483 68.268 70.5909 68.9027L68.7569 69.5887C68.4676 68.7767 67.9449 68.3707 67.1889 68.3707C66.6943 68.3707 66.2883 68.5574 65.9709 68.9307C65.6536 69.304 65.4949 69.8267 65.4949 70.4987C65.4949 71.1707 65.6536 71.698 65.9709 72.0807C66.2976 72.4634 66.7083 72.6547 67.2029 72.6547C67.9683 72.6547 68.5096 72.2114 68.8269 71.3247L70.7029 71.9967C70.4323 72.678 69.9889 73.224 69.3729 73.6347C68.7569 74.036 68.0476 74.2367 67.2449 74.2367C66.1529 74.2367 65.2523 73.8914 64.5429 73.2007C63.8429 72.51 63.4929 71.6094 63.4929 70.4987ZM71.5473 72.2207C71.5566 71.7634 71.6686 71.3667 71.8833 71.0307C72.098 70.6947 72.406 70.424 72.8073 70.2187C73.218 70.0134 73.6706 69.8547 74.1653 69.7427C74.6693 69.6214 75.262 69.528 75.9433 69.4627V69.1967C75.9433 68.5527 75.5606 68.2307 74.7953 68.2307C73.946 68.2307 73.4326 68.5994 73.2553 69.3367L71.4633 68.9447C71.5193 68.3567 71.846 67.8527 72.4433 67.4327C73.05 67.0127 73.8293 66.8027 74.7813 66.8027C75.7893 66.8027 76.5593 67.0314 77.0913 67.4887C77.6326 67.946 77.9033 68.6227 77.9033 69.5187V72.0807C77.9033 72.2674 77.9266 72.384 77.9733 72.4307C78.02 72.4774 78.1366 72.5007 78.3233 72.5007H78.9393V74.0127H77.4133C76.648 74.0127 76.228 73.672 76.1533 72.9907C75.612 73.8214 74.814 74.2367 73.7593 74.2367C73.1246 74.2367 72.5973 74.05 72.1773 73.6767C71.7573 73.3034 71.5473 72.818 71.5473 72.2207ZM75.9433 71.1427V70.6947C75.1406 70.7974 74.5433 70.942 74.1513 71.1287C73.7593 71.3154 73.5633 71.614 73.5633 72.0247C73.5633 72.5287 73.8666 72.7807 74.4733 72.7807C74.8933 72.7807 75.2433 72.6407 75.5233 72.3607C75.8033 72.0807 75.9433 71.6747 75.9433 71.1427ZM79.9924 74.0127V67.0127H81.9384V68.6087C82.1157 68.17 82.4004 67.7687 82.7924 67.4047C83.1937 67.05 83.7584 66.8727 84.4864 66.8727C84.6544 66.8727 84.7617 66.8774 84.8084 66.8867V68.9307C84.5377 68.9027 84.281 68.8887 84.0384 68.8887C83.301 68.8887 82.7737 69.0614 82.4564 69.4067C82.139 69.7427 81.9804 70.34 81.9804 71.1987V74.0127H79.9924ZM85.3139 70.5127C85.3139 69.3927 85.5892 68.4967 86.1399 67.8247C86.6906 67.1434 87.4279 66.8027 88.3519 66.8027C88.8559 66.8027 89.3039 66.9147 89.6959 67.1387C90.0972 67.3534 90.4052 67.624 90.6199 67.9507V66.7467V64.2127H92.6079V74.0127H90.6759V73.0747C90.4706 73.3827 90.1579 73.6534 89.7379 73.8867C89.3272 74.12 88.8652 74.2367 88.3519 74.2367C87.4279 74.2367 86.6906 73.896 86.1399 73.2147C85.5892 72.524 85.3139 71.6234 85.3139 70.5127ZM90.2559 72.1507C90.5546 71.768 90.7039 71.222 90.7039 70.5127C90.7039 69.8034 90.5546 69.2574 90.2559 68.8747C89.9666 68.492 89.5652 68.3007 89.0519 68.3007C87.9506 68.3007 87.3999 69.038 87.3999 70.5127C87.3999 71.9874 87.9506 72.7247 89.0519 72.7247C89.5652 72.7247 89.9666 72.5334 90.2559 72.1507Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.5732 87.7767C14.5572 86.5527 14.9532 85.5207 15.7612 84.6807C16.5772 83.8327 17.6012 83.4167 18.8332 83.4327C19.8012 83.4327 20.6212 83.6727 21.2932 84.1527C21.9652 84.6327 22.4092 85.2407 22.6252 85.9767L21.1732 86.5167C20.7732 85.3487 19.9892 84.7647 18.8212 84.7647C18.0212 84.7647 17.3852 85.0327 16.9132 85.5687C16.4492 86.1047 16.2172 86.8367 16.2172 87.7647C16.2172 88.7167 16.4492 89.4687 16.9132 90.0207C17.3772 90.5727 18.0132 90.8487 18.8212 90.8487C19.9972 90.8487 20.7972 90.2487 21.2212 89.0487L22.6372 89.6127C22.3572 90.4207 21.8932 91.0527 21.2452 91.5087C20.5972 91.9647 19.7892 92.1927 18.8212 92.1927C17.5572 92.2087 16.5292 91.7967 15.7372 90.9567C14.9452 90.1087 14.5572 89.0487 14.5732 87.7767ZM23.526 90.4767C23.526 89.7087 23.866 89.1527 24.546 88.8087C25.218 88.4567 26.13 88.2247 27.282 88.1127V87.9087C27.282 87.2847 26.918 86.9727 26.19 86.9727C25.438 86.9727 24.966 87.3047 24.774 87.9687L23.442 87.6207C23.506 87.1407 23.786 86.7287 24.282 86.3847C24.778 86.0327 25.414 85.8567 26.19 85.8567C27.014 85.8567 27.642 86.0487 28.074 86.4327C28.514 86.8087 28.734 87.3607 28.734 88.0887V90.5007C28.734 90.6527 28.754 90.7527 28.794 90.8007C28.842 90.8407 28.942 90.8607 29.094 90.8607H29.658V92.0127H28.53C27.874 92.0127 27.514 91.7167 27.45 91.1247C26.978 91.8367 26.306 92.1927 25.434 92.1927C24.874 92.1927 24.414 92.0367 24.054 91.7247C23.702 91.4127 23.526 90.9967 23.526 90.4767ZM27.282 89.5527V89.0727C26.53 89.1527 25.962 89.2927 25.578 89.4927C25.202 89.6847 25.014 89.9647 25.014 90.3327C25.014 90.5727 25.09 90.7607 25.242 90.8967C25.402 91.0247 25.626 91.0887 25.914 91.0887C26.306 91.0887 26.63 90.9567 26.886 90.6927C27.15 90.4207 27.282 90.0407 27.282 89.5527ZM30.0846 90.4767L31.4406 90.0327C31.5846 90.7367 32.0646 91.0887 32.8806 91.0887C33.2166 91.0887 33.4766 91.0287 33.6606 90.9087C33.8526 90.7887 33.9486 90.6207 33.9486 90.4047C33.9486 90.2127 33.8806 90.0567 33.7446 89.9367C33.6166 89.8167 33.3886 89.7247 33.0606 89.6607L32.2686 89.5167C31.6126 89.3807 31.1246 89.1807 30.8046 88.9167C30.4926 88.6527 30.3366 88.2527 30.3366 87.7167C30.3366 87.1647 30.5606 86.7167 31.0086 86.3727C31.4646 86.0287 32.0486 85.8567 32.7606 85.8567C33.4246 85.8567 33.9686 85.9967 34.3926 86.2767C34.8166 86.5487 35.1046 86.8887 35.2566 87.2967L34.0206 87.8247C33.7966 87.2167 33.3606 86.9127 32.7126 86.9127C32.4006 86.9127 32.1566 86.9767 31.9806 87.1047C31.8126 87.2247 31.7286 87.3847 31.7286 87.5847C31.7286 87.7607 31.7926 87.9007 31.9206 88.0047C32.0486 88.1007 32.2886 88.1847 32.6406 88.2567L33.4206 88.4007C33.9806 88.5047 34.4606 88.7047 34.8606 89.0007C35.2606 89.2887 35.4606 89.7087 35.4606 90.2607C35.4606 90.8447 35.2246 91.3127 34.7526 91.6647C34.2806 92.0087 33.6366 92.1807 32.8206 92.1807C32.1406 92.1807 31.5446 92.0287 31.0326 91.7247C30.5286 91.4127 30.2126 90.9967 30.0846 90.4767ZM36.765 92.0127V83.6127H38.229V85.7967V86.9847C38.397 86.6887 38.629 86.4327 38.925 86.2167C39.237 85.9767 39.661 85.8567 40.197 85.8567C40.837 85.8567 41.321 86.0487 41.649 86.4327C41.977 86.8167 42.141 87.3527 42.141 88.0407V92.0127H40.677V88.3647C40.677 87.5087 40.317 87.0807 39.597 87.0807C39.181 87.0807 38.873 87.2047 38.673 87.4527C38.377 87.8127 38.229 88.4207 38.229 89.2767V92.0127H36.765Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2430"
                        x="0"
                        y="0.0117188"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2430"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2430"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2430"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2430"
                        x1="29.0005"
                        y1="18.0117"
                        x2="29.0005"
                        y2="48.0127"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2430">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.002)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="126"
                    height="113"
                    viewBox="0 0 126 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_di_389_2455)">
                      <rect
                        y="0.0117188"
                        width="126"
                        height="110.001"
                        rx="8"
                        fill="#3A3B54"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      ></rect>
                      <rect
                        x="14"
                        y="18.0117"
                        width="30.001"
                        height="30.001"
                        rx="15.0005"
                        fill="#3A3B54"
                      ></rect>
                      <rect
                        x="13.25"
                        y="17.2617"
                        width="31.501"
                        height="31.501"
                        rx="15.7505"
                        stroke="url(#paint0_linear_389_2455)"
                        stroke-opacity="0.25"
                        stroke-width="1.5"
                      ></rect>
                      <g clip-path="url(#clip0_389_2455)">
                        <path
                          d="M43 33.002C43 40.734 36.7321 47.002 29 47.002C21.2679 47.002 15 40.734 15 33.002C15 25.2699 21.2679 19.002 29 19.002C36.7321 19.002 43 25.2699 43 33.002Z"
                          fill="white"
                        ></path>
                        <mask
                          id="mask0_389_2455"
                          maskUnits="userSpaceOnUse"
                          x="23"
                          y="26"
                          width="13"
                          height="15"
                          style={{ maskType: "luminance" }}
                        >
                          <path
                            d="M23.3521 26H35.802V41H23.3521V26Z"
                            fill="white"
                          ></path>
                        </mask>
                        <g mask="url(#mask0_389_2455)">
                          <path
                            d="M33.9714 29.45C33.9714 31.308 32.2567 33.5 29.6624 33.5H27.1634L27.0407 34.274L26.4577 38H23.3521L25.2204 26H30.2521C31.9464 26 33.2794 26.9443 33.7704 28.2567C33.9119 28.6382 33.9801 29.0431 33.9714 29.45Z"
                            fill="#002991"
                          ></path>
                          <path
                            d="M35.7614 32.9C35.5956 33.9071 35.0768 34.8224 34.2979 35.482C33.519 36.1416 32.5307 36.5024 31.51 36.5H29.7747L29.0524 41H25.9634L26.4577 38L27.041 34.274L27.1634 33.5H29.6624C32.2534 33.5 33.9714 31.308 33.9714 29.45C35.2464 30.108 35.9897 31.4376 35.7614 32.9Z"
                            fill="#60CDFF"
                          ></path>
                          <path
                            d="M33.9716 29.45C33.4369 29.1703 32.7886 29 32.0829 29H27.8696L27.1636 33.5H29.6626C32.2536 33.5 33.9716 31.308 33.9716 29.45Z"
                            fill="#008CFF"
                          ></path>
                        </g>
                      </g>
                      <path
                        d="M15.2073 74.0127V64.2127H19.6033C20.6579 64.2127 21.5119 64.502 22.1653 65.0807C22.8186 65.65 23.1453 66.4154 23.1453 67.3767C23.1453 68.338 22.8186 69.1127 22.1653 69.7007C21.5119 70.2794 20.6626 70.5687 19.6173 70.5687H17.3353V74.0127H15.2073ZM17.3353 68.8047H19.2253C19.7386 68.8047 20.1493 68.6787 20.4573 68.4267C20.7746 68.1654 20.9333 67.8154 20.9333 67.3767C20.9333 66.9567 20.7746 66.6207 20.4573 66.3687C20.1399 66.1074 19.7293 65.9767 19.2253 65.9767H17.3353V68.8047ZM24.0385 72.2207C24.0478 71.7634 24.1598 71.3667 24.3745 71.0307C24.5892 70.6947 24.8972 70.424 25.2985 70.2187C25.7092 70.0134 26.1618 69.8547 26.6565 69.7427C27.1605 69.6214 27.7532 69.528 28.4345 69.4627V69.1967C28.4345 68.5527 28.0518 68.2307 27.2865 68.2307C26.4372 68.2307 25.9238 68.5994 25.7465 69.3367L23.9545 68.9447C24.0105 68.3567 24.3372 67.8527 24.9345 67.4327C25.5412 67.0127 26.3205 66.8027 27.2725 66.8027C28.2805 66.8027 29.0505 67.0314 29.5825 67.4887C30.1238 67.946 30.3945 68.6227 30.3945 69.5187V72.0807C30.3945 72.2674 30.4178 72.384 30.4645 72.4307C30.5112 72.4774 30.6278 72.5007 30.8145 72.5007H31.4305V74.0127H29.9045C29.1392 74.0127 28.7192 73.672 28.6445 72.9907C28.1032 73.8214 27.3052 74.2367 26.2505 74.2367C25.6158 74.2367 25.0885 74.05 24.6685 73.6767C24.2485 73.3034 24.0385 72.818 24.0385 72.2207ZM28.4345 71.1427V70.6947C27.6318 70.7974 27.0345 70.942 26.6425 71.1287C26.2505 71.3154 26.0545 71.614 26.0545 72.0247C26.0545 72.5287 26.3578 72.7807 26.9645 72.7807C27.3845 72.7807 27.7345 72.6407 28.0145 72.3607C28.2945 72.0807 28.4345 71.6747 28.4345 71.1427ZM36.4747 67.0127H38.5607L35.6347 75.1187C35.4293 75.688 35.1587 76.0987 34.8227 76.3507C34.4867 76.612 34.0247 76.7427 33.4367 76.7427H31.3507V75.1607H33.1707C33.4133 75.1607 33.5953 75.1 33.7167 74.9787C33.8473 74.8667 33.9687 74.6567 34.0807 74.3487L34.2067 73.9847L30.8187 67.0127H32.9467L34.1087 69.6867C34.4633 70.536 34.7527 71.1847 34.9767 71.6327C35.1167 71.2314 35.3453 70.536 35.6627 69.5467L36.4747 67.0127ZM39.7346 74.0127V64.2127H44.1306C45.1853 64.2127 46.0393 64.502 46.6926 65.0807C47.3459 65.65 47.6726 66.4154 47.6726 67.3767C47.6726 68.338 47.3459 69.1127 46.6926 69.7007C46.0393 70.2794 45.1899 70.5687 44.1446 70.5687H41.8626V74.0127H39.7346ZM41.8626 68.8047H43.7526C44.2659 68.8047 44.6766 68.6787 44.9846 68.4267C45.3019 68.1654 45.4606 67.8154 45.4606 67.3767C45.4606 66.9567 45.3019 66.6207 44.9846 66.3687C44.6673 66.1074 44.2566 65.9767 43.7526 65.9767H41.8626V68.8047ZM48.5659 72.2207C48.5752 71.7634 48.6872 71.3667 48.9019 71.0307C49.1165 70.6947 49.4245 70.424 49.8259 70.2187C50.2365 70.0134 50.6892 69.8547 51.1839 69.7427C51.6879 69.6214 52.2805 69.528 52.9619 69.4627V69.1967C52.9619 68.5527 52.5792 68.2307 51.8139 68.2307C50.9645 68.2307 50.4512 68.5994 50.2739 69.3367L48.4819 68.9447C48.5379 68.3567 48.8645 67.8527 49.4619 67.4327C50.0685 67.0127 50.8479 66.8027 51.7999 66.8027C52.8079 66.8027 53.5779 67.0314 54.1099 67.4887C54.6512 67.946 54.9219 68.6227 54.9219 69.5187V72.0807C54.9219 72.2674 54.9452 72.384 54.9919 72.4307C55.0385 72.4774 55.1552 72.5007 55.3419 72.5007H55.9579V74.0127H54.4319C53.6665 74.0127 53.2465 73.672 53.1719 72.9907C52.6305 73.8214 51.8325 74.2367 50.7779 74.2367C50.1432 74.2367 49.6159 74.05 49.1959 73.6767C48.7759 73.3034 48.5659 72.818 48.5659 72.2207ZM52.9619 71.1427V70.6947C52.1592 70.7974 51.5619 70.942 51.1699 71.1287C50.7779 71.3154 50.5819 71.614 50.5819 72.0247C50.5819 72.5287 50.8852 72.7807 51.4919 72.7807C51.9119 72.7807 52.2619 72.6407 52.5419 72.3607C52.8219 72.0807 52.9619 71.6747 52.9619 71.1427ZM57.0109 74.0127V64.2127H58.9989V74.0127H57.0109Z"
                        fill="#F3F3F3"
                      ></path>
                      <path
                        d="M14.5732 87.7767C14.5572 86.5527 14.9532 85.5207 15.7612 84.6807C16.5772 83.8327 17.6012 83.4167 18.8332 83.4327C19.8012 83.4327 20.6212 83.6727 21.2932 84.1527C21.9652 84.6327 22.4092 85.2407 22.6252 85.9767L21.1732 86.5167C20.7732 85.3487 19.9892 84.7647 18.8212 84.7647C18.0212 84.7647 17.3852 85.0327 16.9132 85.5687C16.4492 86.1047 16.2172 86.8367 16.2172 87.7647C16.2172 88.7167 16.4492 89.4687 16.9132 90.0207C17.3772 90.5727 18.0132 90.8487 18.8212 90.8487C19.9972 90.8487 20.7972 90.2487 21.2212 89.0487L22.6372 89.6127C22.3572 90.4207 21.8932 91.0527 21.2452 91.5087C20.5972 91.9647 19.7892 92.1927 18.8212 92.1927C17.5572 92.2087 16.5292 91.7967 15.7372 90.9567C14.9452 90.1087 14.5572 89.0487 14.5732 87.7767ZM23.526 90.4767C23.526 89.7087 23.866 89.1527 24.546 88.8087C25.218 88.4567 26.13 88.2247 27.282 88.1127V87.9087C27.282 87.2847 26.918 86.9727 26.19 86.9727C25.438 86.9727 24.966 87.3047 24.774 87.9687L23.442 87.6207C23.506 87.1407 23.786 86.7287 24.282 86.3847C24.778 86.0327 25.414 85.8567 26.19 85.8567C27.014 85.8567 27.642 86.0487 28.074 86.4327C28.514 86.8087 28.734 87.3607 28.734 88.0887V90.5007C28.734 90.6527 28.754 90.7527 28.794 90.8007C28.842 90.8407 28.942 90.8607 29.094 90.8607H29.658V92.0127H28.53C27.874 92.0127 27.514 91.7167 27.45 91.1247C26.978 91.8367 26.306 92.1927 25.434 92.1927C24.874 92.1927 24.414 92.0367 24.054 91.7247C23.702 91.4127 23.526 90.9967 23.526 90.4767ZM27.282 89.5527V89.0727C26.53 89.1527 25.962 89.2927 25.578 89.4927C25.202 89.6847 25.014 89.9647 25.014 90.3327C25.014 90.5727 25.09 90.7607 25.242 90.8967C25.402 91.0247 25.626 91.0887 25.914 91.0887C26.306 91.0887 26.63 90.9567 26.886 90.6927C27.15 90.4207 27.282 90.0407 27.282 89.5527ZM30.0846 90.4767L31.4406 90.0327C31.5846 90.7367 32.0646 91.0887 32.8806 91.0887C33.2166 91.0887 33.4766 91.0287 33.6606 90.9087C33.8526 90.7887 33.9486 90.6207 33.9486 90.4047C33.9486 90.2127 33.8806 90.0567 33.7446 89.9367C33.6166 89.8167 33.3886 89.7247 33.0606 89.6607L32.2686 89.5167C31.6126 89.3807 31.1246 89.1807 30.8046 88.9167C30.4926 88.6527 30.3366 88.2527 30.3366 87.7167C30.3366 87.1647 30.5606 86.7167 31.0086 86.3727C31.4646 86.0287 32.0486 85.8567 32.7606 85.8567C33.4246 85.8567 33.9686 85.9967 34.3926 86.2767C34.8166 86.5487 35.1046 86.8887 35.2566 87.2967L34.0206 87.8247C33.7966 87.2167 33.3606 86.9127 32.7126 86.9127C32.4006 86.9127 32.1566 86.9767 31.9806 87.1047C31.8126 87.2247 31.7286 87.3847 31.7286 87.5847C31.7286 87.7607 31.7926 87.9007 31.9206 88.0047C32.0486 88.1007 32.2886 88.1847 32.6406 88.2567L33.4206 88.4007C33.9806 88.5047 34.4606 88.7047 34.8606 89.0007C35.2606 89.2887 35.4606 89.7087 35.4606 90.2607C35.4606 90.8447 35.2246 91.3127 34.7526 91.6647C34.2806 92.0087 33.6366 92.1807 32.8206 92.1807C32.1406 92.1807 31.5446 92.0287 31.0326 91.7247C30.5286 91.4127 30.2126 90.9967 30.0846 90.4767ZM36.765 92.0127V83.6127H38.229V85.7967V86.9847C38.397 86.6887 38.629 86.4327 38.925 86.2167C39.237 85.9767 39.661 85.8567 40.197 85.8567C40.837 85.8567 41.321 86.0487 41.649 86.4327C41.977 86.8167 42.141 87.3527 42.141 88.0407V92.0127H40.677V88.3647C40.677 87.5087 40.317 87.0807 39.597 87.0807C39.181 87.0807 38.873 87.2047 38.673 87.4527C38.377 87.8127 38.229 88.4207 38.229 89.2767V92.0127H36.765Z"
                        fill="#A9ABCD"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        id="filter0_di_389_2455"
                        x="0"
                        y="0.0117188"
                        width="126"
                        height="112.001"
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
                          result="effect1_dropShadow_389_2455"
                        ></feBlend>
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_389_2455"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
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
                          result="effect2_innerShadow_389_2455"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        id="paint0_linear_389_2455"
                        x1="29.0005"
                        y1="18.0117"
                        x2="29.0005"
                        y2="48.0127"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_389_2455">
                        <rect
                          width="28"
                          height="28"
                          fill="white"
                          transform="translate(15 19.002)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => setTabIdx(2)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button"
                  style={{ position: "relative", overflow: "hidden" }}
                >
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
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 2 && (
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      className="w-3 h-3"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                    </svg>
                    <span className="text-primary-grey text-xs">Back</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <g clip-path="url(#clip0_390_4118)">
                        <path
                          d="M15.9831 8.02596C15.9831 12.4346 12.4091 16.0085 8.00057 16.0085C3.59207 16.0085 0.0180664 12.4345 0.0180664 8.02596C0.0180664 3.61746 3.5919 0.043457 8.00057 0.043457C12.4091 0.043457 15.9831 3.61729 15.9831 8.02596Z"
                          fill="#F7931A"
                        ></path>
                        <path
                          d="M11.5879 7.03846C11.7429 5.99346 10.9479 5.43096 9.85789 5.05596L10.2104 3.63846L9.35039 3.42346L9.00039 4.80346C8.77289 4.74596 8.54039 4.69346 8.31039 4.64096L8.66039 3.25846L7.79789 3.04346L7.44539 4.45846C7.25789 4.41596 7.07289 4.37346 6.89539 4.32846L5.70539 4.03096L5.47789 4.95096C5.47789 4.95096 6.11789 5.09846 6.10289 5.10596C6.22217 5.12057 6.33102 5.18123 6.40619 5.27499C6.48136 5.36875 6.5169 5.48818 6.50522 5.60779L6.50539 5.60612L6.10289 7.22112C6.13839 7.22929 6.16856 7.23879 6.19756 7.25012L6.19289 7.24846L6.10289 7.22596L5.53789 9.47596C5.52552 9.51564 5.50537 9.55247 5.47862 9.58429C5.45188 9.61611 5.41907 9.64229 5.3821 9.66131C5.34514 9.68033 5.30476 9.6918 5.26332 9.69506C5.22188 9.69832 5.18021 9.6933 5.14072 9.68029L5.14289 9.68096L4.51539 9.52596L4.08789 10.5085L5.21039 10.786L5.82539 10.946L5.46789 12.3785L6.33039 12.5935L6.68289 11.176C6.91789 11.2385 7.14539 11.2985 7.37039 11.3535L7.01789 12.766L7.88039 12.981L8.23539 11.551C9.70789 11.8285 10.8129 11.716 11.2779 10.386C11.6529 9.31596 11.2604 8.69846 10.4854 8.29596C11.0504 8.17596 11.4729 7.80346 11.5879 7.03846ZM9.61539 9.80096C9.35039 10.8735 7.54789 10.301 6.96289 10.1485L7.43539 8.25846C8.02039 8.39596 9.89539 8.68596 9.61539 9.80096ZM9.88289 7.02346C9.63289 7.99846 8.13289 7.50096 7.65289 7.38096L8.08289 5.66096C8.56789 5.78096 10.1354 6.00846 9.88289 7.02346Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_390_4118">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0 0.00878906)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="font-bold text-sm text-white mt-[1px]">
                      Bitcoin
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-primary-dark bg-opacity-50 rounded-lg flex gap-6 mt-8">
                  <img src="image/bitcoin.png" alt="" width={100} />
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-sm text-white">
                      Bitcoin (BTC)
                    </span>
                    <span className="text-xs text-primary-grey">
                      Make sure to verify the address and the amount before you
                      send anything. Funds sent to an incorrect address cannot
                      be retrieved.
                    </span>
                    <div className="mt-2 flex gap-1 items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                      >
                        <g clip-path="url(#clip0_390_4118)">
                          <path
                            d="M15.9831 8.02596C15.9831 12.4346 12.4091 16.0085 8.00057 16.0085C3.59207 16.0085 0.0180664 12.4345 0.0180664 8.02596C0.0180664 3.61746 3.5919 0.043457 8.00057 0.043457C12.4091 0.043457 15.9831 3.61729 15.9831 8.02596Z"
                            fill="#F7931A"
                          ></path>
                          <path
                            d="M11.5879 7.03846C11.7429 5.99346 10.9479 5.43096 9.85789 5.05596L10.2104 3.63846L9.35039 3.42346L9.00039 4.80346C8.77289 4.74596 8.54039 4.69346 8.31039 4.64096L8.66039 3.25846L7.79789 3.04346L7.44539 4.45846C7.25789 4.41596 7.07289 4.37346 6.89539 4.32846L5.70539 4.03096L5.47789 4.95096C5.47789 4.95096 6.11789 5.09846 6.10289 5.10596C6.22217 5.12057 6.33102 5.18123 6.40619 5.27499C6.48136 5.36875 6.5169 5.48818 6.50522 5.60779L6.50539 5.60612L6.10289 7.22112C6.13839 7.22929 6.16856 7.23879 6.19756 7.25012L6.19289 7.24846L6.10289 7.22596L5.53789 9.47596C5.52552 9.51564 5.50537 9.55247 5.47862 9.58429C5.45188 9.61611 5.41907 9.64229 5.3821 9.66131C5.34514 9.68033 5.30476 9.6918 5.26332 9.69506C5.22188 9.69832 5.18021 9.6933 5.14072 9.68029L5.14289 9.68096L4.51539 9.52596L4.08789 10.5085L5.21039 10.786L5.82539 10.946L5.46789 12.3785L6.33039 12.5935L6.68289 11.176C6.91789 11.2385 7.14539 11.2985 7.37039 11.3535L7.01789 12.766L7.88039 12.981L8.23539 11.551C9.70789 11.8285 10.8129 11.716 11.2779 10.386C11.6529 9.31596 11.2604 8.69846 10.4854 8.29596C11.0504 8.17596 11.4729 7.80346 11.5879 7.03846ZM9.61539 9.80096C9.35039 10.8735 7.54789 10.301 6.96289 10.1485L7.43539 8.25846C8.02039 8.39596 9.89539 8.68596 9.61539 9.80096ZM9.88289 7.02346C9.63289 7.99846 8.13289 7.50096 7.65289 7.38096L8.08289 5.66096C8.56789 5.78096 10.1354 6.00846 9.88289 7.02346Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_390_4118">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="translate(0 0.00878906)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <span className="font-bold text-sm text-white mt-[1px]">
                        0.0493847
                      </span>
                      <div className="bg-[#252633] p-1 rounded-md ml-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 256 256"
                          className="w-4 h-4 text-primary-grey"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-primary-grey text-xs mt-8">
                  Your Deposit Address
                </span>
                <div className="p-1 bg-primary-dark bg-opacity-50 items-center rounded-lg flex justify-between mt-1">
                  <span className="text-white text-sm font-bold mx-2">
                    bc1qwpnt9cvl8dsx2hjhz4h3v0v98z9l5vk2srqas2
                  </span>
                  <div className="bg-[#252633] p-2 rounded-md">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      className="w-4 h-4 text-primary-grey"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => setTabIdx(3)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button"
                  style={{ position: "relative", overflow: "hidden" }}
                >
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
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 3 && (
            <div>
              <div className="bg-[#161620] p-8 flex flex-col justify-center items-center gap-6">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30.0088"
                    r="30"
                    fill="url(#paint0_linear_390_4144)"
                  ></circle>
                  <circle
                    cx="30"
                    cy="30.0088"
                    r="28.375"
                    stroke="url(#paint1_linear_390_4144)"
                    stroke-opacity="0.3"
                    stroke-width="3.25"
                  ></circle>
                  <g filter="url(#filter0_d_390_4144)">
                    <path
                      d="M31.8951 16.0239C32.3976 15.9378 32.8747 16.2755 32.9607 16.778L32.961 16.7794L32.9613 16.7813L32.9622 16.7865C32.9761 16.8724 32.988 16.9588 32.9986 17.0452C33.0183 17.2037 33.0415 17.4264 33.057 17.69C33.0874 18.209 33.0901 18.9242 32.9585 19.634C32.8075 20.4481 32.4257 21.1925 32.1137 21.7035C31.9274 22.0086 31.7242 22.3058 31.4972 22.5823L31.493 22.5873L31.4906 22.5902C31.1631 22.9809 30.5807 23.0324 30.1899 22.7048C29.7997 22.3776 29.7482 21.7963 30.0746 21.4056L30.0754 21.4045C30.2459 21.1959 30.3979 20.9708 30.5382 20.7411C30.7992 20.3135 31.0515 19.792 31.1432 19.2972C31.237 18.7917 31.2399 18.2411 31.2139 17.798C31.2001 17.5629 31.1778 17.328 31.142 17.0953L31.141 17.0896C31.0551 16.5872 31.3927 16.1099 31.8951 16.0239Z"
                      fill="#EDEDED"
                    ></path>
                    <path
                      d="M38.3873 17.964C38.867 18.137 39.1155 18.666 38.9425 19.1457L38.3719 20.728C38.199 21.2076 37.67 21.4562 37.1905 21.2833C36.7109 21.1103 36.4624 20.5813 36.6353 20.1017L37.2059 18.5193C37.3788 18.0397 37.9078 17.7911 38.3873 17.964Z"
                      fill="#EDEDED"
                    ></path>
                    <path
                      d="M41.7519 23.4839C41.9796 23.9401 41.7945 24.4945 41.3382 24.7222L40.0704 25.3551C39.6143 25.5828 39.0599 25.3976 38.8323 24.9414C38.6046 24.4852 38.7898 23.9308 39.2459 23.7031L40.5137 23.0702C40.9699 22.8425 41.5243 23.0277 41.7519 23.4839Z"
                      fill="#EDEDED"
                    ></path>
                    <path
                      d="M35.8738 23.2441C36.2339 23.6049 36.2334 24.1894 35.8727 24.5497L34.6048 25.8155C34.244 26.1758 33.6595 26.1753 33.2993 25.8144C32.9392 25.4536 32.9397 24.8691 33.3004 24.5089L34.5683 23.243C34.9292 22.8828 35.5136 22.8833 35.8738 23.2441Z"
                      fill="#EDEDED"
                    ></path>
                    <path
                      d="M22.2075 25.1628C23.0992 22.8903 26.0286 22.2779 27.756 24.0025L35.1032 31.3379C36.8332 33.0651 36.2205 35.9998 33.9443 36.8909L21.8636 41.6203C19.1111 42.6979 16.394 39.9803 17.474 37.2277L22.2075 25.1628Z"
                      fill="#EDEDED"
                    ></path>
                    <path
                      d="M36.2 28.2878C36.2215 27.7784 36.6518 27.3829 37.1612 27.4044L37.1639 27.4045L37.168 27.4047C37.3933 27.4157 37.6182 27.4397 37.8417 27.4695C38.2311 27.5216 38.7642 27.6164 39.3051 27.7891C39.8108 27.9507 40.3449 28.2132 40.7285 28.4179C40.9594 28.5412 41.1881 28.6694 41.4107 28.807L41.4119 28.8076C41.845 29.0765 41.9792 29.646 41.7104 30.0793C41.4417 30.5125 40.8727 30.6459 40.4395 30.3772C40.25 30.2607 40.0555 30.1517 39.8593 30.0469C39.5045 29.8575 39.0876 29.658 38.7433 29.5479C38.3409 29.4194 37.9231 29.3432 37.5973 29.2996C37.4277 29.277 37.2572 29.2589 37.0863 29.2493L37.0832 29.2491C36.5739 29.2275 36.1786 28.7972 36.2 28.2878Z"
                      fill="#EDEDED"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_390_4144"
                      x="17.2314"
                      y="16.0105"
                      width="24.6182"
                      height="26.8513"
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
                        result="effect1_dropShadow_390_4144"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_390_4144"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_390_4144"
                      x1="-0.0722892"
                      y1="30.0088"
                      x2="60.0723"
                      y2="30.0088"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#AE42E9"></stop>
                      <stop offset="0.5" stop-color="#6852EA"></stop>
                      <stop offset="1" stop-color="#3C66EE"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_390_4144"
                      x1="30"
                      y1="0.00878906"
                      x2="30"
                      y2="60.0088"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white"></stop>
                      <stop
                        offset="1"
                        stop-color="white"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white text-lg">Enjoy your Level!</span>
                <span className="text-sm text-primary-grey">
                  Complete the checkout, and your account will start leveling
                  up. Log back into your Steam account to enjoy your new status,
                  benefits, and bragging rights with an enhanced Steam profile!
                </span>
                <Button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] w-full mt-2 bg-opacity-75 text-primary-grey flex gap-2 justify-center items-center"
                  type="button"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path>
                  </svg>
                  Tutorial
                </Button>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={onClose}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path>
                  </svg>{" "}
                  Check Inventory
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default LevelUpModal;
