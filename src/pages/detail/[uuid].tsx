import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { ICoinDetails } from '@/types/coin-detail'
import { insecureFetchFromAPI } from '@/requests/api'
import { formatNumber } from '../../../frontend/utils/helpers'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io'
import { REQUESTS_API_URL } from '../../../frontend/utils/constants'
import S from '../../styles/details.styles'
import HistoryChart from '../../../frontend/Components/Chart/Chart'
import Container from '../../../frontend/Components/Container/Container'

interface ICoinDetail {
  uuid: string
}

const CoinDetail = ({ uuid }: ICoinDetail) => {
  const [coinDetails, setCoinDetails] = useState<ICoinDetails>({
    status: '',
    data: {
      coin: {
        uuid: '',
        symbol: '',
        name: '',
        description: '',
        color: '',
        iconUrl: '',
        websiteUrl: '',
        links: [
          {
            name: '',
            url: '',
            type: '',
          }
        ],
        supply: {
          confirmed: false,
          supplyAt: 0,
          circulating: 0,
          total: 0,
          max: 0,
        },
        marketCap: 0,
        fullyDilutedMarketCap: 0,
        price: 0,
        btcPrice: 0,
        priceAt: 0,
        change: 0,
        rank: 0,
        numberOfMarkets: 0,
        numberOfExchanges: 0,
        sparkline: [0],
        allTimeHigh: {
          price: 0,
          timestamp: 0,
        },
        coinrankingUrl: '',
        lowVolume: false,
        listedAt: 0,
        notices: [
          {
            type: '',
            value: '',
          }
        ],
        contractAddresses: [],
        tags: [''],
      }      
    },
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getCoinDetail(uuid)).then(response => {
      if (response.status === 'success') {
        setCoinDetails(response)
      }
    }).catch(error => {
      console.error(error)
    })
  }, [])

  const coin = coinDetails.data.coin

  return (
    <Container>
      <S.Wrapper>
        <S.TopContent>
          <div>
            <S.Rank>
              #{coin.rank}
            </S.Rank>
            <S.Icon
              alt={coin.name}
              src={coin.iconUrl}
              aria-label={coin.description}
            />
            <S.Name>
              {coin.name}
            </S.Name>
            <S.Symbol>
              {coin.symbol}
            </S.Symbol>
          </div>
          <div>
            <S.Price>
              ${formatNumber(coin.price)}
            </S.Price>
            <S.Change
              change={coin.change}
            >
              <span style={{
                marginRight: '.125em'
              }}>
                {coin.change < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />}
              </span>
              {coin.change}
            </S.Change>
          </div>
        </S.TopContent>
        <h3>{coin.name}</h3>
        <HistoryChart
          {...{uuid}}
          coinName={coin.name}
        />
        <S.Description>
          <S.Summary>Summary</S.Summary>
          <S.Text>
            {coin.description}
          </S.Text>
        </S.Description>
      </S.Wrapper>
    </Container>
  )
}

export default CoinDetail

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const params = query.uuid
    return {
      props: {
        uuid: params
      },
    };
  } catch (error) {
    console.error('Error:', error)
    return {
      props: {
        error: 'Failed to fetch data',
      },
    }
  }
}
