interface ReducerObject {
    type: string
    payload: any
}

interface InitStateObject {
    isLoggedIn: boolean
    isOpenedMenu: boolean
    userData: any 
    authToken: string
    steamLevel: number
}

type GlobalContextType = [
    InitStateObject,

    {
        dispatch: (data: ReducerObject) => void
        storeData: (authToken: any) => void
    }
]
