import React from 'react'
import S from './trendingcard.styles'
import { Coin } from '@/types/api'

interface ITrendingCard {
  item: Coin
}
const TrendingCard = ({ item }: ITrendingCard) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Score>
          {item.item.score}
        </S.Score>
        <S.Image
          src={item.item.thumb}
        />
        <S.Name>
          {item.item.name}
        </S.Name>
        <S.Symbol>
          ({item.item.symbol})
        </S.Symbol>
      </S.Content>
      <S.Content>
        <S.Price>{(item.item.data.price).toFixed(4)}</S.Price>
      </S.Content>
    </S.Wrapper>
  )
}

export default TrendingCard
