import React from "react";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";

import Modal from "../modal";
import Icon from "../icon";
import { restApi } from "../../context/restApi";
import { useGlobalContext } from "../../context";
import { wallets } from "../../const/data.d";
import { showToast } from "../../context/helper";
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
    className={`w-full hover:bg-[#515270] rounded-lg p-4 flex flex-row xsm:flex-col px-10 xsm:px-4 gap-4 ${type == item.name ? "bg-primary-gradient" : "bg-[#3A3B54]/50"}`}
  >
    <img src={item.icon} alt={item.name} className="w-9 h-9" />
    <div className="flex flex-col">
      <div className="text-left text-primary-white font-bold text-sm">{item.name}</div>
      <div className="text-left text-primary-grey text-xs">{item.category}</div>
    </div>
  </button>
);

const WalletModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: VoidFunction }) => {
  // const modalRef = useClickOutside({ isOpen, onClose });
  const [state, { dispatch }]: GlobalContextType = useGlobalContext();
  const [status, setStatus] = React.useState({
    amount: 0,
    type: "",
    currency: ""
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [inputError, setInputError] = React.useState({ status: false, message: "" })

  const onHandlePayment = () => {
    if (!status.type) {
      showToast("Please select a payment method", "warning")
      return
    }

    if ((status.type !== "CS2" && status.type !== "TF2" && status.type !== "Rust") && status.amount <= 0) {
      setInputError({ status: true, message: "Please enter an amount you want to pay" })
      return
    }

    switch (status.type) {
      case "CS2":
      case "TF2":
      case "Rust":
        onPaySkinsBack()
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
        onPayBank(status.currency);
        break;
    }
  }

  const onHandleItem = (type: string, currency?: string) => {
    setStatus({ ...status, type, currency: currency ? currency : "" })
    setInputError({ status: false, message: "" })
  };

  const onPayBank = async (currency: string) => {
    if (isLoading) {
      return
    }

    setIsLoading(true)
    const res = await restApi.postRequest("create-payment-intent", { amount: status.amount, payment_method_types: currency })
    if (res.status === 200) {
      window.location.href = res.data;
    }
  }

  const onPaySkinsBack = async () => {
    try {
      if (isLoading) {
        return
      }
  
      setIsLoading(true)
      const steamId = state.userData.id
      const tradeLink = state.userData.tradeLink
      const tradeToken = tradeLink.match(/[?&]token=([a-zA-Z0-9]+)/)?.[1]
  
      if (!tradeToken) {
        showToast("Please set your Trade Link", "warning")
        return
      }
  
      const res = await restApi.postRequest("pay-skinsback", { steamId, tradeToken })
      if (res.status === 200) {
        window.location.href = res.data;
      }
    } catch (error) {
      showToast(error?.data.error || "An error occurred while processing payment", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const onPayCryptomus = async (currency: string) => {

    try {
      if (isLoading) {
        return
      }

      setIsLoading(true)
      const btcLimit = 0.00002
      const ltcLimit = 0.02

      if (status.amount <= 0) {
        setInputError({ status: true, message: "Please enter an amount you want to pay" })
        return
      }

      if (currency == "BTC") {
        const res = await restApi.postRequest(`get-rate`, { currency: "BTC" })
        const rate = res.rate
        if (status.amount * 1 / rate < btcLimit) {
          setInputError({ status: true, message: `The minimum amount for replenishing your account via Cryptomus is now $ ${(btcLimit * rate).toFixed(2)}` })
          return
        }
      } else if (currency == "LTC") {
        const rate = await restApi.postRequest(`get-rate`, { currency: "LTC" })
        console.log(rate, "rate")
        if (status.amount * 1 / rate < ltcLimit) {
          setInputError({ status: true, message: `The minimum amount for replenishing your account via Cryptomus is now $ ${(ltcLimit * rate).toFixed(2)}` })
          return
        }
      }
      const res = await restApi.postRequest("pay-cryptomus", {
        amount: status.amount,
        currency: currency
      })

      if (res.status === 200) {
        dispatch({ type: "paymentStatus", payload: "pending" });
        Cookies.set("paymentStatus", "pending");
        window.location.href = res.data.url;
      }
    } catch (error) {
      showToast(error?.data.error || "An error occurred while processing payment", "error")
    } finally {
      setIsLoading(false)
    }
  }

  const onCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget && !state.lsLoading) {
      onClose();
    }
  }
  return (
    <Modal>
      <div
        className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm fade-in"
        onClick={onCloseModal}
      >
        <div
          className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] min-h-[80vh] h-[80vh] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16"
          style={{ opacity: 1, transform: "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon icon="Wallet" />
              <span className="text-sm text-primary-white">Wallet</span>
            </div>
            <span onClick={onClose}><Icon icon="Cancel" /></span>
          </div>
          <div className="flex flex-col gap-4 h-[1200px] overflow-y-auto">
            <div className="flex flex-col gap-4">
              <span className="text-primary-grey text-xs">Steam</span>
              <div className="flex flex-wrap gap-2">
                {wallets.steam.map((item, key) => (
                  <div key={key} className="w-full xsm:w-[130px]">
                    <Item item={item} type={status.type} onHandleItem={onHandleItem} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary-grey text-xs">Cryptocurrency</span>
              <div className="flex flex-wrap gap-2">
                {wallets.cryptocurrency.map((item, key) => (
                  <div key={key} className="w-full xsm:w-[130px]">
                    <Item item={item} type={status.type} onHandleItem={onHandleItem} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary-grey text-xs">Bank</span>
              <div className="flex flex-wrap gap-2">
                {wallets.bank.map((item, key) => (
                  <div key={key} className="w-full xsm:w-[130px]">
                    <Item item={item} type={status.type} onHandleItem={onHandleItem} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {(status.type !== "CS2" && status.type !== "TF2" && status.type !== "Rust") && <div className="relative w-full text-sm bg-[#3A3B54] p-3 outline-none rounded-lg text-primary-white">
              {status.amount > 0 && <span className="text-primary-grey absolute left-3 top-1/2 -translate-y-1/2">$</span>}
              <input
                type="number"
                placeholder="Enter an usd amount you want to pay"
                className={`w-full pl-3 outline-none bg-transparent ${status.amount ? "pl-2.5" : "pl-0"}`}
                onChange={(e) => setStatus({ ...status, amount: Number(e.target.value) })}
              />
            </div>}
            {(status.type === "CS2" || status.type === "TF2" || status.type === "Rust") && (
              <div className="flex flex-row gap-1 items-center">
                <Icon icon="Info" />
                <div className="flex flex-col gap-2 text-orange-600 text-xs">
                  No need to enter amount for CS2, TF2, and RUST.
                </div>
              </div>
            )}

            {inputError.status && (
              <div className="flex flex-row gap-1 items-center">
                <Icon icon="Info" />
                <div className="flex flex-col gap-2 text-orange-600 text-xs">
                  {inputError.message}
                </div>
              </div>
            )}

            <Button className="bg-primary-gradient text-white text-sm flex flex-row gap-3 items-center justify-center" onClick={onHandlePayment}>
              {isLoading && (<div className="animate-spin rounded-full border-2 border-solid border-white border-t-transparent w-4 h-4" />)}
              {(status.type === "CS2" || status.type === "TF2" || status.type === "Rust") ? "Pay with " + status.type : "Pay $" + status.amount}
            </Button>
          </div>
          {/* <div className="flex flex-col gap-1">
            <span className="text-white text-[15px] font-bold">
              Claim 5% Bonus
            </span>
            <span className="text-[13px] text-primary-grey font-bold">
              Claim a Top Up Bonus by using a partner's or friend's referral
              code.
            </span>
            <div className="p-1 bg-primary-dark bg-opacity-50 items-center rounded-lg flex justify-between mt-1">
              <span className="text-primary-grey font-bold mx-2 text-xs">
                Type a referral code
              </span>
              <Button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient text-white" placeholder=""                >
                Claim
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;