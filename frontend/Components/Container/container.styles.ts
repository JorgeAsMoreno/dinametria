import styled, { keyframes } from "styled-components"

const FadeIn = keyframes`
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  padding: 1em;
  width: -webkit-fill-available;
  animation: ${FadeIn} 0.5s forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media screen and (min-width: 768px) {
    padding: 5em 5em 0 5em;
  }
`

export default {
  Container
}
