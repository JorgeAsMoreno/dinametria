import React, { useEffect, useState } from 'react'
import { insecureFetchFromAPI } from '@/requests/api'
import { GetServerSideProps } from 'next'
import { REQUESTS_API_URL } from '../../../frontend/utils/constants'
import Container from '../../../frontend/Components/Container/Container'
import Chart from '../../../frontend/Components/Chart/Chart'

interface ICoinDetail {
  coin: string
}

const CoinDetail = ({ coin }: ICoinDetail) => {
  const [coinDetails, setCoinDetails] = useState()

  return (
    <Container>
      epale
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