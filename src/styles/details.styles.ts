import styled from "styled-components"

const TopContent = styled.div`
  align-items: start;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  flex-direction: column;

  div {
    align-items: center;
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  justify-content: start;
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100vh;

  @media screen and (min-width: 1024px) {
    height: 100%;
  }
`

const Icon = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-right: .5em;

  @media screen and (min-width: 1024px) {
    height: 38px;
    width: 38px;
  }
`

const Name = styled.h3`
  color: #002358;
  font-size: 2.275em;
`

const Symbol = styled.p`
  color: #214a88;
  opacity: .6;
  margin-left: .5em;
`

const Price = styled.p`
  color: #002358;
  font-size: 1.725em;
  margin: .5em 0 0 0;

  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`

const Description = styled.div`
  display: flex;
  color: #214a88;
`

const Summary = styled.span`
  background: #cee1ff;
  border-radius: 4px;
  align-items: center;
  display: flex;
  padding: .425em;
  height: 40px;

  @media screen and (min-width: 1024px) {
    padding: .125em 1em;
  }
`

const Text = styled.p`
  color: #214a88;
  margin-left: 1em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  align-items: center;
  margin: auto 1em auto;
`

const Rank = styled.p`
  color: #214a88;
  opacity: .6;
  font-size: 2em;
  font-weight: bold;
`

const Change = styled.p<{
  change: number
}>`
  color: ${(props) => props.change < 0 ? '#ea3943' : '#16c784'};
  font-size: 1em;
  margin-left: .5em;
`

export default {
  TopContent,
  Icon,
  Name,
  Symbol,
  Summary,
  Text,
  Description,
  Price,
  Change,
  Rank,
  Wrapper
}
