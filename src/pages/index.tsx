
import { useEffect, useState } from "react";
import Trending from "../../frontend/Components/Trending/Trending";
import { ITrending } from "@/types/api";
import axios from "axios";
import { insecureFetchFromAPI } from "@/requests/api";
import { REQUESTS_API_URL } from "./utils/constants";
import { GetServerSideProps } from "next";
import { error } from "console";

export default function Home() {
  const [trendingData, setTrendingData] = useState<ITrending>({
    categories: [],
    coins: [],
    nfts: []
  })

  useEffect(() => {
    insecureFetchFromAPI(REQUESTS_API_URL.getTrending).then((response) => {
      setTrendingData(response)
    }).catch((error => {
      console.error(error)
    }))
  }, [])
  return (
    <>
      <Trending
        {...{
          trendingData
        }}
      />
    </>
  )
}
