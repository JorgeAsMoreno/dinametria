export interface ICoin {
  iconUrl: string
  name: string
  symbol: string
  uuid: string
  coinrankingUrl: string
}

export interface ICoinsResponse {
  data: {
    bestCoins: ICoin
    newestCoins: ICoin
    totalCoins: number
  }
  status: string
}
