import React, { useEffect, useState } from 'react'
import { insecureFetchFromAPI } from '@/requests/api'
import S from './header.styles'
import { REQUESTS_API_URL } from '../../utils/constants'
import Trending from '../Trending/Trending'
import Container from '../Container/Container'
import { ICoinsResponse } from '@/types/coins'

const Header = () => {
  const [statsData, setStatsData] = useState<ICoinsResponse>({
    data: {
      newestCoins: {
        iconUrl: '',
        name: '',
        uuid: '',
        coinrankingUrl: '',
        symbol: ''
      },
      bestCoins: {
        iconUrl: '',
        name: '',
        uuid: '',
        coinrankingUrl: '',
        symbol: ''
      },
      totalCoins: 0
    },
    status: ''
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getStats).then((response) => {
      if (response.status === 'success') {
        setStatsData(response)
      }
    }).catch(((error) => {
      console.error(error)
    }))
  }, [])

  return (
    <Container>
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
    </Container>
  )
}

export default Header
