import React from 'react'
import S from './search.styles'
import { FaSearch } from "react-icons/fa"

interface ISearch {
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
}

const Search = ({
  placeholder,
  onChangeValue
}: ISearch) => {
  return (
    <S.Wrapper>
      <S.Input
        aria-label='Search input'
        placeholder={placeholder}
        onChange={onChangeValue}
      />
      <S.Icon>
        <FaSearch />
      </S.Icon>
    </S.Wrapper>
  )
}

export default Search
