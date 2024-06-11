import CoinGeckoApiClient from "../clients/CoinGeckoApiClient";

class CoinGeckoService {
  public async getCoinDetail(
    uuid: string
  ): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinDetail(uuid)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getCoinHistoryChart(
    uuid: string
  ): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinHistoryChart(uuid)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getTrending(): Promise<any> {
    try {
      return await CoinGeckoApiClient.getTrending()
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getStats(): Promise<any> {
    try {
      return await CoinGeckoApiClient.getStats()
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getCoinList(orderBy: string): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinList(
        orderBy
      )
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getCoinSuggestion(query: string): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinSuggestion(
        query
      )
    } catch (error) {
      return Promise.reject(error)
    }
  }
  public async getMarkets(): Promise<any> {
    try {
      return await CoinGeckoApiClient.getMarkets()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new CoinGeckoService()
