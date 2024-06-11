import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2em;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export default {
  Header
}
