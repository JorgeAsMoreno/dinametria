import React, { useEffect, useState } from 'react'
import Container from '../Container/Container'
import S from './tablecoins.styles'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS_API_URL } from '../../utils/constants'
import { ICoinsList } from '@/types/coins'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io'
import { useViewMobile } from '../../hooks/useViewMobile'
import { formatNumber, formatNumberQuantity } from '../../utils/helpers'
import Dropdown from '../Dropdown/Dropdown'

const TableCoins = () => {
  const [coins, setCoins] = useState<ICoinsList>({
    data: {
      stats: {
        total: 0,
        totalCoins: 0,
        totalMarkets: 0,
        totalExchanges: 0,
        totalMarketCap: '',
        total24hVolume: '',
      },
      coins: [{
        uuid: '',
        symbol: '',
        name: '',
        color: '',
        iconUrl: '',
        marketCap: 0,
        price: 0,
        listedAt: 0,
        change: 0,
        rank: 0,
        sparkline: [0],
        coinrankingUrl: '',
        btcPrice: 0,
        contractAddresses: [],
      }]
    },
    status: ''
  })
  const [selectedFilterOption, setSelectedFilterOption] = useState<string>('marketCap')
  const isMobile = useViewMobile()

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getCoins.replace(':orderBy', selectedFilterOption)).then(response => {
      if (response.status === 'success') {
        setCoins(response)
      }
    }).catch((error) => {
      console.error(error)
    })
  }, [selectedFilterOption])

  return (
   <Container>
      <S.TableControls>
        <p>All coins</p>
        <Dropdown
          title='Order by'
          options={['price', 'marketCap', '24hVolume', 'change', 'listedAt']}
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
        />
      </S.TableControls>
      <S.Table>
        <S.Thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Price</th>
            {
              !isMobile &&
              <th>Market Cap</th>
            }
            <th>Change</th>
          </tr>
        </S.Thead>
        <S.Tbody>
          {coins.data.coins.map(coin => (
            <tr key={coin.uuid}>
              <td>{coin.rank}</td>
              <td>
                {isMobile ?
                  coin.symbol :
                  <S.CoinInfo>
                    <S.Icon
                      alt={coin.name}
                      aria-label={coin.name}
                      src={coin.iconUrl}
                    />
                    {coin.name}
                    <S.Symbol>
                      ({coin.symbol})
                    </S.Symbol>
                  </S.CoinInfo>
                }
              </td>
              <td>{formatNumber(coin.price)}</td>
              {
                !isMobile &&
                <td>{formatNumberQuantity(coin.marketCap)}</td>
              }
              <td
                style={{
                  color: coin.change < 0 ? '#ea3943' : '#16c784',
                }}
              > 
                <span style={{
                  marginRight: '.5em'
                }}>
                  {coin.change < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />}
                </span>
                {coin.change}
              </td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>      
    </Container>   
  )
}

export default TableCoins
