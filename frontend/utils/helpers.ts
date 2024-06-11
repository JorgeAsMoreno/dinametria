import { AxiosResponse } from "axios";

export function checkStatus(resp: AxiosResponse) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.data
  } else {
    throw new Error(`HTTP Error: ${resp.status} - ${resp.statusText}`);
  }
}

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

export const formatNumberQuantity = (number: number) => {
  const suffixes = ["", "thousand", "million", "billion", "trillion"]
  const base = 1000
  let index = 0
  while (number >= base && index < suffixes.length - 1) {
    number /= base
    index++
  }
  return number.toFixed(2) + " " + suffixes[index]
}

export const formattedTimeStamp = (timestamp: number) => new Date(timestamp * 1000).toLocaleString()