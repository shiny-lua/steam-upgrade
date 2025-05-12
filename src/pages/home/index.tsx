import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";

import { config, useGlobalContext } from "../../context";
import Layout from "../../components/layout";
import LevelUpModal from "./components/level-up-modal";
import Icon from "../../components/icon";
import { restApi } from "../../context/restApi";
import { getDaysDifference, showToast } from "../../context/helper";
import { getXPForLevel } from "../../hooks/get-user-xp";
import CsGoModal from "./components/cs-go-modal";
import Loading from "../../components/loading";

interface Status {
  currentSteamLevel: number;
  dreamSteamLevel: number;
  xp: number;
  sets: number;
  gameCoupons: number;
  emotes: number;
  backgrounds: number;
  showcases: number;
  friendCap: number;
  boosterPackRate: number;
  estimatedCost: number;
  worldRank: number;
  levelBadge: string;
  levelBadgeBorder: string;
  levelBadgeOffset: number;
  discountedCost: number;
  daysDiff: number;
}

const Home = () => {
  const navigate = useNavigate()
  const [state, { dispatch }] = useGlobalContext();

  const [isLoading, setIsLoading] = React.useState(false);
  const [status, setStatus] = React.useState<Status>({
    currentSteamLevel: 0,
    dreamSteamLevel: 0,
    xp: 0,
    sets: 0,
    gameCoupons: 0,
    emotes: 0,
    backgrounds: 0,
    showcases: 0,
    friendCap: 0,
    boosterPackRate: 0,
    worldRank: 0,
    estimatedCost: 0,
    discountedCost: 0,
    levelBadge: "",
    levelBadgeOffset: 0,
    levelBadgeBorder: "",
    daysDiff: 0
  })
  const [showLevelUpModal, setShowLevelUpModal] = React.useState(false);
  const [showTradeUrlModal, setShowTradeUrlModal] = React.useState(false);
  const [showCsGoModal, setShowCsGoModal] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await restApi.postRequest("get-steam-level")

      const {
        xp,
        gameCoupons,
        sets,
        emotes,
        backgrounds,
        showcases,
        friendCap,
        boosterPackRate,
        estimatedCost
      } = getXPForLevel(res.data + 1, res.data);
      const refCode = Cookies.get("refCode");
      const expireDays = Cookies.get("refCode_expires");
      let daysDiff = 0;
      if (expireDays) {
        daysDiff = getDaysDifference(expireDays);
      }
      const discount = refCode ? 0.05 : 0;
      // Update status and global state
      setStatus({
        ...status,
        currentSteamLevel: res.data,
        dreamSteamLevel: res.data + 1,
        xp,
        sets,
        gameCoupons,
        emotes,
        backgrounds,
        showcases,
        friendCap,
        boosterPackRate,
        estimatedCost: Number(estimatedCost),
        discountedCost: Number((estimatedCost * (1 - discount)).toFixed(2)),
        daysDiff
      });

      dispatch({ type: "steamLevel", payload: res.data })
    }

    fetchData()
  }, [state.authToken])

  React.useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");

    if (scrollContainer) {
      const handleWheel = (e: any) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const onLevelChange = (n: number) => {
    // Validate input
    if (n < 0) {
      n = 0;
      showToast("Level cannot be negative", "warning");
    } else if (n > 6199) {
      n = 6199;
      showToast("We are only able to level up to 6199", "warning");
    }

    // Calculate XP and related stats
    const {
      xp,
      gameCoupons,
      sets,
      emotes,
      backgrounds,
      showcases,
      friendCap,
      boosterPackRate,
      estimatedCost
    } = getXPForLevel(n, status.currentSteamLevel);

    const refCode = Cookies.get("refCode");
    const discount = refCode ? 0.05 : 0;
    // Update status and global state
    setStatus({
      ...status,
      dreamSteamLevel: Number(n),
      xp,
      sets,
      gameCoupons,
      emotes,
      backgrounds,
      showcases,
      friendCap,
      boosterPackRate,
      estimatedCost: Number(estimatedCost),
      discountedCost: Number((estimatedCost * (1 - discount)).toFixed(2)),
    });

    dispatch({ type: "steamLevel", payload: n });
  }

  React.useEffect(() => {
    const updateLevelBadge = () => {
      if (status.dreamSteamLevel < 100) {
        if (status.dreamSteamLevel < 10) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(130, 131, 133)' }));
        } else if (status.dreamSteamLevel < 20) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(201, 43, 69)' }));
        } else if (status.dreamSteamLevel < 30) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(228, 96, 70)' }));
        } else if (status.dreamSteamLevel < 40) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(255, 214, 37)' }));
        } else if (status.dreamSteamLevel < 50) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(74, 128, 63)' }));
        } else if (status.dreamSteamLevel < 60) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(82, 148, 231)' }));
        } else if (status.dreamSteamLevel < 70) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(123, 87, 210)' }));
        } else if (status.dreamSteamLevel < 80) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(205, 87, 212)' }));
        } else if (status.dreamSteamLevel < 90) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(88, 38, 58)' }));
        } else if (status.dreamSteamLevel < 100) {
          setStatus(prev => ({ ...prev, levelBadgeBorder: '2px solid rgb(161, 130, 87)' }));
        }
        setStatus(prev => ({ ...prev, levelBadge: '' }));

      } else if (status.dreamSteamLevel < 6200) {
        const baseLevel = Math.floor(status.dreamSteamLevel / 100) * 100;
        const remainder = Math.floor((status.dreamSteamLevel - baseLevel) / 10); // Get the tens digit
        const yOffset = -(remainder * 32); // Each 10-level badge is 32px tall
        const badgePath = `/image/badges/${baseLevel}.png`;
        setStatus(prev => ({
          ...prev,
          levelBadge: badgePath,
          levelBadgeOffset: yOffset,
          levelBadgeBorder: 'none'
        }));
      }
    };

    updateLevelBadge();
  }, [status.dreamSteamLevel]);

  const onLevelUp = (n: number) => {
    // Validate input
    if (status.dreamSteamLevel + n < 0) {
      n = 0;
      showToast("Level cannot be negative", "warning");
    } else if (status.dreamSteamLevel + n > 6199) {
      n = 6199 - status.dreamSteamLevel;
      showToast("We are only able to level up to 6199", "warning");
    }

    // Calculate XP and related stats
    const {
      xp,
      gameCoupons,
      sets,
      emotes,
      backgrounds,
      showcases,
      friendCap,
      boosterPackRate,
      estimatedCost
    } = getXPForLevel(status.dreamSteamLevel + n, status.currentSteamLevel);
    const refCode = Cookies.get("refCode");
    const expireDays = Cookies.get("refCode_expires");
    let daysDiff = 0;
    if (expireDays) {
      daysDiff = getDaysDifference(expireDays);
    }
    const discount = refCode ? 0.05 : 0;
    // Update status and global state
    setStatus({
      ...status,
      dreamSteamLevel: status.dreamSteamLevel + n,
      xp,
      sets,
      gameCoupons,
      emotes,
      backgrounds,
      showcases,
      friendCap,
      boosterPackRate,
      estimatedCost: Number(estimatedCost),
      discountedCost: Number((estimatedCost * (1 - discount)).toFixed(2)),
      daysDiff
    });
    dispatch({ type: "steamLevel", payload: status.dreamSteamLevel + n })
  }

  const onSignIn = async () => {
    setIsLoading(true);
    window.location.href = config.BACKEND_URL + "/auth/steam";
  }

  const onShowLevelUpModal = () => {

    if (state.userData.balance < status.estimatedCost) {
      return showToast("You don't have enough balance, please add more balance to your wallet", "warning")
    }

    if (status.dreamSteamLevel <= status.currentSteamLevel) {
      return showToast("Desired level should be higher than current level", "warning")
    }
    if (!state.userData.tradeLink || state.userData.isVerifiedEmail === false) {
      showToast("Please verify your email and trade link to continue", "warning")
      navigate("/profile")
      return
    }
    setShowLevelUpModal(true)
  }

  React.useEffect(() => {
    if (state.isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state.isLoading]);


  return (
    <Layout>
      {state.isLoading && (
        <div className="fixed top-0 left-0 z-[50000000000] w-[100vw] h-[100vh] bg-black/10 backdrop-blur-sm flex justify-center -mt-10 items-center">
          <Loading size={150} />
        </div>
      )}
      <div className={`px-3 relative sm:px-4 md:px-8 lg:px-0 mx-auto max-w-[1000px] mt-5 md:mt-20 ${state.isLoading ? "pointer-events-none" : ""}`}>
        <div className="relative">
          <Icon icon="Effort" />
          <div className="flex flex-col lg:flex-row gap-4 relative z-10">
            <div className="bg-primary-lightDark rounded-md flex flex-col gap-6 w-full lg:w-2/3 pt-5 p-3 xsm:p-5 sm:p-7 ">
              <div className="flex gap-2 items-center">
                <div className="text-primary-grey"><Icon className="w-4" icon="LevelUp" /></div>
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
                <div className="flex gap-2 items-center min-w-28">
                  <div className="flex items-center justify-center bg-primary-lightDark w-5 h-5 rounded-full text-primary-grey text-xs">
                    3
                  </div>
                  <span className="text-primary-grey text-xs">
                    Send Order
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
              <div className="flex flex-col sm:flex-row justify-between sm:gap-3">
                <div className="flex flex-col gap-3 w-full sm:w-[45%]">
                  <span className="text-primary-grey text-xs">Your Level</span>
                  <div className="bg-primary-dark opacity-50 rounded-[10px] w-full px-4 py-3 flex justify-between items-center">
                    <span className="text-[#EDEDED] text-sm">{status.currentSteamLevel} </span>
                    <div className="w-8 h-8 flex text-sm justify-center items-center rounded-full border-2 border-[#828385] text-white">
                      {status.currentSteamLevel}
                    </div>
                  </div>
                  <Button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 flex items-center justify-center gap-1" >
                    <Icon icon="Refresh" />
                    <span className="text-primary-grey normal-case">
                      Refresh
                    </span>
                  </Button>
                </div>
                <div className="flex justify-center py-4 sm:py-5 sm:-mt-3 items-center">
                  <Icon className="hidden sm:block" icon="ArrowRight" />
                  <Icon className="block sm:hidden" icon="ArrowDown" />
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-[45%]">
                  <span className="text-primary-grey text-xs">
                    Dream Steam Level
                  </span>
                  <div className="bg-primary-dark opacity-50 rounded-[10px] w-full px-4 py-3 flex justify-between items-center">
                    <input
                      type="number"
                      value={status.dreamSteamLevel || ''}
                      placeholder="0"
                      onChange={e => onLevelChange(parseInt(e.target.value) || 0)}
                      className="text-[#EDEDED] text-sm border-none outline-none bg-transparent"
                    />
                    <div
                      className="text-white text-sm relative w-8 h-8 bg-no-repeat flex justify-center items-center"
                      style={{
                        backgroundImage: status.levelBadge ? `url(${status.levelBadge})` : 'none',
                        backgroundPosition: `center ${status.levelBadgeOffset}px`,
                        border: status.levelBadgeBorder,
                        borderRadius: status.levelBadgeBorder ? '50%' : 'none'
                      }}
                    >
                      {status.dreamSteamLevel}
                    </div>
                  </div>
                  <div className="flex gap-2 h-8">
                    <button onClick={() => onLevelUp(1)} className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +1
                    </button>
                    <button onClick={() => onLevelUp(10)} className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +10
                    </button>
                    <button onClick={() => onLevelUp(100)} className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      +100
                    </button>
                    <button onClick={() => setStatus({ ...status, dreamSteamLevel: 0 })} className="bg-[#3A3B54] rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                      <Icon icon="Recycle" />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="bg-primary-dark border-primary-dark" />
              <div className="flex flex-col xsm:flex-row justify-between gap-2 items-start xsm:items-center">
                <span className="text-[13px] font-bold text-white">
                  {status.estimatedCost === status.discountedCost && (<span>${status.estimatedCost}</span>)}
                  {status.estimatedCost !== status.discountedCost && (
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1 items-center">
                        <span className="text-primary-grey text-[13px] line-through decoration-white">${status.estimatedCost}</span> ${status.discountedCost}
                        <span className="text-primary-grey text-[13px]">
                        </span>
                      </div>
                    </div>
                  )}
                </span>
                <div className="flex gap-[14px]">
                  <div className="flex gap-[6px] items-center">
                    <Icon icon="Set" />
                    <span className="text-primary-grey text-[13px]">
                      0 Sets
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <Icon icon="Card" />
                    <span className="text-primary-grey text-[13px]">
                      0 Cards
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <Icon icon="Game" className="w-4" />
                    <span className="text-primary-grey text-[13px]">
                      0 Emotes
                    </span>
                  </div>
                </div>
              </div>
              {status.discountedCost !== status.estimatedCost && (
                <div className="flex gap-1 items-center -mt-5">
                  <span className="text-deep-purple-300 text-[13px]">
                    5% discount applied from referral code ({status.daysDiff} days left)
                  </span>
                </div>
              )}
              {!state.authToken ? (
                <Button
                  onClick={onSignIn}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4">
                  <div className="flex gap-1 justify-center items-center">
                    {isLoading ? (
                      <div className="animate-spin rounded-full border-2 border-solid border-white border-t-transparent w-4 h-4" />
                    ) : (
                      <Icon icon="Steam" />
                    )}
                    <span className="text-white normal-case text-sm">
                      Sign In with Steam
                    </span>
                    <Icon icon="TriangleRight" />
                  </div>
                </Button>
              ) : (
                <Button
                  onClick={onShowLevelUpModal}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4">
                  <div className="flex gap-2 justify-center items-center">
                    Continue{" "}
                    <Icon icon="TriangleRight" />
                  </div>
                </Button>
              )}
              <div className="flex flex-col xsm:flex-row gap-2 items-center justify-between">
                <div className="flex items-center">
                  <Icon icon="Star" />
                  <span className="text-white text-xs">Trustpilot</span>
                  <div className="ml-2 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
                      <Icon icon="Square" />
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
                      <Icon icon="Square" />
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
                      <Icon icon="Square" />
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
                      <Icon icon="Square" />
                    </div>
                  </div>
                  <div className="ml-1 flex gap-1">
                    <div className="bg-[#005128] flex justify-center items-center p-1">
                      <Icon icon="Square" />
                    </div>
                  </div>
                </div>
                <span className="text-primary-grey text-xs">
                  Rated 4.7 out of 5 Stars on{" "}
                  <span className="text-white">Trustpilot</span>
                </span>
              </div>
            </div>
            <div className="bg-primary-semiDark rounded-md flex flex-col gap-16 w-full lg:w-1/3 p-7">
              <div className="flex justify-between">
                <div className="flex w-[45%]">
                  <div className="flex flex-col justify-center items-center gap-3 w-full">
                    <div className="border-[2px] border-[#828385] rounded-full w-8 h-8 text-white text-sm flex justify-center items-center">{status.currentSteamLevel}</div>
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
                      strokeWidth="0"
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
                    <div
                      className="text-white text-sm relative w-8 h-8 bg-no-repeat flex justify-center items-center"
                      style={{
                        backgroundImage: status.levelBadge ? `url(${status.levelBadge})` : 'none',
                        backgroundPosition: `center ${status.levelBadgeOffset}px`,
                        border: status.levelBadgeBorder,
                        borderRadius: status.levelBadgeBorder ? '50%' : 'none'
                      }}
                    >
                      {status.dreamSteamLevel}
                    </div>
                    <span className="text-primary-grey text-xs">
                      Dream Level
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Sets</span>
                  <span className="text-white text-xs font-bold">{status.sets}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">XP</span>
                  <span className="text-white text-xs font-bold">{status.xp}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">
                    Game Coupons
                  </span>
                  <span className="text-white text-xs font-bold">{status.gameCoupons}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Emotes</span>
                  <span className="text-white text-xs font-bold">{status.emotes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Backgrounds</span>
                  <span className="text-white text-xs font-bold">{status.backgrounds}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Showcases</span>
                  <span className="text-white text-xs font-bold">
                    {status.showcases}
                    <span className="text-primary-grey text-xs text-bold">
                      {" "} / {" "} 20
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">Friend Cap</span>
                  <span className="text-white text-xs font-bold">
                    {250 + status.friendCap}
                    <span className="text-primary-grey text-xs text-bold">
                      {" "} / {" "} 2,000
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">
                    Booster Pack Rate
                  </span>
                  <span className="text-white text-xs font-bold">+{status.boosterPackRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary-grey text-xs">World Rank</span>
                  <span className="text-white text-xs font-bold">#{status.worldRank}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 flex justify-center gap-[14px] flex-col items-center">
          <Icon icon="Help" />
          <span className="font-bold text-[26px] text-white">HOW IT WORKS</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          {/* flex-none overflow-x-auto scroll-container */}
          <div className="bg-[#161620] opacity-90 flex flex-col lg:flex-row gap-3 p-2 xsm:p-5 sm:p-7 ">
            <div className="rounded-[10px] bg-[#252633] opacity-90 w-full px-5 py-6 flex flex-col sm:flex-row lg:flex-col items-center gap-[14px]">
              <div className="flex flex-col justify-center gap-5">
                <div className="font-bold text-sm text-white">
                  Log In with Steam &amp; Select Your Dream Level
                </div>
                <div className="text-primary-grey text-[13px]">
                  Log into your Steam account via the button on the top right of
                  the page and decide on the level you'd like to achieve. Use the
                  level calculator to set your target level, and immediately see
                  what it will take to reach it.
                </div>
              </div>
              <div className="">
                <Icon icon="Img1" />
              </div>
            </div>
            <div className="rounded-[10px] bg-[#252633] opacity-90 w-full px-5 py-6 flex flex-col sm:flex-row lg:flex-col items-center gap-[14px]">
              <div className="flex flex-col justify-center gap-5">
                <div className="font-bold text-sm text-white">
                  How the process works
                </div>
                <div className="text-primary-grey text-[13px]">
                  As you select your level, check out the list of exclusive benefits and rewards that come with leveling up. This includes increased friend list capacity, profile customization options, and more community perks on Steam. See exactly how each level-up enhances your profile!
                </div>
              </div>
              <div className="">
                <Icon icon="Img2" />
              </div>
            </div>
            <div className="rounded-[10px] bg-[#252633] opacity-90 w-full px-5 py-6 flex flex-col sm:flex-row lg:flex-col items-center gap-[14px]">
              <div className="flex flex-col justify-center gap-5">
                <div className="font-bold text-sm text-white">
                  Choose Your Payment Method
                </div>
                <div className="text-primary-grey text-[13px]">
                  Once you're satisfied with your target level, move on to payment. We support a range of options to make checkout smooth and convenient. Each method will display the current price, allowing you to choose what works best for you.
                </div>
              </div>
              <div className="">
                <Icon icon="Img3" />
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
        <div className="flex flex-col gap-[14px] items-center pt-14 justify-center">
          <Icon icon="EarPhone" />
          <span className="font-bold text-[26px] text-white">NEED HELP?</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          <div className="bg-[#161620] opacity-90 flex gap-4 p-3 xsm:p-5 sm:p-7 flex-col justify-center">
            <span className="font-bold text-base text-white">Support</span>
            <span className="text-primary-grey text-sm">
              Need help? Click the button below to join our Discord server,
              where you can open a ticket in the{" "}
              <span className="text-white">#open-ticket channel.</span> Our
              support team is ready to assist you with any questions or issues
              you may have!
            </span>
            <Button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-28 mt-2">
              <div className="flex items-center gap-1">
                <Icon icon="Discord" />
                <span className="normal-case text-white">Contact</span>
              </div>
            </Button>
          </div>
        </div>
        {(state.isLoading || showLevelUpModal) && (
          <LevelUpModal amount={status.estimatedCost} discountedAmount={status.discountedCost} dreamLevel={status.dreamSteamLevel} isOpen={showLevelUpModal} showCsGoModal={() => setShowCsGoModal(true)} onClose={() => setShowLevelUpModal(false)} />
        )}
        {showCsGoModal && <CsGoModal isOpen={showCsGoModal} onClose={() => setShowCsGoModal(false)} />}
      </div>
    </Layout>
  );
};

export default Home;
