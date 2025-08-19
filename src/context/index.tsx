import React from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

import { config } from "../config/config";
import { restApi } from "./restApi";
import { showToast } from "./helper";

const INIT_STATE: InitStateObject = {
    isLoggedIn: false,
    userData: {
        fullName: "",
        email: "",
        id: "",
        avatar: "",
        tradeLink: "",
        joinedDate: 0,
        balance: 0,
        affiliateCode: "",
        affiliate: {
            referrals: 0,
            buyers: 0,
            totalProfit: 0
        },
        isVerifiedEmail: false
    },
    isLoading: false,
    steamLevel: 0,
    isOpenedMenu: false,
    authToken: "",
    paymentStatus: ""
}

const GlobalContext = React.createContext<any>(null);
const reducer = (state: InitStateObject, { type, payload }: ReducerObject) => {
    return { ...state, [type]: payload };
}

function useGlobalContext() {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    return context;
}

const storeData = async (value: any) => {
    return window.localStorage.setItem("userData", JSON.stringify(value))
}

const GlobalContextProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);
    const cookie = Cookies.get("authToken")
    const location = useLocation();

    const [ip, setIp] = React.useState("")
    const [deviceID, setDeviceID] = React.useState("")

    React.useEffect(() => {
        const getIP = async () => {
            try {
                const response = await fetch("https://api.ipify.org?format=json");
                const data = await response.json();
                setIp(data.ip)
                console.log("User's IP Address:", data.ip);
            } catch (error) {
                console.error("Error fetching IP address:", error);
            }
        };

        const getDeviceId = async () => {
            try {
                const fp = await FingerprintJS.load();
                const result = await fp.get();
                setDeviceID(result.visitorId);  // This is the unique device ID
            } catch (error) {
                console.error("Error getting device ID:", error);
                setDeviceID("unknown");
            }
        };

        getIP();
        getDeviceId()
    }, []);

    React.useEffect(() => {
        const updateRefCode = async () => {
            const params = new URLSearchParams(location.search);
            const refCode = params.get('ref');
            if (refCode && ip && deviceID) {
                const res = await restApi.postRequest("update-referrals", { ip, deviceID, refCode })

                if (res.status === 200) {
                    Cookies.set("refCode", res.data, { expires: 7 })
                    const expirationDate = new Date();
                    expirationDate.setTime(expirationDate.getTime() + (7 * 24 * 60 * 60 * 1000));
                    Cookies.set("refCode_expires", expirationDate.toLocaleString())
                } else if (res.status === 400) {
                    return showToast(res.msg, "error")
                }
            }
        }

        updateRefCode()
    }, [location, ip, deviceID]);

    const fetchData = async () => {
        try {
            const resp = await restApi.postRequest("get-user");

            if (resp.status === 200 && resp.data) {
                dispatch({ type: "userData", payload: resp.data });
                dispatch({ type: "authToken", payload: cookie })
                storeData(resp.data)
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Set default values if user data fetch fails
            dispatch({ type: "userData", payload: INIT_STATE.userData });
            dispatch({ type: "authToken", payload: "" })
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    React.useEffect(() => {
        (async () => {
            console.log(ip, deviceID)
            if (ip && deviceID) {
                await restApi.postRequest("update-ip-and-deviceID", { ip, deviceID })
            }
        })()
    }, [ip, deviceID])

    return (
        <GlobalContext.Provider
            value={React.useMemo(() => [
                state, { dispatch, storeData }
            ], [state])}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { useGlobalContext, GlobalContextProvider, config };
