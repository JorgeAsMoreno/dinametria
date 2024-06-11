export interface ICoinDetails {
  status: string
  data: {
    coin: {
      uuid: string
      symbol: string
      name: string
      description: string
      color: string
      iconUrl: string
      websiteUrl: string
      links: [
        {
          name: string
          url: string
          type: string
        }
      ]
      supply: {
        confirmed: boolean
        supplyAt: number
        circulating: number
        total: number
        max: number
      }
      marketCap: number
      fullyDilutedMarketCap: number
      price: number
      btcPrice: number
      priceAt: number
      change: number
      rank: number
      numberOfMarkets: number
      numberOfExchanges: number
      sparkline: [number]
      allTimeHigh: {
        price: number
        timestamp: number
      }
      coinrankingUrl: string
      lowVolume: boolean
      listedAt: number
      notices: [
        {
          type: string
          value:string
        }
      ]
      contractAddresses: []
      tags: [
        string
       ]
    }
  }
}