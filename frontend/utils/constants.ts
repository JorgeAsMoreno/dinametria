export const REQUESTS_API_URL = {
  getTrending: '/api/trending',
  getCoinDetail:(coin: string) => `/api/coins/${coin}`,
  getMarkets: '/api/markets',
  getStats: '/api/stats',
  getCoins: '/api/coins-list?orderBy=:orderBy'
}
