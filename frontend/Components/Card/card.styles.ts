import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid #f0f6ff;
  display: flex;
  justify-content: space-between;
  gap: .5em;
  padding: .875em 1em;
  cursor: pointer;
  transition: .4s;
  
  &:hover {
    background-color: #f0f6ff;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`

const Name = styled.h3`
  font-size: 1.425em;
  font-weight: 500;
  margin: 0 .5em;
`

const Symbol = styled.h5`
  color: #808a9d;
  font-size: 1.125em;
`

const Price = styled.p`
  font-weight: bold;
`

const Left = styled.div`
  align-items: center;
  display: flex;
  width: 40%;
`

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2em;
  width: 20%;
`

const Right = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  width: 40%;
`

const MarketCap = styled.p`
  font-weight: bold;
  font-size: 1.125em;
  margin-bottom: .5em;
`

const MarketCapPrice = styled.p`
  font-weight: 200;

`

const PricePercentage = styled.p<{
  color: string
}>`
  align-items: center;
  color: ${(props) => props.color};
  display: flex;
  gap: .5em;
`

export default {
  Wrapper,
  Image,
  Name,
  Symbol,
  Price,
  Left,
  Middle,
  Right,
  PricePercentage,
  MarketCap,
  MarketCapPrice
}