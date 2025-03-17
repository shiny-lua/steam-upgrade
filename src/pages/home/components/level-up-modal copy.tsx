import React from "react";
import { Button } from "@material-tailwind/react";


import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { wallets } from "../../../const/data.d";
import { useClickOutside } from "../../../hooks/use-modal";
import { restApi } from "../../../context/restApi";
import { useGlobalContext } from "../../../context";
import { showToast } from "../../../context/helper";
import { fetchRates } from "../../../context/helper";

interface ItemProps {
  type: string;
  item: {
    name: string;
    icon: string;
    category: string;
    currency?: string;
  };
  onHandleItem: (name: string, currency?: string) => void;
}

const Item: React.FC<ItemProps> = ({ type, item, onHandleItem }) => (
  <button
    onClick={() => onHandleItem(item.name, item.currency)}
    className={`w-full hover:bg-[#515270] rounded-lg p-4 flex flex-row xsm:flex-col px-10 xsm:px-4 gap-4 ${type == item.name ? "bg-[#515270]" : "bg-[#3A3B54]/50"}`}
  >
    <img src={item.icon} alt={item.name} className="w-9 h-9" />
    <div className="flex flex-col">
      <div className="text-left text-primary-white font-bold text-sm">{item.name}</div>
      <div className="text-left text-primary-grey text-xs">{item.category}</div>
    </div>
  </button>
);

interface LevelUpModalProps {
  amount: number;
  isOpen: boolean;
  onClose: () => void;
  showCsGoModal: () => void;
}

