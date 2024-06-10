import { insecureFetchFromAPI } from '@/requests/api'
import React, { useEffect, useState } from 'react'
import { REQUESTS_API_URL } from '../../utils/constants'
import { IChart } from '@/types/chart'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

const HistoryChart = () => {
  const [historyChart, setHistoryChart] = useState<IChart>({
    prices: [[0]],
    market_caps: [[0]],
    total_volumes: [[0]]
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getHistoryChart('ethereum', 'usd', '7')).then(response => {
      setHistoryChart(response)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const labels = historyChart.prices.map(item => moment(item[0]).format('MMM DD'))
  const data = historyChart.prices.map(item => item[1])
  return (
    <>
    epa
    </>
  )
}

export default HistoryChart