import React from 'react'
import Coin from '../Coin/Coin'
import S from './trending.styles'
import { ICoin } from '@/types/coins'

interface ITrending {
  title: string
  data: ICoin[]
}

const Trending = ({ title, data }: ITrending) => {
  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>{title}</S.Title>
      </S.Contents>
      <S.Contents>
        {
          Object.values(data).map(coin => (
            <Coin
              key={coin.uuid}
              symbol={coin.symbol}
              name={coin.name}
              iconUrl={coin.iconUrl}
              uuid={coin.uuid}
            />
          ))
        }
      </S.Contents>
    </S.Wrapper>
  )
}

export default Trending
