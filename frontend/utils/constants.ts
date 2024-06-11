export const REQUESTS_API_URL = {
  getTrending: '/api/trending',
  getCoinDetail:(uuid: string) => `/api/coin/${uuid}`,
  getMarkets: '/api/markets',
  getStats: '/api/stats',
  getCoins: '/api/coins-list?orderBy=:orderBy',
  getHistoryPrice: '/api/history?uuid=:uuid'
}
