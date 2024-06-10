import styled from "styled-components";

const Title = styled.h3`
  color: #000;
  font-size: 2em;
  margin-bottom: .5em;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: -webkit-fill-available;
`


const Contents = styled.div`
  display: flex;
`


export default {
  Title,
  Wrapper,
  Contents
}
