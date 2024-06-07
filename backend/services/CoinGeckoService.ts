import CoinGeckoApiClient from "../clients/CoinGeckoApiClient";

class CoinGeckoService {
  public async getCoinDetail(
    coin: string
  ): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinDetail(coin)
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
  public async getMarkets(): Promise<any> {
    try {
      return await CoinGeckoApiClient.getMarkets()
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export default new CoinGeckoService()
