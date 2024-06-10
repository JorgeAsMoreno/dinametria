// src/pages/api/coins.ts
import { NextApiRequest, NextApiResponse } from "next";
import { HttpStatusCode } from "../../../backend/models/HttpStatusCode";
import CoinGeckoService from "../../../backend/services/CoinGeckoService";
import WebRequestError from "../../../backend/models/WebRequestError";

const StatsEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const trending = await CoinGeckoService.getStats()
    return res.status(HttpStatusCode.OK).json(trending)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default StatsEndpoint
