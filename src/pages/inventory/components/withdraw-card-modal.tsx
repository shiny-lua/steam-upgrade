import React from "react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { useClickOutside } from "../../../hooks/use-modal";

const WithdrawCardModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const modalRef = useClickOutside({ isOpen, onClose });

    return (
        <Modal>
            <div
                className="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm fade-in"
                style={{ opacity: 1 }}
            >
                <div ref={modalRef} className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-[98%] max-w-[556px] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16" >
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Icon icon="SquareGridCircle" />
                            <span className="text-sm text-primary-white">Cards</span>
                        </div>
                        <span onClick={onClose}><Icon icon="Cancel" /></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-bold text-sm">Counter-Strike 2</span>
                                <span className="text-primary-grey text-sm">Badge</span>
                            </div>
                            <div className="text-sm bg-[#3A3B54] p-2 rounded-lg text-primary-grey font-bold justify-center items-center flex">+100 XP</div>
                        </div>
                        <hr className="bg-primary-dark border-primary-dark" />
                        <div className="flex flex-wrap justify-between">
                            <img src="image/cs.png" alt="" />
                            <img src="image/cs.png" alt="" />
                            <img src="image/cs.png" alt="" />
                            <img src="image/cs.png" alt="" />
                            <img src="image/cs.png" alt="" />
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
                </div>
            </div>
        </Modal >
    );
};

export default WithdrawCardModal;
