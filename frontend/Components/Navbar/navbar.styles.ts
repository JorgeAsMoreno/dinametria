import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.nav`
  padding: 1.5em;
  box-shadow: rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    padding: 1.5em 2.5em;
  }
`

const Home = styled(Link)`
  font-size: 1.875em;
  text-decoration: none;
  color: #214a88;
  font-weight: bold;
  font-size: 1.125em;

  @media screen and (min-width: 1024px) {
    font-size: 2.125em;
  }
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
`

export default {
  Wrapper,
  Home,
  SearchContainer
}
