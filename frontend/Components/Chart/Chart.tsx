import React, { useEffect, useState } from 'react'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS_API_URL } from '../../utils/constants'
import { IHistoryPrice } from '@/types/chart'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

interface IHistoryChart {
  uuid: string
  coinName: string
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const HistoryChart = ({
  uuid,
  coinName
}:IHistoryChart) => {
  const [prices, setPrices] = useState<IHistoryPrice>({
    status: '',
    data: {
      change: 0,
      history: [{
        price: 0,
        timestamp: 0
      }]
    }
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getHistoryPrice.replace(':uuid', uuid)).then((response) => {
      if (response.status === 'success') {
        setPrices(response)
      }
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };
  
  const labels = prices.data.history.map(price => { return price.timestamp })
  const data = {
    labels,
    datasets: [
      {
        label: coinName,
        data: prices.data.history.map((price) => price.price),
        borderColor: '#126bff',
        backgroundColor: '#126bff',
      },
    ],
  };

  
  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}

export default HistoryChart