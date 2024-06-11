import React from 'react'
import S from './suggestions.styles'
import { ICoin } from '@/types/suggestions'

interface ISuggestions {
  results: ICoin[]
}

const Suggestions = ({
  results
}: ISuggestions) => {
  return (
    <S.Wrapper>
      {Object.values(results).map(result => (
        <S.StyledLink href={`/detail/${result.uuid}`} target='_blank'>
          <S.Result key={result.uuid}>
            <S.Icon
              alt={result.name}
              src={result.iconUrl}
            />
            <S.Name>{result.name}</S.Name>
          </S.Result>
        </S.StyledLink>
      ))}
    </S.Wrapper>
  )
}

export default Suggestions
