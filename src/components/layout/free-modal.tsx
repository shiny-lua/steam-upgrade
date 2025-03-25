import React, { useRef, useEffect } from "react";
import Modal from "../modal";
import { Button } from "@material-tailwind/react";
import Icon from "../icon";

const CASE_ITEMS = [
  {
    id: 1,
    color: '#E65C5C',
    image: '/image/icons/sword-1.png',
    chance: '0.0001%',
    name: 'Karambit',
    type: 'Lore',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#E65C5C'
  },
  {
    id: 2,
    color: '#E65C5C',
    image: '/image/icons/sword-2.png',
    chance: '0.0001%',
    name: 'Karambit',
    type: 'Lore',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#E65C5C'
  },
  {
    id: 3,
    color: '#FF49ED',
    image: '/image/icons/sword-1.png',
    chance: '0.0001%',
    name: 'Karambit',
    type: 'Lore',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF49ED'
  },
  {
    id: 4,
    color: '#FF49ED',
    image: '/image/icons/sword-1.png',
    chance: '0.0001%',
    name: 'Karambit',
    type: 'Lore',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF49ED'
  },
  {
    id: 5,
    color: 'white',
    image: '/image/icons/sword-1.png',
    chance: '0.0001%',
    name: 'Karambit',
    type: 'Lore',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: 'white'
  }
];

const CaseItem = ({ item }) => {
  return (
    <div className={`relative flex flex-col gap-2 items-center p-[1px] bg-gradient-to-tl from-[${item.fromColor}] via-[${item.viaColor}] to-[${item.toColor}] rounded-xl`}>
      <div className="w-full h-full bg-primary-semiDark rounded-xl p-2">
        <div className="flex justify-between items-center w-full">
          <div className="!rounded-full w-3 h-3" style={{ backgroundColor: item.color }}>
          </div>
          <span className="text-[10px] text-primary-grey">{item.chance}</span>
        </div>
        <div className="flex gap-4 w-full pl-4 pb-2">
          <img src="/image/icons/sword-1.png" alt="" />
          <div className="flex gap-1 flex-col">
            <span className="text-primary-grey text-xs">{item.name}</span>
            <span className="text-white text-sm">{item.type}</span>
            <span className="text-white text-sm">{item.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FreeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Modal>
      <div className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm fade-in">
        <div
          ref={modalRef}
          className={`relative m-4 shadow-2xl text-blue-gray-500 antialiased font-sans text-base font-light leading-relaxed !max-w-[1052px] min-h-[80vh] h-[80vh] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16 transform transition-transform duration-500 ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8 opacity-0"}`}
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
          <div className="flex flex-col gap-4 h-[1200px] overflow-y-auto">
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="w-full md:w-1/3 lg:w-1/5 flex flex-col md:flex-row lg:flex-col gap-4 md:ml-4 items-center">
                <div className="flex flex-col gap-2 items-center">
                  <Icon icon="Box" />
                  <span className="hidden md:block text-white text-[18px]">Daily Case</span>
                </div>
                <div className="flex gap-2 items-center w-full justify-center md:justify-start">
                  <Button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient" placeholder=""                  >
                    Open Case
                  </Button>
                  <div className="flex items-center justify-center bg-[#3A3B54] rounded-md p-3">
                    <Icon icon="Refresh" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 h-[250px] lg:w-4/5 flex gap-4 md:ml-4 items-center relative">
                <div className="flex h-full bg-[#191924] top-0 left-0 absolute bg-opacity-50 rounded-xl">
                  <img className="w-[25%]" src="image/sword-1.png" alt="" />
                  <img className="w-[25%] opacity-70 -translate-x-10" src="image/sword-1.png" alt="" />
                  <img className="w-[25%] -translate-x-10" src="image/sword-1.png" alt="" />
                  <img className="w-[25%] -translate-x-10" src="image/sword-1.png" alt="" />
                </div>
                <div className="hidden lg:block w-30 h-full bg-[#191924] top-0 right-0 absolute bg-opacity-100 rounded-xl"></div>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-8">
              <Icon icon="Item" />
              <span className="text-sm text-primary-white">Items in this Case</span>
            </div>
            <div className="flex gap-2 flex-wrap justify-between">
              {CASE_ITEMS.map((item) => (
                <div key={item.id} className="w-full sm:w-[49%] lg:w-60">
                  <CaseItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FreeModal;
