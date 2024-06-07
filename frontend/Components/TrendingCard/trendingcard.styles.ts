import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid #f6f6f6;
  box-shadow: rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  padding: .5em 1em;
`

const Content = styled.div`
  align-items: center;
  display: flex;
`

const Score = styled.span`
  font-weight: 900;
  font-size: .9em;
`

const Image = styled.img`
  border-radius: 50%;
  margin: 0 .5em;

  @media screen and (min-width: 768px) {
    margin: 0 1em;
  }
`

const Name = styled.h2`
  font-size: 1.125em;
  font-weight: 500;
`

const Price = styled.p`
  font-weight: normal;
  font-weight: 600;
  font-size: 1.2em;
`

const Symbol = styled.p`
  color: #808a9d;
  margin: 0;

  @media screen and (min-width: 768px) {
    margin-left: .5em;
  }
`

export default {
  Wrapper,
  Score,
  Image,
  Name,
  Price,
  Content,
  Symbol
}
