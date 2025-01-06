import React from "react";
import { config } from "../config/config";

const INIT_STATE: InitStateObject = {
    isLoggedIn: false,
    user: {},
    isOpenedMenu: false
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
    return window.localStorage.setItem("user", value)
}

const getData = async () => {
    let init = {} as any
    try {
        const buf = window.localStorage.getItem("user")
        if (buf) {
            const json = JSON.parse(buf)
            Object.entries(json).map(([k, value]) => {
                init[k] = value;
            })
        }
    } catch (err) {
    }
    return init
}

const GlobalContextProvider = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    React.useEffect(() => {
        initSessionSetting()
    }, [])

    const initSessionSetting = async () => {
        try {
            const user = await getData();

            if (user) {
                dispatch({ type: 'user', payload: user })
            } else {
                // throw new ValidateError("Invalid authToken!")
            }

        } catch (error: any) {
            // setTimeout(() => { dispatch({ type: "showLoadingPage", payload: false }) }, 1000);
            console.error(error)
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
