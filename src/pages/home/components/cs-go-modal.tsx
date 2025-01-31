import React from "react";
import { Button } from "@material-tailwind/react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { wallets } from "../../../const/data.d";
import { useClickOutside } from "../../../hooks/use-modal";
import { restApi } from "../../../context/restApi";
import { useGlobalContext } from "../../../context";

interface CsGoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CsGoModal: React.FC<CsGoModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useClickOutside({ isOpen, onClose });

    const [state] = useGlobalContext()
    const [status, setStatus] = React.useState({
        data: [] as any
    })

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await restApi.postRequest('get-csgo-inventory', {
                steamId: state.userData.id,
                appId: 730,
            })
            console.log(res)
            if (res.status === 200) {
                setStatus({ ...status, data: res.data })
            }
        }
        fetchData()
    }, [])

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
                    className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-full md:w-3/4 lg:w-3/5 2xl:w-2/5 min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%] max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%] bg-[#252633] rounded-xl flex flex-col gap-6 p-6 border-0 overflow-auto my-16"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center">
                        <button onClick={onClose} className="absolute top-4 right-4">
                            <Icon icon="Cancel" />
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 h-[80vh] overflow-y-auto">
                        {status.data.map((item: any, k: number) => (
                            <div 
                                key={k}
                                className="bg-[#3A3B54]/50 hover:bg-[#3A3B54] rounded-lg p-3 transition-all cursor-pointer"
                            >
                                <div className="aspect-square relative">
                                    <img 
                                        src={`https://community.cloudflare.steamstatic.com/economy/image/${item.icon_url}`}
                                        alt={item.name || 'CS:GO Item'} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div className="mt-2 text-sm">
                                    <p className="text-primary-white truncate">{item.name}</p>
                                    <p className="text-primary-grey text-xs">{item.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default CsGoModal;
