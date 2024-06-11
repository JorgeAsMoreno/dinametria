export interface ICoin {
  iconUrl: string
  name: string
  symbol: string
  uuid: string
  coinrankingUrl: string
}

export interface ICoinsResponse {
  data: {
    bestCoins: ICoin[]
    newestCoins: ICoin[]
    totalCoins: number
  }
  status: string
}

export interface ICoinsList {
  data: {
    stats: IStats
    coins: ICoins[]
  }
  status: string
}

export interface IStats {
  total: number
  totalCoins: number
  totalMarkets: number
  totalExchanges: number
  totalMarketCap: string
  total24hVolume: string
}

export interface ICoins {
  uuid: string
  symbol: string
  name: string
  color: string
  iconUrl: string
  marketCap: number
  price: number
  listedAt: number
  change: number
  rank: number
  sparkline: number[]
  coinrankingUrl: string
  btcPrice: number
  contractAddresses: []
}
