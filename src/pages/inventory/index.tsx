import React from "react";
import { Button } from "@material-tailwind/react";

import Icon from "../../components/icon";
import Layout from "../../components/layout";
import WithdrawCardModal from "./components/withdraw-card-modal";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(false)

    return (
        <Layout>
            <div className="relative h-full mx-auto w-[868px] mt-5 md:mt-10">
                <Icon icon="Effort" />

                <div className="mb-5">
                    <div className="flex items-start justify-between mb-4">
                        <div className="space-y-3 ">
                            <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
                                <Icon icon="Back" />
                                <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">Back</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <Icon icon="Bag" />
                                <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">Inventory</h2>
                                <div className="bg-[#3A3B54] p-1 rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">256</div>
                            </div>
                        </div>
                        <Button onClick={() => setShowModal(true)} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-[170px] p-2.5 z-10 cursor-pointer" style={{ position: "relative", overflow: "hidden" }} placeholder=""  >
                            <div className="w-full flex justify-between items-center">
                                <span className="capitalize text-sm">Withdraw Cards</span>
                                <div className="bg-[#3A3B54] text-primary-white py-1 px-1.5 rounded-md text-xs font-bold flex items-center justify-center">14</div>
                            </div>
                        </Button>
                    </div>
                    <div className="flex gap-4 mt-10 relative z-10">
                        <div className="bg-primary-lightDark rounded-md flex flex-col gap-5 p-5 w-full">
                            <div className="flex justify-between items-center">
                                <div className="relative">
                                    <Icon icon="Search" />
                                    <input id="searchRank" className="bg-transparent inline-block w-full h-full text-primary-grey px-6 py-2 placeholder:text-[14px] placeholder:font-[500] placeholder:leading-[14px] placeholder:text-[#A9ABCD] border-none focus:outline-none focus:ring-0 placeholder:pl-0 pl-7" placeholder="Search Game..." />
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <div className="inline-flex items-center">
                                            <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                                                <input type="checkbox" className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 flex items-center gap-0 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark" />
                                                <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                            </label>
                                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px">
                                                <span className="-mt-1 -ml-1 text-primary-grey text-sm flex items-center">Select All</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-primary-grey text-[0.85rem] font-[700]">Sort by: Most Cards</span>
                                    </div>
                                </div>
                            </div>
                            <hr className="bg-primary-dark border-primary-dark" />
                            <div className="rounded-md bg-primary-semiDark flex p-5 flex-col">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <div className="inline-flex items-center">
                                                <label className="relative flex items-center cursor-pointer p-3 rounded-full" style={{ position: "relative", overflow: "hidden" }}>
                                                    <input type="checkbox" className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 flex items-center gap-0 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark" />
                                                    <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white font-bold text-sm">Counter-Strike 2</span>
                                            <span className="text-primary-grey text-sm">Badge</span>
                                        </div>

                                    </div>
                                    <hr className="bg-primary-dark h-[3px] my-3" />
                                    <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">+100 XP</div>
                                </div>
                                <div className="flex gap-4 my-4">
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-1">
                                        <Icon icon="Set" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">3 Cards</span>
                                    </span>
                                    <span className="flex gap-1">
                                        <Icon icon="Card" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">248 Cards</span>
                                    </span>
                                </div>

                            </div>
                            <div className="rounded-md bg-primary-semiDark flex p-5 flex-col">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <div className="inline-flex items-center">
                                                <label className="relative flex items-center cursor-pointer p-3 rounded-full" style={{ position: "relative", overflow: "hidden" }}>
                                                    <input type="checkbox" className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 flex items-center gap-0 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark" />
                                                    <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white font-bold text-sm">Counter-Strike 2</span>
                                            <span className="text-primary-grey text-sm">Badge</span>
                                        </div>

                                    </div>
                                    <hr className="bg-primary-dark h-[3px] my-3" />
                                    <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">+100 XP</div>
                                </div>
                                <div className="flex gap-4 my-4">
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-1">
                                        <Icon icon="Set" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">3 Cards</span>
                                    </span>
                                    <span className="flex gap-1">
                                        <Icon icon="Card" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">248 Cards</span>
                                    </span>
                                </div>

                            </div>
                            <div className="rounded-md bg-primary-semiDark flex p-5 flex-col">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <div className="inline-flex items-center">
                                                <label className="relative flex items-center cursor-pointer p-3 rounded-full" style={{ position: "relative", overflow: "hidden" }}>
                                                    <input type="checkbox" className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 flex items-center gap-0 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark" />
                                                    <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white font-bold text-sm">Counter-Strike 2</span>
                                            <span className="text-primary-grey text-sm">Badge</span>
                                        </div>

                                    </div>
                                    <hr className="bg-primary-dark h-[3px] my-3" />
                                    <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">+100 XP</div>
                                </div>
                                <div className="flex gap-4 my-4">
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img src="image/cs-go.png" alt="" />
                                        <div className="flex gap-1 items-center justify-center bg-[#3A3B54] py-1 px-2 rounded-md absolute top-[15px] left-[15px]">
                                            <Icon icon="SquareGridCircle" />
                                            <div className="text-sm  text-primary-grey">4</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex gap-1">
                                        <Icon icon="Set" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">3 Cards</span>
                                    </span>
                                    <span className="flex gap-1">
                                        <Icon icon="Card" />
                                        <span className="text-primary-grey text-[13px] font-sans font-bold">248 Cards</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-14 flex justify-center gap-[14px] flex-col items-center">
                    <Icon icon="Video" />
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
                        <Icon icon="Img4" />
                    </div>
                </div>
            </div>
            {showModal && <WithdrawCardModal isOpen={showModal} onClose={() => setShowModal(false)} />}
        </Layout >
    )
}

export default Inventory;