import React from "react";
import Layout from "../../components/layout";
import { Button } from "@material-tailwind/react";
import Icon from "../../components/icon";
import { useNavigate } from "react-router-dom";

const tempArray = Array.from({ length: 10 }, (_, index) => index + 1);

const Affiliates = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="relative h-full w-full max-w-[868px] mx-auto px-4 mt-5 md:mt-10">
        <Icon icon="Effort" />
        <div className="flex flex-col xsm:flex-row items-start justify-between gap-4 mb-4">
          <div className="space-y-3">
            <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
              <Icon icon="Back" />
              <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
                Back
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-[#A9ABCD]"><Icon icon="Affiliates" className="w-6" /></div>
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

        <div className="flex flex-col sm:flex-row gap-4 xsm:mt-10 relative z-10">
          <div className="w-full sm:w-[65%] bg-primary-lightDark rounded-md flex flex-col gap-5 p-4 md:p-5">
            <div className="flex gap-2 items-center">
              <Icon icon="Users" />
              <span className="text-primary-white text-base">Share & Earn</span>
            </div>
            <div className="space-y-4">
              <p className="text-primary-grey text-[0.75rem] font-[700] leading-[16.8px]">
                Join our affiliate program and earn 10% of every purchase made
                through your unique referral link. It's a simple way to share,
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
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center">
                    <Icon icon="Edit" />
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
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center">
                    <Icon icon="Copy" />
                  </button>
                </div>
              </div>
              <hr className="bg-primary-dark border-primary-dark mt-2" />
              <div className="grid grid-cols-1 xsm:grid-cols-3 gap-4 mt-4">
                <div className="flex gap-2 items-center">
                  <div className="text-[#A9ABCD]"><Icon icon="Affiliates" className="w-6" /></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">49</span>
                    <span className="text-primary-grey text-[0.81rem] font-[400]">Referrals</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Icon icon="CheckedUser" />
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">15</span>
                    <span className="text-primary-grey text-[0.81rem] font-[400]">Buyers</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Icon icon="Users" />
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">$225.34</span>
                    <span className="text-primary-grey text-[0.81rem] font-[400]">Total Profit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[35%] bg-primary-lightDark rounded-md flex flex-col justify-between p-4 md:p-5">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <Icon icon="Users" />
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
                        <Icon icon="CheckedBox" />
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
                        <Icon icon="CheckedBox" />
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
                        <Icon icon="CheckedBox" />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button
                className="mt-5 sm:mt-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 inline-block w-full opacity-50"disabled placeholder=""                >
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-white normal-case text-sm">
                    Claim discount
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="bg-primary-lightDark/90 rounded-lg p-4 md:p-8 overflow-x-auto">
            <table className="w-full text-left table-auto min-w-[800px]">
              <thead>
                <tr>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <p>#</p>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <p>Stream ID</p>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <button className="flex items-center gap-2">
                        <p>level</p>
                        <span>
                          <Icon icon="CheckedBox" />
                        </span>
                      </button>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <p>country</p>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <button className="flex items-center gap-2">
                        <p>games</p>
                        <Icon icon="CheckedBox" />
                      </button>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <button className="flex items-center gap-2">
                        <p>badges</p>
                        <Icon icon="CheckedBox" />
                      </button>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <button className="flex items-center gap-2">
                        <p>playtime</p>
                        <Icon icon="CheckedBox" />
                      </button>
                    </div>
                  </th>
                  <th className="pt-1 pb-5 whitespace-nowrap">
                    <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                      <button className="flex items-center gap-2">
                        <p>year</p>
                        <Icon icon="CheckedBox" />
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tempArray.map((_, k) => (
                  <tr key={k} className="border-b border-[#161620E5]">
                    <td className="pr-3 py-5 whitespace-nowrap">
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
      </div>
    </Layout>
  );
};

export default Affiliates;
