// src/pages/api/coins.ts
import { NextApiRequest, NextApiResponse } from "next";
import { HttpStatusCode } from "../../../backend/models/HttpStatusCode";
import CoinsService from "../../../backend/services/CoinGeckoService";
import WebRequestError from "../../../backend/models/WebRequestError";

const CoinsListEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const coins = await CoinsService.getCoinsList()
    return res.status(HttpStatusCode.OK).json(coins)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default CoinsListEndpoint
