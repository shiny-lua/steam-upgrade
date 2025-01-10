import React from "react";
import { Link, useLocation } from "react-router-dom";

import WalletModal from "./wallet-modal";
import FreeModal from "./free-modal";
import { useGlobalContext } from "../../context";
import { Button } from "@material-tailwind/react";
import Icon from "../icon";
import { restApi } from "../../context/restApi";
const Header = () => {
  const [state, { dispatch, storeData }]: GlobalContextType = useGlobalContext();

  const [showWalletModal, setWalletModal] = React.useState(false);
  const [showFreeModal, setFreeModal] = React.useState(false);

  const location = useLocation();
  const { pathname } = location;

  React.useEffect(() => {
    const fetchData = async () => {
      if (!state.authToken) {
        const res = await restApi.postRequest("get-token")
        if (res.status === 200) {
          
          dispatch({ type: "authToken", payload: res.authToken })
          storeData(res.authToken)
          restApi.setAuthToken(res.authToken)
          const resp = await restApi.postRequest("get-user")
          dispatch({ type: "userData", payload: resp.data })
          console.log(resp.data, "data");
        }
      }
    }
    fetchData()
  }, [])

  const onSignIn = async () => {
    window.location.href = 'http://159.223.206.180:5000/auth/steam';
  }

  return (
    <div className="h-full w-full bg-primary pt-5 z-999999">
      <header className="flex justify-around">
        <div className="flex gap-6 items-center">
          {state.authToken && (
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
                  <Icon className="w-4" icon="LevelUp" />
                  <span className="text-sm">Level Up</span>
                </Link>
              </div>
              <div>
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/orders"
                >
                  <Icon icon="Orders" className="w-4" />
                  <span className="text-sm ">Orders</span>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/ranks"
                >
                  <Icon icon="Ranks" className="w-4" />
                  <span className="text-sm">Ranks</span>
                </Link>
              </div>
              <div>
                <Link
                  className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"} `}
                  to="/affiliates"
                >
                  <Icon icon="Affiliates" className="w-4" />
                  <span>Affiliates</span>
                </Link>
              </div>
            </div>
          )}
          <div className="flex items-center gap-2">
            <img src="/image/icons/logo.png" alt="logo" />
            {!state.isOpenedMenu && (
              <div className="flex flex-col mt-1">
                <p className="text-[#A942E7] font-bold text-[20px] leading-none">Steam</p>
                <p className="text-[#A942E7] font-bold text-sm leading-none">
                  Upgrade
                </p>
              </div>
            )}
          </div>
        </div>

        {state.authToken ? (
          <div className="flex rounded-[10px] border border-[#252633]">
            <div className="flex justify-center items-center w-24 text-sm text-white">
              $50.97
            </div>
            <div className="p-1 z-10">
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient flex items-center gap-2"
                style={{ position: "relative", overflow: "hidden" }}
                onClick={() => setWalletModal(true)} placeholder=""                >
                <Icon icon="Wallet" />
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
                <Icon className="w-4" icon="LevelUp" />
                <span className="text-sm">Level Up</span>
              </Link>
            </div>
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("orders") ? "text-primary-white" : "text-primary-grey"} `}
                to="/orders"
              >
                <Icon icon="Orders" className="w-4" />
                <span className="text-sm ">Orders</span>
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                className={`flex gap-2 items-center ${pathname.includes("ranks") ? "text-primary-white" : "text-primary-grey"} `}
                to="/ranks"
              >
                <Icon icon="Ranks" className="w-4" />
                <span className="text-sm">Ranks</span>
              </Link>
            </div>
            <div>
              <Link
                className={`flex gap-2 items-center ${pathname.includes("affiliates") ? "text-primary-white" : "text-primary-grey"} `}
                to="/affiliates"
              >
                <Icon icon="Affiliates" className="w-4" />
                <span>Affiliates</span>
              </Link>
            </div>
          </div>
        )}
        {state.authToken ? (
          <div className="flex gap-3 items-center">
            <div
              onClick={() => setFreeModal(true)}
              className="flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey"
            >
              <Icon icon="Free" />
              <span className="text-primary-grey text-sm">Free</span>
            </div>
            <Link to="/inventory" className="flex items-center bg-[#252633] bg-opacity-90 p-3 gap-2 rounded-[10px] cursor-pointer z-10 text-primary-grey">
              <Icon icon="Bag" />
              <div className="bg-primary-dark flex items-center justify-center w-6 rounded-lg text-primary-grey">
                0
              </div>
            </Link>
            <Link to="/profile">
              <img
                src={state.userData.avatar || "/image/icons/unknown-user.jpg"}
                alt=""
                className="!rounded-full w-10 h-10"
              />
            </Link>
          </div>
        ) : (
          <Button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 z-10"
            onClick={onSignIn} placeholder=""            >
            <div className="flex gap-1">
              <Icon icon="Steam" />
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
