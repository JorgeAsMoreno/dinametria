import { NextApiRequest, NextApiResponse } from 'next';
import CoinGeckoService from '../../../backend/services/CoinGeckoService';
import { HttpStatusCode } from '../../../backend/models/HttpStatusCode';
import WebRequestError from '../../../backend/models/WebRequestError';

interface HistoryChartRequestQuery {
  coin: string;
  currency: string;
  days: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {  
  try {
    const { coin, currency, days} = req.query
    const result = await CoinGeckoService.getCoinHistoryChart(
      coin as string,
      currency as string,
      days as string
    )
    return res.status(HttpStatusCode.OK).json(result)
  } catch (error) {
    const webRequestError = error as WebRequestError
    return res.status(webRequestError.status).json({ message: webRequestError.message })
  }
}

export default handler
