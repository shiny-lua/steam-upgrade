import React from "react";
import { Button } from "@material-tailwind/react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";

const LevelUpModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [tabIdx, setTabIdx] = React.useState(0);

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Modal>
      <div
        className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm fade-in"
        style={{ opacity: 1 }}
      >
        <div ref={modalRef}
          className="relative m-4 shadow-2xl text-blue-gray-500 antialiased w-[96%] max-w-[590px] font-sans text-base font-light leading-relaxed bg-[#252633] rounded-xl flex flex-col gap-6 px-3 md:px-6 p-6 border-0 overflow-auto my-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon className="w-4" icon="LevelUp" />
              <span className="text-sm text-primary-white">Level Up</span>
            </div>
            <div onClick={onClose}>
              <Icon icon="Cancel" />
            </div>
          </div>
          <div className="rounded-r-full rounded-l-full bg-primary-dark flex gap-[14px] p-3 overflow-x-scroll">
            <div className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center bg-primary-lightDark  text-primary-white w-5 h-5 rounded-full text-xs`}
              >
                1
              </div>
              <span className="text-primary-grey text-xs">Choose Level</span>
            </div>
            <div className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${tabIdx !== 0 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white"}  w-5 h-5 rounded-full text-xs`}
              >
                2
              </div>
              <span className="text-primary-white text-xs">Review Order</span>
            </div>
            <div className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${tabIdx == 1 || tabIdx == 2 ? "bg-primary-gradient text-primary-white " : "bg-primary-lightDark text-primary-grey"}  w-5 h-5 rounded-full text-xs`}
              >
                3
              </div>
              <span className="text-primary-grey text-xs">Choose Payment</span>
            </div>
            <div className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${tabIdx !== 3 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white "}  w-5 h-5 rounded-full text-xs`}
              >
                {" "}
                4
              </div>
              <span className="text-primary-grey text-xs">
                Enjoy Your Level
              </span>
            </div>
          </div>
          {tabIdx == 0 && (
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
                  className="align-middle select-none font-sans font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-[#3A3B54] "
                  type="button" placeholder=""                  >
                  Cancel
                </Button>
                <Button
                  onClick={() => setTabIdx(1)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-5/6 normal-case flex gap-2 items-center justify-center"
                  type="button" placeholder=""                  >
                  Continue{" "}
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 1 && (
            <div>
              <div className="bg-[#161620] p-6 flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold text-primary-white">
                    $50.97
                  </span>
                  <span className="text-base text-primary-grey">Balance</span>
                </div>
                <div className="flex gap-1 items-center p-3 bg-[#3A3B54] bg-opacity-50 rounded-md">
                  <Icon icon="Balance" />
                  <span className="font-bold text-sm mt-[1px] text-primary-grey">
                    Use Balance
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">Steam</span>
                <div className="flex gap-2">
                  <Icon icon="CS2" />
                  <Icon icon="TF2" />
                  <Icon icon="Rust" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">Cryptocurrency</span>
                <div className="flex flex-wrap gap-2">
                  <Icon icon="Bitcoin" />
                  <Icon icon="Ethereum" />
                  <Icon icon="USDC" />
                  <Icon icon="USDT" />
                  <Icon icon="Litecoin" />
                  <Icon icon="Solana" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-primary-grey text-xs">Bank</span>
                <div className="flex gap-2">
                  <Icon icon="Bank" />
                  <Icon icon="Visa" />
                  <Icon icon="Mastercard" />
                  <Icon icon="Paypal" />
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => setTabIdx(2)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button"
                  style={{ position: "relative", overflow: "hidden" }} placeholder=""                  >
                  Continue{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 2 && (
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <button onClick={() => setTabIdx(1)} className="flex gap-1 items-center">
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
                  onClick={() => setTabIdx(3)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button"
                  style={{ position: "relative", overflow: "hidden" }} placeholder=""                  >
                  Continue{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 3 && (
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
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] w-full mt-2 bg-opacity-75 text-primary-grey flex gap-2 justify-center items-center"
                  type="button" placeholder=""                  >
                  <Icon icon="Tutorial" />
                  Tutorial
                </Button>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={onClose}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center"
                  type="button" placeholder=""                  >
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
