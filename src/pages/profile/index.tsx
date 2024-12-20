import React from "react";
import Layout from "../../components/layout";
import { Button } from "@material-tailwind/react";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import Icon from "../../components/icon";

const Profile = () => {
    const [_, { dispatch }]: GlobalContextType = useGlobalContext();
    const navigate = useNavigate()

    const onLogout = () => {
        dispatch({ type: "isLoggedIn", payload: false })
        dispatch({ type: "isOpenedMenu", payload: false })
        navigate("/home")
    }

    return (
        <Layout>
            <div className="relative h-full mx-auto w-[700px] mt-5 md:mt-10">
                <div className="mb-5">
                    <div className="flex items-center justify-between mb-4">
                        <div className="space-y-3 ">
                            <button onClick={() => navigate("/home")}  className="flex gap-2 items-center" >
                                <Icon icon="Back" />
                                <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">Back</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <Icon icon="Affiliates" className="w-6" />
                                <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">Profile</h2>
                            </div>
                        </div>
                        <Button onClick={onLogout} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#252633] bg-opacity-90 h-9 flex items-center justify-center px-3.5 z-30" style={{ position: "relative", overflow: "hidden" }} placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
                            <div className="flex gap-2 items-center justify-center">
                                <Icon icon="Logout" />
                                <span className="text-primary-grey text-[0.84] font-[700] leading-[14px] capitalize">Logout</span>
                            </div>
                        </Button>
                    </div>
                    <div className="bg-primary-lightDark rounded-md flex flex-col gap-5 w-full p-7">
                        <div className="flex gap-2 items-center">
                            <div className="!rounded-full border border-[#222330] w-10 h-10 cursor-pointer z-10">
                                <img src="/image/icons/user.png" className="w-full h-full" alt="" />
                            </div><div className="flex flex-col gap-2">
                                <span className="text-primary-white font-[700] leading-[15px] text-base uppercase">madness</span>
                                <span className="text-primary-grey font-[400] leading-[15px] text-[0.78rem]">Joined 23/4/2024</span>
                            </div>
                        </div>
                        <hr className="bg-primary-dark border-primary-dark my-2" />
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-primary-grey text-[0.75rem] font-[700]">
                                <span>Your Email</span><span>Verified</span>
                            </div>
                            <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                                <input type="text" className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center" value="madnesspsd@gmail.com" />
                                <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
                                    <Icon icon="Checked" />
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-1.5 mt-2">
                            <span className="text-primary-grey text-[0.75rem] font-[700]">Your Trade URL</span>
                            <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                                <input type="text" className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center" value="Paste your Trade URL" />
                            </div>
                            <div className="flex gap-1 items-center">
                                <span className="text-primary-grey text-[0.7rem] leading-[12px] font-[700] underline">Find Trade URL</span>
                                <Icon icon="Link" className="w-3" />
                            </div>
                        </div>
                        <hr className="bg-primary-dark border-primary-dark my-2" />
                        <div>
                            <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 inline-block w-full" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture="">
                                <div className="flex gap-1 justify-center items-center">
                                    <span className="text-white normal-case text-sm">Save Setttings</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile