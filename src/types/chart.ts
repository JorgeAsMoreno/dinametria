export interface IHistoryPrice {
  status: string
  data: {
    change: number
    history: [
      {
        price: number
        timestamp: number
      }
    ]
  }
}
