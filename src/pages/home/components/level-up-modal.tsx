import React from "react";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { config, useGlobalContext } from "../../../context";
import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { useClickOutside } from "../../../hooks/use-modal";
import { restApi } from "../../../context/restApi";

interface LevelUpModalProps {
  amount: number;
  discountedAmount: number;
  isOpen: boolean;
  onClose: () => void;
  showCsGoModal: () => void;
  dreamLevel: number;
}

const LevelUpModal: React.FC<LevelUpModalProps> = ({ amount, discountedAmount, isOpen, dreamLevel, onClose, showCsGoModal }) => {

  const [state, { dispatch }]: GlobalContextType = useGlobalContext()

  const [status, setStatus] = React.useState({
    errorMessage: "",
    showInfo: true,
    offerId: "",
    orderId: "",
    tabIdx: 0,
  })

  const modalRef = useClickOutside({ isOpen, onClose });

  const onPrevTab = (n: number) => {
    if (status.tabIdx > n) {
      setStatus({ ...status, tabIdx: n });
    }
  };

  React.useEffect(() => {
    if (state.isLoading) {
      setStatus({ ...status, tabIdx: 1 });
    }
  }, [state.isLoading]);

  const fetchData = async () => {
    const res = await restApi.postRequest("get-user");
    if (res.status === 200) {
      dispatch({ type: "userData", payload: res.data });
    }
  }

  const onOffer = async () => {
    dispatch({ type: "isLoading", payload: true });
    Cookies.set("isLoading", "true");
    const refCode = Cookies.get("refCode") || null;
    const res = await restApi.postRequest("level-up", {
      dreamLevel: dreamLevel,
      refCode: refCode
    });

    if (res.status === 200) {
      dispatch({ type: "isLoading", payload: false });
      Cookies.remove("isLoading");
      Cookies.remove("refCode");
      Cookies.remove("refCode_expires");
      setStatus({
        ...status,
        offerId: res.data.offerId,
        showInfo: false,
        tabIdx: 3,
      });

      fetchData();
    } else {
      setStatus({
        ...status,
        errorMessage: res.message,
        orderId: res.orderId,
        showInfo: false,
      });
      dispatch({ type: "isLoading", payload: false });
      Cookies.remove("isLoading");
    }
  }

  return (
    <Modal>
      <div
        className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm fade-in modal-backdrop"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          ref={modalRef}
          className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16"
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4">
            <Icon icon="Cancel" />
          </button>
          {/* Navigation Tabs */}
          <div className="rounded-r-full rounded-l-full bg-primary-dark flex gap-[14px] p-3 overflow-x-scroll">
            <button onClick={onClose} className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center bg-primary-lightDark  text-primary-white w-5 h-5 rounded-full text-xs`}
              >
                1
              </div>
              <span className="text-primary-grey text-xs">Choose Level</span>
            </button>
            <button onClick={() => onPrevTab(0)} className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${status.tabIdx !== 0 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white"}  w-5 h-5 rounded-full text-xs`}
              >
                2
              </div>
              <span className={`text-xs ${status.tabIdx !== 0 ? "text-primary-grey" : "text-primary-white"}`}>Review Order</span>
            </button>
            <button onClick={() => onPrevTab(1)} className="flex gap-2 items-center  min-w-28">
              <div
                className={`flex items-center justify-center ${status.tabIdx == 1 || status.tabIdx == 2 ? "bg-primary-gradient text-primary-white " : "bg-primary-lightDark text-primary-grey"}  w-5 h-5 rounded-full text-xs`}
              >
                3
              </div>
              <span className={`text-xs ${status.tabIdx == 1 || status.tabIdx == 2 ? "text-primary-white" : "text-primary-grey"}`}>Send Order</span>
            </button>
            <button onClick={() => onPrevTab(2)} className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${status.tabIdx !== 3 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white "}  w-5 h-5 rounded-full text-xs`}
              >
                {" "}
                4
              </div>
              <span className={`text-xs ${status.tabIdx !== 3 ? "text-primary-grey" : "text-primary-white"}`}>
                Enjoy Your Level
              </span>
            </button>
          </div>

          {/* Tab Content */}
          {status.tabIdx == 0 && (
            <div>
              <div className="rounded-md  bg-primary-dark flex p-5 flex-col mb-5">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <div>
                      <div className="inline-flex items-center">
                        <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        </span>
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
              <div className="rounded-md  bg-primary-dark flex p-5 flex-col">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <div>
                      <div className="inline-flex items-center">
                        <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        </span>
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
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={onClose}
                  className="align-middle select-none font-sans font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-[#3A3B54] ">
                  Cancel
                </Button>
                <Button
                  onClick={() => { setStatus({ ...status, tabIdx: 1, showInfo: true, errorMessage: "", orderId: "" }); }}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-5/6 normal-case flex gap-2 items-center justify-center">
                  Continue{" "}
                  <Icon icon="TriangleRight" />
                </Button>
              </div>
            </div>
          )}
          {status.tabIdx == 1 && (
            <div>

              <div className="bg-[#161620] drop-shadow-[0_2px_0_rgba(0,0,0,0.15)] p-6 mb-5 flex flex-col gap-2 rounded-lg">
                <div className="flex items-center gap-2 text-2xl font-bold text-primary-grey">Order to
                  <Link to={`https://steamcommunity.com/profiles/${config.STEAM_BOT_STEAM_ID}`} target="_blank" className="underline text-blue-400">
                    {config.STEAM_BOT_NAME}
                  </Link >
                </div>
                <div className="text-lg text-primary-grey">
                  {status.orderId && (
                    <div>Order ID: <span className="text-blue-600 font-semibold">{status.orderId}</span></div>
                  )}
                  <div>Bot Name: <span className="text-blue-600 font-semibold">{config.STEAM_BOT_NAME}</span></div>
                  <div>Bot Steam ID: <span className="text-blue-600 font-semibold">{config.STEAM_BOT_STEAM_ID}</span></div>
                  <div>Dream Level: <span className="text-blue-600 font-semibold">{dreamLevel}</span></div>
                  <div className="flex gap-1">
                    Price:
                    {discountedAmount === amount && (<span className="text-blue-600 font-semibold">${amount}</span>)}
                    {discountedAmount !== amount && (<span className="font-semibold flex gap-1">
                      <span className="line-through decoration-blue-600 text-blue-600/60"> ${amount}</span>
                      <span className="text-blue-600">${discountedAmount}</span>
                    </span>)}
                  </div>

                  {status.errorMessage && (
                    <div>
                      <div>Status: <span className="text-blue-600 font-semibold">Failed</span></div>
                      <div className="flex flex-col" >
                        Error Reason:
                        <span className="text-red-500 font-semibold ">
                          There was an issue with your trade submission. Please check that your profile and inventory settings are set to public and that your profile contains a valid trade URL. Once you update these settings, you can place a new order without needing to make another payment, as your balance will be applied automatically.
                        </span>
                      </div>
                    </div>
                  )}

                </div>
                {status.showInfo && (
                  <div className="text-md text-orange-700">
                    <div>* Make sure you have crafted all your sets before buying from us (or buying again from us). This ensures that we only send the sets you need.</div>
                    <div>* You can participate in all our promotions to get more bonuses!</div>
                    <div>* We recommend using our plugin to quickly craft received sets.</div>
                    <div>* Make sure you have an active Steam <Link to={`https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A`} target="_blank" className="underline">account</Link> before exchanging.</div>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-6">
                <Button
                  onClick={onOffer}
                  className="align-middle select-none font-sans font-bold text-center bg-primary-gradient w-full normal-case flex gap-1 items-center justify-center">
                  Send Order
                  <Icon icon="TriangleRight" />
                </Button>
              </div>
            </div>
          )}
          {status.tabIdx == 2 && (
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <button onClick={() => setStatus({ ...status, tabIdx: 1 })} className="flex gap-1 items-center">
                    <Icon icon="Back" />
                    <span className="text-primary-grey text-xs">Back</span>
                  </button>
                  <div className="flex gap-1 items-center">
                    <Icon icon="Bit" />
                    <span className="font-bold text-sm text-white mt-[1px]">
                      Bitcoin
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-primary-dark bg-opacity-50 rounded-lg flex flex-col xsm:flex-row gap-6 mt-8">
                  <div className="flex justify-center items-center">
                    <img src="image/bitcoin.png" alt="" width={100} className="w-30 xsm:w-50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-bold text-sm text-white text-center xsm:text-left">
                      Bitcoin (BTC)
                    </span>
                    <span className="text-xs text-primary-grey text-center xsm:text-left">
                      Make sure to verify the address and the amount before you
                      send anything. Funds sent to an incorrect address cannot
                      be retrieved.
                    </span>
                    <div className="mt-2 flex gap-1 items-center justify-center xsm:justify-start">
                      <Icon icon="Bit" />
                      <span className="font-bold text-sm text-white mt-[1px]">
                        0.0493847
                      </span>
                      <div className="bg-[#252633] p-1 rounded-md ml-2">
                        <Icon icon="Copy" />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-primary-grey text-xs mt-8">
                  Your Deposit Address
                </span>
                <div className="p-1 bg-primary-dark bg-opacity-50 items-center rounded-lg flex justify-between mt-1">
                  <span className="text-white text-sm font-bold mx-2 overflow-hidden text-ellipsis">
                    bc1qwpnt9cvl8dsx2hjhz4h3v0v98z9l5vk2srqas2
                  </span>
                  <div className="bg-[#252633] p-2 rounded-md">
                    <Icon icon="Copy" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => setStatus({ ...status, tabIdx: 3 })}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center">
                  Continue{" "}
                  <Icon icon="TriangleRight" />
                </Button>
              </div>
            </div>
          )}
          {status.tabIdx == 3 && (
            <div>
              <div className="bg-[#161620] p-8 flex flex-col justify-center items-center gap-6">
                <Icon icon="Redbeet" />
                <span className="text-white text-lg">Enjoy your Level!</span>
                <span className="text-sm text-primary-grey">
                  Complete the checkout, and your account will start leveling
                  up. Log back into your Steam account to enjoy your new status,
                  benefits, and bragging rights with an enhanced Steam profile!
                </span>
                <Button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] w-full mt-2 bg-opacity-75 text-primary-grey flex gap-2 justify-center items-center">
                  <Icon icon="Tutorial" />
                  Tutorial
                </Button>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => window.open(`https://steamcommunity.com/tradeoffer/${status.offerId}`, "_blank")}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center">
                  <Icon icon="WhiteBag" />{" "}
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
