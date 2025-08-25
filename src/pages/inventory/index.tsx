import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import Icon from "../../components/icon";
import Layout from "../../components/layout";
import WithdrawCardModal from "./components/withdraw-card-modal";
import { useGlobalContext } from "../../context";
import { restApi } from "../../context/restApi";
import { showToast } from "../../context/helper";
import Loading from "../../components/loading";

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

interface InventoryData {
    inventory: InventoryItem[];
    totalItems: number;
    totalGames: number;
}

const Inventory = () => {
    const navigate = useNavigate();
    const [state, {dispatch}] = useGlobalContext();
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [inventoryData, setInventoryData] = useState<InventoryData | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGames, setSelectedGames] = useState<Set<string>>(new Set());
    const [selectAll, setSelectAll] = useState(false);
    const [sortBy, setSortBy] = useState<"mostCards" | "leastCards" | "mostXP" | "leastXP" | "nameAZ" | "nameZA">("mostCards");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    // Load inventory on component mount if user is authenticated
    useEffect(() => {
        if (state.authToken && state.userData?.id) {
            loadInventory();
        }
    }, [state.authToken, state.userData?.id]);

    // Update selectAll state when search term or selected games change
    useEffect(() => {
        const currentFilteredItems = inventoryData?.inventory.filter(item =>
            searchInInventory(item, searchTerm)
        ) || [];
        const currentFilteredKeys = new Set(currentFilteredItems.map((item, index) => getItemKey(item, index)));
        setSelectAll(selectedGames.size === currentFilteredKeys.size && currentFilteredKeys.size > 0);
    }, [searchTerm, selectedGames, inventoryData]);

    const loadInventory = async () => {
        if (!state.userData?.id) {
            showToast("Please sign in with Steam to view your inventory", "warning");
            return;
        }

        setIsLoading(true);
        try {
            const response = await restApi.postRequest("get-steam-inventory", {});

            if (response.status === 200) {
                setInventoryData(response.data);
                dispatch({ type: "userData", payload: { ...state.userData, steamInventory: response.data } });
                console.log(response.data);
            }
        } catch (error: any) {
            console.error("Error loading inventory:", error);
            if (error.status === 403) {
                showToast("Inventory is private. Please set your Steam inventory to public.", "error");
            } else if (error.status === 404) {
                showToast("Inventory not found. Please check your Steam profile.", "error");
            } else {
                showToast("Failed to load inventory. Please try again.", "error");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when searching
    };

    // Enhanced search function that searches by game name, card names, and card types
    const searchInInventory = (item: InventoryItem, searchTerm: string): boolean => {
        if (!searchTerm.trim()) return true;

        const searchLower = searchTerm.toLowerCase();

        // Search in game name
        if (item.gameName.toLowerCase().includes(searchLower)) {
            return true;
        }

        // Search in card thumbnails (card names)
        if (item.cardThumbnails.some(thumbnail =>
            thumbnail.name.toLowerCase().includes(searchLower)
        )) {
            return true;
        }

        // Search in normal cards (card names and types)
        if (item.normalCards.some(card =>
            card.name.toLowerCase().includes(searchLower) ||
            card.type.toLowerCase().includes(searchLower)
        )) {
            return true;
        }

        // Search in foil cards (card names and types)
        if (item.foilCards.some(card =>
            card.name.toLowerCase().includes(searchLower) ||
            card.type.toLowerCase().includes(searchLower)
        )) {
            return true;
        }

        // Search in item type
        if (item.itemType.toLowerCase().includes(searchLower)) {
            return true;
        }

        return false;
    };

    // Create unique identifier for each inventory item
    const getItemKey = (item: InventoryItem, index: number) => `${item.appid}-${item.itemType}-${index}`;

    const handleSelectAll = (checked: boolean) => {
        setSelectAll(checked);
        if (checked) {
            // Select all filtered items based on current search
            const currentFilteredItems = inventoryData?.inventory.filter(item =>
                searchInInventory(item, searchTerm)
            ) || [];
            const allFilteredGameKeys = new Set(currentFilteredItems.map((item, index) => getItemKey(item, index)));
            setSelectedGames(allFilteredGameKeys);
        } else {
            setSelectedGames(new Set());
        }
    };

    const handleSelectGame = (item: InventoryItem, index: number, checked: boolean) => {
        const newSelected = new Set(selectedGames);
        const itemKey = getItemKey(item, index);
        if (checked) {
            newSelected.add(itemKey);
        } else {
            newSelected.delete(itemKey);
        }
        setSelectedGames(newSelected);
    };

    // Sort function
    const sortItems = (items: InventoryItem[]) => {
        switch (sortBy) {
            case "mostCards":
                return [...items].sort((a, b) => b.totalCards - a.totalCards);
            case "leastCards":
                return [...items].sort((a, b) => a.totalCards - b.totalCards);
            case "nameAZ":
                return [...items].sort((a, b) => a.gameName.localeCompare(b.gameName));
            case "nameZA":
                return [...items].sort((a, b) => b.gameName.localeCompare(a.gameName));
            default:
                return items;
        }
    };

    // Filter and paginate inventory items
    const filteredItems = sortItems(inventoryData?.inventory.filter(item =>
        searchInInventory(item, searchTerm)
    ) || []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    return (
        <Layout>
            <div className="relative px-3 sm:px-4 md:px-8 lg:px-0 mx-auto max-w-[1000px] mt-5 md:mt-20">
                <Icon icon="Effort" className="hidden lg:block" />

                <div className="mb-5 w-full">
                    <div className="flex flex-col xsm:flex-row gap-3 items-start justify-between mb-4">
                        <div className="space-y-3">
                            <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
                                <Icon icon="Back" />
                                <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">Back</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <Icon icon="Bag" />
                                <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">Inventory</h2>
                                <div className="bg-[#3A3B54] p-1 rounded-md text-xs font-bold flex items-center justify-center text-primary-grey w-1/4">
                                    {inventoryData?.totalItems || 0}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-end gap-2">
                            {!state.authToken ? (
                                <>
                                    <Button
                                        onClick={() => navigate("/inventory/demo")}
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-[#3A3B54] w-[140px] p-2.5 z-10 cursor-pointer"
                                        placeholder=""
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={() => { }}
                                    >
                                        <span className="capitalize text-sm">View Demo</span>
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        onClick={loadInventory}
                                        disabled={isLoading}
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-[#3A3B54] w-[140px] p-2.5 z-10 cursor-pointer"
                                        placeholder=""
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={() => { }}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <div className="animate-spin rounded-full border-2 border-white border-t-transparent w-3 h-3 mr-1"></div>
                                            </div>
                                        ) : (
                                            <div className="w-full flex justify-center gap-2 items-center">
                                                <Icon icon="Refresh" className="text-primary-grey" />
                                                <span className="capitalize text-sm">Refresh</span>
                                            </div>
                                        )}
                                    </Button>
                                    <Button
                                        onClick={() => setShowModal(true)}
                                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 bg-primary-gradient w-[170px] p-2.5 z-10 cursor-pointer"
                                        placeholder=""
                                        onPointerEnterCapture={() => { }}
                                        onPointerLeaveCapture={() => { }}
                                    >
                                        <div className="w-full flex justify-center gap-2 items-center">
                                            <span className="capitalize text-sm">Withdraw Cards</span>
                                            <div className="bg-[#3A3B54] text-primary-white py-1 px-1.5 rounded-md text-xs font-bold flex items-center justify-center">
                                                {selectedGames.size}
                                            </div>
                                        </div>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4 xsm:mt-10 relative z-10">
                        <div className="bg-primary-lightDark rounded-md flex flex-col gap-5 p-5 w-full">
                            {isLoading ? (
                                <div className="space-y-4">
                                    {/* Skeleton loading for game collections */}
                                    {[1, 2, 3].map((index) => (
                                        <div key={index} className="bg-primary-semiDark rounded-lg p-5 border border-[#161620E5] animate-pulse">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-4 h-4 bg-primary-grey/30 rounded"></div>
                                                    <div className="flex flex-col gap-1">
                                                        <div className="w-32 h-4 bg-primary-grey/30 rounded"></div>
                                                        <div className="w-20 h-3 bg-primary-grey/20 rounded"></div>
                                                    </div>
                                                </div>
                                                <div className="w-16 h-8 bg-primary-grey/30 rounded"></div>
                                            </div>

                                            {/* Skeleton card thumbnails */}
                                            <div className="flex gap-1 mt-4 mb-3">
                                                {Array.from({ length: Math.floor(Math.random() * 4) + 3 }, (_, thumbIndex) => (
                                                    <div key={`skeleton-${index}-${thumbIndex}`} className="w-24 h-24 bg-primary-grey/20 rounded animate-pulse"></div>
                                                ))}
                                            </div>

                                            <div className="flex justify-between items-center">
                                                <div className="w-16 h-3 bg-primary-grey/20 rounded"></div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-4 h-4 bg-primary-grey/30 rounded"></div>
                                                    <div className="w-16 h-3 bg-primary-grey/20 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    {isLoading ? (
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center animate-pulse">
                                            <div className="relative">
                                                <div className="w-48 h-8 bg-primary-grey/20 rounded"></div>
                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 bg-primary-grey/30 rounded"></div>
                                                    <div className="w-20 h-3 bg-primary-grey/20 rounded"></div>
                                                </div>
                                                <div className="w-32 h-3 bg-primary-grey/20 rounded"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        !inventoryData ? (
                                            <div className="text-center py-10">
                                                <Icon icon="Bag" className="mx-auto mb-4 text-6xl text-primary-grey" />
                                                <h3 className="text-white text-xl font-bold mb-2">No inventory loaded</h3>
                                                <p className="text-primary-grey mb-4">Click "Refresh" to load your trading cards</p>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                                <div className="relative">
                                                    <Icon icon="Search" />
                                                    <input
                                                        id="searchRank"
                                                        className="bg-transparent inline-block w-full h-full text-primary-grey px-6 py-2 placeholder:text-[14px] placeholder:font-[500] placeholder:leading-[14px] placeholder:text-[#A9ABCD] border-none focus:outline-none focus:ring-0 placeholder:pl-0 pl-7"
                                                        placeholder="Search games, cards, or types..."
                                                        value={searchTerm}
                                                        onChange={handleSearch}
                                                    />
                                                </div>
                                                <div className="flex gap-3 items-center">
                                                    <div>
                                                        <div className="inline-flex items-center">
                                                            <div className="inline-flex items-center">
                                                                <label className="relative flex items-center cursor-pointer p-3 rounded-full">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectAll}
                                                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                                                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                                                                    />
                                                                    <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                                                        <Icon icon="CheckedBox" />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <label className="text-gray-700 font-light select-none cursor-pointer mt-px">
                                                                <span className="-mt-1 -ml-1 text-primary-grey text-sm flex items-center">Select All</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-primary-grey text-[0.85rem] font-[700]">Sort by:</span>
                                                        <div className="relative">
                                                            <select
                                                                value={sortBy}
                                                                onChange={(e) => setSortBy(e.target.value as any)}
                                                                className="appearance-none bg-primary-dark text-primary-grey text-sm border border-primary-grey rounded px-3 py-2 pr-6 focus:outline-none focus:border-primary-gradient cursor-pointer hover:border-primary-grey/70 transition-colors"
                                                            >
                                                                <option value="mostCards">Most Cards</option>
                                                                <option value="leastCards">Least Cards</option>
                                                                <option value="nameAZ">Name A-Z</option>
                                                                <option value="nameZA">Name Z-A</option>
                                                            </select>
                                                            <div className="absolute right-0 top-1/2 pt-1 -translate-y-1/2 pr-3 pointer-events-none">
                                                                <Icon icon="DropDown" className="w-2.5 h-2.5 text-primary-grey" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    )}

                                    {/* Game Collections */}

                                    <>
                                        <hr className="bg-primary-dark border-primary-dark" />

                                        <div className="space-y-4">
                                            {currentItems.map((item) => (
                                                <div key={item.appid} className="bg-primary-semiDark rounded-lg p-5 border border-[#161620E5]">
                                                    <div className="flex justify-between items-start">
                                                        <div className="flex items-start gap-3">
                                                            <div className="inline-flex items-center">
                                                                <label className="relative flex items-center cursor-pointer p-2 rounded-full">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={selectedGames.has(getItemKey(item, currentItems.indexOf(item)))}
                                                                        onChange={(e) => handleSelectGame(item, currentItems.indexOf(item), e.target.checked)}
                                                                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                                                                    />
                                                                    <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                                                                        <Icon icon="CheckedBox" />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <span className="text-white font-bold text-base">{item.gameName}</span>
                                                                <span className="text-primary-grey text-sm">{item.itemType}</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-[#3A3B54] px-3 py-2 rounded text-sm text-white font-bold">
                                                            +{item.xpGain} XP
                                                        </div>
                                                    </div>

                                                    {/* Card Thumbnails */}
                                                    <div className="flex gap-1 mt-4 mb-3">
                                                        {(item.cardThumbnails || []).map((thumbnail, index) => (
                                                            <div key={index} className="relative">
                                                                <div className="w-24 h-24 rounded relative overflow-hidden shadow-lg">
                                                                    {thumbnail?.imageUrl ? (
                                                                        <img
                                                                            src={thumbnail.imageUrl}
                                                                            alt={thumbnail.name || 'Card'}
                                                                            className="w-full h-full object-cover"
                                                                            onError={(e) => {
                                                                                // Fallback to gradient if image fails to load
                                                                                e.currentTarget.style.background = 'linear-gradient(to bottom right, #f97316, #eab308)';
                                                                                e.currentTarget.style.display = 'flex';
                                                                                e.currentTarget.style.alignItems = 'center';
                                                                                e.currentTarget.style.justifyContent = 'center';
                                                                                e.currentTarget.innerHTML = `
                                                                                        <div class="absolute inset-0 bg-black/60"></div>
                                                                                        <div class="absolute top-1 left-1 text-white text-xs font-bold">:: ${thumbnail?.count || 0}</div>
                                                                                        <div class="absolute bottom-1 left-1 text-white text-xs opacity-70 font-medium">CARD</div>
                                                                                    `;
                                                                            }}
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                                                                            <div className="absolute inset-0 bg-black/60"></div>
                                                                            <div className="absolute top-1 left-1 text-white text-xs font-bold">
                                                                                :: {thumbnail?.count || 0}
                                                                            </div>
                                                                            <div className="absolute bottom-1 left-1 text-white text-xs opacity-70 font-medium">
                                                                                CARD
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm font-bold bg-black/80 px-2 py-1 rounded">
                                                                        :: {thumbnail?.count || 0}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <span className="text-primary-grey text-sm">
                                                            {item.displayCardCount} Cards
                                                        </span>
                                                        <div className="flex items-center gap-1">
                                                            <Icon icon="Card" />
                                                            <span className="text-primary-grey text-sm">
                                                                {item.totalCards} Cards
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Pagination Controls */}
                                        {totalPages > 1 && (
                                            <div className={`flex items-center justify-between mt-6 pt-4 ${inventoryData?.inventory.length === 0 ? "border-none" : ""} border-[#161620E5]`}>
                                                <div className="text-sm text-primary-grey">
                                                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length} games
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {/* Previous Button */}
                                                    <button
                                                        onClick={() => handlePageChange(currentPage - 1)}
                                                        disabled={currentPage === 1}
                                                        className={`px-3 py-1 text-sm rounded-md transition-colors ${currentPage === 1
                                                            ? "text-primary-grey/50 cursor-not-allowed"
                                                            : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                                                            }`}
                                                    >
                                                        Previous
                                                    </button>

                                                    {/* Page Numbers */}
                                                    <div className="flex items-center gap-1">
                                                        {getPageNumbers().map((pageNumber, index) => (
                                                            <React.Fragment key={index}>
                                                                {pageNumber === '...' ? (
                                                                    <span className="px-2 text-primary-grey">...</span>
                                                                ) : (
                                                                    <button
                                                                        onClick={() => handlePageChange(pageNumber as number)}
                                                                        className={`px-3 py-1 text-sm rounded-md transition-colors ${currentPage === pageNumber
                                                                            ? "bg-blue-600 text-white"
                                                                            : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                                                                            }`}
                                                                    >
                                                                        {pageNumber}
                                                                    </button>
                                                                )}
                                                            </React.Fragment>
                                                        ))}
                                                    </div>

                                                    {/* Next Button */}
                                                    <button
                                                        onClick={() => handlePageChange(currentPage + 1)}
                                                        disabled={currentPage === totalPages}
                                                        className={`px-3 py-1 text-sm rounded-md transition-colors ${currentPage === totalPages
                                                            ? "text-primary-grey/50 cursor-not-allowed"
                                                            : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                                                            }`}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pt-14 flex justify-center gap-[14px] flex-col items-center">
                    <Icon icon="Video" />
                    <span className="font-bold text-[26px] text-white">QUICK GUIDE</span>
                    <span className="text-primary-grey text-sm">
                        Quick introduction on the basic features of the website.
                    </span>
                    <div className="bg-[#161620] opacity-90 flex gap-4 p-7 flex-col justify-center">
                        <span className="font-bold text-base text-white">
                            How the inventory system works
                        </span>
                        <span className="text-primary-grey text-sm">
                            View all your Steam trading cards organized by game sets. Each set shows the number of cards you have,
                            complete sets you can craft, and the XP you'll earn. Select the sets you want to withdraw and we'll
                            send them to your Steam inventory via trade offer. Make sure your Steam inventory is set to public
                            to view your cards.
                        </span>
                        <Icon icon="Img4" />
                    </div>
                </div>
            </div>
            {showModal && (
                <WithdrawCardModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    selectedGameKeys={selectedGames}
                    inventoryData={inventoryData}
                />
            )}
        </Layout>
    );
};

export default Inventory;