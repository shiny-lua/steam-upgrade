import React from "react";
import { config } from "../config/config";
import { restApi } from "./restApi";

const INIT_STATE: InitStateObject = {
    isLoggedIn: false,
    userData: {
        fullName: "",
        email: "",
        id: "",
        avatar: "",
        joinDate: "",
        tradeLink: ""
    },
    steamLevel: 0,
    isOpenedMenu: false,
    authToken: ""
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
    return window.localStorage.setItem("authToken", value)
}

const getData = async () => {
    return window.localStorage.getItem("authToken")
}

const GlobalContextProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    React.useEffect(() => {
        initSessionSetting()
    }, [])

    const initSessionSetting = async () => {
        try {
            const authToken = await getData() || "";
            // console.log("authToken", authToken)
            restApi.setAuthToken(authToken)
            if (!!authToken) {
                const loginStatus = await restApi.loginStatus(authToken);
                console.log("loginStatus", loginStatus);

                if (!!loginStatus?.status) {
                    const userData = {
                        fullName: loginStatus.fullName,
                        email: loginStatus.email,
                        id: loginStatus.id,
                        avatar: loginStatus.avatar,
                        joinedDate: loginStatus.joinedDate,
                        tradeLink: loginStatus.tradeLink
                    }

                    // console.log("userData::", userData)
                    dispatch({ type: "authToken", payload: authToken });
                    dispatch({ type: "userData", payload: userData });

                    // setTimeout(() => { dispatch({ type: "showLoadingPage", payload: false }) }, 1000);
                } else {
                    console.log("Invalid authToken!");
                }
            } else {
                console.log("Invalid authToken!");
            }
        } catch (err: any) {
            console.log("auth_token_invalid::", err.message);
            // setTimeout(() => { dispatch({ type: "showLoadingPage", payload: false }) }, 1000);
        }
    }

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
