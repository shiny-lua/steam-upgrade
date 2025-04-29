import React, { useRef, useEffect } from "react";
import Carousel from "react-multi-carousel"
import { Button } from "@material-tailwind/react";

import Modal from "../modal";
import Icon from "../icon";
import { restApi } from "../../context/restApi";
import { currentTime, formatTimeDiff } from "../../context/helper";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 4,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
}

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
    <div
      className="relative flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300"
      style={{
        background: `linear-gradient(to top left, ${item.fromColor}, ${item.viaColor}, ${item.toColor})`,
      }}
    >
      <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
        <div className="flex justify-between items-center w-full">
          <div className="!rounded-full w-3 h-3" style={{ backgroundColor: item.color }}></div>
          <span className="text-[10px] text-primary-grey">{item.chance}</span>
        </div>
        <div className="flex gap-4 w-full pl-4 pb-2">
          <img src={item.image} alt={item.name} className="w-12 h-12" />
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
  const [caseExpireTime, setCaseExpireTime] = React.useState(0);

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
  }, [isOpen]);

  useEffect(() => {
    getCaseExpireTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaseExpireTime(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [caseExpireTime]);

  const getCaseExpireTime = async () => {
    const res = await restApi.postRequest('get-daily-case-expire-time');
    if (res.status === 200) {
      const timeDiff = res.data - currentTime();
      setCaseExpireTime(timeDiff);
    }
  }

  const onCase = async () => {
    const res = await restApi.postRequest('update-daily-case-expire-time');
    if (res.status === 200) {
      getCaseExpireTime();
    }
  }

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
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="w-full lg:w-1/5 flex flex-col lg:flex-col gap-4 lg:ml-4 items-center">
                <div className="flex flex-col gap-2 items-center">
                  <Icon icon="Box" />
                  <span className="hidden md:block text-white text-[18px]">Daily Case</span>
                </div>
                <div className="flex gap-2 items-center w-full justify-center md:justify-start">
                  <Button
                    onClick={onCase}
                    className={`align-middle w-full select-none font-sans font-bold text-center uppercase py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] bg-primary-gradient ${caseExpireTime > 0 ? "opacity-55" : "opacity-100"}`}
                  >
                    Open Case
                  </Button>
                </div>
                {caseExpireTime > 0 && (
                  <div className="text-green-400">
                    {formatTimeDiff(caseExpireTime)} <span className="">Remaining</span>
                  </div>
                  
                )}
              </div>
              <div className="w-full h-[250px] lg:w-4/5 flex gap-4 lg:ml-4 items-center relative">
              <div className="flex h-full w-[666px] md:w-full gap-2 overflow-x-auto md:overflow-x-none ">
                  <div className="relative w-1/5  flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                    <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                      <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                      <img className="absolute left-0 top-8" src="image/sealed-graffiti.png" alt="" />
                      <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                        <div className="text-center text-sm">Sealed Graffiti</div>
                        <div className="text-center text-xs">Bling</div>
                      </div>
                    </div>
                  </div><div className="relative w-1/5  flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                    <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                      <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                      <img className="absolute left-8 top-17" width={100} height={100} src="image/hand-wraps.png" alt="" />
                      <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                        <div className="text-center text-sm">Hand Wraps</div>
                        <div className="text-center text-xs">Overprint</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-1/5  flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                    <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                      <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                      <img className="absolute left-0 top-9" src="image/teeth.png" alt="" />
                      <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                        <div className="text-center text-sm">Sealed Graffiti</div>
                        <div className="text-center text-xs">Mr. Teeth</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-1/5  flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                    <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                      <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                      <img className="absolute left-8 top-17" width={75} height={75} src="image/moto-gloves.png" alt="" />
                      <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                        <div className="text-center text-sm">Moto Gloves</div>
                        <div className="text-center text-xs">Transport</div>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-1/5  flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                    <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                      <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                      <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                        <div className="text-center text-sm">Nothing</div>
                        <div className="text-center text-xs">Better luck next time</div>
                      </div>
                    </div>
                  </div>
                </div>
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
    </Modal >
  );
};

export default FreeModal;
