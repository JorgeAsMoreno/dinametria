import React, { useEffect, useState } from 'react'
import { ITrending } from '@/types/trending'
import { insecureFetchFromAPI } from '@/requests/api'
import S from './header.styles'
import { REQUESTS_API_URL } from '../../utils/constants'
import Trending from '../Trending/Trending'
import Container from '../Container/Container'

const Header = () => {
  const [trendingData, setTrendingData] = useState<ITrending>({
    categories: [],
    coins: [],
    nfts: []
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getTrending).then((response) => {
      setTrendingData(response)
    }).catch(((error) => {
      console.error(error)
    }))
  }, [])

  return (
    <Container>
      <S.Header>
        <Trending
          title='Trending Coins'
          trendingData={trendingData.coins}
        />
      </S.Header>    
    </Container>
  )
}

export default Header
