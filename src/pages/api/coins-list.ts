// src/pages/api/coins.ts
import { NextApiRequest, NextApiResponse } from "next";
import { HttpStatusCode } from "../../../backend/models/HttpStatusCode";
import CoinGeckoService from "../../../backend/services/CoinGeckoService";
import WebRequestError from "../../../backend/models/WebRequestError";

const StatsEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { orderBy } = req.query
  try {
    const coins = await CoinGeckoService.getCoinList(
      orderBy as string
    )
    return res.status(HttpStatusCode.OK).json(coins)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default StatsEndpoint
