import { IMarkets } from '@/types/markets'
import React from 'react'
import S from './card.styles'
import { useViewMobile } from '../../hooks/useViewMobile'
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import Link from 'next/link';

interface ICard {
  coin: IMarkets
}

const Card = ({ coin }: ICard) => {
  const isMobile = useViewMobile()

  return (
    <S.Wrapper  href={`/detail/${coin.name.toLocaleLowerCase()}`} target='_blank' rel='noreferrer'>
      <S.Left>
        <S.Image
          alt={coin.name}
          aria-label={coin.name}
          src={coin.image}
        />
        {
          isMobile ?
          <S.Symbol>({coin.symbol})</S.Symbol> :
          <>
            <S.Name>{coin.name}</S.Name>
            <S.Symbol>({coin.symbol})</S.Symbol>
          </>
        }
      </S.Left>
      <S.Middle>
        <S.Price>${coin.current_price}</S.Price>
        {
          !isMobile &&
          <S.PricePercentage color={coin.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'}>
            {
              coin.price_change_percentage_24h < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />
            }
            {coin.price_change_percentage_24h}
          </S.PricePercentage>
        }
      </S.Middle>
      {
        !isMobile &&
        <S.Right>
          <S.MarketCap>Coin Marketcap</S.MarketCap>
          <S.MarketCapPrice>{coin.market_cap}</S.MarketCapPrice>
        </S.Right>
      }
    </S.Wrapper>
  )
}

export default Card
