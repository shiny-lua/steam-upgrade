import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { useGlobalContext } from "../../../context";
import { restApi } from "../../../context/restApi";
import { useClickOutside } from "../../../hooks/use-modal";

const SetTradeUrlModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const [state, { dispatch }] = useGlobalContext();
    const modalRef = useClickOutside({ isOpen, onClose });
    const [status, setStatus] = React.useState({
        tradeLink: ""
    });

    const onSave = async () => {
        const res = await restApi.postRequest("update-user", { email: state.userData.email, tradeLink: status.tradeLink })

        if (res.status === 200) {
            dispatch({ type: "userData", payload: res.data })
            onClose();
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
                    className="relative m-4 shadow-2xl text-blue-gray-500 antialiased w-[96%] max-w-[590px] font-sans text-base font-light leading-relaxed bg-[#252633] rounded-xl flex flex-col px-3 md:px-6 p-6 border-0 overflow-auto my-16"
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4">
                        <Icon icon="Cancel" />
                    </button>
                    <div className="space-y-1.5">
                        <span className="text-primary-grey text-[0.75rem] font-[700]">Your Trade URL</span>
                        <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                            <input
                                type="text"
                                className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center"
                                placeholder="Paste your Trade URL"
                                value={status.tradeLink}
                                onChange={e => setStatus({ ...status, tradeLink: e.target.value })}
                            />
                        </div>
                        <Link to={`https://steamcommunity.com/profiles/${state.userData.id}/tradeoffers/privacy#trade_offer_access_url`} className="flex gap-1 pt-1 items-center" target="_blank" rel="noopener noreferrer">
                            <span className="text-primary-grey text-[0.7rem] leading-[12px] font-[700] underline">Find Trade URL</span>
                            <Icon icon="Link" className="w-3" />
                        </Link>
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={onSave} className="font-sans font-bold text-center uppercase py-2 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-primary-gradient px-4 inline-block" placeholder=""  >
                            <span className="text-white normal-case text-sm">Save</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SetTradeUrlModal;
