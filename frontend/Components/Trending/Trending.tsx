import React from 'react'
import S from './trending.styles'
import Container from '../Container/Container'
import TrendingCard from '../TrendingCard/TrendingCard'
import { Coin } from '@/types/api'

interface ITrendingComponent {
  title: string
  trendingData: Coin[]
}

const Trending = ({ title, trendingData }: ITrendingComponent) => {
  return (
    <Container>
      <div>
        <S.Title>{title}</S.Title>
      </div>
      <S.TrendingList>
        {
          trendingData.slice(0,5).map(item => (
            <TrendingCard
              {...{item}}
            />
          ))
        }
      </S.TrendingList>
    </Container>
  )
}

export default Trending
