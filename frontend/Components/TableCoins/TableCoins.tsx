import React, { useEffect, useState, useMemo } from 'react'
import { ICoins, ICoinsList } from '@/types/coins'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS_API_URL, REQUEST_API_STATUS } from '../../utils/constants'
import { useViewMobile } from '../../hooks/useViewMobile'
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io'
import { formatNumber, formatNumberQuantity } from '../../utils/helpers'
import S from './tablecoins.styles'
import Search from '../Search/Search'
import Spinner from '../Sipnner/Spinner'
import Dropdown from '../Dropdown/Dropdown'

const TableCoins = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
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
  const [inputSearch, setInputSearch] = useState<string>('')
  const isMobile = useViewMobile()

  useEffect(() => {
    setIsLoading(true)
    insecureFetchFromAPI(REQUESTS_API_URL.getCoins.replace(':orderBy', selectedFilterOption)).then(response => {
      if (response.status === REQUEST_API_STATUS.SUCCESS) {
        setCoins(response)
        setIsLoading(false)
      }
    }).catch((error) => {
      console.error(error)
      setIsLoading(false)
    })
  }, [selectedFilterOption])

  const onChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value)
  }

  const filteredList = useMemo(() => {
    return coins.data.coins.filter((e: ICoins) => {
      if((e.name).toString().toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())) {
        return e.name
      }
    })
  }, [inputSearch, coins.data.coins])

  if (isLoading) {
    return <Spinner />
  }

  return (
   <div>
      <S.TableControls>
        <S.Search>
          <p>All coins</p>
          <Search
            placeholder='search coin...'
            onChangeValue={onChangeInputValue}
          />
        </S.Search>
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
          {filteredList.map(coin => (
            <tr
              key={coin.uuid}
              onClick={() => window.open(`/detail/${coin.uuid}`, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <td>{coin.rank}</td>
              <td>
                {isMobile ? (
                  coin.symbol
                ) : (
                  <S.CoinInfo>
                    <S.Icon
                      alt={coin.name}
                      aria-label={coin.name}
                      src={coin.iconUrl}
                    />
                    {coin.name}
                    <S.Symbol>({coin.symbol})</S.Symbol>
                  </S.CoinInfo>
                )}
              </td>
              <td>{formatNumber(coin.price)}</td>
              {!isMobile && <td>{formatNumberQuantity(coin.marketCap)}</td>}
              <td
                style={{
                  color: coin.change < 0 ? '#ea3943' : '#16c784',
                }}
              >
                <span style={{ marginRight: '.5em' }}>
                  {coin.change < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />}
                </span>
                {coin.change}
              </td>
            </tr>
          ))}
        </S.Tbody>
      </S.Table>{
        filteredList.length === 0 &&
        <S.Empty>No hay resultados para tu busqueda...</S.Empty>
      }
    </div>   
  )
}

export default TableCoins
