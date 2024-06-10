import React from 'react'
import S from './trending.styles'
import { ICoin } from '@/types/coins'
import Coin from '../Coin/Coin'

interface ITrending {
  title: string
  data: ICoin
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
              symbol={coin.symbol}
              key={coin.uuid}
              name={coin.name}
              iconUrl={coin.iconUrl}
            />
          ))
        }
      </S.Contents>
    </S.Wrapper>
  )
}

export default Trending
