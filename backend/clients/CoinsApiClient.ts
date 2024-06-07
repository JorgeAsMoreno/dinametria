import axios from "axios";
import { HttpStatusCode } from "../models/HttpStatusCode";
import WebRequestError from "../models/WebRequestError";

class CoinApiClient {
  private restClient = axios.create({})
  private timeout = 7000

  public async getCoinsList(): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_DOMAIN}/coins/list`

    return this.restClient
    .get(url, {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        'x-cg-pro-api-key': process.env.NEXT_PUBLIC_API_TOKEN
      }
    })
    .then(response => {
      return response
    })
    .catch((error) => {
      const status = error?.response?.status || HttpStatusCode.INTERNAL_SERVER_ERROR
      return Promise.reject(new WebRequestError(status, error.message))
    })
  }
}

export default new CoinApiClient()
