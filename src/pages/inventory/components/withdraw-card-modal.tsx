import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

import Modal from "../../../components/modal";
import Icon from "../../../components/icon";
import { showToast } from "../../../context/helper";
import { useClickOutside } from "../../../hooks/use-modal";

interface CardThumbnail {
    name: string;
    count: number;
    level: number;
    imageUrl?: string;
    largeImageUrl?: string;
}

interface NormalCard {
    id: string;
    name: string;
    appid: number;
    appName: string;
    type: string;
    tradable: boolean;
    market_hash_name: string;
    market_name: string;
    classid: string;
    imageUrl?: string;
    largeImageUrl?: string;
    steamImageUrl?: string;
    steamLargeImageUrl?: string;
}

interface FoilCard {
    id: string;
    name: string;
    appid: number;
    appName: string;
    type: string;
    tradable: boolean;
    market_hash_name: string;
    market_name: string;
    classid: string;
    imageUrl?: string;
    largeImageUrl?: string;
    steamImageUrl?: string;
    steamLargeImageUrl?: string;
}

interface InventoryItem {
    gameName: string;
    appid: number;
    itemType: string;
    cardThumbnails: CardThumbnail[];
    displayCardCount: number;
    totalCards: number;
    xpGain: number;
    normalCards: NormalCard[];
    foilCards: FoilCard[];
    normalPrice: number;
    foilPrice: number;
    normalAvg: number;
    foilAvg: number;
}

interface WithdrawCardModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedGameKeys: Set<string>;
    inventoryData: { inventory: InventoryItem[] } | null;
}

const WithdrawCardModal = ({ isOpen, onClose, selectedGameKeys, inventoryData }: WithdrawCardModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [tradeLink, setTradeLink] = useState("");
    const modalRef = useClickOutside({ isOpen, onClose });

    // Create unique identifier for each inventory item
    const getItemKey = (item: InventoryItem, index: number) => `${item.appid}-${item.itemType}-${index}`;

    // Get selected inventory items
    const selectedItems = inventoryData?.inventory.filter((item, index) => 
        selectedGameKeys.has(getItemKey(item, index))
    ) || [];

    // Calculate totals
    const totalSelectedSets = selectedItems.length;
    const totalSelectedCards = selectedItems.reduce((sum, item) => sum + item.totalCards, 0);
    const totalXPGain = selectedItems.reduce((sum, item) => sum + item.xpGain, 0);

    const handleWithdraw = async () => {
        if (!tradeLink.trim()) {
            showToast("Please enter your trade link", "warning");
            return;
        }

        // Validate trade link format
        const tradeLinkRegex = /^https:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\d+&token=[a-zA-Z0-9]+$/;
        if (!tradeLinkRegex.test(tradeLink.trim())) {
            showToast("Please enter a valid Steam trade link", "warning");
            return;
        }

        if (selectedItems.length === 0) {
            showToast("Please select at least one card set to withdraw", "warning");
            return;
        }

        setIsLoading(true);
        try {
            // Here you would implement the actual withdrawal logic
            // For now, we'll just show a success message
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
            showToast("Trade offer sent successfully! Check your Steam inventory.", "success");
            onClose();
        } catch (error) {
            showToast("Failed to send trade offer. Please try again.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

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
                    className="relative m-4 shadow-2xl text-blue-gray-500 font-sans text-base font-light leading-relaxed w-full md:w-4/5 lg:w-3/4 2xl:w-2/3 min-w-[90%] md:min-w-[80%] lg:min-w-[70%] 2xl:min-w-[60%] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[60%] bg-primary-lightDark rounded-xl flex flex-col gap-6 p-6 border-0 overflow-hidden my-16 max-h-[90vh]"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-primary pb-4">
                        <div className="flex items-center gap-3">
                            <Icon icon="Cards" className="text-primary-grey" />
                            <h3 className="text-white text-xl font-bold">Cards</h3>
                        </div>
                        <button 
                            onClick={onClose} 
                            className="text-primary-grey hover:text-white transition-colors"
                        >
                            <Icon icon="Close" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto">
                        {selectedItems.length === 0 ? (
                            <div className="text-center py-10">
                                <Icon icon="Cards" className="mx-auto mb-4 text-6xl text-primary-grey" />
                                <h3 className="text-white text-xl font-bold mb-2">No cards selected</h3>
                                <p className="text-primary-grey">Please select some cards from your inventory to withdraw</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                
                                {/* Summary Stats */}
                                <div className="bg-primary-semiDark p-4 rounded-lg">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-primary-grey text-sm">Selected Sets</div>
                                            <div className="text-white font-bold text-lg">{totalSelectedSets}</div>
                                        </div>
                                        <div>
                                            <div className="text-primary-grey text-sm">Total Cards</div>
                                            <div className="text-white font-bold text-lg">{totalSelectedCards}</div>
                                        </div>
                                        <div>
                                            <div className="text-primary-grey text-sm">Total XP</div>
                                            <div className="text-white font-bold text-lg">+{totalXPGain} XP</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Selected Cards Display */}
                                <div className="space-y-4">
                                    {selectedItems.map((item, index) => (
                                        <div key={item.appid} className="bg-primary-semiDark rounded-lg p-4">
                                            {/* Game Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="text-white text-lg font-bold">{item.gameName}</h4>
                                                    <p className="text-primary-grey text-sm">{item.itemType}</p>
                                                </div>
                                                <div className="bg-primary-dark text-white px-3 py-1 rounded text-sm font-bold">
                                                    +{item.xpGain} XP
                                                </div>
                                            </div>

                                            {/* Cards Display */}
                                            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                                                {item.cardThumbnails.map((thumbnail, thumbIndex) => (
                                                    <div key={thumbIndex} className="w-24 h-32 bg-primary-dark rounded relative flex-shrink-0">
                                                        {thumbnail?.imageUrl ? (
                                                            <img
                                                                src={thumbnail.imageUrl}
                                                                alt={thumbnail.name || 'Card'}
                                                                className="w-full h-full object-cover rounded"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-primary-grey/20 rounded flex items-center justify-center">
                                                                <Icon icon="Cards" className="text-primary-grey text-2xl" />
                                                            </div>
                                                        )}
                                                        {/* Card Count Badge */}
                                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold bg-black/80 px-2 py-1 rounded">
                                                            :: {thumbnail?.count || 0}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Card Stats */}
                                            <div className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Icon icon="Cards" className="text-primary-grey" />
                                                    <span className="text-primary-grey">{item.displayCardCount} Cards</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Icon icon="Cards" className="text-primary-grey" />
                                                    <span className="text-primary-grey">{item.totalCards} Cards</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-primary pt-4 bg-primary-primary -mx-6 -mb-6 px-6 pb-6">
                        <div className="flex gap-3">
                            <Button
                                onClick={handleWithdraw}
                                disabled={isLoading || selectedItems.length === 0}
                                className="flex-1 bg-primary-gradient text-white py-3 rounded font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full border-2 border-white border-t-transparent w-4 h-4 mr-2"></div>
                                        Processing...
                                    </div>
                                ) : (
                                    "Send Trade Offer"
                                )}
                            </Button>
                            <Button
                                onClick={onClose}
                                className="bg-[#3A3B54] text-white py-3 rounded font-bold"
                                placeholder=""
                                onPointerEnterCapture={() => {}}
                                onPointerLeaveCapture={() => {}}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WithdrawCardModal;
