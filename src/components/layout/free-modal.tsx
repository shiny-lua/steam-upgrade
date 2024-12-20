import React from "react";
import Modal from "../modal";
import { Button } from "@material-tailwind/react";
import Icon from "../icon";

const FreeModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
}) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <Modal>
      <div
        className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm"
        style={{ opacity: 1 }}
      >
        <div
          ref={modalRef}
          className="relative m-4 shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] !w-[1052px] !min-w-[1052px] min-h-[80vh] h-[80vh] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16" 
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Icon icon="Free" />
              <span className="text-sm text-primary-white">Free Case</span>
            </div>
            <div onClick={onClose}>
              <Icon icon="Cancel" />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/5 flex flex-col gap-4 ml-4 items-center">
              <Icon icon="Box" />
              <span className="text-white text-[18px]">Daily Case</span>
              <div className="flex gap-2 items-center">
                <Button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient" placeholder="" onPointerEnterCapture="" onPointerLeaveCapture=""                >
                  Open Case
                </Button>
                <div className="flex items-center justify-center bg-[#3A3B54] rounded-md p-3">
                  <Icon icon="Refresh" />
                </div>
              </div>
            </div>
            <div className="w-4/5 flex gap-4 ml-4 items-center relative">
              <div className="flex w-48 h-full bg-[#191924] top-0 left-0 absolute bg-opacity-50 rounded-xl">
                <img className="" src="image/sword-1.png" alt="" />
                <img className="opacity-70 -translate-x-10" src="image/sword-1.png" alt="" />
                <img className="-translate-x-10" src="image/sword-1.png" alt="" />
                <img className="-translate-x-10" src="image/sword-1.png" alt="" />
              </div>
              <div className="w-30 h-full bg-[#191924] top-0 right-0 absolute bg-opacity-100 rounded-xl"></div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-8">
            <Icon icon="Item" />
            <span className="text-sm text-primary-white">
              Items in this Case
            </span>
          </div>
          <div className="flex gap-2 flex-wrap justify-between">
            <div className="relative w-60 flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[#0C0D15] via-[#0C0D15] to-[#E65C5C] rounded-xl">
              <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
                <div className="flex justify-between items-center w-full">
                  <div className="!rounded-full w-3 h-3 bg-[#E65C5C]">
                  </div>
                  <span className="text-[10px] text-primary-grey">0.0001%</span>
                </div>
                <div className="flex gap-4 w-full pl-4 pb-2">
                  <img src="/image/icons/sword-1.png" alt="" />
                  <div className="flex gap-1 flex-col">
                    <span className="text-primary-grey text-xs">Karambit</span>
                    <span className="text-white text-sm">Lore</span>
                    <span className="text-white text-sm">$1357.87</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-60 flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[#0C0D15] via-[#0C0D15] to-[#E65C5C] rounded-xl">
              <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
                <div className="flex justify-between items-center w-full">
                  <div className="!rounded-full w-3 h-3 bg-[#E65C5C]"></div>
                  <span className="text-[10px] text-primary-grey">0.0001%</span>
                </div>
                <div className="flex gap-4 w-full pl-4 pb-2">
                <img src="/image/icons/sword-2.png" alt="" />
                  <div className="flex gap-1 flex-col">
                    <span className="text-primary-grey text-xs">Karambit</span>
                    <span className="text-white text-sm">Lore</span>
                    <span className="text-white text-sm">$1357.87</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-60 flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[#0C0D15] via-[#0C0D15] to-[#FF49ED] rounded-xl">
              <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
                <div className="flex justify-between items-center w-full">
                  <div className="!rounded-full w-3 h-3 bg-[#FF49ED]"></div>
                  <span className="text-[10px] text-primary-grey">0.0001%</span>
                </div>
                <div className="flex gap-4 w-full pl-4 pb-2">
                  <img src="/image/icons/sword-1.png" alt="" />
                  <div className="flex gap-1 flex-col">
                    <span className="text-primary-grey text-xs">Karambit</span>
                    <span className="text-white text-sm">Lore</span>
                    <span className="text-white text-sm">$1357.87</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-60 flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[#0C0D15] via-[#0C0D15] to-[#FF49ED] rounded-xl">
              <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
                <div className="flex justify-between items-center w-full">
                  <div className="!rounded-full w-3 h-3 bg-[#FF49ED]"></div>
                  <span className="text-[10px] text-primary-grey">0.0001%</span>
                </div>
                <div className="flex gap-4 w-full pl-4 pb-2">
                  <img src="/image/icons/sword-1.png" alt="" />
                  <div className="flex gap-1 flex-col">
                    <span className="text-primary-grey text-xs">Karambit</span>
                    <span className="text-white text-sm">Lore</span>
                    <span className="text-white text-sm">$1357.87</span>
                  </div>
                </div>
              </div>
            </div><div className="relative w-60 flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[#0C0D15] via-[#0C0D15] to-[white] rounded-xl">
              <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
                <div className="flex justify-between items-center w-full">
                  <div className="!rounded-full w-3 h-3 bg-[white]"></div>
                  <span className="text-[10px] text-primary-grey">0.0001%</span>
                </div>
                <div className="flex gap-4 w-full pl-4 pb-2">
                  <img src="/image/icons/sword-1.png" alt="" />
                  <div className="flex gap-1 flex-col">
                    <span className="text-primary-grey text-xs">Karambit</span>
                    <span className="text-white text-sm">Lore</span>
                    <span className="text-white text-sm">$1357.87</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FreeModal;
