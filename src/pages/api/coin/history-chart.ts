import { NextApiRequest, NextApiResponse } from 'next'
import CoinGeckoService from '../../../../backend/services/CoinGeckoService'
import { HttpStatusCode } from '../../../../backend/models/HttpStatusCode'
import WebRequestError from '../../../../backend/models/WebRequestError'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { uuid } = req.query
    const response = await CoinGeckoService.getCoinHistoryChart(uuid as string)
    return res.status(HttpStatusCode.OK).json(response)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default handler
