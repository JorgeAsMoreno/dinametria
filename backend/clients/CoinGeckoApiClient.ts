import axios from "axios"
import { HttpStatusCode } from "../models/HttpStatusCode"
import WebRequestError from "../models/WebRequestError"

class CoinGeckoApiClient {
  private restClient = axios.create({})
  private timeout = 7000

  public async getCoinDetail(
    uuid: string
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coin/${uuid}`
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
    uuid: string
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coin/${uuid}/history`
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
  public async getCoinSuggestion(query: string): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/search-suggestions?query=${query}`
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
}

export default new CoinGeckoApiClient()
