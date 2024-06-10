import React, { useEffect, useState } from 'react'
import Container from '../Container/Container'
import { IMarkets, defaultValuesMarkets } from '@/types/markets'
import { REQUESTS_API_URL } from '../../utils/constants'
import { insecureFetchFromAPI } from '@/requests/api'
import S from './markets.styles'
import Card from '../Card/Card'

const Markets = () => {
  const [marketsData, setMarketsData] = useState<IMarkets[]>(defaultValuesMarkets)

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getStats).then((response) => {
      setMarketsData(response)
    }).catch(((error) => {
      console.error(error)
    }))
  }, [])

  return (
    <Container>
      <S.Title>Stats</S.Title>
      <div>
        
      </div>
    </Container>
  )
}

export default Markets
