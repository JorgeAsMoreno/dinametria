import React from 'react'
import S from './trending.styles'
import TrendingCard from '../TrendingCard/TrendingCard'
import { Coin } from '@/types/trending'

interface ITrendingComponent {
  title: string
  trendingData: Coin[]
}

const Trending = ({ title, trendingData }: ITrendingComponent) => {
  return (
    <S.Wrapper>
      <div>
        <S.Title>{title}</S.Title>
      </div>
      <div>
        {
          trendingData.slice(0,5).map(item => (
            <TrendingCard
              key={item.item.id}
              {...{item}}
            />
          ))
        }
      </div>
    </S.Wrapper>
  )
}

export default Trending
