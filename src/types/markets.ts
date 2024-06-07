export interface IMarkets {
  ath: number
  ath_change_percentage: number
  ath_date: Date
  atl: number
  atl_change_percentage: number
  atl_date: Date
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number | null
  high_24h: number
  id: string
  image: string
  last_updated: Date
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number | null
  name: string
  price_change_24h: number
  price_change_percentage_24h: number
  roi: Roi | null
  symbol: string
  total_supply: number | null
  total_volume: number
 }[]
 
 export interface Roi {
  currency: Currency
  percentage: number
  times: number
}
 
 export enum Currency {
  Btc = "btc",
  Eth = "eth",
  Usd = "usd",
}

export const defaultValuesMarkets = [{
  ath: 0,
  ath_change_percentage: 0,
  ath_date: new Date(),
  atl: 0,
  atl_change_percentage: 0,
  atl_date: new Date(),
  circulating_supply: 0,
  current_price: 0,
  fully_diluted_valuation: 0,
  high_24h: 0,
  id: '',
  image: '',
  last_updated: new Date(),
  low_24h: 0,
  market_cap: 0,
  market_cap_change_24h: 0,
  market_cap_change_percentage_24h: 0,
  market_cap_rank: 0,
  max_supply: 0,
  name: '',
  price_change_24h: 0,
  price_change_percentage_24h: 0,
  roi: {
    currency: Currency.Usd,
    percentage: 0,
    times: 0,
  },
  symbol: '',
  total_supply: 0,
  total_volume: 0,
}]
