import React, { useRef, useEffect, useState, CSSProperties } from "react";

import Modal from "../modal";
import Icon from "../icon";
import { restApi } from "../../context/restApi";
import { currentTime, formatTimeDiff, showToast } from "../../context/helper";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const CASE_ITEMS = [

  {
    id: 1,
    color: '#FF9800',
    image: '/image/moto-gloves.png',
    chance: '0.0018%',
    name: 'Moto Gloves',
    type: 'Transport',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF9800'
  },
  
  {
    id: 2,
    color: '#4CAF50',
    image: '/image/hand-wraps.png',
    chance: '0.0259%',
    name: 'Hand Wraps',
    type: 'Overprint',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#4CAF50'
  },
  {
    id: 3,
    color: '#E65C5C',
    image: '/image/teeth.png',
    chance: '0.458%',
    name: 'Sealed Graffiti',
    type: 'Mr. Teeth',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#E65C5C'
  },
  {
    id: 4,
    color: '#FF49ED',
    image: '/image/sealed-graffiti.png',
    chance: '20.074%',
    name: 'Sealed Graffiti',
    type: 'Bling',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF49ED'
  },
  {
    id: 5,
    color: '#2196F3',
    image: '/image/effect.png',
    chance: '79.4378%',
    name: 'Nothing',
    type: 'Better luck next time',
    price: '$1357.87',
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#2196F3'
  }
];

