interface ReducerObject {
    type: string
    payload: any
}

interface InitStateObject {
    isLoggedIn: boolean
    isOpenedMenu: boolean
    userData: {
        fullName: string
        email: string
        id: string
        avatar: string
        joinedDate: number
        tradeLink: string
        balance: number
        affiliateCode: string
        affiliate: {
            referrals: number
            buyers: number
            totalProfit: number
        },
        isVerifiedEmail: boolean
    }
    authToken: string
    steamLevel: number
    paymentStatus: string
    isLoading: boolean
}

type GlobalContextType = [
    InitStateObject,

    {
        dispatch: (data: ReducerObject) => void
        storeData: (authToken: any) => void
    }
]
