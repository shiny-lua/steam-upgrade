import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { useGlobalContext } from "../../../context";
import { restApi } from "../../../context/restApi";
import { useClickOutside } from "../../../hooks/use-modal";
import { showToast, validateAddress } from "../../../context/helper";
import { Select } from "../../../components/select";

const networks = ["Bitcoin", "Ethereum", "Binance Smart Chain", "Polygon", "Solana", "TRON", "Litecoin"]

const ClaimModal = ({ isOpen, onClose, profit }: { isOpen: boolean, onClose: () => void, profit: number }) => {
    const [state, { dispatch }] = useGlobalContext();
    const modalRef = useClickOutside({ isOpen, onClose });
    const [status, setStatus] = React.useState({
        amount: 0,
        address: "",
        isSuccess: false,
        isLoading: false,
        network: "Bitcoin",
        isValidAdress: true,
        amountError: ""
    });

    const onClaim = async () => {

        if (status.isLoading) return

        if (status.amount < 10) {
            setStatus({ ...status, amountError: "Should be greater than $10" })
            return
        }

        if (status.amount > profit) {
            setStatus({ ...status, amountError: "You don't have enough values" })
            return
        }

        const isValidAddress = validateAddress(status.address, status.network)

        if (!isValidAddress) {
            return setStatus({ ...status, isValidAdress: isValidAddress })
        }
        setStatus({ ...status, isLoading: true })
        const res = await restApi.postRequest("create-reward", { amount: status.amount, address: status.address, network: status.network })

        if (res.status === 200) {
            setStatus({ ...status, isSuccess: true })
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
                    {!status.isSuccess ? (
                        <div>
                            <div className="flex flex-col md:flex-row md:gap-4">
                                <div className="w-full space-y-0.5 mb-4">
                                    <span className="text-primary-grey text-[0.75rem] font-[700]">Amount</span>
                                    <div className="relative flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                                        <span className="text-primary-grey absolute left-4">$</span>
                                        <input
                                            type="text"
                                            className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-6.5 py-1.5 items-center"
                                            placeholder="Should be greater than $10"
                                            value={status.amount}
                                            onChange={e => setStatus({ ...status, amount: Number(e.target.value) })}
                                        />
                                        <span onClick={() => setStatus({...status, amount: profit})} className="cursor-pointer bg-primary-gradient rounded-md p-1 text-primary-white absolute right-1.5 text-xs">max</span>
                                    </div>
                                    <span className="text-red-400 text-[0.75rem] font-[700]">{status.amountError}</span>
                                </div>
                                <div className="w-full space-y-0.5 mb-4">
                                    <span className="text-primary-grey text-[0.75rem] font-[700]">Choose Network</span>
                                    <Select data={networks} value={status.network} onChange={network => setStatus({ ...status, network: network })} />
                                </div>

                            </div>
                            <div className="space-y-0.5">
                                <span className="text-primary-grey text-[0.75rem] font-[700]">Your Wallet Address</span>
                                <div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                                    <input
                                        type="text"
                                        className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center"
                                        placeholder="Enter your wallet address"
                                        value={status.address}
                                        onChange={e => setStatus({ ...status, address: e.target.value })}
                                    />
                                </div>
                                {!status.isValidAdress &&
                                    <span className="text-red-400 text-[0.75rem] font-[700]">Invalid {status.network} address</span>
                                }
                            </div>
                            <div className="w-full mt-6">
                                <Button onClick={onClaim} className="flex justify-center items-center gap-2 font-sans w-full font-bold text-center uppercase py-2 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-primary-gradient px-4" placeholder=""  >
                                    {status.isLoading && (
                                        <div className="animate-spin rounded-full border-2 border-solid border-white border-t-transparent w-4 h-4" />
                                    )}
                                    <span className="text-white normal-case text-sm">Claim</span>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col my-10 justify-center items-center gap-8 text-primary-grey text-md font-[700]">
                            <img src="/image/icons/success.png" alt="claim-modal" className="w-20" />
                            <div className="text-center">
                                Customer Service will process your application within 1 working day. Please check your Email inbox regularly for notifications
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </Modal>
    );
};

export default ClaimModal;
