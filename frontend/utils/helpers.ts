import { AxiosResponse } from "axios";

export function checkStatus(resp: AxiosResponse) {
  if (resp.status >= 200 && resp.status < 300) {
    return resp.data
  } else {
    throw new Error(`HTTP Error: ${resp.status} - ${resp.statusText}`);
  }
}
