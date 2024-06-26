import React, { useEffect, useState } from 'react'
import S from './navbar.styles'
import Search from '../Search/Search'
import { insecureFetchFromAPI } from '@/requests/api'
import { REQUESTS_API_URL } from '../../utils/constants'
import Suggestions from '../Suggestions/Suggestions'
import { ICoin } from '@/types/suggestions'

const Navbar = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<ICoin[]>([{
    name: '',
    price: 0,
    uuid: '',
    iconUrl: '',
    symbol: ''
  }])

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    insecureFetchFromAPI(REQUESTS_API_URL.getCoinSuggestion.replace(':suggestion', event.target.value)).then(response => {
      setSuggestions(response.data.coins)
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <S.Wrapper>
      <div>
        <S.Home
          href={'/'}
        >
          Dinametria
        </S.Home>
      </div>
      <S.SearchContainer>
        <Search
          placeholder='Search...'
          onChangeValue={handleChangeInputValue}
        />
        {
          inputValue.length > 0 &&
          <Suggestions
            results={suggestions}
          />
        }
      </S.SearchContainer>
    </S.Wrapper>    
  )
}

export default Navbar
