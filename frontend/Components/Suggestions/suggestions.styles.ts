import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px;
  border-radius: 8px;
  position: absolute;
  left: -1em;
  bottom: -26em;
  z-index: 10;
  background: #fff;

  @media screen and (min-width: 1024px) {
    left: -3em;
    bottom: -31em;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Name = styled.h3`
  color: #214a88;
  font-weight: 300;
  font-size: 1em;

  @media screen and (min-width: 1024px) {
    font-size: 1.125em;
  }
`

const Icon = styled.img`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: .5em;

  @media screen and (min-width: 1024px) {
    height: 28px;
    width: 28px;
  }
`

const Result = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  transition: .4s;
  cursor: pointer;

  &:hover {
    background: #cee1ff;
  }
`

export default {
  Wrapper,
  Result,
  Name,
  Icon,
  StyledLink
}
