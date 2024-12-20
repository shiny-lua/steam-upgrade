import React from "react";
import Layout from "../../components/layout";
import Icon from "../../components/icon";
import { useNavigate } from "react-router-dom";

const tempArray = Array.from({ length: 30 }, (_, index) => index + 1);

const Ranks = () => {
    const navigate = useNavigate()
    
    return (
    <Layout>
      <div className="relative h-full mx-auto w-[868px] mt-5 md:mt-10">
        <Icon icon="Effort" />
        <div className="mb-5">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-3 ">
              <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
                <Icon icon="Back" />
                <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
                  Back
                </span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-[#A9ABCD]"><Icon icon="Ranks" className="w-8" /></div>
                <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">
                  Ranks
                </h2>
              </div>
            </div>
            <div className="relative">
              <Icon icon="Search" />
              <input
                id="searchRank"
                className="bg-transparent inline-block w-full h-full text-primary-grey px-6 py-2 border  border-[#252633] focus:outline-none focus:ring-1 focus:ring-primary-grey focus:px-9 rounded-md placeholder:text-[14px] placeholder:font-[500] placeholder:leading-[14px] placeholder:text-[#A9ABCD] placeholder:pl-2 transition-all"
                placeholder="Search Steam ID..."
              />
            </div>
          </div>
          <div className="w-3/4 mx-auto">
            <div className="w-full h-full grid grid-cols-3 gap-10">
              <div className="flex flex-col justify-center items-center gap-1">
                <Icon icon="Game" className="w-8" />
                <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                  543,892
                </h2>
                <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400]">
                  Games Played Today
                </small>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <Icon icon="Badge" />
                <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                  87,252
                </h2>
                <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400]">
                  Badges Crafted Today
                </small>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="text-primary-grey"><Icon className="w-6" icon="LevelUp" /></div>
                <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                  100,697
                </h2>
                <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400]">
                  Levels Gained Today
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center min-h-[400px] w-full h-full overflow-hidden bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-8">
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
                      <Icon icon="Sort" />
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
                      <Icon icon="Sort" />
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>badges</p>
                      <Icon icon="Sort" />
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>playtime</p>
                      <Icon icon="Sort" />
                    </button>
                  </div>
                </th>
                <th className="pt-1 pb-5">
                  <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    <button className="flex items-center gap-2">
                      <p>year</p>
                      <Icon icon="Sort" />
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
                    <img src='/image/icons/user1.png' alt="" />
                    <p className="text-sm text-white"> 💢stasik💢</p>
                  </td>
                  <td className="py-5">
                    <div className="relative">
                        <img className="absolute -top-1.5 left-0  translate-x-0" src='/image/icons/cycle.png' alt="" />
                        <p className="relative text-sm text-white z-10"> 1432</p>
                    </div>
                  </td>
                  <td className="pr-3 py-5">
                    <div className="flex items-center gap-2">
                        <img src='/image/icons/user1.png' alt="" />
                        <p className="text-sm text-white"> AUS</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                        <img src='/image/icons/game.png' alt="" />
                        <p className="text-sm text-white"> 4,589</p>
                    </div>
                  </td>
                  <td className="py-5"><p className="text-sm text-white">12,100</p></td>
                  <td className="py-5"><p className="text-sm text-white">3,400<span className="text-primary-grey"> (H)</span></p></td>
                  <td className="py-5 pl-6"><p className="text-sm text-white">14</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Ranks;
