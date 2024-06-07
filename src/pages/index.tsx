import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios.get('/api/trending').then(response => {
      console.log('res', response)
    }).catch(error => {
      console.log(error)
    })
  })
  return (
    <>
      Dinametria
    </>
  );
}
