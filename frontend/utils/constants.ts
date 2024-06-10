export const REQUESTS_API_URL = {
  getTrending: '/api/trending',
  getCoinDetail:(coin: string) => `/api/coins/${coin}`,
  getMarkets: '/api/markets',
  getHistoryChart: (
    coin_id: string,
    currency: string,
    days: string
  ) => `/api/history-chart?coin=bitcoin&currency=usd&days=7`,
}
