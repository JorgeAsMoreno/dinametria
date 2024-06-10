import React from 'react';
import S from './coin.styles'

interface ICoin {
  iconUrl: string
  name: string
  symbol: string
}

const Coin = ({
  iconUrl,
  name,
  symbol,
}:ICoin) => {
  return (
    <S.CoinContainer
      href={`/detail/${name}`}
      target='_blank'
      rel='noreferrer'
    >
      <S.Content>
        <S.Image
          alt={name}
          aria-label={name}
          src={iconUrl}
        />
      </S.Content>
      <S.Content>
        <S.Name>
          {name}
        </S.Name>
        <S.Symbol>
          ({symbol})
        </S.Symbol>
      </S.Content>
    </S.CoinContainer>
  )
}

export default Coin
