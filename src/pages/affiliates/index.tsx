import Layout from "../../components/layout";
import { Button } from "@material-tailwind/react";

const tempArray = Array.from({ length: 10 }, (_, index) => index + 1);

const Affiliates = () => {
  return (
    <Layout>
      <div className="mx-auto w-[868px] mb-5">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-3 ">
            <button className="flex gap-2 items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.39795 4.2541C8.1701 4.0263 7.80079 4.0263 7.57294 4.2541L5.549 6.2781C5.15033 6.67675 5.15033 7.32309 5.549 7.72174L7.57294 9.74573C7.80079 9.97352 8.1701 9.97352 8.39795 9.74573C8.62574 9.51794 8.62574 9.14857 8.39795 8.92078L6.47709 6.99992L8.39795 5.07907C8.62574 4.85126 8.62574 4.48191 8.39795 4.2541Z"
                    fill="#A9ABCD"
                  ></path>
                </g>
              </svg>
              <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
                Back
              </span>
            </button>
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_554_2281)">
                  <path
                    d="M3.49902 7C3.49902 4.79086 5.28988 3 7.49902 3C9.70816 3 11.499 4.79086 11.499 7C11.499 9.20914 9.70816 11 7.49902 11C5.28988 11 3.49902 9.20914 3.49902 7Z"
                    fill="url(#paint0_linear_554_2281)"
                  ></path>
                  <path
                    d="M12.499 7C12.499 4.79086 14.2899 3 16.499 3C18.7082 3 20.499 4.79086 20.499 7C20.499 9.20914 18.7082 11 16.499 11C14.2899 11 12.499 9.20914 12.499 7Z"
                    fill="url(#paint1_linear_554_2281)"
                  ></path>
                  <path
                    d="M7.49876 12C10.3695 12 13.0926 13.9807 14.1062 17.6135C14.6361 19.5131 13.016 21 11.3528 21H3.64471C1.98155 21 0.36144 19.5131 0.891377 17.6135C1.90488 13.9807 4.62798 12 7.49876 12Z"
                    fill="url(#paint2_linear_554_2281)"
                  ></path>
                  <path
                    d="M16.0334 17.0761C15.5456 15.3276 14.7069 13.8486 13.6289 12.7021C14.5244 12.2386 15.5031 12 16.4995 12C19.3703 12 22.0934 13.9807 23.1069 17.6135C23.6368 19.5131 22.0167 21 20.3535 21H15.3297C16.0978 19.9549 16.4485 18.5641 16.0334 17.0761Z"
                    fill="url(#paint3_linear_554_2281)"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_i_554_2281"
                    x="0.789062"
                    y="3"
                    width="22.4199"
                    height="18"
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
                      result="effect1_innerShadow_554_2281"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    id="paint0_linear_554_2281"
                    x1="0.786611"
                    y1="3"
                    x2="17.5714"
                    y2="25.4258"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A9ABCD"></stop>
                    <stop offset="0.7" stop-color="#66688C"></stop>
                    <stop offset="1" stop-color="#353655"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_554_2281"
                    x1="0.786611"
                    y1="3"
                    x2="17.5714"
                    y2="25.4258"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A9ABCD"></stop>
                    <stop offset="0.7" stop-color="#66688C"></stop>
                    <stop offset="1" stop-color="#353655"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_554_2281"
                    x1="0.786611"
                    y1="3"
                    x2="17.5714"
                    y2="25.4258"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A9ABCD"></stop>
                    <stop offset="0.7" stop-color="#66688C"></stop>
                    <stop offset="1" stop-color="#353655"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_554_2281"
                    x1="0.786611"
                    y1="3"
                    x2="17.5714"
                    y2="25.4258"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A9ABCD"></stop>
                    <stop offset="0.7" stop-color="#66688C"></stop>
                    <stop offset="1" stop-color="#353655"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">
                Affiliates
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center w-[117px] h-[25px] px-[10px] py-[8px] rounded-2xl ProfitShare_bgGradient__sgQHw">
            <span className="text-[12px] font-[700] leading-[13px] bg-primary-gradient inline-block text-transparent bg-clip-text capitalize">
              10% profit share
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-10 relative z-10">
          <div className="bg-primary-lightDark rounded-md flex flex-col gap-5 w-[65%] p-5">
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary-grey"
              >
                <path
                  d="M9.70893 9.05319C9.73333 8.83945 9.61947 8.62099 9.4052 8.60152C9.40133 8.60119 9.3974 8.60085 9.39353 8.60052L6.13113 8.34199C5.77124 8.31352 5.40901 8.35479 5.0664 8.46339L2.46522 9.28792C2.18822 9.37572 2 9.63285 2 9.92339V13.3465C2 13.7147 2.29848 14.0132 2.66667 14.0132H3.22554L3.23371 14.0157C3.30659 14.0382 3.41123 14.0697 3.54133 14.1069C3.80107 14.181 4.16459 14.2782 4.58097 14.3707C5.39379 14.5511 6.48348 14.731 7.3996 14.644C8.3798 14.5509 9.59173 14.0905 10.6387 13.6157C11.7072 13.131 12.6891 12.5909 13.2343 12.2792C13.721 12.001 14 11.5041 14 10.9813C14 9.95065 13.038 9.70379 12 9.99992L10.3333 10.4999C9.66667 11.3333 9.30047 11.5437 8.25007 11.7685L7.4114 11.9479C7.15793 12.0021 6.9076 11.8439 6.84787 11.5916C6.78633 11.3316 6.95067 11.0718 7.21193 11.0159L8.03053 10.8407C8.93433 10.6473 9.6088 9.92899 9.70893 9.05319Z"
                  fill="#A9ABCD"
                ></path>
                <path
                  d="M12 4.99992C12 6.28859 10.9553 7.33325 9.66667 7.33325C8.378 7.33325 7.33333 6.28859 7.33333 4.99992C7.33333 3.71125 8.378 2.66659 9.66667 2.66659C10.9553 2.66659 12 3.71125 12 4.99992Z"
                  fill="#A9ABCD"
                ></path>
                <path
                  d="M6.1357 5.99167C6.04729 5.67623 6 5.34359 6 4.99992C6 3.65905 6.71973 2.48627 7.794 1.84688C7.39413 1.52554 6.8862 1.33325 6.33333 1.33325C5.04467 1.33325 4 2.37792 4 3.66659C4 4.88869 4.93953 5.89135 6.1357 5.99167Z"
                  fill="#A9ABCD"
                ></path>
              </svg>
              <span className="text-primary-white text-base">
                Share &amp; Earn
              </span>
            </div>
            <p className="text-primary-grey text-[0.75rem] font-[700] leading-[16.8px]">
              Join our affiliate program and earn 10% of every purchase made
              through your unique referral link. It’s a simple way to share,
              save and profit!
            </p>
            <hr className="bg-primary-dark border-primary-dark" />
            <div className="space-y-2">
              <span className="text-primary-grey text-[0.75rem] font-[700]">
                Your Affiliate Code
              </span>
              <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                <input
                  type="text"
                  className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center"
                  value="madness"
                />
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center"
                  type="button"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0809 1.80478C13.2998 1.02373 12.0335 1.02374 11.2525 1.80478L8.19527 4.86198C8.07027 4.987 8 5.15657 8 5.33337V7.33335C8 7.70155 8.29847 8.00001 8.66667 8.00001H10.6667C10.8435 8.00001 11.0131 7.92981 11.1381 7.80475L14.1953 4.74759C14.9763 3.96654 14.9763 2.70021 14.1953 1.91916L14.0809 1.80478Z"
                      fill="#A9ABCD"
                    ></path>
                    <path
                      d="M4.77431 2H7.33333C7.70153 2 8 2.29848 8 2.66667C8 3.03486 7.70153 3.33333 7.33333 3.33333H4.8C4.41563 3.33333 4.16745 3.33385 3.97856 3.34929C3.79745 3.36408 3.73031 3.3892 3.69734 3.406C3.5719 3.46991 3.46991 3.5719 3.406 3.69734C3.3892 3.73031 3.36409 3.79745 3.34929 3.97856C3.33385 4.16745 3.33333 4.41563 3.33333 4.8V11.2C3.33333 11.5844 3.33385 11.8325 3.34929 12.0215C3.36409 12.2025 3.3892 12.2697 3.406 12.3027C3.46991 12.4281 3.5719 12.5301 3.69734 12.594C3.73031 12.6108 3.79745 12.6359 3.97856 12.6507C4.16745 12.6661 4.41563 12.6667 4.8 12.6667H11.2C11.5844 12.6667 11.8325 12.6661 12.0215 12.6507C12.2025 12.6359 12.2697 12.6108 12.3027 12.594C12.4281 12.5301 12.5301 12.4281 12.594 12.3027C12.6108 12.2697 12.6359 12.2025 12.6507 12.0215C12.6661 11.8325 12.6667 11.5844 12.6667 11.2V8.66667C12.6667 8.29847 12.9651 8 13.3333 8C13.7015 8 14 8.29847 14 8.66667V11.2257C14 11.5771 14 11.8803 13.9796 12.13C13.9581 12.3936 13.9105 12.6557 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.6557 13.9105 12.3936 13.9581 12.13 13.9796C11.8803 14 11.5771 14 11.2257 14H4.77429C4.42287 14 4.11969 14 3.86998 13.9796C3.60642 13.9581 3.34427 13.9105 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2.08946 12.6557 2.04191 12.3936 2.02038 12.13C1.99998 11.8803 1.99999 11.5771 2 11.2257V4.77431C1.99999 4.42288 1.99998 4.11969 2.02038 3.86998C2.04191 3.60642 2.08946 3.34427 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.34427 2.08946 3.60642 2.04191 3.86998 2.02038C4.1197 1.99998 4.42287 1.99999 4.77431 2Z"
                      fill="#A9ABCD"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <span className="text-primary-grey text-[0.75rem] font-[700]">
                Your Affiliate Link
              </span>
              <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                <input
                  type="text"
                  className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center"
                  value="https://steamupgrade.com/a/madness"
                />
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center"
                  type="button"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.66667 4.5C4.66667 3.11929 5.78595 2 7.16667 2H11.5C12.8807 2 14 3.11929 14 4.5V8.84C14 10.2207 12.8807 11.34 11.5 11.34H11.3333V11.5C11.3333 12.8807 10.2141 14 8.83333 14H4.5C3.11929 14 2 12.8807 2 11.5V7.16667C2 5.78595 3.11929 4.66667 4.5 4.66667H4.66667V4.5ZM11.3333 10.34V7.16667C11.3333 5.78595 10.2141 4.66667 8.83333 4.66667H5.66667V4.5C5.66667 3.67157 6.33824 3 7.16667 3H11.5C12.3284 3 13 3.67157 13 4.5V8.84C13 9.6684 12.3284 10.34 11.5 10.34H11.3333Z"
                      fill="#A9ABCD"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <hr className="bg-primary-dark border-primary-dark mt-2" />
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                <div className="flex flex-col gap-1">
                  <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">
                    49
                  </span>
                  <span className="text-primary-grey text-[0.81rem] font-[400] leading-[15.6px]">
                    Referrals
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_i_554_2750)">
                    <path
                      d="M8.50116 0.833252C6.22297 0.833252 4.37614 2.68008 4.37614 4.95825C4.37614 7.23643 6.22297 9.08325 8.50116 9.08325C10.7794 9.08325 12.6262 7.23643 12.6262 4.95825C12.6262 2.68008 10.7794 0.833252 8.50116 0.833252Z"
                      fill="url(#paint0_linear_554_2750)"
                    ></path>
                    <path
                      d="M9.05045 14.3083C8.6814 14.8003 8.50219 15.3757 8.50026 15.9468V15.9655C8.50311 16.7984 8.88279 17.6201 9.60045 18.1583L9.72264 18.2499H2.63217C1.59161 18.2499 0.62255 17.3202 0.888181 16.1383C0.968445 15.7812 1.07064 15.4329 1.19366 15.0955C1.19824 15.0824 1.20295 15.0694 1.20778 15.0563C1.63888 13.8906 2.31903 12.8571 3.20065 12.033C4.54909 10.7718 6.37061 9.99992 8.50026 9.99992C10.3817 9.99992 12.0226 10.6024 13.3093 11.6123L12.2414 13.3922C11.1214 12.9591 9.80633 13.3004 9.05045 14.3083Z"
                      fill="url(#paint1_linear_554_2750)"
                    ></path>
                    <path
                      d="M16.6205 13.2214C16.8811 12.7873 16.7402 12.2243 16.3061 11.9638C15.8721 11.7034 15.309 11.8441 15.0484 12.2782L12.8214 15.99L11.8012 15.2248C11.3962 14.921 10.8216 15.0032 10.5178 15.4082C10.2141 15.8131 10.2962 16.3877 10.7012 16.6915L12.5345 18.0665C12.7421 18.2222 13.006 18.2826 13.2608 18.2327C13.5154 18.1828 13.7371 18.0273 13.8705 17.8048L16.6205 13.2214Z"
                      fill="url(#paint2_linear_554_2750)"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_554_2750"
                      x="0.84375"
                      y="0.833252"
                      width="15.9082"
                      height="17.4167"
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
                        result="effect1_innerShadow_554_2750"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_554_2750"
                      x1="0.84201"
                      y1="0.833252"
                      x2="17.7658"
                      y2="17.4139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A9ABCD"></stop>
                      <stop offset="0.7" stop-color="#66688C"></stop>
                      <stop offset="1" stop-color="#353655"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_554_2750"
                      x1="0.84201"
                      y1="0.833252"
                      x2="17.7658"
                      y2="17.4139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A9ABCD"></stop>
                      <stop offset="0.7" stop-color="#66688C"></stop>
                      <stop offset="1" stop-color="#353655"></stop>
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_554_2750"
                      x1="0.84201"
                      y1="0.833252"
                      x2="17.7658"
                      y2="17.4139"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A9ABCD"></stop>
                      <stop offset="0.7" stop-color="#66688C"></stop>
                      <stop offset="1" stop-color="#353655"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">
                    15
                  </span>
                  <span className="text-primary-grey text-[0.81rem] font-[400] leading-[15.6px]">
                    Buyers
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.70893 9.05319C9.73333 8.83945 9.61947 8.62099 9.4052 8.60152C9.40133 8.60119 9.3974 8.60085 9.39353 8.60052L6.13113 8.34199C5.77124 8.31352 5.40901 8.35479 5.0664 8.46339L2.46522 9.28792C2.18822 9.37572 2 9.63285 2 9.92339V13.3465C2 13.7147 2.29848 14.0132 2.66667 14.0132H3.22554L3.23371 14.0157C3.30659 14.0382 3.41123 14.0697 3.54133 14.1069C3.80107 14.181 4.16459 14.2782 4.58097 14.3707C5.39379 14.5511 6.48348 14.731 7.3996 14.644C8.3798 14.5509 9.59173 14.0905 10.6387 13.6157C11.7072 13.131 12.6891 12.5909 13.2343 12.2792C13.721 12.001 14 11.5041 14 10.9813C14 9.95065 13.038 9.70379 12 9.99992L10.3333 10.4999C9.66667 11.3333 9.30047 11.5437 8.25007 11.7685L7.4114 11.9479C7.15793 12.0021 6.9076 11.8439 6.84787 11.5916C6.78633 11.3316 6.95067 11.0718 7.21193 11.0159L8.03053 10.8407C8.93433 10.6473 9.6088 9.92899 9.70893 9.05319Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M12 4.99992C12 6.28859 10.9553 7.33325 9.66667 7.33325C8.378 7.33325 7.33333 6.28859 7.33333 4.99992C7.33333 3.71125 8.378 2.66659 9.66667 2.66659C10.9553 2.66659 12 3.71125 12 4.99992Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M6.1357 5.99167C6.04729 5.67623 6 5.34359 6 4.99992C6 3.65905 6.71973 2.48627 7.794 1.84688C7.39413 1.52554 6.8862 1.33325 6.33333 1.33325C5.04467 1.33325 4 2.37792 4 3.66659C4 4.88869 4.93953 5.89135 6.1357 5.99167Z"
                    fill="#A9ABCD"
                  ></path>
                </svg>
                <div className="flex flex-col gap-1">
                  <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">
                    $225.34
                  </span>
                  <span className="text-primary-grey text-[0.81rem] font-[400] leading-[15.6px]">
                    Total Profit
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 inline-block w-full"
                type="button"
              >
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-white normal-case text-sm">
                    Claim $2.10
                  </span>
                </div>
              </Button>
            </div>
          </div>
          <div className="bg-primary-lightDark rounded-md flex flex-col justify-between w-[35%] p-5">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary-grey"
                >
                  <path
                    d="M9.70893 9.05319C9.73333 8.83945 9.61947 8.62099 9.4052 8.60152C9.40133 8.60119 9.3974 8.60085 9.39353 8.60052L6.13113 8.34199C5.77124 8.31352 5.40901 8.35479 5.0664 8.46339L2.46522 9.28792C2.18822 9.37572 2 9.63285 2 9.92339V13.3465C2 13.7147 2.29848 14.0132 2.66667 14.0132H3.22554L3.23371 14.0157C3.30659 14.0382 3.41123 14.0697 3.54133 14.1069C3.80107 14.181 4.16459 14.2782 4.58097 14.3707C5.39379 14.5511 6.48348 14.731 7.3996 14.644C8.3798 14.5509 9.59173 14.0905 10.6387 13.6157C11.7072 13.131 12.6891 12.5909 13.2343 12.2792C13.721 12.001 14 11.5041 14 10.9813C14 9.95065 13.038 9.70379 12 9.99992L10.3333 10.4999C9.66667 11.3333 9.30047 11.5437 8.25007 11.7685L7.4114 11.9479C7.15793 12.0021 6.9076 11.8439 6.84787 11.5916C6.78633 11.3316 6.95067 11.0718 7.21193 11.0159L8.03053 10.8407C8.93433 10.6473 9.6088 9.92899 9.70893 9.05319Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M12 4.99992C12 6.28859 10.9553 7.33325 9.66667 7.33325C8.378 7.33325 7.33333 6.28859 7.33333 4.99992C7.33333 3.71125 8.378 2.66659 9.66667 2.66659C10.9553 2.66659 12 3.71125 12 4.99992Z"
                    fill="#A9ABCD"
                  ></path>
                  <path
                    d="M6.1357 5.99167C6.04729 5.67623 6 5.34359 6 4.99992C6 3.65905 6.71973 2.48627 7.794 1.84688C7.39413 1.52554 6.8862 1.33325 6.33333 1.33325C5.04467 1.33325 4 2.37792 4 3.66659C4 4.88869 4.93953 5.89135 6.1357 5.99167Z"
                    fill="#A9ABCD"
                  ></path>
                </svg>
                <span className="text-primary-white text-base">Missions</span>
              </div>
              <hr className="bg-primary-dark border-primary-dark" />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Share Level
                    </span>
                    <span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Share your new Level
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                        id=":rj:"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Follow Us
                    </span>
                    <span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Follow @SteamUpgrade on X
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Steam Bio
                    </span>
                    <span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Link SteamUpgrade.com in your Steam Bio
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                        id=":rl:"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 inline-block w-full opacity-50"
                type="button"
                disabled
              >
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-white normal-case text-sm">
                    Claim $2.10
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col mt-10 justify-center items-center min-h-[400px] w-full h-full overflow-hidden bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-8">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <p>#</p>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <p>Stream ID</p>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>level</p>
                      <span>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_554_3144)">
                            <path
                              d="M2.50028 9.67163C2.82245 9.67163 3.08362 9.41046 3.08362 9.0883V2.33044L3.83676 3.08399C4.06451 3.31184 4.43385 3.31196 4.66172 3.08422C4.88956 2.85649 4.88968 2.48712 4.66194 2.25927L2.91287 0.509273C2.80351 0.399839 2.65515 0.338356 2.50044 0.338298C2.34573 0.33824 2.19734 0.399664 2.08791 0.509039L0.336981 2.25904C0.109114 2.48677 0.109014 2.85614 0.336759 3.08399C0.56451 3.31184 0.933854 3.31196 1.16172 3.08422L1.91695 2.32939V9.0883C1.91695 9.41046 2.17812 9.67163 2.50028 9.67163Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M5.99935 8.50496C5.67717 8.50496 5.41602 8.24379 5.41602 7.92163C5.41602 7.59947 5.67717 7.3383 5.99935 7.3383H10.666C10.9882 7.3383 11.2493 7.59947 11.2493 7.92163C11.2493 8.24379 10.9882 8.50496 10.666 8.50496H5.99935Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M8.33268 2.67163C8.01051 2.67163 7.74935 2.41047 7.74935 2.0883C7.74935 1.76612 8.01051 1.50496 8.33268 1.50496H10.666C10.9882 1.50496 11.2493 1.76612 11.2493 2.0883C11.2493 2.41047 10.9882 2.67163 10.666 2.67163H8.33268Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M6.58268 5.00496C6.58268 5.32714 6.84384 5.5883 7.16602 5.5883H10.666C10.9882 5.5883 11.2493 5.32714 11.2493 5.00496C11.2493 4.68279 10.9882 4.42163 10.666 4.42163H7.16602C6.84384 4.42163 6.58268 4.68279 6.58268 5.00496Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_554_3144"
                              x="0.166016"
                              y="0.338379"
                              width="11.083"
                              height="10.3333"
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
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_554_3144"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_554_3144"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <p>country</p>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>games</p>
                      <span>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_554_3144)">
                            <path
                              d="M2.50028 9.67163C2.82245 9.67163 3.08362 9.41046 3.08362 9.0883V2.33044L3.83676 3.08399C4.06451 3.31184 4.43385 3.31196 4.66172 3.08422C4.88956 2.85649 4.88968 2.48712 4.66194 2.25927L2.91287 0.509273C2.80351 0.399839 2.65515 0.338356 2.50044 0.338298C2.34573 0.33824 2.19734 0.399664 2.08791 0.509039L0.336981 2.25904C0.109114 2.48677 0.109014 2.85614 0.336759 3.08399C0.56451 3.31184 0.933854 3.31196 1.16172 3.08422L1.91695 2.32939V9.0883C1.91695 9.41046 2.17812 9.67163 2.50028 9.67163Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M5.99935 8.50496C5.67717 8.50496 5.41602 8.24379 5.41602 7.92163C5.41602 7.59947 5.67717 7.3383 5.99935 7.3383H10.666C10.9882 7.3383 11.2493 7.59947 11.2493 7.92163C11.2493 8.24379 10.9882 8.50496 10.666 8.50496H5.99935Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M8.33268 2.67163C8.01051 2.67163 7.74935 2.41047 7.74935 2.0883C7.74935 1.76612 8.01051 1.50496 8.33268 1.50496H10.666C10.9882 1.50496 11.2493 1.76612 11.2493 2.0883C11.2493 2.41047 10.9882 2.67163 10.666 2.67163H8.33268Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M6.58268 5.00496C6.58268 5.32714 6.84384 5.5883 7.16602 5.5883H10.666C10.9882 5.5883 11.2493 5.32714 11.2493 5.00496C11.2493 4.68279 10.9882 4.42163 10.666 4.42163H7.16602C6.84384 4.42163 6.58268 4.68279 6.58268 5.00496Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_554_3144"
                              x="0.166016"
                              y="0.338379"
                              width="11.083"
                              height="10.3333"
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
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_554_3144"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_554_3144"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>badges</p>
                      <span>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_554_3144)">
                            <path
                              d="M2.50028 9.67163C2.82245 9.67163 3.08362 9.41046 3.08362 9.0883V2.33044L3.83676 3.08399C4.06451 3.31184 4.43385 3.31196 4.66172 3.08422C4.88956 2.85649 4.88968 2.48712 4.66194 2.25927L2.91287 0.509273C2.80351 0.399839 2.65515 0.338356 2.50044 0.338298C2.34573 0.33824 2.19734 0.399664 2.08791 0.509039L0.336981 2.25904C0.109114 2.48677 0.109014 2.85614 0.336759 3.08399C0.56451 3.31184 0.933854 3.31196 1.16172 3.08422L1.91695 2.32939V9.0883C1.91695 9.41046 2.17812 9.67163 2.50028 9.67163Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M5.99935 8.50496C5.67717 8.50496 5.41602 8.24379 5.41602 7.92163C5.41602 7.59947 5.67717 7.3383 5.99935 7.3383H10.666C10.9882 7.3383 11.2493 7.59947 11.2493 7.92163C11.2493 8.24379 10.9882 8.50496 10.666 8.50496H5.99935Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M8.33268 2.67163C8.01051 2.67163 7.74935 2.41047 7.74935 2.0883C7.74935 1.76612 8.01051 1.50496 8.33268 1.50496H10.666C10.9882 1.50496 11.2493 1.76612 11.2493 2.0883C11.2493 2.41047 10.9882 2.67163 10.666 2.67163H8.33268Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M6.58268 5.00496C6.58268 5.32714 6.84384 5.5883 7.16602 5.5883H10.666C10.9882 5.5883 11.2493 5.32714 11.2493 5.00496C11.2493 4.68279 10.9882 4.42163 10.666 4.42163H7.16602C6.84384 4.42163 6.58268 4.68279 6.58268 5.00496Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_554_3144"
                              x="0.166016"
                              y="0.338379"
                              width="11.083"
                              height="10.3333"
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
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_554_3144"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_554_3144"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>playtime</p>
                      <span>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_554_3144)">
                            <path
                              d="M2.50028 9.67163C2.82245 9.67163 3.08362 9.41046 3.08362 9.0883V2.33044L3.83676 3.08399C4.06451 3.31184 4.43385 3.31196 4.66172 3.08422C4.88956 2.85649 4.88968 2.48712 4.66194 2.25927L2.91287 0.509273C2.80351 0.399839 2.65515 0.338356 2.50044 0.338298C2.34573 0.33824 2.19734 0.399664 2.08791 0.509039L0.336981 2.25904C0.109114 2.48677 0.109014 2.85614 0.336759 3.08399C0.56451 3.31184 0.933854 3.31196 1.16172 3.08422L1.91695 2.32939V9.0883C1.91695 9.41046 2.17812 9.67163 2.50028 9.67163Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M5.99935 8.50496C5.67717 8.50496 5.41602 8.24379 5.41602 7.92163C5.41602 7.59947 5.67717 7.3383 5.99935 7.3383H10.666C10.9882 7.3383 11.2493 7.59947 11.2493 7.92163C11.2493 8.24379 10.9882 8.50496 10.666 8.50496H5.99935Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M8.33268 2.67163C8.01051 2.67163 7.74935 2.41047 7.74935 2.0883C7.74935 1.76612 8.01051 1.50496 8.33268 1.50496H10.666C10.9882 1.50496 11.2493 1.76612 11.2493 2.0883C11.2493 2.41047 10.9882 2.67163 10.666 2.67163H8.33268Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M6.58268 5.00496C6.58268 5.32714 6.84384 5.5883 7.16602 5.5883H10.666C10.9882 5.5883 11.2493 5.32714 11.2493 5.00496C11.2493 4.68279 10.9882 4.42163 10.666 4.42163H7.16602C6.84384 4.42163 6.58268 4.68279 6.58268 5.00496Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_554_3144"
                              x="0.166016"
                              y="0.338379"
                              width="11.083"
                              height="10.3333"
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
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_554_3144"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_554_3144"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>year</p>
                      <span>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_d_554_3144)">
                            <path
                              d="M2.50028 9.67163C2.82245 9.67163 3.08362 9.41046 3.08362 9.0883V2.33044L3.83676 3.08399C4.06451 3.31184 4.43385 3.31196 4.66172 3.08422C4.88956 2.85649 4.88968 2.48712 4.66194 2.25927L2.91287 0.509273C2.80351 0.399839 2.65515 0.338356 2.50044 0.338298C2.34573 0.33824 2.19734 0.399664 2.08791 0.509039L0.336981 2.25904C0.109114 2.48677 0.109014 2.85614 0.336759 3.08399C0.56451 3.31184 0.933854 3.31196 1.16172 3.08422L1.91695 2.32939V9.0883C1.91695 9.41046 2.17812 9.67163 2.50028 9.67163Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M5.99935 8.50496C5.67717 8.50496 5.41602 8.24379 5.41602 7.92163C5.41602 7.59947 5.67717 7.3383 5.99935 7.3383H10.666C10.9882 7.3383 11.2493 7.59947 11.2493 7.92163C11.2493 8.24379 10.9882 8.50496 10.666 8.50496H5.99935Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M8.33268 2.67163C8.01051 2.67163 7.74935 2.41047 7.74935 2.0883C7.74935 1.76612 8.01051 1.50496 8.33268 1.50496H10.666C10.9882 1.50496 11.2493 1.76612 11.2493 2.0883C11.2493 2.41047 10.9882 2.67163 10.666 2.67163H8.33268Z"
                              fill="#A9ABCD"
                            ></path>
                            <path
                              d="M6.58268 5.00496C6.58268 5.32714 6.84384 5.5883 7.16602 5.5883H10.666C10.9882 5.5883 11.2493 5.32714 11.2493 5.00496C11.2493 4.68279 10.9882 4.42163 10.666 4.42163H7.16602C6.84384 4.42163 6.58268 4.68279 6.58268 5.00496Z"
                              fill="#A9ABCD"
                            ></path>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_554_3144"
                              x="0.166016"
                              y="0.338379"
                              width="11.083"
                              height="10.3333"
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
                              <feComposite
                                in2="hardAlpha"
                                operator="out"
                              ></feComposite>
                              <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                              ></feColorMatrix>
                              <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_554_3144"
                              ></feBlend>
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_554_3144"
                                result="shape"
                              ></feBlend>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tempArray.map((_, k) => (
                <tr key={k} className="border-b  border-[#161620E5]">
                  <td className="pr-3 py-5">
                    <p className="text-sm text-primary-grey">{k + 1}</p>
                  </td>
                  <td className="flex items-center gap-3  py-5">
                    <img src="/image/icons/user1.png" alt="" />
                    <p className="text-sm text-white"> 💢stasik💢</p>
                  </td>
                  <td className="py-5">
                    <div className="relative">
                      <img
                        className="absolute -top-1.5 left-0  translate-x-0"
                        src="/image/icons/cycle.png"
                        alt=""
                      />
                      <p className="relative text-sm text-white z-10"> 1432</p>
                    </div>
                  </td>
                  <td className="pr-3 py-5">
                    <div className="flex items-center gap-2">
                      <img src="/image/icons/user1.png" alt="" />
                      <p className="text-sm text-white"> AUS</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                      <img src="/image/icons/game.png" alt="" />
                      <p className="text-sm text-white"> 4,589</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <p className="text-sm text-white">12,100</p>
                  </td>
                  <td className="py-5">
                    <p className="text-sm text-white">
                      3,400<span className="text-primary-grey"> (H)</span>
                    </p>
                  </td>
                  <td className="py-5 pl-6">
                    <p className="text-sm text-white">14</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Affiliates;
