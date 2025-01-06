interface ReducerObject {
    type: string
    payload: any
}

interface InitStateObject {
    isLoggedIn: false
    isOpenedMenu: false
    user: any
}

type GlobalContextType = [
    InitStateObject,

    {
        dispatch: (data: ReducerObject) => void
        storeData: (authToken: any) => void
    }
]
