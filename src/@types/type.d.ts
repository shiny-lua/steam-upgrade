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
  steamInventory: {
    inventory: any[]
    totalGame: number
    totalItems: number
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

declare interface Item {
  id: string;
  name: string;
  marketHashName: string;
  type: string;
  category: string;
  image: string;
  quality: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

declare interface Case {
  id: string;
  name: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  casePrizes: CasePrize[];
}

declare enum CasePrizeType {
  ITEM = 'ITEM',
  NOTHING = 'NOTHING',
}

declare interface CasePrize {
  id: string;
  value: number;
  weight: number;
  prizeType: CasePrizeType;
  color: string | null;
  item: Item | null;
}

declare interface DailyFreeCaseRequirements {
  discordAccountLinked: boolean;
  inDiscordGuild: boolean;
  requiredSteamLevel: boolean;
  steamAccountLinked: boolean;
  tradeUrlSet: boolean;
}

declare interface DailyFreeCaseAvailability {
  requirements: DailyFreeCaseRequirements;
  caseAvailable: boolean;
  openedAt: string | null;
}
