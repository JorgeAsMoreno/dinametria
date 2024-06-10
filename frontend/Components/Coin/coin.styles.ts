import Link from "next/link";
import styled from "styled-components";

const CoinContainer = styled(Link)`
  color: #000;
  margin: 0 2em;
  text-decoration: none;
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Image = styled.img`
  border-radius: 50%;
  width: 68px;
  height: 68px;
  border: 3px solid blue;
  padding: 2px;
`

const Name = styled.h3`
  color: #000;
`

const Symbol = styled.p`
  color: #808a9d;
`

export default {
  CoinContainer,
  Image,
  Name,
  Symbol,
  Content
}
