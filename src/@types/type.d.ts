interface ReducerObject {
    type: string
    payload: any
}

interface InitStateObject {
    isLoggedIn: false
    isOpenedMenu: false
    userData: any 
    authToken: string
}

type GlobalContextType = [
    InitStateObject,

    {
        dispatch: (data: ReducerObject) => void
        storeData: (authToken: any) => void
    }
]
