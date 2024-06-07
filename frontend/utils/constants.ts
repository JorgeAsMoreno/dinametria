export const REQUESTS_API_URL = {
  getTrending: '/api/trending',
  getCoinDetail:(coin: string) => `/api/coins/${coin}`,
  getMarkets: '/api/markets'
}
