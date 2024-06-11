import React from 'react';
import S from './coin.styles'

interface ICoin {
  iconUrl: string
  name: string
  symbol: string
  uuid: string
}

const Coin = ({
  iconUrl,
  name,
  symbol,
  uuid
}:ICoin) => {
  return (
    <S.CoinContainer
      href={`/detail/${uuid}`}
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
