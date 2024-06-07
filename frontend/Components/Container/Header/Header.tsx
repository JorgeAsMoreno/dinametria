import React, { useEffect, useState } from 'react'
import { ITrending } from '@/types/api'
import { insecureFetchFromAPI } from '@/requests/api'
import S from './header.styles'
import Trending from '../../Trending/Trending'
import { REQUESTS_API_URL } from '../../../utils/constants'

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
    <S.Header>
      <Trending
        title='Trending Coins'
        trendingData={trendingData.coins}
      />
    </S.Header>    
  )
}

export default Header
