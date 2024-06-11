import styled from "styled-components";

const Title = styled.h3`
  color: #000;
  font-size: 1.5em;
  margin-bottom: .5em;

  @media screen and (min-width: 1024px) {
    font-size: 2em;
  }
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: -webkit-fill-available;
  box-shadow: rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px;
  border-radius: 8px;
  padding: 2em 1em;
`


const Contents = styled.div`
  display: flex;
`


export default {
  Title,
  Wrapper,
  Contents
}
