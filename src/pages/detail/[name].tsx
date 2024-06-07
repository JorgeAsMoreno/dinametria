import React, { useEffect, useState } from 'react'
import { insecureFetchFromAPI } from '@/requests/api'
import { GetServerSideProps } from 'next'
import { REQUESTS_API_URL } from '../../../frontend/utils/constants'
import { ICoinRoot } from '@/types/coins'
import Container from '../../../frontend/Components/Container/Container'

interface ICoinDetail {
  coin: string
}

const CoinDetail = ({ coin }: ICoinDetail) => {
  const [coinDetails, setCoinDetails] = useState<ICoinRoot>()
  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getCoinDetail(coin).toLocaleLowerCase()).then((response) => {
      setCoinDetails(response)
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <Container>
      {coinDetails?.name}
    </Container>
  )
}

export default CoinDetail

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const params = query.name
    return {
      props: {
        coin: params
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