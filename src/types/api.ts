export interface ITrending {
  categories: Category[]
  coins: Coin[]
  nfts: Nft[]
}
 
 export interface Category {
  coins_count: number
  data: CategoryData
  id: number
  market_cap_1h_change: number
  name: string
  slug: string
}
 
 export interface CategoryData {
  market_cap: number
  market_cap_btc: number
  market_cap_change_percentage_24h: { [key: string]: number }
  sparkline: string
  total_volume: number
  total_volume_btc: number
}
 
 export interface Coin {
  item: Item
}
 
 export interface Item {
  coin_id: number
  data: ItemData
  id: string
  large: string
  market_cap_rank: number
  name: string
  price_btc: number
  score: number
  slug: string
  small: string
  symbol: string
  thumb: string
}
 
 export interface ItemData {
  content: Content | null
  market_cap: string
  market_cap_btc: string
  price: number
  price_btc: string
  price_change_percentage_24h: { [key: string]: number }
  sparkline: string
  total_volume: string
  total_volume_btc: string
}
 
 export interface Content {
  description: string
  title: string
}
 
 export interface Nft {
  data: NftData
  floor_price_24h_percentage_change: number
  floor_price_in_native_currency: number
  id: string
  name: string
  native_currency_symbol: string
  nft_contract_id: number
  symbol: string
  thumb: string
}
 
 export interface NftData {
  content: Content | null
  floor_price: string
  floor_price_in_usd_24h_percentage_change: string
  h24_average_sale_price: string
  h24_volume: string
  sparkline: string
}

export interface TrendingTypes {
  coins_count: number
  data: CategoryData | NftData
  id: number
  market_cap_1h_change: number
  name: string
  slug: string
  item: {
    coin_id: number
    data: ItemData
    id: string
    large: string
    market_cap_rank: number
    name: string
    price_btc: number
    score: number
    slug: string
    small: string
    symbol: string
    thumb: string
  }
  floor_price_24h_percentage_change: number
  floor_price_in_native_currency: number
  native_currency_symbol: string
  nft_contract_id: number
  symbol: string
  thumb: string
}
