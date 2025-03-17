import React from "react";
import Cookies from "js-cookie";

import { config } from "../config/config";
import { restApi } from "./restApi";

const INIT_STATE: InitStateObject = {
    isLoggedIn: false,
    userData: {
        fullName: "",
        email: "",
        id: "",
        avatar: "",
        tradeLink: "",
        joinedDate: 0,
        balance: 0
    },
    lsLoading: false,
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

const getData = async () => {
    return window.localStorage.getItem("authToken")
}

const GlobalContextProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    // React.useEffect(() => {
    //     initSessionSetting()
    // }, [])

    // const initSessionSetting = async () => {
    //     try {
    //         const authToken = Cookies.get("authToken") || "";
    //         // console.log("authToken", authToken)
    //         if (!!authToken) {
    //             const userData = JSON.parse(window.localStorage.getItem("userData") || "{}")
    //             dispatch({ type: "userData", payload: userData });
    //             dispatch({ type: "authToken", payload: authToken });
    //         }  
    //     } catch (err: any) {
    //         console.log("auth_token_invalid::", err.message);
    //         // setTimeout(() => { dispatch({ type: "showLoadingPage", payload: false }) }, 1000);
    //     }
    // }

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
