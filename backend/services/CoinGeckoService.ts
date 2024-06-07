import CoinGeckoApiClient from "../clients/CoinGeckoApiClient";

class CoinGeckoService {
  public async getCoinsList(): Promise<any> {
    try {
      return await CoinGeckoApiClient.getCoinsList()
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
}

export default new CoinGeckoService()
