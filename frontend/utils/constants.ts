export const REQUESTS_API_URL = {
  getCoinDetail:(uuid: string) => `/api/coin/${uuid}`,
  getStats: '/api/stats',
  getCoins: '/api/coins-list?orderBy=:orderBy',
  getHistoryPrice: '/api/history?uuid=:uuid',
  getCoinSuggestion: '/api/suggestion?query=:suggestion'
}

export enum REQUEST_API_STATUS {
  SUCCESS = 'success',
  FAILED = 'failed',
}
