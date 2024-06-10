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
  text-align: center;
`

const Image = styled.img`
  border-radius: 50%;
  border: 3px solid blue;
  padding: 2px;
  height: 48px;
  width: 48px;

  @media screen and (min-width: 1024px) {
    font-size: 1em;
    height: 68px;
    width: 68px;
  }
`

const Name = styled.h3`
  color: #000;
  font-size: .875em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
    width: 65px;

  @media screen and (min-width: 1024px) {
    font-size: 1.125em;
    width: auto;
  }
`

const Symbol = styled.p`
  color: #808a9d;
  font-size: .875em;

  @media screen and (min-width: 1024px) {
    font-size: 1em;
  }
`

export default {
  CoinContainer,
  Image,
  Name,
  Symbol,
  Content
}
