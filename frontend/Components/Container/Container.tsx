import React from 'react'
import S from './container.styles'

const Container = (
  { children }: {children: React.ReactNode}
) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}

export default Container