const rewardItems = [
  {
    title: "Sealed Graffiti | Bling (Monster Purple)",
    image: "sealed-graffiti.png",
    width: 100,
    height: 100,
    left: "20",
    top: "48",
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF49ED'
  },
  
  {
    title: "Sealed Graffiti | Mr. Teeth (Princess Pink)",
    image: "teeth.png",
    width: 100,
    height: 100,
    left: "20",
    top: "50",
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#00BCD4'
  },
  {
    title: "★ Hand Wraps | Overprint",
    image: "hand-wraps.png",
    width: 100,
    height: 100,
    left: "32",
    top: "68",
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#4CAF50'
  },
  {
    title: "Nothing",
    desc: "Better luck next time",
    width: 75,
    height: 75,
    left: "0",
    top: "5",
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#2196F3'
  },
  {
    title: "★ Moto Gloves | Transport",
    image: "moto-gloves.png",
    width: 75,
    height: 75,
    left: "32",
    top: "68",
    fromColor: '#0C0D15',
    viaColor: '#0C0D15',
    toColor: '#FF9800'
  },
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
          <img src={item.image} alt={item.name} className="w-14 h-14" />
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
  const navigate = useNavigate();

  const [state]: GlobalContextType = useGlobalContext();
  const modalRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [caseExpireTime, setCaseExpireTime] = useState(0);
  const [reward, setReward] = useState("Nothing");
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isShowingWinner, setIsShowingWinner] = useState(false);
  const [isModal, setIsModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [offerId, setOfferId] = useState("");

  // Animation reference - properly typed
  const animationRef = useRef<number | null>(null);
  // Last animation timestamp
  const lastTimeRef = useRef<number>(0);

  // First, add a state to track the selected item
  const [selectedItem, setSelectedItem] = useState({} as any);

  // Handle outside clicks
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

  // Fetch case expiration time on mount
  useEffect(() => {
    getCaseExpireTime();
  }, []);

  // Timer for case expiration
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
    }, 2000);
    return () => clearInterval(interval);
  }, [caseExpireTime]);

  // Clean up animations when component unmounts
  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Start auto rotation when component mounts
  useEffect(() => {
    if (isOpen) {
      startAutoRotation();
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOpen]);

  // Auto-rotate the gallery smoothly
  const startAutoRotation = () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }

    // Set the exact starting position to ensure continuity
    const totalItems = rewardItems.length;
    // If currentIndex is very large, reset it to a reasonable value to prevent floating point issues
    if (currentIndex > 1000) {
      setCurrentIndex(currentIndex % totalItems);
    }

    lastTimeRef.current = performance.now();
    setAutoRotate(true);

    const animate = (timestamp: number) => {
      // Calculate exact time delta for consistent speed
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isSpinning && !isShowingWinner && autoRotate) {
        // Fine-tune rotation speed - make it slower for smoother appearance
        const rotationSpeed = 0.00015; // Reduced from 0.0003

        setCurrentIndex(prevIndex => {
          // Calculate next position with precise delta timing
          return prevIndex + rotationSpeed * delta;
        });
      }

      if (!isShowingWinner) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Effect to handle pause and resume of animation
  useEffect(() => {
    // If we're showing winner, pause animation
    if (isShowingWinner) {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    }
    // Resume animation when not showing winner and modal is open
    else if (isOpen && !isShowingWinner) {
      if (animationRef.current === null) {
        startAutoRotation();
      }
    }
  }, [isShowingWinner, isOpen]);

  useEffect(() => {
    if (isShowingWinner) {
      setIsModal(true)
    } else {
      setIsModal(false)
    }
  }, [isShowingWinner])

  // Fetch case expiration time from API
  const getCaseExpireTime = async () => {
    if (isLoading) return;
    setIsLoading(true)
    const res = await restApi.postRequest('get-daily-case-expire-time');
    if (res.status === 200) {
      const timeDiff = res.data - currentTime();
      setCaseExpireTime(timeDiff);
    }
    setIsLoading(false)
  };

  // Add this function before the onCase function
  const animateToItem = (targetIndex: number) => {
    // Cancel any existing animation
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Important: Use consistent array length with getGalleryItemStyle
    const totalItems = rewardItems.length;
    const baseIndex = Math.floor(currentIndex % totalItems);

    // Calculate distance always in a positive direction
    let distance = targetIndex - baseIndex;
    if (distance < 0) {
      distance += totalItems;
    }

    // Keep the rest of the function the same
    const extraSteps = 8 + Math.floor(Math.random() * 3);
    const totalSteps = distance + (totalItems * extraSteps);
    const direction = 1; // Always move right/clockwise

    // Increase duration for a longer animation with more time to decelerate
    const duration = 8500;
    const startTime = performance.now();
    const startIndex = currentIndex;

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Modified S-curve easing function for smoother stopping
      // Apply a bias to make the curve more gradual at the end
      const biasedProgress = Math.pow(progress, 0.8);
      let easedProgress = biasedProgress * biasedProgress * (3 - 2 * biasedProgress);

      // Calculate smooth position
      const newPosition = startIndex + (direction * totalSteps * easedProgress);
      setCurrentIndex(newPosition);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Set final position with correct modulo to ensure proper item highlight
        setCurrentIndex(baseIndex + distance);
        setSelectedIndex(targetIndex);
        setReward(rewardItems[targetIndex].title);
        setIsShowingWinner(true);
        setSelectedItem(rewardItems[targetIndex]); // Set the selected item
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const onCloseModal = () => {
    setSelectedIndex(-1);
    setIsShowingWinner(false);
    setIsSpinning(false);
    startAutoRotation();
    setSelectedItem(null);
  }

  // Then the onCase function remains the same
  const onCase = async () => {
    console.log(isLoading, caseExpireTime, isSpinning, isShowingWinner)
    if (isLoading) return;
    if (caseExpireTime > 0) return;
    if (isSpinning) return;
    if (isShowingWinner) return;

    if (!state.userData.tradeLink) {
      showToast("Please set your trade link first", "warning");
      navigate("/profile");
      return;
    }

    setIsSpinning(true);
    setAutoRotate(false);
    setIsModal(false);
    setSelectedItem(null);

    // Send request to backend
    const res = await restApi.postRequest('open-daily-case', { tradeLink: state.userData.tradeLink });

    if (res.status === 200) {
      const targetTitle = res.data.name;
      setOfferId(res.data.offerId);

      const winningIndex = rewardItems.findIndex(item => item.title === targetTitle);
      const targetIndex = winningIndex >= 0 ? winningIndex : 0;

      // Now animate to the winning item
      animateToItem(targetIndex);
      getCaseExpireTime();
    } else {
      setIsSpinning(false);
      setAutoRotate(true);
      startAutoRotation();
    }
  };

  // Generate styles for each gallery item
  const getGalleryItemStyle = (index: number, toColor: string): CSSProperties => {
    const totalItems = rewardItems.length;

    // Calculate position with simple modulo arithmetic for pure circular motion
    // This keeps everything simple and prevents any edge cases
    const wrappedIndex = ((index % totalItems) + totalItems) % totalItems;
    const wrappedCurrentIndex = currentIndex % totalItems;

    // Calculate the shortest path around the circle
    let relativePosition = wrappedIndex - wrappedCurrentIndex;
    if (relativePosition > totalItems / 2) relativePosition -= totalItems;
    if (relativePosition < -totalItems / 2) relativePosition += totalItems;

    // Standard transform calculations
    const perspectiveOffsetX = 180;
    const z = -Math.abs(relativePosition) * 10;
    const x = relativePosition * perspectiveOffsetX;

    let opacity = Math.max(0.5, 1 - Math.abs(relativePosition) * 0.25);
    let scale = Math.max(0.7, 1 - Math.abs(relativePosition) * 0.15);

    if (isShowingWinner) {
      if (wrappedIndex === selectedIndex) {
        opacity = 1;
        scale = 1.2;
      } else {
        opacity = 0.1;
        scale *= 0.9;
      }
    }

    if (wrappedIndex === selectedIndex) {
      return {
        transform: `translateX(0) translateZ(60px) scale(1.08)`,
        zIndex: 100,
        opacity: 1,
        filter: 'brightness(1.1) contrast(1.05) saturate(1.05)',
        boxShadow: `0 4px 8px ${toColor},
                    0 0 5px ${toColor},
                    inset 0 0 1px ${toColor}`,
        border: `1.5px solid ${toColor}`,
        borderRadius: '12px',
        pointerEvents: isShowingWinner ? 'none' : 'auto',
        transition: 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)'
      };
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(0deg) scale(${scale})`,
      opacity,
      zIndex: 50 - Math.abs(relativePosition) * 10,
      pointerEvents: isShowingWinner ? 'none' : 'auto',
      transition: 'opacity 0.15s'
    };
  };

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
          <div className={`flex flex-col gap-4 h-[1200px] overflow-y-auto ${isModal ? "opacity-70" : "opacity-100"}`}>
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="w-full lg:w-1/5 flex flex-col lg:flex-col gap-4 lg:ml-4 items-center">
                <div className="flex flex-col gap-2 items-center">
                  <img src="/image/box.svg" alt="box" className="" />
                </div>
                <div className="flex gap-2 items-center w-full justify-center md:justify-start">
                  <button
                    onClick={onCase}
                    className={`align-middle w-full select-none font-sans font-bold text-center uppercase py-3 rounded-lg text-white shadow-md text-sm shadow-gray-900/10 hover:shadow-lg bg-primary-gradient ${(caseExpireTime > 0 || isSpinning || isShowingWinner || isLoading) ? "opacity-55" : "opacity-100"}`}
                  >
                    Open Case
                  </button>
                </div>
                {caseExpireTime > 0 && (
                  <div className="text-white text-[18px]">
                    {formatTimeDiff(caseExpireTime)}
                  </div>
                )}
              </div>
              <div className="w-full h-[300px] lg:w-4/5 flex flex-col gap-4 lg:ml-4 items-center relative">
                {/* 3D Gallery container */}
                <div className="relative flex gallery-container h-full w-full rounded-xl items-center">
                  {/* Gallery */}
                  <div
                    ref={galleryRef}
                    className="gallery absolute w-full h-full left-0 top-0 flex flex-row justify-center items-center mt-[100px]"
                  >
                    {/* Create duplicate items for seamless rotation */}
                    {[...rewardItems, ...rewardItems, ...rewardItems].map((item, index) => {
                      // Calculate the visual index by shifting to use the middle set as default
                      const adjustedIndex = index - rewardItems.length;
                      const originalIndex = index % rewardItems.length;

                      return (
                        <div
                          key={`gallery-item-${index}`}
                          className={`flex gallery-item p-[1px] ${selectedIndex === originalIndex ? 'selected' : ''}`}
                          style={{
                            ...getGalleryItemStyle(adjustedIndex, item.toColor),
                            backgroundImage: `linear-gradient(to top left, ${item.fromColor}, ${item.viaColor}, ${item.toColor})`
                          }}
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-primary-semiDark rounded-[11px]">
                            <img className="absolute top-0 w-2/3 h-2/3 object-cover opacity-40" src="image/effect.png" alt="" />
                            {item.image && (
                              <img
                                className="absolute z-10"
                                style={{
                                  left: `calc(50% - ${item.width / 2}px)`,
                                  top: `calc(45% - ${item.height / 2}px)`
                                }}
                                width={item.width}
                                height={item.height}
                                src={`image/${item.image}`}
                                alt={item.title}
                              />
                            )}
                            <div className="absolute bottom-6 left-0 right-0 mx-4 text-primary-white">
                              <div className="text-center text-sm">{item.title}</div>
                              <div className="text-center text-xs">{item?.desc}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
          {isModal && selectedItem && (
            <div
              className="absolute top-60 left-0 right-0 z-50"
              style={{ pointerEvents: "none" }}
            >
              <div
                className="relative flex gallery-item p-[1px] items-center rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to top left, ${selectedItem.fromColor}, ${selectedItem.viaColor}, ${selectedItem.toColor})`,
                  boxShadow: `0 4px 24px 0 rgba(0,0,0,0.45)`,
                  minWidth: 420,
                  minHeight: 400,
                  maxHeight: 600,
                  pointerEvents: "auto"
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-between relative overflow-hidden py-5 bg-primary-semiDark rounded-[11px]">
                  <div>
                    <div className="flex flex-col items-center gap-2 w-full rounded-lg p-4">
                      {selectedItem.image ? (
                        <img
                          className="w-35 h-35 object-contain mb-2"
                          src={`image/${selectedItem.image}`}
                          alt={selectedItem.title}
                        />
                      ) : (
                        <img
                          className="w-35 h-35 object-contain mb-2"
                          src={`image/effect.png`}
                          alt={selectedItem.title}
                        />
                      )}
                    </div>

                    <div className="flex flex-col items-center gap-2 w-full rounded-lg p-4">
                      <span className="text-white text-base font-semibold text-center" style={{ textShadow: "0 1px 4px #0008" }}>
                        {selectedItem.title}
                      </span>
                      {selectedItem.desc && (
                        <span className="text-primary-grey text-xs text-center">{selectedItem.desc}</span>
                      )}
                    </div>
                  </div>
                  {selectedItem.title !== "Nothing" && (
                    <div className="flex flex-col items-center gap-2 w-full rounded-lg py-4 px-8">
                      <Button onClick={() => window.open(`https://steamcommunity.com/tradeoffer/${offerId}`, "_blank")} className="w-full bg-primary-gradient text-white py-2 rounded-lg">
                        Click to claim
                      </Button>
                      <div className="flex items-center gap-2 text-xs text-primary-grey mt-2">
                        <Icon icon="Item" />
                        <span>Item will be added to your inventory after you accept the offer</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
                  <div onClick={onCloseModal}>
                    <Icon icon="Cancel" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default FreeModal;