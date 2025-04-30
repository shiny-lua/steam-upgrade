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

interface TransitionStep {
  speed: string;
  delay: number;
}

// Helper function for generating smooth transitions
const generateSmoothTransitionSequence = (
  numSteps: number,
  startSpeed: number,
  maxSpeed: number,
  startDelay: number = 0,
  delayIncrement: number = 100
): TransitionStep[] => {
  const sequence: TransitionStep[] = [];
  for (let i = 0; i < numSteps; i++) {
    const progress = i / (numSteps - 1);
    const easeInExpo = Math.pow(2, 8 * (progress - 1));
    const speed = startSpeed + (maxSpeed - startSpeed) * easeInExpo;
    const delay = startDelay + (i * delayIncrement);
    
    sequence.push({
      speed: `${speed.toFixed(2)}s`,
      delay: Math.round(delay)
    });
  }
  return sequence;
};

const FreeModal = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [caseExpireTime, setCaseExpireTime] = React.useState(0);
  const [reward, setReward] = React.useState("");
  const [animationSpeed, setAnimationSpeed] = React.useState('10s');
  const [isSpinning, setIsSpinning] = React.useState(false);
  const [finalPosition, setFinalPosition] = React.useState(0);

  const rewardItems = [
    {
      title: "Sealed Graffiti",
      desc: "Bling",
      image: "sealed-graffiti.png",
      width: 100,
      height: 100,
      left: "20",
      top: "48"
    },
    {
      title: "Hand Wraps",
      desc: "Overprint",
      image: "hand-wraps.png",
      width: 100,
      height: 100,
      left: "32",
      top: "68"
    },
    {
      title: "Sealed Graffiti",
      desc: "Mr. Teeth",
      image: "teeth.png",
      width: 100,
      height: 100,
      left: "20",
      top: "50"
    },
    {
      title: "Moto Gloves",
      desc: "Transport",
      image: "moto-gloves.png",
      width: 75,
      height: 75,
      left: "32",
      top: "68"
    },
    {
      title: "Nothing",
      desc: "Better luck next time",
      width: 75,
      height: 75,
      left: "0",
      top: "5"
    }
  ];

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
    if (isSpinning) return;
    setIsSpinning(true);
    
    // Initial speed
    setAnimationSpeed('5s');

    // Generate acceleration sequence
    const speedUpSequence = generateSmoothTransitionSequence(
      15,           // More steps for smoother acceleration
      5,            // Start slower (5s)
      0.2,          // End at very fast speed (0.2s)
      50,           // Start delay
      80            // Smaller delay increments for smoother transitions
    );

    // Execute speed up sequence
    speedUpSequence.forEach(({ speed, delay }) => {
      setTimeout(() => setAnimationSpeed(speed), delay);
    });

    // Maintain max speed then start slowing down
    setTimeout(() => {
      // Generate deceleration sequence
      const slowDownSequence = generateSmoothTransitionSequence(
        12,           // Fewer steps for dramatic slowdown
        0.2,          // Start at max speed
        3.5,          // End slower for dramatic effect
        0,            // No initial delay
        120           // Larger delay increments for dramatic slowdown
      ).reverse();    // Reverse for deceleration

      // Execute slow down sequence
      slowDownSequence.forEach(({ speed, delay }) => {
        setTimeout(() => setAnimationSpeed(speed), delay);
      });

      // Final stop with smooth transition
      setTimeout(() => {
        setAnimationSpeed('0s');
        setIsSpinning(false);
        setFinalPosition(-10);
        setReward("Moto Gloves");
      }, 2000);
    }, 2200);
  }

  return (
    <Modal>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation-play-state: running;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .animate-scroll.paused {
            animation-play-state: paused;
            transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          }
        `}
      </style>
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
                <div className="relative overflow-hidden h-full w-full">
                  <div
                    className={`flex h-full w-[200%] gap-2 animate-scroll ${!isSpinning && animationSpeed === '0s' ? 'paused' : ''}`}
                    style={{ 
                      animationDuration: animationSpeed,
                      animationIterationCount: 'infinite',
                      animationTimingFunction: 'linear',
                      transform: !isSpinning ? `translateX(${finalPosition}%)` : undefined,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {/* First set of items */}
                    {rewardItems.map((item, index) => (
                      <div key={`item-${index}`} className="relative w-1/5 flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                        <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                          <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                          {item.image && (
                            <img
                              className="absolute"
                              style={{ left: `${item.left}px`, top: `${item.top}px`, right: "0px" }}
                              width={item.width}
                              height={item.height}
                              src={`image/${item.image}`}
                              alt={item.title}
                            />
                          )}
                          <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                            <div className="text-center text-sm">{item.title}</div>
                            <div className="text-center text-xs">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicate set for infinite scroll */}
                    {rewardItems.map((item, index) => (
                      <div key={`item-duplicate-${index}`} className="relative w-1/5 flex flex-col gap-2 items-center p-[1px] rounded-xl transition-transform duration-300" style={{ background: `linear-gradient(to top left, #0C0D15, #0C0D15, #FF49ED)` }}>
                        <div className="w-full h-full bg-primary-semiDark rounded-xl p-2 transition-shadow duration-300 hover:shadow-lg">
                          <img className="absolute left-0 right-0 top-5" src="image/effect.png" alt="" />
                          {item.image && (
                            <img
                              className="absolute"
                              style={{ left: `${item.left}px`, top: `${item.top}px`, right: "0px" }}
                              width={item.width}
                              height={item.height}
                              src={`image/${item.image}`}
                              alt={item.title}
                            />
                          )}
                          <div className="absolute bottom-6 left-0 right-0 text-primary-white">
                            <div className="text-center text-sm">{item.title}</div>
                            <div className="text-center text-xs">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
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
    </Modal>
  );
};

export default FreeModal;