const LevelUpModal: React.FC<LevelUpModalProps> = ({ amount, isOpen, onClose, showCsGoModal }) => {

  const [state]: GlobalContextType = useGlobalContext()
  const [tabIdx, setTabIdx] = React.useState(0);
  const [status, setStatus] = React.useState({
    type: "",
    currency: ""
  })

  const [useBalance, setUseBalance] = React.useState(false);

  const modalRef = useClickOutside({ isOpen, onClose });

  const onPrevTab = (n: number) => {
    if (tabIdx > n) {
      setTabIdx(n);
    }
  };

  const onHandlePayment = (n: number) => {
    switch (status.type) {
      case "CS2":
        showCsGoModal();
        onClose();
        break;
      case "Bitcoin":
      case "Ethereum":
      case "USDC":
      case "USDT":
      case "Litecoin":
      case "Solana":
        if (!!status.currency) {
          onPayCryptomus(status.currency);
        }
        break;
      default:
        onPayBank(); break;
    }
  }

  const onHandleItem = (type: string, currency?: string) => {
    setStatus({ type, currency: currency ? currency : "" })
  };

  const onPayCryptomus = async (currency: string) => {

    const btcLimit = 0.00002
    const ltcLimit = 0.02

    if (currency == "BTC") {
      const rate = await fetchRates(`BTC`)
      if (amount * 1 / rate < btcLimit) {
        showToast(`The minimum amount for replenishing your account via Cryptomus is now $ ${(btcLimit * rate).toFixed(2)}`, "warning")
        return
      }
    } else if (currency == "LTC") {
      const rate = await fetchRates(`LTC`)
      if (amount * 1 / rate < ltcLimit) {
        showToast(`The minimum amount for replenishing your account via Cryptomus is now $ ${(ltcLimit * rate).toFixed(2)}`, "warning")
        return
      }
    }
    const res = await restApi.postRequest("pay-cryptomus", {
      amount: amount,
      currency: currency
    })

    if (res.status === 200) {
      window.open(res.data.url, '_blank', 'noopener,noreferrer');
      onClose();
    }
  }

  const onPayBank = async () => {
    const res = await restApi.postRequest("create-payment-intent")
    if (res.status === 200) {
      window.open(res.data, '_blank', 'noopener,noreferrer');
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
                className={`flex items-center justify-center ${tabIdx !== 0 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white"}  w-5 h-5 rounded-full text-xs`}
              >
                2
              </div>
              <span className={`text-xs ${tabIdx !== 0 ? "text-primary-grey" : "text-primary-white"}`}>Review Order</span>
            </button>
            <button onClick={() => onPrevTab(1)} className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${tabIdx == 1 || tabIdx == 2 ? "bg-primary-gradient text-primary-white " : "bg-primary-lightDark text-primary-grey"}  w-5 h-5 rounded-full text-xs`}
              >
                3
              </div>
              <span className={`text-xs ${tabIdx == 1 || tabIdx == 2 ? "text-primary-white" : "text-primary-grey"}`}>Choose Payment</span>
            </button>
            <button onClick={() => onPrevTab(2)} className="flex gap-2 items-center  min-w-32">
              <div
                className={`flex items-center justify-center ${tabIdx !== 3 ? "bg-primary-lightDark text-primary-grey" : "bg-primary-gradient text-primary-white "}  w-5 h-5 rounded-full text-xs`}
              >
                {" "}
                4
              </div>
              <span className={`text-xs ${tabIdx !== 3 ? "text-primary-grey" : "text-primary-white"}`}>
                Enjoy Your Level
              </span>
            </button>
          </div>

          {/* Tab Content */}
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
                  className="align-middle select-none font-sans font-bold text-center transition-all text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-[#3A3B54] ">
                  Cancel
                </Button>
                <Button
                  onClick={() => setTabIdx(1)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-5/6 normal-case flex gap-2 items-center justify-center">
                  Continue{" "}
                  <Icon icon="TriangleRight" />
                </Button>
              </div>
            </div>
          )}
          {tabIdx == 1 && (
            <div>
              <div className="bg-[#161620] drop-shadow-[0_2px_0_rgba(0,0,0,0.15)] p-6 mb-5 flex justify-between items-center rounded-lg">
                <div className="flex flex-col gap-2">
                  <span className="text-xl font-bold text-primary-white">
                    $ {state.userData.balance}
                  </span>
                  <span className="text-base text-primary-grey">Balance</span>
                </div>
                <div onClick={() => setUseBalance(!useBalance)} className="flex gap-1 items-center p-3 bg-[#3A3B54] cursor-pointer bg-opacity-50 rounded-md">
                  {useBalance ? <Icon icon="CheckedBox" /> : <div className="w-[15px] h-[15px] rounded-sm border-2 border-primary-grey"></div>}
                  <span className="font-bold text-sm mt-[1px] text-primary-grey">
                    Use Balance
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 h-[40vh] overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <span className="text-primary-grey text-sm">Steam</span>
                  <div className="flex flex-wrap gap-2">
                    {wallets.steam.map((item, key) => (
                      <div key={key} className="w-full xsm:w-[130px]">
                        <Item type={status.type} item={item} onHandleItem={onHandleItem} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-primary-grey text-sm">Cryptocurrency</span>
                  <div className="flex flex-wrap gap-2">
                    {wallets.cryptocurrency.map((item, key) => (
                      <div key={key} className="w-full xsm:w-[130px]">
                        <Item type={status.type} item={item} onHandleItem={onHandleItem} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-primary-grey text-sm">Bank</span>
                  <div className="flex flex-wrap gap-2">
                    {wallets.bank.map((item, key) => (
                      <div key={key} className="w-full xsm:w-[130px]">
                        <Item type={status.type} item={item} onHandleItem={onHandleItem} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={() => onHandlePayment(2)}
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center">
                  Continue{" "}
                  <Icon icon="TriangleRight" />
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
                  className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient w-full normal-case flex gap-2 items-center justify-center">
                  Continue{" "}
                  <Icon icon="TriangleRight" />
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
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] w-full mt-2 bg-opacity-75 text-primary-grey flex gap-2 justify-center items-center">
                  <Icon icon="Tutorial" />
                  Tutorial
                </Button>
              </div>
              <div className="flex justify-between gap-4 mt-6">
                <Button
                  onClick={onClose}
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
