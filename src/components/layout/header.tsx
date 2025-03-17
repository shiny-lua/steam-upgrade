import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import WalletModal from "./wallet-modal";
import FreeModal from "./free-modal";
import { config, useGlobalContext } from "../../context";
import { Button } from "@material-tailwind/react";
import Icon from "../icon";
import { restApi } from "../../context/restApi";

const Header = () => {
  const [state, { dispatch, storeData }] = useGlobalContext();
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const [showWalletModal, setWalletModal] = React.useState(false);
  const [showFreeModal, setFreeModal] = React.useState(false);
  const [showProfileDropdown, setProfileDropdown] = React.useState(false);
  
  const [isOpenedMenuMobile, setIsOpenedMenuMobile] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const cookie = Cookies.get("authToken")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdown(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch({ type: "isOpenedMenu", payload: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, menuRef]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await restApi.postRequest("get-user");

      if (resp.status === 200) {
        dispatch({ type: "userData", payload: resp.data });
        dispatch({ type: "authToken", payload: cookie })
        storeData(resp.data)
      }
    }
    fetchData();
  }, [])

  const onSignIn = async () => {
    setIsLoading(true);
    window.location.href = config.BACKEND_URL + "/auth/steam";
  };

  return (
    <div className="w-full bg-primary fixed top-0 left-0 py-5 z-9999">
      {state.authToken ? (
        <header className="flex justify-between md:justify-around px-3 sm:px-5 md:px-0">
          <div className="flex gap-6 items-center">
            <div className="relative flex md:hidden" ref={menuRef} >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: "isOpenedMenu",
                    payload: !state.isOpenedMenu,
                  });
                }}
                className="w-9 h-9 rounded-lg bg-[#252633] bg-opacity-90 flex items-center justify-center z-10 cursor-pointer"
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="du-block absolute px-[2.5px] right-0 h-full w-full">
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-[0] duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-300"}`}></span>
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-150 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "delay-400 !w-full"}`}></span>
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-200 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-500"}`}></span>
                  </span>
                  <span className="absolute right-0 h-full w-full rotate-45">
                    <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-smdelay-300 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-[0]"}`}></span>
                    <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-200"}`}></span>
                  </span>
                </span>
              </div>
              {state.isOpenedMenu && (
                <div className={`absolute w-screen flex md:hidden top-18 -left-3 bg-primary-dark shadow-lg shadow-gray-900/10 flex items-center rounded-lg flex flex-col gap-4 p-2 z-50 duration-300 ease-linear pb-4`}>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/home"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="LevelUp" />
                    <span className="text-[13.5px]">Level Up</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/orders"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Orders" />
                    <span className="text-[13.5px] ">Orders</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/ranks"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Ranks" />
                    <span className="text-[13.5px]">Ranks</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/affiliates"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Affiliates" />
                    <span className="text-[13.5px]">Affiliates</span>
                  </Link>
                </div>
              )}
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenedMenuMobile(!isOpenedMenuMobile);
              }}
              className="hidden md:flex w-9 h-9 rounded-lg bg-[#252633] bg-opacity-90 flex items-center justify-center z-10 cursor-pointer"
            >
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute px-[2.5px] right-0 h-full w-full">
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-[0] duration-200 ease-in-out bg-white ${!isOpenedMenuMobile && "!w-full delay-300"}`}></span>
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-150 duration-200 ease-in-out bg-white ${!isOpenedMenuMobile && "delay-400 !w-full"}`}></span>
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-200 duration-200 ease-in-out bg-white ${!isOpenedMenuMobile && "!w-full delay-500"}`}></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-smdelay-300 duration-200 ease-in-out bg-white ${!isOpenedMenuMobile && "!h-0 !delay-[0]"}`}></span>
                  <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-white ${!isOpenedMenuMobile && "!h-0 !delay-200"}`}></span>
                </span>
              </span>
            </div>
            {isOpenedMenuMobile && (
              <div
                className={`hidden md:flex bg-primary-lightDark items-center rounded-lg flex gap-4 p-2 z-50 duration-300 ease-linear ${isOpenedMenuMobile ? "fade-in" : "fade-out"}`}
              >
                <div>
                  <Link
                    className={`flex gap-2 items-center ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/home"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-4" icon="LevelUp" />
                    <span className="text-sm">Level Up</span>
                  </Link>
                </div>
                <div>
                  <Link
                    className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/orders"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-4" icon="Orders" />
                    <span className="text-sm">Orders</span>
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <Link
                    className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/ranks"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-4" icon="Ranks" />
                    <span className="text-sm">Ranks</span>
                  </Link>
                </div>
                <div>
                  <Link
                    className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/affiliates"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-4" icon="Affiliates" />
                    <span className="text-sm">Affiliates</span>
                  </Link>
                </div>
              </div>
            )}
            <Link to="/" className="flex items-center gap-2">
              <img src="/image/icons/logo.png" alt="logo" />
              {!state.isOpenedMenu && (
                <div className="flex flex-col mt-1">
                  <p className="text-[#A942E7] font-bold text-[20px] leading-none">Steam</p>
                  <p className="text-[#A942E7] font-bold text-sm leading-none">Upgrade</p>
                </div>
              )}
            </Link>
          </div>

          <div className="hidden md:flex rounded-[10px] border border-[#252633]">
            <div className="flex justify-center items-center w-24 text-sm text-white">
              $ {state.userData.balance}
            </div>
            <div className="p-1 z-10">
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient flex items-center gap-2"
                style={{ position: "relative", overflow: "hidden" }}
                onClick={() => setWalletModal(true)}
                placeholder=""
              >
                <Icon icon="Wallet" />
                <span className="normal-case text-white text-sm">Wallet</span>
              </Button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div
              onClick={() => setFreeModal(true)}
              className="hidden lg:flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey"
            >
              <Icon icon="Free" />
              <span className="text-primary-grey text-sm">Free</span>
            </div>
            <Link to="/inventory" className="hidden lg:flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey">
              <Icon icon="Bag" />
              <div className="bg-primary-dark flex items-center justify-center w-6 rounded-lg text-primary-grey">
                0
              </div>
            </Link>
            <div>
              <Link to="/profile">
                <img
                  src={state.userData.avatar || "/image/icons/unknown-user.jpg"}
                  alt=""
                  className="hidden lg:block !rounded-full w-10 h-10"
                />
              </Link>
              <div className="relative lg:hidden block flex items-center justify-center cursor-pointer" ref={dropdownRef}>
                <button onClick={() => setProfileDropdown(!showProfileDropdown)}>
                  <img
                    src={state.userData.avatar || "/image/icons/unknown-user.jpg"}
                    alt=""
                    className="!rounded-full w-10 h-10"
                  />
                </button>
                {showProfileDropdown && (
                  <div className="absolute top-15 right-0 w-[150px] bg-[#252633] shadow-[#525252] shadow-1 shadow-gray-900/10 flex items-center rounded-lg flex flex-col p-2 z-50 duration-300 ease-linear">
                    <div
                      onClick={() => setFreeModal(true)}
                      className="flex items-center w-full ml-4 gap-4 bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey"
                    >
                      <Icon icon="Free" />
                      <span className="text-primary-grey text-sm">Free</span>
                    </div>
                    <Link to="/inventory" className="flex items-center w-full ml-4 gap-4 bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey">
                      <Icon icon="Bag" />
                      <div>Cart</div>
                      <div className="bg-primary-dark flex items-center justify-center w-6 rounded-lg text-primary-grey">
                        0
                      </div>
                    </Link>
                    <button onClick={() => setWalletModal(true)} className="flex md:hidden flex items-center w-full ml-4 gap-4 bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey">
                      <Icon icon="Wallet" />
                      <span className="normal-case text-sm">Wallet</span>
                    </button>
                    <Link to="/profile" className="flex items-center w-full ml-4 gap-4 bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey">
                      <Icon icon="Affiliates" className="w-4 text-white" />
                      <span className="normal-case text-sm">Profile</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header className="flex justify-between lg:justify-around px-3 sm:px-5 md:px-10">
          <div className="flex gap-6 items-center">
            <div className="relative flex md:hidden" ref={menuRef} >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: "isOpenedMenu",
                    payload: !state.isOpenedMenu,
                  });
                }}
                className="w-9 h-9 rounded-lg bg-[#252633] bg-opacity-90 flex items-center justify-center z-10 cursor-pointer"
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="du-block absolute px-[2.5px] right-0 h-full w-full">
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-[0] duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-300"}`}></span>
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-150 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "delay-400 !w-full"}`}></span>
                    <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-smdelay-200 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!w-full delay-500"}`}></span>
                  </span>
                  <span className="absolute right-0 h-full w-full rotate-45">
                    <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-smdelay-300 duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-[0]"}`}></span>
                    <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-white ${!state.isOpenedMenu && "!h-0 !delay-200"}`}></span>
                  </span>
                </span>
              </div>
              {state.isOpenedMenu && (
                <div className={`absolute w-screen flex md:hidden top-18 -left-3 bg-primary-dark shadow-lg shadow-gray-900/10 flex items-center rounded-lg flex flex-col gap-4 p-2 z-50 duration-300 ease-linear pb-4`}>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/home"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="LevelUp" />
                    <span className="text-[13.5px]">Level Up</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/orders"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Orders" />
                    <span className="text-[13.5px] ">Orders</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/ranks"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Ranks" />
                    <span className="text-[13.5px]">Ranks</span>
                  </Link>
                  <Link
                    className={`flex gap-2 items-center hover:text-white w-full px-2 sm:px-4 ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"}`}
                    to="/affiliates"
                    onClick={() => dispatch({ type: "isOpenedMenu", payload: false })}
                  >
                    <Icon className="w-5" icon="Affiliates" />
                    <span className="text-[13.5px]">Affiliates</span>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="flex items-center gap-2">
              <img src="/image/icons/logo.png" alt="logo" />
              <div className="flex flex-col mt-1">
                <p className="text-[#A942E7] font-bold text-[20px] leading-none">Steam</p>
                <p className="text-[#A942E7] font-bold text-sm leading-none">Upgrade</p>
              </div>
            </Link>
          </div>

          <div className={`hidden md:flex items-center rounded-lg flex gap-4 p-2 z-50 duration-300 ease-linear`}>
            <div>
              <Link className={`flex gap-2 items-center ${pathname.includes("home") ? "text-primary-white" : "text-primary-grey"}`} to="/home">
                <Icon className="w-4" icon="LevelUp" />
                <span className="text-sm">Level Up</span>
              </Link>
            </div>
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"}`}
                to="/orders"
              >
                <Icon className="w-4" icon="Orders" />
                <span className="text-sm ">Orders</span>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"}`}
                to="/ranks"
              >
                <Icon className="w-4" icon="Ranks" />
                <span className="text-sm">Ranks</span>
              </Link>
            </div>
            <div>
              <Link className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"}`} to="/affiliates">
                <Icon className="w-4" icon="Affiliates" />
                <span className="text-sm">Affiliates</span>
              </Link>
            </div>
          </div>

          <Button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 z-10"
            onClick={onSignIn}
            placeholder=""
          >
              <div className="flex gap-1">
                {isLoading ? (
                  <div className="animate-spin rounded-full border-2 border-solid border-white border-t-transparent w-4 h-4" />
                ) : (
                  <Icon icon="Steam" />
                )}
                <span className="text-white normal-case">Sign In</span>
              </div>

          </Button>
        </header>
      )}

      {showWalletModal && <WalletModal isOpen={showWalletModal} onClose={() => setWalletModal(false)} />}
      {showFreeModal && <FreeModal isOpen={showFreeModal} onClose={() => setFreeModal(false)} />}
    </div>
  );
};

export default Header;
