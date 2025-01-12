import React from "react";
import Layout from "../../components/layout";
import WalletModal from "../../components/layout/wallet-modal";
import LevelUpModal from "./components/level-up-modal";
import { useGlobalContext } from "../../context";
import { Button } from "@material-tailwind/react";
import Icon from "../../components/icon";
import { restApi } from "../../context/restApi";

const Home = () => {
  const [state, { dispatch }]: GlobalContextType = useGlobalContext();

  const [showLevelUpModal, setShowLevelUpModal] = React.useState(false);

  React.useEffect(() => {

    const scrollContainer = document.querySelector(".scroll-container");

    if (scrollContainer) {
      const handleWheel = (e) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      };

      scrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        scrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const onSignIn = async () => {
    window.location.href = 'https://steamupgrade.com/auth/steam';
  }
  
  return (
    <Layout>
      <div className="mx-auto w-[868px] mt-5 md:mt-20">
        <div className="relative">
          <Icon icon="Effort" />
          <div className="flex gap-4 relative z-10">
            <div className="bg-primary-lightDark rounded-md flex flex-col gap-6 w-2/3 p-7">
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
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 flex items-center justify-center gap-1" type="button" placeholder=""  >
                    <Icon icon="Refresh" />
                    <span className="text-primary-grey normal-case">
                      Refresh
                    </span>
                  </Button>
                </div>
                <Icon icon="ArrowRight" />
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
                      <Icon icon="Recycle" />
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
                    <Icon icon="Set" />
                    <span className="text-primary-grey text-[13px]">
                      3 Sets
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <Icon icon="Card" />
                    <span className="text-primary-grey text-[13px]">
                      248 Cards
                    </span>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <Icon icon="Game" className="w-4" />
                    <span className="text-primary-grey text-[13px]">
                      13 Games
                    </span>
                  </div>
                </div>
              </div>
              {!state.authToken ? (
                <Button
                  onClick={onSignIn}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4"
                  type="button" placeholder=""                  >
                  <div className="flex gap-1 justify-center items-center">
                    <Icon icon="Steam" />
                    <span className="text-white normal-case text-sm">
                      Sign In with Steam
                    </span>
                    <Icon icon="TriangleRight" />
                  </div>
                </Button>
              ) : (
                <Button
                  onClick={() => setShowLevelUpModal(true)}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4"
                  type="button" placeholder=""                  >
                  <div className="flex gap-2 justify-center items-center">
                    Continue{" "}
                    <Icon icon="TriangleRight" />
                  </div>
                </Button>
              )}
              <div className="flex items-center justify-between">
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
          <Icon icon="Help" />
          <span className="font-bold text-[26px] text-white">HOW IT WORKS</span>
          <span className="text-primary-grey text-sm">
            A quick introduction on the basic features of the website.
          </span>
          <div className="bg-[#161620] opacity-90 flex gap-3 p-7 flex-none overflow-x-auto scroll-container">
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
              <Icon icon="Img1" />
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
              <Icon icon="Img1" />
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
              <Icon icon="Img3" />
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
              type="button" placeholder=""              >
              <div className="flex items-center gap-1">
                <Icon icon="Discord" />
                <span className="normal-case text-white">Contact</span>
              </div>
            </Button>
          </div>
        </div>
        {showLevelUpModal && (
          <LevelUpModal isOpen={showLevelUpModal} onClose={() => setShowLevelUpModal(false)} />
        )}
      </div>

    </Layout>
  );
};

export default Home;
