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
            <React.Fragment key={coin.uuid}>
              <Coin
                symbol={coin.symbol}
                name={coin.name}
                iconUrl={coin.iconUrl}
              />
            </React.Fragment>
          ))
        }
      </S.Contents>
    </S.Wrapper>
  )
}

export default Trending
