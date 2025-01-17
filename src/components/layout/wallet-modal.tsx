import React from "react";
import Modal from "../modal";
import { Button } from "@material-tailwind/react";
import Icon from "../icon";

const wallets = {
  steam: [
    {
      name: "CS2",
      icon: "/image/icons/cs2.png",
      category: "Steam",
    },
    {
      name: "TF2",
      icon: "/image/icons/tf2.png",
      category: "Steam",
    },
    {
      name: "Rust",
      icon: "/image/icons/rust.png",
      category: "Steam",
    }
  ],
  cryptocurrency: [
    {
      name: "Bitcoin",
      icon: "/image/icons/bitcoin.png",
      category: "Cryptocurrency",
    },
    {
      name: "Ethereum",
      icon: "/image/icons/ethereum.png",
      category: "Cryptocurrency",
    },
    {
      name: "USDC",
      icon: "/image/icons/usdc.png",
      category: "Cryptocurrency",
    },
    {
      name: "USDT",
      icon: "/image/icons/usdt.png",
      category: "Cryptocurrency",
    },
    {
      name: "Litecoin",
      icon: "/image/icons/litecoin.png",
      category: "Cryptocurrency",
    },
    {
      name: "Solana",
      icon: "/image/icons/solana.png",
      category: "Cryptocurrency",
    }
  ],
  bank: [
    {
      name: "Bank",
      icon: "/image/icons/bank.png",
      category: "Bank",
    },
    {
      name: "Visa",
      icon: "/image/icons/visa.png",
      category: "Bank",
    },
    {
      name: "Mastercard",
      icon: "/image/icons/mastercard.png",
      category: "Bank",
    },
    {
      name: "Paypal",
      icon: "/image/icons/paypal.png",
      category: "Bank",
    }
  ]
}

const Item = ({ item }: { item: { name: string, icon: string, category: string } }) => {
  return (
    <div className="bg-[#3A3B54]/50 hover:bg-[#3A3B54] rounded-lg p-4 flex flex-row xsm:flex-col px-10 xsm:px-4 gap-4">
      <img src={item.icon} alt={item.name} className="w-9 h-9" />
      <div className="flex flex-col">
        <div className="text-primary-white font-bold text-sm">{item.name}</div>
        <div className="text-primary-grey text-xs">{item.category}</div>
      </div>
    </div>
  )
}

const WalletModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: VoidFunction }) => {

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
          className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] min-h-[80vh] h-[80vh] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16"
          style={{ opacity: 1, transform: "none" }}
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
                    <Item item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary-grey text-xs">Cryptocurrency</span>
              <div className="flex flex-wrap gap-2">
                {wallets.cryptocurrency.map((item, key) => (
                  <div key={key} className="w-full xsm:w-[130px]">
                    <Item item={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-primary-grey text-xs">Bank</span>
              <div className="flex flex-wrap gap-2">
                {wallets.bank.map((item, key) => (
                  <div key={key} className="w-full xsm:w-[130px]">
                    <Item item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
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
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WalletModal;