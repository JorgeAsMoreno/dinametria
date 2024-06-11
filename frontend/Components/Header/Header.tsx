import React, { useEffect, useState } from 'react'
import { ICoinsResponse } from '@/types/coins'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS_API_URL, REQUEST_API_STATUS } from '../../utils/constants'
import S from './header.styles'
import Trending from '../Trending/Trending'
import Container from '../Container/Container'

const Header = () => {
  const [statsData, setStatsData] = useState<ICoinsResponse>({
    data: {
      newestCoins: [{
        iconUrl: '',
        name: '',
        uuid: '',
        coinrankingUrl: '',
        symbol: ''
      }],
      bestCoins: [{
        iconUrl: '',
        name: '',
        uuid: '',
        coinrankingUrl: '',
        symbol: ''
      }],
      totalCoins: 0
    },
    status: ''
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getStats).then((response) => {
      if (response.status === REQUEST_API_STATUS.SUCCESS) {
        setStatsData(response)
      }
    }).catch(((error) => {
      console.error(error)
    }))
  }, [])

  return (
    <div>
      <S.Header>
        <Trending
          data={statsData.data.bestCoins}
          title='Best Coins'
        />
        <Trending
          data={statsData.data.newestCoins}
          title='Newest Coins'
        />
      </S.Header>
    </div>
  )
}

export default Header
