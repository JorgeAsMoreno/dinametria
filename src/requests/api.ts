import { checkStatus } from "@/pages/utils/helpers";
import axios, { AxiosResponse } from "axios";

export async function insecureFetchFromAPI(path: string) {
  try {
    const response: AxiosResponse = await axios.get(path)
    return checkStatus(response)
  } catch (error) {
    console.error("Error fetching data:", error)
    throw new Error("Failed to fetch data")
  }
}
