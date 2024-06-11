import axios from "axios";
import { HttpStatusCode } from "../models/HttpStatusCode";
import WebRequestError from "../models/WebRequestError";

class CoinGeckoApiClient {
  private restClient = axios.create({})
  private timeout = 7000

  public async getCoinDetail(
    coin: string
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coins/${coin}`
    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
  public async getCoinHistoryChart(
    coin: string,
    currency: string,
    days: string
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coins/${coin}/market_chart?vs_currency=${currency}&days=${days}`
    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
  public async getTrending(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/search/trending`
    
    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
  public async getCoinList(order_by: string): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coins?orderBy=${order_by}`

    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
  public async getStats(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/stats`
    
    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
  public async getMarkets(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    
    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
}

export default new CoinGeckoApiClient()