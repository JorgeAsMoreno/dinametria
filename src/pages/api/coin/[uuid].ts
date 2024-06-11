// src/pages/api/coins.ts
import { NextApiRequest, NextApiResponse } from "next";
import { HttpStatusCode } from "../../../../backend/models/HttpStatusCode";
import CoinGeckoService from "../../../../backend/services/CoinGeckoService";
import WebRequestError from "../../../../backend/models/WebRequestError";

const CoinsListEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { uuid } = req.query
    const response = await CoinGeckoService.getCoinDetail(
      uuid as string
    )
    return res.status(HttpStatusCode.OK).json(response)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default CoinsListEndpoint
